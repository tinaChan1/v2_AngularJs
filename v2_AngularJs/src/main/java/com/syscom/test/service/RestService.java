package com.syscom.test.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.syscom.test.dao.UserDao;
import com.syscom.test.entity.User;

@Service("restService")
public class RestService {
	
	@Resource(name="userDaoMyBatisImpl")
	private UserDao userDao;
			
	public List<User> getUsers(User condition){
		return userDao.queryUserInfo(condition);
	}
	
	public void saveUser(User user){		
		userDao.insertUser(user);
	}

	public void deleteUser(long id){		
		userDao.deleteUser(id);
	}
	
	public void updateUser(User user){
		userDao.updateUser(user);
	}
}
