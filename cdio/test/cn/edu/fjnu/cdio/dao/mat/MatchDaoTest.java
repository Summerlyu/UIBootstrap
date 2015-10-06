package cn.edu.fjnu.cdio.dao.mat;

import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.apache.lucene.search.Query;
import org.apache.lucene.search.Sort;
import org.apache.lucene.search.SortField;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.search.FullTextSession;
import org.hibernate.search.Search;
import org.hibernate.search.SearchFactory;
import org.hibernate.search.query.dsl.QueryBuilder;
import org.junit.Test;

import cn.edu.fjnu.cdio.model.coa.Course;

/**
 * @author 第五组
 * 
 */
public class MatchDaoTest {

	
	// 测试关键字搜索,keyword()的使用
	@Test
	public void TestKeywordSearch() {
		SessionFactory sessionFactory = (SessionFactory) TestUtil.ctx
				.getBean("sessionFactory");
		Session session = sessionFactory.openSession();
		FullTextSession fullTextSession = Search.getFullTextSession(session);
		QueryBuilder qb = fullTextSession.getSearchFactory()
				.buildQueryBuilder().forEntity(Course.class).get();
		org.apache.lucene.search.Query query = qb.keyword()
				.onFields("describtion", "courseType.subject.name")
				.matching("教师测试").createQuery();

		// wrap Lucene query in a org.hibernate.Query
		org.hibernate.Query hibQuery = fullTextSession.createFullTextQuery(
				query, Course.class);

		// execute search
		List result = hibQuery.list();
		Iterator<Course> iterator = result.iterator();

		int i = 0;
		while (iterator.hasNext()) {

			Course s_book = iterator.next();
			System.out.println("第" + i + "条:");
			System.out.println(s_book.getDescribtion());
			System.out.println(s_book.getEp());
			i++;
		}
	}

	// 测试边界搜索,range()的使用
	@Test
	public void testRangeQuery() {
		SessionFactory sessionFactory = (SessionFactory) TestUtil.ctx
				.getBean("sessionFactory");
		Session session = sessionFactory.openSession();
		FullTextSession fullTextSession = Search.getFullTextSession(session);
		SearchFactory searchFactory = fullTextSession.getSearchFactory();

		// QueryBuilder知道用什么分析器，使用什么桥.辅助生产luceneQuery
		QueryBuilder queryBuilder = searchFactory.buildQueryBuilder()
				.forEntity(Course.class)
				// .overridesForField("history",
				// "stem_analyzer_definition")可以重写field使用的分析器
				.get();

		// 必须使用被索引实体类成员对应的类型，否则无法查询到结果
		Double begin = Double.parseDouble(0 + "");
		Double end = Double.parseDouble(300 + "");
		System.out.println(end);
		Query luceneQuery = queryBuilder.range().onField("ep").from(begin)
				.to(end).excludeLimit().createQuery();
		// 边界查询

		org.hibernate.Query fullTextQuery = fullTextSession
				.createFullTextQuery(luceneQuery);
		List result = fullTextQuery.list();// return a list of managed objects
		Iterator<Course> iterator = result.iterator();
		while (iterator.hasNext()) {
			Course s_book = iterator.next();
			System.out.println(s_book.getDescribtion());
			System.out.println(s_book.getEp());
		}
	}

	// 测试组合搜索,bool的使用
	@Test
	public void combiningQuery() {
		SessionFactory sessionFactory = (SessionFactory) TestUtil.ctx
				.getBean("sessionFactory");
		Session session = sessionFactory.openSession();
		FullTextSession fullTextSession = Search.getFullTextSession(session);
		SearchFactory searchFactory = fullTextSession.getSearchFactory();
		QueryBuilder queryBuilder = searchFactory.buildQueryBuilder()
				.forEntity(Course.class).get();
System.out.println(new Date(Long.parseLong("20130505")));
		Double begin = Double.parseDouble(0 + "");
		Double end = Double.parseDouble(300 + "");

		// 组合查询:bool().must()||等等

		System.out.println(new Date(System.currentTimeMillis()));
		Query luceneQuery = queryBuilder
				.bool()
				.must(queryBuilder.keyword().onField("describtion")
						.matching("测试").createQuery())
				.must(queryBuilder.range().onField("ep").from(begin).to(end)
						.excludeLimit().createQuery())
				.must(queryBuilder.range().onField("classTime")
						.from(new Date(Long.parseLong("20130505")))
						.to(new Date(System.currentTimeMillis()))
						.excludeLimit().createQuery()).createQuery();

		org.hibernate.Query fullTextQuery = fullTextSession
				.createFullTextQuery(luceneQuery);
		List result = fullTextQuery.list();// return a list of managed objects
		Iterator<Course> iterator = result.iterator();
		while (iterator.hasNext()) {
			Course s_book = iterator.next();
			System.out.println(s_book.getDescribtion());
			System.out.println(s_book.getEp());
		}

	}

