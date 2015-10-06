<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>完善个人信息</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link type="text/css" rel="stylesheet"
	href="/cdio2010/css/common/bootstrap.css" media="screen" />
<link type="text/css" rel="stylesheet"
	href="/cdio2010/css/common/bootstrap.min.css" media="screen" />
<link type="text/css" rel="stylesheet"
	href="/cdio2010/css/coa/layoutit.css" />
<link rel="stylesheet"
	href="/cdio2010/css/common/bootstrap-responsive.css" />
<link type="text/css" rel="stylesheet" href="/cdio2010/css/coa/coa.css" />
<link type="text/css" rel="stylesheet"
	href="/cdio2010/css/common/datetimepicker.css" />
<script type="text/javascript" src="/cdio2010/js/coa/jquery.min.js"></script>
<script type="text/javascript" src="/cdio2010/js/coa/jquery.Jcrop.js"></script>

<script type="text/javascript" src="/cdio2010/js/coa/Validator.js"
	charset="UTF-8"></script>

<link type="text/css" rel="stylesheet"
	href="/cdio2010/css/coa/jquery.Jcrop.css" />
<link type="text/css" rel="stylesheet"
	href="/cdio2010/css/coa/jquery.Jcrop.min.css" />

<style type="text/css">

	img{
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
     /* document.getElementById("uploadField1").setAttribute(value,evt.target.result);*/
    }

    </script>
    
  	<script type="text/javascript">

  	function imgPreview(file,preview,imghead){

      /*浏览器检测*/
    	if(navigator.userAgent.indexOf("MSIE")>0){
        /*IE实现*/
    			var Src = document.getElementById("uploadField1").value;
    			alert(Src);
          document.getElementById("imghead").src = Src;
      	}else{
    			/*var Src = document.getElementById("uploadField1").value;*/
    			previewImage(file,preview,imghead,100,100);
    		}
  	  }

  	</script>
  	
  	<script type="text/javascript" >
	var pIndex;
	var cIndex;
	var aIndex;
   	function changeProvince(obj){
   	 	
	pIndex = obj.options[obj.options.selectedIndex].value;
	//使用jQuery中的$.ajax({});Ajax方法
	$.ajax({
		url:"linkageActionCity.action",
		type:"post",
	 	data:"provinceIndex="+pIndex,//要传递的数据 */
		dataType:"json",
		success:function(msg){
			//清空下拉框选项
			$("#selectCity").empty();
	        $("#selectCity").append('<option value="">请选择市</option>');
	        //开启下拉框架
	        $("#selectCity").addClass("disable").attr({disabled: false});
			var length = msg.length;//cityList的长度
			for(var i=0;i<=length;i++){
				//添加下拉框选项
				$("#selectCity").append('<option value="'+msg[i].cid+'">'+msg[i].cname+'</option>');
			}
	       
		}
	});
	
} 
 
function changeCity(obj){
	cIndex = obj.options[obj.options.selectedIndex].value;
	//使用jQuery中的$.ajax({});Ajax方法
	$.ajax({
		url:"linkageActionArea.action",
		type:"post",
	 	data:"provinceIndex="+pIndex+"&cityIndex="+cIndex,//要传递的数据 */
		dataType:"json",
		success:function(msg){
			//清空下拉框选项
			$("#selectArea").empty();
	        $("#selectArea").append('<option value="">请选择区</option>');
	        //开启下拉框架
	        $("#selectArea").addClass("disable").attr({disabled: false});
			var length = msg.length;//areaList的长度
			for(var i=0;i<=length;i++){
				//添加下拉框选项
				$("#selectArea").append('<option value="'+msg[i].aid+'">'+msg[i].aname+'</option>');
			}
	       
		}
	});
}

</script> 

