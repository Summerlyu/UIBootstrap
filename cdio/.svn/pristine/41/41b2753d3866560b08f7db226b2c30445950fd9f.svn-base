package cn.edu.fjnu.cdio.service.mat;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sun.org.apache.bcel.internal.generic.NEW;

import cn.edu.fjnu.cdio.dao.coa.CourseDao;
import cn.edu.fjnu.cdio.dao.common.UserDao;
import cn.edu.fjnu.cdio.dao.mat.MatchInfoDao;
import cn.edu.fjnu.cdio.dao.stu.FreeTimeDao;
import cn.edu.fjnu.cdio.dao.stu.StudentDao;
import cn.edu.fjnu.cdio.dao.test.ScopeDao;
import cn.edu.fjnu.cdio.dao.trs.CourseSchemaDao;
import cn.edu.fjnu.cdio.dao.util.MDAlgorithm;
import cn.edu.fjnu.cdio.exceptions.ApplicationException;
import cn.edu.fjnu.cdio.model.coa.Course;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.model.mat.MatchFactor;

import cn.edu.fjnu.cdio.model.mat.StuMatchInfo;
import cn.edu.fjnu.cdio.model.mat.vo.MatInfoBean;
import cn.edu.fjnu.cdio.model.mat.vo.MatchPage;
import cn.edu.fjnu.cdio.model.stu.Freetime;
import cn.edu.fjnu.cdio.model.stu.Student;

/**
 * @author 作者:第五组
 * 
 * @version 创建时间：2013-05-15 下午01:50:49
 * 
 *          功能说明:匹配服务实现
 * 
 * @version 修改时间：2013-05-15
 * 
 *          修改原因如下：
 * 
 */
@Transactional
@Service(value = "matchService")
public class MatchServiceImpl implements MatchService {

	private MatchInfoDao matchInfoDao;
	private CourseDao courseDao;
	private UserDao userDao;
	private ScopeDao scopeDao;	
	private CourseSchemaDao courseSchemaDao;
	private FreeTimeDao freeTimeDao;
	
	public FreeTimeDao getFreeTimeDao() {
		return freeTimeDao;
	}
	public void setFreeTimeDao(FreeTimeDao freeTimeDao) {
		this.freeTimeDao = freeTimeDao;
	}
	public CourseSchemaDao getCourseSchemaDao() {
		return courseSchemaDao;
	}
	@Autowired
	public void setCourseSchemaDao(CourseSchemaDao courseSchemaDao) {
		this.courseSchemaDao = courseSchemaDao;
	}

	public ScopeDao getScopeDao() {
		return scopeDao;
	}

	@Autowired
	public void setScopeDao(ScopeDao scopeDao) {
		this.scopeDao = scopeDao;
	}


	public UserDao getUserDao() {
		return userDao;
	}

	@Autowired
	public void setUserDao(UserDao userDao) {
		this.userDao = userDao;
	}

	public CourseDao getCourseDao() {
		return courseDao;
	}

	@Autowired
	public void setCourseDao(CourseDao courseDao) {
		this.courseDao = courseDao;
	}

	public MatchInfoDao getMatchInfoDao() {
		return matchInfoDao;
	}

	@Autowired
	public void setMatchInfoDao(MatchInfoDao MatchInfoDao) {
		this.matchInfoDao = MatchInfoDao;
	}

	@Override
	public List<Long> match(Long stuId) throws ApplicationException {
		// TODO Auto-generated method stub
		StuMatchInfo stuMatchInfo = matchInfoDao.getStuMatchInfo(stuId);
		try {
			//return MDAlgorithm.MD(matchInfo(stuMatchInfo));
			System.out.println("result="+matchReturnTag(stuMatchInfo));
			return MDAlgorithm.MD(timeMatch(matchInfo(stuMatchInfo), stuId));
			
		} catch (Exception e) {
			// TODO: handle exception
			throw new ApplicationException("fail");
		}
		// return MDAlgorithm.MD(timeMatch(matchInfo(stuMatchInfo), stuId));

	}