	// 测试分页
	@Test
	public void testPagination() {
		SessionFactory sessionFactory = (SessionFactory) TestUtil.ctx
				.getBean("sessionFactory");
		Session session = sessionFactory.openSession();
		FullTextSession fullTextSession = Search.getFullTextSession(session);
		QueryBuilder qb = fullTextSession.getSearchFactory()
				.buildQueryBuilder().forEntity(Course.class).get();
		org.apache.lucene.search.Query query = qb.keyword()
				.onFields("describtion", "courseType.subject.name")
				.matching("数量").createQuery();

		// wrap Lucene query in a org.hibernate.Query
		org.hibernate.Query hibQuery = fullTextSession.createFullTextQuery(
				query, Course.class);

		hibQuery.setFirstResult(0);
		hibQuery.setMaxResults(5);

		// execute search
		List result = hibQuery.list();
		Iterator<Course> iterator = result.iterator();
		int i = 0;
		while (iterator.hasNext()) {
			System.out.println("第" + i + "条:");
			Course s_book = iterator.next();
			System.out.println(s_book.getDescribtion());
			System.out.println(s_book.getEp());
			i++;
		}
	}


	
	
	//测试关键字搜索
	@Test
	public void testSearchDao(){
		SearchDao searchDao = (SearchDao) TestUtil.ctx
		.getBean("searchDao");
		List result =searchDao.searchMatchedCourse(4, 0, "王苇棋");
		Iterator<Course> iterator = result.iterator();
		int i = 0;
		while (iterator.hasNext()) {
			System.out.println("第" + i + "条:");
			Course s_book = iterator.next();
			System.out.println("第" + i + "条:");
			System.out.println(s_book.getDescribtion());
			System.out.println(s_book.getEp());
			System.out.println(s_book.getUser().getName());
			System.out.println(s_book.getTeachStyle());
			i++;
		}
	}
	
	
	//测试高级搜索
	@Test
	public void testAdvanceDao(){
		SearchDao searchDao = (SearchDao) TestUtil.ctx
		.getBean("searchDao");
		
		//模拟数据
		String teacherName = "王苇棋";
		String subjectName = "语文";
		Double priceBegin = Double.parseDouble(0 + "");
		Double priceEnd = Double.parseDouble(300 + "");
		Date classTimeBegin = new Date(Long.parseLong("20130505"));
		Date classTimeEnd = new Date(System.currentTimeMillis());
		
		
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("teacherName", teacherName);
		params.put("subjectName", subjectName);
		params.put("priceBegin", priceBegin);
		params.put("priceEnd", priceEnd);
		params.put("classTimeBegin", classTimeBegin);
		params.put("classTimeEnd", classTimeEnd);
		
		List<Course> resultList =searchDao.searchMatchedCourse(4, 0, params);
		

		Iterator<Course> iterator = resultList.iterator();

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
	}
	
	// 测试排序功能
	@Test
	public void testSort() {
		SessionFactory sessionFactory = (SessionFactory) TestUtil.ctx
				.getBean("sessionFactory");
		Session session = sessionFactory.openSession();
		FullTextSession fullTextSession = Search.getFullTextSession(session);
		SearchFactory searchFactory = fullTextSession.getSearchFactory();
		QueryBuilder queryBuilder = searchFactory.buildQueryBuilder()
				.forEntity(Course.class).get();

		Double begin = Double.parseDouble(0 + "");
		Double end = Double.parseDouble(300 + "");
		Query luceneQuery = queryBuilder
				.bool()
				.must(queryBuilder.range().onField("ep").from(begin).to(end)
						.excludeLimit().createQuery()).createQuery();

		org.hibernate.search.FullTextQuery query = fullTextSession
				.createFullTextQuery(luceneQuery);

		//设置排序域
		org.apache.lucene.search.Sort sort = new Sort(new SortField("ep",
				SortField.DOUBLE));

		query.setSort(sort);



		List result = query.list();// return a list of managed objects
		Iterator<Course> iterator = result.iterator();
		int i = 0;
		while (iterator.hasNext()) {
			System.out.println("第" + i + "条:");
			Course s_book = iterator.next();
			System.out.println(s_book.getDescribtion());
			System.out.println(s_book.getEp());
			i++;
		}
	}
}
