package cn.edu.fjnu.cdio.dao.cmt;

import java.util.List;

import cn.edu.fjnu.cdio.utils.Page;

public interface QueryJudgeDao {
	 //查询评价
	 public<T> Page<T> QueryJudge(String hql,int pageSize,int index);
	 
	 public List<String> getListByHql(String hql);
	 
	 public List<Object[]> getJudgeCsrDetail(String hql);
	 
	 public List<Object[]> getJudgeOverallDetail(String hql);

}
