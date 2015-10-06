/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package cn.edu.fjnu.cdio.service.common;

import java.util.ArrayList;

import java.util.Arrays;
import java.util.List;
import java.util.Set;

import cn.edu.fjnu.cdio.dao.common.MessageDao;
import cn.edu.fjnu.cdio.model.common.Message;
import cn.edu.fjnu.cdio.model.common.Message4JsonTransport;
import cn.edu.fjnu.cdio.model.common.User;
import cn.edu.fjnu.cdio.utils.JsonUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * 私信服务
 * @author 蒋子良
 */

@Transactional
@Service(value="messageService")
public class MessageServiceImpl implements MessageService{
    private MessageDao messageDao;
      
    @Autowired
    public void setMessageDao(MessageDao messageDao) {
        this.messageDao = messageDao;
    } 
    
    public MessageDao getMessageDao() {
        return messageDao;
    }

    @Override
    public String messagesToJson(Message[] messages) {
	      List<Message4JsonTransport> list=new ArrayList<Message4JsonTransport>();
	      for (int i = 0; i < messages.length; i++) {
	    	  Message4JsonTransport m4Json = new Message4JsonTransport(messages[i]);
	    	  list.add(m4Json);
	      }
	      return JsonUtil.toJson(list);
    }

    @Override
    public void addMessage(Message message) {
    	messageDao.addMessage(message);
    }

    @Override
    public void delMessage(Message message) {
        messageDao.delMessage(message);
    }

    @Override
    public Message[] getUserMessages(User user) {
       Set<Message> messagesSet=messageDao.getUserMessages(user);
       Message[] messages=new Message[messagesSet.size()];
       messagesSet.toArray(messages);
       return messages;
    }

    @Override
    public User getUserByUserName(User user) {
        return messageDao.getUserByUserName(user);
    }
}
