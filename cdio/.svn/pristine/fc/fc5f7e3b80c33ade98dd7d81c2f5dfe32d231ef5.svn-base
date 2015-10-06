package cn.edu.fjnu.cdio.converter.res;

import cn.edu.fjnu.cdio.utils.FileUtils;



/**
 * @className: DocConverter.java

 * @classDescription:

 * @author: Lily

 * @createTime: 2013-5-21 下午3:44:22
 */
public class DocConverter {
	private PDFConverter pdfConverter;
	private SWFConverter swfConverter;
	
	
	public DocConverter(PDFConverter pdfConverter, SWFConverter swfConverter) {
		super();
		this.pdfConverter = pdfConverter;
		this.swfConverter = swfConverter;
	}


	public  void convert(String inputFile,String swfFile){
		this.pdfConverter.convert2PDF(inputFile);
		String pdfFile = FileUtils.getFilePrefix(inputFile)+".pdf";
		this.swfConverter.convert2SWF(pdfFile, swfFile);
	}
	
	public void convert(String inputFile){
		if(FileUtils.getFileSufix(inputFile).endsWith("pdf")){
			this.swfConverter.convert2SWF(inputFile);
		}else{
		this.pdfConverter.convert2PDF(inputFile);
		String pdfFile = FileUtils.getFilePrefix(inputFile)+".pdf";
		this.swfConverter.convert2SWF(pdfFile);
		}
		
	}
	

}


