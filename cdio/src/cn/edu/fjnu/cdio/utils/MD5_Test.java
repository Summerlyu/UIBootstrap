package cn.edu.fjnu.cdio.utils;

/**
 * MD5加密工具,主要对用户密码加密。该加密是不可逆的  。 
 * @author 祁俊超
 * <p>2012-12-28</p>
 */
import java.security.*;

public class MD5_Test {
	public final static String MD5(String s){
		char hexDigits[] = {
				'0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd',
				'e', 'f'};
		try {
			byte[] strTemp = s.getBytes();
			MessageDigest mdTemp = MessageDigest.getInstance("MD5");
			mdTemp.update(strTemp);
			byte[] md = mdTemp.digest();
			int j = md.length;
			char str[] = new char[j * 2];
			int k = 0;
			for (int i = 0; i < j; i++) {
				byte byte0 = md[i];
				str[k++] = hexDigits[byte0 >>> 4 & 0xf];
				str[k++] = hexDigits[byte0 & 0xf];
			}
			return new String(str);
		}
		catch (Exception e){
			return null;
		}
	}

}
