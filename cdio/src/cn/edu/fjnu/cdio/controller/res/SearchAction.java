package cn.edu.fjnu.cdio.controller.res;

import java.util.List;

import org.apache.struts2.ServletActionContext;

import cn.edu.fjnu.cdio.model.res.Search;
import cn.edu.fjnu.cdio.model.res.SearchResult;
import cn.edu.fjnu.cdio.service.res.SearchService;
import cn.edu.fjnu.cdio.service.res.SearchServiceImpl;

import com.opensymphony.xwork2.ActionSupport;

/**
 * @author  作者:林劭苾
 *
 * @version 创建时间：2013-05-20 下午 11:50
 *
 */
public class SearchAction extends ActionSupport {
	
	private Search search = null;
	private List<SearchResult> searchList = null;
	private SearchResult searchResult = null;
	private int pageSize = 10; //每页显示的搜索条目
	private int currentPage = 1; //当前页码
	private int pageNum = 0; //记录总页数

	public SearchResult getSearchResult() {
		return searchResult;
	}

	public void setSearchResult(SearchResult searchResult) {
		this.searchResult = searchResult;
	}

	public List<SearchResult> getSearchList() {
		return searchList;
	}

	public void setSearchList(List<SearchResult> searchList) {
		this.searchList = searchList;
	}

	public void setSearch(Search search) {
		this.search = search;
	}

	public Search getSearch() {
		return search;
	}
	
	public int getCurrentPage() {
		return currentPage;
	}

	public void setCurrentPage(int currentPage) {
		this.currentPage = currentPage;
	}
	
	public int getPageNum() {
		return pageNum;
	}

	public void setPageNum(int pageNum) {
		this.pageNum = pageNum;
	}

	public String fullTextSearch(){
		
System.out.println("keywords:"+search.getKeywords());
System.out.println("type:"+search.getType());
System.out.println("开始进行搜索……");
		
		SearchService searchService = new SearchServiceImpl();
		this.searchList = 
				searchService.fullTextSearch(search.getKeywords(),search.getType(),pageSize,currentPage);
		this.pageNum = 
				searchService.getPageNum();
		
System.out.println("总页数为:"+pageNum);
		ServletActionContext.getRequest().setAttribute("searchList", searchList); 
		ServletActionContext.getRequest().setAttribute("pageNum", pageNum); 

System.out.println("搜索结束……");			
		return "searchResultPage";
	}
}
