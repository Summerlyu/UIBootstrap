<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>实名认证审核</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link type="text/css" rel="stylesheet"
	href="/cdio2010/css/common/bootstrap.css" media="screen" />
<link rel="stylesheet"
	href="/cdio2010/cdio2010/css/common/bootstrap-responsive.css" />
<link type="text/css" rel="stylesheet" href="/cdio2010/css/coa/coa.css" />

<style type="text/css">

	#pics {
		width:120px;
		height:90px;
		padding: 4px;
  background-color: #fff;
  border: 1px solid #ccc;
  border: 1px solid rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
     -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
	}
	
	.zoomingDemo .zoomTarget {
    background-color: #F8F8F8;
    border: 1px solid #EAEAEA;
    float: left;
    height: 100px;
    margin-bottom: 20px;
    margin-right: 20px;
    padding: 4px;
    width: 130px;
}

.clearer {
    clear: both;
}

.modal-footer {
  padding: 14px 15px 15px;
  margin-bottom: 0;
  text-align: center;
  background-color: #f5f5f5;
  border-top: 1px solid #ddd;
  -webkit-border-radius: 0 0 6px 6px;
     -moz-border-radius: 0 0 6px 6px;
          border-radius: 0 0 6px 6px;
  *zoom: 1;
  -webkit-box-shadow: inset 0 1px 0 #ffffff;
     -moz-box-shadow: inset 0 1px 0 #ffffff;
          box-shadow: inset 0 1px 0 #ffffff;
}
</style>
</head>
<body data-target=".bs-docs-sidebar" data-spy="scro">

	<form method="post" enctype="multipart/form-data">
		<fieldset>
			<div id="shop-verify">
				<div id="shop-owner-verify" class="verify-module verify-disable">
					<div class="hd clearfix">
						<span  class="title"><i class="num"  style="opacity:0"></i><img src="/cdio2010/image/coa/coach.png" style="margin-top:o.5%" height="40" width="40"></span>
					<span class="title"><i class="num"
							style="opacity:0"></i>实名认证审核</span>
					</div>
					<div class="bd">
						<div class="shop-verify-wrap">
							<div class="shop-result">
								<div class="fm-input">
									<div id="expand-all-extend" class="ui-expand ">
										<!-- <div class="fm-item J_extend_required"> -->
										<div class="verify-line">
											<label class="fm-line"><strong>个人信息</strong>
											</label>

										</div>

										<div class="fm-items">
											<label class="fm-labels">姓名：</label>
											<s:property value="coach.name" />
										</div>

										<div class="fm-items">
											<label class="fm-labels">身份证号码：</label>
											<s:property value="coach.IDcard" />
										</div>

										<div class="fm-items">
											<label class="fm-labels">身份证有效期：</label>
											<s:property value="coach.deadline" />
										</div>

										<div class="fm-items">
											<label class="fm-labels">提交申请时间：</label>
											<s:property value="coach.sub_real_date" />
										</div>

										<div class="verify-line">
											<label class="fm-line"><strong>手持身份证头部照</strong>
											</label>

										</div>
										<div class="fm-items">
										<div class="zoomingDemo">
											<!-- <img src="/cdio2010/image/coa/head.jpg" height="100"
												width="100"> -->
												<div class="zoomTarget" data-closeclick="true" data-targetsize="1.0">
											<img id="pics"  width=120 height=90 src="<s:url action="getIDcPicAction"/>?coach.id=<s:property value="coach.id"/>"/> <!-- 这个根据自己写的改 -->
										</div>
										<div class="clearer"></div>
										</div>
										</div>


									</div>
								</div>
								<div align="center">
									<a class="btn btn-success" href="<s:url value="isPassAction"/>?coachID=<s:property value="coach.id" />"> 通过  </a>
                                    <a class="btn btn-success" style="margin-left:15%;" onclick="ModalResize()" > 不通过  </a>
								
                                    <div id='noPass' style="width:50%; margin-left: auto;margin-right: auto;margin-top:5%;display:none;border:1px solid #EFEFEF;">
                                        <div class="modal-header">
	 										
											<h3 id="myModalLabel" contenteditable="true">原        因</h3>
										</div>
										<div class="modal-body">

											<div>
											
										    <s:textarea name="describtion" rows="5"
													cols="200" />
										   </div>

										</div>
										<div class="modal-footer">
											<a class="btn btn-success" href="<s:url value="notPassAction"/>?coachID=<s:property value="coach.id" />"> 确认  </a>
											<!--<button class="btn btn-success" contenteditable="true">
												确 认</button>-->
										</div>
									</div>
								</div>
								
							</div>
						</div>
					</div>
				</div>
			</div>
		</fieldset>
	</form>
	<script src="/cdio2010/js/common/jquery-1.8.3.min.js"></script>
<script type="text/javascript" src="/cdio2010/js/common/bootstrap.js"></script>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
<script type="text/javascript" src="/cdio2010/js/coa/jquery.zoomooz.min.js"></script>
	<script>
								    		 function ModalResize () {
	 parent.iframeAutoFit(parent.document.getElementById("iframepage")); 
	var oNoPass=document.getElementById('noPass');
	oNoPass.style.display='block';
	
	
}      
								</script>
	<!-- <script type="text/javascript">
		$('#dialog_link').click(function() {
			$('#dialog_simple').dialog('open');
			return false;
		});

		$('#dialog_simple').dialog({
			autoOpen : false,
			width : 600,
			buttons : {
				"Ok" : function() {
					$(this).dialog("close");
				},
				"Cancel" : function() {
					$(this).dialog("close");
				}
			}
		});
	</script> -->

</body>
</html>