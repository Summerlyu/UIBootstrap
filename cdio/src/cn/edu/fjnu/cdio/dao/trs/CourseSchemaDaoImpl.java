/**
 * 
 */
package cn.edu.fjnu.cdio.dao.trs;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import cn.edu.fjnu.cdio.dao.common.GenericDao;
import cn.edu.fjnu.cdio.model.trs.CourseSchema;

/**
 * @author 曹欣炎
 *
 * 简介:在线辅导系统在线教学模式用例接口实现
 *
 * 创建时间:
 * @version 2013-5-15 下午7:22:01
 */
@Repository(value="courseSchemaDao")
public class CourseSchemaDaoImpl implements CourseSchemaDao {
	
	private GenericDao genericDao;
	
	@Autowired
	public GenericDao getGenericDao() {
		return genericDao;
	}

	public void setGenericDao(GenericDao genericDao) {
		this.genericDao = genericDao;
	}
	
	/* (non-Javadoc)
	 * @see cn.edu.fjnu.cdio.dao.trs.CourseSchemaDao#addCourseSchema(cn.edu.fjnu.cdio.model.trs.CourseSchema)
	 */
	@Override
	public void addCourseSchema(CourseSchema courseSchema) {
		// TODO Auto-generated method stub
		genericDao.save(courseSchema);
	}

	/* (non-Javadoc)
	 * @see cn.edu.fjnu.cdio.dao.trs.CourseSchemaDao#updateCourseSchema(cn.edu.fjnu.cdio.model.trs.CourseSchema)
	 */
	@Override
	public void updateCourseSchema(CourseSchema courseSchema) {
		// TODO Auto-generated method stub
		genericDao.update(courseSchema);
	}

	/* (non-Javadoc)
	 * @see cn.edu.fjnu.cdio.dao.trs.CourseSchemaDao#deleteCourseSchema(java.lang.Long)
	 */
	@Override
	public void deleteCourseSchema(Long id) {
		// TODO Auto-generated method stub
		CourseSchema courseSchema=genericDao.getHibernateTemplate().load(CourseSchema.class, id);
		genericDao.delete(courseSchema);
	}

	/* (non-Javadoc)
	 * @see cn.edu.fjnu.cdio.dao.trs.CourseSchemaDao#loadAll()
	 */
	@Override
	public List<CourseSchema> loadAll() {
		// TODO Auto-generated method stub
		String hql="from CourseSchema c order by c.schemaID desc";
		return genericDao.queryListByHQL(hql);
	}

	@Override
	public CourseSchema getSchemaById(Long schemaID) {
		// TODO Auto-generated method stub
		return (CourseSchema) genericDao.get(CourseSchema.class, schemaID);
	}

}
