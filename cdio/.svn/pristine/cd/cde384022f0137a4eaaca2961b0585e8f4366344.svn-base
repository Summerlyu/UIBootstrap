/**
 * 
 */
package cn.edu.fjnu.cdio.controller.coa;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.List;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.struts2.ServletActionContext;
import org.springframework.beans.factory.annotation.Autowired;

import cn.edu.fjnu.cdio.exceptions.ApplicationException;
import cn.edu.fjnu.cdio.model.coa.Area;
import cn.edu.fjnu.cdio.model.coa.City;
import cn.edu.fjnu.cdio.model.coa.Province;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.service.coa.PCDService;
import cn.edu.fjnu.cdio.service.common.UserService;

import com.opensymphony.xwork2.ActionSupport;

/**
 * @author user
 * 
 */
@SuppressWarnings("serial")
public class CoachAction extends ActionSupport {

	private User coach;
	private File coachPhoto;
	private String coachPhotoFileName;
	private String coacjPhotoContentType;
	private Long coachID;
	private UserService userService;
	private PCDService pCDService;

	// ajax传过来的所选id值
	private String provinceIndex;
	private String cityIndex;
	private String areaIndex;
	private List<Province> provinceList;
	private List<City> cityList;
	private List<Area> areaList;

	private String province;
	private String city;
	private String area;
	
	private String work;
	
	public String getWork() {
		return work;
	}

	public void setWork(String work) {
		this.work = work;
	}

	public String getProvince() {
		return province;
	}

