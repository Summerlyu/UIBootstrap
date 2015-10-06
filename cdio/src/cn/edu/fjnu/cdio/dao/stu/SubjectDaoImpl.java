/**
 * 
 */
package cn.edu.fjnu.cdio.dao.stu;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.poi.ss.formula.functions.T;
import org.hibernate.Query;
import org.springframework.stereotype.Repository;

import cn.edu.fjnu.cdio.dao.common.GenericDaoImpl;
import cn.edu.fjnu.cdio.model.stu.Subject;
import cn.edu.fjnu.cdio.model.test.Question;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author zcf
 * @version [2013-5-27]
 */
@Repository(value="subjectDao")
public class SubjectDaoImpl extends GenericDaoImpl implements SubjectDao {

	/* (non-Javadoc)
	 * @see cn.edu.fjnu.cdio.dao.stu.SubjectDao#saveSubject(cn.edu.fjnu.cdio.model.stu.Subject)
	 */
	@Override
	public void saveSubject(Subject subject) {
		// TODO Auto-generated method stub
		save(subject);
	}

	/* (non-Javadoc)
	 * @see cn.edu.fjnu.cdio.dao.stu.SubjectDao#deleteSubject(cn.edu.fjnu.cdio.model.stu.Subject)
	 */
	@Override
	public void deleteSubject(Subject subject) {
		// TODO Auto-generated method stub
		delete(subject);
	}

	/* (non-Javadoc)
	 * @see cn.edu.fjnu.cdio.dao.stu.SubjectDao#getSubjectList(cn.edu.fjnu.cdio.model.stu.Subject)
	 *//*
	@Override
	public List<Subject> getSubjectList(Subject subject) {
		// TODO Auto-generated method stub
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("id", subject.getTopiclibId());
		return queryListByHQL("from Subject where topiclibId=:id", params);		 
	}
*/
	/* (non-Javadoc)
	 * @see cn.edu.fjnu.cdio.dao.stu.SubjectDao#getQuestionList(cn.edu.fjnu.cdio.model.test.Question)
	 *//*
	@Override
	public List<Question> getQuestionList(Question question) {
		/*Map<String, Object> params = new HashMap<String, Object>();
		params.put("id", subject.getTopiclibId());
		return queryOneByHQL("from Subject where topiclibId=:id", params);*/	
		//return queryListByHQL("from Question");
	//}
	/**
	 * 分页subject
	 * @param index
	 * @param pageSize
	 * @param params
	 * @return
	 */
	public Page<T> getSubjectPage(int index,int pageSize,Map<String, Object>params){
		return queryPageByHQL("select q.queId,q.title,q.A,q.B,q.C,q.D,q.answer,q.analysis,q.diffiLevel,q.keyword,q.createTime,q.testCnt,q.rightCnt,s.id,s.time,s.flag,s.topiclibId  from Question as q,Subject as s where s.questionId=q.queId and s.topiclibId=:topiclibId", pageSize, index, params);
		//                               0        1     2   3   4    5   6         7            8           9          10         11         12      13    14     15        16        
		//return queryPageByHQL("select q.queId,q.title,q.A,q.B,q.C,q.D,q.E,q.answer,q.analysis,q.diffiLevel,q.keyword,q.createTime,q.testCnt,q.rightCnt,s.id,s.time,s.flag,s.topiclibId  from Question as q,Subject as s where s.questionId=q.queId and s.topiclibId=:topiclibId", pageSize, index);
	}
	/**
	 * 分页question
	 * @param index
	 * @param pageSize
	 * @param params
	 * @return
	 */
	public Page<T> getQuestionPage(int index,int pageSize,Map<String, Object> params){
		return queryPageByHQL(" from Question as q where q.queId not in(select s.questionId from Subject as s)", pageSize, index);
		//return queryPageByHQL("select queId,title,A,B,C,D,answer,analysis,diffiLevel,keyword,createTime,testCnt,rightCnt from Question as q where q.queId not in(select s.questionId from Subject as s as q,CourseType as c,User as u where q.courseType=c q.creator=u and q.queId not in(select questionId from Subject)", pageSize, index, params);
	}//select queId,title,A,B,C,D,answer,analysis,diffiLevel,keyword,createTime,testCnt,rightCnt from Question as q where q.queId not in(select s.questionId from Subject as s)

	@Override
	public void transferSubject(Map<String, Object> params) {
		// TODO Auto-generated method stub
		String hql="update Subject s set s.topiclibId=? where s.id=?";
		Query query=getSessionFactory().openSession().createQuery(hql);
		query.setInteger(0, (Integer) params.get("topiclibId"));
		query.setInteger(1,  (Integer) params.get("id"));		
		query.executeUpdate();
	}
	@Override
	/**
	 * 
	 */
	public void tagSubject(Map<String, Object> params) {
		// TODO Auto-generated method stub
		String hql="update Subject s set s.flag=? where s.id=?";
		Query query=getSessionFactory().openSession().createQuery(hql);
		query.setString(0, (String) params.get("flag"));
		query.setInteger(1,  (Integer) params.get("id"));		
		query.executeUpdate();
	}

}
