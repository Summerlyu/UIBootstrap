package cn.edu.fjnu.cdio.controller.grp;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.ArrayList;

import java.util.List;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.struts2.ServletActionContext;
import org.springframework.beans.factory.annotation.Autowired;

import cn.edu.fjnu.cdio.model.grp.CheckGroup;
import cn.edu.fjnu.cdio.model.grp.Group;
import cn.edu.fjnu.cdio.model.grp.GroupRemarks;
import cn.edu.fjnu.cdio.model.grp.Member;
import cn.edu.fjnu.cdio.model.grp.ReplyTopic;
import cn.edu.fjnu.cdio.model.grp.Topic;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.service.grp.CheckGroupService;
import cn.edu.fjnu.cdio.service.grp.GroupRemarkService;
import cn.edu.fjnu.cdio.service.grp.GroupService;
import cn.edu.fjnu.cdio.service.grp.ReplyTopicService;
import cn.edu.fjnu.cdio.service.grp.TopicService;
import cn.edu.fjnu.cdio.utils.Page;

import com.opensymphony.xwork2.ActionSupport;

/**
 * @author 孙斌
 * 
 * @version 创建时间：2013-6-1
 * 
 * @author 吕希仲
 * 
 * @version 修改时间：2013-6-8
 * 
 *          功能说明: 后台管理的action操作
 */

public class GroupAdmAction extends ActionSupport {
	private String isSuccess; // 用来判断返回action值
	private Group group;
	private CheckGroup checkGroup;
	private GroupRemarks groupRemarks;
	private String remark;

	public String getRemark() {
		return remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}

	public GroupRemarks getGroupRemarks() {
		return groupRemarks;
	}

	public void setGroupRemarks(GroupRemarks groupRemarks) {
		this.groupRemarks = groupRemarks;
	}

	private User user;
	private Topic topic;
	private ReplyTopic replyTopic;
	private Member member;
	private GroupService groupService;
	private CheckGroupService checkGroupService;
	private GroupRemarkService groupRemarkService;

	public GroupRemarkService getGroupRemarkService() {
		return groupRemarkService;
	}

	public void setGroupRemarkService(GroupRemarkService groupRemarkService) {
		this.groupRemarkService = groupRemarkService;
	}

	private TopicService topicService;
	private int flag;// 是否通过标记1.通过，2失败
	private final static int MY_GROUP_PAGE_SIZE = 5;
	private ArrayList<Group> examineGroupList;
	private ArrayList<CheckGroup> examineCheckGroupList;
	private Page<Group> groupPage;
	private Page<GroupRemarks> groupRemarkPage;

	public Page<GroupRemarks> getGroupRemarkPage() {
		return groupRemarkPage;
	}

	public void setGroupRemarkPage(Page<GroupRemarks> groupRemarkPage) {
		this.groupRemarkPage = groupRemarkPage;
	}

	private Page<CheckGroup> checkGroupPage;
	private List<CheckGroup> checkGroupList;
	private List<Group> groupList;
	private List<GroupRemarks> groupRemarkList;

	public List<GroupRemarks> getGroupRemarkList() {
		return groupRemarkList;
	}

	public void setGroupRemarkList(List<GroupRemarks> groupRemarkList) {
		this.groupRemarkList = groupRemarkList;
	}

	private List<User> userList;
	private int pagebegin;
	private int pageend;
	private int index;
	private int status;

	public List<User> getUserList() {
		return userList;
	}

	public void setUserList(List<User> userList) {
		this.userList = userList;
	}

	public ArrayList<CheckGroup> getExamineCheckGroupList() {
		return examineCheckGroupList;
	}

	public void setExamineCheckGroupList(ArrayList<CheckGroup> examineCheckGroupList) {
		this.examineCheckGroupList = examineCheckGroupList;
	}

	public Page<CheckGroup> getCheckGroupPage() {
		return checkGroupPage;
	}

