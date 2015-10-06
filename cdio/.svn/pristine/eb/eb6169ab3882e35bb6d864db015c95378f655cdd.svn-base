<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/WEB-INF/jsps/common/taglibs.jsp" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
 <head>
    <title>face.html</title>
    <meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
    <meta http-equiv="description" content="this is my page">
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
	<link type="text/css" rel="stylesheet" href='<c:url value="css/res/resBrowse.css"/>' media="screen" />
    <link href='<c:url value="css/common/bootstrap.css"/>' rel="stylesheet" media="screen"> 
	<link href='<c:url value="css/res/font/font-awesome.css" />'rel="stylesheet" media="screen"> 
	<link href='<c:url value="css/common/bootstrap-responsive.css"/>' rel="stylesheet">
	<link rel="stylesheet" type="text/css" href='<c:url value="css/res/font-awesome.css"/>'/>
   	
	<script type="text/javascript" src="js/res/flexpaper_flash.js"></script>
	<script type="text/javascript" src="js/res/flexpaper_flash_debug.js"></script>
   	<script type="text/javascript" src="js/common/jquery-1.8.3.min.js"></script>
    <style type="text/css">
    	body{
    		 background-color:#EDF7F3;
    	}
    	.resNewTag
	    {
	            padding:2px 4px;
	            margin:2px 5px;
	            background-color:#45AC00;
	     }
    	a{
    		text-decoration: none;
    	}
    	.container{
    	   background-color:#EDF7F3;
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
			-webkit-border-radius: 4px 0 0 4px;
     		-moz-border-radius: 4px 0 0 4px;
         	 border-radius: 4px 0 0 4px;
			
    	}
    	.viewTool{
    		text-decoration: none;
    	}
    	.relative-doc{
    		margin-bottom:15px;
    	}
    	.navbar{
    		background-color:#D7EAE2;
    	}
    	.navbar-inner{
    		background-color:#D7EAE2;
    	}
    	.container{
    		background-color:#EDF7F3;
    	}
    </style>
    <script type="text/javascript">
      var txt_zoomfactor=1.0;
      $(function(){
      		$("#editTag").click(function () {
    			 $(".icon-remove").show();
               	 $("#icon-add").show();
               	 $(".reader").css('margin-top','125px');

          	});
          	$("#addTag").click(function () {
          		 
          		 var domTag=$("<span class='label label-info resNewTag' style='margin-right:10px'>"+$("#newTagValue").val()+"<a style='text-decoration:none;cursor:pointer' ><i class='icon-remove'></i></a></span>");   							   
	   			 $(".span6").prepend(domTag);
               	 $("#icon-add").hide();
               	 $(".reader").css('margin-top','100px');
          	});
          	$("#magnifyBtn").click(function(){
          		if(txt_zoomfactor<=4.7){
          		    txt_zoomfactor=txt_zoomfactor+0.3;
          			getDocViewer().setZoom(txt_zoomfactor);
          		}
          	});
          	$("#narrowBtn").click(function(){
          		if(txt_zoomfactor>=0.5){
          			 txt_zoomfactor=txt_zoomfactor-0.3;
          			getDocViewer().setZoom(txt_zoomfactor);
          		}
          	});
          	$("#prePageBtn").click(function(){
          	    if( getDocViewer().getCurrPage()>1){
          			getDocViewer().prevPage();
          			var pageNo=parseInt($("#pageNum").val());
          			pageNo=pageNo-1;
          			$("#pageNum").val(pageNo);
          			if(getDocViewer().getCurrPage()==1){
          				//改变上一页图标的颜色
          			}
          		}
          		
          	});
          	$("#nextPageBtn").click(function(){
          		 var totalPage= $("#totalPage").html();
          		
          		 if( getDocViewer().getCurrPage()<totalPage){
          			getDocViewer().nextPage();
          			var pageNo=parseInt($("#pageNum").val());
          			pageNo=pageNo+1;
          			$("#pageNum").val(pageNo);
          			if(getDocViewer().getCurrPage()==totalPage){
          				//改变下一页图标的颜色
          			}
          		}
          		
          	});
          	$("#searchText").click(function(){
          		getDocViewer().searchText($('#appendedInput').val());
          		
          	});
          	$("#searchBtn").click(function(){
          		$("#search").show();
          		setTimeout(function(){$("#search").hide();},20000);
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
							setTimeout(function(){$("#collectDiv").hide();},30000);
						}
				   });	
          	});
          	$(".icon-remove").click(function(){
          			
          			$(this).parent().parent().hide();
          	});
          	$("#downloadBtn").click(function(){
          		var params={
				  "resHttpPath":$("#resHttpPath").val()
				};
				$.ajax({
					type:"POST",
					url:"download/PerDownloadAction.action",
					data:params
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
       
       function toView(resId){
        	  location.href='<s:url action="view"/>?resDetail.resId='+resId;       	
        	 
          }
          
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

</head>
  <body style="width:1110px;height:850px">
    <div class="container" style="width:1110px;height:850px">
  
 		<div class="navbar-inner" style="margin-bottom:30px;" onclick="search();">
                
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
    			<s:if test='resDetail.resType=="word"'>
    				<img src="image/res/documents_icon_doc.png" style="width:55px; height:55px;">
    			</s:if>
    			<s:elseif test='resDetail.resType=="ppt"'>
    				<img src="image/res/documents_icon_ppt.png" style="width:55px; height:55px;">
    			</s:elseif>
    			<s:elseif test='resDetail.resType=="txt"'>
    				<img src="image/res/documents_icon_text.png" style="width:55px; height:55px;">
    			</s:elseif>
    			<s:elseif test='resDetail.resType=="pdf"'>
    				<img src="image/res/documents_icon_pdf.png" style="width:55px; height:55px;">
    			</s:elseif>
    			<s:elseif test='resDetail.resType=="excel"'>
    				<img src="image/res/documents_icon_xls.png" style="width:55px; height:55px;">
    			</s:elseif>
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
	    			<input type="text" style="width:80px;height:25px" id="newTagValue"/>
	    			 <a style="text-decoration:none;cursor:pointer;" id="addTag"><i class="icon-plus"></i></a>
	    		</p>
    	</div>	
    	<div class="reader" style="margin-top:100px">
    		<div class="doc" style="width:110%">
    		  <s:form action = "show" method = "post">	
    		  <s:hidden name="resDetail.resId" id="resId"></s:hidden>
      		  <s:hidden name="resDetail.resHttppath" id="resHttpPath"></s:hidden>
      		  <div >
	        		<a id="viewerPlaceHolder" style="width:800px;height:800px;display:block;"></a>
			        <script type="text/javascript"> 
			            var fp = new FlexPaperViewer(	
						 'js/res/FlexPaperViewer',
						 'viewerPlaceHolder', { config : {
						 SwfFile :'<s:property value="resDetail.resHttppath"/>',
						 Scale : 0.6, 
						 ZoomTransition : 'easeOut',
						 ZoomTime : 0.5,
						 ZoomInterval : 0.2,
						 FitPageOnLoad : true,
						 FitWidthOnLoad : true,
						 PrintEnabled : true,
						 FullScreenAsMaxWindow : false,
						 ProgressiveLoading : false,
						 MinZoomSize : 0.2,
						 MaxZoomSize : 5,
						 SearchMatchAll : false,
						 InitViewMode : 'Portrait',
						 ViewModeToolsVisible : false,
						 ZoomToolsVisible :false,
						 NavToolsVisible : false,
						 CursorToolsVisible:true,
						 SearchToolsVisible :false,
  						 localeChain: 'en_US'
						 }});
			        </script>      
        		</div>
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
    			<b>文档信息</b>
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
			    <div class="info-zone"  id="relative-infor" style="margin-top:-18px">
    			<div class="info-title">
    				<b>相关文档推荐</b>
    				<hr style="margin-top:4px"/>
    			</div>
    			
    			<div class="relative-doc-head" style="margin-top:-10px;margin-bottom:10px">
    				<c:forEach var="searchResult" items="${relativeRes}">
				            <div class="relative-doc" style="width:240px">
				              
				                <c:choose>
				                		<c:when test='${searchResult.resType=="word"}' >
					    				<img src="image/res/documents_icon_doc.png" style="width:20px; height:20px;">
					    			</c:when>
					    			<c:when test='${searchResult.resType=="ppt"}'>
					    				<img src="image/res/documents_icon_ppt.png" style="width:20px; height:20px;">
					    			</c:when>
					    			<c:when test='${searchResult.resType=="txt"}'>
					    				<img src="image/res/documents_icon_text.png" style="width:20px; height:20px;">
					    			</c:when>
					    			<c:when test='${searchResult.resType=="pdf"}'>
					    				<img src="image/res/documents_icon_pdf.png" style="width:20px; height:20px;">
					    			</c:when>
					    			<c:when test='${searchResult.resType=="excel"}'>
					    				<img src="image/res/documents_icon_xls.png" style="width:20px; height:20px;">
					    			</c:when>
					    			<c:otherwise>
					    				<img src="image/res/10_device_access_video.png" style="width:20px; height:20px;">
					    			</c:otherwise>
				                </c:choose>
				                
				                	
				                    <a class="a-linear" href="javascript:void(0);" onclick="toView('${searchResult.resId}');">
				                        ${searchResult.title}</a>
				                
				            
				        </div>
  	    			</c:forEach>
    				
    				
    			</div>
    			
    		</div>
	    	</div>
    	

    
     <div  id="search" style="margin-top:845px;margin-left:830px;border:1px solid #C8DBD3;background-color:#EDF8F4;width:210px;position:fixed;display:none;z-index:1030;" >
     	<div class="input-append" style="padding-top:20px;padding-left:10px">
	     	 <input class="span2" id="appendedInput" type="text" style="height:30px">
	     	 <span class="add-on"><a href="javascript:void(0);" id="searchText"><i class="icon-search"></i></a></span>
     	 </div>
     </div>
     <div class="alert alert-success" id="collectDiv" style="display:none;float:right;margin-top:865px;margin-left:820px;border:1px solid #C8DBD3;background-color:#EDF8F4;width:250px;position:fixed;z-index:1030;">
     	<i class="icon-ok-sign"></i>收藏文档成功，可以进入<a href='<s:url value="resPerMark/loadAllMarkResAction.action"/>' id="searchText"><i class="icon-paste">我的收藏</i></a>查看
     </div>
     
     <s:form action="PerDownloadAction" method="post" namespace="/download" cssClass="margin-left:85px;border:1px solid #AFCFC1;">
     	 <s:hidden name="resDetail.resHttppath" ></s:hidden>
	     <div class="navbar navbar-fixed-bottom" style="background-color:#D7EAE2;border:1px solid #AFCFC1;margin-top:10px">
	    	<div  style="background-color:#D7EAE2;margin-left:85px;margin-right:75px;height:40px;">
	    		<div class="container" style="background-color:#D7EAE2;">
	    			<div class="span7" style="background-color:#D7EAE2;">
	    				<a class="viewTool" href="javascript:void(0);" style="padding-top:5px;text-decoration: none;"  id="searchBtn"><i class="icon-search"></i></a>
		    			<a class="viewTool" href="javascript:void(0);"  style="padding-left:20px;padding-right:200px"><i class="icon-fullscreen"></i></a>
		    			<a class="viewTool" href="javascript:void(0);"  id="prePageBtn" style="padding-right:15px"><i class="icon-arrow-up"></i></a>
		    			<input type="text" value="1"   id="pageNum"   style="width:50px;margin-top:5px">/<s:label name="resDetail.resPage" id="totalPage"/>
		    			<a class="viewTool" href="javascript:void(0);"   id="nextPageBtn"  ><i class="icon-arrow-down"></i></a>
	    			</div>
	    			<div style="float:right;margin-right:40px;background-color:#D7EAE2;">
	    				<a class="viewTool" href="javascript:void(0);" id="magnifyBtn"><i class="icon-plus"></i></a>
	    				<a class="viewTool" href="javascript:void(0);" id="narrowBtn" style="padding-left:20px;padding-right:50px"><i class="icon-minus"></i></a>
	    				<a href="javascript:void(0);"   class="btn"  id="collectBtn">收藏</a>
				    	<s:submit value="下载" id="downloadBtn" cssClass="btn"></s:submit>	
	    			</div>
	    		</div>
	    	 </div>
	    </div>
    </s:form>
</div>


  </body>
</html>
