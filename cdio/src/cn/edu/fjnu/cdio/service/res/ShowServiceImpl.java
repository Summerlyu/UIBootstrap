package cn.edu.fjnu.cdio.service.res;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.struts2.ServletActionContext;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.opensymphony.xwork2.ActionContext;

import cn.edu.fjnu.cdio.dao.res.ResDetailDao;
import cn.edu.fjnu.cdio.dao.res.ShowDao;
import cn.edu.fjnu.cdio.model.res.ResDetail;

/**
 * @className: ShowServiceImpl.java
 * 
 * @classDescription:
 * 
 * @author: Lily
 * 
 * @createTime: 2013-5-20 下午5:12:15
 */

@Transactional
@Service(value = "showService")
public class ShowServiceImpl implements ShowService {

	private ShowDao showDao;

	public ShowDao getShowDao() {
		return showDao;
	}

	public void setShowDao(ShowDao showDao) {
		this.showDao = showDao;
	}

	//getAll() : List 获得全部信息，返回值类型为List
	public List<ResDetail> getAll() {

		return showDao.getAll();
	}

	/**
	 * 获取项目的basePath,如：http://localhost:8080/MyOA/
	 */
	@Override
	//getBasePath() : String 获得项目的根路径（basePath），返回值类型为String
	public String getBasePath() {
		return getRequest().getScheme() + "://" + getRequest().getServerName()
				+ ":" + getRequest().getServerPort()
				+ getRequest().getContextPath();
	}

	/**
	 * 获取request对象
	 */
	public HttpServletRequest getRequest() {
		return (HttpServletRequest) this.getActionContext().get(
				ServletActionContext.HTTP_REQUEST);
	}

	/**
	 * 获取Struts上下文
	 * 
	 * @return
	 */
	public ActionContext getActionContext() {
		return ActionContext.getContext();
	}

}
