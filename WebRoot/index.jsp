<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<base href="<%=basePath%>">

<title>达简的个人博客</title>
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
<link rel="stylesheet" type="text/css" href="css/index.css" />
<link rel="stylesheet" type="text/css" href="css/base.css" />
<link rel="stylesheet" type="text/css" href="css/base2.css" />
<link rel="stylesheet" type="text/css" href="css/mood.css" />
<script src="js/jquery-1.11.1.js" type="text/javascript" charset="utf-8"></script>
<style type="text/css">
	 .ad img{
            position: absolute;
            left:0;
            top:70px;
            width: 100px;
        }
        #pic_right{
            left:1249px;
            top:70px;
        }
</style>
</head>

<body>
	<%@include file="/head.jsp"%>

	<!--banner-->
	<div class="banner">
		<section class="">
		<ul class="texts">
			<p class="p1">我们不停的翻弄着回忆</p>
			<p class="p2">却再也找不回那时的自己</p>
			<p class="p3">红尘一梦，不再追寻</p>
		</ul>
		<div class="avatar">
			<a href="/userdemo/servlet/adminUserInfoServlet" id="slide_name_box"><span id="slide_name">达简</span> </a>
		</div>
		</section>
	</div>
	
	<div class="ad">
		<img src="img/aside.jpg" alt="" id="pic_left"/>
		<img src="img/aside.jpg" alt="" id="pic_right"/>
	</div>
	
	<%@include file="/roll.jsp"%>


	<c:forEach items="${pb.blogs }" var="b">


		<div class="bloglist">
			<ul class="arrow_box">
				<div class="sy">
					<c:if test="${not empty b.photo_url }">
						<img
							src="${pageContext.request.contextPath }/upload/blog_img/${b.photo_url }"
							alt="">
					</c:if>
					<p>${b.msg }</p>
				</div>
				<span class="dateview"><fmt:formatDate value="${b.date}"
						type="date" /> </span>
			</ul>
		</div>
	</c:forEach>
	
	<div class="pagination">
			<ul>
				<c:if test="${pb.currentPage!=1 }">
					<li class="disablepage"><a
						href="${pageContext.request.contextPath  }/servlet/blogPageServlet?currentPage=${pb.currentPage==1?1:pb.currentPage-1}">&lt;&lt;上一页</a>
					</li>
				</c:if>
				

				<li>第${pb.currentPage }页/共${pb.totalPage }页</li>
				
				<c:if test="${pb.currentPage!=pb.totalPage }">
					<li class="nextPage"><a
						href="${pageContext.request.contextPath  }/servlet/blogPageServlet?currentPage=${pb.currentPage==pb.totalPage?pb.totalPage:pb.currentPage+1}">下一页&gt;&gt;</a>
					</li>
				</c:if>

			</ul>
		</div>
	<%@include file="/foot.jsp"%>
</body>
<script src="js/index.js" type="text/javascript" charset="utf-8"></script>
</html>
