window.onload = function() {
	var box = document.getElementById("box");
	var boys = box.children;// 日期函数
	var arr = [ "星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六" ];
	var date = new Date(); // 声明日期函数
	boys[0].innerHTML = date.getFullYear() + "年" + (date.getMonth() + 1) + "月"
			+ date.getDate() + "日" + "  " + arr[date.getDay()];
	boys[1].innerHTML = date.getDate(); // 今天的日子

	// -----------------------------------------------------------------放大镜
	var info_img = document.getElementById("info_img"); // 获得最大的盒子
	var small = info_img.children[0]; // 获得small 小图片 350盒子
	var big = info_img.children[1]; // 获得 大图片 800 盒子
	var mask = small.children[1]; // 小的黄色盒子
	var bigImage = big.children[0]; // 大盒子里面的图片
	small.onmouseover = function() { // 鼠标经过显示出他们
		mask.style.display = "block";
		big.style.display = "block";
	}
	small.onmouseout = function() {
		mask.style.display = "none";
		big.style.display = "none";
	}
	// 鼠标在small 内移动
	var x = 0;
	var y = 0;
	small.onmousemove = function(event) {
		var event = event || window.event;
		x = event.clientX - this.offsetParent.offsetLeft - mask.offsetWidth / 2; // 再某个盒子内的坐标
		// alert(this.offsetLeft);
		y = event.pageY - this.offsetParent.offsetTop - mask.offsetHeight / 2;
		console.log(event.pageY);
		if (x < 0) {
			x = 0;
		} else if (x > small.offsetWidth - mask.offsetWidth) {
			x = small.offsetWidth - mask.offsetWidth;
		}
		if (y < 0) {
			y = 0;
		} else if (y > small.offsetHeight - mask.offsetHeight) {
			y = small.offsetHeight - mask.offsetHeight;
		}
		mask.style.left = x + "px";
		mask.style.top = y + "px";
		/*
		 * 计算 ： 夫子 一顿吃 2个馒头 娇子 一顿 4个馒头 问 夫子今天吃了 3个馒头 娇子应该吃几个？
		 */
		/*
		 * 计算出他们的倍数 4 / 2 2倍 3 * 2 == 6个
		 */
		/*
		 * 大图盒子 / 小图盒子 倍数 我们 再小图移动的距离 * 倍数 == 大图的位置
		 */
		bigImage.style.left = -x * 1.65 * big.offsetWidth / small.offsetWidth
				+ "px";
		bigImage.style.top = -y * 1.65 * big.offsetHeight / small.offsetHeight
				+ "px";

	}
}