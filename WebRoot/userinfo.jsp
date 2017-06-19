<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
	<link rel="stylesheet" type="text/css" href="css/jquery-ui.min.css" />
	<link rel="stylesheet" type="text/css" href="css/userinfo.css" />
	
	<style type="text/css">
			
		</style>
<body>
	
	<%@include file="/head.jsp" %>
	
	<div class="personage w">
			<div class="per-head">
				<h1 class="fl f-h1">个人中心</h1>
				<a href="${pageContext.request.contextPath }/servlet/blogPageServlet" class="fr ">返回首页</a>
			</div>
			<div class="per-foot">
				<div class="f-left fl"> 
					<ul>
						<li class="li1"><i class="i1 fl"></i><a class="a1">我的资料</a></li>
						<li class="li2"><i class="i2 fl"></i><a class="a2">站内信息</a></li>
					</ul>
				</div>
				<div class="f-right fl">
					<div id="" class="">
						<i class="h2-i fl"></i><h2 class="f-h2" style="background-color: #F1F1F1;">我的资料</h2><i class="h2-change fl" id="alter_info"></i>
						<div class="info-main">
							<div class="info-img fl">
								<img class="fl" id="user_icon" src="${pageContext.request.contextPath }/upload/users_photo/${u.photo_url}"/>
								<div class="user-icon-x"></div>
								<span id="change_pass" class="change-pass"><i class="pass-icon fl"></i>密码</span>
							</div>
							<div id="" class="info-text fl">
								<ul>
									<li><span id="" class="fl">昵称：</span><p class="fl">${u.username }</p></li>
									<li><span id="" class="fl">性别：</span><p class="fl">
								 <c:if test="${u.gender =='1'}">男</c:if><c:if test="${u.gender =='0'}">女</c:if></p></li>
									<li><span id="" class="fl">电话：</span><p class="fl">${u.telephone }</p></li>
									<li><span id="" class="fl">邮箱：</span><p class="fl">${u.email }</p></li>
									<li><span id="" class="fl">简介：</span><p class="fl">${u.introduce }</p></li>
									
								</ul>
								
								
								
							</div>
							
						</div>
					</div>
					
				</div>
			</div>
		</div>
		
		<!--info---------------------------------------------info--------------    -->
		
		<div id="info_form" title="修改">
			<p class="validateTips"></p>

			<form id="changeinfo_form" action="${pageContext.request.contextPath}/servlet/alterInfoById "
			method="post">
				<fieldset>
					<input type="text" name="username" id="change_name" 
						placeholder="${u.username }" class="text ui-widget-content ui-corner-all"> 
					<input type="text" name="gender" id="change_gender" 
						placeholder="<c:if test="${u.gender =='1'}">男</c:if><c:if test="${u.gender =='0'}">女</c:if>" class="text ui-widget-content ui-corner-all">
					<input type="text" name="telephone" id="change_telephone" 
						placeholder="<c:if test="${u.telephone =='空'}">电话</c:if><c:if test="${u.telephone !='空'}">${u.telephone}</c:if>" class="text ui-widget-content ui-corner-all">
					<input type="text" name="introduce" id="change_introduce" 
						placeholder="${u.introduce }" class="text ui-widget-content ui-corner-all">
					<input type="text" name="id" value="${u.id }" id="pass_id"> 
				
				</fieldset>
			</form>
		</div>
		
		<!--exinfo---------------------------------------------exinfo--------------    -->
		
		<div id="exinfo_form">
			<form>
				<fieldset>
					<input type="text" value="${u.id }" id="ex_id"> 
					<input type="text" value="${u.photo_url }" id="ex_photo_url"> 
					<input type="text" value="${u.username }" id="ex_name"> 
					<input type="text" value="${u.gender }" id="ex_gender">
					<input type="text" value="${u.telephone }" id="ex_telephone">
					<input type="text" value="${u.introduce }" id="ex_introduce">
				</fieldset>
			</form>
		</div>
		
		<!-----------------------------------------------password--------------    -->
		
		<div id="password_form" title="修改密码">
			<p class="validateTips"></p>
			<!--<a href="#" id="re_rei">rei</a>-->

			<form id="pass_form" action="${pageContext.request.contextPath}/servlet/alterPasswordById "
			method="post">
				<fieldset>
					<input type="password" name="" id="change_expassword" 
						placeholder="原密码" class="text ui-widget-content ui-corner-all">
					<input type="password" name="password" id="change_password" 
						placeholder="输入密码" class="text ui-widget-content ui-corner-all">
					<input type="password" name="" id="change_repassword" 
						placeholder="确认密码" class="text ui-widget-content ui-corner-all">  
					<input type="text" name="id" value="${u.id }" id="pass_id"> 
				</fieldset>
			</form>
		</div>
		
		<!-----------------------------------------------usericon--------------    -->
		
		<div id="usericon_form" title="修改头像">
			<p class="validateTips"></p>

			<form id="changeusericon_form" action="${pageContext.request.contextPath}/servlet/alterUserIconById"
			enctype="multipart/form-data" method="post">
				<fieldset>
					<input type="file" name="photo_url" id="user_icon_file">
					<input type="text" name="id" value="${u.id }" id="pass_id"> 
				</fieldset>
			</form>
		</div>
		
	<%@include file="/foot.jsp" %>
</body>
	<script src="js/jquery-1.11.0.min.js" type="text/javascript"charset="utf-8"></script>
	<script src="js/jquery-ui.min.js" type="text/javascript" charset="utf-8"></script>
	<script src="js/base.js" type="text/javascript" charset="utf-8"></script>
	<script src="js/userinfo.js" type="text/javascript" charset="utf-8"></script>
</html>