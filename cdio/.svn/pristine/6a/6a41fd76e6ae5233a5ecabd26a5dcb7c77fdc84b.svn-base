package cn.edu.fjnu.cdio.dao.bgm;

import cn.edu.fjnu.cdio.model.bgm.Visitor;
import cn.edu.fjnu.cdio.service.bgm.BgmQueryHelper;
import cn.edu.fjnu.cdio.utils.Page;

public interface VisitorDao {
	/**
	 * 
	 * 方法名: save
	 * 
	 * 描 述： 添加新的访客信息
	 * 
	 * @param visitor
	 *            Visitor实体
	 * 
	 * @return void
	 * 
	 * @throws
	 */
	public void save(Visitor visitor);

	/**
	 * 
	 * 方法名: getVisitorByPage
	 * 
	 * 描 述： 获取所有的访客信息（带分页），含查询信息
	 * 
	 * @param page
	 *            访客信息及页面信息 Page
	 * @param helper
	 *            查询所需的辅助类 BgmQueryHelper
	 * @return
	 * 
	 * @return Page<Visitor> Visitor的Page对象
	 * 
	 * @throws
	 */
	public Page<Visitor> getVisitorByPage(Page<Visitor> page,
			BgmQueryHelper helper);

	/**
	 * 
	 * 方法名: get
	 * 
	 * 描 述：根据visitorId获得一条投诉信息记录
	 * 
	 * @param visitorId
	 *            从页面获得的visitorId
	 * @return
	 * 
	 * @return Visitor Visitor实体
	 * 
	 * @throws
	 */
	public Visitor get(long visitorId);

	/**
	 * 
	 * 方法名: delete
	 * 
	 * 描 述： 删除访客信息
	 * 
	 * @param visitor
	 *            Visitor实体
	 * 
	 * @return void
	 * 
	 * @throws
	 */
	public void delete(Visitor visitor);
}
