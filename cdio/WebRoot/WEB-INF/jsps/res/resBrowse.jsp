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
    </style>
    <script type="text/javascript" src="js/res/resDocBrowse.js"></script>

</head>
  <body >
    <div class="container" style="height:170%;height:180%;padding-left:40px ">
 		<div class="navbar-inner" style="margin-bottom:30px;">
                
                 <a style="float:left;"><h5>知识库</h5></a>
               
     			 <div class="search"> 
                  <button type="submit" class="btn btn-primary" contenteditable="true">搜索</button>
               	 </div>
     			<div class="search">
                  <input class="input-medium search-query" type="text">
                 
          </div>
        </div>
    
    <div class="main" style="padding-left:20px;">
    	<div class="head">
    		
    		<div class="header" id="icon">
    		<img src="image/res/documents_icon_docx.png" style="width:35px; height:35px;">
    		</div>
    		
    		<div class="header" >
    		<h3>社会实践调查报告</h3>
    		</div>
    		<div class="header" id="view-count-header"><b>2000人阅读</b></div>
    	</div>
    	<div class="span6" style="padding-left:10px">
    			<span class="label badge-success resTag">信息<a style="text-decoration:none" href="#"><i class="icon-remove" style="display:none"></i></a></span>
    			<span class="label badge-success resTag">语文作文<a style="text-decoration:none" href="#"><i class="icon-remove" style="display:none"></i></a></span>
				<span class="label badge-success resTag">数学<a style="text-decoration:none" href="#"><i class="icon-remove" style="display:none"></i></a></span>
	    		<a  style="text-decoration:none;cursor:pointer" id="editTag" ><i class="icon-pencil"></i></a>
	    		<p  style="padding-top:10px;display:none" id="icon-add">
	    			<input type="text" style="width:80px"/>
	    			 <a style="text-decoration:none;cursor:pointer;" id="addTag"><i class="icon-plus"></i></a>
	    		</p>
    	</div>	
    	<div class="reader" style="margin-top:100px">
    		<div class="doc" style="width:110%">
    		  <s:form action = "show" method = "post">	
      		  <s:hidden name="resDetail.resHttppath"></s:hidden>
      		  <div >
	        		<a id="viewerPlaceHolder" style="width:800px;height:880px;display:block;"></a>
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
    
    
    
    <div class="aside" style="margin:130px 80px 0 0;  border-left-width: 0px;border:1px solid #F2F2F2">
	    <div class="info">
	    	<div class="info-zone">
	    			<img src="image/res/uploadBtn1.png" id="cancelBtn" style="margin-top:20px;height:53px;width:170px;"/> 
	    	</div> 
	    </div>
    	
    	<div class="info">
    		<div class="info-title">
    			<b>文档信息</b>
    			<hr style="margin-top:4px"/>
    		</div>
    		
	    	<div class="info-zone" style="margin-left:-200px">
	    			<div>
	    			<a>吴孟达</a>（讲师）<br>
	    			</div>
	    			
	    			<div>
	    			<b>贡献于2013年1月1日</b>
	    			</div>
	    			
	    			<div>
	    			<b>大小：312k</b>
	    			</div>
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
     <div class="navbar navbar-fixed-bottom" style="margin-left:85x;margin-right:150px;background-color:#D7EAE2;border:1px solid #AFCFC1;height:30px">
    	<div class="navbar-inner" style="background-color:#D7EAE2;">
    		<div class="container" style="background-color:#D7EAE2;">
    			<div class="span7">
    				<a class="viewTool" href="#" style="padding-top:5px;text-decoration: none;"  id="searchBtn"><i class="icon-search"></i></a>
	    			<a class="viewTool" href="#"  style="padding-left:20px;padding-right:350px"><i class="icon-fullscreen"></i></a>
	    			<a class="viewTool" href="#"  id="prePageBtn" style="padding-right:15px"><i class="icon-arrow-up"></i></a>
	    			<input type="text" value="#"   id="nextPageBtn"style="width:50px;margin-top:5px">/<label id="totalPage">20</label>
	    			<a class="viewTool" href="#" onclick="getDocViewer().nextPage()"><i class="icon-arrow-down"></i></a>
	    			
    			</div>
    			<div style="float:right;margin-right:40px">
    				<a class="viewTool" href="#" id="magnifyBtn"><i class="icon-plus"></i></a>
    				<a class="viewTool" href="#" id="narrowBtn" style="padding-left:20px;padding-right:50px"><i class="icon-minus"></i></a>
    				<a href="#"   class="btn"  id="collectBtn">收藏</a>
			    	<a href="#"   class="btn" id="downloadBtn">下载</a>
    			</div>
    		</div>
    	 </div>
    </div>

   
  </body>
</html>
