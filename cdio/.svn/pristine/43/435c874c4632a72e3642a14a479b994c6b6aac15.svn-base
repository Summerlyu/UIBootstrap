<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>个人信息</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link type="text/css" rel="stylesheet"
	href="/cdio2010/css/common/bootstrap.css" media="screen" />
<link rel="stylesheet" href="/cdio2010/cdio2010/css/common/bootstrap-responsive.css" />
<link type="text/css" rel="stylesheet"
	href="/cdio2010/css/coa/layoutit.css" />
<link type="text/css" rel="stylesheet" href="/cdio2010/css/coa/coa.css" />


<style type="text/css">

	#pics{
		width:100px;
		height:100px;
		padding: 4px;
  background-color: #fff;
  border: 1px solid #ccc;
  border: 1px solid rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
     -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
	}

</style>

</head>
<body data-target=".bs-docs-sidebar" data-spy="scro">

	<s:form action="LoadAction" method="post" enctype="multipart/form-data">
		<fieldset>
			<div id="shop-verify">
				<div id="shop-owner-verify" class="verify-module verify-disable">
					<div class="hd clearfix">
					<span  class="title"><i class="num"  style="opacity:0"></i><img src="/cdio2010/image/coa/coach.png" style="margin-top:o.5%" height="40" width="40"></span>
					<span class="title"><i class="num"  style="opacity:0"></i>个人信息</span>

					</div>
					<div class="bd">
						<div class="shop-verify-wrap">
							<div class="shop-result">
								<div class="fm-input">
										<div id="expand-all-extend" class="ui-expand ">
											<!-- <div class="fm-item J_extend_required"> -->
								<div class="container-fluid">
											<div class="row-fluid">
												<div class="span8">
											<div class="fm-items">
											<label class="fm-labels">姓名：</label>
											<s:property value="coach.name"/>
										    </div>

											<div class="fm-items">
											<label class="fm-labels">等级：</label>
											<s:property value="coach.level"/>
										    </div>
										    
										    <div class="fm-items">
											<label class="fm-labels">籍贯：</label>
											<s:property value="coach.nativePlace"/>
										    </div>
										    
										    <div class="fm-items">
											<label class="fm-labels">民族：</label>
											<s:property value="coach.nation"/>
										    </div>
										    
										    <div class="fm-items">
											<label class="fm-labels">性别：</label>
											 <s:property value="coach.sex"/>
										    </div>
										   
										    <div class="fm-items">
												<label class="fm-labels">出生日期：</label>
													<s:property value="coach.birth"/>
										    </div>
										    
										    <div class="fm-items">
											<label class="fm-labels">政治面貌：</label>
											<s:property value="coach.politicsStatus"/>
										    </div>
										    
										    <div class="fm-items">
											<label class="fm-labels">职务/职称：</label>
											<s:property value="coach.job"/>
										    </div>
										    
										    <div class="fm-items">
											<label class="fm-labels">工作单位：</label>
											<s:hidden value="%{coach.workPlace}"></s:hidden>
											<s:property value="work"/>
										    </div>
										    
										    <div class="fm-items">
											<label class="fm-labels">自我评价：</label>
											<s:property value="coach.comment"/>
										    </div>
</div>
<div class="span4">	
										    <div class="pf-avatar-box" > 
										    <!-- <img src="/cdio2010/image/coa/head.jpg" height="100" width="100"> -->
										    <img  id="pics" style="width:100;height:100" src="<s:url action="getpicAction"/>?coach.id=<s:property value="coach.id"/>"/> <!-- 这个根据自己写的改 -->
											</div>
											<div class="pf-avatar-up"> 
											<a class="btn btn-success" href="<s:url action="ForUpdateAction"/>?coachID=<s:property value="coach.id"/>">修改信息</a>				
									        </div>
</div>
</div>
</div>
							</div>
							</div>
							</div>
	</div>
	</div>
	</div>
	</div>
	<!-- </div> -->
	</fieldset>
	</s:form>
<script src="/cdio2010/js/common/jquery-1.8.3.min.js"></script>
<script type="text/javascript" src="/cdio2010/js/common/bootstrap.js"></script>
</body>
</html>