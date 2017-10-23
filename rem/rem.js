(function(window) {
	function rem() {
		var rem = 100; //1rem代表100px
		var desW = 640; //设计稿宽度
		var deviceW = document.documentElement.clientWidth; //设备宽度
		var ratio = (deviceW / desW) * rem; //比例

		if(deviceW > desW) {
			document.documentElement.style.fontSize = rem + "px";
			return;
		}
		document.documentElement.style.fontSize = ratio + "px";
	}

	document.addEventListener("DOMContentLoaded", rem);

	window.onresize = rem;
})(window);