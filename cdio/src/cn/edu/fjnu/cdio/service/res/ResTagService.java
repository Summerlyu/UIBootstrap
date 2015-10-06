package cn.edu.fjnu.cdio.service.res;

import java.util.List;

import cn.edu.fjnu.cdio.model.res.ResTag;

/**
 * @author 林劭苾
 * 
 * @version 创建时间：2013-05-22 下午02:10
 */

public interface ResTagService {

	public void delete(String tagContent, long resId);
	
	public void deleteTotalTags(long resId); //删除某篇文章所有的标签
	
	public List<ResTag> getTagById(long ResId);
}
