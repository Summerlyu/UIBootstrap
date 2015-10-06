/**
 * 
 */
package cn.edu.fjnu.cdio.controller.grp;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletOutputStream;
import javax.servlet.ServletRequest;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import javassist.bytecode.Descriptor.Iterator;

import org.apache.commons.io.FileUtils;
import org.apache.struts2.ServletActionContext;
import org.apache.struts2.interceptor.SessionAware;
import org.springframework.beans.factory.annotation.Autowired;

import sun.java2d.pipe.SpanShapeRenderer.Simple;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;
import java.io.File;
import com.sun.net.httpserver.Authenticator.Success;

import cn.edu.fjnu.cdio.model.grp.CheckGroup;
import cn.edu.fjnu.cdio.model.grp.Group;
import cn.edu.fjnu.cdio.model.grp.GroupHelp;
import cn.edu.fjnu.cdio.model.grp.GroupRemarks;

import cn.edu.fjnu.cdio.model.grp.Member;
import cn.edu.fjnu.cdio.model.grp.Topic;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.service.common.UserService;
import cn.edu.fjnu.cdio.service.grp.CheckGroupService;
import cn.edu.fjnu.cdio.service.grp.GroupRemarkService;
import cn.edu.fjnu.cdio.service.grp.GroupService;
import cn.edu.fjnu.cdio.service.grp.MemberService;
import cn.edu.fjnu.cdio.service.grp.ReplyTopicService;
import cn.edu.fjnu.cdio.service.grp.TopicService;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author 孙斌
 * 
 * @version 创建时间：2013-5-12
 * 
 * @author 吕希仲
 * 
 * @version 修改时间：2013-5-22
 * 
 * 功能说明:group 的 action 操作
 * 
 * 
 */
public class GroupAction extends ActionSupport{
	private Group group; // groupBean
	private Topic topic; //topicBean
	private CheckGroup checkGroup;// checkGroupBeen(审核)
	private Member member;  //memberBean
	private List<GroupRemarks> groupRemarkList;
	private ArrayList<String> groupRemarkForPageList;
	private GroupRemarks groupRemark;
	
	private GroupService groupService;
	private UserService userService;
	private CheckGroupService checkGroupService;
	private TopicService topicService;
	private ReplyTopicService replyTopicService;
	private GroupRemarkService groupRemarkService;
	private MemberService memberService;
	private ArrayList<Topic> topicsList;  //用来存放查找的topic
	private ArrayList<Member> membersList; // 用来存放查找的member
	private Long groupId; // 用来查询group
	private List<Group> groupList; //用来存放得到分页的group
	private List<CheckGroup> checkGrouList; //用来存放得到查询结果的checkGroup
	private String isSuccess; // 用来判断action返回值
	private String remark; //用来接收remark值，用于根据标签查询group
	private Long num; // 回复数
	private Long groupNum; // 小组人数
	private User user;  //存放组长
	
	
	public ArrayList<String> getGroupRemarkForPageList() {
		return groupRemarkForPageList;
	}

