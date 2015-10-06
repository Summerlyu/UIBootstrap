package cn.edu.fjnu.cdio.model.common;

import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import org.hibernate.search.annotations.Field;
import org.hibernate.search.annotations.Index;
import org.hibernate.search.annotations.Store;


import cn.edu.fjnu.cdio.model.bgm.Role;
import cn.edu.fjnu.cdio.model.pym.ApplyTable;
import cn.edu.fjnu.cdio.model.pym.Donation;
import cn.edu.fjnu.cdio.model.pym.ReceiveGrant;
import cn.edu.fjnu.cdio.model.pym.Sc;
import cn.edu.fjnu.cdio.model.pym.TradeRecord;
import cn.edu.fjnu.cdio.model.res.PerUpload;
import cn.edu.fjnu.cdio.model.test.ErrQueBook;
import cn.edu.fjnu.cdio.model.test.StuDoubt;
import cn.edu.fjnu.cdio.model.test.TestMain;
import cn.edu.fjnu.cdio.model.coa.Course;

/**
 * User整合
 * 
 * @version 2013-5-22
 * 
 */

@SuppressWarnings("serial")
public class User implements Serializable {

	@Field(index=Index.TOKENIZED, store=Store.YES)
	private String name;//真实姓名(真实姓名可以重复，用户名不可以重复)
	
	//----------------------------bgm----------------------------
	private long id;
	
	private String userName; // 用户名
	private String password; // 密码
	private byte[] picture; // 头像图片
	private String sex; // 性别
	private String address; // 地址
	private String school; // 学校
	private Integer age; // 年龄
	private String grade; // 年级
	private String eduBackground;// 教育背景
	private String phone; // 电话
	private String email; // 邮箱
	private String qqNum; // QQ
	private String hobbies; // 爱好
	private String selfIntroduction;// 个人说明
	private String nativePlace;// 籍贯
	private String nation; // 国家
	private String politicsStatus;// 政治面貌
	private String job; // 工作
	private String workPlace; // 工作地点
	private String comment; // 评价
	private Set<Role> roles;//角色
	
	public User(long id) {
		this.id = id;
	}
/**
 * user构造函数（学员添加）
 */
	public User(long id,String userName,String grade,String password,String email) {
		this.id=id;
		this.userName=userName;
		this.grade=grade;
		this.password=password;
		this.email=email;
	}
	public User(){
		
	}
	//----------------------------pym----------------------------
	private Double ep=0.0;  // 教育点数
	private Set<TradeRecord> tradeRecords=new HashSet<TradeRecord>();  //充值等信息的记录表	
	private Set<ApplyTable> applyTables=new HashSet<ApplyTable>();   //资助申请表	
	private Set<Donation> donations=new HashSet<Donation>();    //祝福表
	private Set<ReceiveGrant> receiveGrants=new HashSet<ReceiveGrant>();   //感谢表
	private Set<Sc> scs=new HashSet<Sc>();   //购物表
	

	//----------------------------test----------------------------
	private Set<TestMain> testMains = new HashSet<TestMain>();	//学生的测试
	private Set<ErrQueBook> ErrQueBooks = new HashSet<ErrQueBook>();//学生的错题本
	private Set<StuDoubt> stuDoubts = new HashSet<StuDoubt>();//学生的疑问
	
	
	//----------------------------trs----------------------------
	private Set<Course> courses=new HashSet<Course>();
	
	
	//----------------------------grp----------------------------
	private int userFans=0;
	private int userFollows=0;
	
	//----------------------------res----------------------------
	private Set<PerUpload> perUploads=new HashSet<PerUpload>();
	

	//--------------------------coa------------------------
	private String level;
	private Date birth;
	private String ctrain_num;//培训证号
	private byte[]  coa_license;//教师证照
	private String IDcard;//身份证号
	private Date   deadline;//身份证到期时间
	private byte[] IDcPic;//身份证照
	private Date  sub_real_date;//提交实名认证时间
	private Date  sub_cer_date;//提交资格认证时间
	private int isverify_R=0;  //实名认证审核状态,1表示审核通过，0表示审核不通过
	private int isverify_C=0;  //资格认证审核状态,1表示审核通过，0表示审核不通过
	
	

	//-------------------------pm-----------------------------
	private Set<Message> messageSet;


	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public byte[] getPicture() {
		return picture;
	}

	public void setPicture(byte[] picture) {
		this.picture = picture;
	}

	public String getSex() {
		return sex;
	}

