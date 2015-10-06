package cn.edu.fjnu.cdio.utils;

import java.io.File;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;


public class FileHelp {
	//删除文件夹
	 //param folderPath 文件夹完整绝对路径
	private static Log logger = LogFactory.getLog(FileHelp.class);
	 public  void delFolder(String folderPath) {
	      try {
	         delAllFile(folderPath); //删除完里面所有内容
	         String filePath = folderPath;
	         filePath = filePath.toString();
	         java.io.File myFilePath = new java.io.File(filePath);
	         myFilePath.delete(); //删除空文件夹
	      } catch (Exception e) {
	        e.printStackTrace(); 
	        logger.error(e);
	      }
	 }
	 
	//删除指定文件夹下所有文件
	 //param path 文件夹完整绝对路径
	 public   boolean createDir(String parentPath,String path)
	 {
		 File file;  
		 boolean result=false;
		 try {
			 file = new File(parentPath+"/"+path+"/");
			 file.mkdirs();
			
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			logger.error(e);
			result=false;
		}
		
		  return result;
	 }
	    public  boolean delAllFile(String path) {
	    	
	        boolean flag = false;
	        File file = new File(path);
	        if (!file.exists()) {
	          return flag;
	        }
	        if (!file.isDirectory()) {
	          return flag;
	        }
	        String[] tempList = file.list();
	        File temp = null;
	        for (int i = 0; i < tempList.length; i++) {
	           if (path.endsWith(File.separator)) {
	              temp = new File(path + tempList[i]);
	           } else {
	               temp = new File(path + File.separator + tempList[i]);
	           }
	           if (temp.isFile()) {
	              temp.delete();
	           }
	           if (temp.isDirectory()) {
	        	   try {
	        		   delAllFile(path + "/" + tempList[i]);//先删除文件夹里面的文件
	 	              delFolder(path + "/" + tempList[i]);//再删除空文件夹
	 	              flag = true;
					
				} catch (Exception e) {
					// TODO: handle exception
					logger.error(e);
				}
	             
	           }
	        }
	        return flag;
	      }
	    
		public  void deleteFile(String path) {

			File f = new File(path);
			f.delete();
			//File.createTempFile(prefix, suffix);
			System.out.print("\n删除文件：" + f.delete());

		}
	    
	    public static void main(String args[]){
	    	FileHelp t = new FileHelp();
	        t.delAllFile("F:/Workspaces/MyEclipse/.metadata/.me_tcat/webapps/EduCube/uploadFiles/pics/qrimages/temp/img");
	    	
	        //System.out.println("deleted");
	    }
	 
	 }