	@Override
	public Map<Long, Map<String, Integer>> matchReturnTag(StuMatchInfo matchInfo) {
		// TODO Auto-generated method stub
		Map<Long, Map<String, Integer>> matchResult = new HashMap<Long, Map<String, Integer>>();
		List<Long> selectedList = new ArrayList<Long>();
		List<Long> selectedTypeList = new ArrayList<Long>();
		List<Long> subjectMatList = new ArrayList<Long>();
		List<Long> chapterMatList = new ArrayList<Long>();
		List<Long> sectionMatList = new ArrayList<Long>();
		// 年级匹配
		selectedTypeList = matchInfoDao.getSelectedType(
				MatchFactor.GRADE_FACTOR, matchInfo.getCourseType().getGrade());
		for (Long typeId : selectedTypeList) {
			selectedList.addAll(matchInfoDao.getSelectedCourseMatType(typeId));
		}
		matchResult = matchDegreeReturnTag(selectedList,
				MatchFactor.GRADE_FACTOR, MatchFactor.GRADE_FACTOR_VALUE,
				matchResult);

		// 学科匹配
		selectedTypeList = matchInfoDao.getSelectedType(
				MatchFactor.SUBJECT_FACTOR, matchInfo.getCourseType()
						.getSubject());
		for (Long typeId : selectedTypeList) {
			selectedList.addAll(matchInfoDao.getSelectedCourseMatType(typeId));
		}
		subjectMatList = selectedList;
		matchResult = matchDegreeReturnTag(selectedList,
				MatchFactor.SUBJECT_FACTOR, MatchFactor.SUBJECT_VALUE,
				matchResult);
		// 章节匹配
		selectedTypeList = matchInfoDao.getSelectedType(
				MatchFactor.CHAPTER_FACTOR, matchInfo.getCourseType()
						.getChapter());
		for (Long typeId : selectedTypeList) {
			selectedList.addAll(matchInfoDao.getSelectedCourseMatType(typeId));
		}
		selectedList.retainAll(subjectMatList);
		chapterMatList = selectedList;
		matchResult = matchDegreeReturnTag(selectedList,
				MatchFactor.CHAPTER_FACTOR, MatchFactor.CHAPTER_FACTOR_VALUE,
				matchResult);
		// 小节匹配
		selectedTypeList = matchInfoDao.getSelectedType(
				MatchFactor.SECTION_FACTOR, matchInfo.getCourseType()
						.getSection());
		for (Long typeId : selectedTypeList) {
			selectedList.addAll(matchInfoDao.getSelectedCourseMatType(typeId));
		}
		sectionMatList = selectedList;
		sectionMatList.retainAll(chapterMatList);
		matchResult = matchDegreeReturnTag(sectionMatList,
				MatchFactor.SECTION_FACTOR, MatchFactor.SECTION_FACTOR_VALUE,
				matchResult);

		// 版本匹配
		selectedTypeList = matchInfoDao.getSelectedType(
				MatchFactor.VERSION_FACTOR, matchInfo.getCourseType()
						.getVersion());
		for (Long typeId : selectedTypeList) {
			selectedList.addAll(matchInfoDao.getSelectedCourseMatType(typeId));
		}
		selectedList.retainAll(sectionMatList);
		matchResult = matchDegreeReturnTag(selectedList,
				MatchFactor.VERSION_FACTOR, MatchFactor.VERSION_FACTOR_VALUE,
				matchResult);
		// 风格匹配
		selectedList = matchInfoDao.getSelectedInfo(MatchFactor.STYLE_FACTOR,
				matchInfo.getTeachStyle());
		matchResult = matchDegreeReturnTag(selectedList,
				MatchFactor.STYLE_FACTOR, MatchFactor.STYLE_FACTOR_VALUE,
				matchResult);
		// 模式匹配
		selectedList = matchInfoDao.getSelectedInfo(MatchFactor.PATTERN_FACTOR,
				matchInfo.getPattern());
		matchResult = matchDegreeReturnTag(selectedList,
				MatchFactor.PATTERN_FACTOR, MatchFactor.PATTEN_FACTOR_VALUE,
				matchResult);
		return matchResult;
	}

