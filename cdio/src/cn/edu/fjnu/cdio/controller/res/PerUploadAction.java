/**
 * 
 */
package cn.edu.fjnu.cdio.controller.res;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.struts2.ServletActionContext;

import cn.edu.fjnu.cdio.model.res.PerMark;
import cn.edu.fjnu.cdio.model.res.PerRes;
import cn.edu.fjnu.cdio.model.res.PerUpload;
import cn.edu.fjnu.cdio.model.res.ResDetail;
import cn.edu.fjnu.cdio.model.res.ResTag;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.service.res.PerUploadService;
import cn.edu.fjnu.cdio.service.res.ResDetailService;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author Administrator
 * 
 */
public class PerUploadAction {
	private List<ResDetail> reslist;
	private int index;
	private Page<ResDetail> page = new Page<ResDetail>();
	private ResDetail resdetail;
	@Resource
	private ResDetailService resService;

	@Resource
	private PerUploadService perUploadService;
	private static ResDetail resDetail;

	public ResDetail getresDetail() {
		return resDetail;
	}

	public void setresDetail(ResDetail resDetail) {
		this.resDetail = resDetail;
	}

	public List<ResDetail> getReslist() {
		return reslist;
	}

	public void setReslist(List<ResDetail> reslist) {
		this.reslist = reslist;
	}

	public int getIndex() {
		return index;
	}

	public void setIndex(int index) {
		this.index = index;
	}
	public ResDetail getResdetail() {
		return resdetail;
	}

	public void setResdetail(ResDetail resdetail) {
		this.resdetail = resdetail;
	}
	public Page<ResDetail> getPage() {
		return page;
	}

	public void setPage(Page<ResDetail> page) {
		this.page = page;
	}

	public String loadPerUpload() {
		HttpServletRequest request = ServletActionContext.getRequest();
		HttpSession session = request.getSession();
		User user=(User)session.getAttribute("user");
	
		page = perUploadService.loadPerUpload(user, index);
		String s = null;
		/*
		if(page!=null)
			s = "loadPerUpload_page";
		if(page==null)
			s = "noPerUpload_page";
			*/
		return s= "loadPerUpload_page";
	}
	
	public String deletePerUpload()
	{
		HttpServletRequest request = ServletActionContext.getRequest();
		HttpSession session = request.getSession();
		User user=(User)session.getAttribute("user");
		
		ResDetail detail=new ResDetail();
		long resId=this.resdetail.getResId();
		detail=resService.get(resId);
		PerUpload pu=new PerUpload();
		PerRes perRes=new PerRes();
		perRes.setResDetail(detail);
		perRes.setUser(user);
		pu.setPerRes(perRes);
		perUploadService.deleteUploadRes(pu);
		return "loadPerUpload_page";
	}

	public String getResDetail() throws IOException {
		resDetail = new ResDetail();

		HttpServletRequest request = ServletActionContext.getRequest();
		HttpServletResponse response = ServletActionContext.getResponse();

		resDetail = perUploadService.getResDetailByResId(Long.parseLong(request
				.getParameter("resId")));
		response.setCharacterEncoding("utf-8");
		PrintWriter out = response.getWriter();
		response.setContentType("text/xml");
		response.setHeader("Cache-Control", "no-cache");
		out.println("<detail>");
		out.println("<resName>" + resDetail.getResName() + "</resName>");
		out.println("<resDecription>" + resDetail.getResDecription()
				+ "</resDecription>");
		String[] resCatagory = resDetail.getResCategory().split("\\|");
		out.println("<catSchool>" + resCatagory[0] + "</catSchool>");
		out.println("<catGrade>" + resCatagory[1] + "</catGrade>");
		out.println("<catSub>" + resCatagory[2] + "</catSub>");
		String tags = new String();
		for (ResTag tag : resDetail.getResTags())
			tags = tags + tag.getTagContent() + "|";
		System.out.println(tags.substring(0, tags.length() - 1));
		out.println("<resTag>" + tags.substring(0, tags.length() - 1)
				+ "</resTag>");
		out.println("<resAuth>" + resDetail.getResAuth() + "</resAuth>");
		out.println("</detail>");
		out.flush();
		out.close();
		return null;
	}

	public String updateResDetail() {
		HttpServletRequest request = ServletActionContext.getRequest();
		if (resDetail == null) {
			resDetail = perUploadService.getResDetailByResId(Long
					.parseLong(request.getParameter("resId")));
		}
		if (null != request.getParameter("auth")) {
			resDetail
					.setResAuth(Integer.parseInt(request.getParameter("auth")));// 设置资料的权限
		}
		if (null != request.getParameter("fileId")) {
			resDetail.setResId(Long.parseLong(request.getParameter("fileId")));
		}
		if (null != request.getParameter("fileName")) {
			int endIndex = request.getParameter("fileName").lastIndexOf(".");
			if (endIndex == -1) {
				resDetail.setResName(request.getParameter("fileName"));
			} else {
				resDetail.setResName(request.getParameter("fileName")
						.substring(0, endIndex));
			}
		}
		if (null != request.getParameter("fileDes")) {
			resDetail.setResDecription(request.getParameter("fileDes"));// 设置资料的详细描述
		}
		Set<ResTag> tagsSet = new HashSet<ResTag>();
		if (null != request.getParameter("definedTags")) {
			String[] tags = request.getParameter("definedTags").split("\\|");
			for (int i = 0; i < tags.length; i++) {
				ResTag tag = new ResTag();
				tag.setTagContent(tags[i]);
				tagsSet.add(tag);
				tag.setResDetail(resDetail);
			}
			for (ResTag tag : resDetail.getResTags()) {
				System.out.println(tag.getTagContent());
			}
		}
		resDetail.setResTags(tagsSet);
		if (null != request.getParameter("fileCat")) {
			resDetail.setResCategory(request.getParameter("fileCat"));// 设置资料的分类
		}
		perUploadService.updateResDetail(resDetail);
		return null;

	}
}
