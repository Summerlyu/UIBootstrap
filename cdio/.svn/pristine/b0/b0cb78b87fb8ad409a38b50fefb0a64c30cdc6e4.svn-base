<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html>
  <head>
    <base href="<%=basePath%>"> 
    <title>充值</title>
    
	<meta name="viewport" content="width=device-width">
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<link type="text/css" rel="stylesheet" href="<c:url value="/css/common/bootstrap.css"/>">
	<link type="text/css" rel="stylesheet" href="<c:url value="/css/pym/shopping.css" />">
	<link type="text/css" rel="stylesheet" href="<c:url value="/css/common/bootstrap-responsive.css"/>">
  </head>
  <body>
<div id="pym_overlayBG"></div>
      <div class="container">
           <legend>
                <span class="pym_shoHead">购物车</span>
           </legend>
          <div class="help_step_box fa" >
              <div id="pym_shoOne" class="help_step_item help_step_set">
                <div class="help_step_num">1</div>
                查看购物车
                <div class="help_step_right"></div>
              </div>

              <div id="pym_shoTwo" class="help_step_item">
                <div class="help_step_left"></div>
                <div class="help_step_num">2</div>
                确认订单信息
                <div class="help_step_right"></div>
              </div>

              <div id="pym_shoThree" class="help_step_item ">
                <div class="help_step_left"></div>
                <div class="help_step_num">3</div>
                立即购买
              </div>
          </div>
          <br/>
             
                  <div class="pym_shoAlign">
                          <table class="table table-condensed">
                              <thead>
                                  <tr>
                                    <th class="pym_shoBgcolor" style="text-align:center" colspan="2">课程信息</th>            
                                    <th class="pym_shoBgcolor" style="text-align:center">版本</th>
                                    <th class="pym_shoBgcolor" style="text-align:center">价格</th>
                                    <th class="pym_shoBgcolor" style="text-align:center">教学状态</th>
                                    <th class="pym_shoBgcolor" style="text-align:center">操作</th>
                                  </tr>
                               </thead>
                                  <tbody>
                                  <s:iterator value="scs">
                                     <tr>
                                        <td  style="text-align:left;"colspan="5">
								                                        课程编号<span style="font-weight:bold;">:</span><span id="pym_shoCouresid" style="color:#3366FF  ; font-family:NSimSun;padding-left:1%;padding-right:1%;"><s:property value="id.course.courseID"/></span> 
								                                        教师名<span style="font-weight:bold;">:</span><span style="color:#3366FF  ;  font-family:NSimSun;padding-left:1%;"><s:property value="id.course.user.userName"/></span>
                                        </td>
                                     </tr>                                          
                                     <tr style="background:rgb(241, 247, 228);">
                                        <td  style="text-align:left;width:10%" >
                                        <div class="img_border" >
                                        <img  style="width:100px;height:100px;" src="<s:url action="getUserPic" namespace="/pym"/>?user.id=<s:property value="id.course.user.id"/>"/>
                                        </div>
                                        </td>
                                        <td  style="text-align:left;vertical-align:middle; line-height: 25px;">
                                        <div>
                                        <span style="color:#3366FF ;font-family:NSimSun; ">章节:&nbsp<s:property value="id.course.courseType.chapter.name"/></span>
                                        </div>
                                        <div>
                                        <span style="color:#999999 ; font-family:NSimSun; ">学科:&nbsp<s:property value="id.course.courseType.subject.name"/>年级:&nbsp<s:property value="id.course.courseType.grade.name"/></span>                                       
                                        </div>
                                        <div>
                                        <span style="color:#999999 ; font-family:NSimSun; ">开课时间:&nbsp<s:property value="id.course.classTime"/></span>                                       
                                        </div>
                                        <div>
                                        <span style="color:#999999 ; font-family:NSimSun; ">上课时间:&nbsp<s:property value="id.course.schoolHour"/>h</span>
                                        </div>                                                
                                        </td>
                                        <td  style="text-align:center;vertical-align:middle;"><s:property value="id.course.courseType.version.name"/></td>
                                        <td  style="text-align:center;vertical-align:middle;"><span style="color:#FF9900;font-weight:bold;"><s:property value="id.course.ep"/>EP</span></td>
                                        <td  style="text-align:center;vertical-align:middle;"><s:property value="id.course.state"/></td>
                                        <td  style="text-align:center;vertical-align:middle;"><a href="<%=path%>/pym/deleteshopcourse?courseID=<s:property value="id.course.courseID"/>">删除</a></td>
                                     </tr>
                                     </s:iterator>
                                  </tbody>                                
                          </table>
                          <div id="pym_shoNull" style="display:none;text-align:center;">
                              <h4>
                              <img id="pym_payImage" src="image/pym/pym_recTrue.gif">
                              <span style="padding-left:3%;">购物车里还没要课程哦，快去选喜欢的课程吧！</span>
                              </h4>
                          </div>                            
                          
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <div class="pym_buttonbg">
                          
                              <div class="form-inline">
                                  <span class="pym_count">当前帐号余额:</span>
                                  <span id="pym_shopbalance" class="pym_EP"><s:property value="userEp"/></span><span class="pym_EP">EP</span>　
                                  <span class="pym_count">课程总价:</span>
                                  <span id="pym_total" class="pym_EP"><s:property value="courseEp"/></span><span class="pym_EP">EP</span>　　　
                                  <button style="margin-right:2%;"  type="button" class="btn btn-success" onClick="javascript:void(0);" id="pym_shoBtn">确认购买信息</button>                 
                              </div> 
                              
                                 
                          </div>
                      </div>

                  <div class="pym_shoBox" style="display:none;margin-top:10%;">
                       <h2>确认购买信息<a class="close">关闭</a></h2> 
                    <div class="pym_shoAlign">      
                          <table class="table table-striped">                            
                              <thead>
                                  <tr>
                                    <th class="pym_shoBgcolor" style="text-align:center">课程号</th>
                                    <th class="pym_shoBgcolor" style="text-align:center">价格</th>
                                  </tr>
                               </thead>
                              <tbody>
                                <s:iterator value="scs">
                                 <tr>
                                    <td  style="text-align:center;"><s:property value="id.course.courseID"/></td>
                                    <td  style="text-align:center;"><s:property value="id.course.ep"/>EP</td>
                                 </tr>
                                </s:iterator>
                              </tbody>
                               
                          </table>    
                       <s:form action="buycourse" namespace="/pym">                
                          
                          <div class="pym_buttonbg">
                              <span class="pym_count">课程总价:</span>
                              <span  class="pym_EP"><s:property value="courseEp"/>EP</span>　　　
                              <input onclick="pym_upshoEp()" type="submit" style="margin-right:2%;" class="btn btn-success" value="立即购买"></input>                 
                          </div>      
                       </s:form>                     
                    </div>

             </div>
      </div>  

    <br/><br/><br/>
    <script type="text/javascript" src="js/common/jquery-1.8.3.min.js"></script>
	<script type="text/javascript">
       
       function doQuery(pageno,type)
       {
           //alert(pageno);
           if(pageno<1 || pageno><s:property value="page.totalRecord"/>)
           {
              alert("页号超出范围，有效范围：[1-<s:property value="page.totalRecord"/>]!");
              $('pageNo').select();
              return;
           }
            var f=document.forms[0];
            f.action=f.action+"?page.index="+(pageno);
            f.submit();
         }
         
    </script>
 
	<script type="text/javascript">
	$(function(){
	    
	      var val1= $("#pym_shopbalance").text();
	      var val2= $("#pym_total").text();      
	      var val=val1-val2;
	      var show_null=$('#pym_shoCouresid');
	
	      if(show_null.length>0)
	      { 
	        $("#pym_shoNull").css("display","none"); 
	        $("#pym_shoBtn").attr("disabled",false);
	      } 
	      else if(show_null.length==0)
	      {
	        $("#pym_shoBtn").attr("disabled",true);
	        $("#pym_shoNull").css("display","block"); 
	        
	      }
	      $("#pym_shoBtn").click(function(){   
	      if(val<0)
	      {
	        alert("您当前账号余额不足,请充值");
	      }
	      else{   
	       $("#pym_overlayBG").css({
	          display:"block",height:$(document).height()
	       });
	       $(".pym_shoBox").css("display","block"); 
	       $("#pym_shoOne").removeClass("help_step_item help_step_set");
	       $("#pym_shoOne").addClass("help_step_item");      
	       $("#pym_shoTwo").removeClass("help_step_item");
	       $("#pym_shoTwo").addClass("help_step_item help_step_set");
	       $("#pym_overlayBG").css({
	            display:"block",height:$(document).height()
	        });
	        }
	    });
	    
	    $(".close").click(function(){
	        $("#pym_overlayBG").css("display","none");
	        $(".pym_shoBox").css("display","none");    
	        $("#pym_shoTwo").removeClass("help_step_item help_step_set");
	        $("#pym_shoTwo").addClass("help_step_item");      
	        $("#pym_shoOne").removeClass("help_step_item");
	        $("#pym_shoOne").addClass("help_step_item help_step_set");
	    });  
	})
	</script>
	 	
	<script>
	function pym_upshoEp(){
	 var ep=$("#pym_shopbalance").text(); 
	 var subep=$("#pym_total").text();
	 var user_ep=ep*1-subep*1;
	 parent.document.getElementById('User_ep').innerHTML=user_ep;
	
	}
	</script>
             
  </body>
</html>
