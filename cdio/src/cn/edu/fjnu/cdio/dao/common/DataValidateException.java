/**
 * 
 */
package cn.edu.fjnu.cdio.dao.common;


import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
/**
 * @���ߣ�κ��
 * @�������ڣ�2012-8-22 ����10:34:47
 * @�޸����ڣ�2012-8-22 ����10:34:47
 * @�汾�ţ�v1.0
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
