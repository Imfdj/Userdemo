window.onload = function() {
//	nav_biao(0);
	
	
//	var pic_left = $("pic_left");
//	var pic_right = $("pic_right");
	var pic_left = document.getElementById("pic_left");
	var pic_right = document.getElementById("pic_right");
	var leader = 0;
	var target = 0;
	var timer = null;
	var top = pic_left.offsetTop;
	
	
	var pic_left = jQuery("#pic_left");
	var pic_right = jQuery("#pic_right"),
	$window = jQuery(window), 
	  offset = pic_left.offset(), 
	  topPadding = 70; 
	  $window.scroll(function() { 
	    if ($window.scrollTop() > offset.top) { 
	    	pic_left.stop().animate({ 
	        marginTop: $window.scrollTop() - offset.top + topPadding 
	      },500); 
	      pic_right.stop().animate({ 
		        marginTop: $window.scrollTop() - offset.top + topPadding 
		      },500);
	    } else { 
	    	pic_left.stop().animate({ 
	        marginTop: 0 
	      }); 
	      pic_right.stop().animate({ 
		        marginTop: 0 
		      }); 
	    } 
	  });
//	console.log(top);
//	window.onscroll = function() {
//		
//		clearInterval(timer);
//		target = scroll().top + top;
//		console.log(leader);
//		
//		timer = setInterval(function() {
//		leader = leader + (target - leader) / 10;
//		pic_left.style.top = leader + "px";
//		pic_right.style.top = leader + "px";
//			
//		},30);
//
//	}
//--------------------------------------------------------------------------轮播图
	var wrap = document.getElementById("wrap"); // 大盒子
	var arrow = document.getElementById("arrow"); // 三角
	var slider = document.getElementById("slide");
	var lis = slider.getElementsByTagName("li"); // 所有要操作的盒子

	// 存储了每个图片的信息
	var json = [ { // 1
		width : 300,
		top : 0,
		left : 168,
		opacity : 20,
		z : 2
	}, { // 2
		width : 350,
		top : 25,
		left : 70,
		opacity : 80,
		z : 3
	}, { // 3
		width : 400,
		top : 50,
		left : 325,
		opacity : 100,
		z : 4
	}, { // 4
		width : 350,
		top : 25,
		left : 620,
		opacity : 80,
		z : 3
	}, { // 5
		width : 300,
		top : 0,
		left : 570,
		opacity : 20,
		z : 2
	} ];
	// 两个按钮点击事件
	// 函数节流
	var jieliu = true; // 用来控制函数节奏的 变量
	var as = arrow.children;
	change();
	for ( var k in as) {
		as[k].onclick = function() {
			if (this.className == "prev") {
				// alert("左侧") 移除第一个 放到json 最后一个
				if (jieliu) {
					jieliu = false; // 点击完毕之后，立马取反
					change(false);
				}
			} else {
				// alert('右侧'); 把 最后一个json 删除 并且把最后一个添加到json 第一个位置
				if (jieliu) {
					jieliu = false; // 点击完毕之后，立马取反
					change(true);
				}
			}
		}
	}

	function change(flag) {
		// 来判断
		if (flag) {
			// 把 最后一个json 删除 并且把最后一个添加到json 第一个位置
			json.unshift(json.pop());
		} else {
			// 移除第一个 放到json 最后一个
			json.push(json.shift());
		}
		// 为什么给for呢？ 以为我们的json 有5个 盒子li 有 5个
		for ( var i = 0; i < json.length; i++) {
			animate(lis[i], {
				width : json[i].width,
				top : json[i].top,
				left : json[i].left,
				opacity : json[i].opacity,
				zIndex : json[i].z
			}, function() {
				jieliu = true;
			}) // 回调函数是等动画执行完毕 才行

		}
	}

	var timer = null;
	timer = setInterval(autoplay, 2000); // 开启定时器
	function autoplay() {
		change(true);
	}

	wrap.onmouseover = function() { // 鼠标经过显示和隐藏 左右两个箭头
	 animate(arrow,{'opacity':100});
		clearInterval(timer);
	}
	wrap.onmouseout = function() {
		animate(arrow, {
			'opacity' : 0
		});
		clearInterval(timer);  // 要执行定时器 先清除定时器
        timer = setInterval(autoplay,2000);  // 开启定时器
	}
	
//---------------------------------------------------------------------------------尾巴	
	
	
	
	
}

jQuery("#slide_name_box").mouseover(function() {
	jQuery("#slide_name").animate({
		top : '100px'
	}, 200);
});

jQuery("#slide_name_box").mouseleave(function() {
	jQuery("#slide_name").animate({
		top : '130px'
	}, 200);
});
// 文字动画效果
function textAnimate() {
	jQuery(".texts > .p1").animate({
		left : '0px',
		opacity : '1',
	}, 2000, function() {
		jQuery(".texts > .p2").animate({
			left : '0px',
			opacity : '1',
		}, 1500, function() {
			jQuery(".texts > .p3").animate({
				opacity : '1',
			}, 1000).animate({
				opacity : '0.3',
			}, 1000).animate({
				opacity : '1',
			}, 1000);
		});
	});
}
textAnimate();
