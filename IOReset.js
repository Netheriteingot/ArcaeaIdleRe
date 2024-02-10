function Wipe(){
	energy=10,atom=0,chaos=0;
	unlockedMemory=0,unlockedChaos=0;
	timestamp=0;
	unlockedBuildingCount=1;
	buildingCount=new Array(),trueBuildingCount=new Array();
	for(var i=0;i<5;i++)buildingCount[i]=0;
	for(var i=0;i<5;i++)trueBuildingCount[i]=0;
	UgLevel=new Array(0,0,0,0,0),
	UgCost=new Array(1e4),
	UgMaxLevel=new Array(3);
	buildingCost=new Array(10,100,10000,1e+8,1e+16);
	initBuildingCost=new Array(10,100,10000,1e+8,1e+16);
	UgLevel=new Array(0,0,0,0,0),
	UgCost=new Array(1e2,1e8,1e12,1e16,1e20),
	UgMaxLevel=new Array(7,2,1,5,3),
	SetTab1();
	Save();
	Load();
}
function Save(){
	localStorage.setItem('energy',energy);
	localStorage.setItem('atom',atom);
	localStorage.setItem('chaos',chaos);
	localStorage.setItem('unlockedMemory',unlockedMemory);
	localStorage.setItem('unlockedChaos',unlockedChaos);
	localStorage.setItem('timestamp',timestamp);
	localStorage.setItem('unlockedBuildingCount',unlockedBuildingCount);
	for(var i=0;i<5;i++)localStorage.setItem('buildingCount'+i,buildingCount[i]);
	for(var i=0;i<5;i++)localStorage.setItem('buildingCost'+i,buildingCost[i]);
	for(var i=0;i<5;i++)localStorage.setItem('trueBuildingCount'+i,trueBuildingCount[i]);
	for(var i=0;i<UgCount;i++)localStorage.setItem('UgLevel'+i,UgLevel[i]);
	for(var i=0;i<UgCount;i++)localStorage.setItem('UgCost'+i,UgCost[i]);
	for(var i=0;i<UgCount;i++)localStorage.setItem('UgMaxLevel'+i,UgMaxLevel[i]);
}
function Load(){
	energy=Number(localStorage.getItem('energy'));
	atom=Number(localStorage.getItem('atom'));
	chaos=Number(localStorage.getItem('chaos'));
	unlockedMemory=Number(localStorage.getItem('unlockedMemory'));
	unlockedChaos=Number(localStorage.getItem('unlockedChaos'));
	timestamp=Number(localStorage.getItem('timestamp'));
	unlockedBuildingCount=Number(localStorage.getItem('unlockedBuildingCount'));
	for(var i=0;i<5;i++)buildingCount[i]=Number(localStorage.getItem('buildingCount'+i));
	for(var i=0;i<5;i++)buildingCost[i]=Number(localStorage.getItem('buildingCost'+i));
	for(var i=0;i<5;i++)trueBuildingCount[i]=Number(localStorage.getItem('trueBuildingCount'+i));
	for(var i=0;i<UgCount;i++)UgLevel[i]=Number(localStorage.getItem('UgLevel'+i));
	for(var i=0;i<UgCount;i++)UgCost[i]=Number(localStorage.getItem('UgCost'+i));
	for(var i=0;i<UgCount;i++)UgMaxLevel[i]=Number(localStorage.getItem('UgMaxLevel'+i));
	SetTab1();
}
setInterval(function(){Save()},5000);
