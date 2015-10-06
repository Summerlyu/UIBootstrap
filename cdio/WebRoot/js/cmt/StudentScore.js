     function getCourse(obj)
     {
       $("#grade").val(obj);
       $("#courseName").empty();
       $.ajax({  
	     type:'post',  
	     url:'getTeachCourseName_chart.action',  
	     data:{grade:obj,testType:2},  
	     dataType:'json',  
	     success:function(data){
	        //添加数据到下拉框
	        for(var i=0;i<data.length;i++){  
                var op= document.createElement("option");  
                var courseName = document.getElementById('courseName');  
                    op.text = data[i];  
                    op.value = data[i];  
                    courseName.add(op);  
            }   
	     },  
	        error:function(){        
	          alert('error');        
	       }  
	    });  
     }  
    
    function GetSendData()
    {
         var grades=$("#grade option:selected"); 
         var grade = grades.val(); 
         $("#grade").val(grade);
       
         var courses=$("#courseName option:selected"); 
         var course = courses.val(); 
         $("#courseName").val(course);
         
         var wantQuery = $("#wantQuery").val();
         var studentName = $("#studentName").val();
         
         
           $.ajax({  
	     type:'post',  
	     url:'loadStudentClassChart_chart.action',  
	     data:{grade:grade,courseName:course,wantQuery:wantQuery,studentName:studentName,testType:2},  
	     dataType:'json',  
	     success:function(data){  
         var chart;
			             chart = new Highcharts.Chart({	
			                        credits:false ,				
									chart : {
										renderTo : 'container',
										type: 'spline',
									},
									title: {
                    					text: data.title,
                    					x: -30 ,//center
                    					style: {  //提示框内容的样式
									            padding: '10px',    //内边距 
									            fontSize: '15pt',            
									        } 
                					},
									 xAxis: {
						               title: {
						                    align:'high',
						                    text: '分数'
						                }, labels: {
						                    formatter: function() {
						                        return this.value; 
						                    }
						                } ,
				                 plotLines: [{   
				                    color: '#646464',
				                    dashStyle: 'Dash', 
				                    width: 1.5,
				                    value: data.minScore,  
				                    zIndex: 5
				                },{   
				                    color: '#646464',
				                    dashStyle: 'Dash', 
				                    width: 1.5,
				                    value: data.maxScore, 
				                    zIndex: 5
				                },{   
				                    color: '#646464',
				                    dashStyle: 'Dash', 
				                    width: 1.5,
				                    value: data.avgScore,  
				                    zIndex: 5
				                },{   
				                    color: '#646464',
				                    dashStyle: 'Dash', 
				                    width: 1.5,
				                    value: data.myScore,  
				                    zIndex: 5,
				                     label :{
			                            align:'left',
			                            text:data.student,
			                            x:10,
			                        },
				                }],
						            },
									 yAxis: {
						                min:0, 
						                max:1,
						                title: {
						                    align:'high',
						                    text: 'PR值  %'
						                },
						                labels: {
						     
						            formatter: function() {
						                        return this.value*100 ;
						                    }
						                }
						            },
				                
						               tooltip: //提示框设置
									    {      
									        formatter: function() {  //格式化提示框的内容样式
									        return '<b>'+ this.series.name +'</b><br/>'+
									                this.x +'分PR值为: '+ Highcharts.numberFormat(this.y*100,0) +'%';
									        }  ,
									        borderRadius: 25,   //边框的圆角大小
									        style: {  //提示框内容的样式
									            color: '#646464',
									            padding: '10px',    //内边距 
									            fontSize: '9pt', 
									                       
									        } ,
									          crosshairs: {  //交叉点显示的一条纵线
									            width: 3,
									            color: 'red',
									            dashStyle: 'shortdot'
									        }                 
									    },
						            plotOptions: {
						                spline: {
						                 pointStart: 0,
						                    marker: {
						                        enabled: true,
						                        symbol: 'circle',
						                        radius: 1,
						                        states: {
						                            hover: {
						                                enabled: true
						                            }
						                        }
						                    }
						                }
						            },
									series : [{					
										name : data.splineName,
										data : data.ydata,
										}]
									
								});
 
	     },  
	        error:function(){        
	          alert('出错了...\n1、该学生没有在本次测验当中\n2、输入的学生用户名错误');       
	       }  
	    });  
    }
    
    
    
         function getCourse1(obj)
     {
       $("#grade1").val(obj);
       $("#courseName1").empty();
       $.ajax({  
	     type:'post',  
	     url:'getTeachCourseName_chart.action',  
	     data:{grade:obj,testType:3},  
	     dataType:'json',  
	     success:function(data){
	        //添加数据到下拉框
	        for(var i=0;i<data.length;i++){  
                var op= document.createElement("option");  
                var courseName = document.getElementById('courseName1');  
                    op.text = data[i];  
                    op.value = data[i];  
                    courseName.add(op);  
            }   
	     },  
	        error:function(){        
	          alert('error');        
	       }  
	    });  
     }  
    
    function GetSendData1()
    {
         var grades=$("#grade1 option:selected"); 
         var grade = grades.val(); 
         $("#grade1").val(grade);
       
         var courses=$("#courseName1 option:selected"); 
         var course = courses.val(); 
         $("#courseName1").val(course);
         
         var wantQuery = $("#wantQuery1").val();
         var studentName = $("#studentName1").val();
         
         
           $.ajax({  
	     type:'post',  
	     url:'loadStudentClassChart_chart.action',  
	     data:{grade:grade,courseName:course,wantQuery:wantQuery,studentName:studentName,testType:3},  
	     dataType:'json',  
	     success:function(data){  
         var chart;
			             chart = new Highcharts.Chart({	
			                        credits:false ,				
									chart : {
										renderTo : 'container1',
										type: 'spline',
									},
									title: {
                    					text: data.title,
                    					x: -30 ,//center
                    					style: {  //提示框内容的样式
									            padding: '10px',    //内边距 
									            fontSize: '15pt',            
									        } 
                					},
									 xAxis: {
						               title: {
						                    align:'high',
						                    text: '分数'
						                }, labels: {
						                    formatter: function() {
						                        return this.value; 
						                    }
						                } ,
				                 plotLines: [{   
				                    color: '#646464',
				                    dashStyle: 'Dash', 
				                    width: 1.5,
				                    value: data.minScore,  
				                    zIndex: 5
				                },{   
				                    color: '#646464',
				                    dashStyle: 'Dash', 
				                    width: 1.5,
				                    value: data.maxScore, 
				                    zIndex: 5
				                },{   
				                    color: '#646464',
				                    dashStyle: 'Dash', 
				                    width: 1.5,
				                    value: data.avgScore,  
				                    zIndex: 5
				                },{   
				                    color: '#646464',
				                    dashStyle: 'Dash', 
				                    width: 1.5,
				                    value: data.myScore,  
				                    zIndex: 5,
				                     label :{
			                            align:'left',
			                            text:data.student,
			                            x:10,
			                        },
				                }],
						            },
									 yAxis: {
						                min:0, 
						                max:1,
						                title: {
						                    align:'high',
						                    text: 'PR值  %'
						                },
						                labels: {
						     
						            formatter: function() {
						                        return this.value*100 ;
						                    }
						                }
						            },
				                
						               tooltip: //提示框设置
									    {      
									        formatter: function() {  //格式化提示框的内容样式
									        return '<b>'+ this.series.name +'</b><br/>'+
									                this.x +'分PR值为: '+ Highcharts.numberFormat(this.y*100,0) +'%';
									        }  ,
									        borderRadius: 25,   //边框的圆角大小
									        style: {  //提示框内容的样式
									            color: '#646464',
									            padding: '10px',    //内边距 
									            fontSize: '9pt', 
									                       
									        } ,
									          crosshairs: {  //交叉点显示的一条纵线
									            width: 3,
									            color: 'red',
									            dashStyle: 'shortdot'
									        }                 
									    },
						            plotOptions: {
						                spline: {
						                 pointStart: 0,
						                    marker: {
						                        enabled: true,
						                        symbol: 'circle',
						                        radius: 1,
						                        states: {
						                            hover: {
						                                enabled: true
						                            }
						                        }
						                    }
						                }
						            },
									series : [{					
										name : data.splineName,
										data : data.ydata,
										}]
									
								});
 
	     },  
	        error:function(){        
	        alert('出错了...\n1、该学生没有在本次测验当中\n2、输入的学生用户名错误');        
	       }  
	    });  
    }
    
    
    
    
    
    
    
      function getCourse2(obj)
     {
       $("#grade2").val(obj);
       $("#courseName2").empty();
       $.ajax({  
	     type:'post',  
	     url:'getTeachCourseName_chart.action',  
	     data:{grade:obj,testType:2},  
	     dataType:'json',  
	     success:function(data){
	        //添加数据到下拉框
	        for(var i=0;i<data.length;i++){  
                var op= document.createElement("option");  
                var courseName = document.getElementById('courseName2');  
                    op.text = data[i];  
                    op.value = data[i];  
                    courseName.add(op);  
            }   
	     },  
	        error:function(){        
	          alert('error');        
	       }  
	    });  
     }  
    
    function GetSendData2()
    {
       var grades=$("#grade2 option:selected"); 
       var grade = grades.val(); 
       $("#grade2").val(grade);
       
       var courses=$("#courseName2 option:selected"); 
       var course = courses.val(); 
       $("#courseName2").val(course);
       
       
        var studentName = $("#studentName2").val();
       
       $.ajax({  
	     type:'post',  
	     url:'loadStudentScoreChart_chart.action',  
	     data:{grade:grade,courseName:course,studentName:studentName},  
	     dataType:'json',  
	     success:function(data){ 
	            var chart;
			             chart = new Highcharts.Chart({	
			                        credits:false ,				
									chart : {
										renderTo : 'container2',
										type: 'spline',
									},
									title: {
                    					text: data.title,
                    					x: -30 ,//center
                    					style: {  //提示框内容的样式
									            padding: '10px',    //内边距 
									            fontSize: '15pt',            
									        } 
                					},
									 xAxis: {
									   categories:data.xdata,
						               title: {
						                    align:'high',
						                    text: '次数'
						                }
						            },
									 yAxis: {
						               min:0, 
						                max:100,
						                plotLines: [{   
					                    color: 'navy',
					                    dashStyle: 'Dash', 
					                    width: 1.5,
					                    value: data.minScore,  
					                    zIndex: 5,
					                    label :{
			                            align:'bottom',
			                            style:{
			                                color:'#646464',
			                            },
			                            text:'最低分',
			                            x:10,
			                           }
					                    },{   
					                    color: 'navy',
					                    dashStyle: 'Dash', 
					                    width: 1.5,
					                    value: data.maxScore,  
					                    zIndex: 5,
					                    label :{
			                            align:'right',
			                            style:{
			                                color:'#646464',
			                            },
			                            text:'最高分',
			                            x:10,
			                           }
					                    },{   
					                    color: 'navy',
					                    dashStyle: 'Dash', 
					                    width: 1.5,
					                    value: data.avgScore,  
					                    zIndex: 5,
					                    label :{
			                            align:'centre',
			                            style:{
			                                color:'#646464',
			                            },
			                            text:'平均分',
			                            x:10,
			                           }
					                    }],           
						                title: {
						                    align:'high',
						                    text: '分数'
						                },
						                labels: {
						     
						            formatter: function() {
						                        return this.value ;
						                    }
						                }
						            },
						               tooltip: //提示框设置
									    {      
									        formatter: function() {  //格式化提示框的内容样式
									        return '<b>'+ this.series.name +'</b><br/>'+
									                '第'+this.x+'次考试成绩：' + this.y +' 分';
									        }  ,
									        borderRadius: 25,   //边框的圆角大小
									        style: {  //提示框内容的样式
									            color: '#646464',
									            padding: '10px',    //内边距 
									            fontSize: '9pt',            
									        } ,
									          crosshairs: {  //交叉点显示的一条纵线
									            width: 3,
									            color: 'red',
									            dashStyle: 'shortdot'
									        }                 
									    },
						            plotOptions: {
						                spline: {
						                 pointStart: 0,
						                    marker: {
						                        enabled: true,
						                        symbol: 'circle',
						                        radius: 8,
						                        states: {
						                            hover: {
						                                enabled: true
						                            }
						                        }
						                    }
						                }
						            },
									series : [{					
										name : data.splineName,
										data : data.ydata,
										}]
									
								}); 
	     },  
	        error:function(){        
	          alert('出错了...\n1、该学生没有在本次测验当中\n2、输入的学生用户名错误');         
	       }  
	    }); 
	}
	
	
	
	
	
	
	  function getCourse3(obj)
     {
       $("#grade3").val(obj);
       $("#courseName3").empty();
       $.ajax({  
	     type:'post',  
	     url:'getTeachCourseName_chart.action',  
	     data:{grade:obj,testType:3},  
	     dataType:'json',  
	     success:function(data){
	        //添加数据到下拉框
	        for(var i=0;i<data.length;i++){  
                var op= document.createElement("option");  
                var courseName = document.getElementById('courseName3');  
                    op.text = data[i];  
                    op.value = data[i];  
                    courseName.add(op);  
            }   
	     },  
	        error:function(){        
	          alert('error');        
	       }  
	    });  
     }  
    
    function GetSendData3()
    {
       var grades=$("#grade3 option:selected"); 
       var grade = grades.val(); 
       $("#grade3").val(grade);
       
       var courses=$("#courseName3 option:selected"); 
       var course = courses.val(); 
       $("#courseName3").val(course);
       
       
        var studentName = $("#studentName3").val();
       
       $.ajax({  
	     type:'post',  
	     url:'loadStudentScoreChart_chart.action',  
	     data:{grade:grade,courseName:course,studentName:studentName,testType:3},  
	     dataType:'json',  
	     success:function(data){ 
	            var chart;
			             chart = new Highcharts.Chart({	
			                        credits:false ,				
									chart : {
										renderTo : 'container3',
										type: 'spline',
									},
									title: {
                    					text: data.title,
                    					x: -30 ,//center
                    					style: {  //提示框内容的样式
									            padding: '10px',    //内边距 
									            fontSize: '15pt',            
									        } 
                					},
									 xAxis: {
									   categories:data.xdata,
						               title: {
						                    align:'high',
						                    text: '次数'
						                }
						            },
									 yAxis: {
						               min:0, 
						                max:100,
						                plotLines: [{   
					                    color: 'navy',
					                    dashStyle: 'Dash', 
					                    width: 1.5,
					                    value: data.minScore,  
					                    zIndex: 5,
					                    label :{
			                            align:'bottom',
			                            style:{
			                                color:'#646464',
			                            },
			                            text:'最低分',
			                            x:10,
			                           }
					                    },{   
					                    color: 'navy',
					                    dashStyle: 'Dash', 
					                    width: 1.5,
					                    value: data.maxScore,  
					                    zIndex: 5,
					                    label :{
			                            align:'right',
			                            style:{
			                                color:'#646464',
			                            },
			                            text:'最高分',
			                            x:10,
			                           }
					                    },{   
					                    color: 'navy',
					                    dashStyle: 'Dash', 
					                    width: 1.5,
					                    value: data.avgScore,  
					                    zIndex: 5,
					                    label :{
			                            align:'centre',
			                            style:{
			                                color:'#646464',
			                            },
			                            text:'平均分',
			                            x:10,
			                           }
					                    }],           
						                title: {
						                    align:'high',
						                    text: '分数'
						                },
						                labels: {
						     
						            formatter: function() {
						                        return this.value ;
						                    }
						                }
						            },
						               tooltip: //提示框设置
									    {      
									        formatter: function() {  //格式化提示框的内容样式
									        return '<b>'+ this.series.name +'</b><br/>'+
									                '第'+this.x+'次考试成绩：' + this.y +' 分';
									        }  ,
									        borderRadius: 25,   //边框的圆角大小
									        style: {  //提示框内容的样式
									            color: '#646464',
									            padding: '10px',    //内边距 
									            fontSize: '9pt',            
									        } ,
									          crosshairs: {  //交叉点显示的一条纵线
									            width: 3,
									            color: 'red',
									            dashStyle: 'shortdot'
									        }                 
									    },
						            plotOptions: {
						                spline: {
						                 pointStart: 0,
						                    marker: {
						                        enabled: true,
						                        symbol: 'circle',
						                        radius: 8,
						                        states: {
						                            hover: {
						                                enabled: true
						                            }
						                        }
						                    }
						                }
						            },
									series : [{					
										name : data.splineName,
										data : data.ydata,
										}]
									
								}); 
	     },  
	        error:function(){        
	          alert('出错了...\n1、该学生没有在本次测验当中\n2、输入的学生用户名错误');         
	       }  
	    }); 
	}