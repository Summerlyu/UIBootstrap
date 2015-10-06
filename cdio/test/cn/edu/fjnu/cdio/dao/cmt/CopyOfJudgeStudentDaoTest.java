package cn.edu.fjnu.cdio.dao.cmt;

import java.util.ArrayList;
import java.util.List;

import junit.framework.Assert;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.FileSystemXmlApplicationContext;

import cn.edu.fjnu.cdio.service.cmt.StudentScoreChartService;

/*
 * @author 蔡焕
 */
public class CopyOfJudgeStudentDaoTest {
	
	/*@Test
    public void testaddJudge(){
		ApplicationContext ctx = new FileSystemXmlApplicationContext(
				"WebRoot/WEB-INF/applicationContext.xml");
		Assert.assertNotNull(ctx);
		StudentScoreChartService studentScoreChartDao = (StudentScoreChartService)ctx.getBean("studentScoreChartService");
		Assert.assertNotNull(studentScoreChartDao);
		
		List<Object[]> w = studentScoreChartDao.getTestScoreByGroup(7);
		
	
		
				
		Integer myscore = studentScoreChartDao.getMyTestScoreByGuide("userwyh", 7);
		
		
		Object[] detail = 	studentScoreChartDao.getMinMaxAvgScoreByGroup(7);
        	Integer min = (Integer) detail[0];
        	double avg = 	(Double) detail[2];
        	Integer max = (Integer) detail[1];
        	
        	
       List list = new ArrayList();
       int total = 0;
       int  cursore = (Integer) w.get(0)[0];
       long  num = (Long) w.get(0)[1];
       w.remove(0);
       System.out.println(w.size());
       for(int i=0;i<101;i++)
       {
    	   if(i<cursore)
    		   list.add(total);
    	   else
    	   {
    		   if(w.size()==0)
    	   {
    		   total +=num;
    		   list.add(total);
    		   num = 0;
    	   }
    		   else
    		   {
    			   total +=num;
        		   list.add(total);
    		   }
    		   
    		   if(w.size()!=0)
    		   {
    		   cursore = (Integer) w.get(0)[0];
    		   System.out.println(cursore);
    	       num = (Long) w.get(0)[1];
    	       w.remove(0);
    		   } 
    	   } 
    	   if(i==min)
    		   list.set(min, "{ y: "+total+",marker: {symbol: 'url(http://www.highcharts.com/demo/gfx/snow.png)'}}");
    	    if(i==max)
    	    	 list.set(max, "{ y: "+total+",marker: {symbol: 'url(http://www.highcharts.com/demo/gfx/snow.png)'}}");
    	      if(i==(int)avg)
    	    	  list.set((int)avg, "{ y: "+total+",marker: {symbol: 'url(http://www.highcharts.com/demo/gfx/snow.png)'}}");
    	       if(i==myscore)
    	    	   list.set(myscore, "{ y: "+total+",marker: {symbol: 'url(http://www.highcharts.com/demo/gfx/snow.png)'}}");
    	       
       }
       
       
       
       for(int i=0;i<101;i++)
       { 
    	   System.out.print(list.get(i)+",");
    	   if(i%10==0)
    	     System.out.println();
       }
	}*/
	@Test
    public void testaddJudge()
	{
		ApplicationContext ctx = new FileSystemXmlApplicationContext(
				"WebRoot/WEB-INF/applicationContext.xml");
		Assert.assertNotNull(ctx);
		StudentScoreChartService studentScoreChartDao = (StudentScoreChartService)ctx.getBean("studentScoreChartService");
		Assert.assertNotNull(studentScoreChartDao);
		
		List<Integer> LIST = new ArrayList<Integer>();
		LIST.add( 3);
		LIST.add(5);
		LIST.add(7);
		
		List<Object> RESULT = studentScoreChartDao.getMyScoreGroupByUnit("userwyh", LIST);
		for(Object i:RESULT)
			System.out.println(i);
	}
}
