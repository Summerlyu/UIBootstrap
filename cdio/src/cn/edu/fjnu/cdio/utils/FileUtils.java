package cn.edu.fjnu.cdio.utils;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * @className: FileUtils.java

 * @classDescription: 文件工具类

 * @author: Lily

 * @createTime: 2013-5-20 下午8:22:32
 */
public class FileUtils {
	
 	/**
 	 * 读取文本文件的内容
 	 * @param curfile   文本文件路径
 	 * @return 返回文件内容
 	 */
 	public static String readFile(String curfile)
 	{
			File f = new File(curfile);
		    try
		    {
	 		  if (!f.exists()) throw new Exception();
	 		  FileReader cf=new FileReader(curfile);
			  BufferedReader is = new BufferedReader(cf);
			  String filecontent = ""; 			  
			  String str = is.readLine();
			  while (str != null){
			  	filecontent += str;
		    	str = is.readLine();
		    	if (str != null)
		    		filecontent += "\n";
			  }
			  is.close();
			  cf.close();
			  return filecontent;
		    }
		    catch (Exception e)
		    {
		      System.err.println("不能读属性文件: "+curfile+" \n"+e.getMessage());
		      return "";
		    }
 		
 	}
	/**
	 * 取指定文件的扩展名
	 * @param filePathName  文件路径
	 * @return 扩展名
	 */
	public static String getFileExt(String filePathName)
	{
	    int pos = 0;
	    pos = filePathName.lastIndexOf('.');
	    if(pos != -1)
	        return filePathName.substring(pos + 1, filePathName.length());
	    else
	        return "";
		
	}
	
	/**
	 * 读取文件大小
	 * @param filename 指定文件路径
	 * @return 文件大小
	 */
	public static int getFileSize(String filename)
	{
		try
		{
			File fl = new File(filename);
			int length = (int)fl.length();
			return length;
	  	} 
	  	catch (Exception e)
	  	{
	  		return 0;
	  	}
		
	}
	
	/**
	 * 拷贝文件到指定目录
	 * @param srcPath 源文件路径
	 * @param destPath 目标文件路径
	 * @return true:拷贝成功 false:拷贝失败
	 */
	public static boolean copyFile(String srcPath,String destPath){
		try
		{
			File fl = new File(srcPath);
			int length = (int)fl.length();
		  	FileInputStream is = new FileInputStream(srcPath);
		  	FileOutputStream os = new FileOutputStream(destPath);
			byte[] b = new byte[length];
		  	is.read(b);
		  	os.write(b);
		  	is.close();
		  	os.close();
		  	return true;
	  	} 
	  	catch (Exception e)
	  	{
	  		return false;
	  	}
	}
	
	/**
	 * 通过正则获取文件名
	 */
	public static String getFileName(String filePath){
		String regEx = "";
		if(filePath.indexOf("\\") == -1){
			regEx = ".+\\/(.+)$"; 
		}
		else{
			regEx = ".+\\\\(.+)$"; 
		}
        Pattern p=Pattern.compile(regEx); 
        Matcher m=p.matcher(filePath);
        String fileName = "";
        if(m.find()){
        	fileName = m.group(1);
        }
        return fileName;
	}
	
	/**
	 * 获取文件名(不含后缀)
	 *方法摘要：这里一句话描述方法的用途
	 *@param
	 *@return String
	 */
	public static String getFileNameNoStuffix(String fileName){
		if(null == fileName || fileName.equals("")){
			return "";
		}
		return fileName.substring(0,fileName.lastIndexOf("."));
	}
	
	/**
	 * 通过正则获取文件后缀名
	 * @param fileName 文件名(不包含路径)
	 */
	public static String getFileExtendion(String fileName){
		String regEx="^.+\\.(.+)";
        Pattern p=Pattern.compile(regEx); 
        Matcher m=p.matcher(fileName); 
        String extendtion = "";
        if(m.find()){
        	extendtion = m.group(1);
        }
        return extendtion;
	}
	
	/**
	 * 获取文件名称[不含后缀名]
	 *方法摘要：这里一句话描述方法的用途
	 *@param
	 *@return String
	 */
	public static String getFilePrefix(String fileName){
		int splitIndex = fileName.lastIndexOf(".");
        return fileName.substring(0, splitIndex);
	}
	
	/**
	 * 获取文件后缀名
	 *方法摘要：这里一句话描述方法的用途
	 *@param
	 *@return String
	 */
	public static String getFileSufix(String fileName){
		int splitIndex = fileName.lastIndexOf(".");
        return fileName.substring(splitIndex + 1);
	}
	
	
	
}


