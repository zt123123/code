var oContainer = document.getElementById("container");
var oBox = oContainer.getElementsByClassName("box");

var oBoxArr = [];
var minHeight = 0;
var posObj = {};
var objOther = [];
var oBoxHeightArr = [];
var oBoxArr = [];
var minIndex = 0;

window.onload = function() {
	init();
}

function init() {
	getChildren();
	oBoxArr = getOboxArr();
	minHeight = getMinHeigth(oBoxArr);
	posObj = getMinPosition(oBoxArr, minHeight);
	setPostion();
}

function getChildren() {
	var oBoxArr = [];
	for(var i = 0; i < oBox.length; i++) {
		oBoxArr.push(oBox[i]);
	}
	return oBoxArr;
}

function getOboxArr() {
	oBoxHeightArr = [];
	oBoxArr = getChildren();

	var winW = document.documentElement.clientWidth || document.body.clientWidth;
	var num = Math.floor(winW / oBoxArr[0].offsetWidth);

	oContainer.style.width = num * oBoxArr[0].offsetWidth + "px";

	for(var i = 0; i < oBoxArr.length; i++) {
		if(i < num) {
			oBoxHeightArr[i] = oBoxArr[i].clientHeight;
		} else {
			objOther.push(oBoxArr[i]);
		}
	}

	return oBoxHeightArr;
}

function getMinHeigth(oBoxHeightArr) {

	minHeight = Math.min.apply(null, oBoxHeightArr);

	return minHeight;
}

function getMinPosition(oBoxHeightArr, minHeight) {
	var posObj = {};
	for(var i = 0; i < oBoxHeightArr.length; i++) {
		if(oBoxHeightArr[i] == minHeight) {
			minIndex = i;

			posObj.posLeft = oBox[i].offsetLeft;
			posObj.posTop = minHeight;
			break;
		}
	}
	return posObj;
}

function setPostion() {
	for(var i = 0; i < objOther.length; i++) {
		objOther[i].style.cssText = "position:absolute;left:" + posObj.posLeft + "px;top:" + posObj.posTop + "px";
		minHeight += objOther[i].offsetHeight;

		oBoxHeightArr[minIndex] = minHeight;
		getMinHeigth(oBoxHeightArr)
		posObj = getMinPosition(oBoxHeightArr, minHeight);

	}
}

window.onscroll = function() {
	var str = "";
	var picArr = [
		"1.jpg", "2.jpg", "4.jpg"
	];
	var sTop = document.documentElement.scrollTop;
	var cHeigth = document.documentElement.clientHeight;
	var boxHeight = oContainer.scrollHeight;
	console.log(sTop, cHeigth, boxHeight);

	if(sTop + cHeigth >= boxHeight) {
		for(var i = 0; i < picArr.length; i++) {
			picArr[i]

			str += '<div class="box">';
			str += '<div class="box-img">';
			str += `<img src="./img/${picArr[i]}">`;
			str += '</div></div>';
		}
		oContainer.innerHTML += str;
		init();
	}
}