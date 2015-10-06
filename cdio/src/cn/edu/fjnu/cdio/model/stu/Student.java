package cn.edu.fjnu.cdio.model.stu;

import java.util.HashSet;
import java.util.Set;

import cn.edu.fjnu.cdio.model.common.User;




/**
 * Student entity. @author MyEclipse Persistence Tools
 */

public class Student  implements java.io.Serializable {


    // Fields    

     
	private static final long serialVersionUID = 1L;
	
	private Integer id;  
     private String photoPath="/cdio2010/image/stu/stuPhoto/default.jpg";
     private String realName;
     private String gender="男";
     private Integer age;
     private String address;
     private String school;
     private String grade;
     private String eduBackground;
     private String phone;
     private String email;
     private String qq;
     private String hobbies;
     private String selfIntroduction;
     private Long userId;
	
     private Set experiences = new HashSet(0);
     private Set stumgroperlogs = new HashSet(0);
     private Set topiclibs = new HashSet(0);
    
    // Constructors

    /** default constructor */
    public Student() {
    }

    
    /** full constructor */
    public Student(String photoPath, String realName, String gender, Integer age, String address, String school, String grade, String eduBackground, String phone, String email, String qq, String hobbies, String selfIntroduction, Set experiences, Set freetimes,Set stumgroperlogs,Set topiclibs) {
        this.photoPath = photoPath;
        this.realName = realName;
        this.gender = gender;
        this.age = age;
        this.address = address;
        this.school = school;
        this.grade = grade;
        this.eduBackground = eduBackground;
        this.phone = phone;
        this.email = email;
        this.qq = qq;
        this.hobbies = hobbies;
        this.selfIntroduction = selfIntroduction; 
        this.experiences = experiences;
       
        this.stumgroperlogs=stumgroperlogs;
        this.topiclibs = topiclibs;
       
    }

   
    // Property accessors
   
    public Integer getId() {
        return this.id;
    }
 

	public Long getUserId() {
		return userId;
	}


	public void setUserId(Long userId) {
		this.userId = userId;
	}


	public void setId(Integer id) {
        this.id = id;
    }  

    public String getPhotoPath() {
        return this.photoPath;
    }
    
    public void setPhotoPath(String photoPath) {
        this.photoPath = photoPath;
    }

    public String getRealName() {
        return this.realName;
    }
    
    public void setRealName(String realName) {
        this.realName = realName;
    }

    public String getGender() {
        return this.gender;
    }
    
    public void setGender(String gender) {
        this.gender = gender;
    }

    public Integer getAge() {
        return this.age;
    }
    
    public void setAge(Integer age) {
        this.age = age;
    }

    public String getAddress() {
        return this.address;
    }
    
    public void setAddress(String address) {
        this.address = address;
    }

    public String getSchool() {
        return this.school;
    }
    
    public void setSchool(String school) {
        this.school = school;
    }

    public String getGrade() {
        return this.grade;
    }
    
    public void setGrade(String grade) {
        this.grade = grade;
    }

    public String getEduBackground() {
        return this.eduBackground;
    }
    
    public void setEduBackground(String eduBackground) {
        this.eduBackground = eduBackground;
    }

    public String getPhone() {
        return this.phone;
    }
    
    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return this.email;
    }
    
    public void setEmail(String email) {
        this.email = email;
    }

    public String getQq() {
        return this.qq;
    }
    
    public void setQq(String qq) {
        this.qq = qq;
    }

    public String getHobbies() {
        return this.hobbies;
    }
    
    public void setHobbies(String hobbies) {
        this.hobbies = hobbies;
    }

    public String getSelfIntroduction() {
        return this.selfIntroduction;
    }
    
    public void setSelfIntroduction(String selfIntroduction) {
        this.selfIntroduction = selfIntroduction;
    }

    public Set getExperiences() {
        return this.experiences;
    }
    
    public void setExperiences(Set experiences) {
        this.experiences = experiences;
    }
   
    public Set getStumgroperlogs() {
		return this.stumgroperlogs;
	}

	public void setStumgroperlogs(Set stumgroperlogs) {
		this.stumgroperlogs = stumgroperlogs;
	}

	public Set getTopiclibs() {
		return this.topiclibs;
	}

	public void setTopiclibs(Set topiclibs) {
		this.topiclibs = topiclibs;
	}


	


	






}