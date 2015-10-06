/**
 * 
 */
package cn.edu.fjnu.cdio.dao.common;


/**
 * @author wjxue
 *
 */
public class ErrInfo {

	
	private String propertyName;//属性
	private String errMessage;//错误信息
	
	public ErrInfo(String propertyName,String errMessage)
	{
		this.errMessage=errMessage;
		this.propertyName=propertyName;
	}
	
	public String getErrMessage() {
		return errMessage;
	}
	public void setErrMessage(String errMessage) {
		this.errMessage = errMessage;
	}
	public String getPropertyName() {
		return propertyName;
	}
	public void setPropertyName(String propertyName) {
		this.propertyName = propertyName;
	}
	
	
}
