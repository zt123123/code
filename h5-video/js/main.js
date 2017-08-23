
		var mute = document.getElementById('muted');
		var video = document.getElementById('video');
		var play_pause = document.getElementById('play');
		var videolength = document.getElementById('videolength');
		var nowlength = document.getElementById('nowlength');
		var timerange = document.getElementById('timerange');
		var volumerange = document.getElementById('volumerange');
		var play_range_length = 600;
		var vol_range_length = 100;
		window.onload = function() {
			getTime(video.duration, videolength);
			setInterval(getNow, 1000);
			setInterval(playTime, 1000);
			//			playTime(video.duration,play_range_length,video.currentTime,timerange);
			//			playTime();
		}

		function getTime(duration, label) {
			var h = parseInt(duration / 3600);
			var m = parseInt(duration % 3600 / 60);
			var s = parseInt(duration % 60);

			h = h < 10 ? "0" + h : h;
			m = m < 10 ? "0" + m : m;
			s = s < 10 ? "0" + s : s;

			label.innerHTML = h + ":" + m + ":" + s;
		}

		function getNow(now) {
			getTime(video.currentTime, nowlength);
			// alert(now);
			// setInterval(getNow(), 1000);
		}

		function play() {

			if(video.paused) {
				video.play();
				play_pause.style.backgroundImage = "url(img/pause.png)";
			} else {
				video.pause();
				play_pause.style.backgroundImage = "url(img/play.png)";
			}
		}

		function muted() {

			//			alert(audio.muted);
			if(!video.muted) {
				video.volume = 0;
				video.muted = true;
				volumerange.value=0;
				mute.style.backgroundImage = "url(img/muted2.png)";
			} else {
				video.volume = 0.5;
				video.muted = false;
				volumerange.value=50;
				mute.style.backgroundImage = "url(img/muted1.png)";
			}
		}

		function playTime() {
			var rate = play_range_length / video.duration;
			timerange.value = rate * video.currentTime;
//			console.log(timerange.value);
		}

		function changetime() {
			var rate = play_range_length / video.duration;
			//			timerange.value=rate*video.currentTime;
			video.currentTime = timerange.value / rate;
			video.play();
			play_pause.style.backgroundImage = "url(img/pause.png)";
			//			clearInterval(timer2);
		}
		
		function changevolume() {
			video.muted = false;
			video.volume=volumerange.value/vol_range_length;
			if(video.volume==0){
				mute.style.backgroundImage = "url(img/muted2.png)";
			}else{
				mute.style.backgroundImage = "url(img/muted1.png)";
			}
		}
		
		function fullscreen () {
			video.webkitRequestFullScreen();
		}