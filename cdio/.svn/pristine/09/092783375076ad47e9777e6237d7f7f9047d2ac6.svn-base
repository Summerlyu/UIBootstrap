/**
 * 
 */
package cn.edu.fjnu.cdio.service.test;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.edu.fjnu.cdio.dao.test.ErrQueBookDao;
import cn.edu.fjnu.cdio.model.test.ErrIdea;
import cn.edu.fjnu.cdio.model.test.ErrQueBook;
import cn.edu.fjnu.cdio.model.test.Question;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author Administrator
 * 
 */
@Transactional
@Service(value = "errQueBookService")
public class ErrQueBookServiceImpl implements ErrQueBookService {

	@Resource
	private ErrQueBookDao errQueBookDao;

	@Override
	public void create(ErrQueBook errQueBook) {
		// TODO Auto-generated method stub
		errQueBook.setSubject(errQueBook.getQuestion().getCourseType()
				.getSubject());
		errQueBookDao.save(errQueBook);
	}

	@Override
	public ErrQueBook getErrQueBookById(Long errId) {
		// TODO Auto-generated method stub
		return errQueBookDao.getErrQueBookById(errId);
	}

	@Override
	public void delete(ErrQueBook errQueBook) {
		// TODO Auto-generated method stub
		errQueBookDao.delete(errQueBook);
	}

	@Override
	public void update(ErrQueBook errQueBook) {
		// TODO Auto-generated method stub
		errQueBookDao.update(errQueBook);
	}

	@Override
	public Page<ErrQueBook> loadPagedErrQueBooks(int pageSize, int index,
			Map<String, Object> params) {
		// TODO Auto-generated method stub
		return errQueBookDao.loadPagedErrQueBooks(pageSize, index, params);
	}

}
