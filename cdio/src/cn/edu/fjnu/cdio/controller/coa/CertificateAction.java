/**
 * 
 */
package cn.edu.fjnu.cdio.controller.coa;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.sql.Date;
import java.util.Properties;

import javax.mail.Address;
import javax.mail.BodyPart;
import javax.mail.Message;
import javax.mail.Multipart;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.struts2.ServletActionContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;

import cn.edu.fjnu.cdio.model.coa.Certificate;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.service.coa.CertificateService;
import cn.edu.fjnu.cdio.service.coa.RCertifyService;
import cn.edu.fjnu.cdio.service.common.UserService;
import cn.edu.fjnu.cdio.utils.Page;


import com.opensymphony.xwork2.ActionSupport;

/**
 * @author 王燕如
 *
 */
@SuppressWarnings("serial")
public class CertificateAction extends ActionSupport {//资格认证

    private CertificateService cService;
    private RCertifyService rcService;
    private Certificate c;
    private User coach;
    private UserService userService;
    private File CoaPhoto;
    private Integer pageSize=10;
    private Integer index;
	private Integer pageMin;
	private Integer pageMax;
	private Page<User> page;
	private Integer pageMin1;
	private Integer pageMax1;
	private Page<User> page1;
	private Long coachID;
	private String describtion;
    
	private MimeMessage mimeMsg; // MIME邮件对象
	private Session session; // 邮件会话对象
	private Properties props; // 系统属性
	private boolean needAuth = false; // smtp是否需要认证
	private String username; // smtp认证用户名和密码
	private String password;
	private Multipart mp; // Multipart对象,邮件内容,标题,附件等内容均添加到其中后再生成
	
	@Autowired
	public void setcService(CertificateService cService) {
		this.cService = cService;
	}
	@Autowired
	public void setRcService(RCertifyService rcService) {
		this.rcService = rcService;
	}

	public void setC(Certificate c) {
		this.c = c;
	}

	public Certificate getC() {
		return c;
	}

	public void setCoach(User coach) {
		this.coach = coach;
	}

	public User getCoach() {
		return coach;
	}
	@Autowired
	public void setUserService(UserService userService) {
		this.userService = userService;
	}

	public File getCoaPhoto() {
		return CoaPhoto;
	}

	public void setCoaPhoto(File coaPhoto) {
		CoaPhoto = coaPhoto;
	}

	public Integer getIndex() {
		return index;
	}

	public void setIndex(Integer index) {
		this.index = index;
	}

	public Integer getPageMin() {
		return pageMin;
	}

	public void setPageMin(Integer pageMin) {
		this.pageMin = pageMin;
	}

	public Integer getPageMax() {
		return pageMax;
	}

	public void setPageMax(Integer pageMax) {
		this.pageMax = pageMax;
	}

	public Page<User> getPage() {
		return page;
	}

	public void setPage(Page<User> page) {
		this.page = page;
	}


	public Integer getPageMin1() {
		return pageMin1;
	}
	public void setPageMin1(Integer pageMin1) {
		this.pageMin1 = pageMin1;
	}
	public Integer getPageMax1() {
		return pageMax1;
	}
	public void setPageMax1(Integer pageMax1) {
		this.pageMax1 = pageMax1;
	}
	public Page<User> getPage1() {
		return page1;
	}
	public void setPage1(Page<User> page1) {
		this.page1 = page1;
	}
	public Long getCoachID() {
		return coachID;
	}

	public void setCoachID(Long coachID) {
		this.coachID = coachID;
	}
	
	public String getDescribtion() {
		return describtion;
	}
	public void setDescribtion(String describtion) {
		this.describtion = describtion;
	}
	public boolean isNeedAuth() {
		return needAuth;
	}
	public CertificateAction() {
		super();
	}
	public CertificateAction(String smtp) {
		setSmtpHost(smtp);
		createMimeMessage();
	}
	public void setSmtpHost(String hostName) {
		System.out.println("设置系统属性：mail.smtp.host = " + hostName);
		if (props == null)
			props = System.getProperties(); // 获得系统属性对象
		props.put("mail.smtp.host", hostName); // 设置SMTP主机
	}
	public boolean createMimeMessage() {
		try {
			System.out.println("准备获取邮件会话对象！");
			session = Session.getDefaultInstance(props, null); // 获得邮件会话对象
		} catch (Exception e) {
			System.err.println("获取邮件会话对象时发生错误！" + e);
			return false;
		}
		System.out.println("准备创建MIME邮件对象！");
		try {
			mimeMsg = new MimeMessage(session); // 创建MIME邮件对象
			mp = new MimeMultipart(); // mp 一个multipart对象
			// Multipart is a container that holds multiple body parts.
			return true;
		} catch (Exception e) {
			System.err.println("创建MIME邮件对象失败！" + e);
			return false;
		}
	}
	public void setNeedAuth(boolean need) {
		System.out.println("设置smtp身份认证：mail.smtp.auth = " + need);
		if (props == null)
			props = System.getProperties();
		if (need) {
			props.put("mail.smtp.auth", "true");
		} else {
			props.put("mail.smtp.auth", "false");
		}
	}

