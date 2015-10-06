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
    
    <title>Search page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
	<link rel="stylesheet" type="text/css" href='<c:url value="css/res/font-awesome.css"/>'/>
	<link rel="stylesheet" type="text/css" href='<c:url value="css/common/bootstrap.css"/>'/>
	<link href='<c:url value="css/common/bootstrap-responsive.css"/>' rel="stylesheet">
   	<link rel="stylesheet" type="text/css" href='<c:url value="css/common/flat-ui.css"/>'/>
	<link rel="stylesheet" type="text/css" href='<c:url value="css/res/search-items.css"/>'/>
	<link rel="stylesheet" type="text/css" href='<c:url value="css/res/custom.css"/>'/>
   	<link rel="Stylesheet" type="text/css" href='<c:url value="js/res/skins/square/blue.css"/>'/>
   	<script type="text/javascript" src="js/common/jquery-1.8.3.min.js"></script>
   	<script type="text/javascript" src="js/res/jquery.icheck.js"></script>
   	<script type="text/javascript" src="js/res/jquery.icheck.min.js"></script>
	<style>
		input[type="text"]{
			margin-bottom:0px;
			height:30px;
			width:400px;
			padding-top:2px;
			padding-bottom:2px;
		}
		.alert{
			display:none;
			margin-top:-10px;
		}
		lable{
			margin-top:0px;
		}
	</style>
	
</head>
<body style="padding-left:20px;">
  	
  	<div class="container clearfix">
  	
       	<s:form action="fullTextSearch" namespace="/show" onsubmit="return search();" method="post">
       		<div class="search-top span12">
       			<div class="row-fluid">
       				<div class="span7">
		    			<s:textfield name="search.keywords"></s:textfield>
		    		</div>
	    			<div class="span2">
	    				<button type="submit" class="btn btn-primary ">Search</button>
	    			</div>
	    		</div>
	    	</div>
	    	<div style="margin-left:20px;">
	    		<s:radio name="search.type" 
	    			list="#{'all':'ALL','wps':'WPS','word':'WORD','excel':'EXCEL','pdf':'PDF','txt':'TXT','video':'VIDEO','png':'PNG'}"/>
	    	</div>
	    	
	    	<div class="alert" id="warningDiv">
		  		<strong>Warning!</strong> 请输入关键字后再进行查询.
			</div>
			
			<div style="padding-left:25px; margin-bottom:-10px; margin-top:15px">相关知识库内容：</div>
        
	    	<c:forEach var="searchResult" items="${searchList}">
	        <div style="width:80%">
	            <div class="search-content">
	                <div>
	                	<span class="typelable">${searchResult.resType}</span>
	                    <a class="a-linear" href="javascript:void(0);" onclick="toView('${searchResult.resId}');">
	                        ${searchResult.title}</a>
	                </div>
	                <div class="author">
	                    	贡献者：${searchResult.author} / ${searchResult.uploadDate}
	                </div>
	                <div class="describe">
	                	${searchResult.content}
	                </div>
	            </div>
	        </div>
	  	    </c:forEach>
	  	    
	  	    <div style="margin-top:10px; float:right">
	  	    	<c:forEach begin="1" end="${pageNum}" var="i">
	  	    		<c:if test="${i eq currentPage}"> 
	  	    			<button type="submit" class="btn btn-info " name="currentPage" value="${i}">${i}</button>
	  	    		</c:if>
	  	    		<c:if test="${i ne currentPage}"> 
	  	    			<button type="submit" class="btn btn-primary " name="currentPage" value="${i}">${i}</button>
	  	    		</c:if>
	  	    	</c:forEach>
	  	    </div>
	  	    
   		</s:form>
   		
  	</div>
  	<script type="text/javascript" >
		function search() {
		    var keywords = document.getElementsByName("search.keywords")[0].value;
		    if (keywords == '') {
		        document.getElementById("warningDiv").style.display = 'block';
		        return false;
		    }
		}
		function toView(resId){
		        	  location.href='<s:url action="view"/>?resDetail.resId='+resId;       	
		        	 
		}
	</script>
</body>
</html>
