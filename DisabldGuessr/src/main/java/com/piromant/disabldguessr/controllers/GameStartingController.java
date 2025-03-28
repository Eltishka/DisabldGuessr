package com.piromant.disabldguessr.controllers;

import com.piromant.disabldguessr.dto.PointWithUserDTO;
import com.piromant.disabldguessr.managers.GameManager;
import com.piromant.disabldguessr.model.Point;
import lombok.AllArgsConstructor;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class GameStartingController {

    private final GameManager gameManager;

    public GameStartingController(GameManager gameManager) {
        this.gameManager = gameManager;
    }

    @MessageMapping("/startgame/{username}")
    public void startGame(@DestinationVariable String username) {
        System.out.println("Starting game " + username);
        this.gameManager.addUserToQueue(username);
    }

    @MessageMapping("/nextpoint/{sessionId}")
    public void moveToNextPoint(@DestinationVariable String sessionId, @Payload PointWithUserDTO point) {
        this.gameManager.gameMoveToNextPoint(sessionId, point.getUsername(), new Point(point.getLatitude(), point.getLongitude()));
    }

    @MessageMapping("/endgame/{sessionId}")
    public void endGame(@DestinationVariable String sessionId) {
        this.gameManager.endGame(sessionId);
    }
}
