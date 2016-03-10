package com.syscom.test.rest;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;

public class BaseController {
	
	@Autowired
	private HttpServletRequest request;
	 
    public HttpServletRequest getRequest() {
        return request;
    }
    
    public HttpSession getSession(){
    	return request.getSession();
    }
}
