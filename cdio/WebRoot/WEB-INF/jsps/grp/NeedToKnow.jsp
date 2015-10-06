<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
 <title>NeedToKnow</title>
		<link href="<c:url value="/css/common/bootstrap.css"/>" rel="stylesheet" type="text/css"/>
		<link href="<c:url value="/css/common/bootstrap-responsive.css"/>"rel="stylesheet" type="text/css"/>
        <link rel="stylesheet" type="text/css" href="<c:url value="/css/grp/demo.css"/>" />
        <link rel="stylesheet" type="text/css" href="<c:url value="/css/grp/style.css"/>" />
       <script src="<c:url value="/js/common/jquery-1.8.3.min.js"/>"></script>
		<script src="<c:url value="/js/grp/bootstrap.js"/>"></script> 
        

        <style>
		.te2{
			border:1px solid #ddddff;
			    height: 300px;
 			    overflow: auto;
  				position: relative;
			}
		.te3{
			background:none;
			}
		</style>
</head>

<body>
 <div class="container">
			<header class="clearfix">
				<h1> <span>我的社群</span></h1>

				<p>移动你的鼠标，寓教于乐，从这里开始！</p>
			</header>
            <div class="row-fluid" id="te">
    <div class="navbar span8 offset2 te3">
    <div class="navbar-inner" style="background:none; background-color:#2ECC71;">
    <a class="brand"  style="text-shadow:none; color:white; font-weight:bold;">社群小组须知</a>
    <ul class="nav">
    <li class="active"><a  style="text-shadow:none;">建组须知</a></li>
    <li><a style="text-shadow:none;">发表话题须知</a></li>
    <li><a  style="text-shadow:none;">使用须知</a></li>
    </ul>
    </div>
    </div>
            </div>
            <div class="row-fluid">
            <div class="span8 offset2 te2" data-spy="scroll" data-target="#te" data-offset="0" >
            <h4 id="Group">关于小组</h4>
            <p>本社群是学习讨论社群，每个社群是由不同的科目所组成。而我们的小组划分是在每个社群的模块下进行的，例如：数学社群（我们将其设为一个标签）。我们将数学划分为一个社群模块，几何，函数，代数等等每个知识点可当做一个小组，希望建组的时候能以每个知识点命名，方便社群学习定位自己想看的知识点。小组的简介可以用来进一步描述该组的具体信息，比如年级，地区等等。当你建完组即可发表话题，具体内容可通过体验得知。
            <br></p>
            <h4 id="Topic">关于话题</h4>
            <p>
                              我们的话题是用来讨论学习上的问题，通过话题的讨论进一步巩固对知识点的认识，同时得到更多人的经验分享，从中获得有效学习。话题的发表需要你加入小组或者你是当前小组的创建者。回复话题不需要加入小组，你可对其他人的话题进行自己的回复。参与话题讨论。<br>
            
            </p>
            <h4 id="Use">用户须知</h4>
           	本社群仅用来进行学习上的交流讨论，禁止一切与学习无关联的话题。希望你的参与共同创建良好学习氛围。
本社群设有管理员权限，可对小组和话题进行审核、删除等，一旦出现偏离以学习为目的的方向，管理员有进行删除权限，特此声明。<br>

            </div>
            </div>
           <div class="row-fluid" style="margin-top:20px;">
           <div class="span3 offset9">
           <a class="btn btn-success" id="backs">back</a>
           </div>
           </div>
 </div>
          <script type="text/javascript">
		$(function(){
		$("#backs").click(function(){
		window.history.back(-1);
		})
		})
		</script>          
</body>
</html>