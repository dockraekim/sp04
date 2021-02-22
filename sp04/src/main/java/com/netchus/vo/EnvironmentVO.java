package com.netchus.vo;

import java.util.Date;

import lombok.Data;
public class EnvironmentVO {

	int id;
	String PM1;
	String PM25;
	String PM10;
	String O3;
	String NO2;
	String CO;
	String CO2;
	String SO2;
	String HCHO;
	String TVOC;
	String TC;
	String H;
	String envType;
	int useFlag;
	int sensorId; // 이 sid 는 sensor table 에 있는 table row의 int값임. 왜 sid가 아니라 id일까
	Date dataTime; // 발표일자?
	String time; // 발표일자 초단위?
	Date regDate;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getPM1() {
		return PM1;
	}
	public void setPM1(String pM1) {
		PM1 = pM1;
	}
	public String getPM25() {
		return PM25;
	}
	public void setPM25(String pM25) {
		PM25 = pM25;
	}
	public String getPM10() {
		return PM10;
	}
	public void setPM10(String pM10) {
		PM10 = pM10;
	}
	public String getO3() {
		return O3;
	}
	public void setO3(String o3) {
		O3 = o3;
	}
	public String getNO2() {
		return NO2;
	}
	public void setNO2(String nO2) {
		NO2 = nO2;
	}
	public String getCO() {
		return CO;
	}
	public void setCO(String cO) {
		CO = cO;
	}
	public String getCO2() {
		return CO2;
	}
	public void setCO2(String cO2) {
		CO2 = cO2;
	}
	public String getSO2() {
		return SO2;
	}
	public void setSO2(String sO2) {
		SO2 = sO2;
	}
	public String getHCHO() {
		return HCHO;
	}
	public void setHCHO(String hCHO) {
		HCHO = hCHO;
	}
	public String getTVOC() {
		return TVOC;
	}
	public void setTVOC(String tVOC) {
		TVOC = tVOC;
	}
	public String getTC() {
		return TC;
	}
	public void setTC(String tC) {
		TC = tC;
	}
	public String getH() {
		return H;
	}
	public void setH(String h) {
		H = h;
	}
	public String getEnvType() {
		return envType;
	}
	public void setEnvType(String envType) {
		this.envType = envType;
	}
	public int getUseFlag() {
		return useFlag;
	}
	public void setUseFlag(int useFlag) {
		this.useFlag = useFlag;
	}
	public int getSensorId() {
		return sensorId;
	}
	public void setSensorId(int sensorId) {
		this.sensorId = sensorId;
	}
	public Date getDataTime() {
		return dataTime;
	}
	public void setDataTime(Date dataTime) {
		this.dataTime = dataTime;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public Date getRegDate() {
		return regDate;
	}
	public void setRegDate(Date regDate) {
		this.regDate = regDate;
	}

	
}
