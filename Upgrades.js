var UgCount=5;
var UgLevel=new Array(0,0,0,0,0),
	UgCost=new Array(1e2,1e8,1e12,1e16,1e20),
	UgMaxLevel=new Array(7,2,1,5,3),
	UgScaling=new Array(10,30,100,1000,10000);
var UgName=new Array("Cosmic Radiation","2","3","4","5");
var UgDesc=new Array(
	"An intensely energetic ray that boosts qwubble production by 3x.",
	"Wavelength is longer, boosts string, planck particle and neutrino production by 3x.",
	"w",
	"w",
	"w"
);
function BuyUpgrade(x){
	if(energy>=UgCost[x]&&UgLevel[x]<UgMaxLevel[x]){
		UgLevel[x]++;
		energy-=UgCost[x];
		UgCost[x]*=UgScaling[x];
		LoadUpgrade();
	}
}
function PreviewUpgrade(x){
	document.getElementById("pv").innerHTML="Desc: "+UgDesc[x]+"<br>Cost: "+tpc5(UgCost[x])+" Energy.";
}
function DePreviewUpgrade(x){
	document.getElementById("pv").innerHTML="Hover on an upgrade to view its descriptions!";
}
