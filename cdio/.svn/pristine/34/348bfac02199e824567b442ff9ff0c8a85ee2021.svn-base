<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/jsps/common/taglibs.jsp"%>

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>知识加值在线系统</title>
<meta name="viewport" content="width=device-width,initial-scale=1">
<link type="text/css" rel="stylesheet" href="css/common/screen.css" />
<link href="image/main/favicon.ico" rel="shortcut icon" />
<!--[if gt IE 8]><!-->
<link rel="stylesheet" type="text/css" href="<c:url value="/css/common/styles.css"></c:url>" />
<!--<![endif]-->
<link rel="stylesheet" type="text/css" href="<c:url value="/css/common/bootstrap.css"></c:url>" />
<!-- <script type="text/javascript">
	var list = ["师生管理员","交易管理员","资源管理员"];
</script>  -->
 <script type="text/javascript">
	var list1 = "<%=session.getAttribute("roleList")%>";
	/* alert(list1); */
	var list = list1.split(",");

</script>

<style type="text/css">
#pics{
	border-radius: 7px; /* CSS3 Property */
	-moz-border-radius: 7px;  /* Firefox */
	-webkit-border-radius: 7px; /* Chrome/Safari */
	-khtml-border-radius: 7px; /* Linux browsers */
}


</style>
</head>
<body onload="adapt(list)">
	<div class="null">
		<div id="firstmenu">
			<div class="container">
				<div id="minilogo"></div>
				<div class="Fmenu">
				<div class="logo"><a href="#" id="logoimg"></a></div>
					<ul>
						<!-- 教师系统 -->
						<li class="teasys"><a href="#secteasysul" style="padding:0;"><a
								target="iframepage" href='<s:url value="forMainAction"/>'>教师系统</a>
						</a></li>
						<!-- 学员管理 -->
						<li class="stusys  active"><a href="#secstusysul"
							style="padding:0;"><a href='<s:url namespace="/stu" action="toMatInfo_format"/>' target="iframepage">学员管理</a> </a>
						</li>
						<!-- 知识库 -->
						<li class="teastu kno"><a href="#secknoul" style="padding:0;"><a
								href='<s:url action="gotoSearchHome" namespace="/search"/>'
								target="iframepage">知识库</a> </a></li>
						<!-- 学习社群 -->
						<li class="teastu"><a href="#secgruul" style="padding:0;"><a
								href='<s:url action="mySocily" namespace="/group"></s:url>'
								target="iframepage">学习社群</a> </a></li>
							<!-- 付费 -->
						<li class="teastu"><a href="#secpayul" style="padding:0;"><a
								href='<s:url  action="moneyAction" namespace="/pym" method="rechargeEp"></s:url>'
								target="iframepage">金流交易</a> </a></li>
							<!--在线辅导-->
						<li class="teastu"><a
							href='<s:url value="SelectedCourseAction"/>' target="iframepage">在线辅导</a>
						</li>
						<!-- 教师评测 -->
						<li class="teatst"><a href="#secteatstul" style="padding:0;">
								<a
								href='<s:url namespace="/test/doubt" action="listCoach_doubt">
							</s:url>'
								target="iframepage">评测</a> </a></li>
						<!-- 学员评测 -->
						<li class="stutst"><a href="#secstutstul" style="padding:0;">
								<a
								href='<s:url namespace="/test/stuTest" action="choose_test"></s:url>'
								target="iframepage">在线评测</a> </a></li>
							<!-- 师生匹配 -->
						<li class="stumach"><a href="#secstumachul"
							style="padding:0;"> <a href='<s:url namespace="/match" action="matchAction"></s:url>' 
							target="iframepage">师生匹配</a>
						</a></li>
						<!-- 师生管理 -->
						<li class="Admin teaAdmin"><a href="#secteastuul" style="padding:0;">
								<a href='<s:url value="coainfoAction.action"/>' target="iframepage">师生管理</a> </a></li>
						<!-- 交易管理 -->
						<li class="Admin traAdmin"><a href="#sectramagul" style="padding:0;">
								<a href='<s:url action="prooflist" namespace="/pym"></s:url>' target="iframepage">交易管理</a> </a></li>
						<!-- 资源管理-->
						<li class="Admin resAdmin"><a href="#secresmagul" style="padding:0;">
								<a href='<s:url action="loadResDangerous" namespace="/"/>' target="iframepage">资源管理</a> </a></li>
						<!-- 题库管理-->
						<li class="Admin qusAdmin"><a href="#secqusmagul" style="padding:0;">
								<a
								href='<s:url namespace="/test/queBank" action="list_question"></s:url>'
								target="iframepage">题库管理</a> </a></li>
						<!-- 社群管理-->
						<li class="Admin gruAdmin"><a href="#secgrumagul" style="padding:0;"><a
								href='<s:url action="goIntoBackStage" namespace="/groupAdm"></s:url>' target="iframepage">社群管理</a> </a></li>
						<!-- 评价管理-->
						<li class="Admin cmtAdmin"><a href="#seccmtmagul" style="padding:0;">
								<a href='<s:url action="loadPage_judgeQuestion"></s:url>'
								target="iframepage">评价管理</a> </a></li>
						<!-- 系统管理-->
						<li class="Admin sysAdmin"><a href="#secsysmagul" style="padding:0;">
								<a href='<s:url action='load' namespace='/user'></s:url>'
								target="iframepage"> 系统管理</a> </a></li>
					</ul>

				</div>

				<div id="fl">
					<div id="h-User">
						<div id="h-Username">
							<a id="UserNamelink"><s:property value="#user.userName" /> </a>
						</div>
						<div id="h-Message">
							<a><i class="icon-envelope icon-white"></i> </a>
							<ul class="msg_menu">
								<li><a href='to_pm' target="iframepage">我的私信</a>
								</li>
								<li><a  target="iframepage"
								href='<s:url action="loadTeacherJudgeForStudentByStuNo_queryJudge" ></s:url>'>
								我的评价</a>
								</li>
								<li><a href='<s:url value="SelectedCourseAction"/>' target="iframepage">
								课程提醒</a>
								</li>
							</ul>

						</div>
						<div id="h-Setting">
							<a><i class="icon-asterisk icon-white"></i> </a>
							<ul class="set_menu">
								<li><a  target="iframepage"
				href='<s:url namespace="/stu" action="toStudent_student"/>'>个人信息设置</a>
								</li>
								<li><a
									href='<s:url namespace="/complaint"  action="input"/>'
									target="iframepage">我要投诉</a>
								</li>
								<li><a 
									href='<s:url value="welcomeAction"/>'
									>退出</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="perInfo">
			<div id="perImg">
			    <img  id="pics" style="width:80px;height:80px" src="<s:url action="getUserHeadPicAction"/>"/>

			</div>
			<div id="UserInfo">
				<div id="UserName">
					<a id="UserNamelink"><strong><s:property
								value="#user.userName" /> </strong> </a>
				</div>
				<div id="UserMoney">
					<span >可用学币: </span><strong><span id="User_ep"><s:property
							value="#user.ep" /> </span></strong> 
				</div>
			</div>
		</div>

	</div>
	<div role="navigation" id="nav">
		<ul id="secteasysul">
			<!--/教师系统-->
			<li class="teasec "><a target="iframepage"
				href='<s:url value="LoadAction"/>'>个人信息管理</a>
			</li>
			<li class="teasec"><a target="iframepage"
				href='<s:url value="addcourseAction.action"/>'>课程管理</a>
			</li>
			<li class="teasec"><a  target="iframepage"
				href='<s:url action="searchBoughtCourse"/>'>学习履历管理</a>
			</li>
			<li class="teasec"><a  target="iframepage"
				href='<s:url value="loadStudentJudgeForTeacherByTeaName_queryJudge"/>'>查看评价</a>
			</li>
			<li class="teasec"><a target="iframepage"
				href='<s:url value="goStudentScoreChart_chart"/>'  >查看学生成绩报表</a>
			</li>
		</ul>

		<ul id="secstusysul">
			<!--/学员管理-->
			<li class="stusec "><a target="iframepage"
				href='<s:url namespace="/stu" action="toMatInfo_format"/>'>匹配信息</a>
			</li>
			<li class="stusec "><a target="iframepage"
				href='<s:url namespace="/stu" action="toStudent_student"/>'>资料修改</a>
			</li>
			<li class="stusec"><a target="iframepage"
				href='<s:url namespace="/stu" action="toCourseList_courselist?index=1&pageSize=5"/>'>课程列表</a>
			</li>
			<li class="stusec"><a target="iframepage"
				href='<s:url namespace="/stu" action="query_judgestu?page=1&pageSize=3"/>'>学习履历</a>
			</li>
			<li class="stusec"><a target="iframepage"
				href='<s:url namespace="/stu" action="input_experience?page=1&pageSize=10"/>'>心得体会</a>
			</li>
			<li class="stusec"><a target="iframepage"
				href='<s:url namespace="/stu" action="toTopiclib_topiclib?page.index=1&page.pageSize=3"/>'>精题收藏夹</a>
			</li>
			<li class="stusec"><a target="iframepage"
				href='<s:url action="loadTeacherJudgeForStudentByStuNo_queryJudge" ></s:url>'>查看老师评价</a></li>
			<li class="stusec"><a  target="iframepage"
				href='<s:url action="goMyScoreChart_chart" ></s:url>'>查看成绩报表</a>
			</li>
			<li class="stusec"><a  target="iframepage"
				href='<s:url action="loadJudgeTeacherHistoryPage_student" ></s:url>'>评价管理</a>
			</li>
		</ul>

		<ul id="secknoul">
			<li class="seckno"><a
				href='<s:url action="forUpload_res" namespace="/file"/>'
				target="iframepage">文档上传</a>
			</li>
			<li class="seckno"><a
				href='<s:url action="loadUpload" namespace="/"/>'
				target="iframepage">资料管理</a>
			</li>
			<li class="seckno knosearch"><a
				href='<s:url action="gotoSearchHome" namespace="/search"/>'
				target="iframepage">搜索</a></li>
		</ul>

		<ul id="secgruul">
			<li class="secgru"><a target="iframepage"
				href='<s:url action="mySocily" namespace="/group"></s:url>'>我的社群</a>
			</li>
			<li class="secgru"><a target="iframepage"
				href="<s:url action="hotGroup" namespace="/group"></s:url>">活跃社群</a>
			</li>
			<li class="secgru"><a target="iframepage"
				href="<s:url action="talkTopic" 

