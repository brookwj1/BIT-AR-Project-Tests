var Dcounter = 0;
var Scounter = 0;
var Tcounter = 0;
var Checked = 0;

arel.sceneReady(function()
{
	console.log("sceneReady");
	//set a listener to tracking to get information about when the image is tracked
	arel.Events.setListener(arel.Scene, function(type, param){trackingHandler(type, param);});
	
});

function trackingHandler(type, param)
{
	
	//check if there is tracking information available
	if(param[0] !== undefined)
	{
		hide();
			
		//if the pattern is found
		if(type && type == arel.Events.Scene.ONTRACKING && param[0].getState() == arel.Tracking.STATE_TRACKING)
		{
			console.log("Tracking is active");
			
			if(param[0].getCoordinateSystemID() == 1) //tric
			{
				console.log("FOUND TRICYCLE");
				
				Tcounter += 1;
				if(Tcounter == 1){
				document.getElementById("myCheckT").checked = true;
				arel.Media.startSound("Assets/TaDa.mp3");
				}
			}
			
			if(param[0].getCoordinateSystemID() == 2) //deer
			{
				console.log("FOUND DEER");
				
				Dcounter += 1;
				if(Dcounter == 1){
				document.getElementById("myCheckD").checked = true;
				arel.Media.startSound("Assets/TaDa.mp3");
				}
			}
			
			if(param[0].getCoordinateSystemID() == 3) //sheep
			{
				console.log("FOUND SHEEP");
				
				Tcounter += 1;
				if(Tcounter == 1){
				document.getElementById("myCheckS").checked = true;
				arel.Media.startSound("Assets/TaDa.mp3");
				$('#info').display();
				}	
			}
			
			if (document.getElementById("myCheckD").checked == true && document.getElementById("myCheckS").checked == true && document.getElementById("myCheckT").checked == true)
			Checked += 1;	
			if(Checked == 1){
			setTimeout(function()
			{ arel.Media.openWebsite("http://willbrook123.t15.org/project/Congrats.html");}, 1500);
		  }
		}   
		
		//if the pattern is lost tracking
		else{
			console.log("Tracking is lost");
			$('#info').hide();
		}
	}
};

function hide(){

	$('#info').hide();
}
	