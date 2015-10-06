package cn.edu.fjnu.cdio.controller.mat;

import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.lang.annotation.Target;
import java.util.List;
import java.util.Map;

import javax.imageio.ImageIO;
import javax.servlet.ServletOutputStream;
import javax.swing.ImageIcon;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.mat.vo.MatInfoBean;
import cn.edu.fjnu.cdio.service.mat.MatchService;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;
import com.sun.star.io.IOException;

@Controller
public class MatchAction extends ActionSupport {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private List<Long> resultList;
	private Integer currentPage;

	public String getIconPath() {
		return iconPath;
	}

	public void setIconPath(String iconPath) {
		this.iconPath = iconPath;
	}

	private MatchService matchService;
	private List<MatInfoBean> infoList;
	private MatInfoBean detailInfo;
	private String iconPath;

	public MatInfoBean getDetailInfo() {
		return detailInfo;
	}

	public void setDetailInfo(MatInfoBean detailInfo) {
		this.detailInfo = detailInfo;
	}

	public List<MatInfoBean> getInfoList() {
		return infoList;
	}

	public void setInfoList(List<MatInfoBean> infoList) {
		this.infoList = infoList;
	}

	public Integer getCurrentPage() {
		return currentPage;
	}

	public void setCurrentPage(Integer currentPage) {
		this.currentPage = currentPage;
	}

	public List<Long> getResultList() {
		return resultList;
	}

	public void setResultList(List<Long> resultList) {
		this.resultList = resultList;
	}

	public MatchService getMatchService() {
		return matchService;
	}

	@Autowired
	public void setMatchService(MatchService matchService) {
		this.matchService = matchService;
	}

	public String match() throws Exception {
		// TODO Auto-generated method stub
		ActionContext ctx = ActionContext.getContext();
		User user = (User) ctx.getSession().get("user");

		try {
			resultList = matchService.match(user.getId());
		} catch (Exception e) {
			// TODO: handle exception
			return ERROR;
		}

		ctx.getSession().put("resultList", resultList);
		currentPage = 1;
		infoList = matchService.matchPage(resultList, currentPage);
		return SUCCESS;
	}

	@SuppressWarnings("unchecked")
	public String matchPage() throws Exception {
		ActionContext ctx = ActionContext.getContext();
		try {
			resultList = (List<Long>) ctx.getSession().get("resultList");
			Map<String, Object> parameter = ctx.getParameters();
			currentPage = Integer.parseInt(((String[]) parameter
					.get("currentPage"))[0]);
			currentPage = currentPage + 1;
			infoList = matchService.matchPage(resultList, currentPage);
			if (infoList.size() < 1) {
				currentPage = 1;
				infoList = matchService.matchPage(resultList, currentPage);
			}
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			return ERROR;
		}
		return SUCCESS;
	}

	public String detail() throws Exception {
		ActionContext ctx = ActionContext.getContext();
		Map<String, Object> parameter = ctx.getParameters();
		detailInfo = matchService.getDetail(Long
				.parseLong(((String[]) parameter.get("courseId"))[0]));
		BufferedImage img;
		iconPath = System.getProperty("user.dir");
		iconPath = iconPath.replace("bin", "webapps");
		String separator = System.getProperty("file.separator");
		iconPath += separator + "cdio2010" + separator + "image" + separator
				+ "mat";

		if (detailInfo.getPicture() != null) {
			ByteArrayInputStream in = new ByteArrayInputStream(
					detailInfo.getPicture());
			img = ImageIO.read(in);
			File icon = new File(iconPath + separator + "icon.jpg");
			ImageIO.write(img, "jpg", icon);
		}
		 else {
			ByteArrayOutputStream out = new ByteArrayOutputStream();
			try {
				BufferedImage bImage = ImageIO.read(new FileInputStream(
						iconPath + separator + "default_icon.jpg"));
				ImageIO.write(bImage, "jpg", out);
			} catch (Exception e) {
				e.printStackTrace();
			}
			byte[] tagInfo = out.toByteArray();

			ByteArrayInputStream in = new ByteArrayInputStream(tagInfo);
			img = ImageIO.read(in);
			File icon = new File(iconPath + separator + "icon.jpg");
			ImageIO.write(img, "jpg", icon);

		}
		return SUCCESS;
	}
}
