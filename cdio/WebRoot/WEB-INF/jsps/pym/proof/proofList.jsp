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
	<link type="text/css" rel="stylesheet" href="<c:url value="/css/pym/proofList.css" />">
	<link type="text/css" rel="stylesheet" href="<c:url value="/css/common/bootstrap-responsive.css"/>">
</head>

<body>




      <div class="container">
           <legend>
                <span class="pym_proHead">验证列表</span>
           </legend>

     <div class="help_step_box fa" >

        <div class="help_step_item help_step_set">
          <div class="help_step_num">1</div>
          查看申请列表
          <div class="help_step_right"></div>
        </div>

        <div class="help_step_item">
          <div class="help_step_left"></div>
          <div class="help_step_num">2</div>
          审核申请
          <div class="help_step_right"></div>
        </div>

        <div class="help_step_item">
          <div class="help_step_left"></div>
          <div class="help_step_num">3</div>
          审核结果
        </div>

      </div>
          <br/><br/>       
                <div class="pym_proPage">                        
                        <form>                
                            <div class="row-fluid">
                                <div class="span12">
                                    <table class="table table-striped">
                                        <thead>
                                            <tr>
                                              <th class="pym_proBgcolor" style="text-align:center">申请人ID</th>
                                              <th class="pym_proBgcolor" style="text-align:center">用户名</th>
                                              <th class="pym_proBgcolor" style="text-align:center">申请时间</th>
                                              <th class="pym_proBgcolor" style="text-align:center">真实姓名</th>
                                              <th class="pym_proBgcolor" style="text-align:center">操作</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        <s:iterator value="page.results">
                                           <tr>
                                              <td  style="text-align:center;"><s:property value="user.id" /></td>
                                              <td  style="text-align:center;"><s:property value="user.userName" /></td>
                                              <td  style="text-align:center;"><s:property value="time" /></td>
                                              <td  style="text-align:center;"><s:property value="trueName" /></td>
                                              <td  style="text-align:center;"><a onclick="proof(${applyID});">进行验证</a></td>
                                           </tr>
                                        </s:iterator>        
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                              <td class="pym_proBgcolor"></td>
                                              <td class="pym_proBgcolor"></td>
                                              <td class="pym_proBgcolor"></td>
                                              <td class="pym_proBgcolor"></td>
                                              <td class="pym_proBgcolor"></td>
                                            </tr>
                                        </tfoot>
                                    </table>   
                                </div>
                            </div>                                                          
                        </form>
                        <div class="row-fluid">
                           <div class="span2"></div>
                            <div class="span8">                                   
                                  <div class="pagination">
                                      <div class="row-fluid">
                                          <div class="span7">
                                            <ul>                                                                                              
										       <li>
										           <s:if test="page.hasPreviousPage">
														<span onclick="doQuery(<s:property value="page.index-1"/>)"><<</span>
												   </s:if>
											   </li>
											   <s:iterator begin="%{pagebegin}" end="%{pageend}" status="pageNo">
											   <li <s:if test="page.index==(#pageNo.index+pagebegin)">class="active"</s:if>>
													<span onclick="doQuery(<s:property value="#pageNo.index+pagebegin"/>)">
													<s:property value="#pageNo.index+pagebegin" />
													</span>
										   	   </li>
												</s:iterator>
												<li>
												    <s:if test="page.hasNextPage">
														<span onclick="doQuery(<s:property value="page.index+1"/>)">>></span>
													</s:if>
												</li>                                                 
                                            </ul>
                                              <span class="page-skip">一共<s:property value="page.totalPage" />页</span>
                                          </div>
                                              <div class="input-append span1">
                                                <input id="size" class="span12" type="text"></input>
                                                <button onclick="javascript:doQuery(document.getElementById('size').value)" class="btn" type="button">Go</button>
                                              </div>
                                      </div>
                                  </div>
                            </div>
                            <div class="span2"></div>
                        </div>    
                </div>           
        <hr>
      </div>
      <br/><br/><br/>
    <script type="text/javascript" src="js/common/jquery-1.8.3.min.js"></script>
	<script type="text/javascript">
	       
	       function proof(id){
	         location.href='<s:url action="proof" namespace="/pym"/>?apply.applyID='+id;
	       }
	       function doQuery(index){
	       	 location.href='<s:url action="prooflist" namespace="/pym"/>?page.index='+index;
	       }
	</script>
</body>
</html>
