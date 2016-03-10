package com.syscom.test.filter;

import java.io.BufferedReader;
import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class JspRequestCheckerFilter implements Filter{

	public void init(FilterConfig config) throws ServletException {
		// TODO Auto-generated method stub
		
	}
	
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
		//System.out.println("in request checker");
		
		HttpServletRequest req = (HttpServletRequest) request;
		HttpServletResponse res = (HttpServletResponse) response;

		ResettableStreamHttpServletRequest  requestWrapper = new ResettableStreamHttpServletRequest(req); 		
		BufferedReader reader = requestWrapper.getReader();		
		String reqStr = null;

		while ((reqStr = reader.readLine()) != null) {
			 break;
		}
//		if(reqStr != null){
//			System.out.println("request data:"+reqStr);
//		}else{
//			System.out.println("no request data");
//		}
		
		reader.close();
		
		//再將原始資料塞入一次
		requestWrapper.resetInputStream();
		
		chain.doFilter(requestWrapper, res);
		
	}

	public void destroy() {}

}
