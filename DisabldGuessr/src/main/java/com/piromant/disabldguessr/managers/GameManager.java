package com.piromant.disabldguessr.managers;

import com.piromant.disabldguessr.component.GameSession;
import com.piromant.disabldguessr.component.GameSessionFactory;
import com.piromant.disabldguessr.model.Point;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentLinkedQueue;

@Service
public class GameManager {

    private final GameSessionFactory gameSessionFactory;

    private final ConcurrentLinkedQueue<String> waitingUsers = new ConcurrentLinkedQueue<>();
    private final ConcurrentHashMap<String, GameSession> gameSessions = new ConcurrentHashMap<>();

    public GameManager(GameSessionFactory gameSessionFactory) {
        this.gameSessionFactory = gameSessionFactory;
    }

    private void startNewGame(Set<String> users) {
        String id = UUID.randomUUID().toString();
        GameSession newGame = this.gameSessionFactory.createGameSession(id, users);
        this.gameSessions.put(id, newGame);
        newGame.start();
    }

    public void gameMoveToNextPoint(String sessionId, String username, Point userGuess) {
        this.gameSessions.get(sessionId).getReadyToNextPoint(username, userGuess);
    }

    public void endGame(String sessionId) {
        this.gameSessions.get(sessionId).endGame();
        this.gameSessions.remove(sessionId);
    }

    public void addUserToQueue(String username) {
        this.waitingUsers.add(username);
        if(this.waitingUsers.size() > 1)
            this.connectUsersInGames();
    }

    private void connectUsersInGames(){
        while (this.waitingUsers.size() > 1){
            Set<String> players = new HashSet<>();
            players.add(this.waitingUsers.poll());
            players.add(this.waitingUsers.poll());
            startNewGame(players);
        }
    }
}
