package cn.edu.fjnu.cdio.service.common;

import cn.edu.fjnu.cdio.model.common.Message;
import cn.edu.fjnu.cdio.model.common.User;

/*
 * 私信服务接口
 * @author 蒋子良
 * */

public interface MessageService {
    Message[] getUserMessages(User user);  
    String messagesToJson(Message[] messages);
    void addMessage(Message message);
    void delMessage(Message message);
    User getUserByUserName(User user);
}
