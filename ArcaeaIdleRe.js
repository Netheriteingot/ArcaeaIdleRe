var energy=10,atom=0,chaos=0;
var unlockedMemory=0,unlockedChaos=0;
var timestamp=0;
var tab=1;
var unlockedBuildingCount=1;
var buildingCount=new Array(0,0,0,0,0),trueBuildingCount=new Array(0,0,0,0,0),buildingCost=new Array(10,100,10000,1e+8,1e+16);
var initBuildingCost=new Array(10,100,10000,1e+8,1e+16);
function UpdateSideBar(){
	document.getElementById("ll1").innerHTML="Resources:";
	document.getElementById("ll2").innerHTML="Energy:"+tpc5(energy);
	if(unlockedMemory)document.getElementById("ll3").innerHTML="Atoms:"+tpc5(atom);
	if(unlockedChaos)document.getElementById("ll4").innerHTML="chaos:"+tpc5(chaos);
	if(timestamp>0)document.getElementById("ll5").innerHTML="timestamp:"+tpc5(timestamp);
	document.getElementById("ll6").innerHTML="Tab:"+tab;
};
setInterval(function(){UpdateSideBar()},50);
function load(){
	Load();
	SetTab1();
	document.getElementById("rn").innerHTML=rN[Math.floor(Math.random() * rNCount)];
	Tab();
}
function Tab(){
	if(unlockedBuildingCount<3)document.getElementById("tab").innerHTML="<button onclick=\"SetTab1()\">Buildings</button> | <button onclick=\"SetTab0()\">Settings</button>";
	else document.getElementById("tab").innerHTML="<button onclick=\"SetTab1()\">Buildings</button> | <button onclick=\"SetTab2()\">Upgrades</button> | <button onclick=\"SetTab0()\">Settings</button>";
}
function tpc5(x){
	return Number(x.toPrecision(5));
}
function UpdateBuilding(){
	if(unlockedBuildingCount>=1)document.getElementById("bu1").innerHTML="Qwubble: "+buildingCount[0]+" ["+trueBuildingCount[0]+"]";
	if(unlockedBuildingCount>=2)document.getElementById("bu2").innerHTML="String: "+buildingCount[1]+" ["+trueBuildingCount[1]+"]";
	if(unlockedBuildingCount>=3)document.getElementById("bu3").innerHTML="Plank Particle: "+buildingCount[2]+" ["+trueBuildingCount[2]+"]";
	if(unlockedBuildingCount>=4)document.getElementById("bu4").innerHTML="Neutrino: "+buildingCount[3]+" ["+trueBuildingCount[3]+"]";
	if(unlockedBuildingCount>=5)document.getElementById("bu5").innerHTML="Electron: "+buildingCount[4]+" ["+trueBuildingCount[4]+"]";
}
function UnloadBuilding(){
	document.getElementById("bu1").innerHTML="";
	document.getElementById("bu2").innerHTML="";
	document.getElementById("bu3").innerHTML="";
	document.getElementById("bu4").innerHTML="";
	document.getElementById("bu5").innerHTML="";
}
function UpdateBuildingCost(){
	if(unlockedBuildingCount>=1)document.getElementById("bb1").innerHTML="<button onclick=\"BuyBuilding(0)\">Cost: "+tpc5(buildingCost[0])+" Energy.</button>";
	if(unlockedBuildingCount>=2)document.getElementById("bb2").innerHTML="<button onclick=\"BuyBuilding(1)\">Cost: "+tpc5(buildingCost[1])+" Energy.</button>";
	if(unlockedBuildingCount>=3)document.getElementById("bb3").innerHTML="<button onclick=\"BuyBuilding(2)\">Cost: "+tpc5(buildingCost[2])+" Energy.</button>";
	if(unlockedBuildingCount>=4)document.getElementById("bb4").innerHTML="<button onclick=\"BuyBuilding(3)\">Cost: "+tpc5(buildingCost[3])+" Energy.</button>";
	if(unlockedBuildingCount>=5)document.getElementById("bb5").innerHTML="<button onclick=\"BuyBuilding(4)\">Cost: "+tpc5(buildingCost[4])+" Energy.</button>";
}
function UpdateBuildingProd(){
	if(unlockedBuildingCount>=1)document.getElementById("bp1").innerHTML="Producing: "+tpc5(buildingCount[0]*Math.pow(3,UgLevel[0]));
	if(unlockedBuildingCount>=2)document.getElementById("bp2").innerHTML="Producing: "+tpc5(buildingCount[1]*0.1*Math.pow(3,UgLevel[1]));
	if(unlockedBuildingCount>=3)document.getElementById("bp3").innerHTML="Producing: "+tpc5(buildingCount[2]*0.1*Math.pow(3,UgLevel[1]));
	if(unlockedBuildingCount>=4)document.getElementById("bp4").innerHTML="Producing: "+tpc5(buildingCount[3]*0.1*Math.pow(3,UgLevel[1])*(buildingCount[4]*2+1));
	if(unlockedBuildingCount>=5&&buildingCount[4]>=1)document.getElementById("bp5").innerHTML="Improving: "+tpc5(buildingCount[4]*2+1);
	if(unlockedBuildingCount>=5&&buildingCount[4]==0)document.getElementById("bp5").innerHTML="Improving: 1.0000";
}
function UnloadBuildingCost(){
	document.getElementById("bb1").innerHTML="";
	document.getElementById("bb2").innerHTML="";
	document.getElementById("bb3").innerHTML="";
	document.getElementById("bb4").innerHTML="";
	document.getElementById("bb5").innerHTML="";
}
function UnloadBuildingProd(){
	document.getElementById("bp1").innerHTML="";
	document.getElementById("bp2").innerHTML="";
	document.getElementById("bp3").innerHTML="";
	document.getElementById("bp4").innerHTML="";
	document.getElementById("bp5").innerHTML="";
}
function UpdateSettings(){
	document.getElementById("se1").innerHTML="<button onclick=\"Save()\">Save</button>";
	document.getElementById("se2").innerHTML="<button onclick=\"Load()\">Load</button>";
	document.getElementById("se3").innerHTML="<button onclick=\"Import()\">Import</button>";
	document.getElementById("se4").innerHTML="<button onclick=\"Wipe()\">Wipe</button>";
}
function UnloadSettings(){
	document.getElementById("se1").innerHTML="";
	document.getElementById("se2").innerHTML="";
	document.getElementById("se3").innerHTML="";
	document.getElementById("se4").innerHTML="";
}
function PaveUpgrade(){
	document.getElementById("upgrades").innerHTML="\
		<div id=\"Ug1\" class=\"Ug1\"></div>\n\
		<div id=\"Ug2\" class=\"Ug2\"></div>\n\
		<div id=\"Ug3\" class=\"Ug3\"></div>\n\
		<div id=\"Ug4\" class=\"Ug4\"></div>\n\
		<div id=\"Ug5\" class=\"Ug5\"></div>\n\
		<div id=\"pv\" class=\"pv\"> Hover on an upgrade to view its descriptions! </div>\n\
	";
}
function LoadUpgrade(){
	document.getElementById("Ug1").innerHTML="<img src=\"32x32.png\" alt=\"Cosmic Radiation\" onmouseover=\"PreviewUpgrade(0)\" onmouseout=\"DePreviewUpgrade(0)\" onclick=\"BuyUpgrade(0)\"><div id=\"Ug1t\" class=\"Ug1t\">"+UgLevel[0]+" / "+UgMaxLevel[0]+"</div>";
	document.getElementById("Ug2").innerHTML="<img src=\"32x32.png\" alt=\"Cosmic Radiation\" onmouseover=\"PreviewUpgrade(1)\" onmouseout=\"DePreviewUpgrade(1)\" onclick=\"BuyUpgrade(1)\"><div id=\"Ug2t\" class=\"Ug1t\">"+UgLevel[1]+" / "+UgMaxLevel[1]+"</div>";
	document.getElementById("Ug3").innerHTML="<img src=\"32x32.png\" alt=\"Cosmic Radiation\" onmouseover=\"PreviewUpgrade(2)\" onmouseout=\"DePreviewUpgrade(2)\" onclick=\"BuyUpgrade(2)\"><div id=\"Ug3t\" class=\"Ug1t\">"+UgLevel[2]+" / "+UgMaxLevel[2]+"</div>";
	document.getElementById("Ug4").innerHTML="<img src=\"32x32.png\" alt=\"Cosmic Radiation\" onmouseover=\"PreviewUpgrade(3)\" onmouseout=\"DePreviewUpgrade(3)\" onclick=\"BuyUpgrade(3)\"><div id=\"Ug4t\" class=\"Ug1t\">"+UgLevel[3]+" / "+UgMaxLevel[3]+"</div>";
	document.getElementById("Ug5").innerHTML="<img src=\"32x32.png\" alt=\"Cosmic Radiation\" onmouseover=\"PreviewUpgrade(4)\" onmouseout=\"DePreviewUpgrade(4)\" onclick=\"BuyUpgrade(4)\"><div id=\"Ug5t\" class=\"Ug1t\">"+UgLevel[4]+" / "+UgMaxLevel[4]+"</div>";
}
function UnloadUpgrade(){
	document.getElementById("upgrades").innerHTML="";
}
function BuyBuilding(x){
	if(energy>=buildingCost[x]){
		energy-=buildingCost[x];
		buildingCount[x]++;
		trueBuildingCount[x]++;
		buildingCost[x]=tpc5(Math.pow(1.2,trueBuildingCount[x])*initBuildingCost[x]);
		if(x==unlockedBuildingCount-1|((x==0)&(unlockedBuildingCount==1)))unlockedBuildingCount++;
		UpdateBuilding();
		UpdateBuildingCost();
		Tab();
	}
}
function SetTab1(){
	tab=1;
	UpdateBuilding();
	UpdateBuildingCost();
	UpdateBuildingProd();
	UnloadUpgrade();
	UnloadSettings();
}
function SetTab2(){
	tab=2;
	UnloadBuilding();
	UnloadBuildingCost();
	UnloadBuildingProd();
	PaveUpgrade();
	LoadUpgrade();
	UnloadSettings();
}
function SetTab0(){
	tab=0;
	UnloadBuilding();
	UnloadBuildingCost();
	UnloadBuildingProd();
	UnloadUpgrade();
	UpdateSettings();
}
