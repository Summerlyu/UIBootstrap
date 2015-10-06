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
    
    <title>My JSP 'resmodify.jsp' starting page</title>
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
   	<script type="text/javascript">
		$(function(){
			
			$("tr:odd").addClass("odd");  /* 奇数行添加样式*/
			$("tr:even").addClass("even"); /* 偶数行添加样式*/
			$("#resCatSchool").change(function(){
				addCatItem($(this).find("option:selected").text());
			});
			$("tbody tr").click(function(){
				   $("#resId").val($(this).find('td').eq(1).text().trim());
				  
					var params={
						"resId":$(this).find('td').eq(1).text().trim()
					};
					$.ajax({
						type:"post",
						url:"resUpload/get_resInfor.do",
						data:params,
						dataType:"xml",
						complete:function(request){
							var xmlMsg=request.responseXML;
        					$(xmlMsg).find('detail').each(function(){
        					
        					   var resName = $(this).children("resName").text(); 
        					   $("#fileName").val(resName);
        					   var resDescrib = $(this).children("resDecription").text();
        					   $("#fileDes").text(resDescrib);
        					   var resCatSchool=$(this).children("catSchool").text();
        					   var resCatGrade= $(this).children("catGrade").text();
        					   var resCatSub=$(this).children("catSub").text();
    						   $("#resCatSchool option").each(function(){
	    						   	 if($(this).text()==resCatSchool){
	    						   	 	$(this).attr("selected",true);
	    						   	 }
    						   });
    						   addCatItem(resCatSchool);
    						    $("#resCatGrade option").each(function(){
	    						   	 if($(this).text()==resCatGrade){
	    						   	 	$(this).attr("selected",true);
	    						   	 }
    						   });
    						    $("#resCatSub option").each(function(){
	    						   	 if($(this).text()==resCatSub){
	    						   	 	$(this).attr("selected",true);
	    						   	 }
    						   });
        					   var resAuth=$(this).children("resAuth").text();
        					   $("input[name='auth'][value='"+resAuth+"']").iCheck('check'); 
        					   var tags = new Array();
       						   tags= $(this).children("resTag").text().split("|");
       						   $("#tagsList").empty();
   							   $.each(tags, function (index, tag) { 
	   							   		 var domTag=$("<span class='label label-info resTag' style='margin-right:10px'>"+tag+"<a style='text-decoration:none;cursor:pointer' ><i class='icon-remove' style='display:none'></i></a></span>");   							   
	   							   	     $("#tagsList").prepend(domTag);
   							   	   
   							   	});
        					   
        					   
							   
        					    
        					    $("#fileModifyForm").show(1000);
        					 });
						}
					});
					
			});
			$("#editTag").click(function () {
               	 $(".icon-remove").show();

             });
			$("#addTag").click(function () {
				 var domTag=$("<span class='label label-info resNewTag' style='margin-right:10px'>"+ $("#prependedInput").val()+"<a style='text-decoration:none;cursor:pointer' ><i class='icon-remove' style='display:none'></i></a></span>");   							   
	   			 $("#tagsList").prepend(domTag);
	   			 $("#prependedInput").val("");
               	

             });		
			$("#cancelBtn").click(function(){
					$("#fileModifyForm").hide(1000);	
			});
			$("#modifyBtn").click(function(){
					var definedTags="";
			        $(".resTag").each(function(){
	    			     definedTags=definedTags+$(this).text()+"|";
    				});
    				
					var params={
					  "fileId":$("#resId").val(),
					  "fileDes":$("#fileDes").val(),
					  "auth":$("input[name='auth']:checked").val(),
					  "fileName":$("#fileName").val(),
					  "definedTags":definedTags.substring(0,definedTags.length-1),
					  "fileCat":$("#resCatSchool").find("option:selected").text()+"|"+$("#resCatGrade").find("option:selected").text()+"|"+$("#resCatSub").find("option:selected").text()
					};
					$.ajax({
						type:"POST",
						async:false,
						url:"file/update_resInfor.do",
						data:params,
						dataType:"text",
						success:function(data){
							location.href="file/loadUpload.do";
						}
					});
					
			});
			function addCatItem(selectText){
				if(selectText=="小学"){
					$("#resCatGrade").empty();
				    $("#resCatGrade").append("<option value='Value'>一年级</option>");   
					$("#resCatGrade").append("<option value='Value'>二年级</option>"); 
					$("#resCatGrade").append("<option value='Value'>三年级</option>");
					$("#resCatGrade").append("<option value='Value'>四年级</option>");   
					$("#resCatGrade").append("<option value='Value'>五年级</option>"); 
					$("#resCatGrade").append("<option value='Value'>六年级</option>");
					
					$("#resCatSub").empty();
				    $("#resCatSub").append("<option value='Value'>语文</option>");   
					$("#resCatSub").append("<option value='Value'>数学</option>");
					$("#resCatSub").append("<option value='Value'>英语</option>");  
					 
				}else{
					$("#resCatGrade").empty();
				    $("#resCatGrade").append("<option value='Value'>七年级</option>");   
					$("#resCatGrade").append("<option value='Value'>八年级</option>"); 
					$("#resCatGrade").append("<option value='Value'>九年级</option>");
					
					$("#resCatSub").empty();
				    $("#resCatSub").append("<option value='Value'>语文</option>");   
					$("#resCatSub").append("<option value='Value'>数学</option>");
				    $("#resCatSub").append("<option value='Value'>英语</option>");   
					$("#resCatSub").append("<option value='Value'>生物</option>"); 
				    $("#resCatSub").append("<option value='Value'>地理</option>");   
					$("#resCatSub").append("<option value='Value'>历史</option>");
				    $("#resCatSub").append("<option value='Value'>物理</option>");   
					$("#resCatSub").append("<option value='Value'>化学</option>");
					$("#resCatSub").append("<option value='Value'>政治</option>");  
				}
			}
		});
		
	   function remove1(resId,resName){
         if(confirm("确认要删除《"+resName+"》吗?")){

            location.href='<s:url action="removeResDangerous"  namespace="/resModify"/>?resdangerous.resId='+resId;      

          }
       }
       function update(resId,resName){
       if(confirm("确认要将《"+resName+"》设为安全资料吗?")){
          location.href='<s:url action="updateResDangerous"    namespace="/resModify"/>?resdangerous.resId='+resId;      
       	  }
       }
       function doQuery(pageno)
       {
           if(pageno<0 || pageno><s:property value="Page.totalPage"/>-1)
         	 {
              alert("请输入[1-<s:property value="page.totalPage"/>]内的数字");
              return;
           }
           pageno=pageno-1;
           location.href='<s:url action="loadResDangerous"/>?index='+pageno;
            
        }
        
        function toView(resId){
        	  location.href='<s:url action="view"/>?resDetail.resId='+resId;       	
        	 
          }

   	</script>
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
   	</style>
  </head>
  
  <body>
	<div class="minicontainer" style="padding-left:100px;margin-left:-50px;margin-top:20px;"  >
     <div class="container-fluid" style="border-bottom-style:dotted; border-bottom-color:#BDC3C7; padding-bottom:10px">
        	<div class="row-fluid">
            	<div class="span1">
                	<img src="image/res/Book.png" />
            	</div>
        	<div class="span9">
            	<div><h2 style="color:#27AE60;">危险资料管理</h2></div>
            	<div style="color:#7F8C8D; font-size:14px;">
                    在危险资料管理中，管理员可以查看用户评价不高的文档，并进行删除或者设置为安全从而保留文档的操作。
            	</div>
        		</div>
    		</div>
    	</div>
     
     <div class="tabbable" style="padding-top:40px;">
     
        <div class="tab-pane active" id="download">      
           	<table class="table  table-hover">
           		<thead>
					<tr>
						<th  class="tableheader" width="5%"></th>
						<th  class="tableheader" width="1%" style="display:none"></th>
						<th class="tableheader" width="24%">文档名称</th>
						<th class="tableheader" width="30%">路径</th>
						<th class="tableheader" width="30%">操作</th>
						<th class="tableheader" width="20%"></th>
						
					</tr>
				</thead>
				<tbody>
				<s:iterator value="page.results">
		          <tr>
		          	
		          	<td> </td>
		            <td><a href="javascript:void(0);"  onclick="toView('${resId}');"><s:property value="resName"/></a></td>
		            <td><s:property value="resPath"/></td>
		            <td>
		              <button class="operand" style="height:25px;margin-right:30px;" title="[<s:property value="resName"/>]" onclick="remove1(<s:property value="resId"/>,'<s:property value="resName"/>');"> 删 除&nbsp;<i class="icon-remove"></i> </button>
		           	  <button class="operand" style="height:25px;" title="[<s:property value="resName"/>]" onclick="update(<s:property value="resId"/>,'<s:property value="resName"/>');">设为安全&nbsp;<i class="icon-ok-sign"></i></button>
		            </td>   
		            <td></td>  
		                                               
		          </tr> 	             
	          </s:iterator>
			    </tbody>
               </table>
		<!-- 分页 -->
		<div class="pagination" style="padding-left:35%">
			<ul>
			<s:if test="index>0">
			<li><a href="<s:url action="loadResDangerous"/>?index=<s:property value="index-1"/>"><<</a></li>
			</s:if>
		<s:if test="index < 3">
			<s:if test="Page.totalPage>0">
			<li><a href="<s:url action="loadResDangerous"/>?index=0">1</a></li>
			</s:if>
			<s:if test="Page.totalPage>1">
			<li><a href="<s:url action="loadResDangerous"/>?index=1">2</a></li>
			</s:if>	
			<s:if test="Page.totalPage>2">
			<li><a href="<s:url action="loadResDangerous"/>?index=2">3</a></li>
			</s:if>
			<s:if test="Page.totalPage>3">
			<li><a href="<s:url action="loadResDangerous"/>?index=3">4</a></li>
			</s:if>
			<s:if test="Page.totalPage>4">
			<li><a href="<s:url action="loadResDangerous"/>?index=4">5</a></li>
			</s:if>
			<s:if test="Page.totalPage>5">
			<li><a href="<s:url action="loadResDangerous"/>?index=5">...</a></li>
			</s:if>
		</s:if>	
		<s:if test="index > 2 && index < Page.totalPage-5 && Page.totalPage > 9">
			<li><a href="<s:url action="loadResDangerous"/>?index=<s:property value="index-2"/>"><s:property value="index-1"/></a></li>
			<li><a href="<s:url action="loadResDangerous"/>?index=<s:property value="index-1"/>"><s:property value="index"/></a></li>
			<li><a href="<s:url action="loadResDangerous"/>?index=<s:property value="index"/>"><s:property value="index+1"/></a></li>
			<li><a href="<s:url action="loadResDangerous"/>?index=<s:property value="index+1"/>"><s:property value="index+2"/></a></li>
			<li><a href="<s:url action="loadResDangerous"/>?index=<s:property value="index+2"/>"><s:property value="index+3"/></a></li>
			<s:if test="Page.totalPage>5">
			<li><a href="<s:url action="loadResDangerous"/>?index=<s:property value="index+3"/>">...</a></li>
			</s:if>
		</s:if>
		
		<s:if test="index>2 && Page.totalPage-index < 6">
			<s:if test="Page.totalPage>4">
			<li><a href="<s:url action="loadResDangerous"/>?index=<s:property value="Page.totalPage-5"/>"><s:property value="Page.totalPage-4"/></a></li>
			</s:if>
			<li><a href="<s:url action="loadResDangerous"/>?index=<s:property value="Page.totalPage-4"/>"><s:property value="Page.totalPage-3"/></a></li>
			<li><a href="<s:url action="loadResDangerous"/>?index=<s:property value="Page.totalPage-3"/>"><s:property value="Page.totalPage-2"/></a></li>
			<li><a href="<s:url action="loadResDangerous"/>?index=<s:property value="Page.totalPage-2"/>"><s:property value="Page.totalPage-1"/></a></li>
			<li><a href="<s:url action="loadResDangerous"/>?index=<s:property value="Page.totalPage-1"/>"><s:property value="Page.totalPage"/></a></li>
		</s:if>

		<s:if test="index<page.totalPage-1">
		<li><a href="<s:url action="loadResDangerous"/>?index=<s:property value="index+1"/>">>></a></li>
		</s:if>
		
			</ul>
			<span class="page-skip">一共<s:property value="Page.totalPage"/>页</span>
			<div class="input-append">
				<input name="appendedInputButton" class="span1" type="text" size=4>
				<button class="btn" type="button" onclick="doQuery(document.getElementsByName('appendedInputButton')[0].value);">Go</button>
			</div>
			
		</div>
		<!-- 分页 -->
          </div>     
         </div>
       </div>
  </body>
</html>
