/**
 * 
 */
package cn.edu.fjnu.cdio.service.stu;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.poi.ss.formula.functions.T;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.edu.fjnu.cdio.dao.common.GenericDaoImpl;
import cn.edu.fjnu.cdio.dao.stu.TopiclibDao;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.stu.Topiclib;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * 学员题库service接口实现
 * 学员题库增删改查
 * @author    张长峰
 * @version   [1,2013-05-21]
 * @see      /cdio2010/src/cn/edu/fjnu/cdio/service/stu/TopiclibService.java
 */
@Transactional
@Service(value="topiclibService")
public class TopiclibServiceImpl implements TopiclibService {
	private TopiclibDao topiclibDao;
	
	
	public TopiclibDao getTopiclibDao() {
		return topiclibDao;
	}
	@Resource
	public void setTopiclibDao(TopiclibDao topiclibDao) {
		this.topiclibDao = topiclibDao;
	}
	@Override
	public List<Topiclib> getTopiclibList(User user) {
		// TODO Auto-generated method stub
		return topiclibDao.getTopiclibs(user);
	}
	@Override
	public void addTopiclib(Topiclib topiclib) {
		// TODO Auto-generated method stub
		topiclibDao.addTopiclib(topiclib);
	}
	@Override
	public void updateTopiclib(Topiclib topiclib) {
		// TODO Auto-generated method stub
		topiclibDao.updateTopiclib(topiclib);
	}
	@Override
	public void deleteTopiclib(Topiclib topiclib) {
		// TODO Auto-generated method stub
		topiclibDao.deleteTopiclib(topiclib);
	}
	@Override
	public Topiclib forUpdate(Topiclib topiclib) {
		// TODO Auto-generated method stub
		return topiclibDao.getOnetopiclib(topiclib);
	}
	@Override
	public Page<T> getTopiclibsByPage(int index, int pageSize,Map<String, Object> params) {
		// TODO Auto-generated method stub
		return topiclibDao.getTopiclibsByPage(index, pageSize,params);
	}
	@Override
	public List<Topiclib> getTopiclibList(Map<String, Object> params) {
		// TODO Auto-generated method stub
		return topiclibDao.getTopiclibs(params);
	}
	
}
