/**
 * 
 */
package cn.edu.fjnu.cdio.dao.stu;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import cn.edu.fjnu.cdio.dao.common.GenericDaoImpl;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.stu.Freetime;


/**
 * @author zcf
 *
 */
@Repository(value="freeTimeDao")
public class FreeTimeDaoImpl extends GenericDaoImpl implements FreeTimeDao {
	
	/* (non-Javadoc)
	 * @see cn.edu.fjnu.cdio.dao.stu.FreeTimeDao#getFreetimes(cn.edu.fjnu.cdio.model.stu.Student)
	 */
	@Override
	public List<Freetime> getFreetimes(User user) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("id", user.getId());
		params.put("time", new Date());
		return queryListByHQL("from Freetime where user_id=:id and beginTime>:time",params);
	}

	/** (non-Javadoc)
	 * @see cn.edu.fjnu.cdio.dao.stu.FreeTimeDao#addFreetime(cn.edu.fjnu.cdio.model.stu.Freetime)
	 */
	@Override
	public void addFreetime(Freetime freetime) {
		save(freetime);
	}

	/* (non-Javadoc)
	 * @see cn.edu.fjnu.cdio.dao.stu.FreeTimeDao#delFreetime(cn.edu.fjnu.cdio.model.stu.Freetime)
	 */
	@Override
	public void delFreetime(Freetime freetime) {
		// TODO Auto-generated method stub
		delete(freetime);
	}

}
