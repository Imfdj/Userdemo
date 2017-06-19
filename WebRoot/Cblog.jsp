<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" type="text/css"
	href="${pageContext.request.contextPath }/css/Cblog.css" />
<script src="${pageContext.request.contextPath }/js/jquery-1.11.1.js"
	type="text/javascript" charset="utf-8"></script>
<style type="text/css">

</style>

</head>
<body>
	<div class="blog w">
		<p class="top w">后台管理系统</p>
		<a href="${pageContext.request.contextPath }/servlet/msgListServlet"><span>留言管理</span>
		</a> <a href="${pageContext.request.contextPath }/servlet/userListServlet"><span>用户管理</span>
		</a> <a href="${pageContext.request.contextPath }/servlet/blogPageServlet"><span>主页</span> 
		</a>
	</div>


	<c:forEach items="${blog }" var="b">
		<div class="allmsg">
			<div class="leavemsg w">
				<span class="s_username"> 
				<c:if test="${not empty b.photo_url }">
				<img src="${pageContext.request.contextPath }/upload/blog_img/${b.photo_url }"
					class="touxiang" /> 
				</c:if>	
					<a class="name"> ${b.id } </a> </span>
				<p class="l_msg" id="msg_${b.id }">${b.msg }</p>
				<span class="times"> <fmt:formatDate value="${b.date}"
						type="both" /> <b class="blogC"> <a class="alter"
						onclick="isalter(${b.id })" id="_alter">修改</a> <a
						onclick="issure(${b.id })" id="blog_remove">删除</a> </b> </span>
			</div>
		</div>

	</c:forEach>


	<%-- 修改组件 --%>
	<div class="alterunit">
		<form
			action="${pageContext.request.contextPath }/servlet/alterBlogServlet"
			method="post">
			<%-- --%>
			<input type="text" value="" name="id" id="alter_id" class="" />
			<textarea id="alter_msg" class="msgtext" name="msg" placeholder=""
				rows="5" cols="40"></textarea>
			<input type="submit" class="fl" value="修改" /> <input type="button"  value="取消"
				class="alterunit-cancel fl" />
		</form>
	</div>

	<div class="pub w">
		<form
			action="${pageContext.request.contextPath}/servlet/publishservlate"
			enctype="multipart/form-data" method="post">
			<input type="file" name="photo_url" id="" value="" /> 
			<textarea id="blog" class="msgtext" name="msg" placeholder=""
				rows="5" cols="40"></textarea>
			<input type="submit" value="发表" class="msgbtn"/>
		</form>
	</div>

</body>
<script src="${pageContext.request.contextPath }/js/Cblog.js"
	type="text/javascript" charset="utf-8"></script>
</html>
