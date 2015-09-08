var timerIDTrackingInfo = undefined;

arel.sceneReady(function()
{
	//Just for Debuging purposes
	//arel.Debug.activate();
	//arel.Debug.deactivateArelLogStream();
	
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
			if(param[0].getCoordinateSystemID() == 1)
				document.getElementById("myCheckD").checked = true;
			if(param[0].getCoordinateSystemID() == 2)
				document.getElementById("myCheckS").checked = true;
			if(param[0].getCoordinateSystemID() == 3)
				document.getElementById("myCheckT").checked = true;
				
			if (document.getElementById("myCheckD").checked == true && document.getElementById("myCheckS").checked == true && document.getElementById("myCheckT").checked == true)
			setTimeout(function()
			{ 
				arel.Media.openWebsite("http://willbrook123.t15.org/project/Congrats.html");

			}, 1500); 
		}		
	}
};