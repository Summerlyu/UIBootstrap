/**
 * 
 */
package cn.edu.fjnu.cdio.service.test;

import java.util.List;

import cn.edu.fjnu.cdio.model.test.FeedBack;

/**
 * @author 温武汉
 * 
 * @version ：2013-5-15 下午05:29:46
 * 
 */
public interface FeedBackService {

	/**
	 * 保存题目
	 * 
	 * @param feedBack
	 *            FeedBack对象
	 */
	void create(List<FeedBack> feedBacks);
}
