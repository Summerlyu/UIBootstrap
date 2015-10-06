/**
 * 学员系统dao层包
 */
package cn.edu.fjnu.cdio.dao.stu;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.poi.ss.formula.functions.T;
import org.hibernate.Query;
import org.springframework.stereotype.Repository;

import cn.edu.fjnu.cdio.dao.common.GenericDaoImpl;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.stu.Subject;
import cn.edu.fjnu.cdio.model.stu.Topiclib;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author zcf
 *@version [1,2012-5-20]
 *@see /cdio2010/src/cn/edu/fjnu/cdio/dao/stu/TopiclibDaoImpl.java
 *@since
 */
@Repository(value="topiclibDao")
public class TopiclibDaoImpl extends GenericDaoImpl  implements TopiclibDao {

	/* (non-Javadoc)
	 * @see cn.edu.fjnu.cdio.dao.stu.TopiclibDao#getTopiclibs(cn.edu.fjnu.cdio.model.stu.Student)
	 */
	@Override
	public List<Topiclib> getTopiclibs(User user) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("id", user.getId());
		return queryListByHQL("from Topiclib  where user_id=:id", params);
	}

	/* (non-Javadoc)
	 * @see cn.edu.fjnu.cdio.dao.stu.TopiclibDao#addTopiclib(cn.edu.fjnu.cdio.model.stu.Topiclib)
	 */
	@Override
	public void addTopiclib(Topiclib topiclib) {
		// TODO Auto-generated method stub
		save(topiclib);
	}

	/* (non-Javadoc)
	 * @see cn.edu.fjnu.cdio.dao.stu.TopiclibDao#deleteTopiclib(cn.edu.fjnu.cdio.model.stu.Topiclib)
	 */
	@Override
	public void deleteTopiclib(Topiclib topiclib) {
		// TODO Auto-generated method stub
		delete(topiclib);
	}

	@Override
	public void updateTopiclib(Topiclib topiclib) {
		// TODO Auto-generated method stub
		//update(topiclib);	String hql = "update TblName t set t.fldName = 'zhangsan' where t.fldId = ?";  
		String hql="update Topiclib t set t.name=?, t.description=? where t.id=?";
		Query query=getSessionFactory().openSession().createQuery(hql);
		query.setString(0, topiclib.getName());
		query.setString(1, topiclib.getDescription());
		query.setInteger(2, topiclib.getId());
		query.executeUpdate();
		//getSessionFactory().openSession().createQuery(hql).executeUpdate();
	}

	@Override
	public Topiclib getOnetopiclib(Topiclib topiclib) {
		// TODO Auto-generated method stub
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("id", topiclib.getId());
		return queryOneByHQL("from Topiclib where id=:id", params);
	}
	@Override
	public Page<T> getTopiclibsByPage(int index,int pageSize,Map<String, Object> params){
		String hql="from Topiclib  where user_id=:id";
		return super.queryPageByHQL(hql, pageSize, index, params);
	}
	@Override
	public List<Topiclib> getTopiclibs(Map<String, Object> params){		
		return queryListByHQL("from Topiclib where user_id=:id and id !=:topiclibId", params);
	}

	@Override
	public void increaseTopiclibCount(Subject subject) {
		// TODO Auto-generated method stub
		Topiclib topiclib=new Topiclib();
		topiclib.setId(subject.getTopiclibId());
		topiclib=getOnetopiclib(topiclib);
		Integer currentCount=topiclib.getCount();
		topiclib.setCount(currentCount+1);
		String hql="update Topiclib t set t.count=? where t.id=?";
		Query query=getSessionFactory().openSession().createQuery(hql);
		query.setInteger(0, topiclib.getCount());
		query.setInteger(1, topiclib.getId());
		query.executeUpdate();
	}

	@Override
	public void reduceTopiclibCount(Subject subject) {
		// TODO Auto-generated method stub
		Topiclib topiclib=new Topiclib();
		topiclib.setId(subject.getTopiclibId());
		topiclib=getOnetopiclib(topiclib);
		Integer currentCount=topiclib.getCount();
		topiclib.setCount(currentCount-1);
		String hql="update Topiclib t set t.count=? where t.id=?";
		Query query=getSessionFactory().openSession().createQuery(hql);
		query.setInteger(0, topiclib.getCount());
		query.setInteger(1, topiclib.getId());
		query.executeUpdate();
	}

}
