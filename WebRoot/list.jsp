<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
	<style type="text/css">
	
	* {
	padding: 0;
	margin: 0;
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

.l_msg {
	float: left;
	width: 515px;
	height: 75px;
	padding-left: 20px;
	padding-top: 20px;
	padding: 15px 20px;
	line-height: 18px;
	border: 1px solid gainsboro;
	background-color: #DCDCDC;
}

.times {
	float: left;
	width: 280px;
	line-height: 105px;
	padding-left: 35px;
	border: 1px solid gainsboro;
	background: url(${pageContext.request.contextPath }/img/time.jpg) #f6f6f6 15px center no-repeat;
}
	</style>
</head>
<body>


	
	<c:forEach items="${blog }" var="b">		
		<div class="allmsg">
			<div class="leavemsg w">
				<span class="s_username"> 
					<img src="${pageContext.request.contextPath }/img/photos2.jpg"class="touxiang" /> 
					<a class="name"> ${b.id } </a> 
				</span>
				<p class="l_msg">
					${b.msg }
				</p>
				<span class="times"> 
				${b.date }
					<b class="blogC">
						<a class="alter" tabindex="" id="_alter">修改</a>
						<a href="${pageContext.request.contextPath }/servlet/removeBlogServlet?id=">删除</a>
					</b>
				 </span>
			</div>	 
		</div>
		
		</c:forEach>
	
</body>
</html>