package com.piromant.disabldguessr.services;

import com.piromant.disabldguessr.model.Point;
import com.piromant.disabldguessr.repositories.PointRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
public class PointsService {

    private final PointRepository pointRepository;

    public PointsService(PointRepository pointRepository) {
        this.pointRepository = pointRepository;
    }

    public Point randomPoint(){
        return this.pointRepository.getPoint((int) ((Math.random() * (4 - 0)) + 0));
    }
}
