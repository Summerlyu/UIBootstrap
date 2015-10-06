/**
 * 
 */
package cn.edu.fjnu.cdio.model.trs;

/**
 * @author 曹欣炎
 *
 * 简介:
 *
 * 创建时间:
 * @version 2013-5-13 下午7:48:37
 */
public class CourseSchema {
	
	private Long schemaID;
	private String schemaName;
	private String schemaDetail;
	
	public Long getSchemaID() {
		return schemaID;
	}
	public void setSchemaID(Long schemaID) {
		this.schemaID = schemaID;
	}
	public String getSchemaName() {
		return schemaName;
	}
	public void setSchemaName(String schemaName) {
		this.schemaName = schemaName;
	}
	public String getSchemaDetail() {
		return schemaDetail;
	}
	public void setSchemaDetail(String schemaDetail) {
		this.schemaDetail = schemaDetail;
	}
	
}
