/**
 * 
 */
package cn.edu.fjnu.cdio.dao.trs;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import cn.edu.fjnu.cdio.dao.common.GenericDao;
import cn.edu.fjnu.cdio.model.common.Scope;
import cn.edu.fjnu.cdio.model.trs.CourseClassification;
/**
 * @author 曹欣炎
 * 
 *         简介:在线辅导系统知识点分类用例dao接口实现
 * 
 *         创建时间:
 * @version 2013-5-27 下午7:49:23
 */
@Repository(value = "courseClassificationDao")
public class CourseClassificationDaoImpl implements CourseClassificationDao {

	private GenericDao genericDao;

	@Autowired
	public GenericDao getGenericDao() {
		return genericDao;
	}

	public void setGenericDao(GenericDao genericDao) {
		this.genericDao = genericDao;
	}

	@Override
	public List<CourseClassification> getCourseClassificationByID(Long id) {
		// TODO Auto-generated method stub
		
		List<Scope> scopes=new ArrayList<Scope>();
		
		List<CourseClassification> courseClassifications=new ArrayList<CourseClassification>();
		
		scopes=genericDao.queryListByHQL("from Scope s where s.parentScope.scopeId="+id);
		
		for (Scope scope : scopes) {
			CourseClassification courseClassification=new CourseClassification();
			courseClassification.setId(scope.getScopeId().intValue());
			courseClassification.setName(scope.getName());
			courseClassification.setpId(scope.getParentScope().getScopeId().intValue());
			courseClassifications.add(courseClassification);
		}
		
		return courseClassifications;
	}
	
	

}
