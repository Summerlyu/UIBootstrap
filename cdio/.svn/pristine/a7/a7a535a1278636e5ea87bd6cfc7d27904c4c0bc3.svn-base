/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package cn.edu.fjnu.cdio.model.common;

import java.sql.Date;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
/*
 * 此类为Message的Json计算与传输性能转换设,其他情况不使用。
 */

public class Message4JsonTransport {
    private long messageId;
    private long fromUserId;
    private String fromUserName;
    private String title;
    private String text;
    private String date;
    
    private Message4JsonTransport() {
    }
    
    public Message4JsonTransport(Message message){
        this.messageId=message.getMessageId();
        this.fromUserId=message.getFromUser().getId();
        this.fromUserName=message.getFromUser().getUserName();
        this.title=message.getTitle();
        this.text=message.getMessageString();
        Date date1 = new Date(message.getCreatedDate().getTimeInMillis());
        this.date= date1.toLocaleString();
    }
}
