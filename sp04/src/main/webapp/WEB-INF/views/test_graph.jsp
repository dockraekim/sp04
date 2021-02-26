<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
    <%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
    <%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>test graph</title>

 <link rel="stylesheet" href="resources/graph/amcharts/css/style.css" type="text/css">
 <script src="resources/graph/amcharts/amcharts.js" type="text/javascript"></script>
 <script src="resources/graph/amcharts/pie.js" type="text/javascript"></script>
         <script>
            var chart;

            var chartData = [
                {
                    "name": "PM2.5",
                    "value": "${list[0].pm2_5}"
                },
                {
                    "name": "PM10",
                    "value": "${list[0].pm10}"
                },
                {
                    "name": "CO",
                    "value": "${list[0].co}"
                },
                {
                    "name": "SO2",
                    "value": "${list[0].so2}"
                },
                {
                    "name": "NO2",
                    "value": "${list[0].no2}"
                },
                {
                    "name": "O3",
                    "value": "${list[0].o3}"
                }
            ];


            AmCharts.ready(function () {
                // PIE CHART
                chart = new AmCharts.AmPieChart();

                // title of the chart
                chart.addTitle("대기환경 오염인자 / ${list[0].pm2_5}", 16);

                chart.dataProvider = chartData;
                chart.titleField = "name";
                chart.valueField = "value";
                chart.sequencedAnimation = true;
                chart.startEffect = "elastic";
                chart.innerRadius = "30%";
                chart.startDuration = 2;
                chart.labelRadius = 15;
                chart.balloonText = "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>";
                // the following two lines makes the chart 3D
                chart.depth3D = 10;
                chart.angle = 15;

                // WRITE
                chart.write("chartdiv");
            });
        </script>       
</head>
<body>
	test graph
	<div id="chartdiv" style="width:600px; height:400px;"></div>
</body>
</html>