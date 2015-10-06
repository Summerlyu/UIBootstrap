<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<%@ include file="/WEB-INF/jsps/common/taglibs.jsp" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>"/>
    
    <title>资料管理</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	
	<link rel="stylesheet" type="text/css" href='<c:url value="css/common/bootstrap.css"/>'/>
   	<link rel="stylesheet" type="text/css" href='<c:url value="css/res/font-awesome.css"/>'/>
   	<link rel="stylesheet" type="text/css" href='<c:url value="css/res/res_management.css"/>'/>
   	<link rel="stylesheet" type="text/css" href='<c:url value="css/res/custom.css"/>'/>
   	<link rel="Stylesheet" type="text/css" href='<c:url value="js/res/skins/square/green.css"/>'/>
   	<script type="text/javascript" src="js/common/jquery-1.8.3.min.js"></script>
   	<script type="text/javascript" src="js/res/jquery.icheck.js"></script>
   	<script type="text/javascript" src="js/res/jquery.icheck.min.js"></script>

   <style type="text/css">
   	 body{
   	 	font-weight:normal;
   	 }
   	 textarea{
    	width:500px;
     }
     .navbar input{
		height:30px;	    
	 }
	 input[type="text"]:focus{
		 border-color:#bababa;
		 border-size:2px;
		 -webkit-box-shadow: inset 0 0px 0px rgba(0, 0, 0, 0), 0 0 0px rgba(0, 0, 0, 0);
	     -moz-box-shadow: inset 0 0px 0px rgba(0, 0, 0, 0), 0 0 0px rgba(0, 0, 0, 0);
	     box-shadow: inset 0 0px 0px rgba(0, 0, 0, 0), 0 0 0px rgba(0, 0, 0, 0);
	 }
	 
	 #fileModifyBar{
	 	margin-top:-20px;
	 	height:25px;
	 	background-color:#32978F;
	 	margin-left:-20px;
	 	width:103%;
	 	margin-bottom:15px
	 }
	 #fileModifyForm{
	    padding-top:20px;
	    padding-left:20px;
	    font-family:Arial, Helvetica, sans-serif;
	    font-size:13px;
		color:#000;
		padding-bottom:10px;
		background-color:#FCFCFC;
		width:97%;
		border:2px solid #1D9162;
		display:none;
     }
     span{
      	font-size:10.3pt;
      	font-weight:normal;
     }
     input[type="radio"]{
        font-size:10.3pt;
      	font-weight:normal;
     }
     span8 div{
     	padding-bottom:-20px;
     }
     select{
     	width:100px;
     }
     #cancelBtn{
     	background-color:#247A71;
	    *background-color:#247A71; 
		background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#247A71), to(#247A71));
		background-image: -webkit-linear-gradient(top, #247A71, #247A71);
		background-image:-moz-linear-gradient(top, #247A71, #247A71);
		color:#fff;
		font-size:10pt;
		width:80px;
		border:1px solid #7A7A7A ;
     }
     #modifyBtn{
     	margin-right:30px;
		width:90px;
		background-color:#FEA21B;
		*background-color:#FEA21B;
		background-image:-moz-linear-gradient(top, #FEA21B, #FEA21B); 
		background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#FEA21B), to(#FEA21B));
		background-image: -webkit-linear-gradient(top, #FEA21B, #FEA21B);
		color:#FFFFFF;
		font-size:10pt; 
     }
     table{
    	 text-aligh:center;
     }
     .resNewTag
      {
            padding:2px 4px;
            margin:2px 5px;
            background-color:#1ABC9C;
       }
       .page-skip {
				color:#005580;
			    display: inline-block;
			    font-family: Tahoma,SimSun,Arial;
			    height: 24px;
			    line-height: 24px;
			    margin: 0;
			    min-width: 16px;
			    padding: 0 5px;
			    text-align: center;
			    vertical-align: top;
			    white-space: nowrap;
			}
			.pagination .input-append{
				margin-top: -12px;
			}
			.pagination .span1{
				height: 30px;
			}
			.font-kind{
				font-size:15px;
				font-family:微软雅黑;
			}
   	</style>


  </head>
  
  <body>
  	<div class="container-fluid" style="border-bottom-style:dotted; border-bottom-color:#BDC3C7; padding-bottom:30px;margin-top:15px;margin-bottom:35px">
        <div class="row-fluid">
            <div class="span1">
                <img src="image/res/Pocket.png" >
            </div>
        <div class="span9">
            <div><h2 style="color:#27AE60;">文档管理</h2></div>
            <div style="color:#7F8C8D; font-size:14px;">
                    在文档管理中，用户可以对已经上传的文档进行修改、删除等操作，也可以查看收藏和下载的文档。
            </div>
        </div>
    </div>
  	</div>
  	 <div class="minicontainer" style="height:180%;padding-left:40px" >
  	 
  	 <div class="tabbable" >
        <ul class="nav nav-tabs">    
     		<li >
            	<a class="lig tabHeader" href="<s:url action="loadUpload" namespace="/"/>" >上传的资料</a>
			</li>    
            <li  class="active">
            	<a class="lig tabHeader" href="<s:url action="loadPerDownAction" namespace="/"/>">下载的资料</a>
           </li>  
            <li>
            	<a class="lig tabHeader" href="<s:url action="loadAllMarkResAction" namespace="/"/>"> 收藏的资料</a>
           </li>  
        </ul> 
       </div>
     <div class="tab-pane active" id="download">
        <table class="table  table-hover">
        <thead>
          <tr>
          	  <th  class="tableheader" width="5%"></th>
          	  <th class="tableheader font-kind" width="15%">资料名</th>  
          	  <th class="tableheader font-kind" width="12%">资料大小</th>
          	  <th class="tableheader font-kind" width="12%">资料类型</th>
          	  <th class="tableheader font-kind" width="15%">下载时间</th>
          	  <th class="tableheader font-kind" width="15%">操作</th>
          </tr>
          </thead>
          <s:iterator value="page.results">
              <tr>
              	  <td><i class="icon-paste"></i></td>
                  <td><a href="javascript:void(0);" onclick="toView('<s:property value="resId"/>');"><s:property value="resName"/></a></td>
                  <td><s:property value="resSize"/></td>
                  <td><s:property value="resType"/></td>
                  <td><s:date name="resUploaddate" format="yyyy-MM-dd HH:mm:ss"/>
				  <td><button class="operand" style="height:25px;" type="button" title="[<s:property value="resName"/>]" onclick="removeRes(<s:property value="resId"/>,'<s:property value="resName"/>');"> 删 除&nbsp;<i class="icon-remove"></i> </button></td>
              </tr>              
          </s:iterator>
      </table>
      </div> 
      
        <!-- 分页 -->
		<div class="pagination" style="padding-left:35%">
			<ul>
			<s:if test="index>0">
			<li><a href="<s:url action="loadPerDownAction"/>?index=<s:property value="index-1"/>"><<</a></li>
			</s:if>

		<s:if test="index<3">
			<s:if test="Page.totalPage>0">
			<li><a href='<s:url action="loadPerDownAction"/>?index=0'>1</a></li>
			</s:if>
			<s:if test="Page.totalPage>1">
			<li><a href='<s:url action="loadPerDownAction"/>?index=1'>2</a></li>
			</s:if>	
			<s:if test="Page.totalPage>2">
			<li><a href='<s:url action="loadPerDownAction"/>?index=2'>3</a></li>
			</s:if>
			<s:if test="Page.totalPage>3">
			<li><a href='<s:url action="loadPerDownAction"/>?index=3'>4</a></li>
			</s:if>
			<s:if test="Page.totalPage>4">
			<li><a href='<s:url action="loadPerDownAction"/>?index=4'>5</a></li>
			</s:if>
			<s:if test="Page.totalPage>5">
			<li><a href='<s:url action="loadPerDownAction"/>?index=5'>...</a></li>
			</s:if>
		</s:if>	
		<s:if test="index>2&&index<Page.totalPage-5">
			<li><a href='<s:url action="loadPerDownAction"/>?index=<s:property value="index-2"/>'><s:property value="index-1"/></a></li>
			<li><a href='<s:url action="loadPerDownAction"/>?index=<s:property value="index-1"/>'><s:property value="index"/></a></li>
			<li><a href='<s:url action="loadPerDownAction"/>?index=<s:property value="index"/>'><s:property value="index+1"/></a></li>
			<li><a href='<s:url action="loadPerDownAction"/>?index=<s:property value="index+1"/>'><s:property value="index+2"/></a></li>
			<li><a href='<s:url action="loadPerDownAction"/>?index=<s:property value="index+2"/>'><s:property value="index+3"/></a></li>
			<s:if test="Page.totalPage>5">
			<li><a href='<s:url action="loadPerDownAction"/>?index=5'>...</a></li>
			</s:if>
		</s:if>
		
		<s:if test="index>4&&Page.totalPage-index<6">
			<s:if test="index<Page.totalPage-4">
			<li><a href='<s:url action="loadPerDownAction"/>?index=<s:property value="Page.totalPage-5"/>'><s:property value="Page.totalPage-4"/></a></li>
			</s:if>
			<s:if test="index<Page.totalPage-3">
			<li><a href='<s:url action="loadPerDownAction"/>?index=<s:property value="Page.totalPage-4"/>'><s:property value="Page.totalPage-3"/></a></li>
			</s:if>	
			<s:if test="index<Page.totalPage-2">
			<li><a href='<s:url action="loadPerDownAction"/>?index=<s:property value="Page.totalPage-3"/>'><s:property value="Page.totalPage-2"/></a></li>
			</s:if>
			<s:if test="index<Page.totalPage-1">
			<li><a href='<s:url action="loadPerDownAction"/>?index=<s:property value="Page.totalPage-2"/>'><s:property value="Page.totalPage-1"/></a></li>
			</s:if>
			<li><a href='<s:url action="loadPerDownAction"/>?index=<s:property value="Page.totalPage-1"/>'><s:property value="Page.totalPage"/></a></li>
		</s:if>

		<s:if test="index<page.totalPage-1">
		<li><a href='<s:url action="loadPerDownAction"/>?index=<s:property value="index+1"/>'>下一页</a></li>
		</s:if>
		
			</ul>
			<span class="page-skip">一共<s:property value="Page.totalPage"/>页</span>
			
			<div class="input-append">
				<input name="appendedInputButton" class="span1" type="text" size=4>
				<button class="btn" type="button" onclick="doQuery(document.getElementsByName('appendedInputButton')[0].value);">Go</button>
			</div>
			
		</div>
      </div>
      <script type="text/javascript">
       function removeRes(resId,resName){
       
      
       	 if(confirm("确认要删除《"+resName+"》资料的下载记录吗?")){
         	location.href='<s:url action="deleteDownResAction"  namespace="/download"/>?resDetail.resId='+resId;
          }
       }
       function doQuery(pageno)
       {
           if(pageno<0 || pageno><s:property value="Page.totalPage"/>)
         	 {
              alert("请输入[1-<s:property value="page.totalPage"/>]内的数字");
              return;
           }
           pageno=pageno-1;
           location.href='<s:url action="loadPerDownAction" />?index='+pageno;
          
            
        }
        $(function(){
			
			$("tr:odd").addClass("odd");  /* 奇数行添加样式*/
			$("tr:even").addClass("even"); /* 偶数行添加样式*/
			});
			
		function toView(resId){
        	  location.href='<s:url action="view"/>?resDetail.resId='+resId;       	
        	 
          }
    </script>
  </body>
</html>
