package cn.edu.fjnu.cdio.dao.bgm;

import java.util.List;
import cn.edu.fjnu.cdio.model.bgm.Parameter;
import cn.edu.fjnu.cdio.model.bgm.Role;
import cn.edu.fjnu.cdio.service.bgm.BgmQueryHelper;
import cn.edu.fjnu.cdio.utils.Page;

public interface ParameterDao {
	/**
	 * 
	 * 方法名: save
	 * 
	 * 描 述： 添加新的参数文件
	 * 
	 * @param parameter
	 *            Parameter实体
	 * 
	 * @return void
	 * 
	 * @throws
	 */
	public void save(Parameter parameter);

	/**
	 * 
	 * 方法名: delete
	 * 
	 * 描 述： 删除参数文件
	 * 
	 * @param parameter
	 *            Parameter实体
	 * 
	 * @return void
	 * 
	 * @throws
	 */
	public void delete(Parameter parameter);

	/**
	 * 
	 * 方法名: update
	 * 
	 * 描 述： 修改参数文件信息
	 * 
	 * @param parameter
	 *            Parameter实体
	 * 
	 * @return void
	 * 
	 * @throws
	 */
	public void update(Parameter parameter);

	/**
	 * 
	 * 方法名: get
	 * 
	 * 描 述：根据paraID获取一条参数文件记录
	 * 
	 * @param paraID
	 *            从页面获得的paraID
	 * @return
	 * 
	 * @return Parameter Parameter实体
	 * 
	 * @throws
	 */
	public Parameter get(long paraID);

	/**
	 * 
	 * 方法名: loadAll
	 * 
	 * 描 述： 获取所有的参数文件的List
	 * 
	 * @return
	 * 
	 * @return List<Parameter> Parameter的List
	 * 
	 * @throws
	 */
	public List<Parameter> loadAll();

	/**
	 * 
	 * 方法名: loadPaged
	 * 
	 * 描 述： 获取所有的参数文件信息（带分页），不含查询信息
	 * 
	 * @param index
	 *            页面当前页码索引 index
	 * @return
	 * 
	 * @return Page<Parameter> Parameter的Page对象
	 * 
	 * @throws
	 */
	public Page<Parameter> loadPaged(int index);

	/**
	 * 
	 * 方法名: getPermByPage
	 * 
	 * 描 述： 获取所有的参数文件信息（带分页），不含查询信息
	 * 
	 * @param index
	 *            页面当前页码索引 index
	 * @param size
	 *            每页显示的记录条数
	 * @return
	 * 
	 * @return Page<Parameter> Parameter的Page对象
	 * 
	 * @throws
	 */
	public Page<Parameter> getPermByPage(int index, int size);

	/**
	 * 
	 * 方法名: loadAllParas
	 * 
	 * 描 述： 获取所有的参数文件信息（带分页），含查询信息
	 * 
	 * @param page
	 *            参数文件信息及页面信息 Page
	 * @param helper
	 *            查询所需的辅助类 BgmQueryHelper
	 * @return
	 * 
	 * @return Page<Parameter> Parameter的Page对象
	 * 
	 * @throws
	 */
	public Page<Parameter> loadAllParas(Page<Parameter> page,
			BgmQueryHelper helper);
}
