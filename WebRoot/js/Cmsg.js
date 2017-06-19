
// $(document).ready(function(){

	

// }); 

	//É¾³ýÈ·¶¨
	function issure (id){
		
			if(!confirm("are you sure?")){
				return false;
			}
			
			window.location.href="/userdemo/servlet/removeMsgServlet?id="+id;
	}
	
	function isalter (id,e){
		var e=e||window.event;
		var top = e.pageY - e.clientY + 150;
		
		console.log(top);
		jQuery(".alterunit").attr('style','top:'+top+'px');
		
		jQuery("#alter_id").val(id);
		jQuery(".alterunit").show();
	}

	jQuery(".alterunit-cancel").click(function() {//-------------------Òþ²Ø»Ø¸´¿ò°´Å¥
		jQuery(".alterunit").hide();
	});
		
		

