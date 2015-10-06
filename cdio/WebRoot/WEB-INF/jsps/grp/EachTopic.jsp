<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
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
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title>EachTopic</title>

		<link href="<c:url value="/css/common/bootstrap.css"/>"
			rel='stylesheet' type='text/css' />
		<script src="<c:url value="/js/common/jquery-1.8.3.min.js"/>"></script>
		<script src="<c:url value="/js/common/bootstrap.js"/>"></script>


		<style>
.EG_head_gname {
	border-bottom: 1px #dddfff dashed;
	padding-bottom: 10px;
}

.EG_head_uname {
	border-bottom: 1px #dddfff dashed;
	padding-bottom: 10px;
}

.EG_head_itr {
	border-bottom: 1px #dddfff dashed;
	padding-bottom: 10px;
}

.TopicContent {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.EG_left {
	border: 1px #dddfff solid;
}

.EG_right {
	border: 1px #dddfff solid;
	text-align: center;
}
</style>

	</head>

	<body>

		<div class="row-fluid">
			<div class="span12"
				style=" padding-bottom: 20px; margin-top: 30px; margin-left: 120px;">

				<div class="media" style="margin-top: 10px;">
					<a class="pull-left"><img style="width:100px;height:100px" class="media-object img-polaroid" data-src="holder.js/100x100"
							src="<s:url action="getPic" namespace="/group"/>?group.groupId=<s:property value="#session.groupHelp.group.groupId"/>"/> </a>
					<div class="media-body">
						<div class="media-heading EG_head_gname">
							<i class="icon-home" title="组名"></i>
							<s:property value="#session.groupHelp.group.groupName" />
							<s:if test="#session.groupHelp.flag==3">
							<a class="btn btn-success" id="w"><i class="icon-ok"></i>&nbsp;<span style="font-style:italic; color:#330000;">已加入</span>&nbsp;|&nbsp;组长</a>
						    </s:if>  
							<s:elseif test="#session.groupHelp.flag==2"><i class="btn btn-success">已加入</i></s:elseif>
							
							 <s:elseif test="#session.groupHelp.group.groupNums==40">
							<a class="btn btn-success" id="w"><i class="icon-ok"></i>&nbsp;<span style="font-style:italic; color:#330000;">该组已满</span></a>
					    	</s:elseif>
							 
							 <s:else>
							<a class="btn btn-success" style=" margin-left: 30px;" href="<c:url value="/member/addMember?groupId=${session.groupHelp.group.groupId}"/>"><i class="icon-plus"></i>加入该组</a>
							</s:else>
						</div>
						<div class="EG_head_uname">
							<i class="icon-user" title="组长"></i>&nbsp;<s:property value="#session.groupHelp.user.userName" />
							<br>
						</div>
						<div class="EG_head_itr">
							<i class="icon-file" title="简介"></i>
							
						   <s:property value="#session.groupHelp.group.groupIntro" />
						</div>
						<!-- Nested media object -->
					</div>
				</div>

			</div>

			<div class="span9 offset1"
				style="border: 1px #dddfff solid; margin-top: 10px;">
				<div class="span12"
					style="border-bottom: 1px #dddfff solid; padding: 2px 2px 2px 2px;">
					<div class="row-fluid">
						<div class="span8" style="margin-top: 5px;">
							<a style="font-size:20px;"><s:property value="topic.topicName" />
						</a>
							
						</div>
						<div class="span2">
							<a class="btn btn-success" style="font-size:12px;margin-top:2px;">回复</a>
						</div>
						<div class="span2">
						
						   <s:if test="isAgree==2">
					               <a class="btn btn-success" disabled="true" style=" margin-left: 50%;"> 
					               <span id="go2"><s:property value="topic.topicAgree" /></span>
					               </a>             
                           </s:if>
                           <s:else>
                            <a href="<c:url value="/topic/addAgree?topic.topicId=${topic.topicId}"/>" class="btn btn-success"  style=" margin-top: 2px;">
						                <span id="go2">赞<s:property value="topic.topicAgree" /></span>
                             </a>
                           </s:else>
						</div>

					</div>

				</div>
				<!--topic name-->
			</div>
			<div class="span9 offset1"
				style="border: 1px #dddfff solid; margin-top: 10px;">
				<div class="span12" style="border-bottom: 1px #dddfff solid;">
					<!--TopicContent-->
					<div class="media"
						style="padding: 10px 10px 0px 10px; margin-top: 2px; border-bottom: 1px solid #dddfff;">
						<a class="pull-left img-polaroid" style="width: 100px;height:100px" > <img style="width: 100px;height:100px"
								class="media-object" data-src="holder.js/64x64"
								src="<s:url action="getUserPic" namespace="/group"/>?user.id=<s:property value="topic.user.id"/>" > 
								<div class="span6 offset2" style="min-height:0px;color:#FFCC00;"><i class="icon-user"></i><s:property value="topic.user.userName" /></div>
						</a>
						<div class="media-body">
							<div class="span12" style="min-height: 100px;font-size:16px;">
								<s:property value="topic.topicContent" />
							</div>
							<div class="span8 offset3"
								style="font-size: 12px; margin-top: 2px; text-align: right;">
								楼主|举报&nbsp;|&nbsp;<s:property value="topic.topicCreateTime" />&nbsp;|&nbsp;
								<a class="">回复(<s:property value="topic.nums"/>)</a>
							</div>
							<div class="span8 offset3 te2"
								style="font-size: 12px; margin-top: 2px; display: none;">

								<div class="span12" style="border: 1px solid #dddfff;">
									<!--repeatContent-->
									<div class="media"
										style="padding: 10px 10px 0px 10px; margin-top: 2px; border-bottom: 1px solid #dddfff; background-color: #dfffff">
										<a class="pull-left" href=""> <img
												class="media-object img-polaroid" data-src="holder.js/64x64"
												src="<c:url value="/image/grp/test/a.jpg"/>"
												style="width: 100px;height:100px">
												<div class="span6 offset2" style="min-height:0px;"><i class="icon-user"></i><s:property value="topic.user.userName" /></div> </a>
										<div class="media-body">
											<div class="span12" style="min-height: 60px;">
												TopicContent
											</div>
											<div class="span8 offset3"
												style="font-size: 12px; margin-top: 2px; text-align: right;">
												举报&nbsp;|&nbsp;2013-5-31&nbsp;|&nbsp;
												<a class="te" >回复</a>
											</div>
											<!-- Nested media object -->

										</div>
									</div>
									<!--endrepeat-->


								</div>
								<div class="span10 offset1"
									style="margin-top: 20px; margin-bottom: 5px;">
									<textarea style="width: 90%; height: 40px; resize: none;"></textarea>
									<div class="span2">
										<a class="btn" href="">回复</a>
									</div>
								</div>

							</div>
							<!-- Nested media object -->

						</div>
					</div>

					<!--endTopic-->

	<!--TopicContent-->
	         <s:iterator value="replysList" var="reply" status="status">
					<div class="media"
						style="padding: 10px 10px 0px 10px; margin-top: 2px; border-bottom: 1px solid #dddfff;">
						<a class="pull-left"> <img
								class="media-object img-polaroid" data-src="holder.js/64x64"
								src="<s:url action="getUserPic" namespace="/group"/>?user.id=<s:property value="user.id"/>"
								style="width: 100px;height:100px"> 
								<div class="span6 offset2" style="min-height:0px;"><i class="icon-user"></i><s:property value="user.userName" /></div></a>
						<div class="media-body">
							<div class="span12" style="min-height: 100px;">
								<s:property value="replyContent" />
							</div>
							<div class="span8 offset3"
								style="font-size: 12px; margin-top: 2px; text-align: right;">
								<s:property value="#status.count"/>楼|举报&nbsp;|&nbsp;<s:property value="replyTime" />&nbsp;|&nbsp;
								<a class="te" >回复(<s:property value="nums" />)</a>
							</div>
							<div class="span8 offset3 te2"
								style="font-size: 12px; margin-top: 2px; display: none;">
                              
                                <s:iterator value="rreplysMap" id="column">  
                          
                                <s:if test="#column.key==#reply.replyTopicId">
                                   
                               <s:iterator value="#column.value" id="list">
                               
								<div class="span12" style="border: 1px solid #dddfff;">
									<!--repeatContent-->
									<div class="media"
										style="padding: 10px 10px 0px 10px; margin-top: 2px; border-bottom: 1px solid #dddfff; background-color: #dfffff">
										<a class="pull-left" >  
												<div class="span12" style="min-height:0px;"><i class="icon-user"></i><s:property value="#list.user.userName" />:
												</div></a>
										<div class="media-body">
											<div class="span12" style="min-height: 60px;">
												<br>   <s:property value="#list.replyContent"/><br>  
											</div>
											<div class="span9 offset2"
												style="font-size: 12px; margin-top: 2px; text-align: right;">
												举报&nbsp;|&nbsp;<s:property value="#list.replyTime"/>&nbsp;
												
											</div>
											<!-- Nested media object -->

										</div>
									</div>
									<!--endrepeat-->


								</div>
								</s:iterator>
							   </s:if>
								
								 </s:iterator>
								<s:form namespace="/replyTopic" action="addReplyReply" method="post" theme="simple"> 
						         
						         <input type="hidden" name="topicId" value="<s:property value="topic.topicId"/>"/>
								 <input type="hidden" name="replyTopicId" value="<s:property value="replyTopicId"/>"/>
								<div class="span10 offset1"
									style="margin-top: 20px; margin-bottom: 5px;">
									
									  <s:textarea name="replyReply.replyContent" style="width: 90%; height: 40px; resize: none;"></s:textarea>
									<div class="span2">
										<input type="submit" value="回复" class="btn btn-success"></input>
									</div>
								</div>
								</s:form>

							</div>
							<!-- Nested media object -->

						</div>
					</div>
					</s:iterator>
                <!--endTopic-->
				</div>






			</div>
			<div class="row-fluid">
            <s:form namespace="/replyTopic" action="addReply" method="post" theme="simple"> 
              <input type="hidden" name="topicId" value="<s:property value="topic.topicId"/>"/>
            
			<div class="span9 offset2" style="margin-top: 30px;">
			    <s:textarea name="replyTopic.replyContent" style="width: 100%; height: 100px; resize: none; margin-left: -90px;"></s:textarea>
				
			</div>
			<div class="span2 offset2">
				<input type="submit" value="回复" class="btn btn-success"></input>
			</div>
			</s:form> 
			</div>
		</div>
		<script type="text/javascript">
	$(function() {
	$("a").css("cursor","pointer");
		$(".te").click(function() {
			$(this).parent().next().toggle(500);
		});
		
	});
</script>
	</body>
</html>

