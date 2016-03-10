package com.syscom.test.filter;

import java.io.IOException;
import java.util.HashSet;
import java.util.StringTokenizer;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;

public class JspAccessPermissionFilter implements Filter{

	private HashSet<String> allowJspSet = new HashSet<String>();
	
	private String redirectPage;
	
	public void init(FilterConfig config) throws ServletException {
		allowJspSet.clear();
		String allowJspList = config.getInitParameter("allow");
		if (StringUtils.isNotBlank(allowJspList)) {
			StringTokenizer token = new StringTokenizer(allowJspList, ",");
			while (token.hasMoreTokens()) {
				allowJspSet.add(token.nextToken());
			}
		}
		redirectPage = StringUtils.join(config.getServletContext().getContextPath(), config.getInitParameter("redirect"));		
	}

	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
		HttpServletRequest req = (HttpServletRequest) request;
		HttpServletResponse res = (HttpServletResponse) response;
		String path = req.getRequestURI();
		if (req.getSession().getAttribute("isLogin") == null) {
			if (!allowJspSet.contains(path)) {
				redirectToErrorPage(req, res);
				return;
			}
		}
		chain.doFilter(req, res);
	}

	public void destroy() {}
	
	private void redirectToErrorPage(HttpServletRequest request, HttpServletResponse response) throws IOException {
		response.sendRedirect(redirectPage);
	}

}
