package cn.edu.fjnu.cdio.dao.util;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;


/**
 * @author 作者:第五组
 * 
 * @version 创建时间：2013-05-15 下午01:50:49
 * 
 *          功能说明:匹配结果排序
 * 
 * @version 修改时间：2013-05-15
 * 
 *          修改原因：
 */
public class MDAlgorithm {
	public static final List<Long> MD(Map<Long, Integer> unSorted) {
		List<Map.Entry<Long, Integer>> mappingList = null;
		// 通过ArrayList构造函数把map.entrySet()转换成list
		List<Long> sortedResult = new LinkedList<Long>();
		mappingList = new ArrayList<Map.Entry<Long, Integer>>(
				unSorted.entrySet());
		// 通过比较器实现比较排序
		Collections.sort(mappingList,
				new Comparator<Map.Entry<Long, Integer>>() {

					@Override
					public int compare(Entry<Long, Integer> o1,
							Entry<Long, Integer> o2) {

						return o2.getValue().compareTo(o1.getValue());
					}
				});
		for (Entry<Long, Integer> entry : mappingList) {
			sortedResult.add(entry.getKey());
		}
		return sortedResult;
	}
}
