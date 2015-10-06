<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
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
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<title>匹配结果</title>
<meta name="viewport" content="width=device-width,initial-scale=1">

<link type="text/css" rel="stylesheet" href="css/common/bootstrap.css" />
<link rel="stylesheet" type="text/css"  href="css/common/bootstrap-responsive.css">

<link type="text/css" rel="stylesheet" href="css/mat/mat.css" />

</head>

<body style="background-color:white; background-size:cover;">

	<div class="container">
		<div class="button">
		<br/>
     <a class="btn btn-success "
				href="<s:url action="changePage" namespace="match">
				<s:param name="currentPage" value="currentPage" />
			</s:url>">换一批</a>

		</div>
		<br/>
		<br/>
		<div class="bs-docs-example" width="100%" height="100%">
			<table class="table table-hover" style="margin-top: 30px;">
				<tbody>

					<s:iterator value="infoList" id="info" status="st">
						<tr>
							<td><div class="span6">
									<table>
										<tr>
											<td><a
												href="<s:url action="detailAction" namespace="match">
												<s:param name="courseId" value="#info.courseID" />
											</s:url>"
												class="btn btn-success"> <s:property
														value="#info.subject" /> </a>
											</td>
										</tr>
										<tr>
												<td>姓名:<s:property value="#info.coachName" />
											</td>
											<td>二级教师</td>
										</tr>
										<tr>
										<s:if test="#info.course.teachStyle == ’a‘">
												<td>严厉</td>
											</s:if>
										<td>教学风格:	<s:property value="#info.course.teachStyle" />
											</td>
										</tr>
										<tr>
											<td>年级:<s:property value="#info.grade" />
											</td>
										</tr>
										<tr>
											<td>上课时间:<s:property value="#info.classTime" />
											</td>
										</tr>
									</table>
								</div>
							</td>
					</s:iterator>
				</tbody>
			</table>
		</div>
	</div>
<br/>
<br/>
<br/>
<script type="text/javascript" src="js/common/jquery-1.8.3.min.js"></script>
</body>
</html>
