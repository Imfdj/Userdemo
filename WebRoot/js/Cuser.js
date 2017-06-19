
// $(document).ready(function(){

	

// }); 

	//禁用启用操作确定
	function issure (id,state){
//		alert(state);
//		alert(typeof(state));
			if(!confirm("are you sure?")){
				
				return false;
			}
			if(state == 1){
				state = 0;
			}else{
				state = 1;
			}
//			window.location.href="/userdemo/servlet/alterUserStateServlet?id="+id;
			window.location.href="/userdemo/servlet/alterUserStateServlet?id="+id+"&&state="+state;
	}
	

		
		

