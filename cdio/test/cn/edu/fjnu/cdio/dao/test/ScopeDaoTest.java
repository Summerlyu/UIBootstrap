/**
 * 
 */
package cn.edu.fjnu.cdio.dao.test;

import java.util.ArrayList;
import java.util.List;

import junit.framework.TestCase;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import cn.edu.fjnu.cdio.model.common.CourseType;
import cn.edu.fjnu.cdio.model.common.Scope;


/**
 * @author Administrator
 * 
 */
public class ScopeDaoTest extends TestCase {

	private ApplicationContext ctx = null;
	private ScopeDao scopeDao = null;
	private CourseTypeDao courseTypeDao = null;

	protected void setUp() throws Exception {
		// TODO Auto-generated method stub
		super.setUp();
		ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		scopeDao = (ScopeDao) ctx.getBean("scopeDao");
		courseTypeDao = (CourseTypeDao) ctx.getBean("courseTypeDao");
	}

	public void testAddScope() {
		List<Scope> highestScopes = new ArrayList<Scope>();
		// 插入最高层的分类范围
		Scope s11 = new Scope("语文", 1, 1, null);
		Scope s12 = new Scope("数学", 2, 1, null);
		Scope s13 = new Scope("英语", 3, 1, null);
		Scope s14 = new Scope("物理", 4, 1, null);
		Scope s15 = new Scope("化学", 5, 1, null);
		Scope s16 = new Scope("生物", 6, 1, null);
		Scope s17 = new Scope("地理", 7, 1, null);
		Scope s18 = new Scope("政治", 8, 1, null);
		Scope s19 = new Scope("历史", 9, 1, null);
		highestScopes.add(s11);
		highestScopes.add(s12);
		highestScopes.add(s13);

		// 插入第二层语文的
		Scope s211 = new Scope("人教版", 1, 2, s11);
		Scope s212 = new Scope("鄂教版", 2, 2, s11);
		Scope s213 = new Scope("北师大版", 3, 2, s11);
		Scope s214 = new Scope("沪教版", 4, 2, s11);
		Scope s215 = new Scope("苏教版", 5, 2, s11);
		Scope s216 = new Scope("翼教版", 6, 2, s11);
		Scope s217 = new Scope("鲁教版", 7, 2, s11);
		s11.getScopes().add(s211);
		s11.getScopes().add(s212);
		s11.getScopes().add(s213);
		s11.getScopes().add(s214);
		s11.getScopes().add(s215);
		s11.getScopes().add(s216);
		s11.getScopes().add(s217);

		// 插入第二层数学的
		Scope s221 = new Scope("人教版", 1, 2, s12);
		Scope s222 = new Scope("鄂教版", 2, 2, s12);
		Scope s223 = new Scope("北师大版", 3, 2, s12);
		Scope s224 = new Scope("沪教版", 4, 2, s12);
		Scope s225 = new Scope("苏教版", 5, 2, s12);
		Scope s226 = new Scope("翼教版", 6, 2, s12);
		Scope s227 = new Scope("鲁教版", 7, 2, s12);
		s12.getScopes().add(s221);
		s12.getScopes().add(s222);
		s12.getScopes().add(s223);
		s12.getScopes().add(s224);
		s12.getScopes().add(s225);
		s12.getScopes().add(s226);
		s12.getScopes().add(s227);

		// 插入第二层英语的
		Scope s231 = new Scope("人教版", 1, 2, s13);
		Scope s232 = new Scope("牛津译林版", 2, 2, s13);
		Scope s233 = new Scope("仁爱版", 3, 2, s13);
		Scope s234 = new Scope("北师大版", 4, 2, s13);
		Scope s235 = new Scope("外研版", 5, 2, s13);
		Scope s236 = new Scope("翼教版", 6, 2, s13);
		Scope s237 = new Scope("鲁教版", 7, 2, s13);
		s13.getScopes().add(s231);
		s13.getScopes().add(s232);
		s13.getScopes().add(s233);
		s13.getScopes().add(s234);
		s13.getScopes().add(s235);
		s13.getScopes().add(s236);
		s13.getScopes().add(s237);

		// 插入第三层的，把语文，数学，英语的第四三都有这6个年级的分类
		for (Scope subject : highestScopes) {
			for (Scope version : subject.getScopes()) {
				Scope s31 = new Scope("七年级上", 1, 3, version);
				Scope s32 = new Scope("七年级下", 2, 3, version);
				Scope s33 = new Scope("八年级上", 3, 3, version);
				Scope s34 = new Scope("八年级下", 4, 3, version);
				Scope s35 = new Scope("九年级上", 5, 3, version);
				Scope s36 = new Scope("九年级下", 6, 3, version);
				version.getScopes().add(s31);
				version.getScopes().add(s32);
				version.getScopes().add(s33);
				version.getScopes().add(s34);
				version.getScopes().add(s35);
				version.getScopes().add(s36);
			}
		}

		scopeDao.save(s11);
		scopeDao.save(s12);
		scopeDao.save(s13);

		// 插入第四层，把语文的第四层都有这6个单元的分类
		for (Scope version : s11.getScopes()) {
			// 迭代年级，语文的年级
			for (Scope grade : version.getScopes()) {
				Scope s41 = new Scope("第一单元", 1, 4, grade);
				Scope s42 = new Scope("第二单元", 2, 4, grade);
				Scope s43 = new Scope("第三单元", 3, 4, grade);
				Scope s44 = new Scope("第四单元", 4, 4, grade);
				Scope s45 = new Scope("第五单元", 5, 4, grade);
				Scope s46 = new Scope("第六单元", 6, 4, grade);
				grade.getScopes().add(s41);
				grade.getScopes().add(s42);
				grade.getScopes().add(s43);
				grade.getScopes().add(s44);
				grade.getScopes().add(s45);
				grade.getScopes().add(s46);
			}
		}

		scopeDao.update(s11);
		scopeDao.update(s12);
		scopeDao.update(s13);

		
		// 插入第5层，s211是语文，人教版
		Object[] grades = s211.getScopes().toArray();
		// 语文，人教版的七年级上
		Scope grade = (Scope) grades[0];
		// s211是语文，人教版,七年级上的所有单元
		Object[] chapters = grade.getScopes().toArray();
		// 语文，人教版的七年级上的第一单元
		Scope chapter1 = (Scope) chapters[0];
		// 创建6个小节对象
		Scope section1 = new Scope("1 在山的那边", 1, 5, chapter1);
		Scope section2 = new Scope("2 走一步，再走一步", 2, 5, chapter1);
		Scope section3 = new Scope("3 短文两篇", 3, 5, chapter1);
		Scope section4 = new Scope("4 紫藤萝瀑布", 4, 5, chapter1);
		Scope section5 = new Scope("5 童趣", 4, 5, chapter1);
		Scope section6 = new Scope("第一单元复习", 6, 5, chapter1);
		chapter1.getScopes().add(section1);
		chapter1.getScopes().add(section2);
		chapter1.getScopes().add(section3);
		chapter1.getScopes().add(section4);
		chapter1.getScopes().add(section5);
		chapter1.getScopes().add(section6);
		scopeDao.update(chapter1);

		
		// 插入到CourseType表中，语文，人教版，七年级上，第一单元的6个小节
		for (Scope section : chapter1.getScopes()) {
			CourseType courseType = new CourseType(s11, s211, grade, chapter1,
					section);
			courseTypeDao.save(courseType);
		}
		
		
		testAddMath(s12,s221);
		
		
	}
	
	
	public void testAddMath(Scope s12,Scope s221) {
		
		
		// 插入第5层，s211是数学，人教版
		Object[] grades = s221.getScopes().toArray();
		// 数学，人教版的七年级上
		Scope grade = (Scope) grades[0];
		
		// 插入第四层，数学，人教版的七年级上
		Scope s41 = new Scope("第一章 有理数", 1, 4, grade);
		Scope s42 = new Scope("第二章 整式的加减", 2, 4, grade);
		Scope s43 = new Scope("第三章 一元一次方程", 3, 4, grade);
		Scope s44 = new Scope("第四章 图形认识初步", 4, 4, grade);
		grade.getScopes().add(s41);
		grade.getScopes().add(s42);
		grade.getScopes().add(s43);
		grade.getScopes().add(s44);
		
		scopeDao.update(grade);
		
		
		// 数学，人教版的七年级上的所有章节
		Object[] chapters = grade.getScopes().toArray();
		// 数学，人教版,七年级上,所有章节的第一章节
		Scope chapter1 = (Scope) chapters[0];
		// 创建6个小节对象
		Scope section1 = new Scope("1.1 正数和负数", 1, 5, chapter1);
		Scope section2 = new Scope("1.2 有理数", 2, 5, chapter1);
		Scope section3 = new Scope("1.3 有理数的加减法", 3, 5, chapter1);
		Scope section4 = new Scope("1.4 有理数的乘除法", 4, 5, chapter1);
		Scope section5 = new Scope("1.5 有理数的乘方", 5, 5, chapter1);
		Scope section6 = new Scope("第一章复习", 6, 5, chapter1);
		chapter1.getScopes().add(section1);
		chapter1.getScopes().add(section2);
		chapter1.getScopes().add(section3);
		chapter1.getScopes().add(section4);
		chapter1.getScopes().add(section5);
		chapter1.getScopes().add(section6);
		scopeDao.update(chapter1);

		
		// 插入到CourseType表中，数学，人教版,七年级上,第一章节的6个小节
		for (Scope section : chapter1.getScopes()) {
			CourseType courseType = new CourseType(s12, s221, grade, chapter1,
					section);
			courseTypeDao.save(courseType);
		}
		
	}

	// public void testLoadScope() {
	// System.out.println(scopeDao.getScopeById(new Long(15)));
	// }

	protected void tearDown() throws Exception {
		super.tearDown();
	}

}
