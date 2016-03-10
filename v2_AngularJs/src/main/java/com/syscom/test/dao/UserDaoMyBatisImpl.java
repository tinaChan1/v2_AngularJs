package com.syscom.test.dao;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;

import com.syscom.test.entity.User;

@Repository("userDaoMyBatisImpl")
public class UserDaoMyBatisImpl implements UserDao{

	@Resource(name="userInfoDao")
	UserDao userDao;
	public List<User> queryUserInfo(User condition) {
		return userDao.queryUserInfo(condition);
	}

	public void insertUser(User user) {
		userDao.insertUser(user);		
	}

	public void deleteUser(long id) {
		userDao.deleteUser(id);		
	}

	public void updateUser(User user) {
		userDao.updateUser(user);		
	}
}
