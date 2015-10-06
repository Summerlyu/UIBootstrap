package cn.edu.fjnu.cdio.utils;


import java.util.ArrayList;
import java.util.List;

/**
 * 方便数组数组和集合之间的操作
 * 
 * @author 子萧
 * @创建时间：2013-3-30
 */
public class ArrayHelp {

	public static List<?> getListFromListaAndNotInListb(List<?> lista,
			List<?> listb) {
		boolean resutl = false;

		if (listb.size() > 0) {
			resutl = lista.removeAll(listb);
			if (resutl) {
				return lista;
			} else {
				return null;
			}
		} else {
			return lista;
		}

	}

	public static List<Integer> nothesame(List<Integer> list) {

		List<Integer> list2 =new ArrayList<Integer>();
		for (int i = 0; i < list.size(); i++) {
			if (!list2.contains(list.get(i))) {
				list2.add(list.get(i));			
				}		
			}		
		for (int i = 0; i < list2.size(); i++)
		{			
			System.out.println(list2.get(i));		
		}	
		
		return list2;
	}

	public static void main(String[] arg) throws Exception {

		List<Integer> la = new ArrayList<Integer>();

		la.add(11);
		la.add(2);
		la.add(11);
		la.add(3);
		la.add(4);
		la.add(3);
		la.add(31);
		la.add(4);
		la.add(31);
		nothesame(la);

	}

}
