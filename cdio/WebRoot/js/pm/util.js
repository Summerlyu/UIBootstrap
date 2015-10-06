/*
    Document   : util.js
    Created on : 2013-4-25, 15:16:37
    Description : javascript工具包
    Author     : 蒋子良
*/
function $(elementId){
    return document.getElementById(elementId);
}

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