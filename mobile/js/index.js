(function (window) {
    window.onload = function () {
        var html = document.documentElement;
        var width = html.getBoundingClientRect().width;
        html.style.fontSize = width / 18 + 'px';
        
        
        var menu=document.querySelector(".menu");
        var sidemenu=document.querySelector(".sidemenu");
        var overlay=document.querySelector(".overlay");
        
        menu.onclick=function(){
        	sidemenu.className+=" showside";
        }
        
        overlay.onclick=function(){
        	console.log(sidemenu.classList);
        }
    }
})(window)