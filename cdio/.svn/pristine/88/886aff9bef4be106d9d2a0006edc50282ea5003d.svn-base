<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html>
  <head>
    <base href="<%=basePath%>"> 
    <title>充值</title>
    
	<meta name="viewport" content="width=device-width">
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<link type="text/css" rel="stylesheet" href="<c:url value="/css/common/bootstrap.css"/>">
	<link type="text/css" rel="stylesheet" href="<c:url value="/css/pym/proof.css" />">
	<link type="text/css" rel="stylesheet" href="<c:url value="/css/common/bootstrap-responsive.css"/>">

  </head>
  <body>
  
       <div class="container">  
   		    <s:if test="apply.attestation==2">
				
			<legend style="font-family:宋体;"><span class="pym_appHead">认证通过，学生未确定</span></legend>	
			</s:if>
			<s:if test="apply.attestation==3">
			<legend style="font-family:宋体;"><span class="pym_appHead">认证失败，学生未确定</span></legend>
				
			</s:if>
			<s:if test="apply.attestation==4">
			<legend style="font-family:宋体;"><span class="pym_appHead">认证通过，学生已确定</span></legend>
				
			</s:if>
			<s:if test="apply.attestation==5">
			<legend style="font-family:宋体;"><span class="pym_appHead">认证失败，学生已确定</span></legend>
				
			</s:if>
           
					 <div class="form-horizontal">
                        <div class="pym_proBase">
                        <span>申请人基本信息</span>
                        </div>
	                    <div class="pym_prfBordr">
	                         <div class="row-fluid">
	                             <div class="span4">
	                        
								 <div class="control-group">
									  <label class="control-label">
									         <span class="pym_proof">真实姓名:</span>
									  </label>
									  <div class="controls">
										<span class="pym_appSpan"><s:property value="apply.trueName"/></span>
									  </div>
								 </div>   
	                             <div class="pym_proLine" style="width:100%;"></div>
									 <div class="control-group">
										  <label class="control-label">
					                           <span class="pym_proof">家庭地址:</span>
					                      </label>
										  <div class="controls">
											   <span class="pym_appSpan"><s:property value="apply.address"/></span>            					
										  </div>
									 </div> 
									 <div class="pym_proLine" style="width:100%;"></div>
							    </div> 
							    <div class="span4">                           
									<div class="control-group">
										 <label class="control-label">
					                           <span class="pym_proof">电子邮箱:</span>
					                     </label>
					                     <div class="controls">
											   <span class="pym_appSpan"><s:property value="apply.email"/></span>	
										 </div>
									</div>
									<div class="pym_proLine" style="width:100%;"></div>
		                            
		                            <div class="control-group">
										 <label class="control-label">
											    <span class="pym_proof">身份证号码:</span>
										 </label>
										 <div class="controls">
											   <span class="pym_appSpan"><s:property value="apply.idCard"/></span>
										 </div>
									</div>
									
		                            <div class="pym_proLine" style="width:100%;"></div>
	                            </div>
	                            <div class="span4">
	
		                            <div class="control-group">
										 <label class="control-label">
										 <span class="pym_proof">电话号码:</span>
										 </label>
										 <div class="controls">
											 <span class="pym_appSpan"><s:property value="apply.phone"/></span>
										 </div>
									</div>
		                            <div class="pym_proLine"></div>
										<div class="control-group">
											<label class="control-label">
											      <span class="pym_proof">申请点数:</span>
											</label>
											<div class="controls">
												<span class="pym_appSpan" style="font-weight: bold;color:#FF6100;"><s:property value="apply.applyEP"/>EP</span>
						                    </div>    
										</div>			
				    	             <div class="pym_proLine"></div>
								</div>	
			            </div>
			            
		                <div class="row-fluid">
				               <div class="span12">
									<div class="control-group">
										<label class="control-label">
										<span class="pym_proof">申请书:</span>
										</label>
										<div class="controls">
					                        <span class="pym_appSpan" style="width:90%;">
                                                  <s:property value="apply.application"/>
					                        </span>
					                    </div>
									</div>
							   </div>
						</div>	
						</div>
	                        <div class="pym_proBase">
	                        <span>申请人照片及证明照片</span>
	                        </div>
							<div class="pym_prfBordr">
			                    
			                    <div class="row-fluid">
					               <div class="span3 offset1">
						               <div>
						                  <span style="font-weight:bold">申请人照片</span>
					                   </div>   
					                   <div style="height:25px;"></div>
					                       <img style="width:150px;height:150px;"  src="<s:url action="getpic" namespace="/pym"/>?apply.applyID=<s:property value="apply.applyID"/>&type=1"/>	                    
								   </div>
						               <div class="span6">
						                   <span style="font-weight:bold">申请证明照片</span>
										   <input type="button" class="btn btn-info" value="放大" onclick="PhotoSize.action(1);" />
										   <input type="button" class="btn btn-info" value="缩小" onclick="PhotoSize.action(-1);" />
										   <input type="button" class="btn btn-info" value="还原大小" onclick="PhotoSize.action(0);" />
										   <input type="button" class="btn btn-info" value="查看当前倍数" onclick="alert(PhotoSize.cpu);" />
										   <br> 
	                                       <br>
					                       <img style="width:150px;height:150px;" id="focusphoto" src="<s:url action="getpic" namespace="/pym"/>?apply.applyID=<s:property value="apply.applyID"/>&type=2"/>	                    
									   </div>
								</div> 
								 <br>
							</div>							
							<div class="pym_proBase">
		                        <span>旁证人信息</span>
		                    </div>		                    
		            
							<div class="pym_prfBordr">
								
				                <div class="row-fluid">		
				                    <div class="span4">					
							    		 <div class="control-group">
										  <label class="control-label">
										       <span class="pym_proof">真实姓名:</span>
										  </label>
										  <div class="controls">
											   <span class="pym_appSpan"><s:property value="apply.evidenceName"/></span>
										  </div>
									 </div> 
									 										 
										 <div class="control-group">
											  <label class="control-label">
											        <span class="pym_proof">身份证号:</span>
											  </label>
											  <div class="controls">
												   <span class="pym_appSpan"><s:property value="apply.evidenceIdcard"/></span>
											  </div>
										 </div>
										 
										 
										 
									 </div>
									 
									<div class="span4">
									      <div class="control-group">
										  <label class="control-label">
										       <span class="pym_proof">工作单位:</span>
										  </label>
										  <div class="controls">
											   <span class="pym_appSpan"><s:property value="apply.workUnit"/></span>
										  </div>
									 </div> 
									 
									      <div class="control-group">
										  <label class="control-label">
										        <span class="pym_proof">电子邮箱:</span>
										  </label>
										  <div class="controls">
											<span class="pym_appSpan"><s:property value="apply.evidenceEmail"/></span>
										  </div>
									 </div> 
									 
									</div>
									 
									<div class="span4">
										 <div class="control-group">
											  <label class="control-label">
											         <span class="pym_proof">电话号码:</span>
											  </label>
											  <div class="controls">
												<span class="pym_appSpan"><s:property value="apply.evidencePhone"/></span>
											  </div>
										 </div> 
										 
										 <div class="control-group">
											  <label class="control-label">
											        <span class="pym_proof">工作职位:</span>
											  </label>
											  <div class="controls">
												   <span class="pym_appSpan"><s:property value="apply.job"/></span>
											  </div>
										 </div> 
										 
									 </div> 
							    </div>		 
									 								 
								<div class="row-fluid">		
									 <div class="span11 offset1" style="padding-left:20px;">
										<div><span style="font-weight:bold">证明材料:</span></div>
										<div style="height:25px;"></div>
				                      	<img style="max-width:710px;max-height:350px;"  src="<s:url action="getpic" namespace="/pym"/>?apply.applyID=<s:property value="apply.applyID"/>&type=3"/>	  
				                     </div>
		                        </div>   
		                        <div style="height:10px;"></div>        
                            </div>	
                            
                            
						<s:if test="apply.attestation==2||apply.attestation==4">
							<div class="pym_proBase">
	                        <span>申请得到的点数</span>
	                        </div>
						
                            <div class="pym_prfBordr">
							<span style="color:#FF6100;font-weight: bold;"><s:property value="apply.reEp"/>EP</span>
							</div>
							
						</s:if>
						
						
						<s:if test="apply.attestation==3||apply.attestation==5">
							<div class="pym_proBase">
	                        <span>申请失败的理由</span>
	                        </div>
						
						    <div class="pym_prfBordr">
							<span style="color:red; font-weight: bold;"><s:property value="apply.reason"/></span>
							</div>
						</s:if>                            
						
                   </div>
	  </div>
