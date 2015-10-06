<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="/WEB-INF/jsps/common/taglibs.jsp"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>

<title>cmt_judge_student</title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<link type="text/css" rel="stylesheet" href="css/common/bootstrap.css" />
<link rel="stylesheet" href="css/common/bootstrap-responsive.css" />

<style>
label {
	margin-right: 15px;
}
</style>

</head>
<body data-target=".bs-docs-sidebar" data-spy="scro"
	style="padding: 30px 100px 50px 100px">
	<div>


		<div>
			<p class="text-info">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp不断提高辅导质量,是您和我们共同的期盼。
				对学生进行客观、公正的评价，将有关信息反馈给学生本人，是提高教学质量的基础工作。
				因此，我们衷心希望您对学生做出公平公正的评价，您的评价对学生本人将起重要的作用。 &nbsp&nbsp&nbsp&nbsp</p>
		</div>
	</div>

	<div class="span8 offset1">
		<s:form id="judge_student" class="form-horizontal">
			<fieldset>
				<div style="padding-bottom: 5px;">&nbsp;</div>

				<div class="control-group">
					<!-- Text input-->
					<div class="input-prepend">
						<span class="add-on">学生:</span>
						<s:select id="studentName" name="judgeStudent.studentName"
							list="users" listKey="userName" listValue="userName" 
							></s:select>
					</div>
				</div>
				<s:iterator value="ListOfJjudgeQuestion" status="status">
					<div class="control-group">
						<div class="input-prepend">
							<span class="add-on"> <s:property value="#status.count" />、<s:property
									value="content" /> </span>
						</div>

						<div class="control">
							<s:radio name="answer[%{#status.index}]"
								list='#{"5":"优秀","4":"良好","3":"一般","2":"及格","1":"不及格"}' />
						</div>
					</div>
				</s:iterator>

				<div>
					对学生的总结：
					<div class="control-group">
						<textarea class="span8" id="content" rows="5" name="judgeStudent.judgeContent"
							placeholder="请输入您对该学生的总结..."></textarea>
					</div>
				</div>
				</div>
				<div class="span12">
					<div class="controls" style="padding-bottom:200px;">
						<div class="row-fluid">
							<s:hidden name="courseId" value="%{courseId}"></s:hidden>
					        <s:hidden name="recordId" value="%{recordId}"></s:hidden>
							<s:submit value="提 交" cssClass="btn  btn-success offset3"
								onclick="return checkAndDo();"></s:submit>
						</div>
					</div>
				</div>

			</fieldset>
		</s:form>

	</div>

<script type="text/javascript" src="js/common/bootstrap.js"></script>
<script type="text/javascript" src="js/common/jquery-1.8.3.min.js"></script>
<script type="text/javascript" src="js/cmt/jquery.form.js"></script>
<script type="text/javascript">
    function checkAndDo()
    {
       var total = "<s:property value="ListOfJjudgeQuestion.size()"/>";
       var content = $("#content").val();
       
       for(var i=0;i<total;i++)
       {
    	 var n =   $("input[name='answer["+i+"]']:checked").val();
    	 if(n==null) 
    	{
    		 alert("您有未选题目，请选择完毕再提交。");
    		 return false;
    	}
       }
       
       if(content==null||content==""){
			  alert("请输入您对学生的评价后提交");
		 	  return false;
       }
       
       var Index=$("#studentName").get(0).selectedIndex;    
         $("#judge_student").ajaxSubmit({
                    type: 'post',
                    dataType:'json',
                    url: "addJudgeStudent_teacher.action" ,
                    success: function(data){
                      if(data=="success")
                      {
	                      $("#judge_student").resetForm();
	                      document.all.studentName.options.remove(Index);
	                      var d = $("#studentName").children().length;
	                      if(d==0)
	                      {
	                        location.href="forSubmitReport.action?courseRecord.recordId=<s:property value="recordId"/>";
	                      }
                      }
                      else
                      {
                        alert("添加失败");
                      }  
                    },
                    error: function(){
                        
                    }
                });
   
     return false;
    }
    </script>
</body>
</html>