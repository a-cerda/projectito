var p = document.getElementById("kepaza");
var cosas = ["soy","un","maquina","con","el","spray","jejeje..."];

var i = 0;
var audio = document.getElementById("counter");
audio.currentTime = 0.87;
setTimeout(audio.play(),300);
function cambiazo(i){
	setTimeout(function(){
		p.innerHTML = cosas[i]
		i++;
		if(i<cosas.length){
			cambiazo(i);
		}
	},240)
}
cambiazo(i);
