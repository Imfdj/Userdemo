<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<style type="text/css">
			 img{
			 	position: relative;
			 	left: 178px;
				width: 1000px;
				height: 600px;
			}
			span {
				position: relative;
				top: -250px;
			 	left: -406px;
				width: 100px;
				height: 50px;
				font-size: 50px;
			}
		</style>
</head>
<body>
	<img src="img/success.jpg"/>
	<span id="">修改成功</span>
    <%response.setHeader("refresh", "3,url="+request.getContextPath()+"/servlet/blogPageServlet"); %>
</body>
</html>