	@Override
	public Map<Long, Map<String, Integer>> matchDegreeReturnTag(
			List<Long> infoList, String factor, Integer value,
			Map<Long, Map<String, Integer>> matchDegree) {
		// TODO Auto-generated method stub

		for (Long courseId : infoList) {
			Map<String, Integer> degree = new HashMap<String, Integer>();
			degree.put(factor, value);
			if (matchDegree.get(courseId) == null) {
				matchDegree.put(courseId, degree);
			} else {
				matchDegree.get(courseId).put(factor, value);
			}

		}
		return matchDegree;
	}

	@Override
	public Map<Long, Integer> matchInfo(StuMatchInfo matchInfo) {
		// TODO Auto-generated method stub
		Map<Long, Integer> matchResult = new HashMap<Long, Integer>();
		List<Long> selectedList = new ArrayList<Long>();
		List<Long> selectedTypeList = new ArrayList<Long>();
		List<Long> subjectMatList = new ArrayList<Long>();
		List<Long> chapterMatList = new ArrayList<Long>();
		List<Long> sectionMatList = new ArrayList<Long>();
		// 年级匹配
		selectedTypeList = matchInfoDao.getSelectedType(
				MatchFactor.GRADE_FACTOR, matchInfo.getCourseType().getGrade());
		for (Long typeId : selectedTypeList) {
			selectedList.addAll(matchInfoDao.getSelectedCourseMatType(typeId));
		}
		matchResult = matchDegree(selectedList, MatchFactor.GRADE_FACTOR_VALUE,
				matchResult);

		// 学科匹配
		selectedTypeList = matchInfoDao.getSelectedType(
				MatchFactor.SUBJECT_FACTOR, matchInfo.getCourseType()
						.getSubject());
		for (Long typeId : selectedTypeList) {
			selectedList.addAll(matchInfoDao.getSelectedCourseMatType(typeId));
		}
		subjectMatList = selectedList;
		matchResult = matchDegree(selectedList, MatchFactor.SUBJECT_VALUE,
				matchResult);
		// 章节匹配
		selectedTypeList = matchInfoDao.getSelectedType(
				MatchFactor.CHAPTER_FACTOR, matchInfo.getCourseType()
						.getChapter());
		for (Long typeId : selectedTypeList) {
			selectedList.addAll(matchInfoDao.getSelectedCourseMatType(typeId));
		}
		selectedList.retainAll(subjectMatList);
		chapterMatList = selectedList;
		matchResult = matchDegree(selectedList,
				MatchFactor.CHAPTER_FACTOR_VALUE, matchResult);
		// 小节匹配
		selectedTypeList = matchInfoDao.getSelectedType(
				MatchFactor.SECTION_FACTOR, matchInfo.getCourseType()
						.getSection());
		for (Long typeId : selectedTypeList) {
			selectedList.addAll(matchInfoDao.getSelectedCourseMatType(typeId));
		}
		sectionMatList = selectedList;
		sectionMatList.retainAll(chapterMatList);
		matchResult = matchDegree(selectedList,
				MatchFactor.SECTION_FACTOR_VALUE, matchResult);

		// 版本匹配
		selectedTypeList = matchInfoDao.getSelectedType(
				MatchFactor.VERSION_FACTOR, matchInfo.getCourseType()
						.getVersion());
		for (Long typeId : selectedTypeList) {
			selectedList.addAll(matchInfoDao.getSelectedCourseMatType(typeId));
		}
		selectedList.retainAll(sectionMatList);
		matchResult = matchDegree(selectedList,
				MatchFactor.VERSION_FACTOR_VALUE, matchResult);
		// 风格匹配
		selectedList = matchInfoDao.getSelectedInfo(MatchFactor.STYLE_FACTOR,
				matchInfo.getTeachStyle());
		matchResult = matchDegree(selectedList, MatchFactor.STYLE_FACTOR_VALUE,
				matchResult);
		// 模式匹配
		selectedList = matchInfoDao.getSelectedInfo(MatchFactor.PATTERN_FACTOR,
				matchInfo.getPattern());
		matchResult = matchDegree(selectedList,
				MatchFactor.PATTEN_FACTOR_VALUE, matchResult);
		return matchResult;
	}

