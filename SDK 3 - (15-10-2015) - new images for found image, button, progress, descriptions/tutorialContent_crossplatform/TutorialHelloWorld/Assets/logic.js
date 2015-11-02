var Dcounter = 0;
var Scounter = 0;
var Tcounter = 0;
var Pcounter = 0;
var Swcounter = 0;
var Dlcounter = 0;
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
	document.getElementById("prgrss").style.display = 'block';
	
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
				}, 3000);
				refresh();
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
				}, 3000);
				refresh();
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
				document.getElementById("info").style.display = 'block';
				setTimeout(function()
				{document.getElementById("info").style.display = '';
				refresh();
				}, 3000);
				refresh();
				}
				checkall();
			}
			
			if(param[0].getCoordinateSystemID() == 4) //Piano
			{
				console.log("FOUND PIANO");
				
				Pcounter += 1;
				if(Pcounter == 1){
				document.getElementById("myCheckP").checked = true;
				arel.Media.startSound("Assets/TaDa.mp3");
				document.getElementById("info").style.display = 'block';
				setTimeout(function()
				{document.getElementById("info").style.display = '';
				refresh();
				}, 3000);
				refresh();
				}
				checkall();
			}
			
			if(param[0].getCoordinateSystemID() == 5) //Sword
			{
				console.log("FOUND SWORD");
				
				Swcounter += 1;
				if(Swcounter == 1){
				document.getElementById("myCheckSw").checked = true;
				arel.Media.startSound("Assets/TaDa.mp3");
				document.getElementById("info").style.display = 'block';
				setTimeout(function()
				{document.getElementById("info").style.display = '';
				refresh();
				}, 3000);
				refresh();
				}
				checkall();
			}
			
		    if(param[0].getCoordinateSystemID() == 6) //Dolls
			{
				console.log("FOUND DOLLS");
				
				Dlcounter += 1;
				if(Dlcounter == 1){
				document.getElementById("myCheckDl").checked = true;
				arel.Media.startSound("Assets/TaDa.mp3");
				document.getElementById("info").style.display = 'block';
				setTimeout(function()
				{document.getElementById("info").style.display = '';
				refresh();
				}, 3000);
				refresh();
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
	document.getElementById("checkpiano").style.display = '';
	document.getElementById("checkdoll").style.display = '';
	document.getElementById("checksword").style.display = '';
	
	document.getElementById("prgrss").style.display = 'block';
	document.getElementById("Mglass2").style.display = '';
	document.getElementById("TriDesc").style.display = '';
	document.getElementById("DeeDesc").style.display = '';
	document.getElementById("SheDesc").style.display = '';

	document.getElementById("tableofimages").style.display = '';
    document.getElementById("img1").style.display = '';
	document.getElementById("img2").style.display = '';
	document.getElementById("img3").style.display = '';
	document.getElementById("img4").style.display = '';
	document.getElementById("img5").style.display = '';
	document.getElementById("img6").style.display = '';
	document.getElementById("img7").style.display = '';
	document.getElementById("img8").style.display = '';
	document.getElementById("img9").style.display = '';
	document.getElementById("img10").style.display = '';
	
    document.getElementById("1").style.display = '';
	document.getElementById("2").style.display = '';
	document.getElementById("3").style.display = '';
	document.getElementById("4").style.display = '';
	document.getElementById("5").style.display = '';
	document.getElementById("6").style.display = '';
	document.getElementById("7").style.display = '';
	document.getElementById("8").style.display = '';
	document.getElementById("9").style.display = '';
	document.getElementById("10").style.display = '';
	 
	document.getElementById("star1").style.display = '';
	document.getElementById("star2").style.display = '';
	document.getElementById("star3").style.display = '';
	document.getElementById("star4").style.display = '';
	document.getElementById("star5").style.display = '';
	document.getElementById("star6").style.display = '';
	document.getElementById("star7").style.display = '';
	document.getElementById("star8").style.display = '';
	document.getElementById("star9").style.display = '';
	document.getElementById("star10").style.display = '';

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
	if (document.getElementById("myCheckD").checked == true && 
		document.getElementById("myCheckS").checked == true && 
		document.getElementById("myCheckT").checked == true)
			Checked += 1;	
			if((Checked == 1)||(Checked > 1)){
			setTimeout(function()
			{document.getElementById("prgrss").style.display = ''
			 document.getElementById("Congrats").style.display = 'block';
			 document.getElementById("exit").style.display = 'block';
			}, 1000);
			refresh();
		  }
}

function progress() {
	hide();

	document.getElementById("prgrss").style.display = '';
	document.getElementById("Mglass2").style.display = 'block';
	document.getElementById("tableofimages").style.display = 'block';
	document.getElementById("star1").style.display = 'block';
	document.getElementById("star2").style.display = 'block';
	document.getElementById("star3").style.display = 'block';
	document.getElementById("star4").style.display = 'block';
	document.getElementById("star5").style.display = 'block';
	document.getElementById("star6").style.display = 'block';
	document.getElementById("star7").style.display = 'block';
	document.getElementById("star8").style.display = 'block';
	document.getElementById("star9").style.display = 'block';
	document.getElementById("star10").style.display = 'block';
	
	//arel.Media.startSound("sounds/click.mp3");
		
	if(document.getElementById("myCheckD").checked == true){
	document.getElementById("star2").style.display = 'none';
	document.getElementById("img2").style.display = 'block';
	}
	
	if(document.getElementById("myCheckS").checked == true){
	document.getElementById("star8").style.display = 'none';
	document.getElementById("img8").style.display = 'block';
	}
	
	if(document.getElementById("myCheckT").checked == true){
	document.getElementById("star5").style.display = 'none';
	document.getElementById("img5").style.display = 'block';
	}
}
