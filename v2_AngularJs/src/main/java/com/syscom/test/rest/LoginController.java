package com.syscom.test.rest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("main")
public class LoginController extends BaseController{
	
	@RequestMapping(method=RequestMethod.POST)
	public String login(){
		getSession().setAttribute("isLogin", true);
		return "main";
	}
}
