//coursestyle 联动	

var index;
   	function changeSubject(obj){
   		index = obj.options[obj.options.selectedIndex].value;
   		$.getJSON("/cdio2010/test/"
				+ "queClassify/getScopeById_question?scopeId="
				+ index, function(data) {
				
				$("#version").empty();
	   		    $("#version").append('<option value="-1">==请选择版本==</option>');
	   		    $("#grade").empty();
	   		    $("#grade").append('<option value="-1">==请选择年级==</option>');
				$("#chapter").empty();
	   		    $("#chapter").append('<option value="-1">==请选择章节==</option>');
				$("#section").empty();
	   		    $("#section").append('<option value="-1">==请选择小节==</option>');
			
			// jquery解析map数据
			$.each(data.scopes, function(key, value) {
				
				$("#version").append('<option value="'+key+'">'+value+'</option>');
				
			});
		});
} 
 
   	function changeVersion(obj){
   		index = obj.options[obj.options.selectedIndex].value;
   		$.getJSON("/cdio2010/test/"
				+ "queClassify/getScopeById_question?scopeId="
				+ index, function(data) {

					$("#grade").empty();
	   		        $("#grade").append('<option value="-1">==请选择年级==</option>');
					$("#chapter").empty();
		   		    $("#chapter").append('<option value="-1">==请选择章节==</option>');
					$("#section").empty();
		   		    $("#section").append('<option value="-1">==请选择小节==</option>');
			
			// jquery解析map数据
			$.each(data.scopes, function(key, value) {
				
				$("#grade").append('<option value="'+key+'">'+value+'</option>');
				
			});
		});
   	}

   	function changeGrade(obj){
   		index = obj.options[obj.options.selectedIndex].value;
   		$.getJSON("/cdio2010/test/"
				+ "queClassify/getScopeById_question?scopeId="
				+ index, function(data) {

					$("#chapter").empty();
	   		        $("#chapter").append('<option value="-1">==请选择章节==</option>');
					$("#section").empty();
		   		    $("#section").append('<option value="-1">==请选择小节==</option>');
			
			// jquery解析map数据
			$.each(data.scopes, function(key, value) {
				
				$("#chapter").append('<option value="'+key+'">'+value+'</option>');
				
			});
		});
   	}

   	function changeChapter(obj){
   		
   		index = obj.options[obj.options.selectedIndex].value;
   		$.getJSON("/cdio2010/test/"
				+ "queClassify/getScopeById_question?scopeId="
				+ index, function(data) {

					$("#section").empty();
	   		        $("#section").append('<option value="-1">==请选择小节==</option>');
			
			// jquery解析map数据
			$.each(data.scopes, function(key, value) {
				//alert(value);
				$("#section").append('<option value="'+key+'">'+value+'</option>');
				
			});
		});
   	}
   	
   	function changeSubject2(obj){
   		index = obj.options[obj.options.selectedIndex].value;
   		$.getJSON("/cdio2010/test/"
				+ "queClassify/getScopeById_question?scopeId="
				+ index, function(data) {
				
				$("#version2").empty();
	   		    $("#version2").append('<option value="-1">==请选择版本==</option>');
	   		    $("#grade2").empty();
	   		    $("#grade2").append('<option value="-1">==请选择年级==</option>');
			
			// jquery解析map数据
			$.each(data.scopes, function(key, value) {
				
				$("#version2").append('<option value="'+key+'">'+value+'</option>');
				
			});
		});
} 
   	
	function changeVersion2(obj){
   		index = obj.options[obj.options.selectedIndex].value;
   		$.getJSON("/cdio2010/test/"
				+ "queClassify/getScopeById_question?scopeId="
				+ index, function(data) {

					$("#grade2").empty();
	   		        $("#grade2").append('<option value="-1">==请选择年级==</option>');
			// jquery解析map数据
			$.each(data.scopes, function(key, value) {
				
				$("#grade2").append('<option value="'+key+'">'+value+'</option>');
				
			});
		});
   	}