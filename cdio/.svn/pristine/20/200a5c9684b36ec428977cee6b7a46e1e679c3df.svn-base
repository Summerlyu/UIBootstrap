/**
 * 
 */
package cn.edu.fjnu.cdio.dao.test;

import java.sql.Timestamp;
import java.util.HashMap;
import java.util.Map;

import junit.framework.TestCase;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.test.StuDoubt;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author Administrator
 * 
 */
public class StuDoubtDaoTest extends TestCase {

	private ApplicationContext ctx = null;
	private StuDoubtDao stuDoubtDao = null;
	private QuestionDao questionDao=null;

	protected void setUp() throws Exception {
		// TODO Auto-generated method stub
		super.setUp();
		ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		stuDoubtDao = (StuDoubtDao) ctx.getBean("stuDoubtDao");
		questionDao=(QuestionDao)ctx.getBean("questionDao");
	}

	public void testAddStuDoubt() {
		
//		User stu = new User();
//		stu.setId((long) 1);
//		
//		User coa= new User();
//		coa.setId((long)2);
//
//		StuDoubt stuDoubt=new StuDoubt();
//		stuDoubt.setCoach(coa);
//		stuDoubt.setCreateTime((new Timestamp(new java.util.Date().getTime())));
//		stuDoubt.setDoubt("有没有更优解");
//		stuDoubt.setDoubtId((long)1);
//		stuDoubt.setQuestion(questionDao.getQuestionById((long)1));
//		//stuDoubt.setReply(" ");
//		stuDoubt.setSolveTime((new Timestamp(new java.util.Date().getTime())));
//		stuDoubt.setStudent(stu);
//		stuDoubt.setTag("n");
//	
//		stuDoubtDao.save(stuDoubt);
		
		for(int i=0;i<10;i++){
			User stu = new User();
			stu.setId((long) 1);
			
			User coa= new User();
			coa.setId((long)2);

			StuDoubt stuDoubt=new StuDoubt();
			stuDoubt.setCoach(coa);
			stuDoubt.setCreateTime((new Timestamp(new java.util.Date().getTime())));
			stuDoubt.setDoubt("有没有更优解");
			stuDoubt.setDoubtId((long)1);
			stuDoubt.setQuestion(questionDao.getQuestionById((long)1));
			//stuDoubt.setReply(" ");
			stuDoubt.setSolveTime((new Timestamp(new java.util.Date().getTime())));
			stuDoubt.setStudent(stu);
			stuDoubt.setTag("n");
		
			stuDoubtDao.save(stuDoubt);
			}
		
		for(int i=0;i<10;i++){
			User stu = new User();
			stu.setId((long) 1);
			
			User coa= new User();
			coa.setId((long)2);

			StuDoubt stuDoubt=new StuDoubt();
			stuDoubt.setCoach(coa);
			stuDoubt.setCreateTime((new Timestamp(new java.util.Date().getTime())));
			stuDoubt.setDoubt("答案C好像也是正确的");
			stuDoubt.setDoubtId((long)1);
			stuDoubt.setQuestion(questionDao.getQuestionById((long)1));
			stuDoubt.setReply("由于出题老师疏忽放了两个正确答案。 ");
			stuDoubt.setSolveTime((new Timestamp(new java.util.Date().getTime())));
			stuDoubt.setStudent(stu);
			stuDoubt.setTag("y");
		
			stuDoubtDao.save(stuDoubt);
			}
		
		
	}

//	public void testLoadQuestion() {
//		Map<String, Object> params = new HashMap<String, Object>();
//		params.put("doubtId", (long)1);
//		params.put("tag", "y");
//		Page<StuDoubt> page = stuDoubtDao.loadPagedStuDoubts(1, 1, params);
//		for (StuDoubt stuDoubt : page.getResults())
//			System.out.println(stuDoubt);
//	}

	protected void tearDown() throws Exception {
		// TODO Auto-generated method stub
		super.tearDown();
	}

}
