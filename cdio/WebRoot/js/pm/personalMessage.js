/*
    Document   : personalMessage.js
    Created    : 2013-4-27, 15:56:31
    Author     : 蒋子良
*/

/*
 * Updated    ：2013-6-5
 * Author     : 陈雅琳
 */
/*----------创建异步对象-----------------------*/
function createRequest() { 
    //创建异步请求
    try {
      request = new XMLHttpRequest();
    } catch (tryMS) {
      try {
        request = new ActiveXObject("Msxml2.XMLHTTP");
      } catch (otherMS) {
        try {
          request = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (failed) {
          request = null;
        }
      }
    }	
    return request; 
}


/*---------------------------*/
window.onload=initPage;
var myMessageList=[];                          //全局变量，用于储存解析后的私信列表
var tempIndex;                                 //删除信息时要用到的临时变量
var msglistNo=myMessageList.length;						//判断有新消息
var newmsgNo;				//新消息数量
var pageIndex=1;							   //当前页面index
var pageSize=10;							   //每页显示数量
var totalPage;								   //总页数
function initPage(){
    //初始化页面
    document.getElementById("sendMessageBtn").onclick=sendMessage;
    document.getElementById("showMessageBtn").onclick=askMessage;
    document.getElementById("toUserSelect").onblur=checkName;
    askMessage();
//    run();
//    var interval;
//    function run(){
//    	interval = setInterval(queryMsg,"600000");
//    }
}
///*-------------------新消息提醒---------------lyn------------------*/
//function queryMsg(){
//    //请求私信列表
//    var askRequest=createRequest();
//    if(askRequest==null){
//        alert("异步请求创建失败，请检查浏览器");
//        return;
//    }
//    var url='ask_pm';
//    //设置回调函数并发送异步请求
//    askRequest.onreadystatechange=readMsg;
//    askRequest.open("GET", url, true);  
//    askRequest.send(null);
//}
//
//function readMsg(){ 
//   //解析服务器端信息并转存至全局变量
//  if (request.readyState == 4) {  
//    if (request.status == 200) {  
//    	 
//       var responseDoc = request.responseText; 
//       myMessageList=eval('('+responseDoc+')'); 
//       if(msglistNo==myMessageList.length){
//    	   $("#newmsg").css("display","none");
//       }else if(msglistNo<myMessageList.length){
//    	      msglistNo= myMessageList.length;
//    	    $("#newmsg").html(msglistNo);
//    	   $("#newmsg").css("display","block");
//    	   alert("您有新私信");
//       }
//    }
//  }
//}


/*------------------------------------------*/

function toSend(){
	document.getElementById("toUserSelect").disable=false;
	document.getElementById("toUserSelect").value="";
	document.getElementById("toUserSelect").focus();
	document.getElementById("toUserSelectTips").innerHTML="";
	replyMessage("+i+");
}

function MyMessage(messageId,fromUserId,fromUserName,title,text,date){
    //MyMessage构造函数
    this.messageId=messageId;
    this.fromUserId=fromUserId;
    this.fromUserName=fromUserName;
    this.title=title;
    this.text=text;
    this.date=date;
}

function checkName(){
    document.getElementById("sendMessageBtn").disabled=true;
    var request=createRequest();
    if(request==null){
        alert("异步请求创建失败，请检查浏览器");
        return;
    }

    var toUserName=document.getElementById("toUserSelect").value;
    if(toUserSelect.length==0){
        document.getElementById("toUserSelectTips").value="内容不能为空";
        return;
    }
    
    var url='checkName_pm';
    var requestData="toUserName="+toUserName;
    
    //设置回调函数并打开异步请求
    request.onreadystatechange=checkNameFinish;
    request.open("POST", url, true);   
    request.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8"); 
    request.send(requestData);
}

function checkNameFinish(){
    if (request.readyState == 4) {  
     if (request.status == 200) {     
              var text = request.responseText;
              if(text=="nouser"){
                    document.getElementById("toUserSelectTips").innerHTML="找不到该用户";
                    return;
               }
               if(text==="error"){
                    document.getElementById("toUserSelectTips").innerHTML="查询中发生了错误";
               }else{      
                   document.getElementById("touserid").value=request.responseText;
                   document.getElementById("toUserSelectTips").innerHTML="";
                   document.getElementById("sendMessageBtn").disabled=false;
          }
      }
   }
}

function sendMessage(){
    //发送私信
    var request=createRequest();
    if(request==null){
        alert("异步请求创建失败，请检查浏览器");
        return;
    }

    var messageTitle=document.getElementById("messageTitle").value;
    var messageText=document.getElementById("messageText").value;
    var toUserId=document.getElementById("touserid").value;
    var toUserName=document.getElementById("toUserSelect").value;

    if(messageTitle.length==0||messageText.length==0||toUserName.length==0){
        alert("必要信息不能为空！");
        return;
    }
    var url='send_pm';
    var requestData="messageTitle="+messageTitle+"&messageText="+messageText+"&toUserId="+toUserId;
    //设置回调函数并打开异步请求
    request.onreadystatechange=sendFinish;
    request.open("POST", url, true);   
    request.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8"); 
    request.send(requestData);
}

function sendFinish(){
    if (request.readyState == 4) {  
     if (request.status == 200) {
        if(request.responseText=="okay"){
            //发送成功，清除输入框
             clearSendMessageBox();
             
             //刷新列表。
             //演示用，真正使用时较耗服务器资源，应关闭。
             askMessage();
        }else{
            alert("发送失败");
        }
      }
   }
}

function clearSendMessageBox(){
    //清空发件表单并提示发送成功
	document.getElementById("toUserSelectTips").innerHTML="";
	document.getElementById("toUserSelect").value="";
    document.getElementById("messageTitle").value="";
    document.getElementById("messageText").value="";
    document.getElementById("sendMessageCloseBtn").click();
    alert("发送完毕");
}

function askMessage(){
    //请求私信列表
    var askRequest=createRequest();
    if(askRequest==null){
        alert("异步请求创建失败，请检查浏览器");
        return;
    } 
    var url='ask_pm';
    //设置回调函数并发送异步请求
    askRequest.onreadystatechange=readMessageList;
    askRequest.open("GET", url, true);  
    askRequest.send(null);
}

function readMessageList(){ 
   //解析服务器端信息并转存至全局变量

  if (request.readyState == 4) {  
    if (request.status == 200) {  
       var responseDoc = request.responseText; 
       myMessageList=eval('('+responseDoc+')'); 
  
       if(msglistNo==myMessageList.length){
    	   alert("没有新私信了");
       }else if(msglistNo<myMessageList.length){
    	   newmsgNo=myMessageList.length-msglistNo;
    	   alert("你有"+newmsgNo+"条新消息");
       }
       msglistNo= myMessageList.length;
      	rewriteTable();
    }
  }
}

function rewriteTable(){
   //重绘私信列表
   document.getElementById("div_msglist").innerHTML=null;
   
   var tableHTML="<table class='table table-striped table-hover' id='messageTable'>\n\
    <thead><tr>\n<th>序号</th><th>发信人</th><th>标题</th><th>时间</th><th>操作</th><tr></thead><tbody>";
    
   document.getElementById("div_msglist").innerHTML=tableHTML;
   for(var i=10*(pageIndex-1);i<=10*pageIndex-1&&i<myMessageList.length;i++){  
       var addedHTML="<tr><td>"+(i+1)+"</td><td>"+myMessageList[i].fromUserName+"</td><td width='30%'>"
           +'<a onclick="readMessage('+i+')" style="cursor:pointer;">'+myMessageList[i].title+"</a>"+
           "</td><td>"+myMessageList[i].date+"</td><td><a href='#myModal' role='button'  class='btn btn-success' data-toggle='modal' onclick='replyMessage("+i+")'>回复</a>"+
           "&nbsp;&nbsp;<button class='btn' onclick='delMessage("+i+")'>删除</button></td></tr>";
       
       tableHTML+=addedHTML;
   }

   tableHTML+="</tbody></table>";
   if(myMessageList.length==0){
	   tableHTML="&nbsp;&nbsp;&nbsp;&nbsp;<span>当前没有您的私信哦！</span>";
   }
   document.getElementById("div_msglist").innerHTML=tableHTML;
   parent.iframeAutoFit(parent.document.getElementById("iframepage"));
  
   
   totalPage=myMessageList.length%pageSize==0?myMessageList.length/pageSize :  Math.ceil(myMessageList.length/pageSize);
   document.getElementById("div_pagination").innerHTML=null;
   var pageHTML="<ul>";
   		
   		
   		if((pageIndex-1)>0){
   				pageHTML+=" \n<li>"+'<a onclick="changePageIndex('+(pageIndex-1)+')">'+"<<</a></li>";
   			if((pageIndex-2)>0){
   				pageHTML+=" \n<li>"+'<a onclick="changePageIndex('+(pageIndex-2)+')">'+(pageIndex-2)+"</a></li>";
   			}
   				pageHTML+=" \n<li>"+'<a onclick="changePageIndex('+(pageIndex-1)+')">'+(pageIndex-1)+"</a></li>";
   		}
   				pageHTML+=' \n<li class="active">'+'<a onclick="changePageIndex('+pageIndex+')">'+pageIndex+"</a></li>";   
   		if(pageIndex+1<=totalPage){
   				pageHTML+=" \n<li>"+'<a onclick="changePageIndex('+(pageIndex+1)+')">'+(pageIndex+1)+"</a></li>";
   			if(pageIndex+2<=totalPage){
   				pageHTML+=" \n<li>"+'<a onclick="changePageIndex('+(pageIndex+2)+')">'+(pageIndex+2)+"</a></li>";
   			}
   			if(pageIndex+3<=totalPage){
   				pageHTML+=" \n<li>"+'<a onclick="changePageIndex('+(pageIndex+3)+')">'+"...</a></li>";
   			}
   				pageHTML+=" \n<li>"+'<a onclick="changePageIndex('+(pageIndex+1)+')">'+">></a></li>";
   		}

   		pageHTML+="</ul>\n"+'<span class="page-skip">一共'+Math.ceil(totalPage)+"页</span>\n"+'<div class="input-append">'
   		         +'<input type="text" id="skip" class="span1">'
   		         +'<button class="btn" id="page_skip" onclick="skipPageIndex()">Go</button>\n</div>';
   		
   		document.getElementById("div_pagination").innerHTML=pageHTML;
   
}

function readMessage(i){
	var fUser=myMessageList[i].fromUserName;
	CreateDiv('tab'+i,'与'+fUser+'的对话');
	document.getElementById("showMessage"+'tab'+i).innerHTML=
		"<div class='popover left' style='display:block;position:relative;float:right;margin-right:10px;max-width:999px;'><div class='arrow'></div><h3 class='popover-title'><span style='margin-right:2em;'>"
		+myMessageList[i].title+"</span><span style='font-size:10px;float:right;margin-right:1em;margin-top:1em;'>"+myMessageList[i].date+
		"</span><button onclick='delMessage("+i+")' class='close' title='删除这条私信' style='position:absolute;top:2px;right:2px;'><i class='icon-remove'></i></button></h3><div class='popover-content'><a style='font-size:18px;text-decoration:none;'>"
		+myMessageList[i].fromUserName+"</a>:<span>"+myMessageList[i].text+
				"</span><br/><a href='#myModal' role='button' style='width:50px;'  class=' btn btn-success btnreply' data-toggle='modal' onclick='replyMessage("+i+")'>回复</a>" +
						"</td></tr></div></div> ";
	
}

function changePageIndex(i){
	pageIndex=i;
	rewriteTable();
}
function skipPageIndex(){
	if(document.getElementById("skip").value!=""){
		pageIndex=parseInt(document.getElementById("skip").value);
	}
	rewriteTable();
}

function delMessage(i){
    //删除私信
    if(confirm("确定要删除"+myMessageList[i].fromUserName+"发来的消息："+myMessageList[i].title+"?")){
        var request=createRequest();
        if(request==null){
            alert("异步请求创建失败，请检查浏览器");
            return;
        }
        tempIndex=i;
        var url='delete_pm';
        var requestData="messageid="+myMessageList[i].messageId;
        //设置回调函数并发送异步请求
        request.onreadystatechange=delFinish;
        request.open("POST", url, true);  
        request.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8"); 
        request.send(requestData);
    }
}

function delFinish(){
    if (request.readyState == 4) {  
     if (request.status == 200) {
        if(request.responseText=="okay"){
            //删除成功，更新全局数组并重绘表格
             myMessageList.splice(tempIndex,1);
             rewriteTable();
             $("#"+"showMessagetab"+tempIndex).html("");
             alert("删除成功");
        }else{
            alert("删除失败："+request.responseText);
        }
      }
   }
}

function replyMessage(i){
    //回复私信
    document.getElementById("toUserSelect").value=myMessageList[i].fromUserName;
    document.getElementById("toUserSelect").disabled=true;
    checkName();
    
    document.getElementById("messageTitle").value="re:"+myMessageList[i].title;
    selectItemByMessage(document.getElementById("toUserSelect"),myMessageList[i]);
    //修整内容
    if(myMessageList[i].text.length<=20){
        document.getElementById("messageText").value="回复:/*"+myMessageList[i].text+"*/\n\n";
    }else{
        document.getElementById("messageText").value="回复:/*"+myMessageList[i].text.substring(0,19)+"..."+"*/\n\n";
    }
}

function selectItemByMessage(objSelect, message) {            
    //判断是否存在        
    var isExit = false;        
    for (var i = 0; i < objSelect.options.length; i++) {        
        if (objSelect.options[i].text == message.fromUserName) {        
            objSelect.options[i].selected = true;        
            isExit = true;        
            break;        
        }        
    }  
    //如果选择框里不存在用户，将用户添加到选择框
    if (!isExit) {        
        var varItem = new Option(message.fromUserName, message.fromUserId);      
        objSelect.options.add(varItem);  
        varItem.selected = true;
    }      
}      

/*------------lyn---------------*/
function CreateDiv(tabid, name)
{
	///如果当前tabid存在直接显示已经打开的tab
	if (document.getElementById("div_" + tabid) == null)
	{
		//创建div
		var box = document.createElement("div");
		box.id = "div_" + tabid;
		$(box).addClass("msg_cnt");
		var dltxt='<div id="showMessage'+tabid+'" class="dl-horizontal"></div>';
		box.innerHTML=dltxt;
		document.getElementById("div_pannel").appendChild(box);
		
		

		//遍历并清除开始存在的tab当前效果并隐藏其显示的div
		var tablist = document.getElementById("div_tab").getElementsByTagName('li');
		var pannellist =$(".msg_cnt");
		var wid=90/(tablist.length+1);
		if (tablist.length > 0)
		{
			for (var i = 0; i < tablist.length; i++)
			{
				tablist[i].className = "";
				pannellist[i].style.display = "none";
			}
		}
		if(tablist.length>4)
			{
			for ( var j = 0; j < tablist.length; j++)
			{
				tablist[j].style.width = wid+"%";
			}
			}

		//创建li菜单
		var tab = document.createElement("li");
		tab.className = "crent";
		tab.id = tabid;
		var litxt = "<span><a href=\"javascript:;\" onclick=\"javascript:CreateDiv('" + tabid +  "','" 
		+ name + "')\" title=" + name + " class=\"menua\">" + name + "</a><a onclick=\"RemoveDiv('" 
		+ tabid + "')\" class=\"win_close\" title=\"关闭当前窗口\"><i class='icon-remove'></i><a></span>";
		tab.innerHTML = litxt;
//		$(tab).addClass("msgtab");
//		$("li").click(function(){
//			$(".pagination").css("display","none");
//		});
		document.getElementById("div_tab").appendChild(tab);
	}
	else
	{
		var tablist = document.getElementById("div_tab").getElementsByTagName('li');
		var pannellist = $(".msg_cnt");
		for (i = 0; i < tablist.length; i++)
		{
			tablist[i].className = "";
			pannellist[i].style.display = "none";
		}
		document.getElementById(tabid).className = 'crent';
		document.getElementById("div_" + tabid).style.display = 'block';
	}
	if($("#msglist").attr("class") != "crent"){
		$(".pagination").css("display","none");
	}else if($("#msglist").attr("class") == "crent"){
		$(".pagination").css("display","block");
	}
}
function RemoveDiv(obj)
{
	var ob = document.getElementById(obj);
	ob.parentNode.removeChild(ob);
	var obdiv = document.getElementById("div_" + obj);
	obdiv.parentNode.removeChild(obdiv);
	var tablist = document.getElementById("div_tab").getElementsByTagName('li');
	var pannellist = $(".msg_cnt");
	if (tablist.length > 0)
	{
		for (i = 0; i < tablist.length; i++)
		{
			tablist[i].className = "";
			pannellist[i].style.display = "none";
		}
		tablist[tablist.length - 1].className = 'crent';
		pannellist[tablist.length - 1].style.display = 'block';
		}	
}


