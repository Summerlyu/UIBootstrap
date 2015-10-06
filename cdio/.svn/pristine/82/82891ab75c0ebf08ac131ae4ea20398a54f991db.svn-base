package cn.edu.fjnu.cdio.model.mat.vo;

import java.util.List;
/**
 * @author 作者:第五组
 * 
 * @version 创建时间：2013-05-15 下午01:50:49
 * 
 *          功能说明:匹配页面类
 * 
 * @version 修改时间：2013-05-15
 * 
 *          修改原因：
 */
public class MatchPage {
	List<MatInfoBean> matchInfo;
	private Integer pageNo;
	Integer pageSize;
	private Integer totalRecNum;
	private Integer totalPageNum;
	private Boolean nextPage;

	public Boolean getNextPage() {
		 return pageNo<getTotalPageNum()?true:false;
	}

	public void setNextPage(Boolean nextPage) {
		this.nextPage = nextPage;
	}

	public Integer getPageNo() {
		return pageNo;
	}

	public void setPageNo(Integer pageNo) {
		this.pageNo = pageNo;
	}

	public Integer getTotalPageNum() {
		return totalRecNum % pageSize > 0 ? (int) (totalRecNum / pageSize + 1)
				: (int) (totalRecNum / pageSize);
	}

	public void setTotalPageNum(Integer totalPageNum) {
		this.totalPageNum = totalPageNum;
	}

	public List<MatInfoBean> getMatchInfo() {
		return matchInfo;
	}

	public void setMatchInfo(List<MatInfoBean> matchInfo) {
		this.matchInfo = matchInfo;
	}

	public Integer getPageSize() {
		return pageSize;
	}

	public void setPageSize(Integer pageSize) {
		this.pageSize = pageSize;
	}

	public Integer getTotalRecNum() {
		return totalRecNum;
	}

	public void setTotalRecNum(Integer totalRecNum) {
		this.totalRecNum = totalRecNum;
	}
}
