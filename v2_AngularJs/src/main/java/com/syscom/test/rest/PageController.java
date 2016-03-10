package com.syscom.test.rest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("page")
public class PageController extends BaseController{
	
	@RequestMapping(value="/{viewName}")
	public String getPage(@PathVariable String viewName){
		return viewName;
	}
}
