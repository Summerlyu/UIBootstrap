package cn.edu.fjnu.cdio.utils;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStreamReader;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Iterator;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDDocumentInformation;
import org.apache.pdfbox.util.PDFTextStripper;
import org.apache.poi.POIXMLDocument;
import org.apache.poi.POIXMLTextExtractor;
import org.apache.poi.hslf.HSLFSlideShow;
import org.apache.poi.hslf.model.Slide;
import org.apache.poi.hslf.model.TextRun;
import org.apache.poi.hslf.usermodel.RichTextRun;
import org.apache.poi.hslf.usermodel.SlideShow;
import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFDateUtil;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.hwpf.extractor.WordExtractor;
import org.apache.poi.openxml4j.exceptions.OpenXML4JException;
import org.apache.poi.openxml4j.opc.OPCPackage;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xslf.usermodel.XMLSlideShow;
import org.apache.poi.xslf.usermodel.XSLFSlide;
import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.apache.poi.xwpf.extractor.XWPFWordExtractor;
import org.apache.poi.xwpf.usermodel.XWPFDocument;
import org.apache.xmlbeans.XmlException;
import org.openxmlformats.schemas.drawingml.x2006.main.CTRegularTextRun;
import org.openxmlformats.schemas.drawingml.x2006.main.CTTextBody;
import org.openxmlformats.schemas.drawingml.x2006.main.CTTextParagraph;
import org.openxmlformats.schemas.presentationml.x2006.main.CTGroupShape;
import org.openxmlformats.schemas.presentationml.x2006.main.CTShape;
import org.openxmlformats.schemas.presentationml.x2006.main.CTSlide;

/**
 * 
 * @author 陈徽徽
 *
 */
