var YONGIN_ENV_URL = "";
var AJAX_URL = "";
var SESSION_USER = "";
var EMP_NO = "";

/*
var GRADE_MASTER = 15;
var GRADE_GROUP = 7;
var GRADE_TIM = 3;
*/

var GRADE_ADMIN = 127;
var GRADE_MASTER = 63;
var GRADE_GROUP = 31;
var GRADE_SITE = 15;
var GRADE_DEPT = 7;
var GRADE_TIM = 3;
var GRADE_USER = 1;

var MODE_ADD = 0;
var MODE_FIX = 1;
var MODE_DELTE = 2;

var USABLE = 0; //사용가능
var USED = 1; //사용중

var DATA_NULL = 99;
var DATA_ERROR = 100;
var DATA_DUPLICATE = 101;

var SESSION_EXPIRED = 111;

var DATA_NOT_EXSIST = 123;
var CMD_NULL= 120;
var PARAM_NULL= 121;
var PARAM_VALUE_EMPTY= 122;



function gotoPage(type){
	if(type == 1){
		location.href = "admin_status";
	}else if(type == 2){
		location.href = "admin_envData";
	}else if(type == 3){
		location.href = "admin_nurserySchool";
	}else  if(type == 4){
		location.href = "admin_envSensor";
	}else  if(type == 5){
		location.href = "user_notiAll";
	}else  if(type == 6){
		location.href = "user_notiClass";
	}else  if(type == 7){
		location.href = "user_notiMenu";
	}
}


function isNumber(str) { 
	return (/^[0-9]+$/).test(str);
	//str += ''; // 문자열로 변환
	//str = str.replace(/^\s*|\s*$/g, ''); // 좌우 공백 제거
	//if (str == '' || isNaN(str)) return false;
	//return true;
}


function isCompareValid($obj1, $obj2, szMsg){
	var arMsg = [];
	
	if(isRegExp($obj1.val())){
		arMsg[0] = $("input[name="+$obj1.attr('name')+"]").prop('placeholder')+"에 특수문자가 있습니다.";
		arMsg[1] = "<>&\" 특수문자는 사용할 수 없습니다.";
		arMsg[2] = "제거 후 다시 등록해 주세요.";
		showAlert('알림!', arMsg);
		return false;
	}
	
	if(isRegExp($obj2.val())){
		arMsg[0] = $("input[name="+$obj2.attr('name')+"]").prop('placeholder')+"에 특수문자가 있습니다.";
		arMsg[1] = "<>&\" 특수문자는 사용할 수 없습니다.";
		arMsg[2] = "제거 후 다시 등록해 주세요.";
		showAlert('알림!', arMsg);
		return false;
	}
	
	if($obj1.val() != $obj2.val()){
		showAlert('알림!', szMsg);
		return false;
	}
	
	return true;
}

function isCheckSize($obj, size1, size2){
	var arMsg = [];
	var $objName = $obj.attr('name');
//	console.log(' --- id : '+$objName);
//	console.log(' --- placeholder : '+$("input[name="+$objName+"]").prop('placeholder'));
	
	if(isRegExp($obj.val())){
		arMsg[0] = $("input[name="+$objName+"]").prop('placeholder')+"에 특수문자가 있습니다.";
		arMsg[1] = "<>&\" 특수문자는 사용할 수 없습니다.";
		arMsg[2] = "제거 후 다시 등록해 주세요.";
		showAlert('알림!', arMsg);
		return false;
	}
	
	console.log(' --- [isCheckSize] name : '+$obj.attr('name')+', size : '+ $obj.val().length);
	
	if(Number($obj.val().length) < Number(size1)){
		arMsg[0] = $("input[name="+$objName+"]").prop('placeholder')+"의 글자수 최소 길이는 [ "+size1+" ] 입니다.";
		arMsg[1] = "확인 후 다시 등록해 주세요.";
		showAlert('알림!', arMsg);
		return false;
	}
	
	if(Number($obj.val().length) > Number(size2)){
		arMsg[0] = $("input[name="+$objName+"]").prop('placeholder')+"의 글자수 최대 길이 [ "+size2+" ]을 초과 하였습니다.";
		arMsg[1] = "확인 후 다시 등록해 주세요.";
		showAlert('알림!', arMsg);
		return false;
	}
	
}