	public void setNamePass(String name, String pass) {
		System.out.println("程序得到用户名与密码");
		username = name;
		password = pass;
	}

	public boolean setSubject(String mailSubject) {
		System.out.println("设置邮件主题！");
		try {
			mimeMsg.setSubject(mailSubject);
			return true;
		} catch (Exception e) {
			System.err.println("设置邮件主题发生错误！");
			return false;
		}
	}

	public boolean setBody(String mailBody) {
		try {
			System.out.println("设置邮件体格式");
			BodyPart bp = new MimeBodyPart();
			// 转换成中文格式
			bp.setContent(
					"<meta http-equiv=Content-Type content=text/html; charset=gb2312>"
							+ mailBody, "text/html;charset=GB2312");
			mp.addBodyPart(bp);
			return true;
		} catch (Exception e) {
			System.err.println("设置邮件正文时发生错误！" + e);
			return false;
		}
	}

	public boolean setFrom(String from) {
		System.out.println("设置发信人！");
		try {
			mimeMsg.setFrom(new InternetAddress(from)); // 设置发信人
			return true;
		} catch (Exception e) {
			return false;
		}
	}

	public boolean setTo(String to) {
		System.out.println("设置收信人");
		if (to == null)
			return false;
		try {
			mimeMsg.setRecipients(Message.RecipientType.TO,
					InternetAddress.parse(to));
			return true;
		} catch (Exception e) {
			return false;
		}
	}

	public boolean setCopyTo(String copyto) {
		System.out.println("发送附件到");
		if (copyto == null)
			return false;
		try {
			mimeMsg.setRecipients(Message.RecipientType.CC,
					(Address[]) InternetAddress.parse(copyto));
			return true;
		} catch (Exception e) {
			return false;
		}
	}

	public boolean sendout() {
		try {
			mimeMsg.setContent(mp);
			mimeMsg.saveChanges();
			System.out.println("正在发送邮件....");
			Session mailSession = Session.getInstance(props, null);
			Transport transport = mailSession.getTransport("smtp");
			transport.connect((String) props.get("mail.smtp.host"), username,
					password);
			transport.sendMessage(mimeMsg,
					mimeMsg.getRecipients(Message.RecipientType.TO));
			// transport.send(mimeMsg);
			System.out.println("发送邮件成功！");
			transport.close();
			return true;
		} catch (Exception e) {
			System.err.println("邮件发送失败！" + e.getMessage());
			return false;
		}
	}


	@Override
	public String execute() throws Exception {
		System.out.println("资格认证");
		
		User newcoach = new User();
		HttpServletRequest  request = ServletActionContext.getRequest();
		HttpSession  session = request.getSession();
		newcoach = (User) session.getAttribute("user");
		if(newcoach.getIsverify_R()==1){
			return SUCCESS;
		}
		else{
			this.addActionMessage("实名认证未完成或审核未通过，不能进行此操作！");
			return  "gotoHomePage";
		}
	}

