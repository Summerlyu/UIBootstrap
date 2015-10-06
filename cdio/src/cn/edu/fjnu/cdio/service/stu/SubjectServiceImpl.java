/**
 * 
 */
package cn.edu.fjnu.cdio.service.stu;

import java.util.Map;

import javax.annotation.Resource;

import org.apache.poi.ss.formula.functions.T;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.edu.fjnu.cdio.dao.stu.SubjectDao;
import cn.edu.fjnu.cdio.dao.stu.TopiclibDao;
import cn.edu.fjnu.cdio.model.stu.Subject;
import cn.edu.fjnu.cdio.model.test.Question;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author 张长峰
 *
 */
@Service(value="subjectService")
@Transactional
public class SubjectServiceImpl implements SubjectService {
	private SubjectDao subjectDao;
	
	public SubjectDao getSubjectDao() {
		return subjectDao;
	}
	@Resource
	public void setSubjectDao(SubjectDao subjectDao) {
		this.subjectDao = subjectDao;
	}
	private TopiclibDao topiclibDao;
	
	public TopiclibDao getTopiclibDao() {
		return topiclibDao;
	}
	@Resource
	public void setTopiclibDao(TopiclibDao topiclibDao) {
		this.topiclibDao = topiclibDao;
	}
	/* (non-Javadoc)
	 * @see cn.edu.fjnu.cdio.service.stu.SubjectService#getQuestionList(int, int, java.util.Map)
	 */
	@Override
	public Page<T> getQuestionPage(int index, int pageSize,
			Map<String, Object> params) {
		// TODO Auto-generated method stub
		return subjectDao.getQuestionPage(index, pageSize, params);
	}

	/* (non-Javadoc)
	 * @see cn.edu.fjnu.cdio.service.stu.SubjectService#saveSubject(cn.edu.fjnu.cdio.model.stu.Subject)
	 */
	@Override
	public void saveSubject(Subject subject) {
		// TODO Auto-generated method stub
		subjectDao.saveSubject(subject);
		topiclibDao.increaseTopiclibCount(subject);
	}

	/* (non-Javadoc)
	 * @see cn.edu.fjnu.cdio.service.stu.SubjectService#getSubjectPage(int, int, java.util.Map)
	 */
	@Override
	public Page<T> getSubjectPage(int index, int pageSize,
			Map<String, Object> params) {
		// TODO Auto-generated method stub
		return subjectDao.getSubjectPage(index, pageSize, params);
	}

	/* (non-Javadoc)
	 * @see cn.edu.fjnu.cdio.service.stu.SubjectService#deleteSubject(cn.edu.fjnu.cdio.model.stu.Subject)
	 */
	@Override
	public void deleteSubject(Subject subject) {
		// TODO Auto-generated method stub
		subjectDao.deleteSubject(subject);
		topiclibDao.reduceTopiclibCount(subject);
	}
	@Override
	public void transferSubject(Map<String, Object> params) {
		// TODO Auto-generated method stub
		subjectDao.transferSubject(params);
		Subject subject=new Subject();
		subject.setTopiclibId((Integer) params.get("topiclibId"));
		topiclibDao.increaseTopiclibCount(subject);
		subject.setTopiclibId((Integer)params.get("fromtopiblibid"));
		topiclibDao.reduceTopiclibCount(subject);
	}
	@Override
	public void tagSubject(Map<String, Object> params) {
		// TODO Auto-generated method stub
		subjectDao.tagSubject(params);
	}

}
