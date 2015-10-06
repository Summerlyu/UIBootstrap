package cn.edu.fjnu.cdio.service.res;

import cn.edu.fjnu.cdio.controller.res.ResUploadAction;
import cn.edu.fjnu.cdio.converter.res.DocConverter;
import cn.edu.fjnu.cdio.converter.res.OpenOfficePDFConverter;
import cn.edu.fjnu.cdio.converter.res.PDFConverter;
import cn.edu.fjnu.cdio.converter.res.SWFConverter;
import cn.edu.fjnu.cdio.converter.res.SWFToolsSWFConverter;


/**
 * @className: TestWordToPDF.java

 * @classDescription:

 * @author: Lily

 * @createTime: 2013-5-21 下午6:07:48
 */
public class TestWordToPDF {
	public static void main(String[] args) {
		String docFile = "d:/test/sd.doc";
		//String docFile = "d:/test/附件一：知识地图范例_四下-数学-4单元.png";
		//String docFile = "/home/tomcat/webapps/cdio2010/uploads/陈少云小组.doc";
		//String docFile = "d:/test/广播.txt";
		//String outFile = "/home/tomcat/webapps/cdio2010/uploads/sd.swf";
		String outFile = "d:/test/oa二期方案.swf";
		PDFConverter pdfConverter = new OpenOfficePDFConverter();
		SWFConverter swfConverter = new SWFToolsSWFConverter();
		DocConverter converter = new DocConverter(pdfConverter,swfConverter);
		//converter.convert(docFile);
		//ResUploadService res = new ResUploadServiceImpl();
		ResUploadAction res = new ResUploadAction();
		res.converter(docFile, outFile);
		
	}

}


