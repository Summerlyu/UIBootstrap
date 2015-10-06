/**
 * 
 */
package cn.edu.fjnu.cdio.controller.grp;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.struts2.ServletActionContext;
import org.springframework.beans.factory.annotation.Autowired;

import cn.edu.fjnu.cdio.model.grp.Group;

import cn.edu.fjnu.cdio.model.grp.GroupHelp;
import cn.edu.fjnu.cdio.model.grp.ReplyMassage;
import cn.edu.fjnu.cdio.model.grp.ReplyReply;
import cn.edu.fjnu.cdio.model.grp.ReplyTopic;
import cn.edu.fjnu.cdio.model.grp.Topic;

import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.service.common.UserService;
import cn.edu.fjnu.cdio.service.grp.GroupService;
import cn.edu.fjnu.cdio.service.grp.MemberService;
import cn.edu.fjnu.cdio.service.grp.ReplyTopicService;
import cn.edu.fjnu.cdio.service.grp.TopicService;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author 孙斌
 * 
 * @version 创建时间：2013-5-17
 * 
 * @author 吕希仲
 * 
 * @version 修改时间：2013-5-22
 * 
 * 
 * 
 */
public class TopicAction {

	private TopicService topicService;
	private GroupService groupService;
	private MemberService memberService;
	private UserService userService;
	private List<ReplyTopic> replyTopicsList;
	private Topic topic;
	private String isSuccess;
	private int num; // 与我相关的话题回复数
	private int isAgree;
	private int pagebegin;//
	private int replyTopicId;
	private final static int MY_RT_PAGE_SIZE = 5;
    private Page<ReplyTopic> rtPage;
	
	
	public Page<ReplyTopic> getRtPage() {
		return rtPage;
	}

	public List<ReplyTopic> getReplyTopicsList() {
		return replyTopicsList;
	}

	public void setReplyTopicsList(List<ReplyTopic> replyTopicsList) {
		this.replyTopicsList = replyTopicsList;
	}
	

	public void setRtPage(Page<ReplyTopic> rtPage) {
		this.rtPage = rtPage;
	}

	public int getReplyTopicId() {
		return replyTopicId;
	}

	public void setReplyTopicId(int replyTopicId) {
		this.replyTopicId = replyTopicId;
	}

	public int getIsAgree() {
		return isAgree;
	}

	public void setIsAgree(int isAgree) {
		this.isAgree = isAgree;
	}

	public int getNum() {
		return num;
	}

	public void setNum(int num) {
		this.num = num;
	}

	public int getPagebegin() {
		return pagebegin;
	}

	public void setPagebegin(int pagebegin) {
		this.pagebegin = pagebegin;
	}

	public int getPageend() {
		return pageend;
	}

	public void setPageend(int pageend) {
		this.pageend = pageend;
	}

	private int pageend;//
	private Page<ReplyTopic> replyTopicPage;//

	public Page<ReplyTopic> getReplyTopicPage() {
		return replyTopicPage;
	}

	public UserService getUserService() {
		return userService;
	}

	public void setUserService(UserService userService) {
		this.userService = userService;
	}

	public void setReplyTopicPage(Page<ReplyTopic> replyTopicPage) {
		this.replyTopicPage = replyTopicPage;
	}

	private List<ReplyTopic> myReplyTopicList;//

	public List<ReplyTopic> getMyReplyTopicList() {
		return myReplyTopicList;
	}

	public void setMyReplyTopicList(List<ReplyTopic> myReplyTopicList) {
		this.myReplyTopicList = myReplyTopicList;
	}

	private final static int TOPIC_PAGE_SIZE = 5;//
	private int index;//

	public int getIndex() {
		return index;
	}

	public void setIndex(int index) {
		this.index = index;
	}

	private ReplyTopicService replyTopicService;
	private ArrayList<ReplyTopic> replysList;

	private Map<Long, ArrayList<ReplyReply>> rreplysMap;
	private Map<Long, ArrayList<ReplyMassage>> rmassageMap;
	private ArrayList<Topic> topicsList;
	private ArrayList<Topic> topTenList;
	private ArrayList<GroupHelp> groupHelpsList;

	public ArrayList<GroupHelp> getGroupHelpsList() {
		return groupHelpsList;
	}

	public void setGroupHelpsList(ArrayList<GroupHelp> groupHelpsList) {
		this.groupHelpsList = groupHelpsList;
	}
	


	public Map<Long, ArrayList<ReplyMassage>> getRmassageMap() {
		return rmassageMap;
	}

	public void setRmassageMap(Map<Long, ArrayList<ReplyMassage>> rmassageMap) {
		this.rmassageMap = rmassageMap;
	}

	public Map<Long, ArrayList<ReplyReply>> getRreplysMap() {
		return rreplysMap;
	}

