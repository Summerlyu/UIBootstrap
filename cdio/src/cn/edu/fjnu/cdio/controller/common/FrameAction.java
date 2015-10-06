package cn.edu.fjnu.cdio.controller.common;

import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;

import javax.imageio.ImageIO;
import javax.servlet.ServletOutputStream;

import org.apache.struts2.ServletActionContext;
import org.springframework.beans.factory.annotation.Autowired;

import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.service.common.UserService;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

@SuppressWarnings("serial")
public class FrameAction extends ActionSupport {
	private String userName;

	private User userInfo; // 使用json返回对象
	BufferedImage img;

	public BufferedImage getImg() {
		return img;
	}

	public void setImg(BufferedImage img) {
		this.img = img;
	}

	private UserService userService;

	public User getUserInfo() {
		return userInfo;
	}

	public void setUserInfo(User userInfo) {
		this.userInfo = userInfo;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	@Autowired
	public void setUserService(UserService userService) {
		this.userService = userService;
	}

	public String getFrame() throws Exception {

		User sessionUser = (User) ActionContext.getContext().getSession()
				.get("user");
		if (sessionUser != null && userInfo != null) {
			InputStream buffin = new ByteArrayInputStream(
					sessionUser.getPicture());
			img = ImageIO.read(buffin);
			if (sessionUser.getUserName().equals(userInfo.getUserName())) {
				System.out.println("成功");
				ActionContext.getContext().put("user", sessionUser);

				return SUCCESS;
			} else {
				System.out.println("失败");
				return "noPermission";
			}
		} else if (sessionUser != null) {
			ActionContext.getContext().put("user", sessionUser);
			System.out.println("成功");
			return SUCCESS;
		} else {
			System.out.println("失败");
			return "noPermission";
		}

		// User user = new User();
		// user.setUserName(userInfo.getUserName());
		// user = userService.getUserByUserName(user);
		// ActionContext.getContext().put("user", user);
		//
		// HttpServletRequest request = ServletActionContext.getRequest();
		// HttpSession session = request.getSession();
		// session.setAttribute("user", user);
		// return SUCCESS;
	}

	public String getHeadPic() {
		User sessionUser = (User) ActionContext.getContext().getSession()
				.get("user");
		byte[] pic = sessionUser.getPicture();

		try {
			if (pic == null || pic.length == 0) {

				String realPath = ServletActionContext.getRequest()
						.getRealPath("/image/common/user.jpg"); // 真实物理磁盘路径
																// ，注意和网站路径区分。

				FileInputStream fis = new FileInputStream(realPath);

				pic = new byte[fis.available()];
				fis.read(pic);
				fis.close();
			}

			ServletActionContext.getResponse().setContentType("image/jpeg");
			ServletOutputStream sos;
			sos = ServletActionContext.getResponse().getOutputStream();
			sos.write(pic);
			sos.flush();
			sos.close();
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			return SUCCESS;
		}

	}

}
