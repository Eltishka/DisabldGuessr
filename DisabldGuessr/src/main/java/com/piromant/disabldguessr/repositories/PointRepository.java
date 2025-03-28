package com.piromant.disabldguessr.repositories;

import com.piromant.disabldguessr.model.Point;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class PointRepository {

    private List<Point> points = List.of(new Point(55.7558, 37.6173),
            new Point(59.9343, 30.3351),
            new Point(55.7961, 49.1064),
            new Point(56.0184, 92.8672),
            new Point(55.0084, 82.9357));

    public Point getPoint(int id) {
        return points.get(id);
    }
}
