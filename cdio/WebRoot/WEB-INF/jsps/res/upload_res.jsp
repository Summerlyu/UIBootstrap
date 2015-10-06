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
    <title>My JSP 'upload_file.jsp' starting page</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<link rel="stylesheet" type="text/css" href='<c:url value="css/res/default.css"/>'/>
   	<link rel="stylesheet" type="text/css" href='<c:url value="css/res/uploadify.css"/>'/>
   	<link rel="stylesheet" type="text/css" href='<c:url value="css/common/bootstrap.css"/>'/>
   	<link rel="stylesheet" type="text/css" href='<c:url value="css/common/bootstrap-responsive.css"/>'/>
   	<link rel="stylesheet" type="text/css" href='<c:url value="css/res/font-awesome.css"/>'/>
   	<style type="text/css">
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
	 
	 #fileDesBar{
	 	margin-top:-20px;
	 	height:20px;
	 	background-color:#EEEEE0;
	 	margin-left:-20px;
	 	width:107%;
	 	margin-bottom:15px
	 }
	 
   	</style>
   	<script type="text/javascript" src="js/common/bootstrap.js"></script>
	<script type="text/javascript" src="js/common/jquery-1.8.3.min.js"></script>
	<script type="text/javascript" src="js/res/swfobject.js"></script>
	<script type="text/javascript" src="js/res/jquery.uploadify.v2.1.0.js"></script>
	<script type="text/javascript" src="js/res/jquery.validate.js"></script>
	<script type="text/javascript" src="js/res/jquery.validate.messages_cn.js"></script>
	<!-- <script type="text/javascript" src="js/res/uploadResultShow.js"></script>  -->
	<script type="text/javascript" src="js/res/uploadifyConfigure.js"></script>
    <script type="text/javascript">
    var xmlHttp;
		$(function(){
				$("#subFileInforBtn").click(function(){
						$(document.body).css({
							 "overflow-x":"hidden",
							 "overflow-y":"hidden"
						});
						var params={
						  "url":$("#videoUrl").val(),
						  "fileDes":$("#fileDes").val(),
						  "auth":$("input[name='auth']:checked").val(),
						  "fileName":$("#fileName").val(),
						  "definedTags":$("#definedTags").val(),
						  "fileCat":$("#resCatSchool").find("option:selected").text()+"|"+$("#resCatGrade").find("option:selected").text()+"|"+$("#resCatSub").find("option:selected").text()  //获取Select选择的Text
						};
						$.ajax({
							type:"POST",
							url:"resUpload/upload_resInfor.action",
							data:params,
							dataType:"text",
							success:function(data){
								$("#subFileInforBtn").attr('disabled',"true");
							
								$("#uploadResultMsg").show();
							}
						});
				});
		});
		
		function EV_modeAlert(msgID){
			
			var bgObj=document.createElement("div");
			
			bgObj.setAttribute('id','EV_bgModeAlertDiv');
			$('body', parent.document).append(bgObj);
			
			EV_Show_bgDiv();
			
			EV_MsgBox_ID=msgID;
			EV_Show_msgDiv();
		}
		
		
		function EV_closeAlert(){
			var msgObj=document.getElementById(EV_MsgBox_ID);
			var bgObj=document.getElementById("EV_bgModeAlertDiv");
			msgObj.style.display="none";
			document.body.removeChild(bgObj);
			EV_MsgBox_ID="";
		}
		
		
		window.onresize=function(){
			if (EV_MsgBox_ID.length>0){
				EV_Show_bgDiv();
				EV_Show_msgDiv();
			}
		}
		
		
		window.onscroll=function(){
			if (EV_MsgBox_ID.length>0){
				EV_Show_bgDiv();
				EV_Show_msgDiv();
			}
		}
		
		function EV_Show_msgDiv(){
			var msgObj   = document.getElementById("uploadResultMsg");
			msgObj.style.display  = "block";
			var msgWidth = msgObj.scrollWidth;
			var msgHeight= msgObj.scrollHeight;
			var bgTop=EV_myScrollTop();
			var bgLeft=EV_myScrollLeft();
			var bgWidth=EV_myClientWidth();
			var bgHeight=EV_myClientHeight();
			var msgTop=bgTop+Math.round((bgHeight-msgHeight)/2);
			var msgLeft=bgLeft+Math.round((bgWidth-msgWidth)/2);
			msgObj.style.position = "absolute";
			msgObj.style.top      = msgTop;
			msgObj.style.left     = msgLeft+"px";
			msgObj.style.zIndex   = "10001";
			$('body', parent.document).append(msgObj);
			$('body', parent.document).remove(msgObj);
			
		}
		
		function EV_Show_bgDiv(){
			var bgObj=parent.document.getElementById("EV_bgModeAlertDiv");
			var bgWidth=EV_myClientWidth();
			var bgHeight=EV_myClientHeight();
			var bgTop=EV_myScrollTop();
			var bgLeft=EV_myScrollLeft();
			bgObj.style.position   = "absolute";
			bgObj.style.top        = bgTop+"px";
			bgObj.style.left       = bgLeft+"px";
			bgObj.style.width      = bgWidth + "px";
			bgObj.style.height     = bgHeight + 400+"px";
			bgObj.style.zIndex     = "10000";
			bgObj.style.background = "#777";
			bgObj.style.filter     = "progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=60,finishOpacity=60);";
			bgObj.style.opacity    = "0.6";
		}
		
		function EV_myScrollTop(){
			var n=window.parent.pageYOffset 
			|| parent.document.documentElement.scrollTop 
			|| parent.document.body.scrollTop || 0;
			return n;
		}
		
		function EV_myScrollLeft(){
			var n=window.parent.pageXOffset 
			|| parent.document.documentElement.scrollLeft 
			|| parent.document.body.scrollLeft || 0;
			return n;
		}
		
		function EV_myClientWidth(){
			var n=parent.document.documentElement.clientWidth 
			|| parent.document.body.clientWidth || 0;
			return n;
		}
		
		function EV_myClientHeight(){
			var n=parent.document.documentElement.clientHeight 
			|| parent.document.body.clientHeight || 0;
			return n;
		}
    </script>
  </head>
  <body>

   <div style="height:600%;margin-top:20px;margin-left:20px;width:95%">
      		<form  id="fileDescForm"  action="#" method="post" enctype="multipart/form-data" >
	            <div id="docArea" class="navbar navbar-inverse" >
	            	 <div  id="uploadArea-header">
				           <div class="container-fluid">
				                <div class="nav-collapse collapse"> 
				                  <p class="pull-left" style="padding-top:10px;font-size:10pt">上传文件</p>
				                </div>
				           </div>
			         </div>
	                 <div  class="container" >
	                 	 <div style="padding-top:35px;padding-bottom:15px;" >
		                       <div id="fileQueue"></div>
					  		   <div style="padding-left:20px;" >
						  		   <input type="file" name="uploadify" id="uploadify"  style=" padding-top:30px;" />
						  		   <img src='<c:url value="image/res/cancleBtn.png"/>' id="cancelBtn" style="margin-top:-50px;height:53px;width:170px;display:none"/>  
					  		   </div>   
	                     </div>
	                 </div>
	             </div><!-- end of docArea -->
	            <div id="videoArea" class="navbar" >
	            	 <div  id="uploadArea-header">
				           <div class="container-fluid">
				                <div class="nav-collapse collapse"> 
				                     <p class="navbar-text pull-left">上传视频</p>
				                </div>
				           </div>
			         </div>
	                 <div  class="container" >
	                     <div style="padding-top:35px;padding-bottom:15px" >
		                       <span style="padding-right:10px; padding-left:20px;font-weight:bold;font-size:10pt;"><img style="width:20px;height:20px;padding-right:20px;" src='<c:url value="image/res/10_device_access_video.png"/>'/>视频地址</span>
				       	       <span>
				       	       		<s:textfield name="file.url" id="videoUrl" ></s:textfield>
				       	       </span>
				       	       <span id="valiVideoUrlRes" style="color:red;font-size:8pt;">
				       	       		
				       	       </span>
				       	       <div class="videoTip">
								    <p>目前已支持<span style="color:#3377aa;">
								    <a href = "http://www.youku.com/" target="view_window">优酷网 、</a>
								    <a href = "http://www.tudou.com/"target="view_window">土豆网 、</a>
								    <a href = "http://www.ku6.com/" target="view_window">酷6网 、</a>
								    <a href = "http://tv.sohu.com/" target="view_window">搜狐视频 、</a>
								    <a href = "http://www.letv.com/" target="view_window">乐视网</a>
								    </span>等视频网站的视频播放页链接
								    </p>	
								    <p>地址获取方法：视频播放窗口下方——>分享栏——>更多——>复制HTML代码——>粘贴到视频地址栏						   
	    					   </div>
	    					   <div>
	    					   		<p></p>
	    					   </div>
			  		     </div>	
	                 </div>
	                
	             </div><!-- end of videoArea -->
    		
		 	    <div class="navbar fileInforForm" id="fileInfor" >
		 	     	<div id="fileDesBar" style="width:104%"></div>
		 	     	<div class="row-fluid ">
		 	     	<div class="span12">
		 	     	<div class="row-fluid">
			 	     	<div class="span8">
			 	     		<div >
								 <span class="inforLabel">资料名称<span style="color:red">*</span></span>
								 <p><s:textfield name="file.fileName" id="fileName" ></s:textfield> </p>	           
							</div>
							<div >
									 <span class="inforLabel">资料描述<span style="color:red">*</span></span>
									 <p><s:textarea name="file.fileDes"  id="fileDes"  cols="80" rows="3"  placeholder="必填，最多200汉字"></s:textarea></p>
							</div>
							 <div>
									 <span>分类<span style="color:red">*</span></span>
									 <p style="margin-top:10px;padding-bottom:10px">
									 	<select id="resCatSchool" style="width:100px">
									 		<option value="0">请选择</option>
									 		<option value="1" >小学</option>
									 		<option value="2">初中</option>
									 	</select>
									 	<select id="resCatGrade" style="width:100px">
									 		<option value="0">请选择</option>
									 		
									 	</select>
									 	<select id="resCatSub" style="width:100px">
									 		<option value="0">请选择</option>
									 	</select>
									 </p>	 
							</div>	
							<div >
									 <span  class="inforLabel" style="margin-top:10px">自定义标签</span>
									 <p><s:textfield name="file.definedTags" type="text" style="margin-top:10px" id="definedTags" placeholder="每个标签限16个字符,最多10项，用'|'间隔"  size="160"/><p>
							</div>		  
		 	     	    </div>
			 	     	<div class="span4" > 
			 	     			  <div>
									 <span>资料权限<span style="color:red">*</span></span>
									 <p style="font-size:8pt;font-weight:normal"><input type="radio" name="auth" value="0" checked>可下载</p>  
									 <p style="font-size:8pt;font-weight:normal;margin-top:-15px"><input type="radio" name="auth" value="1"> 不可下载 </p>
							      </div>
							      <div>
									 <span>隐私<span style="color:red">*</span></span>
									 <p style="margin-top:10px"><a href="javascript:void(0);"  class="private-uploadFile-select" style="text-decoration:none;">公开&nbsp;<i class="icon-unlock"></i></a></p>
							      </div>
							      <div>
									 <span>保存至<span style="color:red">*</span></span>
									 <p style="margin-top:10px"><a href="javascript:void(0);"  class="private-uploadFile-select" style="text-decoration:none;">我的文库&nbsp;<i class="icon-folder-open-alt"></i></a></p>	 
								  </div>
								   	
							      <div style="margin-top:70px;" class="row">
									 <span  id="tip" style="padding-left:15px;font-weight:normal;color:red;padding-right:5px"></span>
									 <input type="button" value="提交上传"  id="subFileInforBtn" ></input>
								  </div>	
						</div>
						</div>
						</div>
			 	     	
					</div>
			    </div><!-- end of fileInfor -->
			</form>
			<div class="navbar"  style="float:clear">
	            <div  id="uploadArea-header">
				           <div class="container-fluid">
				                <div class="nav-collapse collapse"> 
				                     <p class="navbar-text pull-left">上传须知</p>
				                </div>
				           </div>
			     </div>
	             <div  class="container" >
	                   <ul  style="padding-top:35px;padding-bottom:15px;font-size:8pt;color:#ABABAB" >
	                      <li>上传涉及侵权内容的文档将会被移除，如何判断文档是否侵权，请查看<a href="file/showdeal.action" style="text-decoration:true">知识库协议</a></li>
	                      <li>为了支持文档的正常显示，我们支持以下文档格式</li>
	                      <li>禁止上传违反相关规定的内容</li>
	                      <li>上传文档大小不超过20M，如下文档格式
	                      		<ul style="padding-top:10px;font-size:8pt;color:#ABABAB;list-style:none;">
	                      		    <li style="padding-bottom:5px;">MS Office文档 
	                      		         <img style="width:20px;height:20px;padding-left:20px;" src='<c:url value="image/res/documents_icon_doc.png"/>'/>doc,docx
	                      		    	 <img style="width:20px;height:20px;padding-left:10px;" src='<c:url value="image/res/documents_icon_ppt.png"/>'/>ppt,pptx
	                      		    	 <img style="width:20px;height:20px;padding-left:10px;" src='<c:url value="image/res/documents_icon_xls.png"/>'/>xls,xlsx
	                      		    </li>
	                      		    <li style="padding-bottom:5px;">WPS Office文档
	                      		    	 <img style="width:20px;height:20px;padding-left:10px;" src='<c:url value="image/res/documents_icon_docx.png"/>'/>wps
	                      		    	 <img style="width:20px;height:20px;padding-left:35px;" src='<c:url value="image/res/documents_icon_pptx.png"/>'/>pt
	                      		    	 <img style="width:20px;height:20px;padding-left:37px;" src='<c:url value="image/res/documents_icon_xlsx.png"/>'/>et
	                      		    </li>
	                      		    <li style="padding-bottom:5px;">PDF
	                      		    	 <img style="width:20px;height:20px;padding-left:70px;" src='<c:url value="image/res/documents_icon_pdf.png"/>'/>pdf
	                      		    </li>
	                      		    <li style="padding-bottom:5px;">纯文本
	                      		    	<img style="width:20px;height:20px;padding-left:58px;" src='<c:url value="image/res/documents_icon_text.png"/>'/>txt
	                      			</li>
	                      		</ul>
	                      </li>
	                   </ul>	
	              </div>
	             <div   id="uploadResultMsg" style="margin-top:-550px;margin-left:230px; background-color:#FAFAFA; border-top:5px solid #2f805d;width:400px;position:fixed;" >
				     <div style="margin-top:-10px;height:30px;padding-top:7px;">
			      	 	<a id="closeResultMsgBtn" href="file/loadUpload.do"  style="float:right;padding-right:7px;padding-top:15px;"  target="iframepage" class="close">&times;</a>
			      	    <p style="padding-left:20px;font-size:10pt;font-weight:bold;padding-top:15px;">上传文档成功</p>
			      	 </div>
			      	 <hr style="margin-top:10px"/>
			      	 <div style="margin-left:20px;margin-top:10px;font-size:9.5pt;" >
			      	 	<p>公共文档提交成功后，您将获得相应奖励</p>
			      	 	<p>如内容有盗版内容，请在<a href="loadUpload" style="color:#2D64B3;">我的文档</a>进行删除</p>
			      	 	<p>上传完成，你可以继续选择如下操作：</p>
					    <p  style="padding-left:40px;padding-top:15px">
					       	     <a href="file/forUpload_res.action"   class="btn" target="iframepage"
					       	     	style="margin-right:30px;
										   width:90px;
										   background-color:#39966E;
										   *background-color:#39966E;
										   background-image:-moz-linear-gradient(top, #39966E, #39966E); 
										   background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#39966E), to(#39966E));
									  	   background-image: -webkit-linear-gradient(top, #39966E, #39966E);
									  	   color:#FFFFFF;
									  	   font-size:10pt;
									  	   font-weight:bold" 
									  	   id="continueUploadBtn">继续上传</a>
					       	     <a href="loadUpload" class="btn"  target="iframepage"
					       	     	style="background-color:#ECFAF3;
										   *background-color:#ECFAF3; 
										    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#ECFAF3), to(#ECFAF3));
									  		background-image: -webkit-linear-gradient(top, #ECFAF3, #ECFAF3);
									  		background-image:-moz-linear-gradient(top, #ECFAF3, #ECFAF3);
									  	    color:#245c45;
									  	    font-size:10pt;
									  	    border:1px solid #C4DAD1 ;
									  	    font-weight:bold"
									  	    id="checkUploadedBtn">查看已上传文件</a>
					    </p>
			      	 </div>
     			 </div> 
	      	</div><!-- end of navbar-->
		  </div><!-- end of span9 -->
		 

	      
  </body>
</html>