function blank($obj){
	var arMsg = [];
	var blank_pattern = /^\s/g; //(/\s/g;
	//var blank_pattern = /[\s]/g;
	if( blank_pattern.test($obj.val()) == true){
		console.log(' ---------- $obj.prop : '+ $obj.prop('placeholder')+', val : '+ $obj.val());
		arMsg [0] = '['+$obj.prop('placeholder')+'] 등록 오류 입니다.';
		arMsg [1] = '문자열 앞에 공백이 존재 합니다.';
		arMsg [2] = '공백 제거 후 다시 등록해 주세요.';
		showAlert('알림!', arMsg);
		valid = false;
		return false;
	}
	return true;
}

function blankAlert($obj){
	//var blank_pattern = /^\s*|\s$/g; //(/\s/g;
	var blank_pattern = /^\s/g;;
	if( blank_pattern.test($obj.val()) == true){
		alert('알림! \n ['+$obj.prop('placeholder')+'] 등록 오류 입니다. \n 문자열 (앞/뒤)에 공백이 존재 합니다. \n 공백 제거 후 다시 등록해 주세요.');
		return false;
	}
	return true;
}

// 앞뒤 공백문자열을 제거
String.prototype.trim = function trim(str) { 
  return this.replace(/(^\s*)|(\s*$)/gi, ""); 
}

function isRegExp(str){
	  //특수문자 검증 start
	//  var str = "2011-12-27";
//	  var regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
	
	 var regExp = /[<>&\"]/gi;
	 
	 if(regExp.test(str)){
	      //특수문자 제거
	      //var t = str.replace(regExp, "")
	      //alert("특수문자를 제거했습니다. ==>" + t);
		 console.log('--- <>&" 특수문자가 존재 합니다.');
		 return true;
	  }else{
	     // alert("정상적인 문자입니다. ==>" + str);
		  console.log('--- 정상적인 문자 입니다. ');
		  return false;
	  }
	  //특수문자 검증 end
}

function checkPassword(password){
	//var regex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?.])[A-Za-z\d$@$!%*?.]{9, 20}/;
	var regex =/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^*-]).{9,20}$/;
	
	if (!regex.test(password)) {
		//showAlert("알림!", "이메일 형식이 잘못됐습니다.");
		return false;
	}	
	return true;
}

function checkEmail(email){
	var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
	
	if (!regex.test(email)) {
		//showAlert("알림!", "이메일 형식이 잘못됐습니다.");
		return false;
	}	
	return true;
}

function isPhoneNumber(szTile, phone1Val, phone2Val, phone3Val){
	if((isNumber(phone1Val) == false) || (isNumber(phone2Val) == false) || (isNumber(phone3Val) == false)){
		alert('알림!\n ['+szTile+'] 숫자만 입력 가능합니다. \n 확인후 다시 등록해 주세요.');
		return false;
	}
	return true;
}

function checkDateVaild(szStr, szDate, szType){
	var result = true;
	var arSzDate = szDate.split('-');
	console.log('--- [checkDateVaild] szDate : '+ szDate+ ', arSzDate size : '+ arSzDate.length);
	if(arSzDate.length != 3){
		alert('알림!\n ['+szStr+'일]이 잘못 등록 되었습니다. \n [0000-00-00] 형식으로 다시 등록해 주세요.');
		return false;
	}
	var szYear = arSzDate[0];
	var szMonth = arSzDate[1];
	var szDay = arSzDate[2];
	console.log('--- szYear : '+ szYear+ ', szMonth : '+ szMonth+ ', szDay : '+ szDay);
	
	if(!isEmpty(szYear)){
		if(isNumber(szYear) == false){
			alert('알림!\n ['+szStr+'년도]는 숫자만 입력 가능 합니다.');
			return false;
		}else{
			if(Number(szYear) < 1900){
				alert('알림!\n ['+szStr+'년도]는 1900년도 보다 커야 합니다. \n 다시 등록해 주세요.');
				return false;
			}
			if(szType == true || szType == 'true'){
				var szTDate = szYear+"-01-01";
				if(compareDate(szTDate, today()) == 1){
					alert('알림!\n ['+szStr+'년도]가 올해년도 보다 큽니다. \n 다시 등록해 주세요.');
					return false;
				}
			}
		}
	}else{
		alert('알림!\n ['+szStr+'년도] 정보가 없습니다. \n 다시 등록해 주세요.');
		return false;
	}
	
	if(!isEmpty(szMonth)){
		if(isNumber(szMonth) == false){
			alert('알림!\n ['+szStr+'월]은 숫자만 입력 가능 합니다.');
			return false;
		}else{
			if(Number(szMonth) < 1 || Number(szMonth) > 12){
				alert('알림!\n ['+szStr+'월] 유효하지 않는 월정보 입니다. \n 다시 등록해 주세요.');
				return false;
			}
		}
		
	}else{
		alert('알림!\n ['+szStr+'월] 정보가 없습니다. \n 다시 등록해 주세요.');
		return false;
	}
	
	if(!isEmpty(szDay)){
		if(isNumber(szDay) == false){
			alert('알림!\n ['+szStr+'일]은 숫자만 등록 가능합니다.');
			return false;
		}else{
			if(Number(szDay) < 1 || Number(szDay) > 31){
				alert('알림!\n ['+szStr+'일] 유효하지 않는 일정보 입니다. \n 다시 등록해 주세요.');
				return false;
			}
			//해당 달의 마지막 일자 구하기
			var nMaxDay = new Date(new Date(szYear, szMonth, 1) - 86400000).getDate();
			
			if(szDay < 1 || szDay > nMaxDay){
				alert('알림!\n ['+szStr+'일] 유효하지 않는 날짜 정보 입니다. \n 다시 등록해 주세요.');
				return false;
			}
		}
	}else{
		alert('알림!\n ['+szStr+'일] 정보가 없습니다. \n 다시 등록해 주세요.');
		return false;
	}
	
	return result;
}

