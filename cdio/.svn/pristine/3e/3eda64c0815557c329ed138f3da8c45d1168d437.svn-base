 function getCourse(obj)
     {
       $("#grade").val(obj);
       $("#courseName").empty();
       $.ajax({  
	     type:'post',  
	     url:'loadCourseName_chart.action',  
	     data:{grade:obj,status:2},  
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
     
      function GetSendData() {
         var grades=$("#grade option:selected"); 
         var grade = grades.val(); 
         $("#grade").val(grade);
       
         var courses=$("#courseName option:selected"); 
         var course = courses.val(); 
         $("#courseName").val(course);
         
         $.ajax({  
	     type:'post',  
	     url:'loadClassChart_chart.action',  
	     data:{grade:grade,courseName:course},  
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
                        return '<b>'+ this.series.name +'</b><br/>'+'第'+this.x+'次测验成绩：' + this.y +' 分';
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
	          alert('error');       
	       }  
	    });  
      
      }
      
      
      
      
      
      
      
      
      
      
      function getCourse1(obj)
     {
       $("#grade1").val(obj);
       $("#courseName1").empty();
       $.ajax({  
	     type:'post',  
	     url:'loadCourseName_chart.action',  
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
       
       
       $.ajax({  
	     type:'post',  
	     url:'loadChart_chart.action',  
	     data:{grade:grade,courseName:course,wantQuery:wantQuery},  
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
			                            text:'我在这里',
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
	          alert('error');       
	       }  
	    });  
    }
    
    
    
    
    
    
    
    
    function getCourse2(obj)
     {
       $("#grade2").val(obj);
       $("#courseName2").empty();
       $.ajax({  
	     type:'post',  
	     url:'loadCourseName_chart.action',  
	     data:{grade:obj,testType:3},  
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
       
       $.ajax({  
	     type:'post',  
	     url:'loadChart2_chart.action',  
	     data:{grade:grade,courseName:course},  
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
	          alert('error');        
	       }  
	    }); 
	}
	
	
	
	
	
	
	function getCourse3(obj)
     {
       $("#grade3").val(obj);
       $("#courseName3").text("");
        var listhtml = "<span>学科:</span>";
       $.ajax({  
	     type:'post',  
	     url:'loadCourseName_chart.action',  
	     data:{grade:obj,testType:3},  
	     dataType:'json',  
	     success:function(data){
	        for(var i=0;i<data.length;i++){  
                 listhtml+= "<input type='checkbox' ";
                 listhtml+= "name=courseName31 value=\""+data[i]+"\" >";
                 listhtml+= data[i]+" </input>";
         }  
          $("#courseName3").html(listhtml);
	     },  
	        error:function(){        
	          alert('error');        
	       }  
	    });  
     }  
     function GetSendData3() {
	     
	     var grades=$("#grade3 option:selected"); 
         var grade = grades.val(); 
         $("#grade3").val(grade);
       
         
         var chk_value ="";    
         $('input[name="courseName31"]:checked').each(function(){    
          chk_value +=$(this).val()+",";    
         }); 
             
		$.ajax({  
	     type:'post',  
	     url:'loadChart3_chart.action',  
	     data:{grade:grade,courseName:chk_value},  
	     dataType:'json',  
	     success:function(data){  
         var chart;
			             chart = new Highcharts.Chart({	
			                       			
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
									                '第'+this.x+'次测验成绩：' + this.y +' 分';
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
						                        radius: 6,
						                        states: {
						                            hover: {
						                                enabled: true
						                            }
						                        }
						                    }
						                }
						            },
									series : data.ydata
								}); 
 
	     },  
	        error:function(){        
	          alert('error');       
	       }  
	    });  
		}
		
		
		
		
		
		
		
	 function getCourse4(obj)
     {
       $("#grade4").val(obj);
       $("#courseName4").text("");
        var listhtml = "<span>学科:</span>";
       $.ajax({  
	     type:'post',  
	     url:'loadCourseName_chart.action',  
	     data:{grade:obj,testType:3},  
	     dataType:'json',  
	     success:function(data){
	        for(var i=0;i<data.length;i++){  
                 listhtml+= "<input type='checkbox' ";
                 listhtml+= "name=courseName41 value=\""+data[i]+"\" >";
                 listhtml+= data[i]+" </input>";
         }  
          $("#courseName4").html(listhtml);
	     },  
	        error:function(){        
	          alert('error');        
	       }  
	    });  
     }  
      function GetSendData4() {
	     
	     var grades=$("#grade4 option:selected"); 
         var grade = grades.val(); 
         $("#grade4").val(grade);
      
         
         var chk_value ="";    
         $('input[name="courseName41"]:checked').each(function(){    
          chk_value +=$(this).val()+",";    
         }); 
             
		$.ajax({  
	     type:'post',  
	     url:'loadChart4_chart.action',  
	     data:{grade:grade,courseName:chk_value},  
	     dataType:'json',  
	     success:function(data){ 
	     $(function () {
          var chart;
			             chart = new Highcharts.Chart({	
			                     credits:false ,	  
			                        chart: {
				        polar: true,
			                renderTo : 'container4',
				        type: 'line'
				    },
				    
				    title: {
				        text: data.title,
				        x: -80,
				        style: {  //提示框内容的样式
									            color: '#646464',
									            padding: '10px',    //内边距 
									            fontSize: '15pt',            
									        } 
				        
				    },
				    
				    pane: {
				    	size: '80%'
				    },
				    
				    xAxis: {
				        categories: data.xdata,
				        tickmarkPlacement: 'on',
				        lineWidth: 0
				    },
				        
				    yAxis: {
				        gridLineInterpolation: 'polygon',
				        lineWidth: 0,
				        min: 0
				    },
				    
				    
				    legend: {
				        align: 'right',
				        verticalAlign: 'top',
				        y: 100,
				        layout: 'vertical'
				    },
												series : data.ydata
											});
			 
			
			
			
			
			
			});
	     },  
	        error:function(){        
	          alert('error');       
	       }  
	    });  
		}