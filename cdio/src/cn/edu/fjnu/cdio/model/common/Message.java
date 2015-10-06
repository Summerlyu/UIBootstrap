/*
    Document   : Message.java
    Created on : 2013-4-25, 15:16:37
    Author     : 蒋子良
*/
package cn.edu.fjnu.cdio.model.common;

import java.util.Calendar;

/*
 * 私信实体类
 * @author 蒋子良
 */
public class Message implements java.io.Serializable {
    private long messageId;
    private User fromUser;
    private User toUser;
    private String title;
    private String messageString;
    private Calendar createdDate;
    
    public Message() {
    }

    public Message(User fromUser, User toUser, String title, String messageString) {
        this.fromUser = fromUser;
        this.toUser = toUser;
        this.title = title;
        this.messageString = messageString;
        this.createdDate = Calendar.getInstance();
    }
    
    public User getFromUser() {
        return fromUser;
    }

    public void setFromUser(User fromUser) {
        this.fromUser = fromUser;
    }

    public User getToUser() {
        return toUser;
    }

    public void setToUser(User toUser) {
        this.toUser = toUser;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getMessageString() {
        return messageString;
    }

    public void setMessageString(String messageString) {
        this.messageString = messageString;
    }

    public Calendar getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Calendar createdDate) {
        this.createdDate = createdDate;
    }

    public long getMessageId() {
        return messageId;
    }

    public void setMessageId(long messageId) {
        this.messageId = messageId;
    }
}
