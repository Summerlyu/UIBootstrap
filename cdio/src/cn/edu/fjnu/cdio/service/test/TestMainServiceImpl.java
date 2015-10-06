/**
 * 
 */
package cn.edu.fjnu.cdio.service.test;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.annotation.Resource;

import org.apache.struts2.components.If;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.opensymphony.xwork2.ActionContext;

import cn.edu.fjnu.cdio.dao.test.QuestionDao;
import cn.edu.fjnu.cdio.dao.test.TestMainDao;
import cn.edu.fjnu.cdio.exceptions.ApplicationException;
import cn.edu.fjnu.cdio.model.test.Question;
import cn.edu.fjnu.cdio.model.test.TestDetail;
import cn.edu.fjnu.cdio.model.test.TestMain;
import cn.edu.fjnu.cdio.utils.Page;

/**
 * @author 温武汉
 * 
 */
@Transactional
@Service(value = "testMainService")
public class TestMainServiceImpl implements TestMainService {
	@Resource
	private TestMainDao testMainDao;
	@Resource
	private QuestionDao questionDao;

	@Override
	public void removeTestMain(TestMain testMain) {
		testMainDao.delete(testMain);
	}

	@Override
	public TestMain getTestMainById(Long testMId) {
		return testMainDao.getTestMainById(testMId);
	}

	@Override
	public void update(TestMain testMain) {
		testMainDao.update(testMain);
	}

	@Override
	public TestMain update(TestMain testMain, List<String> stuAnswers) {
		TestMain oldTestMain = testMainDao.getTestMainById(testMain
				.getTestMId());
		Integer realScore = oldTestMain.getRealScore();

		// 创建一个新的TestDetail的Set
		Set<TestDetail> newTestDetails = new LinkedHashSet<TestDetail>();
		// i做标记
		int i = 0;

		System.out.println("sasa" + oldTestMain.getQuestions());
		for (Iterator<TestDetail> iterator = oldTestMain.getQuestions()
				.iterator(); iterator.hasNext();) {
			TestDetail testDetail = (TestDetail) iterator.next();
			// testDetail.getQuestion();

			// 如果考试的状态为1，表示刚刚考完试，要进行一些更新操作
			if (oldTestMain.getStatus() == 1) {
				// 获取testDetail里的question
				Question tempQuestion = testDetail.getQuestion();
				// 把这个question里的被测的计数器加1
				tempQuestion.setTestCnt(tempQuestion.getTestCnt() + 1);

				// 学生选择A的话，就给该question里的A被选加1
				if (stuAnswers.get(i).equals("A"))
					tempQuestion.setAcnt(tempQuestion.getAcnt() + 1);
				if (stuAnswers.get(i).equals("B"))
					tempQuestion.setBcnt(tempQuestion.getBcnt() + 1);
				if (stuAnswers.get(i).equals("C"))
					tempQuestion.setCcnt(tempQuestion.getCcnt() + 1);
				if (stuAnswers.get(i).equals("D"))
					tempQuestion.setDcnt(tempQuestion.getDcnt() + 1);

				// 如果学生的答案跟这个TestDetail里的答案一致的话
				if (testDetail.getAnswer().equals(stuAnswers.get(i))) {
					// 那就加上这题的分数
					realScore = realScore + testDetail.getScore();
					tempQuestion.setRightCnt(tempQuestion.getRightCnt() + 1);
				} else {
					// 计算每种难度级别的题目数，1为容易，2为中等，3为难
					if (tempQuestion.getDiffiLevel() == 1)
						oldTestMain
								.setEasyErrCnt(oldTestMain.getEasyErrCnt() + 1);
					if (tempQuestion.getDiffiLevel() == 2)
						oldTestMain
								.setAveErrCnt(oldTestMain.getAveErrCnt() + 1);
					if (tempQuestion.getDiffiLevel() == 3)
						oldTestMain
								.setDiffiErrCnt(oldTestMain.getDiffiErrCnt() + 1);
				}
				questionDao.update(tempQuestion);
				testDetail.setQuestion(tempQuestion);
			}
			testDetail.setStuAnswer(stuAnswers.get(i++));
			testDetail.setTestMain(oldTestMain);
			newTestDetails.add(testDetail);
		}

		// 设置考试的状态，置为2，表示已经考完了
		oldTestMain.setStatus(2);
		// 设置学生的真是分数
		oldTestMain.setRealScore(realScore);
		// 设置这个旧的TestMain的的Question集合
		oldTestMain.setQuestions(newTestDetails);

		testMainDao.update(oldTestMain);

		return oldTestMain;
	}