namespace="/topic"></s:url>">话题讨论</a>
			</li>
		</ul>

		<ul id="secpayul">
			<li class="secpay"><a target="iframepage"
				href='<s:url action="moneyAction" namespace="/pym" method="rechargeEp"></s:url>'>充值</a>
			</li>
			<li class="secpay"><a target="iframepage"
				href='<s:url action="shopcar" namespace="/pym"></s:url>'>购物车</a>
			</li>
			<li class="secpay"><a target="iframepage"
				href='<s:url action="queryAction" namespace="/pym"></s:url>'>交易查询</a>
			</li>
			<li class="secpay"><a target="iframepage"
				href='<s:url action="contributionAction" namespace="/pym" method="applyStatue"></s:url>'>资助

					申请</a></li>
			<li class="secpay"><a target="iframepage"
				href='<s:url action="dynamicMoneyFlow" namespace="/pym"></s:url>'>善款流向</a>
			</li>
			<li class="secpay"><a target="iframepage"
				href='<s:url action="donateLove" namespace="/pym"></s:url>'>捐赠</a>
			</li>
			<li class="secpay"><a target="iframepage"
				href='<s:url action="dynamicLove" namespace="/pym"></s:url>'>爱心动态</a>
			</li>
		</ul>


		<ul id="secteatstul">
			<li class="secteatst"><a class="framemenu-inner"
				href="<s:url namespace="/test/doubt" action="listCoach_doubt">
							</s:url>"
				target="iframepage">学员疑问</a>
			</li>
			<li class="secteatst"><a class="framemenu-inner"
				href='<s:url namespace="/test/coachTest" action="forSetup_test">
							</s:url>'
				target="iframepage">计划测试</a>
			</li>
			<li class="secteatst"><a class="framemenu-inner"
				href='<s:url namespace="/test/coachTest" action="loadAll_test">
							</s:url>'
				target="iframepage">查看测试情况</a>
			</li>
		</ul>

		<ul id="secstutstul">
			<li class="secstutst"><a class="framemenu-inner"
				href="<s:url namespace="/test/stuTest" action="choose_test">
							</s:url>"
				target="iframepage">我要测试</a>
			</li>
			<li class="secstutst"><a class="framemenu-inner"
				href="<s:url namespace="/test/stuTest" action="loadAll_errQue"></s:url>"
				target="iframepage">我的错题本</a>
			</li>
			<li class="secstutst"><a class="framemenu-inner"
				href="<s:url namespace="/test/doubt" action="listStu_doubt"></s:url>"
				target="iframepage">我的疑问</a></li>
			<li class="secstutst"><a class="framemenu-inner"
				href="<s:url namespace="/test/stuTest" action="loadAll_test"></s:url>"
				target="iframepage">我的测验</a>
			</li>
		</ul>

		<ul id="secstumachul">
			<li class="secstumach"><a target="iframepage"
				href='<s:url action="mainSearch" namespace="/search"></s:url>'>搜索</a>
				</li>
		</ul>

		<ul id="secteastuul">
			<!--/师生管理-->
			<li class="adminsec"><a target="iframepage" 
			href='<s:url value="coaVerifyListOneAction.action"/>' class="framemenu-inner">教师资格审核</a></li>
			<!--/管理员-->
			<li class="adminsec"><a target="iframepage" 
			href="<s:url value="coainfoAction.action"/>" class="framemenu-inner">查看讲师信息</a></li>
			<!--/管理员-->
			<li class="adminsec"><a  target="iframepage" href='<s:url namespace="/stu" action="query_stuManage.action?page=1&pageSize=10"/>'>学员管理</a>
			</li>
			<!--/管理员-->
			<li class="adminsec"><a target="iframepage"  href='<s:url namespace="/stu" action="query_operlog.action?page=1&pageSize=10"/>'>操作记录</a>
			</li>
			<!--/管理员-->
		</ul>

		<ul id="sectramagul">
			<li class="sectramag"><a target="iframepage"
				href='<s:url action="prooflist" namespace="/pym"></s:url>'>验证列表</a></li>
			<li class="sectramag"><a target="iframepage"
				href='<s:url action="proofhistory" namespace="/pym"></s:url>'>验证历史</a></li>
		</ul>

		<ul id="secresmagul">
			<li class="secresmag"><a
				href='<s:url action="loadResDangerous" namespace="/"/>'
					target="iframepage">查看危险资料</a>
			<li class="secresmag"><a
				href='<s:url action="resCatList" namespace="/"/>'
					target="iframepage">查看分类资料</a></li>

			<li class="secresmag"><a href='<s:url action="selectedCourseForAdmin" />'
					target="iframepage">辅导管理</a>
			</li>
		</ul>

		<ul id="secqusmagul">
			<li class="secqusmag"><a
				href='<s:url namespace="/test/queBank" action="input_question"></s:url>'
				target="iframepage">录入题目</a>
			</li>
			<li class="secqusmag"><a
				href='<s:url namespace="/test/queBank" action="list_question"></s:url>'
				target="iframepage">审核题目</a>
			</li>
			<li class="secqusmag"><a
				href='<s:url namespace="/test/errIdea" action="listErr_errIdea"></s:url>'
				target="iframepage">纠错题目</a>
			</li>
		</ul>

		<ul id="secgrumagul">
			<li class="secgrumag"><a target="iframepage"  href='<s:url action="goIntoBackStage" namespace="/groupAdm"></s:url>'>社群审核</a>
			</li>
			<li class="secgrumag"><a target="iframepage"  href='<c:url value="/groupAdm/manageGroup"/>'>社群关闭</a>
			</li>
		</ul>

		<ul id="seccmtmagul">
			<li class="seccmtmag"><a target="iframepage"
				href='<s:url action="loadStudentJudgeHistoryPage_adminQueryJudge"></s:url>'>查看学生评价历史

			</a></li>
			<li class="seccmtmag"><a target="iframepage"
				href='<s:url action="loadTeacherJudgeHistoryPage_adminQueryJudge"></s:url>'>查看教师评价历史

			</a></li>
			<li class="seccmtmag"><a  target="iframepage"
				href='<s:url action="loadTeacherChart_adminQueryJudge"></s:url>'>查看教师动态评分</a>
			</li>
			<li class="seccmtmag"><a target="iframepage"
				href='<s:url action="loadPage_judgeQuestion"></s:url>'>教师评价内容管理</a>
			</li>
		</ul>

		<ul id="secsysmagul">
			<li class="secsysmag"><a target="iframepage"
				href="<s:url action='load' namespace='/user'></s:url>">维护用户基本信息</a>
			</li>
			<li class="secsysmag"><a target="iframepage"
				href='<s:url action="load" namespace="/parameter"></s:url>'>参数主文件信息</a>
			</li>
			<li class="secsysmag"><a target="iframepage"
				href='<s:url action="load" namespace="/permission"></s:url>'>维护权限功能点</a>
			</li>
			<li class="secsysmag"><a target="iframepage"
				href='<s:url action="rolePerm" namespace="/rolePerm"></s:url>'>维护角色权限关系</a>
			</li>
			<li class="secsysmag"><a target="iframepage"
				href='<s:url action="userRole" namespace="/userRole"></s:url>'>维护账号角色关系</a>
			</li>
			<li class="secsysmag"><a target="iframepage"
				href='<s:url action="load" namespace="/complaint"></s:url>'>投诉信息管理</a>
			</li>
			<li class="secsysmag"><a target="iframepage"
				href='<s:url action="load" namespace="/visitor"></s:url>'>访客信息管理</a>
			</li>
			</li>
			<li class="secsysmag"><a target="iframepage"
				href='<s:url action="load" namespace="/activity"></s:url>'>维护活动日志</a>
			</li>
		</ul>

	</div>

	<div role="main" class="main" id="im" >
		<a href="#nav" id="toggle">Menu</a>
		<iframe src=''
			id="iframepage" name="iframepage" frameBorder=0 scrolling=no
			width="100%" style="min-height:596px;"
			onLoad="javascript:iframeAutoFit(this);">
		</iframe>
	</div>
	<div class="frfooter" >
		<span >
			VOSMaP © Copyright @ CDIO 2010 Faculty of Software ,Fujian Normal University
		</span>
	</div>
<script type="text/javascript"
	src="<c:url value="/js/common/jquery-1.8.3.min.js"></c:url>"></script>
<script type="text/javascript"
	src="<c:url value="/js/common/responsive-nav.js"></c:url>"></script>
<!--[if gt IE 8]><!-->
<script type="text/javascript"
	src="<c:url value="/js/common/responsive-firstmenu.js"></c:url>"></script>
<!--<![endif]-->
<script type="text/javascript"
	src="<c:url value="/js/common/bootstrap.js"></c:url>"></script>
	<script type="text/javascript"
	src="<c:url value="/js/common/frame.js"></c:url>">	</script>
</body>
</html>
