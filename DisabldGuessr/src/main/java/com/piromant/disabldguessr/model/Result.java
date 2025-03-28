package com.piromant.disabldguessr.model;

import lombok.*;

@Data
public class Result {
    private Point userPoint;
    private Point truePoint;
    private Long secondsToGuess;
    private Integer score;

    public Result(Point userPoint, Point truePoint, Long secondsToGuess) {
        this.userPoint = userPoint;
        this.truePoint = truePoint;
        this.secondsToGuess = secondsToGuess;
        this.score = (int) (Math.abs(userPoint.getLatitude() - truePoint.getLongitude()) + Math.abs(userPoint.getLongitude() - truePoint.getLongitude()) / Math.max(secondsToGuess / 15, 1));
    }
}