	@Override
	public Page<TestMain> loadPagedRandTestMains(int pageSize, int index,
			Map<String, Object> params) {
		return testMainDao.loadPagedRandTestMains(pageSize, index, params);
	}

	@Override
	public Page<TestMain> loadPagedScheduledTestMains(int pageSize, int index,
			Map<String, Object> params, int tag) {
		return testMainDao.loadPagedScheduledTestMains(pageSize, index, params,
				tag);
	}

	public TestMain createRandomTestMain(TestMain testMain,
			Map<String, Object> params) {

		Set<TestDetail> questions = new LinkedHashSet<TestDetail>();
		// 用来生成顺序的标记
		int j = 0;

		// 随机获取简单的题目
		params.put("diffiLevel", 1);
		int easyCnt = questionDao.cntQuestions(params);
		if (easyCnt != 0 && easyCnt >= testMain.getEasyCnt()) {
			for (int i = 0; i < testMain.getEasyCnt(); i++, j++) {
				TestDetail testDetail = new TestDetail();
				Question question = questionDao.getQuestionByRand(params,
						easyCnt);
				testDetail.setQuestion(question);
				testDetail.setSequence(j + 1);
				testDetail
						.setScore((int) (testMain.getEasyRatio() * 100 / testMain
								.getEasyCnt()));
				testDetail.setAnswer(question.getAnswer());
				testDetail.setTestMain(testMain);
				questions.add(testDetail);
			}
		} else {
			throw new ApplicationException("对不起，题目数量不够！");
		}

		// 随机获取中等程度的题目
		params.put("diffiLevel", 2);
		int aveCnt = questionDao.cntQuestions(params);
		if (aveCnt != 0 && aveCnt >= testMain.getAveCnt()) {
			for (int i = 0; i < testMain.getAveCnt(); i++, j++) {
				TestDetail testDetail = new TestDetail();
				Question question = questionDao.getQuestionByRand(params,
						aveCnt);
				testDetail.setQuestion(question);
				testDetail.setSequence(j + 1);
				testDetail
						.setScore((int) (testMain.getAveRatio() * 100 / testMain
								.getAveCnt()));
				testDetail.setAnswer(question.getAnswer());
				testDetail.setTestMain(testMain);
				questions.add(testDetail);
			}
		} else {
			throw new ApplicationException("对不起，题目数量不够！");
		}

		// 随机获取较难程度的题目
		params.put("diffiLevel", 3);
		int diffiCnt = questionDao.cntQuestions(params);
		if (diffiCnt != 0 && diffiCnt >= testMain.getDiffiCnt()) {
			for (int i = 0; i < testMain.getDiffiCnt(); i++, j++) {
				TestDetail testDetail = new TestDetail();
				Question question = questionDao.getQuestionByRand(params,
						diffiCnt);
				testDetail.setQuestion(question);
				testDetail.setSequence(j + 1);
				testDetail
						.setScore((int) (testMain.getDiffiRatio() * 100 / testMain
								.getDiffiCnt()));
				testDetail.setAnswer(question.getAnswer());
				testDetail.setTestMain(testMain);
				questions.add(testDetail);
			}
		} else {
			throw new ApplicationException("对不起，题目数量不够！");
		}
		testMain.setQuestions(questions);
		testMainDao.save(testMain);
		System.out.println(testMain);
		return testMain;
	}

