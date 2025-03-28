package com.piromant.disabldguessr.component.notifications;

import lombok.*;

import java.io.Serializable;

@Data
public class Notification implements Serializable {
    public String title;
    public String message;

    public Notification(String title, String message) {
        this.title = title;
        this.message = message;
    }

}
