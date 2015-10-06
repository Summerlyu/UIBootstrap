/**
 * 
 */
package cn.edu.fjnu.cdio.controller.bgm;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.ServletOutputStream;

import org.apache.commons.lang.xwork.StringUtils;
import org.apache.struts2.ServletActionContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import cn.edu.fjnu.cdio.model.bgm.Activity;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.service.bgm.ActivityService;
import cn.edu.fjnu.cdio.service.bgm.BgmQueryHelper;
import cn.edu.fjnu.cdio.service.common.UserService;
import cn.edu.fjnu.cdio.utils.MD5_Test;
import cn.edu.fjnu.cdio.utils.Page;
import com.opensymphony.xwork2.ActionSupport;

@Controller
@SuppressWarnings("serial")
public class UserAction extends ActionSupport {
	@Resource
	private UserService userService;
	@Resource
	private ActivityService activityService;

	private User user;

	private long userid;// 被选中的用户的id

	private Page<User> page = null;

	private BgmQueryHelper helper;

	private Long id;// 查询用字段：id

	private String name;// 查询用字段：姓名

	private String userName;// 查询用字段：用户名

	private List<Long> idList;// 被选中的用户id列表

	private File userPhoto;// 头像图片

	private String userPhotoFileName;// 头像图片名

	private String userPhotoContentType;// 头像图片类型

	public File getUserPhoto() {
		return userPhoto;
	}

	public void setUserPhoto(File userPhoto) {
		this.userPhoto = userPhoto;
	}

	public String getUserPhotoFileName() {
		return userPhotoFileName;
	}

	public void setUserPhotoFileName(String userPhotoFileName) {
		this.userPhotoFileName = userPhotoFileName;
	}

	public String getUserPhotoContentType() {
		return userPhotoContentType;
	}

	public void setUserPhotoContentType(String userPhotoContentType) {
		this.userPhotoContentType = userPhotoContentType;
	}

	public List<Long> getIdList() {
		return idList;
	}

	public void setIdList(List<Long> idList) {
		this.idList = idList;
	}

	public UserService getUserService() {
		return userService;
	}

