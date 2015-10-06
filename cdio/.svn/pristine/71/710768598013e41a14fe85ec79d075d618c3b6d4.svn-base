<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/jsps/common/taglibs.jsp"%>

<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<base href="<%=basePath%>">

<title>维护账户角色关系</title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->

<link href="<s:url value="/css/bgm/dtree.css"></s:url>" rel="stylesheet"
	type="text/css" />
<link rel="stylesheet" type="text/css"
	href="<s:url value="/css/common/bootstrap.css"></s:url>" />
<link rel="stylesheet" type="text/css"
	href="<s:url value="/css/common/bootstrap-responsive.css"></s:url>" />
<link href="<s:url value="/css/bgm/unicorn.main.css"></s:url>"
	type="text/css" rel="stylesheet">
	
<script type="text/javascript"
	src="<s:url value="/js/bgm/dtree.js"></s:url>"></script>
<script type="text/javascript"
	src="<s:url value="/js/bgm/etree.js"></s:url>"></script>
<script type="text/javascript"
	src="<s:url value="/js/bgm/userRole.js"></s:url>"></script>

<style type="text/css">
a:link {
	color: #FF0000;
}

a:visited {
	color: #00FF00;
}

a:hover {
	color: #56AC56;
	cursor: pointer;
}

a:active {
	color: #FFFFFF;
}
</style>

</head>

<body>
	<div id="content-header"></div>
	<div id="breadcrumb"></div>
	<div class="container-fluid">
		<div class="row-fluid">
			<div class="span12">
				<div class="widget-box">
					<div class="widget-title">
						<span class="icon"> <i class="icon-align-justify"></i> </span>
						<h5>维护角色权限关系</h5>
					</div>
					<div class="widget-content nopadding">
						<s:form cssClass="form-horizontal" onsubmit="return check();"
							action="update" namespace="/userRole" method="post">
							<input type="hidden" id="hid" value="" name="userID" />
							<div class="control-group">
								<label class="control-label" for="input01"></label>
								<div class="controls">
									<div class="span4" style="height: 400px;overflow-y:auto;">
										<div class="controls" style="margin-left: 0px;">
											<script type="text/javascript">
						d = new eTree('d');
						d.add(0,-1,'用户列表');
						<s:iterator value="userList">
							var userId=<s:property  value="id"/>;
							var userName='<s:property  value="userName"/>';
							d.add(userId,0,userName);
						</s:iterator>
						document.write(d);
					</script>
										</div>
									</div>
									<div class="span4 offset2"
										style="height: 400px;overflow-y:auto;">
										<div class="controls" style="margin-left: 0px;">
											<script type="text/javascript">
						d = new dTree('d');
						d.add(10,-1,'角色列表');
						<s:iterator value="roles">
							var roleId=<s:property  value="roleID"/>;
							var roleName='<s:property  value="roleName"/>';
							//var permName=<s:property  value="permName"/>;
							
							d.add(roleId,10,roleName);
							
						</s:iterator>
						document.write(d);
					</script>
										</div>
									</div>
								</div>
							</div>
							<div class="control-group">
								<div class="form-actions">
									<input type="submit" class="btn btn-success" value="确定" />
								</div>
							</div>
						</s:form>
					</div>
				</div>
			</div>
		</div>
	</div>
	</div>
	
	
	<script type="text/javascript"
		src="<s:url value="/js/common/jquery-1.8.3.min.js"></s:url>"></script>
	<script type="text/javascript"
		src="<s:url value="/js/bgm/jquery.contextmenu.r2.js"></s:url>"></script>
	
	<script>
			
			function check(){
				if(document.getElementById('hid').value==""){
					alert('请选择用户');
					return false;
				}
				
				else{
					var f=$("#hid").val();
					var d=document.getElementsByName("idList");
					var idList=[],c=0;
					for(var i=0;i<d.length;i++){
						if(d[i].getAttribute("checked")=="checked"){
							idList[c]=d[i].value;
							c++;
						}
					}
					var s="";
					$.post(
						"ur!update?userID="+f+"&idList="+idList,
						function(data)
						{	
							/*
							var info = data.info;
							
							if(info==0){
								$("#email_span").html("閭宸茶浣跨敤锛�");
								$("#email_span").addClass("td_red");
								emailIs = false;
							}else{
								emailIs = true;
								$("#email_span").html("鎮ㄥ凡濉啓姝ｇ‘鐨勯偖绠�");
								$("#email_span").removeClass("td_red");
							}
							*/
							
							alart("success");
						},
						"json");
				}
				
			}
		
	</script>
</body>
</html>
