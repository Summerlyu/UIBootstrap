package cn.edu.fjnu.cdio.controller.mat;

import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javassist.compiler.ast.Keyword;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import cn.edu.fjnu.cdio.model.coa.Course;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.mat.vo.MatInfoBean;
import cn.edu.fjnu.cdio.model.res.PerUpload;
import cn.edu.fjnu.cdio.service.coa.CoachMgrService;
import cn.edu.fjnu.cdio.service.common.UserService;
import cn.edu.fjnu.cdio.service.mat.MatchService;
import cn.edu.fjnu.cdio.service.mat.SearchService;
import cn.edu.fjnu.cdio.utils.Page;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

@Controller
public class SearchAction extends ActionSupport {

	public String getTeacherName() {
		return teacherName;
	}

	public void setTeacherName(String teacherName) {
		this.teacherName = teacherName;
	}

	public String getSubjectName() {
		return subjectName;
	}

	public void setSubjectName(String subjectName) {
		this.subjectName = subjectName;
	}

	public Double getPriceBegin() {
		return priceBegin;
	}

	public void setPriceBegin(Double priceBegin) {
		this.priceBegin = priceBegin;
	}

	public Double getPriceEnd() {
		return priceEnd;
	}

	public void setPriceEnd(Double priceEnd) {
		this.priceEnd = priceEnd;
	}

	public Date getClassTimeBegin() {
		return classTimeBegin;
	}

	public void setClassTimeBegin(Date classTimeBegin) {
		this.classTimeBegin = classTimeBegin;
	}

	public Date getClassTimeEnd() {
		return classTimeEnd;
	}

	public void setClassTimeEnd(Date classTimeEnd) {
		this.classTimeEnd = classTimeEnd;
	}

	public List<Course> getResultList() {
		return resultList;
	}

	public void setResultList(List<Course> resultList) {
		this.resultList = resultList;
	}

	public Page<Course> getPage() {
		return page;
	}

	public void setPage(Page<Course> page) {
		this.page = page;
	}

	public Integer getPageSize() {
		return pageSize;
	}

