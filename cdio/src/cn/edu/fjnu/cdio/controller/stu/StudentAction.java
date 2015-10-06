/**
 * 学员系统controller包
 */
package cn.edu.fjnu.cdio.controller.stu;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.commons.io.FileUtils;
import org.apache.struts2.ServletActionContext;
import org.springframework.stereotype.Controller;

import com.opensymphony.xwork2.ActionContext;

import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.stu.Student;
import cn.edu.fjnu.cdio.service.stu.StudentService;

/**
 * 学员资料修改action
 * @author 张长峰
 * @version [1,2013-5-12]
 * @see /cdio2010/src/cn/edu/fjnu/cdio/controller/stu/BaseAction.java
 * @since
 */
@Controller(value="studentAction")
public class StudentAction extends BaseAction{

	
	private static final long serialVersionUID = 1L;
	
	@SuppressWarnings("deprecation")
	@Resource
	private StudentService studentService;
	private Student student;
	private String[] hobbies;
	private File photo;     //保存上传头像文件
	private String photoFileName;
	private String photoContentType;
	private User user;
	private String photoPath="/cdio2010/image/stu/stuPhoto/";
	private String msg;
	
	public String getPhotoPath() {
		return photoPath;
	}

	public void setPhotoPath(String photoPath) {
		this.photoPath = photoPath;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Student getStudent() {
		return student;
	}

	public void setStudent(Student student) {
		this.student = student;
	}
	
	public String[] getHobbies() {
		return hobbies;
	}

	public void setHobbies(String[] hobbies) {
		this.hobbies = hobbies;
	}

	public File getPhoto() {
		return photo;
	}

	public void setPhoto(File photo) {
		this.photo = photo;
	}

	public String getPhotoFileName() {
		return photoFileName;
	}

	public void setPhotoFileName(String photoFileName) {
		this.photoFileName = photoFileName;
	}

	public String getPhotoContentType() {
		return photoContentType;
	}

	public void setPhotoContentType(String photoContentType) {
		this.photoContentType = photoContentType;
	}
	
	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}

	public String toMain(){	
		return "mainFrame";
	}
	
	public String toStudent(){
		return "studentPage";
	}
	public String changeInfo(){	
		user=(User) request.getSession().getAttribute("user");	
		//studentService.
		user=studentService.studentInfoChange(user);
		if(user.getHobbies()!=null){//字符串转数组
			hobbies=user.getHobbies().toString().split("\\|");
		}	
		/*String path = ServletActionContext.getServletContext().getRealPath("/image/stu/stuPhoto");
		photoFileName=Long.toString(user.getId());
		File saveFile = new File(new File(path), photoFileName+".jpg");
		if(saveFile.exists()){
			photoPath="/cdio2010/image/stu/stuPhoto/"+user.getId()+".jpg";
		}else{
			photoPath="/cdio2010/image/stu/stuPhoto/default.jpg";
		}
		request.setAttribute("msg", msg);
		msg=null;*/
		request.setAttribute("msg", msg);
		msg=null;
		return "infoPage";
	}
	public String updateInfo(){
			
		/*if (photo != null) {
			String path = ServletActionContext.getServletContext().getRealPath("/image/stu/stuPhoto");
			photoFileName=Long.toString(user.getId());
			for (int i = 0; i < photo.length; i++) {		
				File saveFile = new File(new File(path), photoFileName+".jpg");
				if(saveFile.exists()){
					saveFile.delete();
				}
				if (!saveFile.getParentFile().exists()){
					saveFile.getParentFile().mkdirs();
				}
				try {
					FileUtils.copyFile(photo[i], saveFile);
				} catch (IOException e) {	
					ActionContext.getContext().put("result", "上传失败");
					e.printStackTrace();
				}	
				photoPath="/cdio2010/image/stu/stuPhoto/"+user.getId()+".jpg";
			}
		} */
		try {
			FileInputStream fis = null;
			fis = new FileInputStream(photo);
			byte[] coachPic = new byte[fis.available()];
			fis.read(coachPic);
			user.setPicture(coachPic);
			User newUser=(User) request.getSession().getAttribute("user");	
			newUser.setPicture(coachPic);
		} catch (Exception e) {
			// TODO: handle exception
		}
		
		
		user=(User) paraCmonvert(user, hobbies);//数组转为字符串	
		studentService.updateStudentInfo(user);
		msg="修改成功";
		return "updateInfo";
	}

}
