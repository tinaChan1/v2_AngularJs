package com.syscom.test.dao;

import java.util.List;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

import com.syscom.test.entity.User;

@Repository("userDaoHibernateImpl")
public class UserDaoHibernateImpl implements UserDao{
	@Resource(name="sessionFactory")
	private SessionFactory sessionFactory;
	   	
	@SuppressWarnings("unchecked")
	public List<User> queryUserInfo(User condition) {
		Session session = this.sessionFactory.openSession();
		Criteria criteria = session.createCriteria(User.class);
		if(condition != null){
			 if(condition.getId() != 0){
				 criteria.add(Restrictions.eq("id", condition.getId()));
			 }
			 if(!StringUtils.isBlank(condition.getName())){
				 criteria.add(Restrictions.eq("name", condition.getName()));
			 }
			 if(condition.getAge() != 0){
				 criteria.add(Restrictions.eq("age", condition.getAge()));
			 }			         
		}
	    List<User> userList = criteria.list();
	    session.close();
	    return userList;
	}

	public void insertUser(User user) {
		Session session = sessionFactory.getCurrentSession();
		session.save(user);	
	}

	public void deleteUser(long id) {
		Session session = sessionFactory.getCurrentSession();
		User user = new User();
		user.setId(id);
		session.delete(user);			
	}

	public void updateUser(User user) {
		Session session = sessionFactory.getCurrentSession();
		session.update(user);		
	}
}
