/**
 * 
 */
package cn.edu.fjnu.cdio.dao.stu;

import java.sql.SQLException;
import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.hibernate.Session;
import org.springframework.orm.hibernate3.HibernateCallback;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import cn.edu.fjnu.cdio.controller.stu.form.StuReport;
import cn.edu.fjnu.cdio.dao.common.GenericDaoImpl;

/**
 * @author 蔚强
 *
 */
@Transactional
@Repository(value=StuReportDao.SERVICE_NAME)
public class StuReportDaoImpl extends GenericDaoImpl implements StuReportDao {

	@Override
	public List<StuReport> findReprot() {
	/**
	 * SELECT  grade,COUNT(*) FROM t_user where grade is not null GROUP BY grade
	 
	 *hql
	 *select u.grade,count(*) from User u where u.grade is not null group by grade
	 *where u.grade is not null
	 */
		
		@SuppressWarnings({ "unchecked", "rawtypes" })
		List<StuReport> list=super.getHibernateTemplate().execute(new HibernateCallback(){

			@Override
			public Object doInHibernate(Session session)
					throws HibernateException, SQLException {
				String hql="select new cn.edu.fjnu.cdio.controller.stu.form.StuReport(u.grade,count(*)) from User u where u.grade is not null group by u.grade";
				Query query = session.createQuery(hql);
				return query.list();
			}
			
		});
		
		return list;
		
	}

}