	public void setRreplysMap(Map<Long, ArrayList<ReplyReply>> rreplysMap) {
		this.rreplysMap = rreplysMap;
	}

	public ArrayList<Topic> getTopTenList() {
		return topTenList;
	}

	public void setTopTenList(ArrayList<Topic> topTenList) {
		this.topTenList = topTenList;
	}


	public ArrayList<Topic> getTopicsList() {
		return topicsList;
	}

	public void setTopicsList(ArrayList<Topic> topicsList) {
		this.topicsList = topicsList;
	}

	private Long userId;

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public ArrayList<ReplyTopic> getReplysList() {
		return replysList;
	}

	public void setReplysList(ArrayList<ReplyTopic> replysList) {
		this.replysList = replysList;
	}

	public String getIsSuccess() {
		return isSuccess;
	}

	public void setIsSuccess(String isSuccess) {
		this.isSuccess = isSuccess;
	}

	public ReplyTopicService getReplyTopicService() {
		return replyTopicService;
	}

	@Autowired
	public void setReplyTopicService(ReplyTopicService replyTopicService) {
		this.replyTopicService = replyTopicService;
	}

	private Long groupId; // 发表话题时，该话题所属的组的id
	private Long topicId;

	public Long getTopicId() {
		return topicId;
	}

	public void setTopicId(Long topicId) {
		this.topicId = topicId;
	}

	public Long getGroupId() {
		return groupId;
	}

	public void setGroupId(Long groupId) {
		this.groupId = groupId;
	}

	public Topic getTopic() {
		return topic;
	}

	public void setTopic(Topic topic) {
		this.topic = topic;
	}

	public TopicService getTopicService() {
		return topicService;
	}

	@Autowired
	public void setTopicService(TopicService topicService) {
		this.topicService = topicService;
	}

	public GroupService getGroupService() {
		return groupService;
	}

	public MemberService getMemberService() {
		return memberService;
	}

	@Autowired
	public void setMemberService(MemberService memberService) {
		this.memberService = memberService;
	}

	@Autowired
	public void setGroupService(GroupService groupService) {
		this.groupService = groupService;
	}

	/**
	 * 跳转到topic
	 * 
	 * @return gotoEachTopic
	 */
	public String gotoEachTopic() {
		isSuccess = "gotoEachTopic";
		return isSuccess;
	}

	/**
	 * 跳转到添加topic
	 * 
	 * @return gotoAddTopic
	 */
	public String gotoAddTopic() {
		isSuccess = "gotoAddTopic";
		return isSuccess;
	}

	/**
	 * 显示一条topic
	 * 
	 * @return showOneSuccess
	 */
	public String showOneTopic() {
		isSuccess = "showOneSuccess";

		topic = topicService.getOneTopic(topicId);
		replysList = replyTopicService.allReplybyId(topicId);
		rreplysMap = new HashMap<Long, ArrayList<ReplyReply>>();
		for (ReplyTopic replyTopic : replysList) {
			ArrayList<ReplyReply> rreplysList = new ArrayList<ReplyReply>();
			rreplysList = replyTopicService.rReplybyId(replyTopic.getReplyTopicId());
			if (rreplysList.size() != 0) {
				rreplysMap.put(replyTopic.getReplyTopicId(), rreplysList);
			}
		}
		return isSuccess;
	}
	/**
	 *删除一条topic
	 * 
	 * @return deltopic
	 */

	public String delTopic(){
		isSuccess="delTopic";
		Topic t=new Topic();
		t=topicService.getOneTopic(topicId);
		groupId=t.getGroup().getGroupId();
		topicService.delTopic(t);
		return isSuccess;
		
	}
	/**
	 * 添加一条topic
	 * 
	 * @return addSuccess
	 */
	public String add() {
		isSuccess = "addSuccess";
		topic.setGroup(groupService.selectGroup(groupId));
		topic.setTopicAgree(0);
		topic.setNums(0);
		HttpServletRequest request = ServletActionContext.getRequest();
		HttpSession session = request.getSession();
		User u=(User) session.getAttribute("user");//得到session的user对象
		topic.setUser(u);
		topic.setTopicCreateTime(new Date());
		topicService.addTopic(topic);
		return isSuccess;
	}

	/**
	 * 修改话题赞 topicAgree
	 * 
	 * @return addAgree
	 */
	public String addAgree() {

		isSuccess = "addAgree";
		topic = topicService.getOneTopic(topic.getTopicId());
		topic.setTopicAgree(topic.getTopicAgree() + 1);
		topicService.addTopic(topic);
		isAgree = 2;
		return isSuccess;
	}

