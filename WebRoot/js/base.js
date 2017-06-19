
	function getXMLHttpRequest(){
	var xmlhttp;
		if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
			xmlhttp = new XMLHttpRequest();
		} else {// code for IE6, IE5
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		return xmlhttp;
}
	//----------------------------------------------------------------导航栏navAction
	function navAction(a,s) {
		jQuery(a).mouseover(function() {
			jQuery(s).fadeIn(500);
		});
		jQuery(a).mouseout(function() {
			jQuery(s).fadeOut(10);
		});
	}

	
//	function nav_biao(targets) {
//		
//	
//		var biao  = document.getElementById("biao");  // 浜戝僵
//    	var right = document.getElementById("head-right");
//    	var lis = right.children[0].children;
//    	var current = targets;   // 鐢ㄤ簬瀛樻斁鐐瑰嚮鏃跺�鐨�offsetLeft
//
//    	//alert(lis.length);
//    	for(var i=0; i<lis.length;i++) {
//        	lis[i].onmouseover = function() {
//        	    // alert(this.offsetLeft);
//           	 	target = this.offsetLeft;  // 鎶婂乏渚х殑浣嶇疆 锛岀粰 target
//				console.log(target);
//        	}	
//        	lis[i].onmouseout = function() {
//            	target = current;     // 榧犳爣绂诲紑  target 鏄�鍒氭墠鎴戜滑鐐瑰嚮鐨勪綅缃�
//        	}
//        	lis[i].onclick = function() {
//           		current = this.offsetLeft;   //  鐐瑰嚮鐨勬椂鍊�鍚у綋鍓嶄綅缃�瀛樿串涓�笅
//        	}
//    		}
//    	// 缂撳姩鍏紡
//    	var leader = 0, target = targets;
//    	setInterval(function(){
//        	leader = leader + (target - leader ) / 10;
//        	biao.style.left = leader + "px";
//    	},10);
//	}
	


//jQuery("#_cancel").click(function() {
//	jQuery("#_mask").hide();
////    document.body.style.overflow = "visible";  // 显示滚动条
//	// $("#_reply").hide();
//	jQuery("#_loginle").animate({
//		left : '-300px',
//		opacity : '0',
//	// height:'150px',
//	// width:'150px'
//	}, 150);
//});

//老登录
//jQuery("#_login").click(function() {
//	jQuery("#_mask").show();
////    document.body.style.overflow = "hidden";  // 不显示滚动条
//	jQuery("#_loginle").fadeIn(300).animate({
//		left : '500px',
//		opacity : '1',
//	// height:'150px',
//	// width:'150px'
//	});
//
//});

//jQuery("#_logining").click(function() {
////	loginAjax();
//	jQuery("#_mask").hide();
////    document.body.style.overflow = "visible";  // 显示滚动条
//    
//    jQuery("#_loginle").animate({
//  	left:'1300px',
//  	top: '-100px',
//  	opacity:'0',
//  	height:'10px',
//  	width:'10px'
//	},150);
//});


//登录后部件js

//jQuery(".username-log").mouseover(function() {
//	jQuery(".slide").slideDown(100);
//});
//jQuery(".loginafter").mouseleave(function() {
//	jQuery(".slide").slideUp(100);
//});
//jQuery(".logout").mouseover(function(event) {
////	event.css("background-color","yellow");  //????????????? 另外 多对象 同事件表示？
//	
//	jQuery(this).css("background-color","#DCDCDC");
//	
//});
//jQuery(".logout").mouseout(function(event) {
////	event.css("background-color","yellow");  //?????????????
//	jQuery(this).css("background-color","");
//	
//});

jQuery(".manage").mouseover(function(event) {
//	event.css("background-color","yellow");  //?????????????
	jQuery(this).css("background-color","#DCDCDC");
	
});
jQuery(".manage").mouseout(function(event) {
//	event.css("background-color","yellow");  //?????????????
	jQuery(this).css("background-color","");
	
});

//---------------------------------------------------------------------弹窗式登录后组件

