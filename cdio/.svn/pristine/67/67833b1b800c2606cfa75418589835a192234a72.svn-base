<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/WEB-INF/jsps/common/taglibs.jsp" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'resVideoBrowse.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<link type="text/css" rel="stylesheet" href='<c:url value="css/res/resBrowse.css"/>' media="screen" />
    <link href='<c:url value="css/common/bootstrap.css"/>' rel="stylesheet" media="screen"> 
	<link href='<c:url value="css/res/font/font-awesome.css" />'rel="stylesheet" media="screen"> 
	<link href='<c:url value="css/common/bootstrap-responsive.css"/>' rel="stylesheet">
	<link rel="stylesheet" type="text/css" href='<c:url value="css/res/font-awesome.css"/>'/>
   	<link rel="stylesheet" type="text/css" href="${basepath}css/res/styles.css">
	<script type="text/javascript" src="js/res/flexpaper_flash.js"></script>
	<script type="text/javascript" src="js/res/flexpaper_flash_debug.js"></script>
   	<script type="text/javascript" src="js/common/jquery-1.8.3.min.js"></script>
    <style type="text/css">
    	.container{
    	   background-color:#FAFDFC;
    	}
    	.brand{
    		font-size:9px;
    	}
    	#collectBtn{
    		width:80px;
    		margin-right:30px;
			background-color:#24AC74;
			*background-color:#24AC74;
			background-image:-moz-linear-gradient(top, #24AC74, #24AC74); 
			background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#24AC74), to(#24AC74));
			background-image: -webkit-linear-gradient(top, #24AC74, #24AC74);
			color:#FFFFFF;
			font-size:11pt;
			
    	}
    	#downloadBtn{
    		width:80px;
    		background-color:#45AC00;
			*background-color:#45AC00; 
			background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#45AC00), to(#45AC00));
			background-image: -webkit-linear-gradient(top, #45AC00, #45AC00);
			background-image:-moz-linear-gradient(top, #45AC00, #45AC00);
			color:#FFFFFF;
			font-size:11pt;
			border:1px solid #C4DAD1 ;
			
    	}
    	.viewTool{
    		text-decoration: none;
    	}
    	
    	#resInfor div{
    		margin-bottom:10px;
    	}
    </style>


  </head>
  
  <body>
    <div class="container" style="width:1050px">
 		<div class="navbar-inner" style="margin-bottom:30px;">
                
                 <a href = '<s:url action="gotoSearchHome" namespace="/search"/>' style="float:left;"><h5>知识库</h5></a>
               
     			   <s:form action="fullTextSearch" namespace="/show" onsubmit="return search();" method="post">
	    	
	          
     			<div class="search">
                  <s:textfield name="search.keywords" class="input-medium search-query" type="text" style="height:28px;width:200px"></s:textfield>
                  <button type="submit" class="btn btn-primary" contenteditable="true"  name="search.type"  value="all">搜索</button>
          		</div>
          		
          		</s:form>
        </div>
    
    <div class="main" style="padding-left:20px;">
    	<div class="head">
    		
    		<div class="header" id="icon">
    				<img src="image/res/10_device_access_video.png" style="width:30px; height:25px;">
    		</div>
    		
    		<div class="header" >
    		<h3><s:text name="resDetail.resName"/></h3>
    		</div>
    		<div class="header" id="view-count-header"></div>
    	</div>
    	<div class="span6" style="padding-left:10px">
    			<s:iterator	value="resDetail.resTags" id="tag">
    				<span class="label badge-success resTag"><s:property value="#tag.tagContent"/><a style="text-decoration:none" href="#"><i class="icon-remove" style="display:none"></i></a></span>
    			</s:iterator>
	    		<a  style="text-decoration:none;cursor:pointer" id="editTag" ><i class="icon-pencil"></i></a>
	    		<p  style="padding-top:10px;display:none" id="icon-add">
	    			<input type="text" style="width:80px"/>
	    			 <a style="text-decoration:none;cursor:pointer;" id="addTag"><i class="icon-plus"></i></a>
	    		</p>
    	</div>	
    	<div class="reader" style="margin-top:100px">
    	
    		<div class="doc" style="width:110%">
    		 	<s:form action="showVideoAction" method="post">
          			<s:hidden name="resDetail.resPath"></s:hidden>
				    <embed 
				        id="videoPlayer"
				    	src="${resDetail.resPath}"
				        flashVars="id=1931021" 
				    	allowFullScreen="true" quality="high" 
				    	width="700" height="500" align="middle" 
				    	allowScriptAccess="always"
				    	type="application/x-shockwave-flash">
				   </embed>
   				</s:form>
    		</div>
    	</div>
    </div>
    
    
    
 	 <div class="aside" style="margin:100px 20px 0 0; border-left-width: 0px;border:1px solid #F2F2F2">
	    <div class="info">
	    	<div class="info-zone" style="text-align:center;margin-top:10px;">
	    			<img src="image/res/uploadBtn1.png" id="cancelBtn" style="margin-top:20px;height:53px;width:170px;" onclick="toupload()"/> 
	    	</div> 
	    </div>
    	
    	<div class="info-zone" style="margin-top:-7px;">
    		<div class="info-title">
    			<b>视频信息</b>
    			<hr style="margin-top:4px"/>
    		</div>
	    	<div class="info-zone" id="resInfor" style="margin-right:1px;margin-top:-10px;">
	    			<div>
	    			<a><s:text name="user.userName"/></a><br>
	    			</div>
	    			<div>
	    			<b>贡献于:<s:text name="resDetail.resUploaddate"/></b>
	    			</div>
	    			<div>
	    			<b>大小：<s:text name="resDetail.resSize"></s:text></b>
	    			</div>
	    			<div>
	    			<b>文档描述：<s:text name="resDetail.resDecription"></s:text></b>
	    			</div>
	    			<div>
		    			<b style="font-size:15pt">
		    				<a  id="upBtn"><i class="icon-thumbs-up"></i><s:label name="resDetail.resUp" id="resUpVal"/></a>
		    				<a  id="downBtn" style="padding-left:40px;"><i class="icon-thumbs-down"></i><s:label name="resDetail.resDown" id="resDownVal"/></a>
		    			</b>
	    			</div>
	    	</div>
	    </div>
     <div  id="search" style="margin-top:465px;margin-left:-45px;border:1px solid #C8DBD3;background-color:#EDF8F4;width:210px;position:fixed;display:none" >
     	<div class="input-append" style="padding-top:20px;padding-left:10px">
	     	 <input class="span2" id="appendedInput" type="text" style="height:30px">
	     	 <span class="add-on"><a href="#" id="searchText"><i class="icon-search"></i></a></span>
     	 </div>
     </div>
     	
     </div>
     <div class="navbar-fixed-bottom" style="background-color:#D7EAE2;border:1px solid #AFCFC1;margin-top:20px">
    	<div style="background-color:#D7EAE2;margin-left:85px;margin-right:75px;height:40px;">
    		<div class="container" style="background-color:#D7EAE2;">
    			<div class="span7">
	    			<a class="viewTool" href="${resDetail.resPath}"  style="padding-left:20px;padding-right:350px"><i class="icon-fullscreen"></i></a>
    			</div>
    			<div style="float:right;margin-right:40px">
    				<a class="viewTool"  id="magnifyBtn"><i class="icon-plus"></i></a>
    				<a class="viewTool" id="narrowBtn" style="padding-left:20px;padding-right:50px"><i class="icon-minus"></i></a>
    				<a   class="btn"  id="collectBtn">收藏</a>
    			</div>
    		</div>
    	 </div>
    </div>
          <script type="text/javascript">
      var txt_zoomfactor=1.0;
      $(function(){
      		$("#editTag").click(function () {
    			 $(".icon-remove").show();
               	 $("#icon-add").show();
               	 $(".reader").css('margin-top','125px');

          	});
          	$("#addTag").click(function () {
               	 $("#icon-add").hide();
               	 $(".reader").css('margin-top','100px');
          	});
          	$("#collectBtn").click(function(){
          		var params={
				  		"resId":$("#resId").val()
					};
          			$.ajax({
						type:"post",
						url:"add_perMark.action",
						data:params,
						success:function(data){
							$("#collectDiv").show(1000);
							setTimeout(function(){$("#collectDiv").hide();},1000);
						}
				   });
          	});
          	$("#upBtn").click(function(){
          			var params={
				  		"resId":$("#resId").val()
					};
          			$.ajax({
						type:"post",
						url:"up_res.action",
						data:params,
						success:function(data){
						   var val = parseInt($("#resUpVal").html());
						   $("#resUpVal").html(val+1);
						}
				   });	
          		
          		
          	});
          	$("#downBtn").click(function(){
          			var params={
				  		"resId":$("#resId").val()
					};
          			$.ajax({
						type:"post",
						url:"down_res.action",
						data:params,
						success:function(data){
							 var val = parseInt($("#resDownVal").html());
						   	 $("#resDownVal").html(val+1);
						}
				   });	
          		
          	});
      	}
       );
       
       function search() {
		    var keywords = document.getElementsByName("search.keywords")[0].value;
		    if(keywords == ""){
		        return false;
		    }
		}
	
	   function toupload(){
        	  location.href='<s:url action="forUpload_res" namespace = "file"/>';       	
        	 
          }  
       
    </script>  
    
  </body>
</html>
