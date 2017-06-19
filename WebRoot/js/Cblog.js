
// $(document).ready(function(){

//	$("#_cancel").click(function() {
//		$("#_reply").hide();
//	});
//	$("#_rep").click(function() {
//		
//		$("#_reply").show();
//
//	});
	

// }); 

//href="${pageContext.request.contextPath }/servlet/removeBlogServlet?id=${b.id }"

	function issure (id){
		
			if(!confirm("are you sure?")){
				return false;
			}
			
			window.location.href="/userdemo/servlet/removeBlogServlet?id="+id;
	}

	function isalter (id,e){
		var e=e||window.event;
		var top = e.pageY - e.clientY + 150;
		
		console.log(top);
		jQuery(".alterunit").attr('style','top:'+top+'px');
//		alert(jQuery("#msg_"+id).html());
		jQuery("#alter_id").val(id);
		jQuery("#alter_msg").val(jQuery("#msg_"+id).html());
		
		jQuery(".alterunit").show();
	}
	
	jQuery(".alterunit-cancel").click(function() {
		jQuery(".alterunit").hide();
	});

		
		

