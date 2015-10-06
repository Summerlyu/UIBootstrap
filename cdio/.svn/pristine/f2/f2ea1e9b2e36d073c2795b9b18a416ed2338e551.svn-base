/**
 * 
 */
package cn.edu.fjnu.cdio.controller.stu.util;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * @author 蔚强
 *
 */
public class DateConver {

	/**
	 * 把字符转化为Date类型
	 * @param time
	 * @return
	 */
	public static Date ConverString2Date(String time){
		SimpleDateFormat format=new SimpleDateFormat("yyyy-MM-dd HH:mm");
		try {
			return format.parse(time);
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
}
