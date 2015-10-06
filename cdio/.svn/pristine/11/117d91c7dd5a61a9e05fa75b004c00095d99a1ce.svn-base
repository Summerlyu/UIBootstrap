package cn.edu.fjnu.cdio.service.res;

import java.util.List;

import cn.edu.fjnu.cdio.model.res.SearchResult;

/**
 * @author  作者:林劭苾
 *
 * @version 创建时间：2013-05-20 下午 11:47
 *
 */

public interface SearchService {
	
	//实现全文搜索
	public List<SearchResult> fullTextSearch(String keywords, String type, int pageSize, int currentPage);
	
	//实现相关文档搜索
	public List<SearchResult> relativeSearch(String keywords);
	
	//获取总页数
	public int getPageNum();
}
