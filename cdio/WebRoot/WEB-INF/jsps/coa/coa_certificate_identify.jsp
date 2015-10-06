<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>资格认证</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link type="text/css" rel="stylesheet"
	href="/cdio2010/css/common/bootstrap.css" media="screen" />
<link type="text/css" rel="stylesheet"
	href="/cdio2010/css/common/bootstrap.min.css" media="screen" />
<link rel="stylesheet"
	href="/cdio2010/cdio2010/css/common/bootstrap-responsive.css" />
<link type="text/css" rel="stylesheet" href="/cdio2010/css/coa/coa.css" />

<style type="text/css">

	img{
		width:165px;
		height:112px;
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
        
      };
      var reader = new FileReader();
      reader.onload = function(evt){img.src = evt.target.result;};
      reader.readAsDataURL(file.files[0]);
    }

    </script>
    
  	<script type="text/javascript">

  	function imgPreview(file,preview,imghead){

      /*浏览器检测*/
    	if(navigator.userAgent.indexOf("MSIE")>0){
        /*IE实现*/
    			var Src = document.getElementById("uploadField1").value;
          document.getElementById("imghead").src = Src;
      	}else{
    			previewImage(file,preview,imghead,165,112);
    		}
  	  }

    </script>



</head>
<body data-target=".bs-docs-sidebar" data-spy="scro">

	<s:form class="form-horizontal" action="submitSucAction" method="post" enctype="multipart/form-data" onSubmit="return Validator.Validate(this,3)">
		<fieldset>
			<div id="shop-verify">
				<div id="shop-owner-verify" class="verify-module verify-disable">
					<div class="hd clearfix">
						<span class="floatleft title"><font style="font-family: '微软雅黑';"><i class="num">2</i>资格认证</font></span>

					</div>
					<div class="bd">
						<div class="shop-verify-wrap">
							<div class="shop-result">
								<div class="fm-input">
                                    <div class="fm-item">

										<label class="fm-label"><span class="required">*</span>姓名：</label>										

										<s:textfield cssClass="i-text" name="coach.name" maxlength="128" dataType="Require"
												msg="请填写您的姓名。"/>

									</div>
									<div class="alert alert-success"
											style="width:80%; margin-left: auto;margin-right: auto;">
											<button type="button" class="close" data-dismiss="alert">&times;</button>
											<strong>注 意！</strong> 培训证书号与教师证照择一填写即可。
										</div>
										<div class="verify-box shop-verify">
									<div id="expand-all-extend" class="ui-expand ">
										<div class="fm-item J_extend_required">


											<label class="fm-label"><span class="required"></span>培训证书号：</label>
											<s:textfield cssClass="i-text" name="coach.ctrain_num" />
											<!-- <span class="ctwarming">培训证书号与教师证照择一填写即可</span> -->
										</div>
									</div>

									<div id="expand-all-extend" class="ui-expand ">
										<div class="fm-item J_extend_required">

											<label for="fileFile" class="fm-label"> <span
												class="ctwarming"></span>有效证照：</label> <img
												src="/cdio2010/image/coa/tc.jpg" class="img-polaroid">

											<div class="fm-explain">
											<span id="ctwarming">可以是教师证，资格证，等级证等证明可从事教师资格的证件。</span>
												<br />
												<br />
												证件必须是清晰彩色原件电子版，可以是扫描件或者数码拍摄照片。
												<div class="ico">
													<em class="m-tips J_pop"></em> <span class="pop_extend_txt">请上传您身份证的扫描图片或用数码相机、手机拍摄的能够清晰辨认的图片。不能使用复印件。</span>
												</div>
												<br /> 支持.jpg .jpeg .bmp .png .gif 的图片格式。
											</div>
										</div>
										<div id="preview" class="fm-item">
											<!--<s:file name="TCpic" size="30"
												onchange="$('tcview').src=this.value;" />
										    -->
										    <span><img id="imghead" src="/cdio2010/image/coa/tc.jpg"
												width=165 height=112> </span><br />
										</div>
										 <div class="fm-item"> <!-- 摆设用的 -->
											<a class="btn btn-success" style="margin-left:8%;" onclick="document.getElementById('fileupload').click();"> 上    传 </a>
									
											  	        <s:file  id="fileupload" cssClass="uphead"  name="CoaPhoto" onchange="imgPreview(this,'preview','imghead')" />
										</div>
									</div>
								</div>

								<div align="center">
									<s:submit cssClass="btn btn-success" value="提交审核" align="center">
				
		                            </s:submit>
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
<script type="text/javascript" src="/cdio2010/js/coa/Validator.js" charset="UTF-8"></script>
</body>
</html>