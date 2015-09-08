var timerIDTrackingInfo = undefined;


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
		//arel.Media.startSound("sounds/Opening.mp3");
 		setTimeout(function(){				
		$(this).parent('#splashscreen').fadeOut(500);}, 5000);	
	}
};

