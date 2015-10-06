<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/WEB-INF/jsps/common/taglibs.jsp"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html lang="en">
<head>
<title>修改用户信息</title>
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">

<link rel="stylesheet" type="text/css"
	href="<s:url value="/css/common/bootstrap.css"></s:url>" />
<link rel="stylesheet" type="text/css"
	href="<s:url value="/css/common/bootstrap-responsive.css"></s:url>" />
<link href="<s:url value="/css/bgm/unicorn.main.css"></s:url>"
	type="text/css" rel="stylesheet">

</head>
<body>
	<div id="content-header"></div>
	<div id="breadcrumb">
	</div>
	<div class="container-fluid">
		<div class="row-fluid">
			<div class="span12">
				<div class="widget-box">
					<div class="widget-title">
						<span class="icon"> <i class="icon-align-justify"></i> </span>
						<h5>修改用户信息</h5>
					</div>
					<div class="widget-content nopadding">
						<ul class="nav nav-tabs">
							<li><a href="#imgfield" data-toggle="tab"
								onclick="oLayout();">头像修改</a>
							</li>
							<li><a href="#pwdfield" data-toggle="tab"
								onclick="oLayout();">密码修改</a>
							</li>
							<li><a href="#detailfield" data-toggle="tab"
								onclick="itLayout();">资料修改</a>
							</li>
						</ul>
						<div class="tab-content">
							<div class="tab-pane active" id="imgfield">
								<s:form cssClass="form-horizontal" action="modify"
									namespace="/user" method="post" enctype="multipart/form-data"
									onSubmit="return Validator.Validate(this,3)">
									<s:hidden name="user.id"></s:hidden>
									<div id="localImag">
										<img width="240" height="320" id="userview"
											src='<s:url action="getpic" namespace="/user" />?user.id=<s:property value="user.id"/>'
											style="margin:20px 0px 0px 20px;diplay:none;" />
									</div>
									<label class="control-label"> 头 像 </label>
									<div class="controls">
										<!-- 数据表单域 -->
										<s:file id="uploadfield" name="userPhoto" size="40"
											onchange="javascript:setImagePreview();" dataType="Filter"
											msg="非法的文件格式" accept="jpg, gif, png"></s:file>
									</div>
									<div class="form-actions">
										<button type="submit" class="btn btn-success">确 定</button>
									</div>
								</s:form>
							</div>
							<div class="tab-pane" id="pwdfield">
								<s:form cssClass="form-horizontal" action="modify"
									namespace="/user" method="post"
									onSubmit="return Validator.Validate(this,3)">
									<s:hidden name="user.id"></s:hidden>
									<label class="control-label">新密码</label>
									<div class="controls">
										<s:password name="user.password"
											cssStyle="height:29px;width:40% !important;"
											placeholder="请输入密码,并使用字母、数字组合" dataType="SafeString" msg="密码不符合安全规则" />
									</div>
									<label class="control-label">确认密码</label>
									<div class="controls">
										<s:password name="password"
											cssStyle="height:29px;width:40% !important;" size="36"
											placeholder="请再次输入密码" dataType="Repeat" to="user.password" msg="两次输入的密码不一致" />
									</div>
									<div class="form-actions">
										<button type="submit" class="btn btn-success">确 定</button>
									</div>
								</s:form>
							</div>
							<div class="tab-pane" id="detailfield">
								<s:form cssClass="form-horizontal" action="modify"
									namespace="/user" method="post"
									onSubmit="return Validator.Validate(this,3)">
									<s:hidden name="user.id"></s:hidden>
									<label class="control-label">姓 名</label>
									<div class="controls">
										<s:textfield name="user.name" cssStyle="height:29px;"
											readonly="true" />
									</div>
									<label class="control-label">身份证号</label>
									<div class="controls">
										<s:textfield name="user.IDcard" cssStyle="height:29px;"
											readonly="true" />
									</div>
									<label class="control-label">年 龄</label>
									<div class="controls">
										<s:textfield name="user.age" cssStyle="height:29px;"></s:textfield>
									</div>
									<label class="control-label">性 别</label>
									<div class="controls">
										<s:select cssClass="input-xlarge" name="user.sex"
											list="#{'女':'女','男':'男'}">
										</s:select>
									</div>
									<label class="control-label">国 家</label>
									<div class="controls">
										<s:select cssClass="input-xlarge" name="user.nation"
											list="#{'中国':'中国'}" headerKey="0" headerValue="请选择">
										</s:select>
									</div>
									<label class="control-label">籍 贯</label>
									<div class="controls">
										<s:textfield name="user.nativePlace" cssStyle="height:29px;"></s:textfield>
									</div>
									<label class="control-label">政治面貌</label>
									<div class="controls">
										<s:textfield name="user.politicsStatus"
											cssStyle="height:29px;"></s:textfield>
									</div>
									<label class="control-label">住 址</label>
									<div class="controls">
										<s:textfield name="user.address" cssStyle="height:29px;"></s:textfield>
									</div>
									<label class="control-label">学 校</label>
									<div class="controls">
										<s:textfield name="user.school" cssStyle="height:29px;"></s:textfield>
									</div>
									<label class="control-label">年 级</label>
									<div class="controls">
										<s:select cssClass="input-xlarge" name="user.grade"
											list="#{ '1':'一年级','2':'二年级','3':'三年级','4':'四年级','5':'五年级','6':'六年级',
										        	 '7':'七年级','8':'八年级','9':'九年级'}"
											headerKey="0" headerValue="请选择">
										</s:select>
									</div>
									<label class="control-label">教育背景</label>
									<div class="controls">
										<s:textfield name="user.eduBackground" cssStyle="height:29px;"></s:textfield>
									</div>
									<label class="control-label">电 话</label>
									<div class="controls">
										<s:textfield name="user.phone" cssStyle="height:29px;"></s:textfield>
									</div>
									<label class="control-label">E-mail</label>
									<div class="controls">
										<s:textfield name="user.email" cssStyle="height:29px;"
											dataType="Email" msg="信箱格式不正确"></s:textfield>
									</div>
									<label class="control-label">QQ</label>
									<div class="controls">
										<s:textfield name="user.qqNum" cssStyle="height:29px;"
											dataType="QQ" msg="QQ号码不存在"></s:textfield>
									</div>
									<label class="control-label">爱 好</label>
									<div class="controls">
										<div class="textarea">
											<s:textarea name="user.hobbies"></s:textarea>
										</div>
									</div>
									<label class="control-label">工 作</label>
									<div class="controls">
										<s:textfield name="user.job" cssStyle="height:29px;"></s:textfield>
									</div>
									<label class="control-label">单 位</label>
									<div class="controls">
										<s:textfield name="user.workPlace" cssStyle="height:29px;"></s:textfield>
									</div>
									<label class="control-label">自我介绍</label>
									<div class="controls">
										<div class="textarea">
											<s:textarea name="user.selfIntroduction"></s:textarea>
										</div>
									</div>
									<label class="control-label">自我评价</label>
									<div class="controls">
										<div class="textarea">
											<s:textarea name="user.comment"></s:textarea>
										</div>
									</div>
									<div class="form-actions">
										<button type="submit" class="btn btn-success">确 定</button>
									</div>
								</s:form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	</div>
	
	<script type="text/javascript"
		src="<s:url value="/js/common/jquery-1.8.3.min.js"></s:url>"></script>
	<script type="text/javascript"
		src="<s:url value="/js/common/bootstrap.js"></s:url>"></script>
	<script type="text/javascript"
		src="<s:url value="/js/common/Validator.js"></s:url>"></script>
	<script type="text/javascript">
		function setImagePreview() {
			var docObj = document.getElementById("uploadfield");
	
			var imgObjPreview = document.getElementById("userview");
			if (docObj.files && docObj.files[0]) {
				//火狐下，直接设img属性
				imgObjPreview.style.display = 'block';
				imgObjPreview.style.width = '240px';
				imgObjPreview.style.height = '320px';
				//imgObjPreview.src = docObj.files[0].getAsDataURL();
	
				//火狐7以上版本不能用上面的getAsDataURL()方式获取，需要一下方式  
				imgObjPreview.src = window.URL.createObjectURL(docObj.files[0]);
	
			} else {
				//IE下，使用滤镜
				docObj.select();
				var imgSrc = document.selection.createRange().text;
				var localImagId = document.getElementById("localImag");
				//必须设置初始大小
				localImagId.style.width = "240px";
				localImagId.style.height = "320px";
				//图片异常的捕捉，防止用户修改后缀来伪造图片
				try {
					localImagId.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
					localImagId.filters
							.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgSrc;
				} catch (e) {
					alert("您上传的图片格式不正确，请重新选择!");
					return false;
				}
				imgObjPreview.style.display = 'none';
				document.selection.empty();
			}
			return true;
		}
	
		function itLayout() {
	
			parent.document.getElementById("iframepage").setAttribute("height",
					"1500px");
		}
	
		function oLayout() {
	
			parent.document.getElementById("iframepage").setAttribute("height",
					"550px");
		}
	</script>

</body>
</html>