	/**
	 * 显示与我有关的话题及回复
	 * 
	 * @return myTopic
	 */
	public String myTopic() {
		isSuccess = "myTopic";
		HttpServletRequest request = ServletActionContext.getRequest();
		HttpSession session = request.getSession();
		User u = (User) session.getAttribute("user");// 得到session的user对象
		
		topicsList=topicService.allUserTopics(u.getId());

		rmassageMap = new HashMap<Long, ArrayList<ReplyMassage>> ();
		
	    for (Topic topic : topicsList) {
	    	    ArrayList<ReplyMassage> rMassageList = new ArrayList<ReplyMassage>();
                rMassageList=replyTopicService.allReplyMas(topic.getTopicId());
                int nums=rMassageList.size();
                num=num+nums;
                if (rMassageList.size() != 0) {
                  rmassageMap.put(topic.getTopicId(),rMassageList);
                }
                
		}
		return isSuccess;
	}

	/**
	 * topic 分页显示
	 * 
	 * @return pageTopic
	 */
	public String showByPage() {
		isSuccess = "pageTopic";

//		if (replyTopicPage == null) {
//			replyTopicPage = new Page<ReplyTopic>();
//			replyTopicPage.setIndex(1);
//		}
//		replyTopicPage.setPageSize(TOPIC_PAGE_SIZE);
//		replyTopicPage = replyTopicService.showReplyTopicPage("from ReplyTopic where userId = '" + userId + "'", TOPIC_PAGE_SIZE, index);
//		myReplyTopicList = replyTopicPage.getResults();
//		replyTopicPage = new Page<ReplyTopic>(replyTopicPage.getIndex(), TOPIC_PAGE_SIZE, replyTopicPage.getTotalRecord(), replyTopicPage.getTotalPage(), replyTopicPage.getResults());
//		if (replyTopicPage.getTotalPage() > TOPIC_PAGE_SIZE) {
//			if (replyTopicPage.getTotalPage() - replyTopicPage.getIndex() >= TOPIC_PAGE_SIZE) {
//				pagebegin = replyTopicPage.getIndex();
//				pageend = replyTopicPage.getIndex() + 4;
//			} else {
//				pagebegin = replyTopicPage.getIndex();
//				pageend = replyTopicPage.getTotalPage();
//			}
//		} else {
//			pagebegin = 1;
//			pageend = replyTopicPage.getTotalPage();
//		}
//		num = (long) myReplyTopicList.size();
//		topicsList = new ArrayList<Topic>();
//		User user = new User();
//		ReplyHelp replyHelp = new ReplyHelp();
//		replyHelpsList = new ArrayList<ReplyHelp>();
//		for (ReplyTopic replyTopic : myReplyTopicList) {
//			Topic topic = new Topic();
//			topic = topicService.getOneTopic(replyTopic.getTopicId());
//			topicsList.add(topic);
//
//			replyHelp.setReplyTopic(replyTopic);
//			replyHelp.setTopic(topic);
//			replyHelp.setUser(user);
//			replyHelpsList.add(replyHelp);
//		}

		return isSuccess;
	}

	/**
	 * 话题讨论，(最新话题 ，话题排行榜)
	 * 
	 * @return pageTopic
	 */
	public String talkTopic() {
		isSuccess = "talkTopic";
		topicsList = topicService.allTopics();

		topTenList = topicService.topTenTopics();
		return isSuccess;
	}

	/**
	 * Search话题
	 * 
	 * @return searchTopic
	 */
	public String searchTopic() {
		isSuccess = "searchTopic";
		topicsList = topicService.searchTopics(topic.getTopicName());
		
		topTenList = topicService.topTenTopics();
		return isSuccess;
	}
	

	public String hotTopic() {
		isSuccess = "hotTopic";
		topTenList = topicService.topTenTopics();
		return isSuccess;
	}
	public List<ReplyTopic> rtByPage(String hql,int pageSize, int index){
		if (rtPage == null) {
			rtPage = new Page<ReplyTopic>();
		}if(index==0){
			index=1;
		}
		rtPage = replyTopicService.showReplyTopicPage(hql, pageSize, index);//
		replyTopicsList = rtPage.getResults();
		rtPage.setIndex(index);
		rtPage.setPageSize(MY_RT_PAGE_SIZE);
		rtPage = new Page<ReplyTopic>(rtPage.getIndex(),MY_RT_PAGE_SIZE, rtPage.getTotalRecord(), rtPage.getTotalPage(), rtPage.getResults());
		if (rtPage.getTotalPage() > MY_RT_PAGE_SIZE) {
			if (rtPage.getTotalPage() - rtPage.getIndex() >=MY_RT_PAGE_SIZE) {
				pagebegin = rtPage.getIndex();
				pageend = rtPage.getIndex() + 4;
			} else {
				pagebegin = rtPage.getIndex();
				pageend = rtPage.getTotalPage();
			}
		} else {
			pagebegin = 1;
			pageend = rtPage.getTotalPage();
		}
		return replyTopicsList;
		
	}
}
