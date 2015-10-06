package cn.edu.fjnu.cdio.model.cmt;

import java.io.Serializable;

@SuppressWarnings("serial")
public class JudgeQuestion implements Serializable {
     private Integer ID;
     
     //评价题目内容
     private String content;
     
     //评价题目最后编辑人
     private String lastCompilerID;
     
	 public String getContent() {
		 return content;
	 }
	 public void setContent(String content) {
		 this.content = content;
	 }
	 public Integer getID() {
		 return ID;
	 }
	 public void setID(Integer iD) {
	 	 ID = iD;
	 }
	 public String getLastCompilerID() {
	 	 return lastCompilerID;
	 }
	 public void setLastCompilerID(String lastCompilerID) {
		 this.lastCompilerID = lastCompilerID;
	 }   
}
