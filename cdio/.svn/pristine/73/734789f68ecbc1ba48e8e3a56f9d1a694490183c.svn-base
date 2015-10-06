// JavaScript Document

var courseList = new Array( ); //定义城市数组
courseList['语文'] = ['第一单元','第二单元','第三元', '第四单元','第五单元'];
courseList['数学'] = ['第一单元','第二单元','第三元', '第四单元'];
courseList['英语'] = ['第一单元','第二单元','第三元'];

function changeCrouse( )
{
var course=document.myform.course.value; 
document.myform.rute.options.length=0;
for (var i in courseList) 
{
if (i == course) 
{
for (var j in courseList[i])
{
document.myform.rute.options.add(new Option(courseList[i][j],courseList[i][j]));
}
}
}
document.myform.rute.options.selctIndex=0;
}

function loadAll( ) 
{ for (var i in courseList) 
{ document.myform.course.options.add(new Option(i, i)); 
}
document.myform.course.selectedIndex = 0; 
}
