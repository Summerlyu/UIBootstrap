/**
 * 
 */
package cn.edu.fjnu.cdio.dao.coa;

import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import cn.edu.fjnu.cdio.dao.common.GenericDao;
import cn.edu.fjnu.cdio.model.common.CourseType;
import cn.edu.fjnu.cdio.model.common.Scope;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author  作者:刘南竹
 *
 * @version 创建时间：2013-5-29
 *
 * 功能说明:courseDao实现
 *
 * @version 修改时间：
 *
 * 修改原因：
 *
 */
@Repository(value = "coaCourseTypeDao")
public class CoaCourseTypeDaoImpl implements CoaCourseTypeDao {

	private GenericDao genericDao = null;

	public GenericDao getGenericDao() {
		return genericDao;
	}

	@Autowired
	public void setGenericDao(GenericDao genericDao) {
		this.genericDao = genericDao;
	}

	@Override
	public void save(CourseType courseType) {
		genericDao.save(courseType);
	}

	@Override
	public CourseType getCourseTypeById(Long typeId) {
		return (CourseType) genericDao.get(CourseType.class, typeId);
	}

	@Override
	public void delete(CourseType courseType) {
		genericDao.delete(courseType);
	}

	@Override
	public void update(CourseType courseType) {
		genericDao.update(courseType);
	}

	@Override
	public List<CourseType> loadlistedCourseTypes(Map<String, Object> params) {
		return genericDao.queryListByHQL(generateSQL(params), params);
	}

	@Override
	public Page<CourseType> loadPagedCourseTypes(int pageSize, int index,
			Map<String, Object> params) {
		return genericDao.queryPageByHQL(generateSQL(params), pageSize, index,
				params);
	}

	private String generateSQL(Map<String, Object> params) {

		String baseHQL = "from CourseType where 1=1";

		Iterator<String> iterator = params.keySet().iterator();
		while (iterator.hasNext()) {
			String key = (String) iterator.next();
			baseHQL += " and " + key + "=:" + key;
		}

		baseHQL += " order by typeId asc";

		System.out.println("SQL BY HELPER:" + baseHQL);

		return baseHQL;
	}

}
