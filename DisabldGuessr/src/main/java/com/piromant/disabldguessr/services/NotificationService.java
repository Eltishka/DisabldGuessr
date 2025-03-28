package com.piromant.disabldguessr.services;

import com.piromant.disabldguessr.component.notifications.Notification;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

@Service
public class NotificationService {

    private final SimpMessagingTemplate messagingTemplate;
    public NotificationService(SimpMessagingTemplate messagingTemplate) {
        this.messagingTemplate = messagingTemplate;
    }

    public void notifyUser(Notification notification, String username) {
        System.out.println("Sending notification: " + notification.getTitle());
        messagingTemplate.convertAndSend("/topic/" + username, notification);
    }
}
