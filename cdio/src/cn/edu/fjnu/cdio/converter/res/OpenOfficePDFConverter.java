package cn.edu.fjnu.cdio.converter.res;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.ConnectException;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.artofsolving.jodconverter.OfficeDocumentConverter;
import org.artofsolving.jodconverter.office.DefaultOfficeManagerConfiguration;
import org.artofsolving.jodconverter.office.OfficeManager;

import com.artofsolving.jodconverter.DocumentConverter;
import com.artofsolving.jodconverter.openoffice.connection.OpenOfficeConnection;
import com.artofsolving.jodconverter.openoffice.connection.SocketOpenOfficeConnection;
import com.artofsolving.jodconverter.openoffice.converter.OpenOfficeDocumentConverter;

import cn.edu.fjnu.cdio.utils.ConStant;
import cn.edu.fjnu.cdio.utils.FileUtils;

/**
 * @className: OpenOfficePDFConverter.java

 * @classDescription: 启动OpenOffice

 * @author: Lily

 * @createTime: 2013-5-21 下午3:54:50
 */
public class OpenOfficePDFConverter implements PDFConverter {
	
	private static  OfficeManager officeManager;
	/**OpenOffice安装根目录*/
	private static String OFFICE_HOME = ConStant.OFFICE_HOME;
	private static int[] port = {8100};

	

	public  void convert2PDF(String inputFile, String pdfFile) {
		
		startService();
		pdfFile = pdfFile.replaceAll(" ", "").replaceAll("　", "");
		//System.out.println("进行文档转换转换:" + inputFile + " --> " + pdfFile);
        OfficeDocumentConverter converter = new OfficeDocumentConverter(officeManager);
        converter.convert(new File(inputFile),new File(pdfFile));
		stopService();
		//System.out.println();
	}

	
	/*
	 * 将源文件转换为PDF文件(non-Javadoc)
	 * @see com.keyprint.service.IFileConvertService#sourthFile2Pdf(java.io.File, java.io.File, java.lang.String)
	 */
	/*	public void convert2PDF(String inputFileURL, String pdfFileURL){
//		pdfFileURL = pdfFileURL.replaceAll(" ", "").replaceAll("　", "");
//		OfficeDocumentConverter converter = new OfficeDocumentConverter(officeManager);
//        converter.convert(new File(inputFileURL),new File(pdfFileURL));
		File sourceFile = new File(inputFileURL);
		File pdfFile = new File(pdfFileURL);
	//转换成pdf文件
		//if(sourceFile.exists()) {
			try {  
					int  bytesum  =  0;  
			        int  byteread  =  0;  
			        if  (sourceFile.exists())  {  //文件存在时  
			                    InputStream  inStream  =  new  FileInputStream(sourceFile.getPath());  //读入原文件  
			                    FileOutputStream  fs  =  new  FileOutputStream(pdfFile.getPath());  
			                    byte[]  buffer  =  new  byte[1444];  
			                    while  (  (byteread  =  inStream.read(buffer))  !=  -1)  {  
			                        bytesum  +=  byteread;  //字节数  文件大小  
			                        fs.write(buffer,  0,  byteread);  
			                    }  
			                    inStream.close(); 
			                    fs.close();
			        }  
		        } catch (IOException ex) {  
		        	ex.printStackTrace();
		        	
		        }  
				OpenOfficeConnection connection = new SocketOpenOfficeConnection(8100);
				try {
					connection.connect();
					DocumentConverter converter = new OpenOfficeDocumentConverter(connection);   
					converter.convert(sourceFile, pdfFile);
					pdfFile.createNewFile();
					connection.disconnect();  
				} catch (java.net.ConnectException e) {
					e.printStackTrace();
				} catch (IOException e) {
					e.printStackTrace();
				}
				
//		}else{
//		
//		}
		
	}
 */

	

	public void convert2PDF(String inputFile) {
		inputFile = inputFile.replaceAll(" ", "").replaceAll("　", "");
		String pdfFile = FileUtils.getFilePrefix(inputFile)+".pdf";
		convert2PDF(inputFile,pdfFile);
		System.out.println(inputFile+"pdf"+pdfFile);
		
	}
	
	public static void startService(){
		DefaultOfficeManagerConfiguration configuration = new DefaultOfficeManagerConfiguration();
        try {
          //System.out.println("准备启动服务....");
            configuration.setOfficeHome(OFFICE_HOME);//设置OpenOffice.org安装目录
            configuration.setPortNumbers(port); //设置转换端口，默认为8100
            configuration.setTaskExecutionTimeout(1000 * 60 * 5L);//设置任务执行超时为5分钟
            configuration.setTaskQueueTimeout(1000 * 60 * 60 * 24L);//设置任务队列超时为24小时
         
            officeManager = configuration.buildOfficeManager();
            officeManager.start();	//启动服务
            //System.out.println("office转换服务启动成功!");
        } catch (Exception ce) {
            //System.out.println("office转换服务启动失败!详细信息:" + ce);
        }
	}
	
	public static void stopService(){
	      //System.out.println("关闭office转换服务....");
	        if (officeManager != null) {
	            officeManager.stop();
	        }
	        //System.out.println("关闭office转换成功!");
	}
}


