package cn.edu.fjnu.cdio.service.trs;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStreamWriter;
import java.io.Writer;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.poi.hwpf.HWPFDocument;
import org.apache.poi.hwpf.usermodel.CharacterRun;
import org.apache.poi.hwpf.usermodel.Range;
import org.apache.poi.poifs.filesystem.POIFSFileSystem;
import org.apache.poi.xwpf.usermodel.LineSpacingRule;
import org.apache.poi.xwpf.usermodel.ParagraphAlignment;
import org.apache.poi.xwpf.usermodel.XWPFDocument;
import org.apache.poi.xwpf.usermodel.XWPFParagraph;
import org.apache.poi.xwpf.usermodel.XWPFRun;

import cn.edu.fjnu.cdio.model.trs.Report;

import freemarker.template.Configuration;
import freemarker.template.Template;
import freemarker.template.TemplateException;

public class DocumentHandler {
	private Configuration configuration = null;
	private Map<String,Object> dataMap;

	public Map<String,Object> getDataMap() {
		return dataMap;
	}

	public void setDataMap(Map<String,Object> dataMap) {
		this.dataMap = dataMap;
	}


	public DocumentHandler() {
		configuration = new Configuration();
		configuration.setDefaultEncoding("utf-8");
	}
	
    private String replaceText(String text) {

        if (null == text || "".equals(text)) {
            return text;
        }
        if (text.contains("###A###")) {
            return ((String) dataMap.get("coachName"))+"\r";
        } else if (text.contains("###B###")){
        	return ((String) dataMap.get("course"))+"\r";
        } else if (text.contains("###C###")){
        	return ((String) dataMap.get("record"))+"\r";
        } else if (text.contains("###D###")){
        	return ((String) dataMap.get("date"))+"\r";
        } else if (text.contains("###E###")){
        	return ((Report) dataMap.get("report")).getValuea()+"\r";
        } else if (text.contains("###F###")){
        	return ((Report) dataMap.get("report")).getValueb()+"\r";
        } else if (text.contains("###G###")){
        	return ((Report) dataMap.get("report")).getValuec()+"\r";
        }
        return text;
        
    }
    
    public File createDocByPoi2(String path,String fileName) throws Exception{

		File outFile = new File(path+"/"+fileName);
		File temp = new File(path+"/"+"教学报告.doc");

		InputStream tempInputStream = new FileInputStream(temp);
		POIFSFileSystem fs = new POIFSFileSystem(tempInputStream);
		HWPFDocument doc = new HWPFDocument(fs);
		Range range = doc.getRange();
		for (int i = 0; i < range.numCharacterRuns(); i++) {
			CharacterRun run = range.getCharacterRun(i);
			String text1 = run.text();
			// 替换自定义标记
			String text2 = replaceText(text1);
			run.replaceText(text2, false);
		}
		doc.write(new FileOutputStream(outFile));
		return outFile;
	} 
    
	public File createDoc(String path, String fileName) {
		//要填入模本的数据文件
		//设置模本装置方法和路径,FreeMarker支持多种模板装载方法。可以重servlet，classpath，数据库装载，
		//这里我们的模板是放在com.havenliu.document.template包下面
		configuration.setClassForTemplateLoading(this.getClass(), "/cn/edu/fjnu/cdio/config/trs");
		Template t=null;
		try {
			//test.ftl为要装载的模板
			t = configuration.getTemplate("docTem.ftl");
		} catch (IOException e) {
			e.printStackTrace();
		}
		//输出文档路径及名称
		File outFile = new File(path+"/"+fileName);
		Writer out = null;
		try {
			out = new BufferedWriter(new OutputStreamWriter(new FileOutputStream(outFile)));
		} catch (FileNotFoundException e1) {
			e1.printStackTrace();
		}
		 
        try {
			t.process(dataMap, out);
		} catch (TemplateException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
        
        return outFile;
	}
	
	public File createDocByPoi(String path, String fileName) {
		XWPFDocument doc = new XWPFDocument();
		
		XWPFParagraph title = doc.createParagraph();
		title.setAlignment(ParagraphAlignment.CENTER);
		
		XWPFRun r1 = title.createRun();
		r1.setBold(true);
		r1.setFontSize(24);
		r1.setFontFamily("黑体");
		r1.setText("教学报告");
		
		XWPFParagraph info = doc.createParagraph();  
                  
        //p3.setAlignment(ParagraphAlignment.DISTRIBUTE);  
		info.setAlignment(ParagraphAlignment.BOTH);  
		info.setSpacingLineRule(LineSpacingRule.EXACT);  
  
		XWPFRun r2 = info.createRun();
		r2.setBold(true);
		r2.setFontSize(20);
		r2.setFontFamily("黑体");
		r2.setText("Coach: "+dataMap.get("coachName"));
	
		r2.addBreak();
		r2.setText("时间: "+dataMap.get("date"));
		
		r2.addBreak();
		r2.setText("课程: "+dataMap.get("course"));

		r2.addBreak();
		r2.setText("课时: "+dataMap.get("record"));
		
		Report report=(Report)dataMap.get("report");
		
		XWPFParagraph main = doc.createParagraph();  
        
        //p3.setAlignment(ParagraphAlignment.DISTRIBUTE);  
		main.setAlignment(ParagraphAlignment.BOTH);  
		main.setSpacingLineRule(LineSpacingRule.EXACT);
		
		XWPFRun r3 = main.createRun();
		r3.setBold(true);
		r3.setFontSize(16);
		r3.setFontFamily("黑体");
		r3.setText("教学目标完成情况");
		r3.addBreak();
		
		XWPFRun r4 = main.createRun();
        r4.setTextPosition(16);  
		r4.setFontSize(12);
		r4.setFontFamily("宋体");
		r4.setText("  "+report.getValuea());
		r4.addBreak();
		
		XWPFRun r5 = main.createRun();
		r5.setBold(true);
		r5.setFontSize(16);
		r5.setFontFamily("黑体");
		r5.setText("同学课堂表现情况");
		r5.addBreak();
		
		XWPFRun r6 = main.createRun();
		r6.setTextPosition(16);  
		r6.setFontSize(12);
		r6.setFontFamily("宋体");
		r6.setText("  "+report.getValueb());
		r6.addBreak();
		
		XWPFRun r7 = main.createRun();
		r7.setBold(true);
		r7.setFontSize(16);
		r7.setFontFamily("黑体");
		r7.setText("此次教学心得体会");
		r7.addBreak();
		
		XWPFRun r8 = main.createRun();
		r8.setTextPosition(16);  
		r8.setFontSize(12);
		r8.setFontFamily("宋体");
		r8.setText("  "+report.getValuec());
		r8.addBreak();
		//输出文档路径及名称
		File outFile = new File(path+"/"+fileName);
		try {
			FileOutputStream out = new FileOutputStream(outFile);
			doc.write(out);
		
		} catch (FileNotFoundException e1) {
			e1.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		 
        return outFile;
	}
}
