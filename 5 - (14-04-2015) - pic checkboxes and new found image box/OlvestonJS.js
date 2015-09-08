var timerIDTrackingInfo = undefined;
var Dcounter = 0;
var Scounter = 0;
var Tcounter = 0;

arel.sceneReady(function()
{
	//set a listener to tracking to get information about when the image is tracked
	arel.Events.setListener(arel.Scene, function(type, param){trackingHandler(type, param);});
});

function trackingHandler(type, param)
{
	//check if there is tracking information available
	if(param[0] !== undefined)
	{
		//if the pattern is found, trigger a website, movie or sound depending on the image found
		if(type && type == arel.Events.Scene.ONTRACKING && param[0].getState() == arel.Tracking.STATE_TRACKING)
		{
			if(param[0].getCoordinateSystemID() == 1) //Deer
			{
				Dcounter += 1;
				
				if(Dcounter == 1){
				
				arel.Media.startSound("sounds/TaDa.mp3");
				document.getElementById("myCheckD").checked = true;
				$('#info').show();
				
				check();
				}
			}
			
			if(param[0].getCoordinateSystemID() == 2) //Sheep
			{
				Scounter += 1;
				
				if(Scounter == 1){
				
				arel.Media.startSound("sounds/TaDa.mp3");
				document.getElementById("myCheckS").checked = true;
				$('#info').show();
				
				check();
				}
			}
			
			if(param[0].getCoordinateSystemID() == 3) //Tricycle
			{
				Tcounter += 1;
				
				if(Tcounter == 1){
				
				arel.Media.startSound("sounds/TaDa.mp3");
				document.getElementById("myCheckT").checked = true;
				$('#info').show();
				
				check();
				}
			}
			
			if(document.getElementById("myCheckS").checked == true && document.getElementById("myCheckD").checked == true && document.getElementById("myCheckT").checked == true)
			{
				$('#worldACE').show();
				
				setTimeout(function(){
				$('#worldACE').hide();
				$('#Congrats').show();
				}, 6000);
			}	
		}
		else{
		hide();} 
	}
};

function hide(){
		$('#info').hide();
		$('#Congrats').hide();		
		$('#worldC').hide();
		$('#worldA').hide();
		$('#worldE').hide();
		$('#worldAC').hide();
		$('#worldAE').hide();
		$('#worldACE').hide();
		$('#worldEC').hide();
}

function check(){

				if(document.getElementById("myCheckS").checked == false && document.getElementById("myCheckT").checked == false){
				$('#worldC').show();}
				if(document.getElementById("myCheckS").checked == false && document.getElementById("myCheckT").checked == true){
				$('#worldEC').show();}
				if(document.getElementById("myCheckS").checked == true && document.getElementById("myCheckT").checked == false){
				$('#worldAC').show();}
				
				if(document.getElementById("myCheckD").checked == false && document.getElementById("myCheckT").checked == false){
				$('#worldA').show();}	
				if(document.getElementById("myCheckD").checked == false && document.getElementById("myCheckT").checked == true){
				$('#worldAE').show();}	
				if(document.getElementById("myCheckD").checked == true && document.getElementById("myCheckT").checked == false){
				$('#worldAC').show();}	

				if(document.getElementById("myCheckD").checked == false && document.getElementById("myCheckS").checked == false){
				$('#worldE').show();}
				if(document.getElementById("myCheckD").checked == false && document.getElementById("myCheckS").checked == true){
				$('#worldAE').show();}
				if(document.getElementById("myCheckD").checked == true && document.getElementById("myCheckS").checked == false){
				$('#worldEC').show();}				
				
}