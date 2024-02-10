function OnTickExecute(){
	energy+=0.05*(buildingCount[0]*Math.pow(3,UgLevel[0]));energy=tpc5(energy);
	buildingCount[0]+=0.005*(buildingCount[1]*Math.pow(3,UgLevel[1]));buildingCount[0]=tpc5(buildingCount[0]);
	buildingCount[1]+=0.005*(buildingCount[2]*Math.pow(3,UgLevel[1]));buildingCount[1]=tpc5(buildingCount[1]);
	buildingCount[2]+=0.005*(buildingCount[3]*Math.pow(3,UgLevel[1])*(buildingCount[4]*2+1));buildingCount[2]=tpc5(buildingCount[2]);
	if(tab==1)UpdateBuilding();
	if(tab==1)UpdateBuildingProd();
}
setInterval(function(){OnTickExecute()},50);