	@Override
	public Map<Long, Integer> matchDegree(List<Long> infoList, Integer value,
			Map<Long, Integer> matchDegree) {
		// TODO Auto-generated method stub

		for (Long courseId : infoList) {
			Integer degreeInteger = null;
			if (matchDegree.get(courseId) == null) {
				matchDegree.put(courseId, value);
			} else {
				degreeInteger = matchDegree.get(courseId);
				matchDegree.put(courseId, degreeInteger + value);
			}

		}
		return matchDegree;
	}

	@Override
	public List<MatInfoBean> matchPage(List<Long> matchList, Integer currentPage) {
		// TODO Auto-generated method stub
		List<MatInfoBean> infoList = new ArrayList<MatInfoBean>();
		MatchPage page = new MatchPage();

		page.setTotalRecNum(matchList.size());
		page.setPageSize(4);
		page.setPageNo(currentPage);
		if (page.getNextPage()) {
			for (int i = (page.getPageNo() - 1) * page.getPageSize(); i < page
					.getPageNo() * page.getPageSize(); i++) {
				MatInfoBean matchInfo = new MatInfoBean();
				Course course = new Course();
				User coach = new User();
				course = courseDao.getCourseByID(matchList.get(i));
				coach = userDao.get(new User(course.getUser().getId()));
				matchInfo.setCourse(course);
				matchInfo.courseInit();
				matchInfo.setSubject((scopeDao.getScopeById(course
						.getCourseType().getSubject().getScopeId())).getName());
				matchInfo.setVersion((scopeDao.getScopeById(course
						.getCourseType().getVersion().getScopeId())).getName());
				matchInfo.setChapter((scopeDao.getScopeById(course
						.getCourseType().getChapter().getScopeId())).getName());
				matchInfo.setSection((scopeDao.getScopeById(course
						.getCourseType().getSection().getScopeId())).getName());
				matchInfo.setGrade((scopeDao.getScopeById(course
						.getCourseType().getGrade().getScopeId())).getName());
				matchInfo.setCoachId(coach.getId());
				matchInfo.setCoachName(coach.getName());
				matchInfo.setComment(coach.getComment());
				matchInfo.setEduBackground(coach.getEduBackground());
				matchInfo.setEmail(coach.getEmail());
				matchInfo.setLevel(coach.getLevel());
				matchInfo.setPhone(coach.getPhone());
				matchInfo.setQqNum(coach.getQqNum());
				matchInfo.setSex(coach.getSex());
				matchInfo.setWorkPlace(coach.getWorkPlace());
				infoList.add(matchInfo);
			}
		} else {
			for (int i = (page.getPageNo() - 1) * page.getPageSize(); i < page
					.getTotalRecNum(); i++) {
				MatInfoBean matchInfo = new MatInfoBean();
				Course course = new Course();
				User coach = new User();
				course = courseDao.getCourseByID(matchList.get(i));
				coach = userDao.get(new User(course.getUser().getId()));
				matchInfo.setCourse(course);
				matchInfo.courseInit();
				matchInfo.setPattern(courseSchemaDao.getSchemaById(course.getPattern().longValue()).getSchemaName());
				matchInfo.setSubject((scopeDao.getScopeById(course
						.getCourseType().getSubject().getScopeId())).getName());
				matchInfo.setVersion((scopeDao.getScopeById(course
						.getCourseType().getVersion().getScopeId())).getName());
				matchInfo.setChapter((scopeDao.getScopeById(course
						.getCourseType().getChapter().getScopeId())).getName());
				matchInfo.setSection((scopeDao.getScopeById(course
						.getCourseType().getSection().getScopeId())).getName());
				matchInfo.setGrade((scopeDao.getScopeById(course
						.getCourseType().getGrade().getScopeId())).getName());
				matchInfo.setCoachId(coach.getId());
				matchInfo.setCoachName(coach.getName());
				matchInfo.setComment(coach.getComment());
				matchInfo.setEduBackground(coach.getEduBackground());
				matchInfo.setEmail(coach.getEmail());
				matchInfo.setLevel(coach.getLevel());
				matchInfo.setPhone(coach.getPhone());
				matchInfo.setQqNum(coach.getQqNum());
				matchInfo.setSex(coach.getSex());
				matchInfo.setWorkPlace(coach.getWorkPlace());
				infoList.add(matchInfo);

			}
		}
		return infoList;
		
	}

