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



			<div id="worldA">
			<br />
			<img class="displayed" src="images/AUS.png" alt="Trasure Hunt Pic" >
			<br><div id="wrldDesc">
			<h3>Olveston was built for Dunedin businessman, collector and philanthropist David Theomin, his wife Marie and their two children Edward and Dorothy.
			<br>
			Designed by acclaimed English architect Sir Ernest George, Olveston was built as a family home furnished with fine art, furniture and artefacts purchased from all around the world.<h3/>
			<br></div>
			<br>
			<img class="displayed2" onclick="hide()" src="images/Back.png">
			</div>
			
			
				if(document.getElementById("myCheckS").checked == false || document.getElementById("myCheckD").checked == false || document.getElementById("myCheckT").checked == false)
	{$('#worldACE').show();
	$('#wrldDesc').show();}