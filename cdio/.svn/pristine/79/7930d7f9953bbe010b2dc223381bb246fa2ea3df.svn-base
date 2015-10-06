var RulesID=0;
	var ExamTime = 7200;
	var RunTime = 0;
	var ExamTimer;
	var CompletedTF = 0;

   $(document).ready(function(){
     // 测试
    // alert("Hello world!");
	  
	  		
		$(".correct").live("click",function(){
			var eid = $(this).attr("eid");
			if($("#correctBox"+eid).is(":hidden"))
			{
				
				$("#doubtBox"+eid).hide();
				$("#correctBox"+eid).slideDown();
				$(".title_box li").removeClass("on");
				$(this).parent("li").addClass("on");
			}
			else
			{
				$("#correctBox"+eid).slideUp();
				$(this).parent("li").removeClass("on");
			}
		});
		
		$(".doubt").live("click",function(){
			var eid = $(this).attr("eid");
			if($("#doubtBox"+eid).is(":hidden"))
			{
			
				$("#correctBox"+eid).hide();
				$("#doubtBox"+eid).slideDown();
				$(".title_box li").removeClass("on");
				$(this).parent("li").addClass("on");
			}
			else
			{
				$("#doubtBox"+eid).slideUp();
				$(this).parent("li").removeClass("on");
			}
		});
		
		$("#wordSay").live("keyup",function(){
			if (StrLength($(this).val())>1000){
				var temp = Math.ceil((StrLength($(this).val())-1000)/2);
				$(this).parent().parent().find(".Tcount").html("已超过<b style=\"color:#ff0000\">"+temp+"</b>个字");
			}else{
				var temp = Math.ceil((1000-StrLength($(this).val()))/2);
				$(this).parent().parent().find(".Tcount").html("还可以输入:<b>"+temp+"</b>个字");	
			}
		});
	   
   
	   // 添加错题和纠错
		$(".chosez a").live("click",function(){
			var obj = $(this);
			var Types=obj.attr("Types"),typeID=obj.attr("TypeID");
			$.ajax({
				type: "Post",
				url: "",
				data: {Act:"Favorites",Types:Types,typeID:typeID},
				dataType: 'json',
				success: function(result){
					dialoading.close();		
				
					PopUp(obj,"收藏成功",1);
										
			   }
			}); 
				
		});
		
	
  
   
  });
   
   
   
   
   function StrLength(str)
	{
		var i,sum;
		sum=0;
		for(i=0;i<str.length;i++){
			if ((str.charCodeAt(i)>=0) && (str.charCodeAt(i)<=255))
			sum=sum+1;
			else{
				sum=sum+2;
			}
		}
		return sum;
	}
	function loading(content)
	{// 提示框
		dialoading = art.dialog({id:"loading",content:content,icon:"loading",cancel:false,title: false,fixed:true});
	}

   
	
	
	

 
			
	


  

