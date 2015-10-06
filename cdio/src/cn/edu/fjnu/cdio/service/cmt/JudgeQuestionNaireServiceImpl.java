package cn.edu.fjnu.cdio.service.cmt;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.edu.fjnu.cdio.dao.cmt.JudgeQuestionNaireDao;
import cn.edu.fjnu.cdio.model.cmt.JudgeQuestion;
import cn.edu.fjnu.cdio.utils.Page;

@Transactional
@Service(value = "judgeQuestionNaireService")
public class JudgeQuestionNaireServiceImpl implements JudgeQuestionNaireService {
	private static final int PAGE_SIZE = 10;
	@Resource
	private JudgeQuestionNaireDao judgeQuestionNaireDao;

	public void setJudgeQuestionNaireDao(
			JudgeQuestionNaireDao judgeQuestionNaireDao) {
		this.judgeQuestionNaireDao = judgeQuestionNaireDao;
	}

	@Override
	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * cn.edu.fjnu.cdio.service.cmt.JudgeQuestionNaireService#addJudgeQuestion
	 * (cn.edu.fjnu.cdio.model.cmt.po.JudgeQuestion)
	 */
	public void addJudgeQuestion(JudgeQuestion judgeQuestion) {
		judgeQuestionNaireDao.addJudgeQuestion(judgeQuestion);
	}

	@Override
	/*
	 * (non-Javadoc)
	 * 
	 * @see cn.edu.fjnu.cdio.service.cmt.JudgeQuestionNaireService#loadAll()
	 */
	public Page loadQuestionPage(int index) {
		String hql = "from JudgeQuestion";
		return judgeQuestionNaireDao.loadQuestionPage(hql, PAGE_SIZE, index);
	}

	@Override
	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * cn.edu.fjnu.cdio.service.cmt.JudgeQuestionNaireService#removeJudgeQuestion
	 * (java.lang.Integer)
	 */
	public void deleteJudgeQuestion(Integer questionId) {
		judgeQuestionNaireDao.deleteJudgeQuestion(questionId);

	}

	@Override
	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * cn.edu.fjnu.cdio.service.cmt.JudgeQuestionNaireService#updateJudgeQuestion
	 * (java.lang.Integer)
	 */
	public JudgeQuestion getJudgeQuestionById(Integer questionId) {
		return judgeQuestionNaireDao.getJudgeQuestionById(questionId);
	}

	@Override
	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * cn.edu.fjnu.cdio.service.cmt.JudgeQuestionNaireService#updateJudgeQuestion
	 * (cn.edu.fjnu.cdio.model.cmt.po.JudgeQuestion)
	 */
	public void updateJudgeQuestion(JudgeQuestion judgeQuestion) {
		judgeQuestionNaireDao.updateJudgeQuestion(judgeQuestion);
	}

}
