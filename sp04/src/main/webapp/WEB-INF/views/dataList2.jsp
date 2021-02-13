<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">

<link rel="icon" href="img/layout/logo.ico" type="image/vnd.microsoft.icon"> <!-- 16x16 - 256x256 까지 통합 icon-->
<link rel="stylesheet" href="resources/admin/css/common.css" /> <!-- 공통사항 css-->
<link rel="stylesheet" href="resources/admin/css/layout.css" /> <!-- 전체레이아웃 css-->
<link rel="stylesheet" href="resources/admin/bootstrap/css/bootstrap.css" /> <!-- 부트스트랩-->
<link rel="stylesheet" href="resources/admin/xeicon/xeicon.min.css" /> <!-- 사이트 내 icon-->
<link rel="stylesheet" href="http://code.jquery.com/ui/1.8.18/themes/base/jquery-ui.css" />
<link rel="stylesheet" href="resources/admin/css/contents.css" /> <!--콘텐츠/메인 css-->



<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script><!-- jquery 1 -->
<script src="http://code.jquery.com/ui/1.8.18/jquery-ui.min.js"></script><!-- jquery 2 -->
<script type="text/javascript" src="resources/admin/bootstrap/js/bootstrap.min.js"></script> <!--부트스트랩-->
<script type="text/javascript" src="resources/admin/js/layout.js"></script> <!--  레이아웃사용 스크립트-->

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Play">
<link href="resources/admin/fonts/KoPubDotum.css" rel="stylesheet">


<link rel="stylesheet" href="resources/admin/css/jquery-ui-timepicker-addon.css" />
<script type="text/javascript" src="resources/admin/js/jquery-ui-timepicker-addon.js"></script>

<title>Insert title here</title>
</head>
<body>
<div id="wrap" class="wrap">
	<div class="content">
			<div class="board">
				<table class="normal">
					<thead>
						<tr>
							<th>ID</th>
							<th>PM1.0</th>
							<th>PM2.5</th>
							<th>PM10</th> 
						</tr>
					</thead>
					<tbody>
						<c:forEach items="${sensorList}" var="sensorVO" varStatus="vs">
					    <tr>
					        <td>${sensorVO.PM1}</td>
					      	<td>${sensorVO.PM1}</td>
					        <td>${sensorVO.PM25}</td>
					        <td>${sensorVO.PM10}</td> 
					    </tr>
					    </c:forEach>
					</tbody>
				</table>
				
				<p class="pagination" style="margin-top:20px;">
					<a class="arr" ><i class="xi-angle-left"></i></a>
					<a class="num active" >1</a>
					<a class="num" >2</a>
					<a class="arr" ><i class="xi-angle-right"></i></a>
				</p>
			</div>
		</div>
</div>					
</body>
</html>