public class ResReadHelp {
	/**
	 * 项目名称
	 */
	private static String projectName="res";
	/**
	 * 获得工程的服务器地址
	 * @return
	 */
	 public static String getPorjectWebPath(){
		   String nowpath;           
		   String tempdir;
		   nowpath=System.getProperty("user.dir");
		   tempdir=nowpath.replace("bin", "webapps"); 
		   tempdir+="\\"+projectName;
		   return tempdir;  
	  }
	 /**
		 * 
		 * @param path resDetail.getPath()
		 * @return
	 */
	 public static String getResContent(String path){
		 UploadFile uploadFileHelp=new UploadFile();
		 String type=uploadFileHelp.getFileType(path);
		 path=getPorjectWebPath()+path;
		 System.out.println(path);
		 if(".doc".equals(type.toLowerCase())||".DOC".equals(type.toUpperCase()))
			 return readWord2003(path);
		 if(".xls".equals(type.toLowerCase())||".XLS".equals(type.toUpperCase()))
			 return readExcel2003(path);
		 if(".ppt".equals(type.toLowerCase())||".PPT".equals(type.toUpperCase()))
			 return readPPT2003(path);
		 if(".docx".equals(type.toLowerCase())||".DOCX".equals(type.toUpperCase()))
			 return readWord2007(path);
		 if(".xlsx".equals(type.toLowerCase())||".XLSX".equals(type.toUpperCase()))
			 return readExcel2007(path);
		 if(".pptx".equals(type.toLowerCase())||".PPTX".equals(type.toUpperCase()))
			 return readPPT2007(path);
		 if(".pdf".equals(type.toLowerCase())||".PDF".equals(type.toUpperCase()))
			 return readPdf(path);
		 if(".txt".equals(type.toLowerCase())||".TXT".equals(type.toUpperCase()))
			return readTxtFile(path);
		 return null;
		 
	 }
	/**
	 * 用于读取文件的页数 
	 * @param 服务器地址+res.getPath()
	 */
	 public static int getResPageNums(String path){
		 UploadFile uploadFileHelp=new UploadFile();
		 String type=uploadFileHelp.getFileType(path);
		 if(".doc".equals(type.toLowerCase())||".DOC".equals(type.toUpperCase()))
			 return getWord2003PageNums(path);
		 if(".xls".equals(type.toLowerCase())||".XLS".equals(type.toUpperCase()))
			 return getExcel2003PageNums(path);
		 if(".ppt".equals(type.toLowerCase())||".PPT".equals(type.toUpperCase()))
			 return getPPT2003PageNums(path);
		 if(".docx".equals(type.toLowerCase())||"DOCX".equals(type.toUpperCase()))
			 return getWord2007PageNums(path);
		 if(".xlsx".equals(type.toLowerCase())||".XLSX".equals(type.toUpperCase()))
			 return getExcel2007PageNums(path);
		 if(".pptx".equals(type.toLowerCase())||".PPTX".equals(type.toUpperCase()))
			 return getPPT2007PageNums(path);
		 if(".pdf".equals(type.toLowerCase())||".PDF".equals(type.toUpperCase()))
			 return getPdfPageNums(path);
		 if(".txt".equals(type.toLowerCase())||".TXT".equals(type.toUpperCase()))
			 return 1;
		 return -1;
		 
	 }
	 public static String readWord2003(String path){
    	FileInputStream inputStream = null;
    	StringBuffer content = new StringBuffer();
		try {
			 inputStream = new FileInputStream(path);
			 WordExtractor extractor= new WordExtractor(inputStream);
	    	 content.append(extractor.getText());	 
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally{ 
			if(null !=inputStream){
				try {
					inputStream.close();
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}	
		} 
    	return content.toString();

     }
	 public static int  getWord2003PageNums(String path){
		    FileInputStream inputStream = null;
	    	int pageNums=-1;
			try {
				 inputStream = new FileInputStream(path);
				 WordExtractor extractor= new WordExtractor(inputStream);
				 pageNums=extractor.getSummaryInformation().getPageCount(); 
			} catch (FileNotFoundException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}finally{ 
				if(null !=inputStream){
					try {
						inputStream.close();
					} catch (IOException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
				}	
			} 
	    	return pageNums;
	 }
     public static String readWord2007(String path){
    	StringBuffer content = new StringBuffer();
    	OPCPackage opcPackage = null;
		try {
			 opcPackage = POIXMLDocument.openPackage(path);
			 POIXMLTextExtractor extractor;
			 extractor = new XWPFWordExtractor(opcPackage);
			 content.append(extractor.getText());
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}catch (XmlException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (OpenXML4JException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally{
			 try {
				opcPackage.close();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
         return content.toString();
     }
     public static int  getWord2007PageNums(String path){
     	OPCPackage opcPackage = null;
     	int pageNums=-1;
 		try {
 			 opcPackage = POIXMLDocument.openPackage(path);
 			 XWPFDocument docx = new XWPFDocument(opcPackage);
 			 pageNums = docx.getProperties().getExtendedProperties().getUnderlyingProperties().getPages();//总页数 
 		} catch (IOException e) {
 			e.printStackTrace();
 		}finally{
 			 try {
 				opcPackage.close();
 			} catch (IOException e) {
 				// TODO Auto-generated catch block
 				e.printStackTrace();
 			}
 		}
          return pageNums;
     }
     public static String readExcel2003(String path){
  	   FileInputStream inputStream=null;
  	   StringBuffer content = new StringBuffer();
  	   try{  
  		   inputStream=new FileInputStream(new File(path));
  		   HSSFWorkbook workbook = new HSSFWorkbook(inputStream);
  		   for(int i=0;i<workbook.getNumberOfSheets();i++){
  			 HSSFSheet sheet = workbook.getSheetAt(i);  
  			 Iterator<Row> rowIterator=sheet.iterator();
	  		 while(rowIterator.hasNext()){
		        		Row row=rowIterator.next();
		        		Iterator<Cell> cellIterator=row.cellIterator();
		        	    while(cellIterator.hasNext()){
		        	    	Cell cell=cellIterator.next();
		        	    	content.append(getExcel2003Content(cell));
		        	    }
		       
	  		   }
  		   }
  	    }catch (FileNotFoundException e) {    
  	    	e.printStackTrace();
  	    } catch (IOException e) {   
  	    	e.printStackTrace();
  	    }finally{
  		    try {
  				inputStream.close();
  			} catch (IOException e) {
  				// TODO Auto-generated catch block
  				e.printStackTrace();
  			}
  	    }
  	   return content.toString();
     }
     public static int getExcel2003PageNums(String path){
    	   FileInputStream inputStream=null;
    	   int pageNums=-1;
    	   try{  
    		   inputStream=new FileInputStream(new File(path));
    		   HSSFWorkbook workbook = new HSSFWorkbook(inputStream);
    		   pageNums=workbook.getNumberOfSheets();
    	    }catch (FileNotFoundException e) {    
    	    	e.printStackTrace();
    	    } catch (IOException e) {   
    	    	e.printStackTrace();
    	    }finally{
    		    try {
    				inputStream.close();
    			} catch (IOException e) {
    				// TODO Auto-generated catch block
    				e.printStackTrace();
    			}
    	    }
    	   return pageNums;
     }
     public  static String getExcel2003Content(Cell cell) {
    	 String cellvalue = ""; 
    	 if (cell != null) {           
    		 switch (cell.getCellType()) {           
    		 	case HSSFCell.CELL_TYPE_NUMERIC:{
    		 		cellvalue=""+cell.getNumericCellValue();
    		 		break;
    		 	}
    		 	case HSSFCell.CELL_TYPE_FORMULA: {
    		 		if (HSSFDateUtil.isCellDateFormatted(cell)) { 
    		 			Date date = cell.getDateCellValue();
    		 			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
    		 			cellvalue = sdf.format(date);
    		 		}
    		 		else {          
    		 			cellvalue = String.valueOf(cell.getNumericCellValue());                
    		 		}                
    		 		break;
    		 	}
    		 	case HSSFCell.CELL_TYPE_STRING:{
    		 		cellvalue = cell.getRichStringCellValue().getString();                
    		 		break;
    		 	}
    		 	case HSSFCell.CELL_TYPE_BOOLEAN:{
    		 		cellvalue=""+cell.getBooleanCellValue();
    		 		break;
    		 	}
    		 	case HSSFCell.CELL_TYPE_BLANK:{
    		 		cellvalue="";
    		 		break;
    		 	}
    		 	case HSSFCell.CELL_TYPE_ERROR:{ 
    		 		 cellvalue = "";
    		 		 break;
    		 	}
    		 	default:
    		 		  cellvalue = cell.getRichStringCellValue().toString();
    		    }
    		 } 	
		return cellvalue;
	}
	 public static String readExcel2007(String path){
		FileInputStream inputStream=null;
	    StringBuffer content=new StringBuffer();
	    try {
			inputStream=new FileInputStream(new File(path));
			 XSSFWorkbook workbook= new XSSFWorkbook(inputStream);
			 for(int i=0;i<workbook.getNumberOfSheets();i++){
					XSSFSheet sheet = workbook.getSheetAt(i);
					Iterator<Row> rowIterator=sheet.iterator();
			  		 while(rowIterator.hasNext()){
				        		Row row=rowIterator.next();
				        		Iterator<Cell> cellIterator=row.cellIterator();
				        	    while(cellIterator.hasNext()){
				        	    	Cell cell=cellIterator.next();
				        	    	content.append(getExcel2007Content(cell));
				        	    }
				       
			  		   }
				}
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally{ 
			if(null !=inputStream){
				try {
					inputStream.close();
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
		} 
		return content.toString();
	}
	 public static int getExcel2007PageNums(String path){
  	    FileInputStream inputStream=null;
	    int pageNums=-1;
	    try {
			inputStream=new FileInputStream(new File(path));
			XSSFWorkbook workbook= new XSSFWorkbook(inputStream);
			pageNums=workbook.getNumberOfSheets();
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally{ 
			if(null !=inputStream){
				try {
					inputStream.close();
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
		} 
		return pageNums;
   }	
    private static String getExcel2007Content(Cell cell) {
    	 String cellvalue = ""; 
    	 if (cell != null) {           
    		 switch (cell.getCellType()) {           
    		 	case XSSFCell.CELL_TYPE_NUMERIC:{
    		 		cellvalue=""+cell.getNumericCellValue();
    		 		break;
    		 	}
    		 	case XSSFCell.CELL_TYPE_FORMULA: {
    		 		if (HSSFDateUtil.isCellDateFormatted(cell)) { 
    		 			Date date = cell.getDateCellValue();
    		 			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
    		 			cellvalue = sdf.format(date);
    		 		}
    		 		else {          
    		 			cellvalue = String.valueOf(cell.getNumericCellValue());                
    		 		}                
    		 		break;
    		 	}
    		 	case XSSFCell.CELL_TYPE_STRING:{
    		 		cellvalue = cell.getRichStringCellValue().getString();                
    		 		break;
    		 	}
    		 	case XSSFCell.CELL_TYPE_BOOLEAN:{
    		 		cellvalue=""+cell.getBooleanCellValue();
    		 		break;
    		 	}
    		 	case XSSFCell.CELL_TYPE_BLANK:{
    		 		cellvalue="";
    		 		break;
    		 	}
    		 	case XSSFCell.CELL_TYPE_ERROR:{ 
    		 		 cellvalue = "";
    		 		 break;
    		 	}
    		 	default:
    		 		  cellvalue = cell.getRichStringCellValue().toString();
    		    }
    		 } 	
		return cellvalue;
	}
	 public static String readPPT2003(String path){
		StringBuffer content=new StringBuffer();
		SlideShow ppt;
		try {
			ppt = new SlideShow(new HSLFSlideShow(path));
			Slide[] slides = ppt.getSlides();
			int pageCount=slides.length;
			System.out.print(pageCount);
			//提取文本信息		 
			for (Slide each : slides) {
			    TextRun[] textRuns = each.getTextRuns();
			    for (int i=0 ;i< textRuns.length; i++ ) {
			        content.append(textRuns[i].getText());
			        RichTextRun[] richTextRuns = textRuns[i].getRichTextRuns();
			        for (int j = 0; j < richTextRuns.length; j++) {
			        	 content.append(richTextRuns[j].getText());
			        }
			    }
			}
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return content.toString();
    }
	 public static int getPPT2003PageNums(String path){
		 int pageNums=-1;
		 SlideShow ppt;
		 try {
				ppt = new SlideShow(new HSLFSlideShow(path));
				Slide[] slides = ppt.getSlides();
				pageNums=slides.length;
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
	        return pageNums;

	 }
     public static String readPPT2007(String path){
        StringBuffer content=new StringBuffer();
        FileInputStream inputStream=null;
        try {
        	inputStream=new FileInputStream(new File(path));
            XMLSlideShow xmlSlideShow = new XMLSlideShow(inputStream);
            XSLFSlide[] slides = xmlSlideShow.getSlides();
            StringBuilder sb = new StringBuilder();
            for (XSLFSlide slide : slides) {
                CTSlide rawSlide = slide.getXmlObject();
                CTGroupShape gs = rawSlide.getCSld().getSpTree();
                CTShape[] shapes = gs.getSpArray();
                for (CTShape shape : shapes) {
                    CTTextBody tb = shape.getTxBody();
                    if (null == tb)
                        continue;
                    CTTextParagraph[] paras = tb.getPArray();
                    for (CTTextParagraph textParagraph : paras) {
                        CTRegularTextRun[] textRuns = textParagraph.getRArray();
                        for (CTRegularTextRun textRun : textRuns) {
                            sb.append(textRun.getT());
                        }
                    }
                }
            }
            content= content.append(sb.toString());
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } finally{ 
			if(null !=inputStream){
				try {
					inputStream.close();
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
			
		} 
        return content.toString();
    }
     public static int getPPT2007PageNums(String path){
		 int pageNums=-1;
	     FileInputStream inputStream=null;
	     try {
	        	inputStream=new FileInputStream(new File(path));
	            XMLSlideShow xmlSlideShow = new XMLSlideShow(inputStream);
	            XSLFSlide[] slides = xmlSlideShow.getSlides();
	            pageNums=slides.length;
	        } catch (IOException e) {
	            // TODO Auto-generated catch block
	            e.printStackTrace();
	        } finally{ 
				if(null !=inputStream){
					try {
						inputStream.close();
					} catch (IOException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
				}
				
			} 
	       return pageNums;
	 }
     public static String readPdf(String path){
    	FileInputStream inputStream=null;
    	PDDocument document = null; 
    	StringBuffer content=new StringBuffer();
    	try{ 

    		inputStream=new FileInputStream(new File(path));
    		document = PDDocument.load(inputStream); 
    		PDDocumentInformation info = document.getDocumentInformation(); 
    		content.append(info.getTitle());
    		content.append(info.getSubject());
    		content.append(info.getAuthor());
    		content.append(info.getKeywords());
    		content.append(info.getKeywords());
    		PDFTextStripper pts = new PDFTextStripper(); 
    		content.append(pts.getText(document)); 	
    	}catch( Exception e) { 
    		e.printStackTrace();
    	}finally{ 
			if(null !=inputStream)
				try {
					inputStream.close();
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				} 
			if( null != document )
				try {
					document.close();
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				} 
		} 
    	return content.toString();
     }
     public static int getPdfPageNums(String path){
    	FileInputStream inputStream=null;
     	PDDocument document = null;
     	int pageNums=-1;
     	try{ 
     		inputStream=new FileInputStream(new File(path));
     		document = PDDocument.load(inputStream); 
     		pageNums=document.getNumberOfPages();
     	}catch( Exception e) { 
     		e.printStackTrace();
     	}finally{ 
 			if(null !=inputStream)
 				try {
 					inputStream.close();
 				} catch (IOException e) {
 					// TODO Auto-generated catch block
 					e.printStackTrace();
 				} 
 			if( null != document )
 				try {
 					document.close();
 				} catch (IOException e) {
 					// TODO Auto-generated catch block
 					e.printStackTrace();
 				} 
 		} 
     	return pageNums;
     }
     public static String  readTxtFile(String path){
    	 StringBuffer content=new StringBuffer();
    	  try {
    	    String encoding="GBK";
    	          File file=new File(path);
    	          if(file.isFile() && file.exists()){ //判断文件是否存在
    	        	  	   InputStreamReader read = new InputStreamReader(
    	        		   new FileInputStream(file),encoding);//考虑到汉字编码格式
    	        	  	   BufferedReader bufferedReader = new BufferedReader(read);
    	        	  	   String lineTxt = null;
		    	           while((lineTxt = bufferedReader.readLine()) != null){
		    	            content.append(lineTxt);
		    	           }
		    	           read.close();
    	          }else{
    	        	  System.out.println("找不到指定的文件");
    	        	  
    	          }
    	  } catch (Exception e) {
    		  e.printStackTrace();
    	  }
    	 return content.toString();
    }
}
