<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/WEB-INF/jsps/common/taglibs.jsp"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
  <meta charset="utf-8">
    <base href="<%=basePath%>">
     <title>高级搜索课程界面</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->  
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link type="text/css" rel="stylesheet" href="css/common/bootstrap.css" />
    <link type="text/css" rel="stylesheet" href="css/mat/mat.css"/>
    <link rel="stylesheet" type="text/css" href="css/common/time.css"/>
  <link rel="stylesheet" type="text/css" href="css/common/datetimepicker.css"/>	
  <script type="text/javascript" src="js/common/jquery-1.8.3.min.js"></script>
   <script type="text/javascript" src="js/common/bootstrap-datetimepicker.js"></script>

    	 <style type="text/css">
	      ul{ 
          list-style-type: none; 
 
          } 
         ul li{ 
         background:#5bb75b; 
        } 


</style>
    <script type="text/javascript">
       function tosearch()
       {
    	   var coursename=$("#coursename").val();
    	   var min=$("#min").val();
    	   var max=$("#max").val();
    	//   var starttime=$()
       }
    </script>
  </head>
  

<body>
    <div class="container-fluid">
    <div class="row-fluid">
    <div class="span5">
	<br/><br/><br/><br/>
	<!-- 备注：action 和 namespace要改成我们自己的 -->
    <s:form cssClass="form-horizontal" action="advanceSearch"  namespace="/search" method="post">
	<fieldset>

     <div class="control-group">
	     <label class="control-label" for="inputPassword" >课程名：</label>
          <div class="controls">
          
       <!-- 属性值暂定serach.xxx，需修改 -->   
         <input type="text" id="coursename" name="subjectName" style="height:30px;"/>
		 </div>
      </div>
      
      <div class="control-group">
           <label class="control-label" for="inputPassword">价格：</label>
           <!-- 属性值暂定serach.xxx，需修改 -->
		     <div class="controls" style="height:20px">
              <input class="input-mini"type="text" placeholder="0.00" name="priceBegin" style="height:30px;" id="min" >
		       <label>~~</label>
		          <input class="input-mini" type="text" placeholder="1000" name="priceEnd" style="height:30px;" id="max" >
				  </div>

          </div>
    <div class="control-group">
      <!-- 属性值暂定serach.xxx，需修
           <label class="control-label" for="inputPassword">上课时间：</label>
		     <div class="controls" >
              <input class="input-mini"type="text" placeholder="0.00" name="classTimeBegin">
		       <label>~~</label>
		          <input class="input-mini" type="text" placeholder="1000" name="classTimeBegin">
		 </div>-->
		 
		 
   
   <label class="control-label" for="inputPassword">上课时间：</label>
    <div class="controls" >
       <div class="input-append date form_datetime" data-date="2013-6-01T15:25:00Z">
    
            <input id="J_date_3" size="12" type="text" value="" readonly style="height:30;"class="input-medium"  name="classTimeBegin">
            <span class="add-on"><i class="icon-remove"></i></span>
            <span class="add-on"><i class="icon-th"></i></span>
         
       </div>
   <br/>
    <br/>
    <div class="input-append date form_datetime" data-date="2013-6-01T15:25:00Z">
       <input id="J_date_4" size="12" type="text" value="" readonly style="height:30;" class="input-medium" name="classTimeEnd">
       <span class="add-on"><i class="icon-remove"></i></span>
       <span class="add-on"><i class="icon-th"></i></span>
    </div>
<s:submit value="搜索" cssClass="btn btn-success" style="margin-top:2em;"></s:submit>
	</div>
    <script type="text/javascript">
    $('.form_datetime').datetimepicker({
        //language:  'fr',
        weekStart: 1,
        todayBtn:  1,
		autoclose: 1,
		todayHighlight: 1,
		startView: 2,
		forceParse: 0,
        showMeridian: 1
    });
</script>

</div>
         
 

		</fieldset>
      </s:form>
         
    </div>
	
	<br/><br/><br/><br/>
    <div class="span5 offset1">
    
     <ul class="ul1" style=" ">
     <li class ="liBg"id="blink" style="border-radius:6px 6px 0px 0px"><MARQUEE behavior=alternate>搜索小贴士.</MARQUEE></li>
      <p style="background-color:#D9EEF2;border-radius:0px 0px 6px 6px" >
	  
	 	   <MARQUEE onmouseover=stop() onmouseout=start() direction=up scrollDelay=120 style="text-align:center;">  
		           如何得到少量的搜索结果？<br/>
         使用一个以上的关<br/>键词进行组合<br/>
		 搜索，我们的搜索引擎将<br/>把你输入的所<br/>
		 有关键词与产品相匹配，<br/>得出更精确的结果。<br/>
		 
		 如何得到更多的搜索结果？<br/>
		 过多的关键词将限制你的<br/>搜索结果，<br/>
		 用较少的关键词去搜索，你<br/>将得到更多的结果。<br/>
</MARQUEE><br/>
		 
	  </p>
      </ul>
 
    </div>
 
    </div>
    </div>
    </div>
	

  
<script type="text/javascript" src="js/common/bootstrap.js"></script>
</body>
</html>
