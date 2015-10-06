package cn.edu.fjnu.cdio.dao.bgm;

import java.util.List;

import cn.edu.fjnu.cdio.model.bgm.Complaint;
import cn.edu.fjnu.cdio.service.bgm.BgmQueryHelper;
import cn.edu.fjnu.cdio.utils.Page;

public interface ComplaintDao {
	/**
	 * 
	 * 方法名: save
	 * 
	 * 描 述： 添加新的投诉信息
	 * 
	 * @param complaint
	 *            Complaint实体
	 * 
	 * @return void
	 * 
	 * @throws
	 */
	public void save(Complaint complaint);

	/**
	 * 
	 * 方法名: delete
	 * 
	 * 描 述： 删除投诉信息
	 * 
	 * @param complaint
	 *            Complaint实体
	 * 
	 * @return void
	 * 
	 * @throws
	 */
	public void delete(Complaint complaint);

	/**
	 * 
	 * 方法名: update
	 * 
	 * 描 述： 修改投诉信息
	 * 
	 * @param complaint
	 *            Complaint实体
	 * 
	 * @return void
	 * 
	 * @throws
	 */
	public void update(Complaint complaint);

	/**
	 * 
	 * 方法名: get
	 * 
	 * 描 述：根据compID获得一条投诉信息记录
	 * 
	 * @param compID
	 *            从页面获得的compID
	 * @return
	 * 
	 * @return Complaint Complaint实体
	 * 
	 * @throws
	 */
	public Complaint get(long compID);

	/**
	 * 
	 * 方法名: loadAll
	 * 
	 * 描 述： 获取所有的投诉信息的List
	 * 
	 * @return
	 * 
	 * @return List<Complaint> Complaint的List
	 * 
	 * @throws
	 */
	public List<Complaint> loadAll();

	/**
	 * 
	 * 方法名: getComByPage
	 * 
	 * 描 述：获取所有的投诉信息（带分页），不含查询信息
	 * 
	 * @param index
	 *            页面当前页码索引 index
	 * @param size
	 *            每页显示的记录条数
	 * @return
	 * 
	 * @return Page<Complaint> Complaint的Page对象
	 * 
	 * @throws
	 */
	public Page<Complaint> getComByPage(int index, int size);

	/**
	 * 
	 * 方法名: loadAllComps
	 * 
	 * 描 述： 获取所有的投诉信息（带分页），含查询信息
	 * 
	 * @param page
	 *            投诉信息及页面信息 Page
	 * @param helper
	 *            查询所需的辅助类 BgmQueryHelper
	 * @return
	 * 
	 * @return Page<Complaint> Complaint的Page对象
	 * 
	 * @throws
	 */
	public Page<Complaint> loadAllComps(Page<Complaint> page,
			BgmQueryHelper helper);
}
