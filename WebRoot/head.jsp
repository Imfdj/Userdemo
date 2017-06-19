<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<link rel="shortcut icon" href="icon.ico" />
<link rel="stylesheet" type="text/css" href="/userdemo/css/jquery-ui.min.css" />
<link rel="stylesheet" type="text/css" href="/userdemo/css/base.css" />
<link rel="stylesheet" type="text/css" href="/userdemo/css/index.css" />

<style type="text/css">


</style>
</head>
<body>
	<!--回到顶部-->
	<div id="-gotop" class="_gotop">
		<img src="/userdemo/img/Top.jpg" alt="" />
	</div>
	<div class="head " id="head">
		<div class="w">
			<div class="fl">
				<a href="/userdemo/servlet/blogPageServlet">
					<img src="/userdemo/img/logo.jpg" />
				</a>
			</div>
			
			<div class="fl head_right" id="head-right">
				<ul>
					<li>
						<a href="/userdemo/servlet/blogPageServlet" class="nav1">首 页</a>
						<span id="" class="nav1-span">Portal</span>
					</li>
					<li>
						<a href="/userdemo/servlet/adminUserInfoServlet" class="nav2">关于我</a>
						<span id="" class="nav2-span">About</span>
					</li>
					<li>
						<a href="/userdemo/servlet/messagePageServlet" class="nav3">留言板</a>
						<span id="" class="nav3-span">Doing</span>
					</li>
				</ul>
				<%-- <span id="biao" class="biao"></span> --%>
			</div>
			
			<c:if test="${empty u }">
				<div class="o-unlogin fr">
					<span class="icofont u-ico fl"></span> <a class="u-login fl"
						id="_login">登录</a> <em class="fl">|</em> <a class="u-reg fr"
						id="_register">注册</a>
				</div>
			</c:if>
			<%--登录后部件
			<c:if test="${not empty u }">
				<div class="loginafter fr">
					<div class="username-log">${u.username}</div>
					<div class="slide">
						<div class="logout">
							<a
								href="${pageContext.request.contextPath }/servlet/loginOutServlet">注消</a>
						</div>
						<c:if test="${u.role == 'admin' }">
							<div class="manage">
								<a
									href="${pageContext.request.contextPath }/servlet/blogListServlet">后台</a>
							</div>
						</c:if>
					</div>


				</div>
			</c:if>   --%>
	
			<c:if test="${not empty u }">
			<div class="o-onlogin fl">
					<div class="tanchuangon">
						<span class="icofont u-ico fl"><img src="${pageContext.request.contextPath }/upload/users_photo/${u.photo_url}" class="onpho" class="smallpho"/></span>
					<a class="onusername fl">${u.username}</a>
					<span id="" class="triangle"></span>
					</div>
					<div class="tanchuang">
						<div class="tan-t fl">
							<div class="quan fl">
								<a href="${pageContext.request.contextPath }/userinfo.jsp"><img src="${pageContext.request.contextPath }/upload/users_photo/${u.photo_url}"/></a>
							</div>
							<span id="" class="name">${u.username}</span>
						</div>
						<div class="tan-b fl">
							<span id="" class="logout" id="d_logout">登出</span>
							<c:if test="${u.role == 'admin' }">
							<span id="" class="adminon"id="_adminon">后台</span>
							</c:if>
							<p class="introduction">${u.introduce}</p>
						</div>
					</div>
				</div>
			</c:if> 

		</div>

	</div>
	<%--登录组件 --%>
	<div id="_mask" class="-mask"></div>
	<div class="loginele" id="_loginle">
		<form
			action="${pageContext.request.contextPath}/servlet/loginservlet "
			method="post">
			用户名：<input type="text" name="username" id="log_username" /><br />
			&nbsp;密码：<input type="password" name="password" id="log_password" /><br />
			<div class="logbut">
				<input type="submit" value="登录" id="_logining" />&nbsp;&nbsp; <input
					type="button" value="取消" id="_cancel" /><br />
			</div>
		</form>
	</div>
	<%--注册控件--------------------------------------------------------------------------- --%>
	<div id="register-form" title="注册" class="dialog-init">
		<p class="change">
			已有帐号？<a href="#" id="change_log">马上登录></a>
		</p>
		<p class="validateTips"></p>


		<form id="re_form"
			action="${pageContext.request.contextPath }/servlet/regiservlet"
			method="post">
			<fieldset>
				<input type="text" name="username" id="name" placeholder="输入昵称"
					class="text ui-widget-content ui-corner-all"> <input
					type="password" name="password" id="password" placeholder="输入密码"
					class="text ui-widget-content ui-corner-all"> <input
					type="password" name="password" id="repassword" placeholder="确认密码"
					value="" class="text ui-widget-content ui-corner-all"> <input
					type="text" name="email" id="email" placeholder="输入邮箱"
					class="text ui-widget-content ui-corner-all">

			</fieldset>
		</form>
	</div>
	
	<%--登录控件--------------------------------------------------------------------- --%>
		
		<div id="login_form" title="登录" class="dialog-init">
			<p class="change" >
			没有帐号？<a href="#" id="change_rei">马上注册></a>
			</p>
			<p class="validateTips"></p>
			<!--<a href="#" id="re_rei">rei</a>-->

			<form id="log_form" action="${pageContext.request.contextPath}/servlet/loginservlet "
			method="post">
				<fieldset>
					<input type="text" name="username" id="log_name" 
						placeholder="输入昵称" class="text ui-widget-content ui-corner-all"> 
					<input type="password" name="password" id="log_pass" 
						placeholder="输入密码" class="text ui-widget-content ui-corner-all"> 
				
				</fieldset>
			</form>
		</div>
		

</body>
<script src="/userdemo/js/jquery-1.11.0.min.js" type="text/javascript"
	charset="utf-8"></script>
<script src="/userdemo/js/jquery-ui.min.js" type="text/javascript" charset="utf-8"></script>
<script src="/userdemo/js/base.js" type="text/javascript" charset="utf-8"></script>
<script src="/userdemo/js/gotop.js" type="text/javascript" charset="utf-8"></script>
</html>