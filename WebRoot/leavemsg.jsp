<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>

	<style type="text/css">
		.bgc {
			background: url(/userdemo/img/aboutphoto.jpg) 1100px center no-repeat;
		}
		#word{color:red;}
	</style>
	<link rel="stylesheet" type="text/css" href="/userdemo/css/base.css" />
	<link rel="stylesheet" type="text/css" href="/userdemo/css/guestbook.css"/>
	<link rel="stylesheet" type="text/css" href="/userdemo/css/leavemsg.css"/>
	<script src="/userdemo/js/guestbook.js" type="text/javascript" charset="utf-8"></script>
</head>
<body>
		<%@include file="/head.jsp" %>
		<div class="nav w">
			
			<h1 class="t_nav"><span>你，生命中最重要的过客，之所以是过客，因为你未曾为我停留。</span><a href="/userdemo/servlet/blogPageServlet" class="n1">网站首页</a><a href="/userdemo/servlet/messagePageServlet" class="n2">留言版</a></h1>
		</div>
		<div class="bgc">
		<c:forEach items="${pb.msgusers }" var="m">		
		<div class="allmsg">
			<div class="leavemsg w">
				<span class="s_username"> 
					<img src="${pageContext.request.contextPath }/upload/users_photo/${m.photo_url}"class="touxiang" /> 
					<a class="name"> ${m.username } </a> 
				</span>
				<div class="almsg">
					<p class="l_msg" id="msg_${m.id }">
						${m.msg }
					</p>				
				</div>
				<span class="times"> 
				<fmt:formatDate value="${m.date }" pattern="yyyy-MM-dd HH:mm"/>
				 </span>
			</div>
			<c:if test="${m.adminmsg != null}">
			<div class="admin-msg">
				<img src="/userdemo/img/photos2.jpg" alt="" class="admin-icon" />
				<p class="admin-msg-text"><b style="color:#FF3333">达简：</b>${m.adminmsg }</p>
				<span id="" class="reply-time"><fmt:formatDate value="${m.admindate }" pattern="yyyy-MM-dd HH:mm"/></span>
			</div>
			</c:if>	 
		</div>
		
	</c:forEach>
	
		<div class="pagination">
			<ul>
				<c:if test="${pb.currentPage!=1 }">
					<li class="disablepage"><a
						href="${pageContext.request.contextPath  }/servlet/messagePageServlet?currentPage=${pb.currentPage==1?1:pb.currentPage-1}">&lt;&lt;上一页</a>
					</li>
				</c:if>
				
				<li>第${pb.currentPage }页/共${pb.totalPage }页</li>
				
				<c:if test="${pb.currentPage!=pb.totalPage }">
					<li class="nextPage"><a
						href="${pageContext.request.contextPath  }/servlet/messagePageServlet?currentPage=${pb.currentPage==pb.totalPage?pb.totalPage:pb.currentPage+1}">下一页&gt;&gt;</a>
					</li>
				</c:if>

			</ul>
		</div>
		<c:if test="${not empty u }">
		<div class="pubmsg">
			<h6>说点什么吧，你可以输入<span>140</span>个字，现在剩余<span id="word">140</span>个</h6>
			<form action="${pageContext.request.contextPath}/servlet/leaveservlet" method="post" id="leaveMsg_form">
				<input type="text" name="uid" value="${u.id }" id="pass_id" class="username">
				<input type="text" name="username" value="${u.username }" class="username"/>
				<textarea id="weibo" class="msgtext" name="msg" placeholder="留下你的足印..................." rows="5"  cols="40"></textarea>
				<input type="button" value="留言" class="msgbtn"/>
			</form>
		</div>
		</c:if>
		</div>
		<%@include file="/foot.jsp" %>
</body>
	<script src="/userdemo/js/guestbook.js" type="text/javascript" charset="utf-8"></script>
</html>