(function(window, document) {
	window.onload = function() {
		getwidth();
	}
	window.onresize = function() {
		getwidth();
	}

	function getwidth() {
		var html = document.documentElement;
		var width = html.getBoundingClientRect().width;
		html.style.fontSize = width / 18 + 'px';
	}
})(window, document)