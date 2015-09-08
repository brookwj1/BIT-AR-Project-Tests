var timerIDTrackingInfo = undefined;
var Dcounter = 0;
var Scounter = 0;
var Tcounter = 0;
var Checked = 0;

arel.sceneReady(function()
{
	//set a listener to tracking to get information about when the image is tracked
		oMemory = new memory();
	arel.Events.setListener(arel.Scene, function(type, param){trackingHandler(type, param);});
});

function restart(button)
{
	button.style.backgroundColor='#fff';
	//restart the channel
	arel.Scene.switchChannel(oMemory.channelID);
}

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
				$('#checks').hide();
				$('#info').show();
				/*document.getElementById("info").click(checkDeer());*/

 				setTimeout(function(){				
				$('#info').hide();}, 5000);				
				setTimeout(function(){				
				checkDeer();}, 6000);
				setTimeout(function(){				
				hide();
				$('#checks').show();}, 10000);
				}
			}
			
			if(param[0].getCoordinateSystemID() == 2) //Sheep
			{
				Scounter += 1;
				
				if(Scounter == 1){
				arel.Media.startSound("sounds/TaDa.mp3");
				document.getElementById("myCheckS").checked = true;
				$('#checks').hide();
				$('#info').show();
				
 				setTimeout(function(){				
				$('#info').hide();}, 5000);
				setTimeout(function(){				
				checkSheep();}, 6000);
				setTimeout(function(){				
				hide();
				$('#checks').show();}, 10000); 
				}
			}
			
			if(param[0].getCoordinateSystemID() == 3) //Tricycle
			{
				Tcounter += 1;
				
				if(Tcounter == 1){
				arel.Media.startSound("sounds/TaDa.mp3");
				document.getElementById("myCheckT").checked = true;
				$('#checks').hide();
				$('#info').show();
				
 				setTimeout(function(){				
				$('#info').hide();}, 5000);
				setTimeout(function(){				
				checkTricycle();}, 6000);
				setTimeout(function(){				
				hide();
				$('#checks').show();}, 10000); 
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
	$('#worldC').hide();
	$('#worldA').hide();
	$('#worldE').hide();
	$('#worldAC').hide();
	$('#worldAE').hide();
	$('#worldACE').hide();
	$('#worldEC').hide();
}

function memory()
{
	this.channelID = undefined;
}

function checkDeer(){
	$('#info').hide();
	if(document.getElementById("myCheckD").checked == true && document.getElementById("myCheckS").checked == false && document.getElementById("myCheckT").checked == false){
	$('#worldC').show();}
	if(document.getElementById("myCheckD").checked == true && document.getElementById("myCheckS").checked == false && document.getElementById("myCheckT").checked == true){
	$('#worldEC').show();}
	if(document.getElementById("myCheckD").checked == true && document.getElementById("myCheckS").checked == true && document.getElementById("myCheckT").checked == false){
	$('#worldAC').show();}
} 

function checkSheep(){
	if(document.getElementById("myCheckS").checked == true && document.getElementById("myCheckD").checked == false && document.getElementById("myCheckT").checked == false){
	$('#worldA').show();}	
	if(document.getElementById("myCheckS").checked == true && document.getElementById("myCheckD").checked == false && document.getElementById("myCheckT").checked == true){
	$('#worldAE').show();}	
	if(document.getElementById("myCheckS").checked == true && document.getElementById("myCheckD").checked == true && document.getElementById("myCheckT").checked == false){
	$('#worldAC').show();}	
}

function checkTricycle(){
	if(document.getElementById("myCheckT").checked == true && document.getElementById("myCheckD").checked == false && document.getElementById("myCheckS").checked == false){
	$('#worldE').show();}
	if(document.getElementById("myCheckT").checked == true && document.getElementById("myCheckD").checked == false && document.getElementById("myCheckS").checked == true){
	$('#worldAE').show();}
	if(document.getElementById("myCheckT").checked == true && document.getElementById("myCheckD").checked == true && document.getElementById("myCheckS").checked == false){
	$('#worldEC').show();}				
}

function checkAll(){	
	if(document.getElementById("myCheckS").checked == true && document.getElementById("myCheckD").checked == true && document.getElementById("myCheckT").checked == true)
	{
	Checked += 1;	
	if(Checked == 1){
		setTimeout(function(){				
		$('#worldACE').show();}, 5000);
		setTimeout(function(){
		hide();
		$('#checks').hide();
		$('#Congrats').show();}, 10000);
		}
	}	
}