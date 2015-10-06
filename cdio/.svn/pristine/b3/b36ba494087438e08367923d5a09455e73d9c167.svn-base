/**
 * 
 */
package cn.edu.fjnu.cdio.dao.test;

import java.util.HashMap;
import java.util.Map;

import junit.framework.TestCase;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.test.ErrQueBook;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author Administrator
 * 
 */
public class ErrQueBookDaoTest extends TestCase {

	private ApplicationContext ctx = null;
	private ErrQueBookDao errQueBookDao = null;
	private QuestionDao questionDao=null;

	protected void setUp() throws Exception {
		// TODO Auto-generated method stub
		super.setUp();
		ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		errQueBookDao = (ErrQueBookDao) ctx.getBean("errQueBookDao");
		questionDao=(QuestionDao)ctx.getBean("questionDao");
	}

	public void testAddErrQueBook() {
		User user = new User();
		user.setId((long) 1);
		
		ErrQueBook errQueBook=new ErrQueBook();
		
		errQueBook.setErrCnt(5);
		errQueBook.setErrId((long)1);
		errQueBook.setMaxErrAns("1|3|2|5");
		errQueBook.setQuestion(questionDao.getQuestionById((long)1));
		errQueBook.setStudent(user);
		
		errQueBookDao.save(errQueBook);
	}

//	 public void testLoadQuestion() {
//		 Map<String, Object> params = new HashMap<String, Object>();
//			params.put("errCnt", 5);
//			params.put("errId",(long)1);
//			Page<ErrQueBook> page = errQueBookDao.loadPagedErrQueBooks(2, 2, params);
//			for (ErrQueBook errQueBook : page.getResults())
//				System.out.println(errQueBook);
//	 }

	protected void tearDown() throws Exception {
		super.tearDown();
	}

}
