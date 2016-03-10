package com.syscom.test.rest;

import java.util.List;

import javax.annotation.Resource;

import org.hibernate.SessionFactory;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.syscom.test.entity.User;
import com.syscom.test.service.RestService;
import com.syscom.test.vo.Result;

@Controller
@RequestMapping("user")
public class RestController extends BaseController{
	@Resource(name="restService")
	private RestService restService;
	
	@Resource(name="sessionFactory")
	private SessionFactory sessionFactory;
	
	@RequestMapping(method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public Result getAllUsers() throws IllegalAccessException{
		System.out.println("in getAllUsers!!!");
		List<User> userList = restService.getUsers(null);
		Result result = new Result();
		result.setResult("查詢成功");
		result.setData(userList);
		return result;
	}
	
	@RequestMapping(value="/find", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public Result getUser(@RequestBody User user){
		System.out.println("in getUser!!! user id is\t"+user.getId()+"\t"+user.getName());
		List<User> userList = restService.getUsers(user);
		Result result = new Result();
		result.setResult("查詢成功");
		result.setData(userList);
		return result;
	}
	
	@RequestMapping(method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public Result saveUser(@RequestBody User user){
		System.out.println("新增使用者:\t"+user.toString());
		restService.saveUser(user);
		Result result = new Result();
		result.setResult("新增成功");		
		return result;
	}
	
	@RequestMapping(value="/{id}", method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public Result deleteUser(@PathVariable String id){
		System.out.println("刪除使用者:\t"+id);
		restService.deleteUser(Long.valueOf(id));
		Result result = new Result();
		result.setResult("刪除成功");		
		return result;
	}
	
	@RequestMapping(method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public Result updateUsser(@RequestBody User user){
		System.out.println("更新使用者:\t"+user.toString());
		restService.updateUser(user);
		Result result = new Result();
		result.setResult("更新成功");		
		return result;
	}
}
