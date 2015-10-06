package cn.edu.fjnu.cdio.controller.common;

import cn.edu.fjnu.cdio.exceptions.ApplicationException;
import cn.edu.fjnu.cdio.model.common.Message;
import cn.edu.fjnu.cdio.model.common.User;
import org.springframework.stereotype.Controller;

import cn.edu.fjnu.cdio.service.common.MessageService;
import cn.edu.fjnu.cdio.service.common.UserService;
import com.opensymphony.xwork2.ActionContext;

import com.opensymphony.xwork2.ActionSupport;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.http.HttpServletResponse;
import org.apache.struts2.ServletActionContext;
import org.springframework.beans.factory.annotation.Autowired;

@Controller
public class PmAction extends ActionSupport{
	private MessageService messageService;
        private String messageTitle;
        private String messageText;
        private long messageid;
        private long toUserId;
        private String toUserName;

	public MessageService getMessageService() {
		return messageService;
	}
	
	@Autowired
	public void setMessageService(MessageService messageService) {
		this.messageService = messageService;
	}

	public String ask(){

            PrintWriter out = null;
            HttpServletResponse response = ServletActionContext.getResponse();
            response.setCharacterEncoding("UTF-8");
            try {
                out = response.getWriter();
            } catch (IOException ex) {
                throw new ApplicationException(ex);
            }
            
            try {
                User user = (User) ActionContext.getContext().getSession().get("user");
                String replyJson = getMessageService().messagesToJson(getMessageService().getUserMessages(user));
                if(!("").equals(replyJson)){
                   out.print(replyJson);
                }else{
                   out.print("error");
                }
            } catch (Exception e) {
                out.print("error");
            }finally{
                out.close(); 
            }
            return null;
	}
	
	public String send(){
            PrintWriter out = null;
            HttpServletResponse response = ServletActionContext.getResponse();
            response.setCharacterEncoding("UTF-8");
            try {
                out = response.getWriter();
            } catch (IOException ex) {
                throw new ApplicationException(ex);
            }
            
            try {
                User user = (User) ActionContext.getContext().getSession().get("user");
                User toUser = new User();
                toUser.setId(toUserId);
                Message message = new Message(user, toUser, messageTitle, messageText);
                getMessageService().addMessage(message);
                out.print("okay");
            } catch (Exception e) {
                out.print("error:"+e);
            }finally{
                out.close();
            }
            return null;
        }
        
        public String delete(){
            PrintWriter out = null;
            HttpServletResponse response = ServletActionContext.getResponse();
            response.setCharacterEncoding("UTF-8");
            try {
                out = response.getWriter();
            } catch (IOException ex) {
                throw new ApplicationException(ex);
            }
            
            try {
                Message message=new Message();
                message.setMessageId(messageid);
                getMessageService().delMessage(message);
                out.print("okay");
            } catch (Exception e) {
                out.print("error:"+e);
            }finally{
                out.close();
            }
            return null;
        }
        
        public String checkName(){
            User user = new User();
            PrintWriter out = null;
            HttpServletResponse response = ServletActionContext.getResponse();
            response.setCharacterEncoding("UTF-8");
            try {
                out = response.getWriter();
            } catch (IOException ex) {
                throw new ApplicationException(ex);
            }
            User resultUser = null;
            user.setUserName(toUserName);
            
            try {
                resultUser = getMessageService().getUserByUserName(user);
                if(resultUser==null){
                    out.print("nouser");
                }else{
                    out.print(resultUser.getId());
                }
            } catch (Exception ex) {
                out.print("error");
            }finally{
                out.close();
            }
            
            return null;
        }
        
        public String to(){
            return "TOPAGE";
        }

        public long getToUserId() {
            return toUserId;
        }

        public void setToUserId(long toUserId) {
            this.toUserId = toUserId;
        }

        public String getMessageTitle() {
            return messageTitle;
        }

        public void setMessageTitle(String messageTitle) {
            this.messageTitle = messageTitle;
        }

        public String getMessageText() {
            return messageText;
        }

        public void setMessageText(String messageText) {
            this.messageText = messageText;
        }
        
        public String getToUserName() {
            return toUserName;
        }

        public void setToUserName(String toUserName) {
            this.toUserName = toUserName;
        }

        public long getMessageid() {
            return messageid;
        }

        public void setMessageid(long messageid) {
            this.messageid = messageid;
        }
}
