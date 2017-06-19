<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" type="text/css" href="css/base.css" />
<link rel="stylesheet" type="text/css" href="css/userinfo.css" />
<style type="text/css">
.box {
	width: 150px;
	height: 180px;
	margin: 21px auto;
	text-align: center;
}

.box p {
	text-align: center;
	line-height: 60px;
	font-size: 12px;
	color: #000;
}

.box span {
	display: block;
	width: 75px;
	height: 75px;
	margin: 0 auto;
	font-size: 50px;
	color: #000;
	background-color: #FDF0B9;
	line-height: 75px;
	border-radius: 100%;
}

.info-main .big {
	width: 200px;
	height: 200px;
	position: absolute;
	top: 0;
	left: 130px;
	border: 1px solid #ccc;
	overflow: hidden;
	display: none;
}

.info-main .mask {
	width: 35px;
	height: 35px;
	background: rgba(100, 100, 0, 0.4);
	position: absolute;
	top: 0;
	left: 0;
	cursor: move;
	display: none;
}

.info-main .small {
	position: relative;
	width: 100px;
	height: 100px;
}

.info-main .big img {
	position: absolute;
	top: 0;
	left: 0;
	width: 420px;
	height: 420px;
}
.personages {
	padding-top: 20px;
	height: 700px;
	background: url(img/sy_68810454758.jpg) center center no-repeat;
}
.f-right .f-h2 {
    line-height: 40px;
    padding-left: 10px;
}
	
</style>
</head>
<body>

	<%@include file="/head.jsp"%>
	<div class="personages">
	<div class="personage w">
		<div class="per-head">
			<h1 class="fl f-h1">关于我</h1>
			<a href="${pageContext.request.contextPath }/servlet/blogPageServlet"
				class="fr ">返回首页</a>
		</div>
		<div class="per-foot">
			<div class="f-left fl">
				<div class="box" id="box">
					<p></p>
					<span></span>
				</div>
			</div>
			<div class="f-right fl">
				<div id="" class="">
					<i class="h2-i fl"></i>
					<h2 class="f-h2">我的资料</h2>
					<div class="info-main">
						<div class="info-img fl" id="info_img">

							<div class="small">
								<img class="fl user-icon" id="user_icon"
									src="${pageContext.request.contextPath }/upload/users_photo/${admin_u.photo_url}" />
								<div class="mask"></div>
							</div>
							<div class="big">
								<img src="img/photo.jpg" alt="" />
							</div>
						</div>


						<div id="" class="info-text fl">
							<ul>
								<li><span id="" class="fl">昵称：</span>
									<p class=" fl">${admin_u.username }</p></li>
								<li><span id="" class="fl">性别：</span>
									<p class="fl">
										<c:if test="${admin_u.gender =='1'}">男</c:if>
										<c:if test="${admin_u.gender =='0'}">女</c:if>
									</p></li>
								<li><span id="" class="fl">电话：</span>
									<p class="fl">${admin_u.telephone }</p></li>
								<li><span id="" class="fl">邮箱：</span>
									<p class="fl">${admin_u.email }</p></li>
								<li><span id="" class="fl">简介：</span>
									<p class="fl">${admin_u.introduce }</p></li>

							</ul>



						</div>

					</div>
				</div>

			</div>
		</div>
	</div>
	</div>
	<%@include file="/foot.jsp"%>
</body>
<script src="js/about.js" type="text/javascript" charset="utf-8"></script>
</html>