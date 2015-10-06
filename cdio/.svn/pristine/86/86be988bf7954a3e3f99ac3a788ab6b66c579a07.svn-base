package cn.edu.fjnu.cdio.dao.cmt;

import java.util.List;

import org.hibernate.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import cn.edu.fjnu.cdio.dao.common.GenericDao;
import cn.edu.fjnu.cdio.model.cmt.JudgeQuestion;
import cn.edu.fjnu.cdio.model.cmt.JudgeStudent;


@Repository(value="judgeStudentDao")
public class JudgeStudentDaoImpl implements JudgeStudentDao {
 
	private GenericDao genericDao = null;
	@Autowired
	public void setGenericDao(GenericDao genericDao) {
		this.genericDao = genericDao;
	}
	public GenericDao getGenericDao() {
		return genericDao;
	}
	
	/*
	 * 新增评价学生
	 * @param: JudgeStudent对象
	 */
	@Override
	public void addJudge(JudgeStudent judgeStudent) {
		getGenericDao().save(judgeStudent);	
	}
	
	
	/*
	 * 载入评价内容集合
	 * @return: 评价内容集合
	 */
	@Override
	public List<JudgeQuestion> loadJudgeQuestion() {
		return genericDao.getHibernateTemplate().loadAll(JudgeQuestion.class);
	}
	@Override
	public List<String> getJudgedStudent(String hql) {
		Query query = genericDao.getSessionFactory().getCurrentSession().createQuery(hql);
		List<String> list = query.list();   
		return list;
	}
}
