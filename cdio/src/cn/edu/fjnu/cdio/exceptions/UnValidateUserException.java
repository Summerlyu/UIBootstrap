package cn.edu.fjnu.cdio.exceptions; 

/**
 * @author  作者:赖清渊
 *
 * @version 创建时间：2013-3-13 下午8:58:39
 *
 * 功能说明:
 *
 * @version 修改时间：2013-3-13
 *
 * 修改原因：
 */
@SuppressWarnings("serial")
public class UnValidateUserException extends Exception {

	public UnValidateUserException(String string) {
		super(string);
	}

}
