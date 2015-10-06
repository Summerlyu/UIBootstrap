<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="/struts-tags" prefix="s"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
   
    
    <title>学员资料修改</title>
    
	<link rel="stylesheet" type="text/css"
	href="<c:url value="/css/common/bootstrap.css"></c:url>" />
    <link rel="stylesheet" type="text/css"
	href="<c:url value="/css/common/bootstrap-responsive.css"></c:url>" />
	<link rel="stylesheet" type="text/css"
	href="<c:url value="/css/stu/pos.css"></c:url>" />
	<link rel="stylesheet" type="text/css"
	href="<c:url value="/css/stu/div_css.css"></c:url>" />
	<link rel="stylesheet" type="text/css"
	href="<c:url value="/css/stu/btn.css"></c:url>" />
	
      
       <style type="text/css">
       input[type="checkbox"] {
   	    margin-top:0px;
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

  	function imgPreview(file,preview,imghead){

      /*浏览器检测*/
    	if(navigator.userAgent.indexOf("MSIE")>0){
        /*IE实现*/
    			var Src = document.getElementById("uploadField1").value;
          document.getElementById("imghead").src = Src;
      	}else{
    			previewImage(file,preview,imghead,140,100);
    		}
  	  }

  	</script> 
  </head>
  
  <body >
  <div class="container" id="mytop">
			<div class="row">

  <form class="form-horizontal" action="updateInfo_student" namespace="/stu" method="post" enctype="multipart/form-data">
    <fieldset>
      <div id="legend" class="">
        <legend class="header">资料修改</legend>
      </div>
  
   <div class="control-group" style="position:relative; top:0px;left:-6.250em;">
         <br/>
	    <s:hidden label="学号" name="user.id"></s:hidden>
	 
	    	<label class="control-label" for="inputInfo">头像：</label>
	    	<div class="controls">
			       <DIV id="preview" >
				      <img  id="imghead"  src="/cdio2010/getUserHeadPicAction.action"  width="140" height="100"/><br/>
				   </DIV>
				      <s:file id="uploadField1" name="photo" size="15" onchange="imgPreview(this,'preview','imghead')"></s:file>
			 </div>
			
    </div>
    
 <div style="float:right;position:relative; top:-1.125em;left:-12.625em;">
    <DIV class=control-group>
	    <label class="control-label" for="inputInfo">真实姓名：</label>
		    <div class="controls">
			    <s:textfield  style="height:2.0em;width:17.625em" name="user.name" size="20" title="请输入真实姓名！" msg="真实姓名只允许中文" datatype="Chinese"></s:textfield>   
		    </div>
    </div>
    
     
    <div class="control-group">
    	<label class="control-label" for="inputInfo">性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别：</label>
 		<div class="controls">	
 			<s:radio label="性别" name="user.sex" list="#{'男':'男&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;','女':'女'}" ></s:radio>
    	</div>
    </div>
    
    
    <div class="control-group">
    <label class="control-label" for="inputInfo">年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;龄：</label>
	    <div class="controls">
	    	<s:textfield style="height:2.0em;width:17.625em" name="user.age" size="20" msg="只可以填写数字" datatype="Integer"></s:textfield>	               
	    </div>
    </div>
    
    <div class="control-group">
	    <label class="control-label" for="inputInfo">住&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址：</label>
		    <div class="controls">
		   		<s:textfield style="height:2.0em;width:17.625em" name="user.address" size="50" ></s:textfield>
		    </div>
    </div>
    
    <div class="control-group">
	    <label class="control-label" for="inputInfo">学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;校：</label>
		    <div class="controls">
		    	<s:textfield style="height:2.0em;width:17.625em" name="user.school" size="50"></s:textfield>
		    </div>
    </div>
    
    <div class="control-group">
    	<label class="control-label">现&nbsp;在&nbsp;年&nbsp;级:</label>
        	<div class="controls">
	        	<s:select style="width:17.625em" name="user.grade" list="#{ '1':'一年级',
										        	    '2':'二年级',
										        	    '3':'三年级',
										        	    '4':'四年级',
										        	    '5':'五年级',
										        	    '6':'六年级',
										        	    '7':'七年级',
										        	    '8':'八年级',
										        	    '9':'九年级'
										        	}"></s:select>

             </div>
     </div>
    
     <div class="control-group">
          <label class="control-label">教&nbsp;育&nbsp;背&nbsp;景:</label>
          <div class="controls">
    	  	<s:select style="width:17.625em" name="user.eduBackground" list="#{'小学':'小学','初中':'初中'}"></s:select>
          </div>
     </div>
    
    <div class="control-group">
	    <label class="control-label" for="inputInfo">电&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;话：</label>
		<div class="controls">
		    <s:textfield style="height:2.0em;width:17.625em" name="user.phone" size="20" datatype="Phone" mag="格式错误！"></s:textfield>
	    </div>
    </div>

    <div class="control-group">
	    <label class="control-label" for="inputInfo">邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱：</label>
	    <div class="controls">
	    	<s:textfield style="height:2.0em;width:17.625em" name="user.email" size="30" datatype="Email" mag="邮箱格式错误"></s:textfield>
	    </div>
    </div>    
	   
    
    <div class="control-group">
	    <label class="control-label" for="inputInfo">QQ&nbsp;&nbsp;号码：</label>
	    <div class="controls">
	    	<s:textfield style="height:2.0em;width:17.625em" name="user.qqNum" size="10" datatype="QQ" mag="QQ输入错误"></s:textfield>
	    </div>
    </div>
    
    <div class="control-group">
    	<label class="control-label" for="inputInfo">兴趣爱好：</label>
	    <div class="controls">
	     	<s:checkboxlist name="hobbies" list="#{\"a\":'读书',\"b\":'上网',\"c\":'游泳',\"d\":'唱歌',\"e\":'绘画',\"f\":'篮球',\"g\":'足球'}" cssStyle="margin-top: 0px"></s:checkboxlist>
	    </div>
  	</div> 

	 <div class="control-group">
	    <label class="control-label" for="inputInfo">自我介绍：</label>
	    <div class="controls">
	    	<s:textarea name="user.selfIntroduction" rows="2" cols="20" style="width:300px;"></s:textarea>
	    </div>
    </div>
    
     <br/>
    <div class="control-group" style="position:relative; top:0em;left:13.625em;">
    	<div class="controls">
            
             <s:submit value="保  存" class="btn btn-success" style=" 
  font-size:14px;           
 border: 1px solid #cccccc;
  border-color: #e6e6e6 #e6e6e6 #bfbfbf;
  border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);
  border-bottom-color: #b3b3b3;
  -webkit-border-radius: 4px;
     -moz-border-radius: 4px;
          border-radius: 4px;
  width:80;
  height:30;        
  color:#fff;
  background-color: #51a351;"
></s:submit>     
        </div>
    </div>
</div> 
   
    </fieldset>
  </form>
				

			</div>
		</div>
		<c:if test="${not empty msg}">
			<script type="text/javascript" > 	
   					alert("修改成功");
  			</script>								
		</c:if>
		
		<script type="text/javascript"
			src="<c:url value="/js/stu/newValidator.js"></c:url>"></script>
  </body>
</html>
