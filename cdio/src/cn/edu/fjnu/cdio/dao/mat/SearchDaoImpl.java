package cn.edu.fjnu.cdio.dao.mat;

import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.apache.lucene.search.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.search.FullTextSession;
import org.hibernate.search.Search;
import org.hibernate.search.SearchFactory;
import org.hibernate.search.query.dsl.QueryBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import cn.edu.fjnu.cdio.model.coa.Course;
import cn.edu.fjnu.cdio.model.demo.User;

/**
 * @author 作者:第五组
 * 
 * @version 创建时间：2013-05-15 下午01:50:49
 * 
 *          功能说明:
 * 
 * @version 修改时间：2013-05-15
 * 
 *          修改原因：
 */
@Repository(value = "searchDao")
public class SearchDaoImpl implements SearchDao {

	public SessionFactory getSessionFactory() {
		return sessionFactory;
	}

	@Autowired
	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}

	SessionFactory sessionFactory;

	/*
	 * (non-Javadoc)
	 * 
	 * @see cn.edu.fjnu.cdio.dao.mat.MatchDao#matchCourse(int, int,
	 * cn.edu.fjnu.cdio.model.coa.Course)
	 */
	@Override
	public List<Course> matchCourse(int pageSize, int index, Course course) {
		// TODO Auto-generated method stub
		return null;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see cn.edu.fjnu.cdio.dao.mat.MatchDao#matchUser(int, int,
	 * cn.edu.fjnu.cdio.model.demo.User)
	 */
	@Override
	public List<User> matchUser(int pageSize, int index, User user) {
		// TODO Auto-generated method stub
		return null;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see cn.edu.fjnu.cdio.dao.mat.MatchDao#getCourseCharts(int, int,
	 * cn.edu.fjnu.cdio.model.coa.Course)
	 */
	@Override
	public List<Course> getCourseCharts(int pageSize, int index, Course course) {
		// TODO Auto-generated method stub
		return null;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see cn.edu.fjnu.cdio.dao.mat.MatchDao#getUserCharts(int, int,
	 * cn.edu.fjnu.cdio.model.demo.User)
	 */
	@Override
	public List<User> getUserCharts(int pageSize, int index, User user) {
		// TODO Auto-generated method stub
		return null;
	}

	/*
	 * 课程关键字搜索
	 * 
	 * @see cn.edu.fjnu.cdio.dao.mat.MatchDao#searchMatchedCourse(int, int,
	 * java.lang.String)
	 */
	@Override
	public Map<String,Object> searchMatchedCourse(int pageSize, int index,
			String keywords) {

		Map<String,Object> result = new HashMap();
		
		System.out.println("正在搜索:"+keywords);
		Session session = sessionFactory.openSession();
		FullTextSession fullTextSession = Search.getFullTextSession(session);
		QueryBuilder qb = fullTextSession.getSearchFactory()
				.buildQueryBuilder().forEntity(Course.class).get();
		org.apache.lucene.search.Query query = qb
				.keyword()
				// 课程描述，课程分类，课程教师名字
				.onFields("describtion", "courseType.subject.name", "user.name")
				.matching(keywords).createQuery();

		// wrap Lucene query in a org.hibernate.Query
		org.hibernate.search.FullTextQuery fQuery  = fullTextSession.createFullTextQuery(
				query, Course.class);

		fQuery.setFirstResult((index-1) * pageSize);
		fQuery.setMaxResults(pageSize);
		List<Course> list = fQuery.list();
		
		result.put("totalRecord", fQuery.getResultSize());
		result.put("resultList",list );
		
		System.out.println("dao中:");
		Iterator<Course> iterator = list.iterator();
		int i = 0;
		while (iterator.hasNext()) {
			Course s_book = iterator.next();
			System.out.println("第" + i + "条:");
			System.out.println(s_book.getDescribtion());
			System.out.println(s_book.getEp());
			System.out.println(s_book.getUser().getName());
			System.out.println(s_book.getTeachStyle());
			i++;
		}
		// execute search

		return result;
	}

	/*
	 * 高级条件搜索
	 * map传递参数:teacherName,subjectName,priceBegin,priceEnd,classTimeBegin,classTimeEnd
	 * @see cn.edu.fjnu.cdio.dao.mat.MatchDao#searchMatchedCourse(int, int,
	 * java.util.Map)
	 */
	@Override
	public Map<String,Object> searchMatchedCourse(int pageSize, int index,
			Map<String, Object> params) {
		Map<String,Object> result = new HashMap();
		Session session = sessionFactory.openSession();
		FullTextSession fullTextSession = Search.getFullTextSession(session);
		SearchFactory searchFactory = fullTextSession.getSearchFactory();
		QueryBuilder queryBuilder = searchFactory.buildQueryBuilder()
				.forEntity(Course.class).get();



		// 组合查询:bool().must()||等等

//		String teacherName = params.get("teacherName")+"";
//		System.out.println(teacherName);
		Date dateBegin = (Date)params.get("classTimeBegin");
		Date dateEnd = (Date)params.get("classTimeEnd");
		String subjectName = params.get("subjectName")+"";
		System.out.println(dateBegin+":"+dateEnd);
		System.out.println("ep-begin:"+params.get("priceBegin"));
		System.out.println("ep-end:"+params.get("priceEnd"));
		System.out.println("subjectName:"+params.get("subjectName"));
		Query luceneQuery = queryBuilder
				.bool()
				.must(queryBuilder.keyword().onField("courseType.subject.name")
						.matching(subjectName).createQuery())
				.must(queryBuilder.range().onField("ep").
						from((Double)params.get("priceBegin")).
						to((Double)params.get("priceEnd"))
						.excludeLimit().createQuery())
				.must(queryBuilder.range().onField("classTime")
						.from(dateBegin)
						.to(dateEnd)
						.excludeLimit().createQuery())
						.createQuery();

		org.hibernate.search.FullTextQuery fQuery = fullTextSession
				.createFullTextQuery(luceneQuery);
		fQuery.setFirstResult((index-1) * pageSize);
		fQuery.setMaxResults(pageSize);
		List<Course> list = fQuery.list();
		result.put("totalRecord", fQuery.getResultSize());
		result.put("resultList", list);
		
		System.out.println("dao中advance:");
		Iterator<Course> iterator = list.iterator();
		int i = 0;
		while (iterator.hasNext()) {
			Course s_book = iterator.next();
			System.out.println("第" + i + "条:");
			System.out.println(s_book.getDescribtion());
			System.out.println(s_book.getEp());
			System.out.println(s_book.getUser().getName());
			System.out.println(s_book.getCourseType().getSubject());
			i++;
		}
		return result;
	}
}
