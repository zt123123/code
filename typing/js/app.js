(function(window) {
	window.onload = function() {
		var box = document.querySelector('.box');

		setTimeout(function() {
			box.innerHTML = 'HTML is awesome';
		}, 8000)

		setTimeout(function() {
			box.innerHTML = 'Node is awesome';
		}, 16000)

		setTimeout(function() {
			box.style.animation = 'caret 1s steps(1) infinite';
		}, 20000)

		document.querySelector('.close').onclick = function() {
			var wrapper = document.querySelector('.wrapper');
			wrapper.style.display = 'none';
		}
	}
})(window)