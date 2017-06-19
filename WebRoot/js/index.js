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
//--------------------------------------------------------------------------�ֲ�ͼ
	var wrap = document.getElementById("wrap"); // �����
	var arrow = document.getElementById("arrow"); // ����
	var slider = document.getElementById("slide");
	var lis = slider.getElementsByTagName("li"); // ����Ҫ�����ĺ���

	// �洢��ÿ��ͼƬ����Ϣ
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
	// ������ť����¼�
	// ��������
	var jieliu = true; // �������ƺ�������� ����
	var as = arrow.children;
	change();
	for ( var k in as) {
		as[k].onclick = function() {
			if (this.className == "prev") {
				// alert("���") �Ƴ���һ�� �ŵ�json ���һ��
				if (jieliu) {
					jieliu = false; // ������֮������ȡ��
					change(false);
				}
			} else {
				// alert('�Ҳ�'); �� ���һ��json ɾ�� ���Ұ����һ����ӵ�json ��һ��λ��
				if (jieliu) {
					jieliu = false; // ������֮������ȡ��
					change(true);
				}
			}
		}
	}

	function change(flag) {
		// ���ж�
		if (flag) {
			// �� ���һ��json ɾ�� ���Ұ����һ����ӵ�json ��һ��λ��
			json.unshift(json.pop());
		} else {
			// �Ƴ���һ�� �ŵ�json ���һ��
			json.push(json.shift());
		}
		// Ϊʲô��for�أ� ��Ϊ���ǵ�json ��5�� ����li �� 5��
		for ( var i = 0; i < json.length; i++) {
			animate(lis[i], {
				width : json[i].width,
				top : json[i].top,
				left : json[i].left,
				opacity : json[i].opacity,
				zIndex : json[i].z
			}, function() {
				jieliu = true;
			}) // �ص������ǵȶ���ִ����� ����

		}
	}

	var timer = null;
	timer = setInterval(autoplay, 2000); // ������ʱ��
	function autoplay() {
		change(true);
	}

	wrap.onmouseover = function() { // ��꾭����ʾ������ ����������ͷ
	 animate(arrow,{'opacity':100});
		clearInterval(timer);
	}
	wrap.onmouseout = function() {
		animate(arrow, {
			'opacity' : 0
		});
		clearInterval(timer);  // Ҫִ�ж�ʱ�� �������ʱ��
        timer = setInterval(autoplay,2000);  // ������ʱ��
	}
	
//---------------------------------------------------------------------------------β��	
	
	
	
	
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
// ���ֶ���Ч��
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
