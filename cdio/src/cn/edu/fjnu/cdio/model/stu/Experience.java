package cn.edu.fjnu.cdio.model.stu;

import java.util.Date;

import cn.edu.fjnu.cdio.model.common.User;


/**
 * Experience entity. @author MyEclipse Persistence Tools
 */

public class Experience  implements java.io.Serializable {


    // Fields    

     private Integer id;
     private Long userid;
     public Long getUserid() {
		return userid;
	}


	public void setUserid(Long userid) {
		this.userid = userid;
	}

	private Date time;
     private String them;
     private String picture;
     private String content;


    // Constructors

    /** default constructor */
    public Experience() {
    }

    
    /** full constructor */
    public Experience(Student student, Date time, String them,String picture, String content) {
        this.time = time;
        this.them = them;
        this.picture=picture;
        this.content = content;
    }

   
    // Property accessors

    public Integer getId() {
        return this.id;
    }
    
    public void setId(Integer id) {
        this.id = id;
    }


    public Date getTime() {
        return this.time;
    }
    
    public void setTime(Date time) {
        this.time = time;
    }

    public String getThem() {
        return this.them;
    }
    
    public void setThem(String them) {
        this.them = them;
    }

    public String getPicture() {
		return picture;
	}


	public void setPicture(String picture) {
		this.picture = picture;
	}


	public String getContent() {
        return this.content;
    }
    
    public void setContent(String content) {
        this.content = content;
    }
   








}