package com.piromant.disabldguessr.component;

import com.piromant.disabldguessr.component.notifications.Notification;
import com.piromant.disabldguessr.model.Point;
import com.piromant.disabldguessr.model.Result;
import com.piromant.disabldguessr.services.NotificationService;
import com.piromant.disabldguessr.services.PointsService;
import org.springframework.context.annotation.Scope;
import org.springframework.scheduling.TaskScheduler;
import org.springframework.stereotype.Component;

import java.time.Instant;
import java.util.LinkedList;
import java.util.List;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;

@Component
@Scope("prototype")
public class GameSession {

    private final PointsService pointsService;
    private final NotificationService notificationService;
    private final TaskScheduler taskScheduler;

    private String sessionId;
    private Set<String> users;
    private final ConcurrentHashMap<String, LinkedList<Result>> results = new ConcurrentHashMap<>();

    private volatile boolean isWaitingForPoint = false;
    private final Object lock = new Object();
    private Point curPoint;
    private Instant startRoundTime;

    public GameSession(PointsService pointsService, NotificationService notificationService, TaskScheduler taskScheduler) {
        this.pointsService = pointsService;
        this.notificationService = notificationService;
        this.taskScheduler = taskScheduler;
    }

    public void initialize(String sessionId, Set<String> users) {
        this.sessionId = sessionId;
        this.users = users;
    }

    public void start(){
        for(String user : this.users){
            this.notificationService.notifyUser(new Notification(this.sessionId, "start"), user);
            this.results.put(user, new LinkedList<>());
            this.results.get(user).add(null);
        }
        this.taskScheduler.schedule(this::sendNextPoint, Instant.now().plusSeconds(1));
        this.startRoundTime = Instant.now();
    }

    public void getReadyToNextPoint(String username, Point userGuess) {
        Result lastUserResult = this.results.get(username).getLast();
        if(lastUserResult == null){
            this.results.get(username).removeLast();
            this.results.get(username).add(new Result(userGuess, this.curPoint, Instant.now().getEpochSecond() - this.startRoundTime.getEpochSecond()));
        }
        synchronized (this.lock) {
            if(this.isWaitingForPoint){
                return;
            }
            this.isWaitingForPoint = true;
        }

        for(String user : this.users){
            this.notificationService.notifyUser(new Notification(this.sessionId, "next point"), user);
        }

        this.taskScheduler.schedule(() -> {
                sendNextPoint();
                for(String user : this.users){
                    this.results.get(user).add(null);
                }
                this.isWaitingForPoint = false;
            }, Instant.now().plusSeconds(15)
        );

    }

    public void sendNextPoint() {
        this.curPoint = this.pointsService.randomPoint();
        for(String user : this.users){
            Integer score = 0;
            if(this.results.get(user).getLast() != null){
                score = this.results.get(user).getLast().getScore();
            }
            this.notificationService.notifyUser(new Notification(this.sessionId, score.toString()), user);
        }
    }

    public void endGame(){
        for(String user : this.users){
            this.notificationService.notifyUser(new Notification(this.sessionId, "end"), user);
        }
    }
}
