package cn.edu.fjnu.cdio.dao.coa;

import java.util.Date;

import junit.framework.Assert;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import cn.edu.fjnu.cdio.dao.common.UserDao;
import cn.edu.fjnu.cdio.dao.test.CourseTypeDao;
import cn.edu.fjnu.cdio.model.coa.Course;
import cn.edu.fjnu.cdio.model.coa.RCertify;
import cn.edu.fjnu.cdio.model.common.CourseType;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.trs.CourseRecord;
import cn.edu.fjnu.cdio.service.common.UserService;
import cn.edu.fjnu.cdio.service.common.UserServiceImpl;
import cn.edu.fjnu.cdio.service.test.CourseTypeService;
import cn.edu.fjnu.cdio.service.test.CourseTypeServiceImpl;

public class CourseDaoTest {

	@Test
	public void testAdd() {
		ApplicationContext ctx = new ClassPathXmlApplicationContext(
				"applicationContext.xml");
		Assert.assertNotNull(ctx);

		CourseDao courseDao = (CourseDao) ctx.getBean("courseDao");
		Assert.assertNotNull(courseDao);

		for (int i = 1; i < 100; ++i) {
			Course course = new Course();
			course.setCourseID(new Long(i));
			course.setDescribtion("good" + i);
			course.setEp(100.0 + i);
			course.setClassTime(new Date());
			if (i % 2 == 0)
				course.setTeachStyle("幽默");
			else
				course.setTeachStyle("严肃");

			course.setPattern(1);
			course.setState("在教");
			course.setSchoolHour(new Long(i % 10 + 1));

			if (i % 2 == 0)
				course.setSpeed("快");
			else
				course.setSpeed("慢");

			course.setNature("耐心");

			UserDao userDao = (UserDao) ctx.getBean("userDao");
			User user = new User();
			user = userDao.getCoachByID(new Long(i % 30));
			course.setUser(user);
			System.out.println(user);

			CourseTypeDao courseTypeDao = (CourseTypeDao) ctx
					.getBean("courseTypeDao");
			CourseType courseType = new CourseType();
			courseType = courseTypeDao.getCourseTypeById(new Long(i % 30));
			course.setCourseType(courseType);
			System.out.println(courseType);

			courseDao.add(course);
		}

	}
}
