package com.netchus.api;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

public class ApiExplorer {
	
	
	public String apiCall(){ //api 호출 
		 String result = "";	
		 StringBuilder urlBuilder = new StringBuilder("http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty"); /*URL*/
	     try {
			 urlBuilder.append("?" + URLEncoder.encode("ServiceKey","UTF-8") + "=1rvEsO2%2BmIN%2B7ulCpg6rBJKhnuZlGRpl%2FQsgBoyYnKojVzu%2FiS8YYt17%2F1zBjziXC9woJBV1e7DzndwfTdOgvw%3D%3D");
			/*Service Key*/
		     urlBuilder.append("&" + URLEncoder.encode("numOfRows","UTF-8") + "=" + URLEncoder.encode("100", "UTF-8")); /*한 페이지 결과 수*/
		     urlBuilder.append("&" + URLEncoder.encode("pageNo","UTF-8") + "=" + URLEncoder.encode("1", "UTF-8")); /*페이지 번호*/
		     urlBuilder.append("&" + URLEncoder.encode("stationName","UTF-8") + "=" + URLEncoder.encode("비전동", "UTF-8")); /*측정소 이름*/
		     urlBuilder.append("&" + URLEncoder.encode("dataTerm","UTF-8") + "=" + URLEncoder.encode("DAILY", "UTF-8")); /*요청 데이터기간 (하루 : DAILY, 한달 : MONTH, 3달 : 3MONTH)*/
		     urlBuilder.append("&" + URLEncoder.encode("ver","UTF-8") + "=" + URLEncoder.encode("1.3", "UTF-8")); /*버전별 상세 결과 참고문서 참조*/
		     urlBuilder.append("&" + URLEncoder.encode("_returnType", "UTF-8") + "=" + URLEncoder.encode("json", "UTF-8")); /*return type = json*/
		     
		     System.out.println(urlBuilder.toString());
		     
		     URL url = new URL(urlBuilder.toString());
		     HttpURLConnection conn = (HttpURLConnection) url.openConnection();
		     conn.setRequestMethod("GET");
		     conn.setRequestProperty("Content-type", "application/json");
		     System.out.println("Response code: " + conn.getResponseCode());
		     BufferedReader rd;
		     if(conn.getResponseCode() >= 200 && conn.getResponseCode() <= 300) {
		         rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
		     } else {
		         rd = new BufferedReader(new InputStreamReader(conn.getErrorStream()));
		     }
		     StringBuilder sb = new StringBuilder();
		     String line;
		     while ((line = rd.readLine()) != null) {
		         sb.append(line);
		     }
		     rd.close();
		     conn.disconnect();
		     System.out.println(sb.toString());
		     result = sb.toString();
	     
	     } catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	     
	     
	     
		return result;
	}
	
    public ArrayList<HashMap<String, Object>> makeJsonData(String jsonStr){
    	ArrayList<HashMap<String, Object>> arrayList = new ArrayList<HashMap<String,Object>>();
    	
    	//JSON 객체를 생성
        JSONParser jsonparser = new JSONParser();
        
        //JSON데이터를 넣어 JSON Object를 만든다.
        try {
   			JSONObject josonObject = (JSONObject) jsonparser.parse(jsonStr);
   			//배열 안에 있는 JSON형식 이기 때문에 JOSON Object추출
   			JSONArray jsonarray = (JSONArray) josonObject.get("list");
   			System.out.println("jsonarray size : "+ jsonarray.size());
   			
   			//2. 리스트 담는다, arraylist 
   			for (int i = 0; i < jsonarray.size(); i++) {
   				JSONObject listObject = (JSONObject) jsonarray.get(i);
   				//1. 맵 hashmap key, value 구성 
   				//맵생성
   				HashMap<String, Object> map = new HashMap<String, Object>();
   				map.put("so2Value", listObject.get("so2Value"));
   				map.put("coValue", listObject.get("coValue"));
   				map.put("o3Value", listObject.get("o3Value"));
   				map.put("no2Value", listObject.get("no2Value"));
   				map.put("pm10Value", listObject.get("pm10Value"));
   				map.put("pm25Value", listObject.get("pm25Value"));
   				map.put("dataTime", listObject.get("dataTime"));
   				
   				
   				System.out.println("--- so2Value ==> "+listObject.get("so2Value"));
   				System.out.println("--- coValue ==> "+listObject.get("coValue"));
   				System.out.println("--- o3Value ==> "+listObject.get("o3Value"));
   				System.out.println("--- no2Value ==> "+listObject.get("no2Value"));
   				System.out.println("--- pm10Value ==> "+listObject.get("pm10Value"));
   				System.out.println("--- pm25Value ==> "+listObject.get("pm25Value"));
   				System.out.println("--- dataTime ==> "+listObject.get("dataTime"));
   				
   				System.out.println("-------------------------------------------------------------------------");
   				
   				arrayList.add(map);
   			}
   			
   		} catch (ParseException e) {
   			// TODO Auto-generated catch block
   			e.printStackTrace();
   		}
    	
    	return arrayList;
    }
     
     
	
	 public static void main(String[] args) throws IOException {
		 
		 ApiExplorer apiexpolorer = new ApiExplorer();
		 String result = apiexpolorer.apiCall();
		 ArrayList<HashMap<String, Object>> arrayList = apiexpolorer.makeJsonData(result);
		 
		 System.out.println("-- list size : "+ arrayList.size());
	        
		 //HashMap<String, Object> map = arrayList.get(0);
		 
		 
		 
	 }
}
