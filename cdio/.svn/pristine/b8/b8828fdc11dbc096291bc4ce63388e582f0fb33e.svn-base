package cn.edu.fjnu.cdio.dao.bgm;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.xwork.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import cn.edu.fjnu.cdio.dao.common.GenericDao;
import cn.edu.fjnu.cdio.model.bgm.Parameter;
import cn.edu.fjnu.cdio.service.bgm.BgmQueryHelper;
import cn.edu.fjnu.cdio.utils.Page;

@Repository(value = "parameterDao")
public class ParameterDaoImpl implements ParameterDao {
	private GenericDao genericDao = null;

	@Autowired
	public void setGenericDao(GenericDao genericDao) {
		this.genericDao = genericDao;
	}

	public GenericDao getGenericDao() {
		return genericDao;
	}

	@Override
	public void save(Parameter parameter) {
		genericDao.save(parameter);
	}

	@Override
	public void delete(Parameter parameter) {
		genericDao.delete(parameter);
	}

	@Override
	public void update(Parameter parameter) {
		genericDao.update(parameter);
	}

	@Override
	public Parameter get(long paraID) {
		return (Parameter) genericDao.get(Parameter.class, paraID);
	}

	@Override
	public List<Parameter> loadAll() {
		return genericDao.queryListByHQL("from Parameter");
	}

	@Override
	public Page<Parameter> loadPaged(int index) {
		return genericDao.queryPageByHQL("from Parameter", 15, index);
	}

	@Override
	public Page<Parameter> getPermByPage(int index, int size) {
		return genericDao.queryPageByHQL("from Parameter", size, index);
	}

	@Override
	public Page<Parameter> loadAllParas(Page<Parameter> page,
			BgmQueryHelper helper) {

		Map<String, Object> params = new HashMap<String, Object>();
		String hql = "FROM Parameter p WHERE 1=1";
		if (helper != null) {
			if (StringUtils.isNotEmpty(helper.getParaname())) {
				params.put("paraName", helper.getParaname());
				hql += " and p.paraName='" + helper.getParaname() + "'";
			}
			if (StringUtils.isNotEmpty(helper.getStatus())) {
				params.put("status", helper.getStatus());
				hql += " and p.status='" + helper.getStatus() + "'";
			}
		}

		return genericDao.queryPageByHQL(hql, page.getPageSize(),
				page.getIndex(), params);
	}

}
