var timerIDTrackingInfo = undefined;

arel.sceneReady(function()
{
	//for Debuging purposes
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
		//if pattern found, trigger a website, movie or sound depending on the image found
		if(type && type == arel.Events.Scene.ONTRACKING && param[0].getState() == arel.Tracking.STATE_TRACKING)
		{
			$('#info').html("Scan the referenced images to trigger a video, a website or a sound (make sure to have your sound turned on :D)");
			
			if(param[0].getCoordinateSystemID() == 1)
				document.getElementById("myCheckD").checked = true;
			if(param[0].getCoordinateSystemID() == 2)
				document.getElementById("myCheckS").checked = true;
			if(param[0].getCoordinateSystemID() == 3)
				document.getElementById("myCheckT").checked = true;
		}		
	}
};