	@Override
	public Map<Long, Integer> timeMatch(Map<Long, Integer> firstMatch,
			Long stuId) {
		// TODO Auto-generated method stub
		User user = new User();
		user.setId(stuId.longValue());
		user = userDao.get(user);
		@SuppressWarnings("unchecked")
		List<Freetime> freetimes = freeTimeDao.getFreetimes(user);
		List<Long> infoList = new ArrayList<Long>();
		for (Freetime freetime : freetimes) {
			infoList = matchInfoDao.getTimeMatch(freetime.getBeginTime(),
					freetime.getEndTime(), MatchFactor.TIME_FACTOR);
			firstMatch = matchDegree(infoList, MatchFactor.TIME_FACTOR_VALUE,
					firstMatch);
		}
		System.out.println("firstMatch="+firstMatch);
		return firstMatch;
	}

	@Override
	public StuMatchInfo getByID(Long stuId) throws ApplicationException {
		// TODO Auto-generated method stub
		try {
			return matchInfoDao.getStuMatchInfo(stuId);
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return null;
		
		
	}

	@Override
	public void add(StuMatchInfo stuMatchInfo) throws ApplicationException {
		// TODO Auto-generated method stub
		matchInfoDao.save(stuMatchInfo);
	}

	@Override
	public MatInfoBean getDetail(long courseId) {
		// TODO Auto-generated method stub
		MatInfoBean matchInfo = new MatInfoBean();
		Course course = new Course();
		User coach = new User();
		course = courseDao.getCourseByID(courseId);
		coach = userDao.get(new User(course.getUser().getId()));
		matchInfo.setCourse(course);
		matchInfo.courseInit();
		matchInfo.setPattern(courseSchemaDao.getSchemaById(course.getPattern().longValue()).getSchemaName());
		matchInfo.setSubject((scopeDao.getScopeById(course
				.getCourseType().getSubject().getScopeId())).getName());
		matchInfo.setVersion((scopeDao.getScopeById(course
				.getCourseType().getVersion().getScopeId())).getName());
		matchInfo.setChapter((scopeDao.getScopeById(course
				.getCourseType().getChapter().getScopeId())).getName());
		matchInfo.setSection((scopeDao.getScopeById(course
				.getCourseType().getSection().getScopeId())).getName());
		matchInfo.setGrade((scopeDao.getScopeById(course
				.getCourseType().getGrade().getScopeId())).getName());
		matchInfo.setCoachId(coach.getId());
		matchInfo.setCoachName(coach.getName());
		matchInfo.setComment(coach.getComment());
		matchInfo.setEduBackground(coach.getEduBackground());
		matchInfo.setEmail(coach.getEmail());
		matchInfo.setLevel(coach.getLevel());
		matchInfo.setPhone(coach.getPhone());
		matchInfo.setQqNum(coach.getQqNum());
		matchInfo.setSex(coach.getSex());
		matchInfo.setWorkPlace(coach.getWorkPlace());
		matchInfo.setPicture(coach.getPicture());
		return matchInfo;
	}

}
