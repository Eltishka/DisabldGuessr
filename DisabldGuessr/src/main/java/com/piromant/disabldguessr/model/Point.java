package com.piromant.disabldguessr.model;

import lombok.*;

@Data
public class Point {

    private Double latitude;
    private Double longitude;

    public Point(Double latitude, Double longitude) {
        this.latitude = latitude;
        this.longitude = longitude;
    }


}