function vaildDate(szStr, szYear, szMonth, szDay, szType){
	var result = true;
	var szSignDate = szYear+"-"+szMonth+"-"+szDay;
	console.log('--- [vaildDate] szSignDate : '+ szSignDate);
	if(!isEmpty(szYear)){
		if(isNumber(szYear) == false){
			alert('알림!\n ['+szStr+'년도]는 숫자만 입력 가능 합니다.');
			return false;
		}else{
			if(Number(szYear) < 1900){
				alert('알림!\n ['+szStr+'년도]는 1900년도 보다 커야 합니다. \n 다시 등록해 주세요.');
				return false;
			}
			if(szType == true || szType == 'true'){
				var szTDate = szYear+"-01-01";
				if(compareDate(szTDate, today()) == 1){
					alert('알림!\n ['+szStr+'년도]가 올해년도 보다 큽니다. \n 다시 등록해 주세요.');
					return false;
				}
			}
			
		}
		
	}
	
	if(!isEmpty(szMonth)){
		if(isNumber(szMonth) == false){
			alert('알림!\n ['+szStr+'월]은 숫자만 입력 가능 합니다.');
			return false;
		}else{
			if(Number(szMonth) < 1 || Number(szMonth) > 12){
				alert('알림!\n ['+szStr+'월] 유효하지 않는 월정보 입니다. \n 다시 등록해 주세요.');
				return false;
			}
		}
		
	}
	
	if(!isEmpty(szDay)){
		if(isNumber(szDay) == false){
			alert('알림!\n ['+szStr+'일]은 숫자만 등록 가능합니다.');
			return false;
		}else{
			if(Number(szDay) < 1 || Number(szDay) > 31){
				alert('알림!\n ['+szStr+'일] 유효하지 않는 일정보 입니다. \n 다시 등록해 주세요.');
				return false;
			}
			//해당 달의 마지막 일자 구하기
			var nMaxDay = new Date(new Date(szYear, szMonth, 1) - 86400000).getDate();
			
			if(szDay < 1 || szDay > nMaxDay){
				alert('알림!\n ['+szStr+'] 유효하지 않는 날짜 정보 입니다. \n 다시 등록해 주세요.');
				return false;
			}
		}
		
	}
	
	return result;
}

function changeDateFormat(szDate, szRes){
	var arRes = szDate.split(szRes);
	//console.log('------ arRes[0] : '+ arRes[0] );
	return arRes[0];
}

function chkDateFormat(obj, szRes){
	var arObj = obj.split(szRes);
	console.log('-- arObj size : '+ arObj.length);
	
	if(arObj.length != 3){
		return -1;
	}
}

