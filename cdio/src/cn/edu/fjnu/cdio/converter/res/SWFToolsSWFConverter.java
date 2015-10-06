package cn.edu.fjnu.cdio.converter.res;

import java.io.File;
import java.io.IOException;

import javax.annotation.Resource;

import cn.edu.fjnu.cdio.service.res.ResUploadService;
import cn.edu.fjnu.cdio.service.res.ResUploadServiceImpl;
import cn.edu.fjnu.cdio.utils.ConStant;
import cn.edu.fjnu.cdio.utils.FileUtils;

/**
 * @className: SWFToolsSWFConverter.java

 * @classDescription:

 * @author: Lily

 * @createTime: 2013-5-21 下午3:47:17
 */


public class SWFToolsSWFConverter implements SWFConverter {
	
	@Resource
	private ResUploadService resUploadService;
	/**SWFTools pdf2swf.exe路径*/
	private static String PDF2SWF_PATH = ConStant.SWFTOOLS_PDF2SWF_PATH;
	
	public void convert2SWF(String inputFile, String swfFile) {
		Runtime r = Runtime.getRuntime();
		File pdfFile = new File(inputFile);
		File outFile = new File(swfFile);
		if(!inputFile.endsWith(".pdf")){
			return ;
		}
		if(!pdfFile.exists()){
			return ;
		}
		if(outFile.exists()){
			System.out.println("SWF文件已存在！");
			return ;
		}
		
		try {
			String str = "pdf2swf "+inputFile+" -o "+outFile+" -T 9 -f";
			//String str = "D://SWFTools//pdf2swf.exe " +" \""+inputFile+"\" -o "+outFile+" -T 9 -f";
			System.out.println(str);
			Process p = r.exec(str);
		} catch (IOException e) {
			e.printStackTrace();
		}
//		String command = PDF2SWF_PATH +" \""+inputFile+"\" -o "+outFile+" -T 9 -f";
//		try {
//			System.out.println("开始转换文档: "+inputFile);
//			Runtime.getRuntime().exec(command);
//			System.out.println("成功转换为SWF文件！");
//		} catch (IOException e) {
//			e.printStackTrace();
//			System.out.println("转换文档为swf文件失败！");
//		}
	
	}

	public void convert2SWF(String inputFile) {
		String swfFile = ResUploadServiceImpl.swfName;	
		if(swfFile == null){
			 swfFile = FileUtils.getFilePrefix(inputFile)+".swf";
		}
		convert2SWF(inputFile,swfFile);
	}
	
	

}


