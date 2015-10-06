/**
 * 
 */
package cn.edu.fjnu.cdio.model.res;

import java.io.Serializable;
import java.util.Date;

import cn.edu.fjnu.cdio.model.common.User;


/**
 * @author Mil
 * 
 */
public class PerMark implements Serializable{
	 
	 private PerRes perRes;//中间类，包含ResDetail和User
	 private Date markDate;//收藏时间
	 private User user;//用户
	 
	 @Override
	 public String toString() {
		return "PerMark [perRes=" + perRes + ", markDate=" + markDate + "]";
	 }
	 public PerRes getPerRes() {
		return perRes;
	 }
	 public void setPerRes(PerRes perRes) {
		this.perRes = perRes;
	 }
	 public Date getMarkDate() {
		return markDate;
	 }
	 public void setMarkDate(Date markDate) {
		this.markDate = markDate;
	 }
	 public PerMark(PerRes perRes) {
		this.perRes=perRes;
	 }
	 public User getUser() {
		return user;
	 }
	 public void setUser(User user) {
		this.user = user;
	 }
	 public PerMark() {
		  
	 }
}
