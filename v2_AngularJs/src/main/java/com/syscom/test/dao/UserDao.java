package com.syscom.test.dao;

import java.util.List;
import com.syscom.test.entity.User;


public interface UserDao {
	public List<User> queryUserInfo(User condition);
	public void insertUser(User user);
	public void deleteUser(long id);
	public void updateUser(User user);
}
