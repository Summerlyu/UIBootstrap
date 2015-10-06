<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>coa_home</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link type="text/css" rel="stylesheet" href="/cdio2010/css/common/bootstrap.css" media="screen" />
<link rel="stylesheet" href="/cdio2010/cdio2010/css/common/bootstrap-responsive.css"/>
<link type="text/css" rel="stylesheet" href="/cdio2010/css/coa/coa.css" />

 <style type="text/css">
.verify-box h4 {
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 15px;
}
  </style>
  
</head>
<body data-target=".bs-docs-sidebar" data-spy="scro">
<s:property value="newcoach.isverify_R"/>
	<s:form class="form-horizontal"  method="post" action="forHomeAction" >
		<fieldset>
			<div style="padding: 0px 30px 30px;" align=center>
				<span><a href="#"><img src="/cdio2010/image/coa/welcome.png"
						alt="Gather Content" />
				</a>
				</span>
			</div>
			
			<div id="shop-verify">
				<div id="shop-owner-verify" class="verify-module verify-disable">
					<div class="hd clearfix">
						<!-- <span class="floatleft title"><a href="#"><img src="/cdio2010/image/coa/home1.png"/> -->
							<span class="floatleft title"><font style="font-family: '微软雅黑';">完成以下 <i class="num">3</i>个任务，即可注册成功。</font></span> 
					<!-- </a></span> -->
					</div>
					
					<div class="bd">
					   
					
						<div class="shop-verify-wrap">
							<div class="shop-result">
								<div class="fm-input">
									<div id="expand-all-extend" class="ui-expand ">
			<!-- <div class="verify-task"> -->
				<!-- <div>
					<span><a href="#"><img src="/cdio2010/image/coa/home1.png"
							alt="Gather Content" />
					</a>
					</span>
				</div> -->
										<div class="alert alert-success"
											style="width:80%; margin-left: auto;margin-right: auto;">
											<button type="button" class="close" data-dismiss="alert">&times;</button>
											<strong>注 意！</strong> 网页中出现的<font style="color:red;"> * </font>均为必填项目，请认真填写信息。
										</div>
										<div class="verify-box shop-verify">
					<h4>实名认证</h4>
					<p class="verify-intro">完成注册需要讲师身份信息认证，可以使帐户安全性及可靠性更高。</p>
 
 <p class="verify-status">
 		
 				
 			 	   <s:if test="#session.user.isverify_R==0">
 				  	<a  class="btn btn-success" data-toggle="tooltip" data-original-title="Default tooltip" href="<s:url value="RCertifyAction.action"/>">
						<font><font><strong>开始认证</strong>
						</font>
						</font>
					</a>
 				  </s:if>
					<s:if test="#session.user.isverify_R==1">
						
						<s></s>
	                    <span class="finished"><strong>已完成</strong></span> 
	                    				
                    </s:if>
</p>
				</div>
				<div class="verify-box exam-online">
					<h4>资格认证</h4>
					<p class="verify-intro">注册需要讲师资格认证，才可以进行教学。</p>
 
    <p class="verify-status">
     <s:if test="#session.user.isverify_C==0">
					<a class="btn btn-success" href="<s:url value="CertificateAction.action"/>">
						<font><font><strong>开始认证</strong>
 
						</font>
						</font>
					</a>
					</s:if>
					<s:if test="#session.user.isverify_C==1">
						
						<s></s>
	                    <span class="finished"><strong>已完成</strong></span> 
	                    				
                    </s:if>
</p>
				</div>
				<div class="menuitem">
              
            </div>
				<div class="verify-box shop-info">
					<h4>完善个人信息</h4>
					<p class="verify-intro">填写姓名、籍贯、职称、自我评价等基本信息。</p>
					<a class="btn btn-success" href="<s:url value="InputAction"/>"> 
					<!--<a class="btn btn-success" href="<s:url value="addcoaInfoAction.action"/>">-->
						<font><font><strong>填写个人信息</strong>
						</font>
						</font>
					</a>
				</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			 
			
		</fieldset>
	</s:form>
<script type="text/javascript" src="/cdio2010/js/common/jquery-1.8.3.min.js" charset="UTF-8"></script>
<script type="text/javascript" src="/cdio2010/js/common/bootstrap.min.js"></script>
<script type="text/javascript" src="/cdio2010/js/coa/bootstrap-tooltip.js"></script>
</body>
</html>