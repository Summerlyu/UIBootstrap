package cn.edu.fjnu.cdio.utils;

import java.util.List;

public class Page<T> {
	private int index;//当前页码
	private int pageSize;//每页大小
	private int totalRecord;//总记录数
	private int totalPage;//总页数
    private boolean hasNextPage;//是否有后一页
    private boolean hasPreviousPage;//是否有前一页
	List<T> results;//查询结果
	public Page(int index, int maxSize, int totalRecord, int totalPage,
			List<T> results) {
		super();
		this.index = index;
		this.pageSize = maxSize;
		this.totalRecord = totalRecord;
		this.totalPage = totalPage;
		this.results = results;
		if(this.index<2){
			hasPreviousPage=false;
		}else{
			hasPreviousPage=true;
		}
		if(this.index<totalPage){
			hasNextPage = true;
		}else{
			hasNextPage = false;
		}
	}
	public void setHasPreviousAndNext(){
		if(this.index<2){
			hasPreviousPage=false;
		}else{
			hasPreviousPage=true;
		}
		if(this.index<totalPage){
			hasNextPage = true;
		}else{
			hasNextPage = false;
		}
	}
	
	public Page() {
		super();
	}
	public int getIndex() {
		return index;
	}
	public void setIndex(int index) {
		this.index = index;
	}
	public int getPageSize() {
		return pageSize;
	}
	public void setPageSize(int maxSize) {
		this.pageSize = maxSize;
	}
	public int getTotalRecord() {
		return totalRecord;
	}
	public void setTotalRecord(int totalRecord) {
		this.totalRecord = totalRecord;
	}
	public int getTotalPage() {
		return totalPage;
	}
	public void setTotalPage(int totalPage) {
		this.totalPage = totalPage;
	}
	public List<T> getResults() {
		return results;
	}
	public void setResults(List<T> results) {
		this.results = results;
	}
	
	
	public boolean isHasNextPage() {
		return hasNextPage;
	}
	public void setHasNextPage(boolean hasNextPage) {
		this.hasNextPage = hasNextPage;
	}
	public boolean isHasPreviousPage() {
		return hasPreviousPage;
	}
	public void setHasPreviousPage(boolean hasPreviousPage) {
		this.hasPreviousPage = hasPreviousPage;
	}
	public int countTotalPage(){
		int total = totalRecord % pageSize == 0 ? totalRecord/pageSize : totalRecord/pageSize+1;
		this.setTotalPage(total);
	    return total;
	}
	
}
