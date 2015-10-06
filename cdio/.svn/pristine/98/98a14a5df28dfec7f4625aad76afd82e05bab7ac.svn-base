/**
 * 学员系统controller包
 */
package cn.edu.fjnu.cdio.controller.stu;

import java.net.URLDecoder;
import java.net.URLEncoder;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.poi.ss.formula.functions.T;
import org.springframework.beans.propertyeditors.URLEditor;
import org.springframework.stereotype.Controller;

import com.opensymphony.xwork2.ActionContext;


import cn.edu.fjnu.cdio.controller.stu.util.QuestionImg;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.stu.Subject;
import cn.edu.fjnu.cdio.model.stu.Topiclib;
import cn.edu.fjnu.cdio.model.test.Question;
import cn.edu.fjnu.cdio.service.stu.SubjectService;
import cn.edu.fjnu.cdio.service.stu.TopiclibService;
import cn.edu.fjnu.cdio.utils.Page;


/**
 * 题库action
 * @author 张长峰
 * @version [1,2013-5-20]
 * @see /cdio2010/src/cn/edu/fjnu/cdio/controller/stu/BaseAction.java
 * @since
 */
@SuppressWarnings("serial")
@Controller(value="topiclibAction")
public class TopiclibAction extends BaseAction {
	/**
	 * 注入topiclibService
	 */
	private TopiclibService topiclibService;

	public TopiclibService getTopiclibService() {
		return topiclibService;
	}
	@Resource
	public void setTopiclibService(TopiclibService topiclibService) {
		this.topiclibService = topiclibService;
	}
	/**
	 * 注入subjectService
	 */
	private SubjectService subjectService;
	
	public SubjectService getSubjectService() {
		return subjectService;
	}
	@Resource
	public void setSubjectService(SubjectService subjectService) {
		this.subjectService = subjectService;
	}
	
	private List<Topiclib> topiclibs;
	private Topiclib topiclib;
	private List<Subject> subjects;
	private Subject subject;
	private Page<T> page;
	private Integer crentTopiclibId;
	
	
	public Integer getCrentTopiclibId() {
		return crentTopiclibId;
	}
	public void setCrentTopiclibId(Integer crentTopiclibId) {
		this.crentTopiclibId = crentTopiclibId;
	}
	public Page<T> getPage() {
		return page;
	}
	public void setPage(Page<T> page) {
		this.page = page;
	}
	public Subject getSubject() {
		return subject;
	}
	public Topiclib getTopiclib() {
		return topiclib;
	}
	public void setTopiclib(Topiclib topiclib) {
		this.topiclib = topiclib;
	}
	public void setSubject(Subject subject) {
		this.subject = subject;
	}
	public List<Topiclib> getTopiclibs() {
		return topiclibs;
	}
	public void setTopiclibs(List<Topiclib> topiclibs) {
		this.topiclibs = topiclibs;
	}
	
	public List<Subject> getSubjects() {
		return subjects;
	}
	public void setSubjects(List<Subject> subjects) {
		this.subjects = subjects;
	}
	/**
	 * 精题收藏夹主页
	 * @return topiclib，questionPage
	 */
	public String toTopiclib(){
		User user=(User) request.getSession().getAttribute("user");
		topiclibs=topiclibService.getTopiclibList(user);	
		Map<String, Object> params=new HashMap<String, Object>();
		page=subjectService.getQuestionPage(page.getIndex(), page.getPageSize(), params);
		if(page.getResults()!=null){
			List<T> list=page.getResults();
			Question question=null;
			for(Object object : list){
				question=(Question)object;
				question.setTitle(QuestionImg.converImgSrc(question.getTitle()));
				question.setA(QuestionImg.converImgSrc(question.getA()));
				question.setB(QuestionImg.converImgSrc(question.getB()));
				question.setC(QuestionImg.converImgSrc(question.getC()));
				question.setD(QuestionImg.converImgSrc(question.getD()));
			}	
		}
		ActionContext.getContext().put("visitor",page);
		return "query";
	}
	/**
	 * 增加题库
	 * @return
	 */
	public String add(){
		/*try {
			String desc=new String(topiclib.getDescription().getBytes("ISO-8859-1"),"utf-8");
			topiclib.setDescription(desc);
			String name=new String(topiclib.getName().getBytes("ISO-8859-1"),"utf-8");
			topiclib.setName(name);
		} catch (Exception e) {
			// TODO: handle exception
		}*/
		topiclib.setCount(0);
		User user=(User) request.getSession().getAttribute("user");
		topiclib.setUserId((int) user.getId());
		topiclibService.addTopiclib(topiclib);
		return "add";
	}
	/**
	 * 
	 * 删除题库
	 * @return
	 */
	public String del(){
		topiclibService.deleteTopiclib(topiclib);
		return "del";
	}
	/**
	 * 修改题库信息（ajax）
	 */
	public void forupd(){
		topiclib=topiclibService.forUpdate(topiclib);
		super.wirteJson(topiclib);
	}
	
