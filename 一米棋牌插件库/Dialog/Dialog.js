/**
 * 作用：对话框
 * 作者：张天
 * 方法：show 显示    hide 隐藏   支持链式调用
 * 用法示例： 
 * var dialog=new Dialog("用户自定义标题", "用户自定义内容", function() {
 *		alert("用户取消");
 *	}, function() {
 *		alert("用户确认");
 * });
 * dialog.hide([callback]);支持回调函数
 * dialog.show([callback]);支持回调函数
 */

var Dialog = (function(window, document) {
	var cssObj = {
		wrapperCss: "font-size: 14px;background-color: #fff;max-width:300px;position: absolute;left: 50%;top: 50%;z-index: 999999;-webkit-transition:all 0.5s;transition:all 0.5s;-webkit-transform: translate(-50%, -50%);transform: translate(-50%, -50%);width: 65%;padding: 10px;background-color: #fff;text-align: center;border: 1px solid #eee;border-radius: 10px;-webkit-box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);",
		titleCss: "padding: 5px 0;border-bottom: 1px solid #ebeef5;",
		bodyCss: "padding: 5px 0;font-size: 16px;",
		btnCancelCss: "color: #606266;border-color: #dcdfe6;border: 1px solid #dcdfe6;border-radius: 5px;padding: 5px 10px;outline:none;",
		btnSureCss: "margin-left:20px;color: #fff;background-color: #409eff;border: 1px solid;border-color: #409eff;border-radius: 5px;padding: 5px 10px;outline:none;"
	};

	function Dialog(title, content, cancelFn, sureFn, type) {
		this.timer = null;
		this.wrapperDiv = document.createElement("div");
		this.titleDiv = document.createElement("div");
		this.bodyDiv = document.createElement("div");
		this.optDiv = document.createElement("div");

		this.btnSure = document.createElement("button");
		this.btnCancel = document.createElement("button");

		this.title = title || "提醒";
		this.content = content || "这是默认内容";
		this.cancelFn = cancelFn || function() {};
		this.sureFn = sureFn || function() {};
		this.type = type || 0;

		console.log(this.title)

		//单例模式
		if(Dialog.unique !== undefined) {
			Dialog.unique.show();
			Dialog.unique.autoHide();
			Dialog.unique.titleDiv.innerHTML = this.title;
			Dialog.unique.bodyDiv.innerHTML = this.content;
			return Dialog.unique;
		}

		this.init();
		this.bindEvent();

		Dialog.unique = this;
	}

	Dialog.prototype.init = function() {

		this.wrapperDiv.style.cssText = cssObj.wrapperCss
		this.titleDiv.style.cssText = cssObj.titleCss;
		this.bodyDiv.style.cssText = cssObj.bodyCss;

		this.btnCancel.style.cssText = cssObj.btnCancelCss;
		this.btnSure.style.cssText = cssObj.btnSureCss

		this.titleDiv.innerHTML = this.title;
		this.bodyDiv.innerHTML = this.content;
		this.btnSure.innerHTML = "确认";
		this.btnCancel.innerHTML = "取消";

		this.wrapperDiv.appendChild(this.titleDiv);
		this.wrapperDiv.appendChild(this.bodyDiv);
		this.wrapperDiv.appendChild(this.optDiv);
		this.optDiv.appendChild(this.btnCancel);
		this.optDiv.appendChild(this.btnSure);

		document.body.appendChild(this.wrapperDiv);
		this.autoHide();
		return this;
	}

	Dialog.prototype.autoHide = function() {
		var _this = this;
		clearTimeout(this.timer);
		this.timer = setTimeout(function() {
			_this.hide();
		}, 5000)
	}

	Dialog.prototype.bindEvent = function() {
		var _this = this;
		this.btnCancel.addEventListener("click", function() {
			_this.cancelFn && _this.cancelFn();

			_this.hide();
		})
		this.btnSure.addEventListener("click", function() {
			_this.sureFn && _this.sureFn();

			_this.hide();
		})
	}

	Dialog.prototype.show = function(callback) {
		this.wrapperDiv.style.opacity = 1;
		this.wrapperDiv.style.zIndex = "9999999";
		callback && callback();

		return this;
	}

	Dialog.prototype.hide = function(callback) {
		this.wrapperDiv.style.opacity = 0;
		this.wrapperDiv.style.zIndex = "-999";
		callback && callback();

		return this;
	}

	window.Dialog = Dialog;
	return Dialog;
})(this, document);