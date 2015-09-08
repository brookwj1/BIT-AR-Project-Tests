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
			if(param[0].getCoordinateSystemID() == 1){
			arel.Media.startSound("TaDa.mp3");
			$('#info').show();
			setTimeout(function()
			{ 
				document.getElementById("myCheckD").checked = true;
			    $('#info').hide();
				setTimeout(function()
			{ 
				if(document.getElementById("myCheckS").checked == false && document.getElementById("myCheckT").checked == false){
				document.getElementById("myCheckD").checked = true;
				$('#worldC').show();
				setTimeout(function()
			{ 
				document.getElementById("myCheckD").checked = true;}, 1500);}
				
				if(document.getElementById("myCheckS").checked == false && document.getElementById("myCheckT").checked == true){
				document.getElementById("myCheckD").checked = true;
				$('#worldEC').show();
				setTimeout(function()
			{ 
				document.getElementById("myCheckD").checked = true;}, 1500);}
				if(document.getElementById("myCheckS").checked == true && document.getElementById("myCheckT").checked == false){
				document.getElementById("myCheckD").checked = true;
				$('#worldAC').show();
				setTimeout(function()
			{ 
				document.getElementById("myCheckD").checked = true;}, 1500);}
				if(document.getElementById("myCheckS").checked == true && document.getElementById("myCheckT").checked == true){
				document.getElementById("myCheckD").checked = true;
				$('#worldACE').show();
				setTimeout(function()
			{ 
				document.getElementById("myCheckD").checked = true;}, 1500);}	
			}, 1500);}, 1500);
			$('#worldC').hide();
			$('#worldEC').hide();
			$('#worldAC').hide();
			$('#worldACE').hide();
			document.getElementById("myCheckD").checked = true;
			}
			
			if(param[0].getCoordinateSystemID() == 2){
			arel.Media.startSound("TaDa.mp3");
			$('#info').show();
			setTimeout(function()
			{ 
				document.getElementById("myCheckS").checked = true;
			    $('#info').hide();
				setTimeout(function()
			{ 
				if(document.getElementById("myCheckD").checked == false && document.getElementById("myCheckT").checked == false){
				document.getElementById("myCheckS").checked = true;
				$('#worldA').show();
				setTimeout(function()
			{ 
				document.getElementById("myCheckS").checked = true;}, 1500);}
				
				if(document.getElementById("myCheckD").checked == false && document.getElementById("myCheckT").checked == true){
				document.getElementById("myCheckS").checked = true;
				$('#worldAE').show();
				setTimeout(function()
			{ 
				document.getElementById("myCheckS").checked = true;}, 1500);}
				if(document.getElementById("myCheckD").checked == true && document.getElementById("myCheckT").checked == false){
				document.getElementById("myCheckS").checked = true;
				$('#worldAC').show();
				setTimeout(function()
			{ 
				document.getElementById("myCheckS").checked = true;}, 1500);}
				if(document.getElementById("myCheckD").checked == true && document.getElementById("myCheckT").checked == true){
				document.getElementById("myCheckS").checked = true;
				$('#worldACE').show();
				setTimeout(function()
			{ 
				document.getElementById("myCheckS").checked = true;}, 1500);}	
			}, 1500);}, 1500);
			$('#worldA').hide();
			$('#worldAC').hide();
			$('#worldAE').hide();
			$('#worldACE').hide();
			document.getElementById("myCheckS").checked = true;
			}
			
			if(param[0].getCoordinateSystemID() == 3){
			arel.Media.startSound("TaDa.mp3");
			$('#info').show();
			setTimeout(function()
			{ 
				document.getElementById("myCheckT").checked = true;
			    $('#info').hide();
				setTimeout(function()
			{ 
				if(document.getElementById("myCheckD").checked == false && document.getElementById("myCheckS").checked == false){
				document.getElementById("myCheckT").checked = true;
				$('#worldE').show();
				setTimeout(function()
			{ 
				document.getElementById("myCheckT").checked = true;}, 1500);}
				
				if(document.getElementById("myCheckD").checked == false && document.getElementById("myCheckS").checked == true){
				document.getElementById("myCheckT").checked = true;
				$('#worldAE').show();
				setTimeout(function()
			{ 
				document.getElementById("myCheckT").checked = true;}, 1500);}
				if(document.getElementById("myCheckD").checked == true && document.getElementById("myCheckS").checked == false){
				document.getElementById("myCheckT").checked = true;
				$('#worldEC').show();
				setTimeout(function()
			{ 
				document.getElementById("myCheckT").checked = true;}, 1500);}
				if(document.getElementById("myCheckD").checked == true && document.getElementById("myCheckS").checked == true){
				document.getElementById("myCheckT").checked = true;
				$('#worldACE').show();
				setTimeout(function()
			{ 
				document.getElementById("myCheckT").checked = true;}, 1500);}	
			}, 1500);}, 1500);
			$('#worldE').hide();
			$('#worldEC').hide();
			$('#worldAE').hide();
			$('#worldACE').hide();
			document.getElementById("myCheckT").checked = true;
			}
				
			if (document.getElementById("myCheckD").checked == true && document.getElementById("myCheckS").checked == true && document.getElementById("myCheckT").checked == true)
			setTimeout(function()
			{ 
				arel.Media.openWebsite("http://willbrook123.t15.org/project/Congrats.html");

			}, 5500); 
		}	
		else
		{
		$('#info').hide();
		setTimeout(function(){ 		
		$('#worldC').hide();
		$('#worldA').hide();
		$('#worldE').hide();
		$('#worldAC').hide();
		$('#worldAE').hide();
		$('#worldACE').hide();
		$('#worldEC').hide();}, 2500);
		}		
	}
};

