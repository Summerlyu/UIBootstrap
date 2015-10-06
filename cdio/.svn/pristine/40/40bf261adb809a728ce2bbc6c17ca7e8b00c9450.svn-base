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
	<link type="text/css" rel="stylesheet" href="<c:url value="/css/pym/application.css" />">
	<link type="text/css" rel="stylesheet" href="<c:url value="/css/common/bootstrap-responsive.css"/>">
  </head>
	<body>

<div class="container">


   <legend style="font-family:宋体;"><h4><span class="pym_appHead">捐赠申请</span></h4></legend>


   <div class="help_step_box fa" >

    <div class="help_step_item help_step_set">
      <div class="help_step_num">1</div>
      申请阶段
      <div class="help_step_right"></div>
    </div>

    <div class="help_step_item">
      <div class="help_step_left"></div>
      <div class="help_step_num">2</div>
      认证阶段
      <div class="help_step_right"></div>
    </div>

    <div class="help_step_item">
      <div class="help_step_left"></div>
      <div class="help_step_num">3</div>
      结束阶段
    </div>

    </div>


<br/>

	        
				<div class="alert">
				    <h4>提示!</h4> 
				    一份申请,一份感恩的心,请认真填写以下信息.
				  <div>
				  <span style="color:red">*为必填内容.个人照片一栏上传您的个人照片,证明材料可以是学生证之类的证件</span>(照片格式是jpg,png,gif),旁证人可以找您的班主任。
				  </div> 
				</div>
		           
		              
						<form  action=<c:url value="/pym/contributionAction"/> method="post" enctype="multipart/form-data"    class="form-horizontal" onSubmit="return Validator.Validate(this,3)">
						
						    <div class="pym_proBase">
				                <span>申请表</span>
				            </div>
						
						<div class="pym_prfBordr">
						
						 <div class="row-fluid">
						 
						 <div class="span4">
							<br/>
							<div class="control-group">
								<label class="control-label" for="pym_appName" ><span><span class="pym_appStar">*</span>真实姓名:</span></label>
								<div class="controls">
									<input name="apply.trueName" type="text" dataType="Chinese" msg="姓名不正确" id="pym_appName" data-trigger="focus" placeholder="请输入您的真实姓名">
								</div>

							</div>
							<div class="control-group">
								<label class="control-label" for="pym_appAddress">
			                         <span><span class="pym_appStar">*</span>家庭地址:</span>
			                    </label>
								<div class="controls">
									<input name="apply.address" type="text" dataType="Require" msg="家庭地址必填"  id="pym_appAddress" data-trigger="focus" placeholder="请输入您的家庭地址！">            					
								</div>
							</div>

							<div class="control-group">
								<label class="control-label" for="pym_appEmail" >
			                         <span><span class="pym_appStar">*</span>电子邮箱:</span>
			                    </label>
			                    <div class="controls">
									<input name="apply.email"type="text" dataType="Email" msg="E-mail格式不正确" id="pym_appEmail" data-trigger="focus" placeholder="请输入您的电子邮箱！xxx@xxx.com">	
								</div>
							</div>					
							
							<div class="control-group">
								<label class="control-label" for="pym_appPhone">
								     <span><span class="pym_appStar">*</span>电话号码:</span>
								</label>
								<div class="controls">
									<input textfield name="apply.phone" type="text" dataType="Phone" msg="电话号码不正确" id="pym_appPhone" data-trigger="focus" placeholder="请输入您的电话号码！">
								</div>
							</div>
							
							
                        </div>
                        
                       <div class="span1"></div>
                         <div class="span5">
                         <br/>
							<div class="control-group">
								<label class="control-label" for="pym_appID">
								      <span><span class="pym_appStar">*</span>身份证号:</span>
								</label>
								<div class="controls">
									<input name="apply.idCard"  type="text" dataType="IdCard" msg="身份证号错误" id="pym_appID" data-trigger="focus" placeholder="身份证号码是15位或18位！">	
								</div>
							</div>

							<div class="control-group">
								<label class="control-label" for="pym_appMoney">
								     <span><span class="pym_appStar">*</span>申请点数:</span>
								</label>
								<div class="controls">
									<input name="apply.applyEP" type="text" dataType="Number" msg="请输入整数的EP值" id="pym_appMoney" data-trigger="focus" placeholder="请输入您要申请的点数:100">
			                    </div>
							</div>							
							 <div class="control-group">

					         <label class="control-label" for="pym_appPhoto">
					             <span><span class="pym_appStar">*</span>个人照片:</span>
					         </label>
						         <div class="controls">          
							         <!-- <input class="input-xlarge" dataType="Filter" msg="非法的文件格式" accept="jpg, gif, png" type="text" id="pym_faPhoto" data-trigger="focus" placeholder="上传您的个人照片" readonly>         
							          <button type="button" onclick="pym_appClick()"  class="btn btn-success">浏览</button>  -->        
							              
						              <input name="picture" type="file" title="浏览" dataType="Filter" msg="非法的图片格式" accept="jpg, gif, png">
						         </div>
					        </div>
					        
					        <div class="control-group">

					         <label class="control-label" for="pym_appPhoto">
					             <span><span class="pym_appStar">*</span>证明材料:</span>
					         </label>
						         <div class="controls">                
							          <input name="stuPic" name="picture" type="file" title="浏览" dataType="Filter" msg="非法的图片格式" accept="jpg, gif, png">    
						         </div>
					        </div>
					      </div>
                           </div>
							<div class="control-group">
								<label class="control-label" for="pym_appApplication">
								      <span><span class="pym_appStar">*</span>申请书:</span>
								</label>
								<div class="controls">
									<textarea name="apply.application" style="width:80%; height:100px; resize:none" id="pym_appApplication" dataType="LimitB" min="600"  msg="申请书内容至少300字" data-trigger="focus" placeholder="申请书不少于300字，请说明家庭情况！"></textarea>
			                    </div>
							</div>
						</div>	
						
							<div class="pym_proBase">
				                <span>旁证人信息</span>
				            </div>
				            <div class="pym_prfBordr">
				            
				             <div class="row-fluid">
							<div class="span4">
							<br/>
							<div class="control-group">
								<label class="control-label" for="pym_appAddress">
			                         <span><span class="pym_appStar">*</span>真实姓名:</span>
			                    </label>
								<div class="controls">
									<input name="apply.evidenceName" type="text" dataType="Chinese" msg="姓名只允许中文" data-trigger="focus" placeholder="请输入您的真实姓名">            					
								</div>
							</div>
							
							<div class="control-group">
								<label class="control-label" for="pym_appAddress">
			                         <span><span class="pym_appStar">*</span>工作职位:</span>
			                    </label>
								<div class="controls">
									<input name="apply.job"  type="text" dataType="Require" msg="职位必填"  data-trigger="focus" placeholder="请输入您的职位">            					
								</div>
							</div>
							
							<div class="control-group">
								<label class="control-label" for="pym_appAddress">
			                         <span><span class="pym_appStar">*</span>工作单位:</span>
			                    </label>
								<div class="controls">
									<input name="apply.workUnit" type="text" dataType="Require" msg="工作单位必填"  data-trigger="focus" placeholder="请输入您的工作单位！">            					
								</div>
							</div>
							
					        <div class="control-group">
								<label class="control-label" for="pym_appAddress">
			                         <span><span class="pym_appStar">*</span>电子邮箱:</span>
			                    </label>
								<div class="controls">
									<input name="apply.evidenceEmail"type="text" dataType="Email" msg="E-mail格式不正确" data-trigger="focus" placeholder="xxx@xxx.com">            					
								</div>
							</div>
						  </div>	
						  
					 <div class="span1"></div>

                    <div class="span5">
                    <br/>
							<div class="control-group">
								<label class="control-label" for="pym_appAddress">
			                         <span><span class="pym_appStar">*</span>电话号码:</span>
			                    </label>
								<div class="controls">
									<input name="apply.evidencePhone" type="text" dataType="Phone" msg="电话号码不正确" data-trigger="focus" placeholder="请输入您的电话号码！">            					
								</div>
							</div>
							
							<div class="control-group">
								<label class="control-label" for="pym_appAddress">
			                         <span><span class="pym_appStar">*</span>身份证号码:</span>
			                    </label>
								<div class="controls">
									<input name="apply.evidenceIdcard"type="text" dataType="IdCard" msg="身份证号错误" data-trigger="focus" placeholder="身份证号码是15位或18位！">            					
								</div>
							</div>
										       					
							
							<div class="control-group">

					         <label class="control-label" for="pym_appPhoto">
					             <span><span class="pym_appStar">*</span>证明材料:</span>
					         </label>
						         <div class="controls">                
							          <input name="evidencePic" name="picture" type="file" title="浏览" dataType="Filter" msg="非法的图片格式" accept="jpg, gif, png">    
						         </div>
					        </div>
					        
					        
					        </div>
					       </div> 
                  
							<div class="controls">
								<input type="submit" name="method:applySubmit" class="btn btn-success" id="pym_appSub" value="提交申请"></input>
							</div>
					  </div>		
						</form>
					
			<hr>
      </div>
<br/><br/>

	<script type="text/javascript" src="js/common/jquery-1.8.3.min.js"></script>
    <script src="js/common/Validator.js"></script>
    <script src="js/pym/bootstrap.file-input.js"></script>
	</body>
</html>