	public void setProvince(String province) {
		this.province = province;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getArea() {
		return area;
	}

	public void setArea(String area) {
		this.area = area;
	}

	public PCDService getpCDService() {
		return pCDService;
	}

	@Autowired
	public void setpCDService(PCDService pCDService) {
		this.pCDService = pCDService;
	}

	public String getProvinceIndex() {
		return provinceIndex;
	}

	public void setProvinceIndex(String provinceIndex) {
		this.provinceIndex = provinceIndex;
	}

	public String getCityIndex() {
		return cityIndex;
	}

	public void setCityIndex(String cityIndex) {
		this.cityIndex = cityIndex;
	}

	public String getAreaIndex() {
		return areaIndex;
	}

	public void setAreaIndex(String areaIndex) {
		this.areaIndex = areaIndex;
	}

	public List<Province> getProvinceList() {
		return provinceList;
	}

	public void setProvinceList(List<Province> provinceList) {
		this.provinceList = provinceList;
	}

	public List<City> getCityList() {
		return cityList;
	}

	public void setCityList(List<City> cityList) {
		this.cityList = cityList;
	}

	public List<Area> getAreaList() {
		return areaList;
	}

	public void setAreaList(List<Area> areaList) {
		this.areaList = areaList;
	}

	public User getCoach() {
		return coach;
	}

	public void setCoach(User coach) {
		this.coach = coach;
	}

	public File getCoachPhoto() {
		return coachPhoto;
	}

	public void setCoachPhoto(File coachPhoto) {
		this.coachPhoto = coachPhoto;
	}

	public String getCoachPhotoFileName() {
		return coachPhotoFileName;
	}

	public void setCoachPhotoFileName(String coachPhotoFileName) {
		this.coachPhotoFileName = coachPhotoFileName;
	}

	public String getCoacjPhotoContentType() {
		return coacjPhotoContentType;
	}

	public void setCoacjPhotoContentType(String coacjPhotoContentType) {
		this.coacjPhotoContentType = coacjPhotoContentType;
	}

	public UserService getUserService() {
		return userService;
	}

	@Autowired
	public void setUserService(UserService userService) {
		this.userService = userService;
	}

	public Long getCoachID() {
		return coachID;
	}

	public void setCoachID(Long coachID) {
		this.coachID = coachID;
	}

	public String excute() {
		return SUCCESS;
	}

	public String input() {
		
		User newcoach = new User();
		HttpServletRequest  request = ServletActionContext.getRequest();
		HttpSession  session = request.getSession();
		newcoach = (User) session.getAttribute("user");
		provinceList = pCDService.loadProvince();
		cityList = pCDService.loadCity("110000");
		areaList = pCDService.loadArea("110100");
		if(newcoach.getIsverify_C()==1){
			return "inputPage";
		}
		else{
			this.addActionMessage("资格认证未完成或审核未通过，不能进行此操作！");
			return  "gotoHomePage";
		}
		
	}

	public String create() throws IOException {

		User newCoach = new User();
		HttpServletRequest request = ServletActionContext.getRequest();
		HttpSession session = request.getSession();
		newCoach = (User) session.getAttribute("user");

		FileInputStream fis = null;

		String workPlace = province + "," + city + "," + area;
		coach.setWorkPlace(workPlace);

		try {
			if (coachPhoto != null){
				fis = new FileInputStream(coachPhoto);
				byte[] coachPic = new byte[fis.available()];
				fis.read(coachPic);
				this.coach.setPicture(coachPic);
			}
			else{
				
				String realPath = ServletActionContext.getRequest()
						.getRealPath("/image/coa/head.jpg"); // 真实物理磁盘路径
																// ，注意和网站路径区分。

				fis = new FileInputStream(realPath);

				byte[] coachPic = new byte[fis.available()];
				fis.read(coachPic);
				this.coach.setPicture(coachPic);				
			}

			newCoach.setPicture(coach.getPicture());

			if (coach.getName() != null || !("".equals(coach.getName()))){
				newCoach.setName(coach.getName());
			}
			if (coach.getLevel() != null || !("".equals(coach.getLevel()))){
				newCoach.setLevel(coach.getLevel());
			}
			if (coach.getNativePlace() != null|| !("".equals(coach.getNativePlace()))){
				newCoach.setNativePlace(coach.getNativePlace());
			}
			if (coach.getNation() != null || !("".equals(coach.getNation()))){
				newCoach.setNation(coach.getNation());
			}
			if (coach.getSex() != null || !("".equals(coach.getSex()))){
				newCoach.setSex(coach.getSex());
			}
			if (coach.getBirth() != null || !("".equals(coach.getBirth()))){
				newCoach.setBirth(coach.getBirth());
			}
			if (coach.getPoliticsStatus() != null|| !("".equals(coach.getPoliticsStatus()))){
				newCoach.setPoliticsStatus(coach.getPoliticsStatus());
			}
			if (coach.getJob() != null || !("".equals(coach.getJob()))){
				newCoach.setJob(coach.getJob());
			}
			if (coach.getWorkPlace() != null|| !("".equals(coach.getWorkPlace()))){
				newCoach.setWorkPlace(coach.getWorkPlace());
			}
			if (coach.getComment() != null || !("".equals(coach.getComment()))){
				newCoach.setComment(coach.getComment());
			}

			userService.updateUser(newCoach);

		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			try {			
					fis.close();
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		coachID = coach.getId();
		return "listcoachAction";
	}

	public String forupdate() {
		HttpServletRequest request = ServletActionContext.getRequest();
		HttpSession session = request.getSession();
		coach = (User) session.getAttribute("user");	
		
		if(coach.getWorkPlace()!=null&& !("".equals(coach.getWorkPlace()))){
		
		String workPlace=coach.getWorkPlace();
		
		String[] temp=workPlace.split(",");
		
		province=temp[0];
		city=temp[1];
		area=temp[2];

		provinceList = pCDService.loadProvince();
		cityList = pCDService.loadCity(province);
		areaList = pCDService.loadArea(city);
		}

		return "updatecoachPage";
	}

	public String update() {
		User newCoach = new User();
		HttpServletRequest request = ServletActionContext.getRequest();
		HttpSession session = request.getSession();
		newCoach = (User) session.getAttribute("user");

		FileInputStream fis = null;

		String workPlace = province + "," + city + "," + area;
		coach.setWorkPlace(workPlace);

		try {
			if (coachPhoto != null) {
				fis = new FileInputStream(coachPhoto);
				byte[] coachPic = new byte[fis.available()];
				fis.read(coachPic);
				this.coach.setPicture(coachPic);
				newCoach.setPicture(coach.getPicture());
			}
			
			if (coach.getName() != null || !("".equals(coach.getName()))){
				newCoach.setName(coach.getName());
			}
			if (coach.getLevel() != null || !("".equals(coach.getLevel()))){
				newCoach.setLevel(coach.getLevel());
			}
			if (coach.getNativePlace() != null|| !("".equals(coach.getNativePlace()))){
				newCoach.setNativePlace(coach.getNativePlace());
			}
			if (coach.getNation() != null || !("".equals(coach.getNation()))){
				newCoach.setNation(coach.getNation());
			}
			if (coach.getSex() != null || !("".equals(coach.getSex()))){
				newCoach.setSex(coach.getSex());
			}
			if (coach.getBirth() != null || !("".equals(coach.getBirth()))){
				newCoach.setBirth(coach.getBirth());
			}
			if (coach.getPoliticsStatus() != null|| !("".equals(coach.getPoliticsStatus()))){
				newCoach.setPoliticsStatus(coach.getPoliticsStatus());
			}
			if (coach.getJob() != null || !("".equals(coach.getJob()))){
				newCoach.setJob(coach.getJob());
			}

			newCoach.setWorkPlace(workPlace);

			if (coach.getComment() != null || !("".equals(coach.getComment()))){
				newCoach.setComment(coach.getComment());
			}

			userService.updateUser(newCoach);
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			try {
				if (fis != null) {
					fis.close();
				}
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		return "listcoachAction";
	}

	public String getpic() {

		byte[] coachPic = userService.loadpic(this.coach.getId());

		try {
			if (coachPic == null || coachPic.length == 0) {

				String realPath = ServletActionContext.getRequest()
						.getRealPath("/image/coa/head.jpg"); // 真实物理磁盘路径
																// ，注意和网站路径区分。

				FileInputStream fis = new FileInputStream(realPath);

				coachPic = new byte[fis.available()];
				fis.read(coachPic);
				fis.close();
			}

			ServletActionContext.getResponse().setContentType("image/jpeg");
			ServletOutputStream sos = ServletActionContext.getResponse()
					.getOutputStream();
			sos.write(coachPic);
			sos.flush();
			sos.close();
		} catch (IOException e) {
			e.printStackTrace();
		}

		return null;
	}

	public String load() {
		HttpServletRequest request = ServletActionContext.getRequest();
		HttpSession session = request.getSession();
		coach = (User) session.getAttribute("user");
		
		coach=userService.getCoachByID(coach.getId());
		
		if(coach.getWorkPlace()!=null&& !("".equals(coach.getWorkPlace()))){
			String[] temp=coach.getWorkPlace().split(",");
			work=pCDService.selectProvince(temp[0]).getPname()+","+pCDService.selectCity(temp[1]).getCname()+"."+pCDService.selectArea(temp[2]).getAname();
		}
		
		return "showcoachPage";
	}

	// ajax返回更新的city列表
	public String cityLinkage() {

		try {
			cityList = pCDService.loadCity(provinceIndex);
		} catch (ApplicationException e) {
			return SUCCESS;
		}
		return SUCCESS;
	}

	// ajax返回更新的area列表
	public String areaLinkage() {

		try {
			areaList = pCDService.loadArea(cityIndex);
		} catch (ApplicationException e) {

			return SUCCESS;
		}
		return SUCCESS;
	}

}
