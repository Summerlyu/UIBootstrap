/*
    Document   : personalMessage.js
    Created on : 2013-4-27, 15:56:31
    Author     : 蒋子良
*/

window.onload=initPage;
var userId;                                    //全局变量，登录用户id
var myMessageList=[];                          //全局变量，用于储存解析后的私信列表
var tempIndex;                                 //删除信息时要用到的临时变量

function initPage(){
    //初始化页面
    userId=$("userid").value;  
    $("sendMessageBtn").onclick=sendMessage;
    $("showMessageBtn").onclick=askMessage;
    askMessage();
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

function sendMessage(){
    //发送私信
    var request=createRequest();
    if(request==null){
        alert("异步请求创建失败，请检查浏览器");
        return;
    }

    var messageTitle=$("messageTitle").value;
    var messageText=$("messageText").value;
    var toUserId=$("touserid").value;
    if(messageTitle.length==0||messageText.length==0){
        alert("私信标题或内容不能为空");
        return;
    }
    var url='PMServlet';
    var requestData="act=sendPM&messagetitle="+messageTitle+"&messagetext="+messageText+"&touserid="+toUserId+"&userid="+userId;
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
            alert(request.responseText);
        }
      }
   }
}

function clearSendMessageBox(){
    //清空发件表单并提示发送成功
    $("messageTitle").value="";
    $("messageText").value="";
    alert("发送完毕");
}

function askMessage(){
    //请求私信列表
    var askRequest=createRequest();
    if(askRequest==null){
        alert("异步请求创建失败，请检查浏览器");
        return;
    }
    var url='PMServlet';
    var requestData="act=askPM&userid="+userId;
    //设置回调函数并发送异步请求
    askRequest.onreadystatechange=readMessageList;
    askRequest.open("POST", url, true);  
    askRequest.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8"); 
    askRequest.send(requestData);
}

function readMessageList(){ 
   //解析服务器端信息并转存至全局变量
  if (request.readyState == 4) {  
    if (request.status == 200) {  
       var responseDoc = request.responseText; 
       myMessageList=eval('('+responseDoc+')'); 
       rewriteTable();
    }
  }
}

function rewriteTable(){
   //重绘私信列表
   $("messageListTable").innerHTML=null;
   
   var tableHTML="<table class='table table-striped table-hover' id='messageTable'>\n\
    <thead><tr>\n<th>序号</th><th>发信人</th><th>标题</th><th>时间</th><th>操作</th><tr></thead><tbody>";
    
   $("messageListTable").innerHTML=tableHTML;
   for(var i=0;i<myMessageList.length;i++){  
       var addedHTML="<tr><td>"+(i+1)+"</td><td>"+myMessageList[i].fromUserName+"</td><td width='30%'>"
           +'<a onclick="readMessage('+i+')" style="cursor:pointer;">'+myMessageList[i].title+"</a>"+
           "</td><td>"+myMessageList[i].date+"</td><td><button class='btn' onclick='replyMessage("+i+")'>回复</button>"+
           "&nbsp;&nbsp;<button class='btn btn-danger' onclick='delMessage("+i+")'>删除</button></td></tr>"
       
       tableHTML+=addedHTML;
   }
   tableHTML+="</tbody></table>";
   $("messageListTable").innerHTML=tableHTML;
}

function readMessage(i){
    //从数组里读取指定私信
    $("showMessage").innerHTML="<dt>标题:</dt>"+"<dd>"+myMessageList[i].title+"</dd>"
        +"<dt>发件人:</dt>"+"<dd>"+myMessageList[i].fromUserName+"</dd>"+
                "<dt>时间:</dt>"+"<dd>"+myMessageList[i].date+"</dd>"+
        "<dt>内容:</dt>"+"<dd>"+myMessageList[i].text+"</dd>"+
        "<button class='btn' onclick='replyMessage("+i+")'>回复</button>"+
        "&nbsp;&nbsp;<button class='btn btn-danger' onclick='delMessage("+i+")'>删除</button></td></tr>";
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
        var url='PMServlet';
        var requestData="act=delPM&messageid="+myMessageList[i].messageId;
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
             alert("删除成功");
        }else{
            alert(request.responseText);
        }
      }
   }
}

function replyMessage(i){
    //回复私信
    $("touserid").value=myMessageList[i].fromUserId;
    $("messageTitle").value="re:"+myMessageList[i].title;
    selectItemByMessage($("toUserSelect"),myMessageList[i]);
    //修整内容
    if(myMessageList[i].text.length<=20){
        $("messageText").value="回复:/*"+myMessageList[i].text+"*/\n\n";
    }else{
        $("messageText").value="回复:/*"+myMessageList[i].text.substring(0,19)+"..."+"*/\n\n";
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