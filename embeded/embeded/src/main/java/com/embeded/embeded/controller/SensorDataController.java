package com.embeded.embeded.controller;

import com.embeded.embeded.model.SensorData;
import com.embeded.embeded.repository.SensorDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class SensorDataController {

    @Autowired
    private SensorDataRepository sensorDataRepository;

    @PostMapping("/sensor_data")
    public ResponseEntity<SensorData> createSensorData(@RequestBody SensorData sensorData) {
        SensorData savedData = sensorDataRepository.save(sensorData);
        return ResponseEntity.ok(savedData);
    }
    @GetMapping("/sensor_data")
    public ResponseEntity<List<SensorData>> getSensorData() {
        // Your logic to fetch sensor data
        List<SensorData> sensorDataList = sensorDataRepository.findAll();
        return ResponseEntity.ok(sensorDataList);
    }
}
