package com.netchus.mapper;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import com.netchus.vo.EnvironmentVO;


public interface EnvironmentMapper {
	public List<EnvironmentVO> getVOList();
	
	public ArrayList<HashMap<String, Object>> getList();
	
	public HashMap<String,Object> get(String sensorId);

}
