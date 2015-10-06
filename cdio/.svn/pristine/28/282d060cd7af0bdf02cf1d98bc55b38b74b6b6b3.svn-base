package cn.edu.fjnu.cdio.service.bgm;

import java.util.List;
import cn.edu.fjnu.cdio.model.bgm.Parameter;
import cn.edu.fjnu.cdio.model.bgm.Role;
import cn.edu.fjnu.cdio.utils.Page;

public interface ParameterService
{
	public void save(Parameter parameter);
	public void delete(Parameter parameter);
	public void update(Parameter parameter);
	public Parameter get(long paraID);
	public List<Parameter> loadAll();
	public Page<Parameter> loadPaged(int index);
	public Page<Parameter> getPermByPage(int index,int size);
	
	public Page<Parameter> loadAllParas(Page<Parameter> page,BgmQueryHelper helper);
}
 