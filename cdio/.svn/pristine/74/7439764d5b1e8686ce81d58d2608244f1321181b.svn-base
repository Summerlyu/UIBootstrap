package cn.edu.fjnu.cdio.service.bgm;

import java.util.List;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import cn.edu.fjnu.cdio.dao.bgm.ParameterDao;
import cn.edu.fjnu.cdio.model.bgm.Parameter;
import cn.edu.fjnu.cdio.utils.Page;

@Transactional
@Service(value="parameterService")
public class ParameterServiceImpl implements ParameterService
{
	
	@Resource
	private ParameterDao parameterDao;

	@Override
	public void save(Parameter parameter) {
		parameterDao.save(parameter);
	}

	@Override
	public void delete(Parameter parameter) {
		parameterDao.delete(parameter);
	}

	@Override
	public void update(Parameter parameter){
		parameterDao.update(parameter);
	}

	@Override
	public Parameter get(long paraID) {
		return parameterDao.get(paraID);
	}

	@Override
	public List<Parameter> loadAll() {
		return parameterDao.loadAll();
	}

	@Override
	public Page<Parameter> loadPaged(int index) {
		return parameterDao.loadPaged(index);
	}

	@Override
	public Page<Parameter> getPermByPage(int index, int size) {
		return parameterDao.getPermByPage(index, size);
	}

	@Override
	public Page<Parameter> loadAllParas(Page<Parameter> page, BgmQueryHelper helper) {
		return parameterDao.loadAllParas(page,helper);
	}
	
}
 