<br/><br/><br/>
	<script type="text/javascript" src="js/common/jquery-1.8.3.min.js"></script>
   	<script type="text/javascript"> 
	// 放大缩小控制 
	var PhotoSize = { 
	zoom: 0, // 缩放率 
	count: 0, // 缩放次数 
	cpu: 0, // 当前缩放倍数值 
	elem: "", // 图片节点 
	photoWidth: 0, // 图片初始宽度记录 
	photoHeight: 0, // 图片初始高度记录 
	init: function(){ 
	this.elem = document.getElementById("focusphoto"); 
	this.photoWidth = this.elem.scrollWidth; 
	this.photoHeight = this.elem.scrollHeight; 
	this.zoom = 1.2; // 设置基本参数 
	this.count = 0; 
	this.cpu = 1; 
	}, 
	action: function(x){ 
	if(x === 0){ 
	this.cpu = 1; 
	this.count = 0; 
	}else{ 
	this.count += x; // 添加记录 
	this.cpu = Math.pow(this.zoom, this.count); // 任意次幂运算 
	}; 
	this.elem.style.width = this.photoWidth * this.cpu +"px"; 
	this.elem.style.height = this.photoHeight * this.cpu +"px"; 
	} 
	}; 
	// 启动放大缩小效果 用onload方式加载，防止第一次点击获取不到图片的宽高 
	window.onload = function(){PhotoSize.init()}; 
	</script> 
  </body>
</html>
