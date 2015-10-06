package cn.edu.fjnu.cdio.service.mat;

import java.util.List;
import java.util.Map;
import cn.edu.fjnu.cdio.model.mat.StuMatchInfo;
import cn.edu.fjnu.cdio.model.mat.vo.MatInfoBean;

/**
 * @author 作者:第五组
 * 
 * @version 创建时间：2013-05-15 下午01:50:49
 * 
 *          功能说明:匹配服务接口
 * 
 * @version 修改时间：2013-05-15
 * 
 *          修改原因：
 */

public interface MatchService {

	StuMatchInfo getByID(Long stuId);

	void add(StuMatchInfo stuMatchInfo);

	List<Long> match(Long userId);

	Map<Long, Map<String, Integer>> matchReturnTag(StuMatchInfo matchInfo);

	Map<Long, Map<String, Integer>> matchDegreeReturnTag(List<Long> infoList,
			String factor, Integer value,
			Map<Long, Map<String, Integer>> matchDegree);

	Map<Long, Integer> matchInfo(StuMatchInfo matchInfo);

	Map<Long, Integer> matchDegree(List<Long> infoList, Integer value,
			Map<Long, Integer> matchDegree);

	Map<Long, Integer> timeMatch(Map<Long, Integer> firstMatch, Long stuId);

	List<MatInfoBean> matchPage(List<Long> matchList, Integer currentPage);

	MatInfoBean getDetail(long courseId);

}