	public String upd(){
		
		/*try {
			String desc=new String(topiclib.getDescription().getBytes("ISO-8859-1"),"utf-8");
			topiclib.setDescription(desc);
			String name=new String(topiclib.getName().getBytes("ISO-8859-1"),"utf-8");
			topiclib.setName(name);
		} catch (Exception e) {
			// TODO: handle exception
		}*/
		
		topiclibService.updateTopiclib(topiclib);
		return "upd";
	}
	/**
	 * 增加题目到题库
	 */
	public String addSubject(){
		subject.setTime(new Date());
		subject.setFlag("flag");
		subjectService.saveSubject(subject);
		return "addSubject";
	}
	/**
	 * topiclib分页（stu_mag_topic.jsp）
	 */
	public String getTopiclibPage(){
		Map<String, Object> params=new HashMap<String, Object>();
		User user=(User) request.getSession().getAttribute("user");
		params.put("id", user.getId());
		page=topiclibService.getTopiclibsByPage(page.getIndex(), page.getPageSize(),params);
		
		ActionContext.getContext().put("visitor",page);
		return "getTopiclibPage";
	}
	/**
	 * 具体某题库（stu_topic_list.jsp）
	 */
	public String getTopicListPage(){
		User user=(User) request.getSession().getAttribute("user");
		Map<String, Object> params=new HashMap<String, Object>();	
		params.put("topiclibId", crentTopiclibId);	
		page=subjectService.getSubjectPage(page.getIndex(), page.getPageSize(), params);
		if(page.getResults()!=null){
			List<T> arryList=page.getResults();
			Object object[]=null;
			for(Object objects:arryList ){
				object=(Object[]) objects;
				object[1]=QuestionImg.converImgSrc((String) object[1]);
				object[2]=QuestionImg.converImgSrc((String) object[2]);
				object[3]=QuestionImg.converImgSrc((String) object[3]);
				object[4]=QuestionImg.converImgSrc((String) object[4]);
				object[5]=QuestionImg.converImgSrc((String) object[5]);
				
			}
		}
		ActionContext.getContext().put("visitor",page);
		params.put("id", user.getId());
		topiclibs=topiclibService.getTopiclibList(params);
		return "getTopicListPage";
		
	}
	/**
	 * 转移题目从一个题库到另一个题库
	 */
	public String transferQuestion(){
		Map<String, Object> params=new HashMap<String, Object>();
		params.put("id",subject.getId());
		params.put("topiclibId", subject.getTopiclibId());
		params.put("fromtopiblibid", crentTopiclibId);
		subjectService.transferSubject(params);
		return "transferQuestion";
	}
	/**
	 * 从题库删除题目
	 */
	public String delQuestion(){
		subject.setTopiclibId(crentTopiclibId);
		subjectService.deleteSubject(subject);
		return "delQuestion";
	}
	/**
	 * 标记
	 * 
	 */
	public String tagQuestion(){
		/*try {
			String flag=new String(subject.getFlag().getBytes("ISO-8859-1"),"utf-8");
			subject.setFlag(flag);
		} catch (Exception e) {
			// TODO: handle exception
		}*/
		Map<String, Object> params=new HashMap<String, Object>();
		params.put("id",subject.getId());
		params.put("flag", subject.getFlag());
		subjectService.tagSubject(params);
		return "tagQuestion";
	}
}