// World Map Mouseover Function
var world_map_visible = new Array();
function update_map_mouseover(area) {

/* 	if (area) {
		if (world_map_visible[area] == "1") {
		} else {
			if (document.getElementById('world_map_' + area).style.display == "block") {

				world_map_visible[area] = "1";

			} else {

				world_map_visible[area] = "0";
				document.getElementById('world_map_' + area).style.display = "block";

			}
		}
	} */
}


// World Map Mouseout Function
function update_map_mouseout(area) {

/* 	if (area) {
		if (world_map_visible[area] == "1") {
		} else {
			world_map_visible[area] = "0";
			document.getElementById('world_map_' + area).style.display = "none";
		}
	} */
}


// World Map OnClick Function
function update_map_onclick(area) {

	if (area) {
		if (world_map_visible[area] == "1") {
			world_map_visible[area] = "0";
			document.getElementById('world_map_' + area).style.display = "none";
		} else {
			world_map_visible[area] = "1";
			document.getElementById('world_map_' + area).style.display = "block";
		}
	}
}


// World Map Save Function
function save_map() {

	var world_map_areas = new Array();

	world_map_areas['canada'] = "1";
	world_map_areas['north_america'] = "1";
	world_map_areas['south_america'] = "1";
	world_map_areas['south_pole'] = "1";
	world_map_areas['europe'] = "1";
	world_map_areas['africa'] = "1";
	world_map_areas['eurasia'] = "1";
	world_map_areas['australia'] = "1";

	for (i in world_map_areas) {
		if (i) {
			if (world_map_areas[i] == "1") {
				var map_i = "world_map_" + i;
				if (document.getElementById(map_i).style.display == "block") {
					world_map_visible[i] = "1";
				}
			}
		}
	}

	var save_map_string = ",";
	for (i in world_map_visible) {
		if (i) {
			if (world_map_visible[i] == "1") {
				save_map_string = save_map_string + i + ','
			}
		}
	}

	// save_map_string holds the values for the selected continents seperated by commas.
	// e.g. canada,europe,africa

	alert("var save_map_string = \n" + save_map_string);

}