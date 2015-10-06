/**
 * 
 */
package cn.edu.fjnu.cdio.dao.common;


import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
/**
 * @作者：魏军
 * @创建日期：2012-8-22 上午10:34:47
 * @修改日期：2012-8-22 上午10:34:47
 * @版本号：v1.0
 */
public class DataValidateException extends Exception {
	private static final long serialVersionUID = 1L;
	private List<ErrInfo> errors=null;
	
	public DataValidateException()
	{
		errors=new ArrayList<ErrInfo>();
	}
	public DataValidateException(List<ErrInfo> errs)
	{
		this.errors=errs;
	}
	public List<ErrInfo> getErrors() {
		return errors;
	}
	public void setErrors(List<ErrInfo> errors) {
		this.errors = errors;
	}
	
	public String printErr()
	{
		String message="";
		Iterator<ErrInfo> itr = errors.iterator();
		while (itr.hasNext()) {
		    ErrInfo nextErr = (ErrInfo)itr.next();
		    message+=nextErr.getPropertyName()+","+nextErr.getErrMessage()+"<br>";
		}
		return message;
	}
	
	public String printMessage()
	{
		String message="";
		Iterator<ErrInfo> itr = errors.iterator();
		while (itr.hasNext()) {
		    ErrInfo nextErr = (ErrInfo)itr.next();
		    message+=nextErr.getErrMessage();
		}
		return message;
	}
}