</head>
<body data-target=".bs-docs-sidebar" data-spy="scro" onload="setup()">

	<s:form  action="CreateAction" method="post" enctype="multipart/form-data" onSubmit="return Validator.Validate(this,3)">
		<fieldset>
			<div id="shop-verify">
				<div id="shop-owner-verify" class="verify-module verify-disable">
					<div class="hd clearfix">
						<span class="floatleft title"><font style="font-family: '微软雅黑';"><i class="num">3</i>完善个人信息</font></span>
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
											
										     <div class="fm-item">
											<label class="fm-label"><span class="required">*</span>姓名：</label>
											<s:textfield cssClass="i-text" name="coach.name" maxlength="128" dataType="Require"
												msg="请填写您的姓名。"/>
										    </div>

											<div class="fm-item">
											<label class="fm-label"><span class="required">*</span>等级：</label>
											<s:textfield cssClass="i-text" name="coach.level" maxlength="128"/>
										    </div>
										    
										    <div class="fm-item">
											<label class="fm-label"><span class="required"></span>籍贯：</label>
											<s:textfield cssClass="i-text" name="coach.nativePlace" maxlength="128"/>
										    </div>
										    
										    <div class="fm-item">
											<label class="fm-label"><span class="required"></span>民族：</label>
											<s:textfield cssClass="i-text" name="coach.nation" maxlength="128" value="汉族"/>
										    </div>
										    

										    <div class="fm-item">
											<label class="fm-label"><span class="required">*</span>性别：</label>
											<s:select cssClass="input-small" name="coach.sex" dataType="Require"
												msg="请选择您的性别。"
											                                 list="#{\"男\":'男',\"女\":'女'}"/>
											  
										    </div>

										    <div class="fm-item">

												<label for="passnum" class="fm-label"><span
													class="required"></span>出生日期：</label>
													<div class="input-append date form_datetime" data-date="2013-05-10T">
														<s:textfield size="8" name="coach.birth" value="" readonly="true" />
													    <span class="add-on"><i class="icon-remove"></i></span>
														<span class="add-on"><i class="icon-calendar"></i></span>
													</div>
										    </div>
										    <div class="fm-item">
											<label class="fm-label"><span class="required"></span>政治面貌：</label>
											<s:textfield cssClass="i-text" name="coach.politicsStatus" maxlength="128"/>
										    </div>

									        <div class="fm-item">
											<label class="fm-label"><span class="required">*</span>职务/职称：</label>
											<s:textfield cssClass="i-text" name="coach.job" maxlength="128" dataType="Require"
												msg="请填写您的职务/职称。"/>
										    </div>									  
											 
											 <div id="wrapper" class="fm-item">
											 <label class="fm-label"><span class="required">*</span>工作单位：</label>		                     
			                                 <s:select cssClass="input-small" id="selectProvince" name="province" list="provinceList"
			                               	           listKey="pid" listValue="pname" headerKey="0" dataType="Require"
												msg="请选择省。"
				                                       headerValue="请选择省" onchange="changeProvince(this);">
			                                  </s:select>

			                                  <s:select cssClass="input-small" id="selectCity" name="city" list="cityList"
			                                            listKey="cid" listValue="cname" headerKey="0" dataType="Require"
												msg="请选择市。"
			                                        	headerValue="请选择市" onchange="changeCity(this);">
			                                  </s:select>

			                                  <s:select cssClass="input-small" id="selectArea" name="area" list="areaList"
				                                       listKey="aid" listValue="aname" headerKey="0" dataType="Require"
												msg="请选择区。"
				                                       headerValue="请选择区">
			                                  </s:select>	                           
	                                          </div>
										    
										     
										    <div class="fm-item">
											<label class="fm-label"><span class="required"></span>自我评价：</label>
											<s:textarea cssClass="i-text" name="coach.comment" rows="2" cols="120"/>
										    </div> 
										    </div>
								<div class="span4">						                                               																 
									<div class="pf-avatar-box">
										<!--  图片自动剪裁功能暂缺 -->
										<div id="preview">
  	                                         <img id="imghead" src="/cdio2010/image/coa/head.jpg" style="width:100;height:100" />
  		                                </div>	
									</div>
									<div class="pf-avatar-up"> <!-- 摆设用的 -->
											<a class="btn btn-success"  onclick="document.getElementById('fileupload').click();"><font><font>上传头像</font></font></a>
									</div>
									<div>
										<s:file id="fileupload" name="coachPhoto" cssClass="uphead" onchange="imgPreview(this,'preview','imghead')"/>
									</div>
</div>
</div>
</div>
							</div>
							</div>
							
	<div align="center">
		<s:submit cssClass="btn btn-success" value="保  存" align="center">
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
    <script type="text/javascript">
	$(".form_datetime").datetimepicker({
	format: "yyyy-mm-dd",
	autoclose: true,
	todayBtn: true,
	startDate: "1900-01-01",
	minuteStep: 30,
	minView:2	
	});
    </script> 
</body>
</html>