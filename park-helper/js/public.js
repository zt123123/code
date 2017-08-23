/* 页面跳转函数 */

function jump(ele, url) {
	if (url == ""||url == undefined) {
		window.location.href = ele + ".html";
	} else {
		$(ele).click(function(e) {
			window.event? window.event.cancelBubble = true : e.stopPropagation();
			window.location.href = url + ".html";
		});
	}
}

/* 页面返回 */

function back(ele) {
	$(ele).click(function() {
		window.history.back();
	});
}