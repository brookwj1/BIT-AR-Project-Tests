var timerIDTrackingInfo = undefined;
var Dcounter = 0;
var Scounter = 0;
var Tcounter = 0;
var Checked = 0;

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
		arel.Media.startSound("sounds/Opening.mp3");
		if(Checked == 0){
		$('#Congrats').hide();}
		
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
				
 				setTimeout(function(){				
				$('#info').hide();}, 5000);
				}
			}
			
			if(param[0].getCoordinateSystemID() == 2) //Sheep
			{
				Scounter += 1;
				
				if(Scounter == 1){
				arel.Media.startSound("sounds/TaDa.mp3");
				document.getElementById("myCheckS").checked = true;
				$('#info').show();
				
 				setTimeout(function(){				
				$('#info').hide();}, 5000);
				}
			}
			
			if(param[0].getCoordinateSystemID() == 3) //Tricycle
			{
				Tcounter += 1;
				
				if(Tcounter == 1){
				arel.Media.startSound("sounds/TaDa.mp3");
				document.getElementById("myCheckT").checked = true;
				$('#info').show();
				
 				setTimeout(function(){				
				$('#info').hide();}, 5000);
				}
			}	
		}
		else{
		hide();
		} 
		checkAll();
	}
};

function hide(){
	$('#info').hide();	
	$('#checks').hide();	
	$('#worldC').hide();
	$('#worldA').hide();
	$('#worldE').hide();
	$('#worldACE').hide();
}

function checkAll(){	
	if(document.getElementById("myCheckS").checked == true && document.getElementById("myCheckD").checked == true && document.getElementById("myCheckT").checked == true)
	{
	Checked += 1;	
	if(Checked == 1){
		setTimeout(function(){
		hide();
		$('#Congrats').show();}, 10000);
		}
	}	
}  