	public void setSex(String sex) {
		this.sex = sex;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getSchool() {
		return school;
	}

	public void setSchool(String school) {
		this.school = school;
	}

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	public String getGrade() {
		return grade;
	}

	public void setGrade(String grade) {
		this.grade = grade;
	}

	public String getEduBackground() {
		return eduBackground;
	}

	public void setEduBackground(String eduBackground) {
		this.eduBackground = eduBackground;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getQqNum() {
		return qqNum;
	}

	public void setQqNum(String qqNum) {
		this.qqNum = qqNum;
	}

	public String getHobbies() {
		return hobbies;
	}

	public void setHobbies(String hobbies) {
		this.hobbies = hobbies;
	}

	public String getSelfIntroduction() {
		return selfIntroduction;
	}

	public void setSelfIntroduction(String selfIntroduction) {
		this.selfIntroduction = selfIntroduction;
	}

	public String getNativePlace() {
		return nativePlace;
	}

	public void setNativePlace(String nativePlace) {
		this.nativePlace = nativePlace;
	}

	public String getNation() {
		return nation;
	}

	public void setNation(String nation) {
		this.nation = nation;
	}

	public String getPoliticsStatus() {
		return politicsStatus;
	}

	public void setPoliticsStatus(String politicsStatus) {
		this.politicsStatus = politicsStatus;
	}

	public String getJob() {
		return job;
	}

	public void setJob(String job) {
		this.job = job;
	}

	public String getWorkPlace() {
		return workPlace;
	}

	public void setWorkPlace(String workPlace) {
		this.workPlace = workPlace;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public Set<Role> getRoles() {
		return roles;
	}

	public void setRoles(Set<Role> roles) {
		this.roles = roles;
	}

	public Double getEp() {
		return ep;
	}

	public void setEp(Double ep) {
		this.ep = ep;
	}

	public Set<TradeRecord> getTradeRecords() {
		return tradeRecords;
	}

	public void setTradeRecords(Set<TradeRecord> tradeRecords) {
		this.tradeRecords = tradeRecords;
	}

	public Set<ApplyTable> getApplyTables() {
		return applyTables;
	}

	public void setApplyTables(Set<ApplyTable> applyTables) {
		this.applyTables = applyTables;
	}

	public Set<Donation> getDonations() {
		return donations;
	}

	public void setDonations(Set<Donation> donations) {
		this.donations = donations;
	}

	public Set<ReceiveGrant> getReceiveGrants() {
		return receiveGrants;
	}

	public void setReceiveGrants(Set<ReceiveGrant> receiveGrants) {
		this.receiveGrants = receiveGrants;
	}

	public Set<Sc> getScs() {
		return scs;
	}

	public void setScs(Set<Sc> scs) {
		this.scs = scs;
	}

	public Set<TestMain> getTestMains() {
		return testMains;
	}

	public void setTestMains(Set<TestMain> testMains) {
		this.testMains = testMains;
	}

	public Set<ErrQueBook> getErrQueBooks() {
		return ErrQueBooks;
	}

	public void setErrQueBooks(Set<ErrQueBook> errQueBooks) {
		ErrQueBooks = errQueBooks;
	}

	public Set<StuDoubt> getStuDoubts() {
		return stuDoubts;
	}

	public void setStuDoubts(Set<StuDoubt> stuDoubts) {
		this.stuDoubts = stuDoubts;
	}

	public Set<Course> getCourses() {
		return courses;
	}

	public void setCourses(Set<Course> courses) {
		this.courses = courses;
	}

	public int getUserFans() {
		return userFans;
	}

	public void setUserFans(int userFans) {
		this.userFans = userFans;
	}

	public int getUserFollows() {
		return userFollows;
	}

	public void setUserFollows(int userFollows) {
		this.userFollows = userFollows;
	}
	public Set<PerUpload> getPerUploads() {
		return perUploads;
	}
	public void setPerUploads(Set<PerUpload> perUploads) {
		this.perUploads = perUploads;
	}

	public String getLevel() {
		return level;
	}

	public void setLevel(String level) {
		this.level = level;
	}

	public Date getBirth() {
		return birth;
	}

	public void setBirth(Date birth) {
		this.birth = birth;
	}

	public String getCtrain_num() {
		return ctrain_num;
	}

	public void setCtrain_num(String ctrain_num) {
		this.ctrain_num = ctrain_num;
	}

	public byte[] getCoa_license() {
		return coa_license;
	}

	public void setCoa_license(byte[] coa_license) {
		this.coa_license = coa_license;
	}

	public String getIDcard() {
		return IDcard;
	}

	public void setIDcard(String iDcard) {
		IDcard = iDcard;
	}

	public Date getDeadline() {
		return deadline;
	}

	public void setDeadline(Date deadline) {
		this.deadline = deadline;
	}

	public byte[] getIDcPic() {
		return IDcPic;
	}

	public void setIDcPic(byte[] iDcPic) {
		IDcPic = iDcPic;
	}



	public void setSub_real_date(Date sub_real_date) {
		this.sub_real_date = sub_real_date;
	}

	public Date getSub_real_date() {
		return sub_real_date;
	}

	public void setSub_cer_date(Date sub_cer_date) {
		this.sub_cer_date = sub_cer_date;
	}

	public Date getSub_cer_date() {
		return sub_cer_date;
	}


	public void setIsverify_R(int isverify_R) {
		this.isverify_R = isverify_R;
	}
	public int getIsverify_R() {
		return isverify_R;
	}
	public void setIsverify_C(int isverify_C) {
		this.isverify_C = isverify_C;
	}
	public int getIsverify_C() {
		return isverify_C;
	}
	public Set<Message> getMessageSet() {
		return messageSet;
	}

	public void setMessageSet(Set<Message> messageSet) {
		this.messageSet = messageSet;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", userName=" + userName + ", password="
				+ password + "]";
	}
	
}
