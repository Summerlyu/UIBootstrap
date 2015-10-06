package cn.edu.fjnu.cdio.service.mat;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.edu.fjnu.cdio.dao.mat.SearchDao;
import cn.edu.fjnu.cdio.model.coa.Course;
/**
 * @author 作者:第五组
 * 
 * @version 创建时间：2013-05-15 下午01:50:49
 * 
 *          功能说明:匹配服务实现
 * 
 * @version 修改时间：2013-05-15
 * 
 *          修改原因如下：
 * 
 */
@Transactional
@Service(value = "searchService")
public class SearchServiceImpl implements SearchService {

	public SearchDao getSearchDao() {
		return searchDao;
	}

	@Autowired
	public void setSearchDao(SearchDao searchDao) {
		this.searchDao = searchDao;
	}

	private SearchDao searchDao;
	
	/* (non-Javadoc)
	 * @see cn.edu.fjnu.cdio.service.mat.SearchService#searchMatchedCourse(int, int, java.util.Map)
	 */
	@Override
	public Map<String, Object> searchMatchedCourse(int pageSize, int index,
			Map<String, Object> params) {
		// TODO Auto-generated method stub
		return searchDao.searchMatchedCourse(pageSize, index, params);
	}

	/* (non-Javadoc)
	 * @see cn.edu.fjnu.cdio.service.mat.SearchService#searchMatchedCourse(int, int, java.lang.String)
	 */
	@Override
	public Map<String, Object> searchMatchedCourse(int pageSize, int index,
			String keywords) {
		// TODO Auto-generated method stub
		return searchDao.searchMatchedCourse(pageSize, index, keywords);
	}

}
