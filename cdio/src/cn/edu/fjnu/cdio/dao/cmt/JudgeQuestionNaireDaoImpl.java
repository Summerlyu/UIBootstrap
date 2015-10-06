package cn.edu.fjnu.cdio.dao.cmt;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import cn.edu.fjnu.cdio.dao.common.GenericDao;
import cn.edu.fjnu.cdio.model.cmt.JudgeQuestion;
import cn.edu.fjnu.cdio.utils.Page;


@Repository(value="judgeQuestionNaireDao")
public class JudgeQuestionNaireDaoImpl implements JudgeQuestionNaireDao {
    
	private GenericDao genericDao = null;
	@Autowired
	public void setGenericDao(GenericDao genericDao) {
		this.genericDao = genericDao;
	}
	public GenericDao getGenericDao() {
		return genericDao;
	}
	
	/*
	 * 新增评价内容
	 * @param: judgeQuestion对象
	 */
	@Override
	public void addJudgeQuestion(JudgeQuestion judgeQuestion) {
		genericDao.save(judgeQuestion);
	}
	
	/*
	 * 载入评价内容页面
	 * @param: String hql 查询语句
	 * @param: int pageSize 每页大小
	 * @param: int index 第几页
	 * @return: Page 分页查询结果
	 */
	@Override
	public Page loadQuestionPage(String hql,int pageSize,int index) {
		return genericDao.queryPageByHQL(hql, pageSize, index);
	}
	
	/*
	 * 删除评价内容
	 * @param:  Integer questionId  评价内容ID
	 */
	@Override
	public void deleteJudgeQuestion(Integer questionId) {
		JudgeQuestion judgeQuestion = genericDao.getHibernateTemplate().get(JudgeQuestion.class, questionId);
		genericDao.delete(judgeQuestion);
	}
	
	/*
	 * 根据ID号获取评价内容
	 * @param:  Integer questionId  评价内容ID
	 * @return: JudgeQuestion对象
	 */
	@Override
	public JudgeQuestion getJudgeQuestionById(Integer questionId) {
	    return (JudgeQuestion)genericDao.getHibernateTemplate().get(JudgeQuestion.class, questionId);
		
	}
	
	/*
	 * 更新评价内容
	 * @param: judgeQuestion对象
	 */
	@Override
	public void updateJudgeQuestion(JudgeQuestion judgeQuestion) {
		genericDao.update(judgeQuestion);
		
	}

}