	public void setPageSize(Integer pageSize) {
		this.pageSize = pageSize;
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

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private SearchService searchService;

	private String keyword = "";
	private int currentPage;

	private String teacherName ;
	private String subjectName ;
	private Double priceBegin ;
	private Double priceEnd ;
	private Date classTimeBegin;
	private Date classTimeEnd ;
	
	private Page<Course> page;
	private Integer pageSize=10;
	private Integer index;
	private List<Course> resultList;
	private Integer pageMin;
	private Integer pageMax;
	/**
	 * @return the keyword
	 */
	public String getKeyword() {
		return keyword;
	}

	/**
	 * @param keyword
	 *            the keyword to set
	 */
	public void setKeyword(String keyword) {
		this.keyword = keyword;
	}

	/**
	 * @return the currentPage
	 */
	public int getCurrentPage() {
		return currentPage;
	}

	/**
	 * @param currentPage
	 *            the currentPage to set
	 */
	public void setCurrentPage(int currentPage) {
		this.currentPage = currentPage;
	}

	/**
	 * @return the searchService
	 */
	public SearchService getSearchService() {
		return searchService;
	}

	/**
	 * @param searchService
	 *            the searchService to set
	 */
	@Autowired
	public void setSearchService(SearchService searchService) {
		this.searchService = searchService;
	}

//	// 关键字搜索
//	public String search() throws Exception {
//		// TODO Auto-generated method stub
//		ActionContext ctx = ActionContext.getContext();
//		System.out.println(keyword);
//		if (this.keyword.equals("")) {
//			this.keyword = (String) ctx.getSession().get("keyword");
//		} else {
//			ctx.getSession().put("keyword", keyword);
//		}
//		if(currentPage==0){
//			currentPage=1;
//		}
//		resultList = searchService.searchMatchedCourse(pageSize, currentPage,
//				keyword);
//		System.out.println("测试搜索:" + keyword);
//
//		Iterator<Course> iterator = resultList.iterator();
//
//		int i = 0;
//		while (iterator.hasNext()) {
//
//			Course s_book = iterator.next();
//			System.out.println("第" + i + "条:");
//			System.out.println(s_book.getDescribtion());
//			System.out.println(s_book.getEp());
//			System.out.println(s_book.getUser().getName());
//			System.out.println(s_book.getTeachStyle());
//			i++;
//		}
//		ctx.getSession().put("resultList", resultList);
//		return SUCCESS;
//	}
//
//	// 高级条件搜索,map传递参数:teacherName,subjectName,priceBegin,priceEnd,classTimeBegin,classTimeEnd
//	@SuppressWarnings("unchecked")
//	public String advanceSearch() throws Exception {
//
//		
//		ActionContext ctx = ActionContext.getContext();
//		//模拟数据
//		teacherName = "王苇棋";
//		subjectName = "语文";
//		priceBegin = Double.parseDouble(0 + "");
//		priceEnd = Double.parseDouble(300 + "");
//		classTimeBegin = new Date(Long.parseLong("20130505"));
//		classTimeEnd = new Date(System.currentTimeMillis());
//		
//		
//		Map<String, Object> params = new HashMap<String, Object>();
//		params.put("teacherName", teacherName);
//		params.put("subjectName", subjectName);
//		params.put("priceBegin", priceBegin);
//		params.put("priceEnd", priceEnd);
//		params.put("classTimeBegin", classTimeBegin);
//		params.put("classTimeEnd", classTimeEnd);
//
//		resultList = searchService.searchMatchedCourse(pageSize, currentPage,
//				params);
//
//		Iterator<Course> iterator = resultList.iterator();
//
//		int i = 0;
//		while (iterator.hasNext()) {
//
//			Course s_book = iterator.next();
//			System.out.println("第" + i + "条:");
//			System.out.println(s_book.getDescribtion());
//			System.out.println(s_book.getEp());
//			System.out.println(s_book.getUser().getName());
//			System.out.println(s_book.getTeachStyle());
//			i++;
//		}
//		ctx.getSession().put("resultList", resultList);
//		return SUCCESS;
//	}

	public String search(){
		try{			
			ActionContext ctx = ActionContext.getContext();
			System.out.println(keyword);
			if (this.keyword.equals("")) {
				this.keyword = (String) ctx.getSession().get("keyword");
			} else {
				ctx.getSession().put("keyword", keyword);
			}
			if(index==null){
				index=1;
			}
			
			System.out.println("pageSize:"+pageSize+",index:"+index+",keyword:"+keyword);
			Map<String,Object> map = searchService.searchMatchedCourse(pageSize, index,
					keyword);
			if(page == null){
			page = new Page();
			}
			page.setResults((List<Course>) map.get("resultList"));
			page.setPageSize(pageSize);
			page.setTotalRecord(Integer.parseInt(map.get("totalRecord")+""));
			page.countTotalPage();
			
			//当前页码,分页大小，总数量，总页数，结果集)
			page=new Page<Course>(page.getIndex(),pageSize,page.getTotalRecord(),page.getTotalPage(),page.getResults());
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
		}catch(Exception e){
			e.printStackTrace();
		}
		 return SUCCESS;
	}
	
	public String advanceSearch() throws Exception {
		if(page == null){
			page = new Page();
			}
		ActionContext ctx = ActionContext.getContext();
		try{			
			if(index==null){
				index=1;
			}
			System.out.println("subjectname:"+subjectName);
		//模拟数据
		/*teacherName = "王苇棋";
		subjectName = "语文";
		priceBegin = Double.parseDouble(0 + "");
		priceEnd = Double.parseDouble(300 + "");
		classTimeBegin = new Date(Long.parseLong("20130505"));
		classTimeEnd = new Date(System.currentTimeMillis());*/
		
		
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("teacherName", teacherName);
		params.put("subjectName", subjectName);
		params.put("priceBegin", priceBegin);
		params.put("priceEnd", priceEnd);
		params.put("classTimeBegin", classTimeBegin);
		params.put("classTimeEnd", classTimeEnd);

		if(currentPage ==0){
			currentPage=1;
		}
		Map<String,Object> map = searchService.searchMatchedCourse(pageSize, currentPage,
				params);
		
		page.setResults((List<Course>) map.get("resultList"));
		page.setPageSize(pageSize);
		page.setTotalRecord(Integer.parseInt(map.get("totalRecord")+""));
		page.countTotalPage();
		

		page=new Page<Course>(page.getIndex(),pageSize,page.getTotalRecord(),page.getTotalPage(),page.getResults());
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
		
		}catch(Exception e){
			e.printStackTrace();
		}
		return SUCCESS;
	}
	public String mainSearch() {
		return SUCCESS;
	}
	
	public String mainAdvanceSearch(){
		return SUCCESS;
	}

}