jQuery(".tanchuangon").click(function() {
	window.location.href="/userdemo/userinfo.jsp";
});

jQuery(".tanchuangon, .tanchuang").mouseover(function() {
	jQuery(".tanchuang").css("display","block");
//	$(".tanchuang").slideDown(100);
});
jQuery(".tanchuangon, .tanchuang").mouseout(function() {
	jQuery(".tanchuang").css("display","none");
//		$(".tanchuang").slideUp(100);
});

jQuery(".logout").click(function () {//----------# id  取不到？？？？？？？？？？？？？？？？？？？？
	window.location.href= "/userdemo/servlet/loginOutServlet";

});

jQuery(".adminon").click(function () {//----------# id  取不到？？？？？？？？？？？？？？？？？？？？
	window.location.href= "/userdemo/servlet/blogListServlet";

});

jQuery("#user_icon").mouseover(function() {
	jQuery(".user-icon-x").css("display","block");
});
jQuery(".user-icon-x").mouseleave(function() {
	jQuery(".user-icon-x").css("display","none");
});


//加载函数-----------------------------------------------------------------------------------
jQuery(function() {
//----------------------------------注册	
var name = jQuery("#name"),
email = jQuery("#email"),
password = jQuery("#password"),
repassword = jQuery("#repassword"),
//----------------------------------登录
log_name = jQuery("#log_name"),
log_pass = jQuery("#log_pass"),
re_form = jQuery("#re_form"),
//----------------------------------ex_userinfo	
ex_id = jQuery("#ex_id"),
ex_name = jQuery("#ex_name"),
ex_gender = jQuery("#ex_gender"),
ex_telephone = jQuery("#ex_telephone"),
ex_introduce = jQuery("#ex_introduce"),
ex_photo_url = jQuery("#ex_photo_url"),
//----------------------------------修改user	
change_name = jQuery("#change_name"),
change_gender = jQuery("#change_gender"),
change_telephone = jQuery("#change_telephone"),
change_introduce = jQuery("#change_introduce"),
change_repassword = jQuery("#change_repassword"),
change_expassword = jQuery("#change_expassword"),
change_password = jQuery("#change_password"),
change_photo_url = jQuery("#change_photo_url"),
user_icon_file= jQuery("#user_icon_file"),
change_allFields = jQuery([]).add(change_name).add(change_gender).add(change_telephone).add(change_introduce)
.add(change_repassword).add(change_expassword).add(change_password).add(change_photo_url),
allFields = jQuery([]).add(name).add(email).add(password).add(repassword),
tips = jQuery(".validateTips"),
cknameboole = "",
ckpasswordboole = "";
	


navAction(".nav1",".nav1-span");
navAction(".nav2",".nav2-span");
navAction(".nav3",".nav3-span");



//jQuery(".dialog-init").css("display","block");//解决dialog 加载闪烁问题

function updateTips(t) {//----------------------------------------提示文本
tips
	.text(t)
	.addClass("ui-state-highlight");
setTimeout(function() {
	tips.removeClass("ui-state-highlight", 1200);
}, 300);
}

function checkLength(o, n, min, max) {//--------------------------------注册表单字符长度控制
if(o.val().length > max || o.val().length < min) {
	o.addClass("ui-state-error");
	updateTips("" + n + " 的长度必须在 " +
		min + " 和 " + max + " 之间。");
	return false;
} else {
	return true;
}
}

function checkRegexp(o, regexp, n) {//--------------------------------注册表单字符类型控制
if(!(regexp.test(o.val()))) {
	o.addClass("ui-state-error");
	updateTips(n);
	return false;
} else {
	return true;
}
}

function chechRepassword(o,oo,n) {//--------------------------------注册表单确认密码单独控制
if((o.val() == "")){
	o.addClass("ui-state-error");
	n = "不能为空！";
	updateTips(n);
	return false;
}else if(!(oo.val() == o.val())) {
	o.addClass("ui-state-error");
	updateTips(n);
	return false;
} else {
	return true;
}
}
//-------------------------------------------------------- checkIconName

function checkIconName(fileName) {
	var fileExtension = fileName.substring(fileName.lastIndexOf('.') + 1);
		
	if(fileExtension == "jpg"||fileExtension == "png"||fileExtension == "gif"||
			fileExtension == "jpeg"||fileExtension == "bpm"||fileExtension == "JPEG"){
		
		return true;
	}else{
		
		return false;
	}
}

//-------------------------------------------------------- ajax验证password
function  CkPassword() {
	var url='/userdemo/servlet/verifyUserPassword';  
    var data={'password':change_expassword.val(),
    		  'username':ex_name.val() 	};  
    jQuery.ajax({  
        type:'post',  
        url:url,  
        data:data,  
        async:false,//false代表只有在等待ajax执行完毕后才执行window.open('http://www.phpernote.com')语句  
        success:function (msg){  
        	ckpasswordboole = msg;
        },
        error:function (){
        	alert("服务器繁忙，稍后再试！");
        }
    }); 
}
//----------------------------------------------------- ajax验证账户是否存在
function  CkName(name) {

    var url='/userdemo/servlet/verifyUsernameON';  
    var data='username='+name.val();  
    jQuery.ajax({  
        type:'post',  
        url:url,  
        data:data,  
        async:false,//false代表只有在等待ajax执行完毕后才执行window.open('http://www.phpernote.com')语句  
        success:function (msg){  
        	cknameboole = msg;
        },
        error:function (){
        	alert("服务器繁忙，稍后再试！");
        }
    }); 
	
    
	//创建XMLHttpRequest对象
//	var xhr = getXMLHttpRequest();
//	//处理结果
//	xhr.onreadystatechange = function() {
//		
//		if(xhr.readyState == 4) { //请求一切正常
//			
//			if(xhr.status == 200) { //服务器响应一切正常
//				//alert(xhr.responseText);//得到响应结果
////				var msg = document.getElementById("msg");
//				if(xhr.responseText == "true") {
////					msg.innerHTML = "<font color='red'>用户名已存在</font>";
//					//msg.innerText = "<font color='red'>用户名已存在</font>";
//					updateTips("用户名已存在");
//					name.addClass("ui-state-error");
////					alert("200");
//					
//					cknameboole = false;
//					alert(cknameboole);
////					return cknameboole;
//					
//					
//				} else {
////					msg.innerHTML = "可以使用";
////					
//					updateTips("用户名可以使用");
//					name.removeClass("ui-state-error");
//					name.addClass("ui-state-hover");
//					
//					cknameboole = true;
//					alert(cknameboole);
////					return true;
//				}
//			}
//		}
//	}
//	//创建连接
//	xhr.open("get", "/userdemo/servlet/verifyUsernameON?username="+name.val());
//	//发送请求
//	xhr.send(null);
}

//-----------------------------------------------------------------------------ajax登录
function loginAjax(){ 
    var url='/userdemo/servlet/loginservlet';  
    var data={"username" : log_name.val(),
    		  "password" : log_pass.val()
    		};  
    jQuery.ajax({  
        type:'post',  
        url:url,  
        data:data,  
        async:false,//false代表只有在等待ajax执行完毕后才执行window.open('http://www.phpernote.com')语句  
        success:function (msg){  
        	if(msg == "false"){
        		updateTips("账号或密码错误");
        		log_name.addClass("ui-state-error");
        		log_pass.addClass("ui-state-error");
        	}else if(msg == "extrue"){
        		updateTips("账号已被禁用，请联系博主");
        		log_name.addClass("ui-state-error");
        		log_pass.addClass("ui-state-error");
        	}else{
        		window.location.href= "/userdemo/servlet/blogPageServlet";
        	}
        }  
    }); 
}



name.blur(function() {//------------------------------------------------注册表单选中移开事件处理
	if (name.val() != "") {
		var bValid = true;
		
		bValid = bValid && checkLength(name, "昵称", 3, 16);
		bValid = bValid && checkRegexp(name, /^[\u4E00-\u9FA5A-Za-z0-9_]+$/, "用户名必须由字母、数字、_或汉字组成");
//		bValid = bValid && checkRegexp(name, /^[a-z]([0-9a-z_])+$/i, "用户名必须由 a-z、0-9、下划线组成，且必须以字母开头。");
		//ajax验证username
		if(bValid){
			CkName(name);
			if(cknameboole == "true"){
				updateTips("用户名已存在");
				name.addClass("ui-state-error");
			}else{
				updateTips("用户名可以使用");
				name.removeClass("ui-state-error");
				name.addClass("ui-state-hover");
			} 
		}
	}else{
		name.removeClass("ui-state-error");
		name.removeClass("ui-state-hover");
	}
	
});
password.blur(function() {
	if (password.val() != "") {
		var bValid = true;
		bValid = bValid && checkLength(password, "密码", 5, 16);
		bValid = bValid && checkRegexp(password, /^([0-9a-zA-Z])+$/, "密码字段只允许： a-z 0-9");
		if (bValid) {
		password.removeClass("ui-state-error");
		password.addClass("ui-state-hover");
		}
	}else{
		password.removeClass("ui-state-error");
		password.removeClass("ui-state-hover");
	}
	
});
repassword.blur(function() {
	if (repassword.val() != "") {
		var bValid = true;
		bValid = bValid && chechRepassword(repassword,password, "密码两次不一样");
		if (bValid) {
		repassword.removeClass("ui-state-error");
		repassword.addClass("ui-state-hover");
		}
	}else{
		repassword.removeClass("ui-state-error");
		repassword.removeClass("ui-state-hover");
	}
});

change_password.blur(function() {//-------------------------------------------修改密码验证
	if (change_password.val() != "") {
		var bValid = true;
		bValid = bValid && checkLength(change_password, "密码", 5, 16);
		bValid = bValid && checkRegexp(change_password, /^([0-9a-zA-Z])+$/, "密码字段只允许： a-z 0-9");
		if (bValid) {
			change_password.removeClass("ui-state-error");
			change_password.addClass("ui-state-hover");
		}
	}else{
		change_password.removeClass("ui-state-error");
		change_password.removeClass("ui-state-hover");
	}
	
});
change_repassword.blur(function() {
	if (change_repassword.val() != "") {
		var bValid = true;
		bValid = bValid && chechRepassword(change_repassword,change_password, "密码两次不一样");
		if (bValid) {
			change_repassword.removeClass("ui-state-error");
			change_repassword.addClass("ui-state-hover");
		}
	}else{
		change_repassword.removeClass("ui-state-error");
		change_repassword.removeClass("ui-state-hover");
	}
});

email.blur(function() {
	if (email.val() != "") {
		var bValid = true;
		bValid = bValid && checkLength(email, "email", 6, 80);
		bValid = bValid && checkRegexp(email, /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/, "格式不对 eg. ui@jquery.com");
		if (bValid) {
		email.removeClass("ui-state-error");
		email.addClass("ui-state-hover");
		}
	}else{
		email.removeClass("ui-state-error");
		email.removeClass("ui-state-hover");
	}
	
});
//注册控件------------------------------------------------------------------------------------
jQuery("#register-form").dialog({
autoOpen: false,
top: 60,
height: 400,
width: 350,
modal: true,
position: { using:function(pos){  
//    console.log(pos);  
    var topOffset = jQuery(this).css(pos).offset().top;  
    if (topOffset = 0||topOffset>0) {  
    	jQuery(this).css('top', 60);  
    } 
}},
buttons: {
	"注册用户": function() {
		var bValid = true;
		allFields.removeClass("ui-state-error");

		bValid = bValid && checkLength(name, "昵称", 3, 16);
//		bValid = bValid && checkRegexp(name, /^[a-z]([0-9a-z_])+$/i, "用户名必须由 a-z、0-9、下划线组成，且必须以字母开头。");^[\u7537\u5973]+$
		bValid = bValid && checkRegexp(name, /^[\u4E00-\u9FA5A-Za-z0-9_]+$/, "用户名必须由字母、数字、_或汉字组成");
		bValid = bValid && checkLength(password, "密码", 5, 16);
		bValid = bValid && checkRegexp(password, /^([0-9a-zA-Z])+$/, "密码字段只允许： a-z 0-9");
//		bValid = bValid && checkLength(repassword, "密码", 5, 16);
		bValid = bValid && chechRepassword(repassword,password, "密码两次不一样");
		bValid = bValid && checkLength(email, "email", 6, 80);
		bValid = bValid && checkRegexp(email, /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/, "eg. ui@jquery.com");

		// From jquery.validate.js (by joern), contributed by Scott Gonzalez: http://projects.scottsplayground.com/email_address_validation/
//		bValid = bValid && checkRegexp(repassword, /^([0-9a-zA-Z])+$/, "密码字段只允许： a-z 0-9");

		
		if(bValid) {
			re_form.submit();
		}
	}
},
close: function() {
//	updateTips("所有的表单字段都是必填的");
//	tips.text("所有的表单字段都是必填的");//关闭后重置提示文本
	allFields.val("").removeClass("ui-state-error");
	allFields.val("").removeClass("ui-state-hover");
}
});
//updateTips("所有的表单字段都是必填的");

jQuery('.ui-dialog-buttonpane').find('button:contains("注册用户")').css({
	"background-color":"#e78f08",
	width: 200,
	height: 40,
	color: "#fff",
	"margin-right": 65
});

jQuery("#_register")
//.button()
.click(function() {
	updateTips("所有的表单字段都是必填的");
	jQuery("#register-form").dialog("open");
});

jQuery("#change_log").click(function() {
	jQuery("#register-form").dialog("close");
	updateTips("欢迎登录");
	jQuery("#login_form").dialog("open");
	return false;
});
//-----------------------------------------------------------------------------------登录控件-

jQuery("#login_form").dialog({
			autoOpen: false,
			height: 330,
			width: 350,
			modal: true,
			position: { using:function(pos){  
//			    console.log(pos)  
			    var topOffset = jQuery(this).css(pos).offset().top;  
			    if (topOffset = 0||topOffset>0) {  
			    	jQuery(this).css('top', 60);  
			    }  
			}},
			buttons: {
				"登录帐户": function() {
                    var bValid = true;
					allFields.removeClass("ui-state-error");
//					bValid = bValid && checkLength(name, "昵称", 3, 16);
//					log_password.val() != "" && (log_password.val() != null)
					if((log_pass.val() != "" && log_name.val() != "")){
						CkName(log_name);
						if(cknameboole != "true"){
							updateTips("用户名不存在");
							log_name.addClass("ui-state-error");
						}else{
							
							loginAjax();
//							log_form.submit();
						}
					}
//					alert(log_password.val());
					
					
//				
				}
				
			},
			close: function() {
//				updateTips("欢迎登录");
//				log_tips.text("欢迎登录");//关闭后重置提示文本
				log_name.val("");
				log_pass.val("");
				log_name.removeClass("ui-state-error");
				log_pass.removeClass("ui-state-error");
//				 $(this).dialog("destroy").remove(); 
			}
		});
	
		
		jQuery('.ui-dialog-buttonpane').find('button:contains("登录帐户")').css({
			"background-color":"#e78f08",
			width: 200,
			height: 40,
			color: "#fff",
			"margin-right": 65
		});
//		.attr("disabled", "disabled");
		jQuery("#_login")
//			.button()
			.click(function() {
				updateTips("欢迎登录");
				jQuery("#login_form").dialog("open");
			});
			
		jQuery("#change_rei").click(function() {
			jQuery("#login_form").dialog("close");
			updateTips("所有的表单字段都是必填的");
			jQuery("#register-form").dialog("open");
			return false;
		});	
		
		
//		------------------------------------------------------info------------
		
		
//		change_name = jQuery("#change_name"),
//		change_gender = jQuery("#change_gender"),
//		change_telephone = jQuery("#change_telephone"),
//		change_introduce = jQuery("#change_introduce"),
//		change_repassword = jQuery("#change_repassword"),
//		change_expassword = jQuery("#change_expassword"),
//		change_password = jQuery("#change_password"),
//		change_photo_url = jQuery("#change_photo_url"),
		
		
		function exval(o,exo) {
//			if(o==change_gender){
//				if(o.val()=="男"){
//					o.val("1");
//				}else{
//					o.val("0");
//				}
//			}else if(o==change_telephone){
//				
//				if(o.val()=="电话"){
//					alert("d");
//					o.val("空");
//				}
//			}else{
//				o.val(exo.val());
//			}
			o.val(exo.val());
		}
		
		jQuery("#info_form").dialog({
					autoOpen: false,
					height: 400,
					width: 350,
					modal: true,
					buttons: {
						"确认修改": function() {
                            var bValid = true;
                            var changebValid = false;
							if(change_name.val() != ""){
							bValid = bValid && checkLength(change_name, "昵称", 3, 16);
							bValid = bValid && checkRegexp(change_name, /^[\u4E00-\u9FA5A-Za-z0-9_]+$/, "用户名必须由字母、数字、_或汉字组成");
							if(bValid){
								changebValid = true;
								change_name.removeClass("ui-state-error");
							}
							}
							if(change_gender.val() != ""){											
							bValid = bValid && checkRegexp(change_gender, /^[\u7537\u5973]+$/, "性别只能是男或女");
							if(bValid){
								changebValid = true;
								change_gender.removeClass("ui-state-error");
							}
							}
							if(change_telephone.val() != ""){/[^0-9]+/
								bValid = bValid && checkLength(change_telephone, "电话",8,12);
								bValid = bValid && checkRegexp(change_telephone, /^[0-9]+$/, "只能是数字");
								if(bValid){
									changebValid = true;
									change_telephone.removeClass("ui-state-error");
								}
							}
							if(change_introduce.val() != ""){
							bValid = bValid && checkLength(change_introduce, "简介", 0,50);
							if(bValid){
								changebValid = true;
								change_introduce.removeClass("ui-state-error");
							}
							}
							if(bValid&&!changebValid){
								updateTips("你还没有修改任何信息");
							}
						if(bValid&&changebValid){
							if(change_gender.val() == "男"){//--------   修改后的性别换成数字
								change_gender.val("1");
							}else if(change_gender.val() == "女"){
								change_gender.val("0");
							}
							
							if(change_name.val() == ""){
								exval(change_name,ex_name);
							}
							if(change_gender.val() == ""){
								exval(change_gender,ex_gender);
							}
							if(change_telephone.val() == ""){
								exval(change_telephone,ex_telephone);
							}
							if(change_introduce.val() == ""){
								exval(change_introduce,ex_introduce);
							}
							
							jQuery("#changeinfo_form").submit();
						}
						}
						
					},
					close: function() {
//						log_tips.text("修改你想修改的信息");//关闭后重置提示文本
						change_allFields.val("").removeClass("ui-state-error");
						change_allFields.val("").removeClass("ui-state-hover");
//						allFields.val("").removeClass("ui-state-error");
//						 $(this).dialog("destroy").remove(); 
					}
				});
				jQuery('.ui-dialog-buttonpane').find('button:contains("确认修改")').css({
					"background-color":"#e78f08",
					width: 200,
					height: 40,
					color: "#fff",
					"margin-right": 65
				});
				jQuery("#alter_info")
					.button()
					.click(function() {
						updateTips("改写你想修改的信息");
						jQuery("#info_form").dialog("open");
					});
		
//				------------------------------------------------------password------------
				
				jQuery("#password_form").dialog({
							autoOpen: false,
							height: 340,
							width: 350,
							modal: true,
							buttons: {
								"提交": function() {
		                            var bValid = true;
									allFields.removeClass("ui-state-error");
									
									bValid = bValid && checkLength(change_password, "密码", 5, 16);
									bValid = bValid && checkRegexp(change_password, /^([0-9a-zA-Z])+$/, "密码字段只允许： a-z 0-9");
									bValid = bValid && chechRepassword(change_repassword,change_password, "密码两次不一样");
									if(bValid){
										CkPassword();
										if(ckpasswordboole == "true"){
										}else{
//											updateTips("用户名可以使用");
//											name.removeClass("ui-state-error");
//											name.addClass("ui-state-hover");
											updateTips("原始密码不正确");
											change_expassword.addClass("ui-state-error");
										}
									}
									bValid = bValid && ckpasswordboole;
									if(bValid){
										pass_form.submit();
									}
								}
							},
							close: function() {
								tips.text("请输入你的原始密码");//关闭后重置提示文本
								change_expassword.val("").removeClass("ui-state-error");
								change_password.val("").removeClass("ui-state-error").removeClass("ui-state-hover");
								change_repassword.val("").removeClass("ui-state-error").removeClass("ui-state-hover");
//								allFields.val("").removeClass("ui-state-error");
//								 $(this).dialog("destroy").remove(); 
							}
						});
						jQuery('.ui-dialog-buttonpane').find('button:contains("提交")').css({
							"background-color":"#e78f08",
							width: 200,
							height: 40,
							color: "#fff",
							"margin-right": 65
						});
//						.attr("disabled", "disabled");
						jQuery("#change_pass")
							.click(function() {
								updateTips("请输入你的原始密码");
								jQuery("#password_form").dialog("open");
							});	
		
//						------------------------------------------------------usericon------------
						
						jQuery("#usericon_form").dialog({
									autoOpen: false,
									height: 200,
									width: 350,
									modal: true,
									buttons: {
										"提交": function() {
				                            var bValid = true;
											bValid = bValid && checkIconName(user_icon_file.val());
//											bValid = bValid && checkRegexp(change_password, /^([0-9a-zA-Z])+$/, "密码字段只允许： a-z 0-9");
//											bValid = bValid && chechRepassword(change_repassword,change_password, "密码两次不一样");
											if(bValid){
												jQuery("#changeusericon_form").submit();
											}else{
												updateTips("图片格式错误，eg：png,jpg,jpeg,gif");
												user_icon_file.addClass("ui-state-error");
											}
										}
									},
									close: function() {
										tips.text("选择你要修改的头像图片");//关闭后重置提示文本
										user_icon_file.val("").removeClass("ui-state-error");
//										allFields.val("").removeClass("ui-state-error");
//										 $(this).dialog("destroy").remove(); 
									}
								});
								jQuery('.ui-dialog-buttonpane').find('button:contains("提交")').css({
									"background-color":"#e78f08",
									width: 200,
									height: 40,
									color: "#fff",
									"margin-right": 65
								});
//								.attr("disabled", "disabled");
								jQuery(".user-icon-x")
									.click(function() {
										updateTips("选择你要修改的头像图片");
										jQuery("#usericon_form").dialog("open");
									});	
		

});








/*登录ajax*/
function loginAjax(){
//创建XMLHttpRequest对象
var xhr = getXMLHttpRequest();
//var log_username = jQuery("#log_username").text();
//var log_password = jQuery("#log_password");
//alert(log_username);
var log_username = document.getElementById("log_username").value;
var log_password = document.getElementById("log_password").value;
//处理结果

xhr.onreadystatechange = function(){
	if(xhr.readyState==4){//请求一切正常
		alert(xhr.status);
		if(xhr.status==200){//服务器响应一切正常
			//alert(xhr.responseText);//得到响应结果
//			var msg = document.getElementById("msg");
			var str = xhr.responseText;
			if(str != ""){
				var json = eval("(" + str + ")");
//				var a = JSON.parse( str );
				alert(typeof json);
				console.log(json.id);
			}else{
				alert("shibai");
			}
				
		}
	}
}
//创建连接/servlet/loginservlet
xhr.open("get","servlet/loginservlet?username="+log_username+"&password="+log_password);
//发送请求
xhr.send(null);

}