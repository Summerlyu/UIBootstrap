package cn.edu.fjnu.cdio.service.res;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import cn.edu.fjnu.cdio.dao.res.PerMarkDao;
import cn.edu.fjnu.cdio.model.res.PerMark;
import cn.edu.fjnu.cdio.model.res.PerRes;
import cn.edu.fjnu.cdio.model.res.ResDetail;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.utils.Page;


@Transactional //声明事务性，每一个Service必不可少
@Service(value="perMarkService")//声明该类为Spring所管理，为Service类
public class PerMarkServiceImpl implements PerMarkService {
	private Page<ResDetail> page=new Page<ResDetail>();
	@Resource//声明PerMarkServiceImpl含有perMarkDAO，spring将自动为perMarkDAO赋值
	private PerMarkDao perMarkDao;
	@Resource
	private ResDetailService resDetailService;
	
	@Override
	//getMarkedResByUserID(user : User) : List 根据用户ID返回收藏资料，输入参数为用户，返回值类型为List
	//根据用户得到收藏信息
	public List<PerMark> getMarkedResByUserID(User user) {
		return perMarkDao.getPerMarkByUser(user);
	}
	
	@Override
	//addPerMark(permark : PerMark) : void 添加收藏信息，输入参数为perMark，返回值为空
	//保存收藏信息
	public void addPerMark(PerMark permark){
		perMarkDao.save(permark);
	}
	
	@Override
	//deletePerMark(permark : PerMark) : void 删除收藏，输入参数为perMark，返回值为空
	//删除收藏信息
	public void deletePerMark(PerMark permark){
		perMarkDao.delete(permark);
	}
	
	@Override
	//loadPerMark(user : User, index : int) : Page 加载收藏信息，输入参数为用户，分页，返回值类型为Page
	//分页加载收藏信息
	public Page<ResDetail> loadPerMark(User user, int index) {
		List<ResDetail> resdetails = new ArrayList<ResDetail>();
		Page<PerMark> permarks = perMarkDao.load(index, user);
		if(permarks.getResults() != null){
		for (int i = 0; i < permarks.getResults().size(); i++) {
			Date date = permarks.getResults().get(i).getMarkDate();// 得到收藏日期
			PerRes perRes = permarks.getResults().get(i).getPerRes();
			ResDetail detail = (ResDetail) resDetailService.get(perRes
					.getResDetail().getResId());
			detail.setResUploaddate(date);
			resdetails.add(i, detail);
		}
		}
//		page.setHasNextPage(permarks.isHasNextPage());
//		page.setHasPreviousPage(permarks.isHasPreviousPage());
		if(page==null){
			 page = new Page<ResDetail>();
		}
		page.setResults(resdetails);
		page.setIndex(permarks.getIndex());
		page.setPageSize(permarks.getPageSize());
		page.setTotalRecord(permarks.getTotalRecord());
		page.setTotalPage(permarks.getTotalPage());
		return page;
	}

	@Override
	//更新个人收藏信息
	public void update(PerMark pm) {
		perMarkDao.upade(pm);
		
	}
	@Override
	public PerMark getPerMarkByResId(Long ResId) {
		System.out.println("-------------------------------------------------------"+ResId);
	   return perMarkDao.gePerMarkByResId(ResId);
	}
}
