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
    
    <title>KnowlegeLib page</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
   	<link rel="stylesheet" type="text/css" href='<c:url value="css/common/bootstrap.css"/>'/>
   	<link rel="stylesheet" type="text/css" href='<c:url value="css/common/flat-ui.css"/>'/>
	<link rel="stylesheet" type="text/css" href='<c:url value="css/res/search-items.css"/>'/>
	<link rel="stylesheet" type="text/css" href='<c:url value="css/res/custom.css"/>'/>
   	<link rel="Stylesheet" type="text/css" href='<c:url value="js/res/skins/square/blue.css"/>'/>
   	<script type="text/javascript" src="js/common/jquery-1.8.3.min.js"></script>
   	<script type="text/javascript" src="js/res/jquery.icheck.js"></script>
   	<script type="text/javascript" src="js/res/jquery.icheck.min.js"></script>
	<style>
		input[type="text"]{	
			margin-left:-35px;		
			margin-bottom:0px;
			width:530px;
			height:30px;
			padding-top:2px;
			padding-bottom:2px;
		}
		.alert{
			display:none;
			margin-top:10px;
		}
		lable{
			margin-top:5px;
			display:none;
			width:40px;
		}
		input[type="radio"]{	
			padding-top:0px;
		}
	</style>
	
  </head>
  
  <body style="margin-left:240px; height:700px">
  	
  		<div style="margin-left:40px; margin-top:150px;">
  		  	<img alt="resLogo" src="image/res/resLogo.png">
  		</div>
  		
  		<p>
    	<s:form action="fullTextSearch" namespace="/show" onsubmit="return search();" method="post">
	    	<s:textfield name="search.keywords" cols="65"></s:textfield>
	    	<button type="submit" class="btn btn-primary">Search</button>
	    	
			<div class="demo-list clear">
				 <ul style="list-style-type:none;margin-left:-20px;margin-top:5px;">
				 	<li style="float:left;margin-right:15px">
				 	     <input  type="radio" id="square-radio-1" name="search.type" checked value="all">
				 		 <label for="square-radio-1"  style="margin-left:-15px">ALL</label>	
				 	</li>
				 	<li style="float:left;margin-right:15px">
				 	 <input  type="radio" id="square-radio-2" name="search.type" value="word"/>
					 <label for="square-radio-2" style="margin-left:-15px">WORD</label>
					</li>
					<li style="float:left;margin-right:15px">
				 	 <input  type="radio" id="square-radio-3" name="search.type" value="wps"/>
					 <label for="square-radio-3" style="margin-left:-15px">WPS</label>
					</li>
					<li style="float:left;margin-right:15px">
				 	 <input  type="radio" id="square-radio-3" name="search.type" value="excel"/>
					 <label for="square-radio-3" style="margin-left:-15px">EXCEL</label>
					</li>
					<li style="float:left;margin-right:15px">
				 	 <input  type="radio" id="square-radio-4" name="search.type" value="ppt"/>
					 <label for="square-radio-4" style="margin-left:-15px">PPT</label>
					</li>
					<li style="float:left;margin-right:15px">
				 	 <input  type="radio" id="square-radio-5" name="search.type" value="pdf"/>
					 <label for="square-radio-5" style="margin-left:-15px">PDF</label>
					</li>
					<li style="float:left;margin-right:15px">
				 	 <input  type="radio" id="square-radio-6" name="search.type" value="video"/>
					 <label for="square-radio-6" style="margin-left:-15px">VIDEO</label>
					</li>
					<li style="float:left;margin-right:15px">
				 	 <input  type="radio" id="square-radio-6" name="search.type" value="png"/>
					 <label for="square-radio-6" style="margin-left:-15px">PNG</label>
					</li>
				 </ul>
			</div> 
			
			<script> 
		        $(document).ready(function () {
		            $('input').iCheck({
		                checkboxClass: 'icheckbox_square-blue',
		                radioClass: 'iradio_square-blue',
		                increaseArea: '20%' // optional
		            });
		        });
			</script>	
    	</s:form>
    	
    	<div class="alert" id="warningDiv">
		  		<strong>Warning!</strong> 请输入关键字后再进行查询.
		</div>
    	<script	 type="text/javascript" >
			function search() {
		    var keywords = document.getElementsByName("search.keywords")[0].value;
		    if (keywords == '') {
		        document.getElementById("warningDiv").style.display = 'block';
		        return false;
		    }
		}
	</script>
  </body>
</html>
