$(function(){
			
			$("tr:odd").addClass("odd");  /* 奇数行添加样式*/
			$("tr:even").addClass("even"); /* 偶数行添加样式*/
			$("#resCatSchool").change(function(){
				addCatItem($(this).find("option:selected").text());
			});
			$("tbody tr").click(function(){
				   $("#resId").val($(this).find('td').eq(1).text().trim());
				  
					var params={
						"resId":$(this).find('td').eq(1).text().trim()
					};
					$.ajax({
						type:"post",
						url:"resUpload/get_resInfor.do",
						data:params,
						dataType:"xml",
						complete:function(request){
							var xmlMsg=request.responseXML;
        					$(xmlMsg).find('detail').each(function(){
        					
        					   var resName = $(this).children("resName").text(); 
        					   $("#fileName").val(resName);
        					   var resDescrib = $(this).children("resDecription").text();
        					   $("#fileDes").text(resDescrib);
        					   var resCatSchool=$(this).children("catSchool").text();
        					   var resCatGrade= $(this).children("catGrade").text();
        					   var resCatSub=$(this).children("catSub").text();
    						   $("#resCatSchool option").each(function(){
	    						   	 if($(this).text()==resCatSchool){
	    						   	 	$(this).attr("selected",true);
	    						   	 }
    						   });
    						   addCatItem(resCatSchool);
    						    $("#resCatGrade option").each(function(){
	    						   	 if($(this).text()==resCatGrade){
	    						   	 	$(this).attr("selected",true);
	    						   	 }
    						   });
    						    $("#resCatSub option").each(function(){
	    						   	 if($(this).text()==resCatSub){
	    						   	 	$(this).attr("selected",true);
	    						   	 }
    						   });
        					   var resAuth=$(this).children("resAuth").text();
        					   $("input[name='auth'][value='"+resAuth+"']").iCheck('check'); 
        					   var tags = new Array();
       						   tags= $(this).children("resTag").text().split("|");
       						   $("#tagsList").empty();
   							   $.each(tags, function (index, tag) { 
	   							   		 var domTag=$("<span class='label label-info resTag' style='margin-right:10px'>"+tag+"<a style='text-decoration:none;cursor:pointer' ><i class='icon-remove' style='display:none'></i></a></span>");   							   
	   							   	     $("#tagsList").prepend(domTag);
   							   	   
   							   	});
        					    $("#fileModifyForm").show(1000);
        					 });
						}
					});
					
			});
			$("#editTag").click(function () {
               	 $(".icon-remove").show();

             });
			$("#addTag").click(function () {
				 var domTag=$("<span class='label label-info resNewTag' style='margin-right:10px'>"+ $("#prependedInput").val()+"<a style='text-decoration:none;cursor:pointer' ><i class='icon-remove' style='display:none'></i></a></span>");   							   
	   			 $("#tagsList").prepend(domTag);
	   			 $("#prependedInput").val("");
               	

             });		
			$("#cancelBtn").click(function(){
					$("#fileModifyForm").hide(1000);	
			});
			$("#modifyBtn").click(function(){
					var definedTags="";
			        $(".resTag").each(function(){
	    			     definedTags=definedTags+$(this).text()+"|";
    				});
    				 $(".resNewTag").each(function(){
	    			     definedTags=definedTags+$(this).text()+"|";
    				});
    				
					var params={
					  "fileId":$("#resId").val(),
					  "fileDes":$("#fileDes").val(),
					  "auth":$("input[name='auth']:checked").val(),
					  "fileName":$("#fileName").val(),
					  "definedTags":definedTags.substring(0,definedTags.length-1),
					  "fileCat":$("#resCatSchool").find("option:selected").text()+"|"+$("#resCatGrade").find("option:selected").text()+"|"+$("#resCatSub").find("option:selected").text()
					};
					$.ajax({
						type:"POST",
						async:false,
						url:"file/update_resInfor.do",
						data:params,
						dataType:"text",
						success:function(data){
							location.href="file/loadUpload.do";
						}
					});
					
			});
			function addCatItem(selectText){
				if(selectText=="小学"){
					$("#resCatGrade").empty();
				    $("#resCatGrade").append("<option value='Value'>一年级</option>");   
					$("#resCatGrade").append("<option value='Value'>二年级</option>"); 
					$("#resCatGrade").append("<option value='Value'>三年级</option>");
					$("#resCatGrade").append("<option value='Value'>四年级</option>");   
					$("#resCatGrade").append("<option value='Value'>五年级</option>"); 
					$("#resCatGrade").append("<option value='Value'>六年级</option>");
					
					$("#resCatSub").empty();
				    $("#resCatSub").append("<option value='Value'>语文</option>");   
					$("#resCatSub").append("<option value='Value'>数学</option>");
					$("#resCatSub").append("<option value='Value'>英语</option>");  
					 
				}else{
					$("#resCatGrade").empty();
				    $("#resCatGrade").append("<option value='Value'>七年级</option>");   
					$("#resCatGrade").append("<option value='Value'>八年级</option>"); 
					$("#resCatGrade").append("<option value='Value'>九年级</option>");
					
					$("#resCatSub").empty();
				    $("#resCatSub").append("<option value='Value'>语文</option>");   
					$("#resCatSub").append("<option value='Value'>数学</option>");
				    $("#resCatSub").append("<option value='Value'>英语</option>");   
					$("#resCatSub").append("<option value='Value'>生物</option>"); 
				    $("#resCatSub").append("<option value='Value'>地理</option>");   
					$("#resCatSub").append("<option value='Value'>历史</option>");
				    $("#resCatSub").append("<option value='Value'>物理</option>");   
					$("#resCatSub").append("<option value='Value'>化学</option>");
					$("#resCatSub").append("<option value='Value'>政治</option>");  
				}
			}
		});