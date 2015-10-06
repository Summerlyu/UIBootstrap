/**
 * 
 */
package cn.edu.fjnu.cdio.service.test;

import java.io.File;
import java.io.FileInputStream;
import java.sql.Timestamp;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.annotation.Resource;

import org.apache.log4j.Logger;
import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.poifs.filesystem.POIFSFileSystem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.edu.fjnu.cdio.controller.test.QueBankAction;
import cn.edu.fjnu.cdio.dao.test.QuestionDao;
import cn.edu.fjnu.cdio.exceptions.ApplicationException;
import cn.edu.fjnu.cdio.model.common.CourseType;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.test.Question;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author 温武汉
 * 
 * @version ：2013-5-15 下午05:29:46
 */
@Transactional
@Service(value = "questionService")
public class QuestionServiceImpl implements QuestionService {
	@Resource
	private QuestionDao questionDao;
	private static final Logger logger = Logger.getLogger(QueBankAction.class);

	public QuestionDao getQuestionDao() {
		return questionDao;
	}

	@Autowired
	public void setQuestionDao(QuestionDao questionDao) {
		this.questionDao = questionDao;
	}

	@Override
	public void create(Question question) {
		questionDao.save(question);
	}

	@Override
	public void createByBatch(File questionFile, User user) {
		POIFSFileSystem fs;
		HSSFWorkbook wb;
		try {
			fs = new POIFSFileSystem(new FileInputStream(questionFile));
			// 得到Excel工作簿对象
			wb = new HSSFWorkbook(fs);
			// 得到Excel工作表对象
			HSSFSheet sheet = wb.getSheetAt(0);

			for (int i = 1; i < sheet.getLastRowNum(); i++) {
				// 得到Excel工作表的行
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
				questionDao.save(question);
			}
		} catch (Exception e) {
			e.printStackTrace();
			throw new ApplicationException(e.getMessage(), e);
		}
	}

	@Override
	public void remove(Question question) {
		questionDao.delete(question);
	}

	@Override
	public Question getQuestionById(Long queId) {
		return questionDao.getQuestionById(queId);
	}

	@Override
	public void update(Question question) {
		questionDao.update(question);
	}

	@Override
	public Page<Question> loadPagedQuestions(int pageSize, int index,
			Map<String, Object> params) {
		return questionDao.loadPagedQuestions(pageSize, index, params);
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
			if (logger.isDebugEnabled()) {
				logger.debug((matcher.start()));
				logger.debug(matcher.end());
				logger.debug(matcher.group());
			}

			StringBuilder temp = new StringBuilder(
					"<img style=\"VERTICAL-ALIGN: middle\" src=\"/cdio2010/testPic/16.2/");
			temp.append(matcher.group().substring(2,
					matcher.group().length() - 5));
			temp.append(".png");
			temp.append("\" />");
			sb.replace(matcher.start(), matcher.end(), temp.toString());
			matcher = pattern.matcher(sb);
		}
		if (logger.isDebugEnabled()) {
			logger.debug(sb);
		}
		return sb.toString();
	}
}
