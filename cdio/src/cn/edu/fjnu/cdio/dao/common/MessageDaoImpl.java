/*
    Document   : MessageDaoImpl.java
    Created on : 2013-4-26, 15:32:37
    Author     : 蒋子良
*/
package cn.edu.fjnu.cdio.dao.common;

import java.util.Set;


import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate3.HibernateCallback;
import antlr.collections.List;

import cn.edu.fjnu.cdio.model.common.Message;
import cn.edu.fjnu.cdio.model.common.User;
import java.util.HashMap;
import java.util.Map;
import org.springframework.stereotype.Repository;


@Repository(value="messageDao")
public class MessageDaoImpl implements MessageDao{
	private GenericDao genericDao;
	public GenericDao getGenericDao() {
		return genericDao;
	}

	@Autowired
	public void setGenericDao(GenericDao genericDao) {
		this.genericDao = genericDao;
	}

    @Override
    public Set<Message> getUserMessages(User user) {
    	user = genericDao.getHibernateTemplate().get(User.class, user.getId());
    	return user.getMessageSet(); 
    }

    @Override
    public void addMessage(Message message) {
        genericDao.save(message);
    }

    @Override
    public void delMessage(Message message) {
        genericDao.delete(message);
    }

    @Override
    public User getUserByUserName(User user) {
        String HQLString="from User as u where u.userName=:username";
        Map<String, Object> params = new HashMap<String, Object>();
	params.put("username", user.getUserName());   
        return genericDao.queryOneByHQL(HQLString, params);
    }
}
