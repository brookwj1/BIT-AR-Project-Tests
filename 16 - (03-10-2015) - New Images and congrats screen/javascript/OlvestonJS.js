var timerIDTrackingInfo = undefined;
var Dcounter = 0;
var Scounter = 0;
var Tcounter = 0;
var dlcounter = 0;
var Checked = 0;

arel.sceneReady(function()
{	
	//set a listener to tracking to get information about when the image is tracked
	arel.Events.setListener(arel.Scene, function(type, param){trackingHandler(type, param);});
	hide();
	$('#frame').show();
});

function trackingHandler(type, param)
{
	//check if there is tracking information available
	if(param[0] !== undefined)
	{	
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
				$('#frame').hide();
 				setTimeout(function(){				
				$('#info').hide();
				$('#frame').show();}, 5000);
				}
				checkAll();
			}
			
			if(param[0].getCoordinateSystemID() == 2) //Sheep
			{
				Scounter += 1;
				
				if(Scounter == 1){
				arel.Media.startSound("sounds/TaDa.mp3");
				document.getElementById("myCheckS").checked = true;
				$('#info').show();
				$('#frame').hide();
 				setTimeout(function(){				
				$('#info').hide();
				$('#frame').show();}, 5000);
				}
				checkAll();
			}
			
			if(param[0].getCoordinateSystemID() == 3) //Tricycle
			{
				Tcounter += 1;
				
				if(Tcounter == 1){
				arel.Media.startSound("sounds/TaDa.mp3");
				document.getElementById("myCheckT").checked = true;
				$('#info').show();
				$('#frame').hide();
 				setTimeout(function(){				
				$('#info').hide();
				$('#frame').show();}, 5000);
				}
				checkAll();
			}

			if(param[0].getCoordinateSystemID() == 4) //Doll
			{
				dlcounter += 1;
				
				if(dlcounter == 1){
				arel.Media.startSound("sounds/TaDa.mp3");
				//document.getElementById("myCheckT").checked = true;
				$('#info').show();
				$('#frame').hide();
 				setTimeout(function(){				
				$('#info').hide();
				$('#frame').show();}, 5000);
				}
				checkAll();
			}			
		}
		else{
		hide();
		} 
		checkAll();
	}
};

function hide(){
	
	$('#prgrss').show();
	$('#Mglass').show();
	$('#header').show();
	$('#show').hide();	
	$('#frame').hide();
	$('#Congrats').hide();
	$('#home').hide();
	$('#Mglass2').hide();
	$('#info').hide();
	$('#tableofimages').hide();
	$('#exit').hide();

	
	$('#img1').hide();
	$('#img2').hide();
	$('#img3').hide();
	$('#img4').hide();
	$('#img5').hide();
	$('#img6').hide();
	$('#img7').hide();
	$('#img8').hide();
	$('#img9').hide();
	$('#img10').hide();
	
	$('#star1').hide();
	$('#star2').hide();
	$('#star3').hide();
	$('#star4').hide();
	$('#star5').hide();
	$('#star6').hide();
	$('#star7').hide();
	$('#star8').hide();
	$('#star9').hide();
	$('#star10').hide();
	
	$('#checksheep').hide();
	$('#checkdeer').hide();
	$('#checktric').hide();
	
	$('#TriDesc').hide();
	$('#SheDesc').hide();
	$('#DeeDesc').hide();	
	$('#worldC').hide();
	$('#worldA').hide();
	$('#worldE').hide();
	$('#worldACE').hide();
	
	$('#Sheep').hide();
	$('#Deer').hide();
	$('#Tric').hide();
}

function close(){	
arel.Media.startSound("sounds/click.mp3");
	$('#TriDesc').hide();
	$('#SheDesc').hide();
	$('#DeeDesc').hide();	
}

function changeSource() {
   var img = document.getElementsByTagName('img')[0];
   img.setAttribute('src', img.getAttribute('src').replace("placeHolder.png", "image.png"));
}

function restart(){	
	arel.Media.startSound("sounds/click.mp3");
	document.getElementById("myCheckD").checked = false;
	document.getElementById("myCheckT").checked = false;
	document.getElementById("myCheckS").checked = false;
	
	if((Dcounter == 1) || (Dcounter > 1)){
	Dcounter = 0;}
	if((Scounter == 1) || (Scounter > 1)){
	Scounter = 0;}
	if((Tcounter == 1) || (Tcounter > 1)){
	Tcounter = 0;}	
	if((Checked == 1) || (Checked > 1)){
	Checked = 0;}
	
	hide();
	
	$('#prgrss').hide();
	$('#Mglass').hide();
	$('#header').hide();	
	$('#home').show();
}

function search(){
arel.Media.startSound("sounds/click.mp3");
hide();
$('#frame').show();
}

function progress() {
	hide();
	arel.Media.startSound("sounds/click.mp3");
	$('#prgrss').hide();
	
	$('#tableofimages').show();
	// $('#worldACE').show();
    $('#Mglass2').show();
	
	$('#star1').show();
	$('#star2').show();
	$('#star3').show();
	$('#star4').show();
	$('#star5').show();
	$('#star6').show();
	$('#star7').show();
	$('#star8').show();
	$('#star9').show();
	$('#star10').show();
	
	// $('#Mglass').show();
	
	// $('#myCheckD').hide();
	// $('#myCheckS').hide();
	// $('#myCheckT').hide();
		
	if(document.getElementById("myCheckD").checked == true){
	$('#star2').hide();
	$('#img2').show();
	// $('#checkdeer').show();
	// $('#worldA').show();
	// $('#Deer').show();
	}
	
	if(document.getElementById("myCheckS").checked == true){
	$('#star8').hide();
	$('#img8').show();
	// $('#checksheep').show();
	// $('#worldE').show();
	// $('#Sheep').show();
	}
	
	if(document.getElementById("myCheckT").checked == true){
	$('#star5').hide();
	$('#img5').show();
	// $('#checktric').show();
	// $('#worldC').show();
	// $('#Tric').show();
	}
}

function Desc1() {
arel.Media.startSound("sounds/click.mp3");
	hide();
	$('#prgrss').show();
	$('#Mglass2').show();
	$('#TriDesc').show();
}

function Desc2() {
arel.Media.startSound("sounds/click.mp3");
	hide();
	$('#prgrss').show();
	$('#Mglass2').show();
	$('#DeeDesc').show();
}

function Desc3() {
arel.Media.startSound("sounds/click.mp3");
	hide();
	$('#prgrss').show();
	$('#Mglass2').show();
	$('#SheDesc').show();
}

function checkAll(){	
	if(document.getElementById("myCheckS").checked == true && document.getElementById("myCheckD").checked == true && document.getElementById("myCheckT").checked == true)
	{
	Checked += 1;	
	if(Checked == 1){
	    setTimeout(function(){
		hide();	
		$('#prgrss').hide();
        $('#Congrats').show();
		arel.Media.startSound("sounds/Fireworks.mp3");
		$('#exit').show();
		}, 5000); 
		}
	}	
}  