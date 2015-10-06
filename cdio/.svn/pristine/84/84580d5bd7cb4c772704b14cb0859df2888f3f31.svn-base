package cn.edu.fjnu.cdio.controller.stu.util;

public class QuestionImg {
	public static String converImgSrc(String imgSrc){
		if(imgSrc.indexOf("img")>0){
			try {
				imgSrc=imgSrc.substring(0, imgSrc.indexOf("src"))
				+"src=\"/cdio2010/testPic/16.2/"
				+imgSrc.substring(imgSrc.indexOf("M"),imgSrc.indexOf("PNG"))
				+"png\"/>";
			} catch (java.lang.StringIndexOutOfBoundsException e) {
				
			}			
		}
		return imgSrc;
	}
}
