package com.netchus.controller;

import java.text.DateFormat;
import java.util.Date;
import java.util.Locale;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.netchus.service.SensorService;



/**
 * Handles requests for the application home page.
 */
@Controller
public class HomeController {
	
	@Autowired
	private SensorService sservice;
	
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);

	/**
	 * Simply selects the home view to render by returning its name.
	 */
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(Locale locale, Model model) {
		logger.info("Welcome home! The client locale is {}.", locale);

		Date date = new Date();
		DateFormat dateFormat = DateFormat.getDateTimeInstance(DateFormat.LONG, DateFormat.LONG, locale);

		String formattedDate = dateFormat.format(date);

		model.addAttribute("serverTime", formattedDate);

		return "home";
	}

	/*
	 * 실습1 - 리스트 작성
	 * DB에서 조회 후 해당 데이터 출력 
	 */
	@RequestMapping(value = "/ex1", method = RequestMethod.GET)
	public String ex1(Model model) {
		logger.info("ex1");

		return "ex1";
	}
	/*
	 *  DB에서 조회 후 해당 데이터 출력 
	 */
	@RequestMapping(value = "/dataList1", method = RequestMethod.GET)
	public String dataList1(Model model) {
		logger.info("dataList1");
		model.addAttribute("sensorList", sservice.getSensorList());
		return "dataList1";
	}
	/*
	 *  DB에서 조회 후 해당 데이터 출력 
	 */
	@RequestMapping(value = "/dataList2", method = RequestMethod.GET)
	public String dataList2(Model model) {
		logger.info("dataList2");
		//sservice.getVOList();
		//sservice.getSensorData("1");
		model.addAttribute("sensorList", sservice.getVOList());
		return "dataList2";
	}
	/*
	 *  DB에서 조회 후 해당 데이터 출력 
	 */
	@RequestMapping(value = "/getData", method = RequestMethod.GET)
	public String getData(Model model) {
		logger.info("getData");
		//sservice.getSensorData("1");
		model.addAttribute("sInfo", sservice.getSensorData("1"));
		return "getData";
	}
	
	
	

}
