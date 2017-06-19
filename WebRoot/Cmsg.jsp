<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" type="text/css"
	href="${pageContext.request.contextPath }/css/Cmsg.css" />
<script src="${pageContext.request.contextPath }/js/jquery-1.11.1.js"
	type="text/javascript" charset="utf-8"></script>
<style type="text/css">
* {
	padding: 0;
	margin: 0;
}

.allmsg {
	
}

.leavemsg {
	height: 110px;
}

.s_username {
	float: left;
	width: 124px;
	border: 1px solid gainsboro;
}

.touxiang {
	display: inline-block;
	width: 60px;
	height: 58px;
	border: 1px solid gainsboro;
	padding: 4px;
	margin: 10px 26px 6px 26px;
}

.name {
	display: inline-block;
	width: 124px;
	text-align: center;
	padding-bottom: 3px;
}

.almsg {
	float: left;
	height: 110px;
}

.l_msg {
	float: left;
	width: 515px;
	height: 50px;
	padding-left: 20px;
	padding-top: 5px;
	padding: 10px 20px;
	font-size: 12px;
	line-height: 12px;
	border: 1px solid gainsboro;
	background-color: #DCDCDC;
}

.a-msg {
	width: 514px;
	height: 107px;
	font-size: 12px;
	line-height: 12px;
	padding: 0 21px;
	background-color: #DCDCAC;
}

.times {
	float: left;
	width: 400px;
	line-height: 105px;
	padding-left: 35px;
	border: 1px solid gainsboro;
	background: url(${pageContext.request.contextPath }/img/time.jpg)
		#f6f6f6 15px center no-repeat;
}

.alterunit {
	position: absolute;
	top: 250px;
	left: 400px;
	width: 600px;
	height: 100px;
	display: none;
}

.alterunit-cancel {
	margin-top: 63px;
}

.alterunit .bloginput {
	width: 550px;
	height: 100px;
}

.msgtext {
	float: left;
	width: 535px;
	height: 80px;
	padding: 10px 10px;
	border: 1px solid gainsboro;
	resize: none;
}

.msgbtn {
	float: left;
	width: 60px;
	height: 100px;
	border: 5px solid grey;
}

.fl {
	float: left;
}
</style>
</head>
<body>

	<div class="blog w">
		<p class="top w">后台管理系统</p>
		<a href="${pageContext.request.contextPath }/servlet/blogListServlet"><span>博文管理</span>
		</a> <a href="${pageContext.request.contextPath }/servlet/userListServlet"><span>用户管理</span>
		</a> <a href="${pageContext.request.contextPath }/servlet/blogPageServlet"><span>主页</span>
		</a>
	</div>


	<c:forEach items="${msguser }" var="m">
		<div class="allmsg">
			<div class="leavemsg w">
				<span class="s_username"> <img
					src="${pageContext.request.contextPath }/upload/users_photo/${m.photo_url}"
					class="touxiang" /> <a class="name">${m.id } ${m.username } </a> </span>
				<div class="almsg">
					<p class="l_msg" id="msg_${m.id }">${m.msg }
					<p class="a-msg" id="msg_${m.id }">
						${m.adminmsg } 
						<c:if test="${not empty m.adminmsg }">
							<a href="${pageContext.request.contextPath }/servlet/removeReplymsgByIdServlet?id=${m.id }">删除</a>
						</c:if>	
					</p>
					</p>
				</div>
				<span class="times"><fmt:formatDate value="${m.date }"
						type="both" />  <b class="blogC"> <a
						class="alter" onclick="isalter(${m.id })" id="_alter">回复</a> <a
						onclick="issure(${m.id })" id="blog_remove">删除</a> </b> </span>
			</div>
		</div>

	</c:forEach>

	<%-- 回复组件 --%>
	<div class="alterunit">
		<form
			action="${pageContext.request.contextPath }/servlet/replyMsgServlet"
			method="post">
			<%-- --%>
			<input type="text" value="" name="id" id="alter_id" class="" /> 
			<textarea id="alter_msg" class="msgtext" name="adminmsg"
				placeholder="" rows="5" cols="40"></textarea>
			<input type="submit" class="fl" value="回复" /> <input type="button"
				value="取消" class="alterunit-cancel fl" />
		</form>
	</div>


</body>
<script src="${pageContext.request.contextPath }/js/Cmsg.js"
	type="text/javascript" charset="utf-8"></script>
</html>