	@Autowired
	public void setUserService(UserService userService) {
		this.userService = userService;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public long getUserid() {
		return userid;
	}

	public void setUserid(long userid) {
		this.userid = userid;
	}

	public Page<User> getPage() {
		return page;
	}

	public void setPage(Page<User> page) {
		this.page = page;
	}

	public BgmQueryHelper getHelper() {
		return helper;
	}

	public void setHelper(BgmQueryHelper helper) {
		this.helper = helper;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	/**
	 * 页面数据加载
	 */
	@Override
	public String execute() throws Exception {

		if (page == null) {
			try {
				page = new Page<User>();
				page.setIndex(1);
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		try {
			helper = new BgmQueryHelper();
			helper.setId(id);
			helper.setName(name);
			helper.setUserName(userName);
			page.setPageSize(10);
			page = userService.LoadAllUsers(page, helper);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return SUCCESS;
	}

	/**
	 * 跳转至新增用户页面
	 */
	public String input() {
		return "inputUI";
	}

	/**
	 * 
	 * @Title: add
	 * @Description: 新增用户
	 * @param @return
	 * @return String
	 * @throws
	 */
	public String add() {
		userService.addUser(user);

		Activity activity = new Activity();
		User user = (User) ServletActionContext.getRequest().getSession()
				.getAttribute("user");
		activity.setOperID(user.getId()); // 获取登录的ID
		activity.setOperObj("用户信息");
		activity.setStatus("成功");
		activity.setTime(new Timestamp(new Date().getTime()));
		activity.setOperName("添加");
		activityService.save(activity);

		return SUCCESS;
	}

	/**
	 * 
	 * @Title: get
	 * @Description: 获取被选中的用户信息，页面跳转
	 * @param @return
	 * @return String
	 * @throws
	 */
	public String get() {
		user = new User();
		user.setId(userid);
		user = userService.getUser(user);
		return SUCCESS;
	}

	/**
	 * 
	 * @Title: modify
	 * @Description: 用户信息修改，更新状态
	 * @param @return
	 * @return String
	 * @throws
	 */
	public String modify() {
		User dBUser = new User();
		dBUser.setId(user.getId());
		
		User modifiedUser = userService.getUser(dBUser);
		FileInputStream fis = null;
		try {
			if (userPhoto != null) {
				fis = new FileInputStream(userPhoto);
				byte[] userPic = new byte[fis.available()];
				fis.read(userPic);
				modifiedUser.setPicture(userPic);
				fis.close();
				userService.updateUser(modifiedUser);
			} else if (StringUtils.isNotEmpty(user.getPassword())) {
				modifiedUser.setPassword(MD5_Test.MD5(user.getPassword()));
				userService.updateUser(modifiedUser);
			} else {
//				this.user.setUserName(modifiedUser.getUserName());
//				this.user.setPassword(modifiedUser.getPassword());
//				this.user.setPicture(modifiedUser.getPicture());
//				userService.updateUser(this.user);
				
				if(null != user.getAge()){
					modifiedUser.setAge(user.getAge());
				}
				if(StringUtils.isNotEmpty(user.getSex())){
					modifiedUser.setSex(user.getSex());
				}
				if(StringUtils.isNotEmpty(user.getNation())){
					modifiedUser.setNation(user.getNation());
				}
				if(StringUtils.isNotEmpty(user.getNativePlace())){
					modifiedUser.setNativePlace(user.getNativePlace());
				}
				if(StringUtils.isNotEmpty(user.getPoliticsStatus())){
					modifiedUser.setPoliticsStatus(user.getPoliticsStatus());
				}
				if(StringUtils.isNotEmpty(user.getAddress())){
					modifiedUser.setAddress(user.getAddress());
				}
				if(StringUtils.isNotEmpty(user.getSchool())){
					modifiedUser.setSchool(user.getSchool());
				}
				if(StringUtils.isNotEmpty(user.getGrade())){
					modifiedUser.setGrade(user.getGrade());
				}
				if(StringUtils.isNotEmpty(user.getEduBackground())){
					modifiedUser.setEduBackground(user.getEduBackground());
				}
				if(StringUtils.isNotEmpty(user.getPhone())){
					modifiedUser.setPhone(user.getPhone());
				}
				if(StringUtils.isNotEmpty(user.getEmail())){
					modifiedUser.setEmail(user.getEmail());
				}
				if(StringUtils.isNotEmpty(user.getQqNum())){
					modifiedUser.setQqNum(user.getQqNum());
				}
				if(StringUtils.isNotEmpty(user.getHobbies())){
					modifiedUser.setHobbies(user.getHobbies());
				}
				if(StringUtils.isNotEmpty(user.getJob())){
					modifiedUser.setJob(user.getJob());
				}
				if(StringUtils.isNotEmpty(user.getWorkPlace())){
					modifiedUser.setWorkPlace(user.getWorkPlace());
				}
				if(StringUtils.isNotEmpty(user.getSelfIntroduction())){
					modifiedUser.setSelfIntroduction(user.getSelfIntroduction());
				}
				if(StringUtils.isNotEmpty(user.getComment())){
					modifiedUser.setComment(user.getComment());
				}
				
				userService.updateUser(modifiedUser);
			}

		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}

		Activity activity = new Activity();
		User user = (User) ServletActionContext.getRequest().getSession()
				.getAttribute("user");
		activity.setOperID(user.getId()); // 获取登录的ID
		activity.setOperObj("用户信息");
		activity.setStatus("成功");
		activity.setTime(new Timestamp(new Date().getTime()));
		activity.setOperName("更新");
		activityService.save(activity);

		return SUCCESS;
	}

	/**
	 * 
	 * @Title: delete
	 * @Description: 删除用户信息
	 * @param @return
	 * @return String
	 * @throws
	 */
	public String delete() {
		User u = new User();
		// System.out.println(idList.size());
		for (long id : idList) {
			u.setId(id);
			u = userService.getUser(u);
			userService.removeUser(u);
		}

		Activity activity = new Activity();
		User user = (User) ServletActionContext.getRequest().getSession()
				.getAttribute("user");
		activity.setOperID(user.getId()); // 获取登录的ID
		activity.setOperObj("用户信息");
		activity.setStatus("成功");
		activity.setTime(new Timestamp(new Date().getTime()));
		activity.setOperName("删除");
		activityService.save(activity);

		return SUCCESS;
	}

	/**
	 * 
	 * @Title: getpic
	 * @Description: 取得头像图片
	 * @param @return
	 * @return String
	 * @throws
	 */
	public String getpic() {
		byte[] userPic = userService.loadpic(this.user.getId());

		try {
			if (userPic == null || userPic.length == 0) {
				String realPath = ServletActionContext.getRequest()
						.getRealPath("/image/bgm/bgm001.jpg");// 真实物理磁盘路径
																// ，注意和网站路径区分。

				FileInputStream fis = new FileInputStream(realPath);

				userPic = new byte[fis.available()];
				fis.read(userPic);
				fis.close();
			}
			ServletActionContext.getResponse().setContentType("image/jpeg");
			ServletOutputStream sos = ServletActionContext.getResponse()
					.getOutputStream();
			sos.write(userPic);
			sos.flush();
			sos.close();
		} catch (IOException e) {
			e.printStackTrace();
		}

		return null;
	}

}
