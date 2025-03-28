package com.piromant.disabldguessr.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class PointWithUserDTO {
    private String username;
    private Double latitude;
    private Double longitude;
}
