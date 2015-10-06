// JavaScript Document
var $ = function (id) {
    return "string" == typeof id ? document.getElementById(id) : id;
};

function addEventHandler(oTarget, sEventType, fnHandler) {
	if (oTarget.addEventListener) {
		oTarget.addEventListener(sEventType, fnHandler, false);
	} else if (oTarget.attachEvent) {
		oTarget.attachEvent("on" + sEventType, fnHandler);
	} else {
		oTarget["on" + sEventType] = fnHandler;
	}
};

var Class = {
  create: function() {
    return function() {
      this.initialize.apply(this, arguments);
    }
  }
}

var Extend = function(destination, source) {
	for (var property in source) {
		destination[property] = source[property];
	}
	return destination;
}

var Bind = function(object, fun) {
	return function() {
		return fun.apply(object, arguments);
	}
}

var DateSelector = Class.create();
DateSelector.prototype = {
  initialize: function(oYear, oMonth, oDay, options) {
	this.YearSelector = $(oYear);//年选择对象
	this.MonthSelector = $(oMonth);//月选择对象
	this.DaySelector = $(oDay);//日选择对象
	
	this.SetOptions(options);
	
	var dt = new Date(), iMonth = parseInt(this.options.Month), iDay = parseInt(this.options.Day), iMinYear = parseInt(this.options.MinYear), iMaxYear = parseInt(this.options.MaxYear);
	
	this.Year = parseInt(this.options.Year) || dt.getFullYear()-10;
	this.Month = 1 <= iMonth && iMonth <= 12 ? iMonth : dt.getMonth() + 1;
	this.Day = iDay > 0 ? iDay : dt.getDate();
	this.MinYear = iMinYear && iMinYear < this.Year ? iMinYear : this.Year;
	this.MaxYear = iMaxYear && iMaxYear > this.Year ? iMaxYear : this.Year;
	this.onChange = this.options.onChange;
	
	//年设置
	this.SetSelect(this.YearSelector, this.MinYear, this.MaxYear - this.MinYear + 1, this.Year - this.MinYear);
	//月设置
	this.SetSelect(this.MonthSelector, 1, 12, this.Month - 1);
	//日设置
	this.SetDay();
	
	//日期改变事件
	addEventHandler(this.YearSelector, "change", Bind(this, function(){
		this.Year = this.YearSelector.value; this.SetDay(); this.onChange();
	}));
	addEventHandler(this.MonthSelector, "change", Bind(this, function(){
		this.Month = this.MonthSelector.value; this.SetDay(); this.onChange();
	}));
	addEventHandler(this.DaySelector, "change", Bind(this, function(){
		this.Day = this.DaySelector.value; this.onChange();
	}));
  },
  //设置默认属性
  SetOptions: function(options) {
	this.options = {//默认值
		Year:		0,//年
		Month:		0,//月
		Day:		0,//日
		MinYear:	0,//最小年份
		MaxYear:	0,//最大年份
		onChange:	function(){}//日期改变时执行
    };
    Extend(this.options, options || {});
  },
  //日设置
  SetDay: function() {
	//取得月份天数
	var daysInMonth = new Date(this.Year, this.Month, 0).getDate();
	if (this.Day > daysInMonth) { this.Day = daysInMonth; };
	this.SetSelect(this.DaySelector, 1, daysInMonth, this.Day - 1);
  },
  //select设置
  SetSelect: function(oSelect, iStart, iLength, iIndex) {
	//添加option
	oSelect.options.length = iLength;
	for (var i = 0; i < iLength; i++) { oSelect.options[i].text = oSelect.options[i].value = iStart + i; }
	//设置选中项
	oSelect.options[iIndex].setAttribute("selected", "true");
  }
};

