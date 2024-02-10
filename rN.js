var rNCount=17;
var rN=new Array(
	"This is the first Newsticker!",
	"Palescreen is a song written by WyvernP and sang by Madol!",
	"Nyan Nyan Nyan Nyan Nyan Nyan Nyan Nyan Nyan Nyan",
	"cbrt(74088)",
	"This game was created on Oct 29 2023!",
	"Congratulations! You got 0.00000 free Energy!",
	"NEWS:HELP!",
	"Warning! Right Angle Arc",
	"Code by lazer",
	"Graphics by hxyxl",
	"Anti-qwubbles... Interesting.",
	"qwqbbles",
	"A Newsticker. How Original.",
	"Layer Omega",
	"Special thanks to WYXkk for discouraging me!",
	"Special thanks to Fallen_Cat for inspiring me to make such a game!",
	"Special thanks to gityx.com for introducing me to idle games!"
);
setInterval(function(){
	document.getElementById("rn").innerHTML=rN[Math.floor(Math.random() * rNCount)];
},10000);
