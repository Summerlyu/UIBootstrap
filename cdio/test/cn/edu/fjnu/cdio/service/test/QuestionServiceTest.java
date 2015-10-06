/**
 * 
 */
package cn.edu.fjnu.cdio.service.test;

import java.io.FileInputStream;
import java.sql.Timestamp;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import junit.framework.TestCase;

import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.poifs.filesystem.POIFSFileSystem;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import cn.edu.fjnu.cdio.model.common.CourseType;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.test.Question;

/**
 * @author Administrator
 * 
 */
public class QuestionServiceTest extends TestCase {

	private ApplicationContext ctx = null;
	private QuestionService questionService = null;

	protected void setUp() throws Exception {
		// TODO Auto-generated method stub
		super.setUp();
		ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		questionService = (QuestionService) ctx.getBean("questionService");
	}

	public void testAddQuestion() {
		POIFSFileSystem fs;
		HSSFWorkbook wb;
		try {
			fs = new POIFSFileSystem(new FileInputStream(
					"D:/CDIO/16.2.xls"));
			// 得到Excel工作簿对象
			wb = new HSSFWorkbook(fs);
			// 得到Excel工作表对象
			HSSFSheet sheet = wb.getSheetAt(0);

			for (int i = 1; i < sheet.getLastRowNum(); i++) {
				// 得到Excel工作表的行
				User user = new User();
				user.setId((long) 1);
				HSSFRow row = sheet.getRow(i);
				Question question = new Question();
				question.setTitle(convertImg2Html(getCellStringValue(row
						.getCell(1))));
				question.setA(convertImg2Html(getCellStringValue(row.getCell(2))));
				question.setB(convertImg2Html(getCellStringValue(row.getCell(3))));
				question.setC(convertImg2Html(getCellStringValue(row.getCell(4))));
				question.setD(convertImg2Html(getCellStringValue(row.getCell(5))));
				question.setAnswer(getCellStringValue(row.getCell(7)));
				question.setAnalysis(convertImg2Html(getCellStringValue(row
						.getCell(8))));
				question.setDiffiLevel((int) Double
						.parseDouble(getCellStringValue(row.getCell(9))));
				// question.setDiffiLevel(Integer.parseInt(getCellStringValue(row
				// .getCell(9))));
				question.setKeyword(getCellStringValue(row.getCell(10)));
				question.setCreator(user);
				question.setCreateTime(new Timestamp(new java.util.Date()
						.getTime()));
				CourseType courseType = new CourseType();
				courseType.setTypeId((long) Double
						.parseDouble(getCellStringValue(row.getCell(11))));
				question.setCourseType(courseType);
				System.out.println(question);
				questionService.create(question);
			}

		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	// public void testLoadQuestion() {
	// Map<String, Object> params = new HashMap<String, Object>();
	// params.put("answer", "D");
	// params.put("diffiLevel", 1);
	// Page<Question> page = questionService.loadPagedQuestions(2, 2, params);
	// for (Question questionPO : page.getResults())
	// System.out.println(questionPO);
	// }

	protected void tearDown() throws Exception {
		// TODO Auto-generated method stub
		super.tearDown();
	}

	public static String getCellStringValue(HSSFCell cell) {
		String cellValue = "";
		switch (cell.getCellType()) {
		case HSSFCell.CELL_TYPE_STRING:// 字符串类型
			cellValue = cell.getStringCellValue();
			if (cellValue.trim().equals("") || cellValue.trim().length() <= 0)
				cellValue = " ";
			break;
		case HSSFCell.CELL_TYPE_NUMERIC: // 数值类型
			cellValue = String.valueOf(cell.getNumericCellValue());
			break;
		case HSSFCell.CELL_TYPE_FORMULA: // 公式
			cell.setCellType(HSSFCell.CELL_TYPE_NUMERIC);
			cellValue = String.valueOf(cell.getNumericCellValue());
			break;
		case HSSFCell.CELL_TYPE_BLANK:
			cellValue = " ";
			break;
		case HSSFCell.CELL_TYPE_BOOLEAN:
			break;
		case HSSFCell.CELL_TYPE_ERROR:
			break;
		default:
			break;
		}
		return cellValue;
	}

	public static String convertImg2Html(String old) {
		Pattern pattern = Pattern.compile("@#[^@]+@");
		StringBuilder sb = new StringBuilder(old);
		Matcher matcher = pattern.matcher(sb);
		while (matcher.find()) {

			StringBuilder temp = new StringBuilder(
					"<img style=\"VERTICAL-ALIGN: middle\" src=\"/cdio2010/test/queBank/loadpic_question?imageName=");
			temp.append(matcher.group().substring(2,
					matcher.group().length() - 1));
			temp.append("\" />");
			sb.replace(matcher.start(), matcher.end(), temp.toString());
			matcher = pattern.matcher(sb);
		}
		return sb.toString();
	}
}
