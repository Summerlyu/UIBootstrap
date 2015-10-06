function startDays(day1, day2) {
	var y1, y2, y3, m1, m2, m3, d1, d2, d3, h1, h2, h3, _m1, _m2, _m3, s1, s2, s3;
	var reg = /年|月|日 |\/|:| /;
	//dayinfo -  用正则分割
	var DI1 = day1.split(reg);
	var DI2 = day2.split(reg);
	var date1 = new Date(DI1[0], DI1[1] - 1, DI1[2], DI1[3], DI1[4], DI1[5]);
	var date2 = new Date(DI2[0], DI2[1] - 1, DI2[2], DI2[3], DI2[4], DI2[5]);
	//用距标准时间差来获取相距时间
	/* alert(Date.parse(date1)+"-"+Date.parse(date2)); */
	var minsec = Date.parse(date1) - Date.parse(date2);
	var days = minsec / 1000 / 60; //factor: second / minute / hour / day
	var test = days + "";
	test = test.substring(0, test.indexOf("."));
	var hour = test / 60 + "";
	var hour = hour.substring(0, hour.indexOf("."));
	var minute = test % 60;
	return hour + "小时" + minute + "分钟";
}
function statusDays(day1, day2) {
	var y1, y2, y3, m1, m2, m3, d1, d2, d3, h1, h2, h3, _m1, _m2, _m3, s1, s2, s3;
	var reg = /年|月|日 |\/|:| /;
	//dayinfo -  用正则分割
	var DI1 = day1.split(reg);
	var DI2 = day2.split(reg);
	var date1 = new Date(DI1[0], DI1[1]-1, DI1[2], DI1[3], DI1[4], DI1[5]);
	var date2 = new Date(DI2[0], DI2[1]-1, DI2[2], DI2[3], DI2[4], DI2[5]);
	//用距标准时间差来获取相距时间
	/* alert(Date.parse(date1)+"-"+Date.parse(date2)); */
	var minsec = Date.parse(date1) - Date.parse(date2);
	var days = minsec / 1000 / 60; //factor: second / minute / hour / day
	var test = days + "";
	test = test.substring(0, test.indexOf("."));
	var hour = test / 60 + "";
	hour = hour.substring(0, hour.indexOf("."));
	var minute = test % 60;
	var sec = (minsec-hour*3600000-minute*60000)/1000;
	return hour + "小时" + minute + "分钟" + sec + "秒";
}
function getProgress(obj){
		//修改已完成未完成字样
		var td = obj.parentNode;
		var span = td.getElementsByTagName("span")[0];
		if(obj.checked == true){
			span.innerHTML = "已完成";
		}else{
		span.innerHTML = "未完成";
	}
	//计算课完成进度情况
	var count = $("#trsCourseProgressTr").children().length;
	var funishedCount = 0;
	$("td","#trsCourseProgressTr").each(function(){
		var check = $("input",this);
		if(check[0].checked)
			funishedCount++;
	});
	var progress = funishedCount/count;
	progress = progress.toFixed(2);
	if(progress == 1)
		progress = "100%";
	else if(progress == 0)
		progress = "0%";
	else 
		progress = progress.slice(2,4)+"%"
	$("#trsCourseProgress").attr("style","width:"+progress+"");
	coachThreadGo();
}
function getProgressStudent(){
	//计算课完成进度情况
	var count = $("#trsCourseProgressTr").children().length;
	var funishedCount = 0;
	$("td","#trsCourseProgressTr").each(function(){
		var check = $("input",this);
		if(check[0].checked)
			funishedCount++;
	});
	var progress = funishedCount/count;
	progress = progress.toFixed(2);
	if(progress == 1)
		progress = "100%";
	else if(progress == 0)
		progress = "0%";
	else 
		progress = progress.slice(2,4)+"%"
	$("#trsCourseProgress").attr("style","width:"+progress+"");
}