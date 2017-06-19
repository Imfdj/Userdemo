$(function() {
				var li1boole = false;
				var li2boole = true;
					
					$(".li2").mouseover(function() {
						if(li2boole){
					$(".i2").css({
						"background": "url(img/u_nav_icon.png) -56px -45px no-repeat"
					});
					$(".a2").css({
						"color": "#EB8F00"
					});
					}
					});
					$(".li1").mouseover(function() {
						if(li1boole){
					$(".i1").css({
						"background": "url(img/u_nav_icon.png) -57px 2px no-repeat"
					});
					$(".a1").css({
						"color": "#EB8F00"
					});
					}
					});
					
					$(".li2").mouseout(function() {
						if(li2boole){
					$(".i2").css({
						"background": "url(img/u_nav_icon.png) 2px -45px no-repeat"
					});
					$(".a2").css({
						"color": ""
					});
					}
					});
					$(".li1").mouseout(function() {
						if(li1boole){
					$(".i1").css({
						"background": "url(img/u_nav_icon.png) 2px 2px no-repeat"
					});
					$(".a1").css({
						"color": "#333"
					});
					}
					});
				
			
				$(".li2").click(function() {
					$(".li2").css({
						"background-color": "#EB8F00"
					});
					$(".i2").css({
						"background": "url(img/u_nav_icon.png) -25px -45px no-repeat"
					});
					$(".a2").css({
						"color": "#fff"
					});
					
					$(".li1").css({
						"background-color": "#fff"
					});
					$(".i1").css({
						"background": "url(img/u_nav_icon.png) 2px 3px no-repeat"
					});
					$(".a1").css({
						"color": "#333"
					});
					
					li2boole = false;
					li1boole = true;
				});
				$(".li1").click(function() {
					$(".li1").css({
						"background-color": "#EB8F00"
					});
					$(".i1").css({
						"background": "url(img/u_nav_icon.png) -25px 2px no-repeat"
					});
					$(".a1").css({
						"color": "#fff"
					});
					
					$(".li2").css({
						"background-color": "#fff"
					});
					$(".i2").css({
						"background": "url(img/u_nav_icon.png) 2px -45px no-repeat"
					});
					$(".a2").css({
						"color": "#333"
					});
					
					li1boole = false;
					li2boole = true;
				});
				
				$("#user_icon").mouseover(function() {
					$(".user-icon-x").css("display","block");
				});
				$(".user-icon-x").mouseleave(function() {
					$(".user-icon-x").css("display","none");
				});
				
			});
			