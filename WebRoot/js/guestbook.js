	
	window.onload = function() {
//		nav_biao(240);//瀵艰埅鏍�
		if(parseInt(jQuery(".bgc").css('height')) < 400){
			jQuery(".bgc").attr('style','height:400px');
			
		}
		
		
		jQuery("#weibo").keyup(function(){
			   var len = jQuery(this).val().length;
			   if(len > 139){
				   jQuery(this).val(jQuery(this).val().substring(0,140));
			   }
			   var num = 140 - len;
			   console.log(num);
			   if(num<0){
				   num = 0;
			   }
			   jQuery("#word").text(num);
			  });
		
		jQuery(".msgbtn").click(function() {
			if(jQuery("#weibo").val() == ""){
//				jQuery("#weibo").css("placeholder","ddddddddddddd");
				jQuery("#weibo").attr('placeholder','不能为空哦！！！！！！！！！！！！！！！！！！');
			}else{
				jQuery("#leaveMsg_form").submit();
			}
		});
	}
//    var biao = 0;
//	var text = document.getElementById("in-text"); 
//	text.onfocus = function() {
//		denglu.style.display = "block";
//		
//	}
//	
//	var quxiao = document.getElementById("-quxiao");
//	var denglu = document.getElementById("-denglu");
//	quxiao.onclick = function() {
//		denglu.style.display = "none";
//	}
//	
//	
//	//鐢ㄦ埛閫�嚭
//	var que = document.getElementById("-que");
//	var top = document.getElementById("-top");
//	que.onclick = function() {
//		this.style.display = "none";
//		
//		
//		
//	}
	

