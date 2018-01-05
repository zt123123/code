/**
 * 作用：遮罩层
 * 作者：张天
 * 方法：show 显示    hide 隐藏   支持链式调用
 * 用法示例： 
 * var pop = new PopLayer("22222").hide().show();
 * pop.hide([callback]);支持回调函数
 * pop.show([callback]);支持回调函数
 */

var PopLayer = (function(window, document) {
	function PopLayer(content) {

		this.wrapperDiv = document.createElement("div");
		this.contentDiv = document.createElement("div");
		this.content = content || "拼命加载中...";

		this.init();
	}

	PopLayer.prototype.init = function() {

		this.wrapperDiv.style.cssText = "position: absolute;z-index: 9999999;left: 0;top: 0;right: 0;bottom: 0;width: 100%;height: 100%;background-color: rgba(0, 0, 0, 0.6);"
		this.contentDiv.style.cssText = "font-size: 20px;position: absolute;top: 50%;left: 50%;-webkit-transform: translate(-50%, -50%);transform: translate(-50%, -50%);";

		this.contentDiv.innerHTML = this.content;
		this.wrapperDiv.appendChild(this.contentDiv);
		document.body.appendChild(this.wrapperDiv);

		return this;
	}

	PopLayer.prototype.show = function(callback) {
		this.wrapperDiv.style.display = "block";
		this.wrapperDiv.style.zIndex = "9999999";
		callback && callback();

		return this;
	}

	PopLayer.prototype.hide = function(callback) {
		this.wrapperDiv.style.display = "none";
		this.wrapperDiv.style.zIndex = "-999";
		callback && callback();

		return this;
	}

	window.PopLayer = PopLayer;
	return PopLayer;
})(window, document);