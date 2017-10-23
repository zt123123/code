(function(doc, win) {
	var docEl = doc.documentElement,//设备宽度
		rem = 100, //1rem代表100px
		desW = 640, //设计稿宽度
		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
		recalc = function() {
			var clientWidth = docEl.clientWidth;
			if (!clientWidth) return;
			if (clientWidth >= desW) {
				docEl.style.fontSize = rem + "px";
			} else {
				docEl.style.fontSize = rem * (clientWidth / desW) + 'px';
			}
		};

	if (!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);