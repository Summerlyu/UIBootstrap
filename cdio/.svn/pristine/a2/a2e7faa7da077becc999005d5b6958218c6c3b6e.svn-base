/**
 * 
 */
package cn.edu.fjnu.cdio.dao.test;

import java.util.Map;

import cn.edu.fjnu.cdio.model.test.FeedBack;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * 反馈表接口
 * 
 * @author 温武汉
 * @version 2013-5-14
 * 
 */
public interface FeedBackDao {
	/**
	 * 保存反馈信息对象
	 * 
	 * @param feedback
	 *            Feedback对象
	 */
	void save(FeedBack feedback);

	/**
	 * 通过一个id来获取一个FeedBack对象
	 * 
	 * @param feedbackId
	 *            feedbackId
	 * @return FeedBack对象
	 */
	FeedBack getFeedBackById(Long feedBackId);

	/**
	 * 删除反馈信息表的一条记录
	 * 
	 * @param feedback
	 *            FeedBack对象
	 */
	void delete(FeedBack feedBack);

	/**
	 * 更新反馈信息表
	 * 
	 * @param feedback
	 *            FeedBack对象
	 */
	void update(FeedBack feedBack);

	/**
	 * 获取FeedBackList，是带有组合查询的
	 * 
	 * @param pageSize
	 *            页面要显示几个内容
	 * @param index
	 *            第几页
	 * @param params
	 *            组合查询的map，键是FeedBack类的属性（不是t_feedback表的字段）,值是你要设的值
	 * @return 带有FeedBack的page
	 */
	Page<FeedBack> loadPagedFeedBacks(int pageSize, int index,
			Map<String, Object> params);

}