	public String submitSuc(){
		
		User newcoach = new User();
		HttpServletRequest  request = ServletActionContext.getRequest();
		HttpSession  session = request.getSession();
		newcoach = (User) session.getAttribute("user");	
		
		
		FileInputStream fis=null;	
		Date d=new Date(System.currentTimeMillis());//获取系统当前时间
    	try {	
    		if(CoaPhoto!=null){
    			fis=new FileInputStream(CoaPhoto);
				byte[] coa_license=new byte[fis.available()];
				fis.read(coa_license);
				newcoach.setCoa_license(coa_license);
    			
    		}
    		else if(coach.getCtrain_num()!=null || !("".equals(coach.getCtrain_num())))
				newcoach.setName(coach.getName()); 		
    		if(coach.getName()!=null || !("".equals(coach.getName())))
				newcoach.setName(coach.getName());
    		
			newcoach.setSub_cer_date(d);
			userService.updateUser(newcoach);
			
			
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} 
		catch (Exception e) {
			e.printStackTrace();
			System.out.println("资格认证失败");
			return "toCertificatePage";
		
		}finally{
			try {
				fis.close();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		return SUCCESS;
	}
	
	public String submitFail(){
		return SUCCESS;
	}

    public String getCoa_license(){
		
		byte[] IDcPic=cService.findIDcPic(this.coach.getId());
		
		try{
		if(IDcPic==null || IDcPic.length==0){
			
			String realPath=ServletActionContext.getRequest().getRealPath("/image/coa/head.jpg"); //真实物理磁盘路径 ，注意和网站路径区分。
			
			FileInputStream fis=new FileInputStream(realPath);
			
			IDcPic=new byte[fis.available()];
			fis.read(IDcPic);
			fis.close();
		}
		
		ServletActionContext.getResponse().setContentType("image/jpeg");
		ServletOutputStream sos=ServletActionContext.getResponse().getOutputStream();
		sos.write(IDcPic);
		sos.flush();
		sos.close();
		}catch(IOException e){
			e.printStackTrace();
		}
		
    	return null;
    }
    
    
	public String coaVerifyListTwo(){//后台管理：显示审核全部coach资格认证的信息
		try {
			if(index == null){
				index = 1;
			}
			/*User coach = new User();
			coach.setId(1);*/
			page = cService.loadPagedByCoach(pageSize , index);
			page=new Page<User>(page.getIndex(), 
					pageSize, 
					page.getTotalRecord(), 
					page.getTotalPage(), 
					page.getResults());

			//处理页面数量大小
			if (page.getTotalPage()>5){
				if (page.getTotalPage()-page.getIndex()>=5){
					pageMin=page.getIndex();
					pageMax=page.getIndex()+4;
				}else{
					pageMin=page.getIndex();
					pageMax=page.getTotalPage();
				}
			}else {
				pageMin=1;
				pageMax=page.getTotalPage();
			}
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("加载认证信息失败");
			return "loadall";
		}
		
		return "loadall";		
	}
	public String ForAuditTwo(){
		
		coach=cService.getInfoByNo(coachID);
		return "toCpage";
     }
	
	public String isPassC() throws Exception{//审核通过
		coach=cService.getInfoByNo(coachID);
		coach.setIsverify_C(1);
		userService.updateUser(coach);
		
		JavaMailSenderImpl senderImpl = new JavaMailSenderImpl();

		// 设定mail server
		senderImpl.setHost("smtp.163.com");
		senderImpl.setDefaultEncoding("utf-8");
		// 建立邮件消息,发送简单邮件和html邮件的区别
		MimeMessage mailMessage = senderImpl.createMimeMessage();
		MimeMessageHelper messageHelper = new MimeMessageHelper(mailMessage);

		// 设置收件人，寄件人
		messageHelper.setTo(coach.getEmail());
		messageHelper.setFrom("cdio_tec@163.com");
		messageHelper.setSubject("VOSMaP教师认证审核中心(系统自动邮件，请勿答复)");
		// true 表示启动HTML格式的邮件
		messageHelper
				.setText(
							"<html><head></head><body><font size=4>您好！这是来自VOSMaP(知识加值上线服务平台)教师认证审核中心的邮件</font><br>" 
							+"<font size=4>您已通过教师资格认证，可进行个人信息完善，请及时查看操作。</font><br>" 
							+"<font size=3><a href = '"
							+ "http://42.121.194.241/cdio2010"
							+ "'>登录VOSMaP系统</a></font><br/>"
							+ "</body></html>", true);

		senderImpl.setUsername("cdio_tec@163.com"); // 根据自己的情况,设置username
		senderImpl.setPassword("cdio2010cdio2010"); // 根据自己的情况, 设置password
		Properties prop = new Properties();
		prop.put("mail.smtp.auth", "true"); // 将这个参数设为true，让服务器进行认证,认证用户名和密码是否正确
		prop.put("mail.smtp.timeout", "25000");
		senderImpl.setJavaMailProperties(prop);
		// 发送邮件
		senderImpl.send(mailMessage);

		System.out.println("邮件发送成功..");

		try {
			/*User u=new User();
			u.setId(1);*/
			if(index == null){
				index = 1;
			}
			page=rcService.loadPagedByCoach(pageSize, index);
			page1=cService.loadPagedByCoach(pageSize, index);
			
			page=new Page<User>(page.getIndex(), 
					pageSize, 
					page.getTotalRecord(), 
					page.getTotalPage(), 
					page.getResults());
			page1=new Page<User>(page1.getIndex(), 
					pageSize, 
					page1.getTotalRecord(), 
					page1.getTotalPage(), 
					page1.getResults());

			//处理页面数量大小
			if (page.getTotalPage()>5){
				if (page.getTotalPage()-page.getIndex()>=5){
					pageMin=page.getIndex();
					pageMax=page.getIndex()+4;
				}else{
					pageMin=page.getIndex();
					pageMax=page.getTotalPage();
				}
			}else {
				pageMin=1;
				pageMax=page.getTotalPage();
			}
			//处理页面数量大小
			if (page1.getTotalPage()>5){
				if (page1.getTotalPage()-page1.getIndex()>=5){
					pageMin1=page1.getIndex();
					pageMax1=page1.getIndex()+4;
				}else{
					pageMin1=page1.getIndex();
					pageMax1=page1.getTotalPage();
				}
			}else {
				pageMin1=1;
				pageMax1=page1.getTotalPage();
			}
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("加载认证信息失败");
			return "reloadall";
		}
		
		return "reloadall";
	}

	public String notPassC() throws Exception{//审核不通过
		coach=cService.getInfoByNo(coachID);
		coach.setIsverify_C(0);
		userService.updateUser(coach);
		
		JavaMailSenderImpl senderImpl = new JavaMailSenderImpl();

		// 设定mail server
		senderImpl.setHost("smtp.163.com");
		senderImpl.setDefaultEncoding("utf-8");
		// 建立邮件消息,发送简单邮件和html邮件的区别
		MimeMessage mailMessage = senderImpl.createMimeMessage();
		MimeMessageHelper messageHelper = new MimeMessageHelper(mailMessage);

		// 设置收件人，寄件人
		messageHelper.setTo(coach.getEmail());
		messageHelper.setFrom("cdio_tec@163.com");
		messageHelper.setSubject("VOSMaP教师认证审核中心(系统自动邮件，请勿答复)");
		// true 表示启动HTML格式的邮件
		messageHelper
				.setText(
							"<html><head></head><body><font size=4>您好！这是来自VOSMaP(知识加值上线服务平台)教师认证审核中心的邮件</font><br>" 
							+"<font size=4>您未通过教师资格认证，原因如下：</font><br>" 
							+describtion 
							+"<font size=4>请重新登录系统，进行相应修改。</font><br>" 
							+"<font size=3><a href = '"
							+ "http://42.121.194.241/cdio2010"
							+ "'>登录VOSMaP系统</a></font><br/>"
							+ "</body></html>", true);

		senderImpl.setUsername("cdio_tec@163.com"); // 根据自己的情况,设置username
		senderImpl.setPassword("cdio2010cdio2010"); // 根据自己的情况, 设置password
		Properties prop = new Properties();
		prop.put("mail.smtp.auth", "true"); // 将这个参数设为true，让服务器进行认证,认证用户名和密码是否正确
		prop.put("mail.smtp.timeout", "25000");
		senderImpl.setJavaMailProperties(prop);
		// 发送邮件
		senderImpl.send(mailMessage);

		System.out.println("邮件发送成功.."); 
		
		try {
			/*User u=new User();
			u.setId(1);*/
			if(index == null){
				index = 1;
			}
			page=rcService.loadPagedByCoach(pageSize, index);
			page1=cService.loadPagedByCoach(pageSize, index);
			
			page=new Page<User>(page.getIndex(), 
					pageSize, 
					page.getTotalRecord(), 
					page.getTotalPage(), 
					page.getResults());
			page1=new Page<User>(page1.getIndex(), 
					pageSize, 
					page1.getTotalRecord(), 
					page1.getTotalPage(), 
					page1.getResults());

			//处理页面数量大小
			if (page.getTotalPage()>5){
				if (page.getTotalPage()-page.getIndex()>=5){
					pageMin=page.getIndex();
					pageMax=page.getIndex()+4;
				}else{
					pageMin=page.getIndex();
					pageMax=page.getTotalPage();
				}
			}else {
				pageMin=1;
				pageMax=page.getTotalPage();
			}
			//处理页面数量大小
			if (page1.getTotalPage()>5){
				if (page1.getTotalPage()-page1.getIndex()>=5){
					pageMin1=page1.getIndex();
					pageMax1=page1.getIndex()+4;
				}else{
					pageMin1=page1.getIndex();
					pageMax1=page1.getTotalPage();
				}
			}else {
				pageMin1=1;
				pageMax1=page1.getTotalPage();
			}
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("加载认证信息失败");
			return "reloadall";
		}
		
		return "reloadall";
	}
	
}
