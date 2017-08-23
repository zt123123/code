$(function(){
	var nowDate=new Date();
	var time=nowDate.toLocaleDateString();
	$("input[type='button']").val(time);
	var _date1 = document.getElementById('date1');
//	var _date2 = document.getElementById('date2');
	var datePicker = new window.DatePicker({
		confirmCbk: function(data) {
	        _date1.value = data.year + '-' + data.month + '-' + data.day;
	        _date2.value = data.year + '-' + data.month + '-' + data.day;
		}
	});
	
	_date1.onclick= function(e) {
		_date1.blur();
		datePicker.open();
	};
//	_date2.onclick = function(e) {
//		_date2.blur();
//		datePicker.open();
//	};
})