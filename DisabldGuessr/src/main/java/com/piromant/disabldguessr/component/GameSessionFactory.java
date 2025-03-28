package com.piromant.disabldguessr.component;

import com.piromant.disabldguessr.services.NotificationService;
import com.piromant.disabldguessr.services.PointsService;
import lombok.AllArgsConstructor;
import org.springframework.scheduling.TaskScheduler;
import org.springframework.stereotype.Component;

import java.util.Set;

@Component
public class GameSessionFactory {

    private final PointsService pointsService;
    private final NotificationService notificationService;
    private final TaskScheduler taskScheduler;

    public GameSessionFactory(PointsService pointsService, NotificationService notificationService, TaskScheduler taskScheduler) {
        this.pointsService = pointsService;
        this.notificationService = notificationService;
        this.taskScheduler = taskScheduler;
    }

    public GameSession createGameSession(String sessionId, Set<String> users) {
        GameSession session =  new GameSession(pointsService, notificationService, taskScheduler);
        session.initialize(sessionId, users);
        return session;
    }

}
