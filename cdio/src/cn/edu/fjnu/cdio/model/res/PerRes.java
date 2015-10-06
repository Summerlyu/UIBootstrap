package cn.edu.fjnu.cdio.model.res;

import cn.edu.fjnu.cdio.model.common.User;





/**
 * @author 陈徽徽
 * 针对PerUpload和PerMark的联合主键
 *
 */
public class PerRes implements java.io.Serializable {
    
	private ResDetail resDetail;//详细资料
	private User user;//用户
	public ResDetail getResDetail() {
		return resDetail;
	}
	public void setResDetail(ResDetail resDetail) {
		this.resDetail = resDetail;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	
	@Override
	public String toString() {
		return "PerRes [resId=" + resDetail.getResId() + ", userId=" + user.getId();
	}
}
