// 选项卡插件
(function (window) {
    function Tab(wrapper, item, classname) {
        this.sindex = 0;
        this.wrapper = wrapper;
        this.item = item;
        this.classname = classname;
        this.liAry = wrapper.getElementsByTagName(this.item);

        this.tab();
    }

    Tab.prototype.tab = function () {
        for (var i = 0, len = this.liAry.length; i < len; i++) {
            (function (i) {
                var that = this;//out this
                this.liAry[i].onclick = function () {
                    //inner this
                    this.index = i;
                    that.liAry[that.sindex].className = this.className;
                    if (that.liAry[this.index].className.indexOf("active") < 0) {
                        that.liAry[this.index].className += " active";
                    }
                    that.sindex = this.index;
                };
            }.bind(this))(i)
        }
    };

    window.Tab = Tab;
})(window);