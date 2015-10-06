package cn.edu.fjnu.cdio.dao.cmt;

import java.util.Map;

import org.hibernate.SQLQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import cn.edu.fjnu.cdio.dao.common.GenericDao;
import cn.edu.fjnu.cdio.model.cmt.JudgeTeacher;
import cn.edu.fjnu.cdio.utils.Page;


@Repository(value="judgeTeacherDao")
public class JudgeTeacherDaoImpl implements JudgeTeacherDao {
    
	private GenericDao genericDao = null;
	@Autowired
	public void setGenericDao(GenericDao genericDao) {
		this.genericDao = genericDao;
	}
	public GenericDao getGenericDao() {
		return genericDao;
	}
	
	/*
	 * 新增学生评价老师
	 * @param: JudgeTeacher对象
	 */
	@Override
	public void addJudge(JudgeTeacher judgeTeacher) {
		//保存评价
		getGenericDao().save(judgeTeacher);
	}
	@Override
	public <T> Page<T> queryJudgeTeacherHistoryPageByHQL(String hql, int pageSize,
			int index) {
		return genericDao.queryPageByHQL(hql, pageSize, index);
	}
	
	/*
	 * 根据ID取评价老师的内容
	 * @param: long judgeID 评价老师ID编号
	 * @return: JudgeTeacher对象
	 */
	@Override
	public JudgeTeacher getJudgeTeacherByJudgeID(long judgeID) {
		return (JudgeTeacher) genericDao.get(JudgeTeacher.class, judgeID);
	}
	
	/*
	 * 更新学生评价老师
	 * @param: String hql 更新语句
	 */
	@Override
	public void updateJudgeTeacher(JudgeTeacher judgeTeacher) {
		genericDao.update(judgeTeacher);

	}

}