	@Override
	public void save(TestMain testMain) {
		// TODO Auto-generated method stub
		testMainDao.save(testMain);
	}

	@Override
	public List<Question> loadDetailTestMain(Map<String, Object> params) {
		// 获取该计划测试下的所有相关的TestMain
		List<TestMain> testMains = testMainDao.loadTestMainsList(params);
		// 这个是用来统计错题的list，用于界面的显示的
		List<Question> questions = new ArrayList<Question>();
		// 这个是用来标记是否该题已经被统计过
		Map<Long, Integer> tags = new HashMap<Long, Integer>();
		// 迭代每一个testMain
		for (TestMain testMain : testMains) {
			// 迭代testMain中的每一个testDetail
			for (TestDetail testDetail : testMain.getQuestions()) {
				// 如果学生答错了
				if (!testDetail.getAnswer().equals(testDetail.getStuAnswer())) {
					Question question = testDetail.getQuestion();
					// 如果是第一次统计该题
					if (!tags.containsKey(question.getQueId())) {
						question.setTestCnt(1);
						questions.add(question);
						question.setAcnt(0);
						question.setBcnt(0);
						question.setCcnt(0);
						question.setDcnt(0);
						if (testDetail.getStuAnswer().equals("A")) {
							question.setAcnt(1);
						} else if (testDetail.getStuAnswer().equals("B")) {
							question.setBcnt(1);
						} else if (testDetail.getStuAnswer().equals("C")) {
							question.setCcnt(1);
						} else if (testDetail.getStuAnswer().equals("D")) {
							question.setDcnt(1);
						}

						tags.put(question.getQueId(), questions.size() - 1);

					} else {
						// 如果不是第一次统计该题
						// 获取该题在questions中的位置
						int location = tags.get(question.getQueId());
						// 获取该题的question
						Question oldQuestion = questions.get(location);
						// 把错误数加1
						oldQuestion.setTestCnt(oldQuestion.getTestCnt() + 1);
						if (testDetail.getStuAnswer().equals("A")) {
							oldQuestion.setAcnt(question.getAcnt() + 1);
						} else if (testDetail.getStuAnswer().equals("B")) {
							oldQuestion.setBcnt(question.getBcnt() + 1);
						} else if (testDetail.getStuAnswer().equals("C")) {
							oldQuestion.setCcnt(question.getCcnt() + 1);
						} else if (testDetail.getStuAnswer().equals("D")) {
							oldQuestion.setDcnt(question.getDcnt() + 1);
						}

						// 如果是的话，就交换两个question的位置
						// 查找要插到哪里
						// 如果位置不是第一个，然后加上1后，要重新查找要插到哪里去
						if (location != 0) {
							for (int i = location - 1; i >= 0; i--) {
								// 如果能找到比当前question错误数大的question
								if (oldQuestion.getTestCnt() < questions.get(i)
										.getTestCnt()) {
									for (int j = location - 1; j > i; j--) {
										questions.set(j + 1, questions.get(j));
										tags.put(questions.get(j + 1)
												.getQueId(), j + 1);
									}
									questions.set(i + 1, oldQuestion);
									tags.put(oldQuestion.getQueId(), i + 1);
									break;
								}
								if (i == 0) {
									for (int j = location - 1; j >= i; j--) {
										questions.set(j + 1, questions.get(j));
										tags.put(questions.get(j + 1)
												.getQueId(), j + 1);
									}
									questions.set(0, oldQuestion);
									tags.put(oldQuestion.getQueId(), 0);
								}
							}
						}
					}
				}
			}
		}

		return questions;
	}

	public TestMainDao getTestMainDao() {
		return testMainDao;
	}

	@Autowired
	public void setTestMainDao(TestMainDao testMainDao) {
		this.testMainDao = testMainDao;
	}

	public QuestionDao getQuestionDao() {
		return questionDao;
	}

	@Autowired
	public void setQuestionDao(QuestionDao questionDao) {
		this.questionDao = questionDao;
	}

}
