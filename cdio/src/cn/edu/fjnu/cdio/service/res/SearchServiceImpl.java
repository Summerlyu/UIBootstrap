package cn.edu.fjnu.cdio.service.res;

import java.util.List;

import cn.edu.fjnu.cdio.lucene.res.LuceneSearch;
import cn.edu.fjnu.cdio.model.res.SearchResult;

/**
 * @author  作者:林劭苾
 *
 * @version 创建时间：2013-05-20 下午 11:47
 *
 */

public class SearchServiceImpl implements SearchService {
	
	LuceneSearch luceneSearch = null;
	List<SearchResult> searchList = null;
	
	public SearchServiceImpl() {
		
	}
	
	@Override
	public List<SearchResult> fullTextSearch(String keywords, String type, int pageSize, int currentPage) {
		
		luceneSearch = new LuceneSearch();
		searchList = luceneSearch.fullTextSearch(keywords, type, pageSize, currentPage);

		return searchList;
	}

	@Override
	public List<SearchResult> relativeSearch(String keywords) {

		luceneSearch = new LuceneSearch();
		searchList = luceneSearch.relativeSearch(keywords);

		return searchList;
	}
	
	@Override
	public int getPageNum(){
		
		return luceneSearch.getPageNum();
	}

}