	public void setGroupRemarkForPageList(ArrayList<String> groupRemarkForPageList) {
		this.groupRemarkForPageList = groupRemarkForPageList;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	
	public Topic getTopic() {
		return topic;
	}

	public void setTopic(Topic topic) {
		this.topic = topic;
	}

	private ArrayList<User> usersList; //用来存放查询的user
	private int index; //用来表示分页的当前页码
	private final static int GROUP_PAGE_SIZE = 3;
	private final static int MY_GROUP_PAGE_SIZE = 5;
	private int flag; // 标记是加入的小组还是创建的小组 还用来判断是否已加入
	private int status;// 用来判断分页操作方式
	private File picture; // 用来表示picture的文件
	private int pagebegin; //用来表示分页的起始位置
	private Page<Group> groupPage; //用来存放group的分页查询
	private int pageend;  //用来表示分页的结束位置
	private ArrayList<Group> topTenGroupList;
	
	public GroupRemarks getGroupRemark() {
		return groupRemark;
	}

	public void setGroupRemark(GroupRemarks groupRemark) {
		this.groupRemark = groupRemark;
	}
	
	

	public GroupRemarkService getGroupRemarkService() {
		return groupRemarkService;
	}

	public void setGroupRemarkService(GroupRemarkService groupRemarkService) {
		this.groupRemarkService = groupRemarkService;
	}

	

	

	public UserService getUserService() {
		return userService;
	}

	public void setUserService(UserService userService) {
		this.userService = userService;
	}

	public List<GroupRemarks> getGroupRemarkList() {
		return groupRemarkList;
	}

	public void setGroupRemarkList(List<GroupRemarks> groupRemarkList) {
		this.groupRemarkList = groupRemarkList;
	}

	public ArrayList<Group> getTopTenGroupList() {
		return topTenGroupList;
	}

	public void setTopTenGroupList(ArrayList<Group> topTenGroupList) {
		this.topTenGroupList = topTenGroupList;
	}


	public File getPicture() {
		return picture;
	}

	public void setPicture(File picture) {
		this.picture = picture;
	}

	public Member getMember() {
		return member;
	}

	public void setMember(Member member) {
		this.member = member;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public int getFlag() {
		return flag;
	}

	public void setFlag(int flag) {
		this.flag = flag;
	}

	public Long getNum() {
		return num;
	}

	public void setNum(Long num) {
		this.num = num;
	}

	public List<Group> getGroupList() {
		return groupList;
	}

	public void setGroupList(List<Group> groupList) {
		this.groupList = groupList;
	}

	public int getIndex() {
		return index;
	}

	public void setIndex(int index) {
		this.index = index;
	}

	public int getPagebegin() {
		return pagebegin;
	}

	public void setPagebegin(int pagebegin) {
		this.pagebegin = pagebegin;
	}

	public Page<Group> getGroupPage() {
		return groupPage;
	}

	public void setGroupPage(Page<Group> groupPage) {
		this.groupPage = groupPage;
	}

	public CheckGroupService getCheckGroupService() {
		return checkGroupService;
	}
	@Autowired

	public void setCheckGroupService(CheckGroupService checkGroupService) {
		this.checkGroupService = checkGroupService;
	}
	public CheckGroup getCheckGroup() {
		return checkGroup;
	}

	public void setCheckGroup(CheckGroup checkGroup) {
		this.checkGroup = checkGroup;
	}

	public List<CheckGroup> getCheckGrouList() {
		return checkGrouList;
	}

	public void setCheckGrouList(List<CheckGroup> checkGrouList) {
		this.checkGrouList = checkGrouList;
	}

	public int getPageend() {
		return pageend;
	}

	public void setPageend(int pageend) {
		this.pageend = pageend;
	}

	public ArrayList<User> getUsersList() {
		return usersList;
	}

	public void setUsersList(ArrayList<User> usersList) {
		this.usersList = usersList;
	}

	public ArrayList<Member> getMembersList() {
		return membersList;
	}

	public void setMembersList(ArrayList<Member> membersList) {
		this.membersList = membersList;
	}

	public Long getGroupNum() {
		return groupNum;
	}

	public void setGroupNum(Long groupNum) {
		this.groupNum = groupNum;
	}

	public String getRemark() {
		return remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}


	public MemberService getMemberService() {
		return memberService;
	}
	@Autowired

	public void setMemberService(MemberService memberService) {
		this.memberService = memberService;
	}

	public ReplyTopicService getReplyTopicService() {
		return replyTopicService;
	}
	@Autowired

	public void setReplyTopicService(ReplyTopicService replyTopicService) {
		this.replyTopicService = replyTopicService;
	}

	public TopicService getTopicService() {
		return topicService;
	}
	@Autowired

	public void setTopicService(TopicService topicService) {
		this.topicService = topicService;
	}

	public ArrayList<Topic> getTopicsList() {
		return topicsList;
	}

	public void setTopicsList(ArrayList<Topic> topicsList) {
		this.topicsList = topicsList;
	}

	public Long getGroupId() {
		return groupId;
	}

	public void setGroupId(Long groupId) {
		this.groupId = groupId;
	}

	public String getIsSuccess() {
		return isSuccess;
	}

	public void setIsSuccess(String isSuccess) {
		this.isSuccess = isSuccess;
	}


	public Group getGroup() {
		return group;
	}

	public void setGroup(Group group) {
		this.group = group;
	}

	public GroupService getGroupService() {
		return groupService;
	}

	@Autowired
	public void setGroupService(GroupService groupService) {
		this.groupService = groupService;
	}
	/**
	 * action 的默认执行，用来清除session值
	 * @return success
	 */
	@Override
	public String execute() throws Exception {
		
		return SUCCESS;

	}
	/**
	 * 小组创建,先放入checkGroup由后台进行审核
	 * 
	 * @return addGroup
	 * @throws IOException 
	 */
	public String addGroup() throws IOException {
		isSuccess = "addGroup";
		HttpServletRequest request = ServletActionContext.getRequest();
		HttpSession session = request.getSession();
		User u=(User) session.getAttribute("user");//得到session的user对象
		groupRemarkList = groupRemarkService.getGroupRemark();
		FileInputStream fiStream=new FileInputStream(picture);
		byte[] pic=new byte[fiStream.available()];
		fiStream.read(pic);
		checkGroup.setCheckGroupPic(pic);
		checkGroup.setCheckGroupCreateTime(new Date());
		checkGroup.setCheckGroupNums(1);
		checkGroup.setUser(u);
		fiStream.close();
		try {
			checkGroupService.addCheckGroup(checkGroup);// 社群创建
		} catch (Exception e) {
			System.out.println("添加用户失败");
			return "error";
		}
		return isSuccess;
	}

	/**
	 * 通过审核的小组信息查询、显示
	 * 
	 * @return showGroup
	 */

	public String showGroup() {
		isSuccess = "showGroup";
		if (remark == null || remark == "") {
			groupList = groupService.showGroup();
			groupRemarkForPageList = groupRemarkService.getGroupRemarkForPage();
		} else {
			groupList = groupService.showGroup(remark);
			groupRemarkForPageList = groupRemarkService.getGroupRemarkForPage();
		}
		return isSuccess;
	}

	/**
	 * 标签查询
	 * 
	 * @return remark
	 */
	public String showByRemark() {
		isSuccess = "showByRemark";
		status=1;
		groupList = groupService.showGroup(remark);
		return isSuccess;
	}

	/**
	 * 分页查询
	 * 
	 * @return pageGroup
	 */
	public String showByPage() {
		isSuccess ="error";
		HttpServletRequest request = ServletActionContext.getRequest();
		HttpSession session = request.getSession();
		if (status == 1) {
			isSuccess = "pageGroupByRemark";
			session.setAttribute("remark", remark);
			groupList = grpByPage("from Group where groupRemark = '" + remark + "'", GROUP_PAGE_SIZE, index);
			return isSuccess;
		}else if (status==2) {
			isSuccess ="pageMyGroup";

			
			return isSuccess;
		}else if (status==3) {
			isSuccess = "pageMyGroup";

			return isSuccess;
		}
		else if(status == 4){
			isSuccess = "pageHotGroup";
			groupList = grpByPage("select  distinct g.groupName,g.groupId ,g.groupPic ,g.groupIntro from Group  g, Topic t where g.groupId = t.groupId", GROUP_PAGE_SIZE, index);
		}
		return isSuccess;
	}

	/**
	 * 通过点击页面，跳转到我的社群
	 * 
	 * @return gotoEachGroup
	 */
	public String gotoEachGroup() {
		
		isSuccess = "gotoEachGroup";
	    GroupHelp groupHelp=new GroupHelp();
//		//判断是否已加入该组
	    HttpServletRequest request = ServletActionContext.getRequest();
		HttpSession session = request.getSession();
	    User u=(User) session.getAttribute("user");//得到session的user对象
	    
	    group = groupService.selectGroup(groupId);
	    if(u.getId()==group.getUser().getId())
	    {
	    	groupHelp.setFlag(3);    //组长
	    }
	    else{
			 member=memberService.getMember(u.getId(), groupId);
			 if(member==null){
					groupHelp.setFlag(1);    //未加入该组
				}
				else {
					groupHelp.setFlag(2);    //已加入
				}
	    }

	    User u1=new User();
    	u1.setId(group.getUser().getId());
		user =  userService.getUser(u1);  //组长
		groupHelp.setGroup(group);
		groupHelp.setUser(user);
		session.setAttribute("groupHelp", groupHelp);

		topicsList = topicService.allGroupTopics(groupId);
		
		membersList = memberService.getMembers(groupId);
		return isSuccess;
	
	}
	/**
	 * 跳转到社群主页
	 * 
	 * @return mySocily
	 */

	public String mySocily() {
		isSuccess = "mySocily";
		return isSuccess;
	}

	/**
	 * 显示我创建的小组
	 * 
	 * @return myGroup
	 */

	public String myGroup() {
		isSuccess = "myGroup";
		flag = 1;
		status =3;
		HttpServletRequest request = ServletActionContext.getRequest();
		HttpSession session = request.getSession();
		User u=(User) session.getAttribute("user");//得到session的user对象
		groupList = groupService.myGroups(u.getId());
		user = userService.getUser(u);
		return isSuccess;
	}

	/**
	 * 显示我加入的小组
	 * 
	 * @return myGroup
	 */

	public String joinGroup() {
		isSuccess = "myGroup";
		flag = 2;
		status = 2;
		HttpServletRequest request = ServletActionContext.getRequest();
		HttpSession session = request.getSession();
		User u=(User) session.getAttribute("user");//得到session的user对象
		groupList = groupService.joinGroups(u.getId());	
		user = userService.getUser(u);
		return isSuccess;
	}
	/**
	 * 创建小组
	 * @return 
	 */
	public String createGroup(){
		isSuccess = "gotoCreateGroup";
		groupRemarkList = groupRemarkService.getGroupRemark();
		return isSuccess;
	}
	/**
	 *  查看活跃话题
	 * @return hotGroup
	 */
	public String hotGroup(){
		isSuccess = "hotGroup";
		topTenGroupList = groupService.topTenGroup();
		return isSuccess;		
	}
	
	/**
	 * 管理该组
	 * 
	 * @return goIntoGrpHomePage
	 */
    public String manageGroup(){
    	isSuccess="manageGroup";
    	group=groupService.selectGroup(groupId);
    	topicsList=topicService.allGroupTopics(groupId);
    	return isSuccess;
    }
    
	/**
	 * 直接显示话题是先经过group处理
	 * 
	 * @return 
	 */
    public String showTopic(){
    	isSuccess="showTopic";
    	GroupHelp groupHelp=new GroupHelp();
		//判断是否已加入该组
	    HttpServletRequest request = ServletActionContext.getRequest();
		HttpSession session = request.getSession();
	    User u=(User) session.getAttribute("user");//得到session的user对象
	    
	    group = groupService.selectGroup(groupId);
	    if(u.getId()==group.getUser().getId())
	    {
	    	groupHelp.setFlag(3);    //组长
	    }
	    else{
			 member=memberService.getMember(u.getId(), groupId);
			 if(member==null){
					groupHelp.setFlag(1);    //未加入该组
				}
				else {
					groupHelp.setFlag(2);    //已加入
				}
	    }
	    
	    User u1=new User();
    	u1.setId(group.getUser().getId());
		user =  userService.getUser(u1);  //组长
		groupHelp.setGroup(group);
		groupHelp.setUser(user);
		session.setAttribute("groupHelp", groupHelp);

    	
    	return isSuccess;
    }
    
	/**
	 *  分页封装方法
	 * @param hql
	 * @param pageSize
	 * @param index
	 * @return
	 */
	public List<Group> grpByPage(String hql,int pageSize, int index){
		if (groupPage == null) {
			groupPage = new Page<Group>();
		}if(index==0){
			index=1;
		}
		groupPage = groupService.showGroupPage(hql, pageSize, index);//
		groupList = groupPage.getResults();
		groupPage.setIndex(index);
		groupPage.setPageSize(GROUP_PAGE_SIZE);
		groupPage = new Page<Group>(groupPage.getIndex(), MY_GROUP_PAGE_SIZE, groupPage.getTotalRecord(), groupPage.getTotalPage(), groupPage.getResults());
		if (groupPage.getTotalPage() > MY_GROUP_PAGE_SIZE) {
			if (groupPage.getTotalPage() - groupPage.getIndex() >= MY_GROUP_PAGE_SIZE) {
				pagebegin = groupPage.getIndex();
				pageend = groupPage.getIndex() + 4;
			} else {
				pagebegin = groupPage.getIndex();
				pageend = groupPage.getTotalPage();
			}
		} else {
			pagebegin = 1;
			pageend = groupPage.getTotalPage();
		}
		return groupList;
		
	}
	/**
	 * 默认进入社群主页
	 * 
	 * @return goIntoGrpHomePage
	 */
	public String goIntoGrpHomePage(){
		isSuccess = "goIntoGrpHomePage";
		return isSuccess;
	}
	/**
	 * 社群须知
	 * 
	 * @return
	 */
	public String needToKnow(){
		isSuccess = "needToKnow";
		
		return isSuccess;
	}
	
	/**
	 * 获取图片
	 */
	public String getPic(){
    	
		byte[] groupPic=groupService.getGroupPic(group.getGroupId());
		try{
		if(groupPic==null || groupPic.length==0){
			
			@SuppressWarnings("deprecation")
			String realPath=ServletActionContext.getRequest().getRealPath("/image/grp/grpPic/am.jpg"); //真实物理磁盘路径 ，注意和网站路径区分。
			
			FileInputStream fis=new FileInputStream(realPath);
			
			groupPic=new byte[fis.available()];
			fis.read(groupPic);
			fis.close();
		}
		
		ServletActionContext.getResponse().setContentType("image/png");
		ServletOutputStream sos=ServletActionContext.getResponse().getOutputStream();
		sos.write(groupPic);
		sos.flush();
		sos.close();
		}catch(IOException e){
			e.printStackTrace();
		}
		
    	return null;
    }
	
	/**
	 * 获取user图片
	 */
	public String getUserPic(){
		byte[] picture=userService.loadpic(user.getId());
		
		try{
			if(picture==null || picture.length==0){
				
				String realPath=ServletActionContext.getRequest().getRealPath("/image/pym/pym_userImage.jpg"); //真实物理磁盘路径 ，注意和网站路径区分。
				
				FileInputStream fis=new FileInputStream(realPath);
				
				picture=new byte[fis.available()];
				fis.read(picture);
				fis.close();
			}
			
			ServletActionContext.getResponse().setContentType("image/png");
			ServletOutputStream sos=ServletActionContext.getResponse().getOutputStream();
			sos.write(picture);
			sos.flush();
			sos.close();
			}catch(IOException e){
				e.printStackTrace();
			}
		return null;
	}
}
