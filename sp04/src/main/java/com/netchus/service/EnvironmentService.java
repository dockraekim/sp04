package com.netchus.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.netchus.mapper.EnvironmentMapper;

@Service
public class EnvironmentService {

	private final EnvironmentMapper mapper;

	@Autowired
	public EnvironmentService(EnvironmentMapper mapper) {
		super();
		this.mapper = mapper;
	}
	
	public ArrayList<HashMap<String, Object>> getList() {
		return mapper.getList();
	}


	public void insertSensor(HashMap<String, Object> sensor) {
		mapper.insertSensor(sensor);
	}

	
	
	
//	@Override
//	public HashMap<String, Object> getSensorData(String sensorId) {
//		return mapper.get(sensorId);
//	}

//	public void insert(ArrayList<HashMap<String, Object>> data) {
//		mapper.insert(data);
//	}


}
