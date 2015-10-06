 
package cn.edu.fjnu.cdio.utils;


import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
 
/** 
 
 * @className:UploadPicture.java 

 * @classDescription: 用于上传附件

 * @author:杨丽
 
 * @createTime:2012-12-30 下午2:47:18
 
 */

public class UploadFiles {
	
	
	/**
	 * 
		* @Description: 上传图片到服务器
		* @author:杨丽
		* @createTime: 2012-12-31  上午11:52:20
	      @param savefile 保存的地址
	      @param savefile 需要保存的文件
	      @param picture 文件名
	      @param prefix 文件需要加的前缀 如p
	      @return null 上传失败，不等于null 成功，返回的是图片保存的地址
	 */
	@SuppressWarnings({ "unused", "static-access" })
	public String upload(String savePath,File savefile,String picture,String prefix) 
	{
	
		boolean result=true;
		String newSavePath=null;
		 String filename="";	
		 try 
		 {
		    
				//得到新的图片名字
			     filename=getPicName(picture,prefix);
				
			     newSavePath=savePath+ "\\"+ filename;
	
				//输出流
				FileOutputStream fos = new FileOutputStream(newSavePath);
				
				//输入流
				
				FileInputStream fis = new FileInputStream(savefile);
				
				byte[] buffer = new byte[1024];
				int len = 0;
				while ((len = fis.read(buffer)) > 0) {
					fos.write(buffer, 0, len);
				}
				fos.close();
				
				ImageUtils img = new ImageUtils();
				img.scale2(newSavePath, newSavePath, 332, 500, true);
		} catch (Exception e) 
		{
			e.printStackTrace();
			newSavePath=null;
		
		}
		
		 return filename;
	
	}
	
	/**
	 * 
		* @Description: 读出文件名，再把文件名用当前的时间重命名
		* @author:杨丽
		* @createTime: 2012-12-31  上午11:51:16
	      @param filename 文件所在位置
	      @return
	 */
	public   String  getPicName(String filename,String prefix ) {
		String picName = "";
		
		if (filename != null) {
		
			String[] str2 = filename.split("\\.");
	
			String type = str2[str2.length-1];
			type = "." + type;
			Date date=new Date();
		
			picName=prefix+dateToYMD(date)+type;
	
		}
	
		return picName;
	}
	
	/**
	 * 
		* @Description: 把Date转换为String
		* @author:杨丽
		* @createTime: 2012-12-31  上午9:19:59
	      @param dt
	      @return
	 */
	  public static String dateToYMD(Date dt) {
		SimpleDateFormat sdFormat = new SimpleDateFormat("yyyyMMddHHmmss");
		String str = "";
		try {
		str = sdFormat.format(dt);
		}
		catch(Exception e) {
		return "";
		}
		if (str.equals("1900-01-01")) {
		str = "";
		}

		return str;
		}
    


	@SuppressWarnings("unused")
	public static void main(String[] args) throws IOException {
		UploadFiles UploadPicture=new UploadFiles();
		String savePath="D:\\yangli\\educube\\.metadata\\.me_tcat\\webapps\\EduCube\\uploadFiles\\pics\\product";
		String oldPath="E:\\Users\\hub\\Pictures\\yangli\\460.jpg";
		
		UploadPicture.getPicName("7b1da437d3222be4a3cc2bb8.jpg", "s");
		{
			//System.out.println(UploadPicture.upload(savePath, oldPath,"s"));
		}
	
	}

}