function subtractDate(obj1, obj2){
	var betweenDay = 0;
	
	if(isEmpty(obj1)){
		return -1;
	}
	if(isEmpty(obj2)){
		return -1;
	}
	
	//시작일, 종료일을 비교해서 유효한지 확인한다.
	var sDate = obj1; //2017-04-04;
	var eDate = obj2; //2017-04-04;
	var sTime = "00:00:00";
	var eTime = "00:00:00";
	
	var szSDate = makeDate(sDate, sTime).getTime();
	var szEDate = makeDate(eDate, eTime).getTime();
	
	var betweenDay = ((szEDate - szSDate)/1000/60/60/24)+1;  
	console.log(' --- [subtractDate] betweenDay : '+ betweenDay);
	return betweenDay;
}

function calDiffByDate(sDate, eDate, type){
	console.log('- sDate : '+ sDate +', eDate : '+ eDate +', type : '+ type);
	
/* 참조용
	//var diffDate_1 = sDate instanceof Date ? sDate : new Date(sDate);
    //var diffDate_2 = eDate instanceof Date ? eDate : new Date(eDate);
 
    //diffDate_1 = new Date(diffDate_1.getFullYear(), diffDate_1.getMonth()+1, diffDate_1.getDate());
    //diffDate_2 = new Date(diffDate_2.getFullYear(), diffDate_2.getMonth()+1, diffDate_2.getDate());
	//var diff = Math.abs(diffDate_2.getTime() - diffDate_1.getTime());
*/
	
	var result = "";
	
	//var strDate1 = sDate;
	//var strDate2 = eDate;
	//var arr1 = strDate1.split('-');
	//var arr2 = strDate2.split('-');
	//var dat1 = new Date(arr1[0], arr1[1], arr1[2]);
	//var dat2 = new Date(arr2[0], arr2[1], arr2[2]);
	// 날짜 차이 알아 내기
	//var diff = dat2.getTime() - dat1.getTime();

	var sTime = "00:00:00";
	var eTime = "00:00:00";
	var dat1 = makeDate(sDate, sTime).getTime();
	var dat2 = makeDate(eDate, eTime).getTime();
	
	// 날짜 차이 알아 내기
	var diff = dat2 - dat1;
	
	var currDay = 24 * 60 * 60 * 1000;// 시 * 분 * 초 * 밀리세컨
	var currMonth = currDay * 30;// 월 만듬
	var currYear = currMonth * 12; // 년 만듬
	
	var szTotalMonth =  parseInt(diff/currMonth);
	 
	console.log("*** 날짜 두개 : " + dat1 + ", " + dat2 +", diff :"+(diff/currDay)+1) ;
	console.log("** 일수 차이 : " + parseInt(diff/currDay) + " 일");
	console.log("* 월수 차이 : " + parseInt(diff/currMonth) + " 월");
	console.log("* 년수 차이 : " + parseInt(diff/currYear) + " 년");
	console.log("* 년수 차이 : " + parseInt(szTotalMonth%12) + " 개월");
	
	if(type == 'days'){
		result = parseInt((diff/currDay)+1);
	}else if(type == 'month'){
		result = szTotalMonth;
	}else if(type == 'year'){
		result = parseInt(diff/currYear)+"."+parseInt(szTotalMonth%12);
	}

	return result;
}

function exChangeDate(month, percent){
	var result = "";
	
	var totalMonth = parseInt(month * percent/100);
	var year = String(parseInt(totalMonth/12));
	var month = String(parseInt(totalMonth%12));
	console.log("** 환산 개월수 : " + totalMonth + " 개월  / month : "+ month+", % : "+ percent);
	console.log("** 환산 년수 차이 : " + year + " 년");
	console.log("** 환산 년수 차이 : " + month + " 개월");
	result = year+"."+month;
	//console.log('--- result : '+ result);
	return result;
}


function isCompareDateBy(szSDate, szEDate, szTSDate, szTEDate){
	
	//console.log('--- [isCompareDateBy] szTSDate : '+ szTSDate+', szTEDate : '+szTEDate);
 	//console.log('--- [isCompareDateBy] szSDate : '+ szSDate+', szEDate : '+szEDate);
 	
	//타겟요일 과 (시작일 , 종료일)을 비교해서 유효한지 확인한다.
	var sDate = szSDate; //2017-04-04;
	var eDate = szEDate; //2017-04-04;
	var sTime = "00:00:00";
	var eTime = "23:59:59";
	
	var szTSDate = makeDate(szTSDate, sTime).getTime();
	var szTEDate = makeDate(szTEDate, eTime).getTime();
	
	var szSDate = makeDate(sDate, sTime).getTime();
	var szEDate = makeDate(eDate, eTime).getTime();
	
	//console.log('---------- szSDate : '+ szSDate + " szEDate : "+ szEDate+ " szTDate : "+ szTDate);
	
	if((szTSDate <= szSDate && szTEDate <= szSDate) || (szTSDate >= szEDate && szTEDate >= szEDate)){
		console.log('---- [compareDateBy] return false 중복 날짜 없음');
		return false;
	}
		console.log('---- [compareDateBy] return true 중복 날짜 있음');
		return true;
}

