<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>实名认证</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<link rel="stylesheet" href="/cdio2010/css/common/bootstrap.css" />
<link rel="stylesheet" href="/cdio2010/css/common/bootstrap-responsive.css" />

<link type="text/css" rel="stylesheet" href="/cdio2010/css/coa/coa.css" />
<link type="text/css" rel="stylesheet" href="/cdio2010/css/common/datetimepicker.css" />


<style type="text/css">

	img{
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

</style>

   <script type="text/javascript">
    /* 非IE*/
    function previewImage(file,preview,imghead,width,height)
    {
      var MAXWIDTH  = width;
      var MAXHEIGHT = height;
      var div = document.getElementById(preview);

      div.innerHTML = '<img id='+imghead+'>';
      var img = document.getElementById(imghead);
      img.onload = function(){
        img.width = width;
        img.height = height;
        
      }
      var reader = new FileReader();
      reader.onload = function(evt){img.src = evt.target.result;}
      reader.readAsDataURL(file.files[0]);
    }

    </script>
    
  	<script type="text/javascript">
	/* $(function(){
	  	$("#name").blur(function(){
	  		$("#checkName").hide();
	  		if($(this).val()!=""){
	  			$("#checkName").show();
	  		}
	  		
	  	});
	  }); */
  	function imgPreview(file,preview,imghead){

      /*浏览器检测*/
    	if(navigator.userAgent.indexOf("MSIE")>0){
        /*IE实现*/
    			var Src = document.getElementById("uploadField1").value;
          document.getElementById("imghead").src = Src;
      	}else{
    			previewImage(file,preview,imghead,120,90);
    		}
  	  }
	  
  	</script>
  	  
  	
</head>
<body data-target=".bs-docs-sidebar" data-spy="scro">

	<!-- onSubmit="return Validator.Validate(this,3)" -->
	<s:form class="form-horizontal" action="submitSuccessAction" method="post" enctype="multipart/form-data" id="frmTest">

		<fieldset>
			<div id="shop-verify" >
				<div id="shop-owner-verify" class="verify-module verify-disable">
					<div class="hd clearfix">
						<span class="floatleft title"><font style="font-family: '微软雅黑';"><i class="num">1</i>实名认证</font></span>
                     
					</div>
					<div class="bd">
						<div class="shop-verify-wrap">
							<div class="shop-result">
								<div class="fm-input">
                                 
										<div class="fm-item">
											<label class="fm-label"><span class="required">*</span>真实姓名：</label>

											<s:textfield cssClass="i-text" name="coach.name" maxlength="128" dataType="Require" id="name"
												msg="请填写您的姓名。"/><%-- <span><img id="checkName" style="width:15px;height:15px;display:none"src='<c:url value="image/res/checked.gif"/>'/></span> --%>

										</div>
										<div class="fm-item">

											<label class="fm-label"><span class="required">*</span>身份证号码：</label>

											<s:textfield cssClass="input-xlarge" name="coach.IDcard"  dataType="IdCard" id=""
												msg="请填写真实的身份证号码，身份证号码是15或18位数字。"/>

											<div class="fm-explain">请填写真实的身份证号码，身份证号码是15或18位数字。</div>
										</diV>

										<div id="expand-all-extend" class="ui-expand ">
											<div  class="fm-item J_extend_required">

                                                    <label for="fileFile" class="fm-label">
                                                    <span class="required">*</span>手持身份证头部照：</label> 
                                                    <img src="http://img02.taobaocdn.com/tps/i2/T1CQjSXgRpXXaZ4FE8-120-90.jpg" class="img-polaroid">
                                                    											
                                                    <div class="fm-explain">
													证件必须是清晰彩色原件电子版，可以是扫描件或者数码拍摄照片。
													<div class="ico">
														<em class="m-tips J_pop"></em>
														<span class="pop_extend_txt">请上传您身份证的扫描图片或用数码相机、手机拍摄的能够清晰辨认的图片。不能使用复印件。</span>
													</div>
													<br /> 支持.jpg .jpeg .bmp .png .gif 的图片格式。

												</div>
											</div>

												

										    	<div  id="preview" class="fm-item">
											  	     <!--<img id="preview" src="/image/coa/IDCard.jpg" width=50 height=100 /> --> 
											  	     <span><img id="imghead"  width=120 height=90
														src="/cdio2010/image/coa/uphead.jpg">
														
													 </span><br /> 
											    </div>
											    <div class="fm-item"> <!-- 摆设用的 -->
											<a class="btn btn-success" style="margin-left:5%;" onclick="document.getElementById('fileupload').click();"> 上    传 </a>
									
											  	        <s:file  id="fileupload" name="IDcPhoto" cssClass="uphead" dataType="Filter"
											  	         msg="请上传您的手持身份证头部照或格式不正确。" 
											  	        accept="jpg, gif, png, bmp,jpeg"
											  	        onchange="imgPreview(this,'preview','imghead')" ></s:file>
										  		</div>
										  		
												<!--<div class="fm-item">
												<s:file name="IDcPhoto" size="30"></s:file>

												<div class="fm-item">
												<s:file name="IDcPhotoo" size="30" dataType="Filter" msg="请上传您的手持身份证头部照或格式不正确。" accept="jpg, gif, png, bmp"

													onchange="$('idcardview').src=this.value;" ></s:file>
												</div>-->
											
											<div class="fm-item">

												<label for="passnum" class="fm-label"><span
													class="required">*</span>身份证到期时间：</label>
													<div class="input-append date form_datetime" data-date="2013-05-10T">

														<s:textfield size="8" name="coach.deadline" value=""  id="dp" readonly="true" dataType="Require" msg="请选择您的身份证到期时。" />
														
													    <span class="add-on"><i class="icon-remove"></i></span>
														<span class="add-on"><i class="icon-calendar"></i></span>
														 <label id="msgTest"></label>
													</div>
													
										   </div>
								</div>
							</div>
							
	<div align="center">
		<s:submit cssClass="btn btn-success" value="提交审核" align="center" onclick="return coaCheck()">
		</s:submit>

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
<script type="text/javascript" src="/cdio2010/js/common/bootstrap-datetimepicker.js" charset="UTF-8"></script>
<script type="text/javascript" src="/cdio2010/js/coa/locales/bootstrap-datetimepicker.fr.js" charset="UTF-8"></script>
<script type="text/javascript" src="js/common/bootstrap.js"></script>
<script type="text/javascript" src="/cdio2010/js/common/Validator.js" charset="UTF-8"></script>
<script type="text/javascript">
  	   function coaCheck() {
  	   	 var flag=true;
  	   	 var frm = document.getElementById("frmTest");
  	     var dpvalue = document.getElementById("dp").value;
  	     var test = document.getElementById("msgTest");
  	     if(dpvalue==""){
  	       test.innerHTML="&nbsp;&nbsp;&nbsp;*请选择您的身份证到期时。";
  	       test.style.fontSize = "12px";
  	       test.style.color = "red";
  	       flag = false;
  	     }else{
  	     	test.innerHTML = "";
  	     }
  	     flag = Validator.Validate(frm,3);
  	     return flag;
  	   }
  	</script>
    <script type="text/javascript">
	$(".form_datetime").datetimepicker({
	format: "yyyy-mm-dd",
	autoclose: true,
	todayBtn: true,
	startDate: "2013-01-01",
	minuteStep: 60,
	minView:2	
	});
    </script> 
    
</body>
</html>