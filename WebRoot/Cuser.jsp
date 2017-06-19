<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"  %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
		<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath }/css/Cmsg.css" />
	<style type="text/css">
		.users-table {
			position: relative;
			top: 25px;
			left: 109px;
			height: 22px;
			margin: 10px 0;
			
		}
		.users-table-text {
			width: 1150px;
			text-align: center;
			background-color: #BBBBBB;
		}
		.users-table b {
				float: left;
				display: block;
				padding: 0 2px;
				width: 90px;
				height: 20px;
				line-height: 20px;
				border: 1px solid black;
				overflow: hidden;
		}
		.users-table .b1 {
			width: 30px;
		}
		.users-table .b4 {
			width: 55px;
		}
		.users-table .b5 {
			width: 168px;
		}
		.users-table .b7 {
			width: 50px;
		}
		.users-table .b8 {
			width: 45px;
		}
		.users-table .b9 {
			width: 150px;
		}
		.users-table .b11 {
			width: 180px;
		}
		.users-table .b12 {
			width: 40px;
		}
		.users-table .b12 a {
			cursor: pointer;
			color: red;
		}
	</style>
</head>
<body>

	<div class="blog w">
		<p class="top w">后台管理系统</p>
		<a href="${pageContext.request.contextPath }/servlet/blogListServlet"><span>博文管理</span></a>
		<a href="${pageContext.request.contextPath }/servlet/msgListServlet"><span>留言管理</span></a> 
		</a> <a href="${pageContext.request.contextPath }/servlet/blogPageServlet"><span>主页</span>
		</a>
	</div>
	
	<div class="users-table users-table-text">
			<b class="b1">id</b>
			<b>username</b>
			<b>password</b>
			<b class="b4">gender</b>
			<b class="b5">email</b>
			<b>telephone</b>
			<b class="b7">role</b>
			<b class="b8">state</b>
			<b class="b9">registTime</b>
			<b>photo_url</b>
			<b class="b11">introduce</b>
			<b class="b12">操作</b>
			
		</div>
	
	<c:forEach items="${users }" var="u">
	
		<div class="users-table ">
			<b class="b1">${u.id }</b>
			<b>${u.username }</b>
			<b>${u.password }</b>
			<b class="b4">${u.gender }</b>
			<b class="b5">${u.email }</b>
			<b>${u.telephone }</b>
			<b class="b7">${u.role }</b>
			<b class="b8">${u.state }</b>
			<b class="b9"><fmt:formatDate value="${u.registTime}" type="both" /></b>
			<b>${u.photo_url }</b>
			<b class="b11">${u.introduce }</b>
			<b class="b12">
				<c:if test="${u.role !='admin'}">
					<c:if test="${u.state =='1'}"><a onclick="issure(${u.id },${u.state })">禁用</a></c:if>
					<c:if test="${u.state =='0'}"><a onclick="issure(${u.id },${u.state })">启用</a></c:if>
				</c:if>
				
			</b>
		</div>
		<%-- 	
		
				<div class="users-table w">
			<table border="1" cellspacing="" cellpadding="">
				<tr>
					<th>id</th>
					<th>username</th>
					<th>password</th>
					<th>gender</th>
					<th>email</th>
					<th>telephone</th>
					<th>role</th>
					<th>state</th>
					<th>registTime</th>
					<th>photo_url</th>
					<th>introduce</th>
					
				</tr>
				<tr>
					<td>${u.id }</td>
					<td>${u.username }</td>
					<td>${u.password }</td>
					<td>${u.gender }</td>
					<td>${u.email }</td>
					<td>${u.telephone }</td>
					<td>${u.role }</td>
					<td>${u.state }</td>
					<td>${u.registTime }</td>
					<td>${u.photo_url }</td>
					<td>${u.introduce }</td>
					<td>Data</td>
					
				</tr>
			</table>
		</div>
		
		
		<div class="allmsg">
			<div class="leavemsg w">
				<span class="s_username"> 
					<img src="${pageContext.request.contextPath }/upload/users_photo/${u.photo_url }"class="touxiang" /> 
					<a class="name"> ${u.id } </a> 
				</span>
				<p class="l_msg" id="msg_${u.id }">
				</p>
				<span class="times"> 
					<fmt:formatDate value="${u.registTime }" type="both"/> 
					
				 </span>
			</div>	 
		</div>
		--%>	
	</c:forEach>
	
</body>
	<script src="${pageContext.request.contextPath }/js/Cuser.js" type="text/javascript" charset="utf-8"></script>
</html>