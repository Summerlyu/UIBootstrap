/**
 * 
 */
package cn.edu.fjnu.cdio.service.stu;

import java.sql.Timestamp;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import cn.edu.fjnu.cdio.controller.stu.form.UserForm;
import cn.edu.fjnu.cdio.dao.bgm.ActivityDao;
import cn.edu.fjnu.cdio.dao.stu.StuManageDao;
import cn.edu.fjnu.cdio.dao.stu.StumgroperlogDao;
import cn.edu.fjnu.cdio.model.bgm.Activity;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.stu.Stumgroperlog;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author 蔚强
 *
 */
@Repository(value=StuManageService.SERVICE_NAME)
@Transactional(readOnly=true)
public class StuManageServiceImpl implements StuManageService {

	/**
	 * 注入StuManageDao
	 */
	@Resource(name=StuManageDao.SERVICE_NAME)
	private StuManageDao stuManageDao;
	
	/**
	 * 注入日志记录Dao
	 */
	@Resource(name=StumgroperlogDao.SERVICE_NAME)
	private StumgroperlogDao stumgroperlogDao;
	
	/**
	 * 注入后台组的日志记录dao
	 */
	@Resource(name="activityDao")
	private ActivityDao activityDao;
	
	/**
	 * 保存一个学生
	 */
	@Transactional(isolation=Isolation.DEFAULT,propagation=Propagation.REQUIRED,readOnly=false)
	public void saveStudent(User currentUser,User user) {
		Activity activity=new Activity();
		try {
			stuManageDao.save(user);
			//记录操作日志
			Stumgroperlog stumgroperlog=new Stumgroperlog();
			stumgroperlog.setOperId(currentUser.getId());//操作者id
			stumgroperlog.setOperName(currentUser.getUserName());//操作者姓名
			stumgroperlog.setStuId(null);//要操作的学生id
			stumgroperlog.setStuName(user.getUserName());//要操作的学生姓名
			stumgroperlog.setTime(new Date());//操作时间
			stumgroperlog.setRemark("用户名为"+currentUser.getUserName()+"的操作员"+"添加了一个"+user.getUserName()+"学生");
			//保存操作者的日志
			stumgroperlogDao.save(stumgroperlog);
			
			//插入后台组的日志
			activity.setOperID(user.getId());
			activity.setOperName(currentUser.getUserName());
			activity.setOperObj("添加"+user.getUserName()+"的学生");
			activity.setStatus("成功");
			activity.setTime(new Timestamp(System.currentTimeMillis()));
		} catch (Exception e) {
			// TODO: handle exception
			activity.setStatus("失败");
		}finally{
			activityDao.save(activity);
		}
		
		
	}

	/**
	 * 删除学生信息根据id
	 */
	@Transactional(isolation=Isolation.DEFAULT,propagation=Propagation.REQUIRED,readOnly=false)
	public void deleteStudent(User currentUser,User user) {
		
		Activity activity=new Activity();
		try {
			stuManageDao.delete(user);
			
			//记录操作日志
			Stumgroperlog stumgroperlog=new Stumgroperlog();
			stumgroperlog.setOperId(currentUser.getId());//操作者id
			stumgroperlog.setOperName(currentUser.getUserName());//操作者姓名
			stumgroperlog.setStuId(user.getId());//要操作的学生id
			stumgroperlog.setStuName(user.getUserName());//要操作的学生姓名
			stumgroperlog.setTime(new Date());//操作时间
			stumgroperlog.setRemark("用户名为"+currentUser.getUserName()+"的操作员"+"删除了一个id为"+user.getId()+"学生");
			//保存操作者的日志
			stumgroperlogDao.save(stumgroperlog);
			
			//插入后台组的日志
			activity.setOperID(user.getId());
			activity.setOperName(currentUser.getUserName());
			activity.setOperObj("添加"+user.getUserName()+"的学生");
			activity.setStatus("成功");
			activity.setTime(new Timestamp(System.currentTimeMillis()));
			
		} catch (Exception e) {
			activity.setStatus("失败");
		}finally{
			activityDao.save(activity);
		}
	}

	public Page<User> queryByPage(int page, int pageSize) {
		return stuManageDao.queryUserPage(page, pageSize);
	}

	/**
	 * 更新学生信息
	 */
	@Transactional(isolation=Isolation.DEFAULT,propagation=Propagation.REQUIRED,readOnly=false)
	public void updateStudent(User currentUser,User user) {
		try {
			stuManageDao.update(user);
			//记录操作日志
			Stumgroperlog stumgroperlog=new Stumgroperlog();
			stumgroperlog.setOperId(currentUser.getId());//操作者id
			stumgroperlog.setOperName(currentUser.getUserName());//操作者姓名
			stumgroperlog.setStuId(user.getId());//要操作的学生id
			stumgroperlog.setStuName(user.getUserName());//要操作的学生姓名
			stumgroperlog.setTime(new Date());//操作时间
			stumgroperlog.setRemark("用户名为"+currentUser.getUserName()+"的操作员"+"更新了一个"+user.getUserName()+"学生");
			//保存操作者的日志
			stumgroperlogDao.save(stumgroperlog);
		} catch (Exception e) {
			// TODO: handle exception
		}
	}

	@Override
	public Page<User> queryByCondition(UserForm user) {

		StringBuilder sb=new StringBuilder("select new User(id,userName,grade,password,email) from User o where 1=1 and o.grade is not null");
		//and o.remark=:reamrk and o.time>:start and o.time<:end
		Page<User> list=null;
		Map<String,Object> map=new HashMap<String,Object>();
		//开始时间
		if(StringUtils.isNotBlank(user.getGrade())){
			sb.append(" and o.grade="+user.getGrade());
			//map.put("grade",user.getGrade());
		}
		
		if(StringUtils.isNotBlank(user.getPage())&&
				StringUtils.isNotBlank(user.getPageSize())){
			int page=Integer.parseInt(user.getPage());
			int pageSize=Integer.parseInt(user.getPageSize());
			
			list=stuManageDao.queryPageByHQL(sb.toString(), pageSize, page);
		}
		return list;
	}

}
