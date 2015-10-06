	function selectTab(Tab)
	{
	  TAB = Tab;
	  
	   if(TAB==1)
	   {
	    location.href = "loadStudentJudgeForTeacherByTeaName_queryJudge.action?ShowTab="+TAB;
	   }
	   if(TAB==2)
	   {
	    location.href = "loadTeacherJudgeForStudentByTeaName_queryJudge.action?ShowTab="+TAB;
	   }
	   if(TAB==3&&first_3==0)
	   {
	     loadChart(); 
	     first_3=1;
	   }
	   
	}
	function selected(index){
            var f=document.forms[index];
            f.action=f.action+"?ShowTab="+TAB;
            f.submit();
        }
	
	function loadChart()
	{
		var beginTime = $("#beginTime").val();
		var endTime = $("#endTime").val();
	$.ajax({  
	     type:'post',  
	     url:'loadJudgeChart_chart.action',   
	     data:{beginTime:beginTime,
			endTime:endTime},
	     dataType:'json',  
	     success:function(result){  
	     
	     $(function () {
    
        var colors = Highcharts.getOptions().colors,
            categories = ['教学态度', '教学内容', '教学方法', '教学质量'],
            name = '学生动态评价分析图',
            data = [{
                    y: result.attitudeAvg,
                    color: colors[0],
                    drilldown: {
                        name: '教学态度打分分布',
                        categories: ['5分', '4分', '3分', '2分','1分'],
                        data: result.overally1_detail,
                        color: colors[0]
                    }
                }, {
                    y:result.contentAvg,
                    color: colors[1],
                    drilldown: {
                        name: '教学内容打分分布',
                        categories: ['5分', '4分', '3分', '2分','1分'],
                        data: result.overally2_detail,
                        color: colors[1]
                    }
                }, {
                    y: result.methodAvg,
                    color: colors[2],
                    drilldown: {
                        name: '教学方法打分分布',
                        categories: ['5分', '4分', '3分', '2分','1分'],
                        data: result.overally3_detail,
                        color: colors[2]
                    }
                }, {
                    y: result.qualityAvg,
                    color: colors[3],
                    drilldown: {
                        name: '教学质量打分分布',
                        categories: ['5分', '4分', '3分', '2分','1分'],
                        data: result.overally4_detail,
                        color: colors[3]
                    }
                }];
    
        function setChart(name, categories, data, color) {
			chart.xAxis[0].setCategories(categories, false);
			chart.series[0].remove(false);
			chart.addSeries({
				name: name,
				data: data,
				color: color || 'white'
			}, false);
			chart.redraw();
        }
    
        var chart = $('#container').highcharts({
             credits:false ,	
            chart: {
                type: 'column'
            },
            title: {
                text: '学生动态评价分析图表'
            },
            subtitle: {
                text: '点击柱子查看详细'
            },
            xAxis: {
                categories: categories
            },
            yAxis: {
                title: {
                    align:'high',
                   
                }, labels: {
						formatter: function() {
						   return this.value; 
						  
				}
			 }
            },
            plotOptions: {
                column: {
                    cursor: 'pointer',
                    point: {
                        events: {
                            click: function() {
                                var drilldown = this.drilldown;
                                if (drilldown) { // drill down
                                    setChart(drilldown.name, drilldown.categories, drilldown.data, drilldown.color);
                                } else { // restore
                                    setChart(name, categories, data);
                                }
                            }
                        }
                    },
                    dataLabels: {
                        enabled: true,
                        color: colors[0],
                        style: {
                            fontWeight: 'bold'
                        },
                        formatter: function() {
                            var point = this.point;
                             if (point.drilldown) {
			                       return Highcharts.numberFormat(this.y,1) +'分';
			                    } else {
			                        return Highcharts.numberFormat(this.y,0) +'人';
			                    }
                        }
                    }
                }
            },
            tooltip: {
                formatter: function() {
                    var point = this.point;
                        var s;
                    if (point.drilldown) {
                        s = this.x +':<b>'+  Highcharts.numberFormat(this.y, 1) +'分</b><br/>';
                        s += '点击查看<b>'+ point.category +'</b>详细';
                    } else {
                        s = this.x +':<b>'+  this.y +'人</b><br/>';
                        s += '点击返回上一级';
                    }
                    return s;
                }
            },
            series: [{
                name: name,
                data: data,
                color: 'white'
            }],
            exporting: {
                enabled: false
            }
        })
        .highcharts(); // return chart
	   
	   });
	   
	   
	   
	   
	   
	   
	   
	       $(function () {
    
        var colors = Highcharts.getOptions().colors,
            categories = ['最近一周', '最近一个月', '最近六个月', '六个月之前'],
            name = '学生评价分析图',
            data = [{
                    y: result.y1,
                    color: colors[4],
                    drilldown: {
                        name: '最近一周评价详细  <b>共'+result.total_7Days+'人评价</b>',
                        categories: ['非常满意', '满意', '一般', '不满意','非常不满意'],
                        data: result.y1_detail,
                        color: colors[4]
                    }
                }, {
                    y:result.y2,
                    color: colors[5],
                    drilldown: {
                        name: '最近一个月评价详细 <b>共'+result.total_30Days+'人评价</b>',
                        categories: ['非常满意', '满意', '一般', '不满意','非常不满意'],
                        data: result.y2_detail,
                        color: colors[5]
                    }
                }, {
                    y: result.y3,
                    color: colors[6],
                    drilldown: {
                        name: '最近六个月评价详细 <b>共'+result.total_180Days+'人评价</b>',
                        categories: ['非常满意', '满意', '一般', '不满意','非常不满意'],
                        data: result.y3_detail,
                        color: colors[6]
                    }
                }, {
                    y: result.y4,
                    color: colors[7],
                    drilldown: {
                        name: '六个月前评价详细 <b>共'+result.total_180MoreDays+'人评价</b>',
                        categories: ['非常满意', '满意', '一般', '不满意','非常不满意'],
                        data: result.y4_detail,
                        color: colors[7]
                    }
                }];
    
        function setChart(name, categories, data, color) {
			chart.xAxis[0].setCategories(categories, false);
			chart.series[0].remove(false);
			chart.addSeries({
				name: name,
				data: data,
				color: color || 'white'
			}, false);
			chart.redraw();
        }
    
        var chart = $('#container1').highcharts({
             credits:false ,	
            chart: {
                type: 'column'
            },
            title: {
                text: '学生评价分析图表'
            },
            subtitle: {
                text: '<b>共'+result.total+'人评价</b>  点击柱子查看详细'
            },
            xAxis: {
                categories: categories
            },
            yAxis: {
                title: {
                    align:'high',
                    text: '百分比'
                }, labels: {
						formatter: function() {
						   return this.value*100; 
				}
			 }
            },
            plotOptions: {
                column: {
                    cursor: 'pointer',
                    point: {
                        events: {
                            click: function() {
                                var drilldown = this.drilldown;
                                if (drilldown) { // drill down
                                    setChart(drilldown.name, drilldown.categories, drilldown.data, drilldown.color);
                                } else { // restore
                                    setChart(name, categories, data);
                                }
                            }
                        }
                    },
                    dataLabels: {
                        enabled: true,
                        color: colors[0],
                        style: {
                            fontWeight: 'bold'
                        },
                        formatter: function() {
                            return Highcharts.numberFormat(this.y*100, 2) +'%';
                        }
                    }
                }
            },
            tooltip: {
                formatter: function() {
                    var point = this.point,
                        s = this.x +':<b>'+  Highcharts.numberFormat(this.y*100, 2) +'%</b><br/>';
                    if (point.drilldown) {
                        s += '点击查看<b>'+ point.category +'</b>详细';
                    } else {
                        s += '点击返回上一级';
                    }
                    return s;
                }
            },
            series: [{
                name: name,
                data: data,
                color: 'white'
            }],
            exporting: {
                enabled: false
            }
        })
        .highcharts(); // return chart
        
        
        
        
        
        
        
    });
        
	     },  
	        error:function(){        
	          alert('error');        
	       }  
	    });  
	
	
	
	
	
	
	}