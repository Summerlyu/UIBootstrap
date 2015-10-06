/*
    Document   : personalMessage.min.js
    Created    : 2013-4-27, 15:58:31
    Author     : 蒋子良
*/

window.onload=initPage;
function initPage(){
    $("sendMessageBtn").onclick=sendMessage;
}

function sendMessage(){
    var messageTitle=$("messageTitle").value;
    var messageText=$("messageText").value;
    var toUserId=$("touserid").value;
    
    if(messageTitle.length==0||messageText.length==0){
        alert("标题或内容不能为空");
        return;
    }
    
    if(toUserId.length==0){
        alert("目标用户错误");
        return;
    }
    
    var request=createRequest();
    if(request==null){
        alert("异步请求创建失败，请检查浏览器");
        return;
    }
    
    var url='send_pm';
    var requestData="messageTitle="+messageTitle+"&messageText="+messageText+"&toUserId="+toUserId;
    request.onreadystatechange=sendFinish;
    request.open("POST", url, true);   
    request.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8"); 
    request.send(requestData);
}

function sendFinish(){
    if (request.readyState == 4) {  
     if (request.status == 200) {
        if(request.responseText=="okay"){
             clearSendMessageBox();
        }else{
            alert("发送失败");
        }
      }
   }
}

function clearSendMessageBox(){
    //清空发件表单并提示发送成功
    $("messageTitle").value="";
    $("messageText").value="";
    $("closeMessageBtn").click();
    alert("发送完毕");
}