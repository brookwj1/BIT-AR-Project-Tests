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
	
	hide();
	
	//check if there is tracking information available
	if(param[0] !== undefined)
	{
			
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
				document.getElementById("info").style.display = 'block';
				setTimeout(function()
				{document.getElementById("info").style.display = '';
				refresh();
				}, 2000);
				}
				checkall();
			}
			
			if(param[0].getCoordinateSystemID() == 2) //deer
			{
				console.log("FOUND DEER");
				
				Dcounter += 1;
				if(Dcounter == 1){
				document.getElementById("myCheckD").checked = true;
				arel.Media.startSound("Assets/TaDa.mp3");
				document.getElementById("info").style.display = 'block';
				setTimeout(function()
				{document.getElementById("info").style.display = '';
				refresh();
				}, 2000);
				}
				checkall();
			}
			
			if(param[0].getCoordinateSystemID() == 3) //sheep
			{
				console.log("FOUND SHEEP");
				
				Scounter += 1;
				if(Scounter == 1){
				document.getElementById("myCheckS").checked = true;
				arel.Media.startSound("Assets/TaDa.mp3");
				//$('#info').display();
				document.getElementById("info").style.display = 'block';
				setTimeout(function()
				{document.getElementById("info").style.display = '';
				refresh();
				}, 2000);
				}
				checkall();
			}
		}   
		
		//if the pattern is lost tracking
		else{
			console.log("Tracking is lost");
			refresh();
			checkall();
			hide();
		}
		checkall();
	}
};

function hide(){
	
	document.getElementById("info").style.display = '';
	document.getElementById("exit").style.display = '';
	document.getElementById("Congrats").style.display = '';
	document.getElementById("checksheep").style.display = '';
	document.getElementById("checkdeer").style.display = '';
	document.getElementById("checktric").style.display = '';
	document.getElementById("Mglass").style.display = 'block';
	document.getElementById("Mglass2").style.display = '';
	document.getElementById("worldACE").style.display = '';
	document.getElementById("worldA").style.display = '';
	document.getElementById("worldE").style.display = '';
	document.getElementById("worldC").style.display = '';
	document.getElementById("TriDesc").style.display = '';
	document.getElementById("DeeDesc").style.display = '';
	document.getElementById("SheDesc").style.display = '';
	document.getElementById("Tric").style.display = '';
	document.getElementById("Deer").style.display = '';
	document.getElementById("Sheep").style.display = '';
	
	refresh();
}

function refresh() { 
    document.body.style.paddingBottom = document.body.style.paddingBottom == '0px' ? '1px' : '0px';
 }
	
function search(){
//arel.Media.startSound("sounds/click.mp3");
hide();
}

function Desc1() {
//arel.Media.startSound("sounds/click.mp3");
	hide();
	document.getElementById("prgrss").style.display = 'block';
	document.getElementById("Mglass2").style.display = 'block';
	document.getElementById("TriDesc").style.display = 'block';
}

function Desc2() {
//arel.Media.startSound("sounds/click.mp3");
	hide();
	document.getElementById("prgrss").style.display = 'block';
	document.getElementById("Mglass2").style.display = 'block';
	document.getElementById("DeeDesc").style.display = 'block';
}

function Desc3() {
//arel.Media.startSound("sounds/click.mp3");
	hide();
	document.getElementById("prgrss").style.display = 'block';
	document.getElementById("Mglass2").style.display = 'block';
	document.getElementById("SheDesc").style.display = 'block';
}

function checkall() {
	if (document.getElementById("myCheckD").checked == true && document.getElementById("myCheckS").checked == true && document.getElementById("myCheckT").checked == true)
			Checked += 1;	
			if((Checked == 1)||(Checked > 1)){
			setTimeout(function()
			{document.getElementById("Congrats").style.display = 'block';
			 document.getElementById("exit").style.display = 'block';
			}, 1000);
		  }
}

function progress() {
	hide();

	document.getElementById("prgrss").style.display = '';
	document.getElementById("Mglass").style.display = '';
	document.getElementById("Mglass2").style.display = 'block';
	document.getElementById("worldACE").style.display = 'block';
	
	//arel.Media.startSound("sounds/click.mp3");
		
	if(document.getElementById("myCheckD").checked == true){
	document.getElementById("checkdeer").style.display = 'block';
	document.getElementById("worldA").style.display = 'block';
	}
	
	if(document.getElementById("myCheckS").checked == true){
	document.getElementById("checksheep").style.display = 'block';
	document.getElementById("worldE").style.display = 'block';
	}
	
	if(document.getElementById("myCheckT").checked == true){
	document.getElementById("checktric").style.display = 'block';
	document.getElementById("worldC").style.display = 'block';
	}
}
