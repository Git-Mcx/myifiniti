   var music = document.getElementById("music");
   var musicPlay = document.getElementById("musicplay");
   var video1 = document.getElementById("video");
   
  var  switch0 = true;
   music.onclick = function(){
		if(switch0==true){
   			musicPlay.pause();
   			music.src = "img/music-off.png";
   			music.style.animationPlayState = "paused";
			switch0 = false;
		}	
		else if(switch0==false){
			switch0=true;
			musicPlay.play();
   			music.style.animationPlayState = "running";
   			music.src = "img/dkyy.png";
		}
   }
   video.onclick = function(){
   		window.open('https://v.qq.com/x/cover/fmvlb0yhhxmr8by/d015659ph3b.html?ptag=sogou.movie.free&fromvsogou=1 ');
   }

