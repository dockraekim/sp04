package com.netchus.mapper;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;


public interface EnvironmentMapper {
	public ArrayList<HashMap<String, Object>> getList();
	
	public void insertSensor(HashMap<String,Object> sensor);

}