	public void setCheckGroupPage(Page<CheckGroup> checkGroupPage) {
		this.checkGroupPage = checkGroupPage;
	}

	public List<CheckGroup> getCheckGroupList() {
		return checkGroupList;
	}

	public void setCheckGroupList(List<CheckGroup> checkGroupList) {
		this.checkGroupList = checkGroupList;
	}

	public CheckGroup getCheckGroup() {
		return checkGroup;
	}

	public void setCheckGroup(CheckGroup checkGroup) {
		this.checkGroup = checkGroup;
	}

	public CheckGroupService getCheckGroupService() {
		return checkGroupService;
	}

	@Autowired
	public void setCheckGroupService(CheckGroupService checkGroupService) {
		this.checkGroupService = checkGroupService;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public int getIndex() {
		return index;
	}

	public void setIndex(int index) {
		this.index = index;
	}

	public int getPageend() {
		return pageend;
	}

	public void setPageend(int pageend) {
		this.pageend = pageend;
	}

	public int getPagebegin() {
		return pagebegin;
	}

	public void setPagebegin(int pagebegin) {
		this.pagebegin = pagebegin;
	}

	public List<Group> getGroupList() {
		return groupList;
	}

	public void setGroupList(List<Group> groupList) {
		this.groupList = groupList;
	}

	public Page<Group> getGroupPage() {
		return groupPage;
	}

	public void setGroupPage(Page<Group> groupPage) {
		this.groupPage = groupPage;
	}

	public ArrayList<Group> getExamineGroupList() {
		return examineGroupList;
	}

	public void setExamineGroupList(ArrayList<Group> examineGroupList) {
		this.examineGroupList = examineGroupList;
	}

	public int getFlag() {
		return flag;
	}

	public void setFlag(int flag) {
		this.flag = flag;
	}

	public TopicService getTopicService() {
		return topicService;
	}

	@Autowired
	public void setTopicService(TopicService topicService) {
		this.topicService = topicService;
	}

	public ReplyTopicService getReplyTopicService() {
		return replyTopicService;
	}

	@Autowired
	public void setReplyTopicService(ReplyTopicService replyTopicService) {
		this.replyTopicService = replyTopicService;
	}

	private ReplyTopicService replyTopicService;

	public GroupService getGroupService() {
		return groupService;
	}

	@Autowired
	public void setGroupService(GroupService groupService) {
		this.groupService = groupService;
	}

	public Member getMember() {
		return member;
	}

	public void setMember(Member member) {
		this.member = member;
	}

	public ReplyTopic getReplyTopic() {
		return replyTopic;
	}

	public void setReplyTopic(ReplyTopic replyTopic) {
		this.replyTopic = replyTopic;
	}

	public Topic getTopic() {
		return topic;
	}

	public void setTopic(Topic topic) {
		this.topic = topic;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Group getGroup() {
		return group;
	}

	public void setGroup(Group group) {
		this.group = group;
	}

	/**
	 * 后台管理查看申请信息
	 * 
	 * @return manageGroup
	 */

	public String manageGroup() {
		isSuccess = "manageGroup";
		status = 2;
		return isSuccess;
	}

	/**
	 * 社群审核
	 * 
	 * @return groupIsChecked
	 */
	public String examineGroup() {
		isSuccess = "error";
		if (flag != 0) {
			if (flag == 1) {
				isSuccess = "groupIsChecked";// 通过审核

				group = new Group();
				checkGroup = checkGroupService.selectCheckGroup(checkGroup.getCheckGroupId());
				group.setGroupId(checkGroup.getCheckGroupId());
				group.setGroupName(checkGroup.getCheckGroupName());
				group.setGroupRemark(checkGroup.getCheckGroupRemark());
				group.setGroupNums(checkGroup.getCheckGroupNums());
				group.setGroupPic(checkGroup.getCheckGroupPic());
				group.setUser(checkGroup.getUser());
				group.setGroupCreateTime(checkGroup.getCheckGroupCreateTime());
				group.setGroupIntro(checkGroup.getCheckGroupIntro());
				groupService.addGroup(group);
				checkGroupService.deleteCheckGroup(checkGroup);

			} else if (flag == 2) {
				isSuccess = "groupIsChecked";// 审核失败
				checkGroupService.deleteCheckGroup(checkGroup);
			}
		}
		return isSuccess;
	}

	/**
	 * 进入后台主页
	 * 
	 * @return goIntoBackStage
	 */
	public String goIntoBackStage() {
		isSuccess = "goIntoBackStage";
		status = 1;
		return isSuccess;

	}

	/**
	 * 申请列表
	 * 
	 * @return
	 */
	public String showExamineGroup() {
		isSuccess = "showExamineGroup";
		checkGroup = checkGroupService.selectCheckGroup(checkGroup.getCheckGroupId());
		return isSuccess;
	}

	/**
	 * 显示审核群列表
	 * 
	 * @return
	 */
	public String showExamineGroupByPage() {
		isSuccess = "error";
		if (status == 1) {
			isSuccess = "gotoGroupExamine";
			checkGroupList = checkGrpByPage("from CheckGroup ", MY_GROUP_PAGE_SIZE, index);
		} else if (status == 2) {
			isSuccess = "gotoBackStageManagement";
			groupRemarkList = groupRemarkByPage("from GroupRemarks", MY_GROUP_PAGE_SIZE, index);

		} else if (status == 3) {
			isSuccess = "gotoCloseGroup";
			groupList = groupByPage("from Group where groupRemark = '" + remark + "'", MY_GROUP_PAGE_SIZE, index);
		} else if (status == 4) {
			isSuccess = "gotoAddGroupRemark";
			groupRemarkList = groupRemarkByPage("from GroupRemarks", MY_GROUP_PAGE_SIZE, index);
			
		}
		

		return isSuccess;

	}

	/**
	 * 社群关闭分页
	 * 
	 * @param hql
	 * @param pageSize
	 * @param index
	 * @return
	 */
	public List<GroupRemarks> groupRemarkByPage(String hql, int pageSize, int index) {
		if (groupRemarkPage == null) {
			groupRemarkPage = new Page<GroupRemarks>();
		}
		if (index == 0) {
			index = 1;
		}
		groupRemarkPage = groupRemarkService.showGroupRemarkPage(hql, pageSize, index);
		groupRemarkList = groupRemarkPage.getResults();
		groupRemarkPage.setIndex(index);
		groupRemarkPage.setPageSize(MY_GROUP_PAGE_SIZE);
		groupRemarkPage = new Page<GroupRemarks>(groupRemarkPage.getIndex(), MY_GROUP_PAGE_SIZE, groupRemarkPage.getTotalRecord(), groupRemarkPage.getTotalPage(), groupRemarkPage.getResults());
		if (groupRemarkPage.getTotalPage() > MY_GROUP_PAGE_SIZE) {
			if (groupRemarkPage.getTotalPage() - groupRemarkPage.getIndex() >= MY_GROUP_PAGE_SIZE) {
				pagebegin = groupRemarkPage.getIndex();
				pageend = groupRemarkPage.getIndex() + 4;
			} else {
				pagebegin = groupRemarkPage.getIndex();
				pageend = groupRemarkPage.getTotalPage();
			}
		} else {
			pagebegin = 1;
			pageend = groupRemarkPage.getTotalPage();
		}
		return groupRemarkList;

	}

	/**
	 * 关闭社群
	 * 
	 * @return closeGroup
	 */
	public String closeGroupRemarks() {
		isSuccess = "closeGroupRemarks";
		groupRemarks = groupRemarkService.selectGroupRemarks(groupRemarks.getGroupRemarkId());
		groupRemarkService.deleteGroupRemark(groupRemarks);
		return isSuccess;
	}

	public String closeGroup() {
		isSuccess = "closeGroup";
		status = 3;
		group = groupService.selectGroup(group.getGroupId());
		remark = group.getGroupRemark();
		groupService.deleteGroup(group);
		
		return isSuccess;
	}
	public String addGroupRemark(){
		isSuccess = "addGroupRemark";
		status = 4;
		groupRemarks = new GroupRemarks();
		groupRemarks.setGroupRemark(remark);
		if(!"".equals(remark)&&remark!=null)
		{
			groupRemarkList = groupRemarkService.getGroupRemark();
			for (int i = 0; i < groupRemarkList.size(); i++) {
				if (groupRemarkList.get(i).getGroupRemark().equals(remark)) {
					break;
				}
				if (i==groupRemarkList.size()-1) {
					groupRemarkService.addGroupRemarks(groupRemarks);
				}		
			}
					
		}
		return isSuccess;
	}

	/**
	 * 审核分页封装方法
	 * 
	 * @param hql
	 * @param pageSize
	 * @param index
	 * @return
	 */
	public List<CheckGroup> checkGrpByPage(String hql, int pageSize, int index) {
		if (checkGroupPage == null) {
			checkGroupPage = new Page<CheckGroup>();
		}
		if (index == 0) {
			index = 1;
		}
		checkGroupPage = checkGroupService.showCheckGroupPage(hql, pageSize, index);//
		checkGroupList = checkGroupPage.getResults();
		checkGroupPage.setIndex(index);
		checkGroupPage.setPageSize(MY_GROUP_PAGE_SIZE);
		checkGroupPage = new Page<CheckGroup>(checkGroupPage.getIndex(), MY_GROUP_PAGE_SIZE, checkGroupPage.getTotalRecord(), checkGroupPage.getTotalPage(), checkGroupPage.getResults());
		if (checkGroupPage.getTotalPage() > MY_GROUP_PAGE_SIZE) {
			if (checkGroupPage.getTotalPage() - checkGroupPage.getIndex() >= MY_GROUP_PAGE_SIZE) {
				pagebegin = checkGroupPage.getIndex();
				pageend = checkGroupPage.getIndex() + 4;
			} else {
				pagebegin = checkGroupPage.getIndex();
				pageend = checkGroupPage.getTotalPage();
			}
		} else {
			pagebegin = 1;
			pageend = checkGroupPage.getTotalPage();
		}
		return checkGroupList;

	}

	/**
	 * 社群管理分页封装方法
	 * 
	 * @param hql
	 * @param pageSize
	 * @param index
	 * @return
	 */
	public List<Group> groupByPage(String hql, int pageSize, int index) {
		if (groupPage == null) {
			groupPage = new Page<Group>();
		}
		if (index == 0) {
			index = 1;
		}
		groupPage = groupService.showGroupPage(hql, pageSize, index);
		groupList = groupPage.getResults();
		groupPage.setIndex(index);
		groupPage.setPageSize(MY_GROUP_PAGE_SIZE);
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
	 * 获取图片
	 */
	public String getPic() {

		byte[] checkGroupPic = checkGroupService.getGroupPic(checkGroup.getCheckGroupId());
		try {
			if (checkGroupPic == null || checkGroupPic.length == 0) {

				@SuppressWarnings("deprecation")
				String realPath = ServletActionContext.getRequest().getRealPath("/image/grp/grpPic/am.jpg"); // 真实物理磁盘路径
																												// ，注意和网站路径区分。

				FileInputStream fis = new FileInputStream(realPath);

				checkGroupPic = new byte[fis.available()];
				fis.read(checkGroupPic);
				fis.close();
			}

			ServletActionContext.getResponse().setContentType("image/png");
			ServletOutputStream sos = ServletActionContext.getResponse().getOutputStream();
			sos.write(checkGroupPic);
			sos.flush();
			sos.close();
		} catch (IOException e) {
			e.printStackTrace();
		}

		return null;
	}

}
