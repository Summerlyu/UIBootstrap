$(document).ready(function () {
        $("#uploadify").uploadify({
            'uploader': 'js/res/uploadify.swf',
            'script': '../file/upload_res.action',
            'cancelImg': 'image/res/cancel.png',
            'folder': 'uploads',
            'buttonImg':'image/res/uploadBtn1.png',
            'fileDataName' : 'uploadfile',
            'queueID': 'fileQueue',
            'auto': true,
            'multi': true,
            'width':170,
            'height':55,
            'sizeLimit':10000000,
            'queueSizeLimit': 1, 
            'wmode':'transparent',
            'fileDesc' : 'ppt或word或txt或pdf或excel或图片', 
 			'fileExt' : '*.ppt;*.doc;*.txt;*.pdf;*.xls;*.png', 
            'onSelect': function(e, queueId, fileObj)
        	{
                $("#fileName").val(fileObj.name);
                $("#videoArea").hide(1000);
               
                $("#fileQueue").show();
                $("#fileInfor").show();
                $("#cancelBtn").show();
            },
            'onComplete':function(e, queueId, fileObj){
                $("#subFileInfor").attr('disabled',false);
                $("#tip").text("文件详细信息还未提交");
                
            },
            
            
        });
        //common
        $("#videoUrl").focus(function(){
            $("#docArea").hide(1000);
            $("#fileInfor").show();
            $(".videoTip").show(1000);
            $("#subFileInforBtn").attr('disabled',false);
            
        });
        $("#videoUrl").blur(function(){
            $(".videoTip").hide(1000);
            if($(this).val()!=""){
            	var params={
				  "url": $(this).val()
				};
	            if($(this).val()){
	            	$.ajax({
						type:"POST",
						url:"resUpload/upload_videoUrl.action",
						data:params,
						dataType:"text",
						complete:function(request){ 
							$("#valiVideoUrlRes").empty();
							if(request.responseText=="ok"){
							  	$("<img /> ").attr("src", "image/res/checked.gif" ).appendTo("#valiVideoUrlRes");
							}
							if(request.responseText=="repeat"){
								$("#valiVideoUrlRes").append("该视频已重复");
								$("#videoUrl").val("");
								$("#videoUrl")[0].focus();
							}
							if(request.responseText=="error"){
								
								$("<img /> ").attr("src", "image/res/unchecked.gif" ).appendTo("#valiVideoUrlRes");
								$("#valiVideoUrlRes").append("该视频地址尚未支持，或地址错误");
								$("#videoUrl").val("");
								$("#videoUrl")[0].focus();
							}
						}
					});
	            }
            }
           
        });
        $("#resCatSchool").change(function(){
				addCatItem($(this).find("option:selected").text());
		});
       
        
        
       
    });
	 function processResponse(request){
        	var msg=request.responseText.evalJSON();
        	$("#valiVideoUrlRes").innerHTML+=msg["valiVideoUrlRes"];
     }
     function validate(url){
     	 if(url!=""){
            	var params=$(this).val();
            	var url='resUpload/upload_videoUrl.action';
            	var validateAjax=new Ajax.Request(
            	url,
            	{
            		method:'POST',
            		parameters:params,
            		onComplete:processResponse,
            		asynchronous:true
            	});
            }
     }
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