function compareTo(num1, num2){
	return num1 - num2;
}

function compareDate(obj1, obj2){
	var valid = true;
	
	var arMsg = [];
	
	//시작일 , 종료일 을 비교해서 유효한지 확인한다.
	var sDate = obj1; //2017-04-04;
	var eDate = obj2; //2017-04-04;
	var sTime = "00:00:00";
	var eTime = "23:59:59";
	
	var szSDate = makeDate(sDate, sTime).getTime();
	var szEDate = makeDate(eDate, eTime).getTime();

	console.log('---------- szSDate : '+ szSDate + " szEDate : "+ szEDate);
	
	if(szSDate <= szEDate){
		console.log('---- 정상');
		return 0;
	}else{
		console.log('---- 비정상');
		return 1;
	}
	
}

function expireSession(){
  window.location = "login";
}

function gotoBack(){
	window.history.back();
}

function isEmpty(val) {
	if(val == null || typeof val == 'undefined' || val.trim().length < 1  || Number(val) < 0) {
		return true;
	}
	console.log("isEmpty val: " + val);
	return false;
}

function leadingZeros(n, digits) {
	  var zero = '';
	  n = n.toString();

	  if (n.length < digits) {
	    for (var i = 0; i < digits - n.length; i++)
	      zero += '0';
	  }
	  return zero + n;
}

function today(){ //yyyy-MM-dd
    var date = new Date();

    var year  = date.getFullYear();
    var month = date.getMonth() + 1; // 0부터 시작하므로 1더함 더함
    var day   = date.getDate();

    if (("" + month).length == 1) { month = "0" + month; }
    if (("" + day).length   == 1) { day   = "0" + day;   }
   
    console.log("----- today() : " + year + month + day);  
    
    return year+"-"+ month+"-"+ day;   
}

function getTodayByType(szRes){ 
	var szDate = "";
	
	var dateObj = new Date();
	
	var fullYear = dateObj.getFullYear();
	var month = dateObj.getMonth()+1; // 0부터 시작하므로 1더함 더함
	var date = dateObj.getDate();
	
	if(("" + month).length == 1) { month = "0" + month; }
	if(("" + date).length == 1) { date = "0" + date;   }
	
	szDate = fullYear+szRes+month+szRes+date;
	console.log("----------- getTodayByType : "+ szDate);
	return szDate;
}


function makeDate(szDate, szTime) {
	//console.log("--- [makeDate] -- szDate : "+ szDate +", szTime : "+ szTime);
	var dateObj = new Date(szDate);

	var arTimes = szTime.split(":");
	var hour = Number(arTimes[0]); // hh
	var minute = Number(arTimes[1]); // mm
	var second = Number(arTimes[2]); // ss
	
	dateObj.setHours(hour);
	dateObj.setMinutes(minute);
	dateObj.setSeconds(second);
	
	//debugBy( ["----- makeDate : ", dateObj] );
	
	return dateObj;
}

function debugBy(arMsg) {
	var szMsg = "";
	for(var i=0; i < arMsg.length; i++) {
		if(arMsg[i] instanceof Date) {
			var dateObj = arMsg[i];
			var fullYear = dateObj.getFullYear();
			var month = dateObj.getMonth()+1;
			var date = dateObj.getDate();
			var hour  = dateObj.getHours();
			var min   = dateObj.getMinutes();
			
			if(("" + month).length == 1) { month = "0" + month; }
			if(("" + date).length == 1) { date = "0" + date;   }
			if(("" + hour).length == 1) { hour  = "0" + hour;  }
			if(("" + min).length == 1) { min   = "0" + min;   }
			
			szMsg += "["+fullYear+"/"+month+"/"+date+" "+hour+":"+min+"] ";
		} else {
			szMsg += arMsg[i] + " ";
		}
	}
	console.log( szMsg );
}
