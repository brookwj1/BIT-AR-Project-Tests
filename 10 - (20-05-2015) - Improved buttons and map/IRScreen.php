<html>
    <head>
    	<meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" >
    	<script type="text/javascript" src="http://dev.junaio.com/arel/js/arel.js"></script>
    	<script type="text/javascript" src="http://code.jquery.com/jquery-1.8.3.min.js"></script>
		<link type="text/css" rel="stylesheet" href="style/IRScreenCS.css">
    	<script type="text/javascript" src="javascript/OlvestonJS.js"></script>
    </head>
	<body>
	
	
	<div id="info"><h2>YOU FOUND AN IMAGE</h2></div>
	
	<div id="Congrats">
	<br><br>
	<p><img class="smiley" src="http://www.imgion.com/images/01/Smiliy-Congratulation-.gif"  alt="Smiley Congratulation" /></p>
	<br><br>
	<h1>YOU FOUND ALL THE TOYS!</h1>
	<br><br><br>			
	</div>
	
	
	<div id="Mglass"><a href="OpLogo.html">
	<img class="displayed2" src="images/Home.png">
	</a></div>
	
	<div id="Mglass">	
	<img class="displayed2" onclick="hide()" src="images/Back.png">
	</div>
	
	<div id="prgrss">
	<img class="displayed2" onclick="progress()" src="images/World.png">
	</div>
	
	
	    <table align="left" id="checks">
		<tr><th><div><img class="flags" id="Sheep" src="images/Flag1.png" onclick="Desc3()" alt="Flags" ><input type="checkbox" id="myCheckS"/></img></div></th></tr>
		<tr><th><div><img class="flags" src="images/Flag2.png" onclick="Desc2()" alt="Flags" ><input type="checkbox" id="myCheckD"/></img></div></th></tr>
		<tr><th><div><img class="flags" src="images/Flag3.png" onclick="Desc1()" alt="Flags" ><input type="checkbox" id="myCheckT"/></img></div></th></tr>
		</table>
		
			
			<div id="worldC">
			<img class="displayed" src="images/RUS.png" onclick="Desc1()" alt="Trasure Hunt Pic" ></div>
			
			<div id="worldA">
			<img class="displayed" src="images/AUS.png" onclick="Desc2()" alt="Trasure Hunt Pic" ></div>
			
			<div id="worldE">
			<img class="displayed" src="images/EUR.png" onclick="Desc3()" alt="Trasure Hunt Pic" ></div>

			<div id="worldACE">
			<img class="displayed" src="images/ALL.png" alt="Trasure Hunt Pic" ></div>
			
			
			
			<div id="TriDesc">
			<br>
			<h1>TRICYCLE</h1><br>
			<p>Description:</p><br>
			<h3>Olveston was built for Dunedin businessman, collector and philanthropist David Theomin, his wife Marie and their two children Edward and Dorothy.
			<br>
			Designed by acclaimed English architect Sir Ernest George, <br> 
			Olveston was built as a family home furnished with fine art, <br>
			furniture and artefacts purchased from all around the world.</h3>
			<br>
			</div>
			
			<div id="SheDesc">
			<br>
			<h1>SHEEP</h1><br>
			<p>Description:</p><br>
			<h3>Olveston was built for Dunedin businessman, collector and philanthropist David Theomin, his wife Marie and their two children Edward and Dorothy.
			<br>
			Designed by acclaimed English architect Sir Ernest George, <br> 
			Olveston was built as a family home furnished with fine art, <br>
			furniture and artefacts purchased from all around the world.</h3>
			<br>
			</div>
			
			<div id="DeeDesc">
			<br>
			<h1>DEER</h1><br>
			<p>Description:</p><br>
			<h3>Olveston was built for Dunedin businessman, collector and philanthropist David Theomin, his wife Marie and their two children Edward and Dorothy.
			<br>
			Designed by acclaimed English architect Sir Ernest George, <br> 
			Olveston was built as a family home furnished with fine art, <br>
			furniture and artefacts purchased from all around the world.</h3>
			<br>
			</div>
			
			
<script>
function hide(){
	$('#Congrats').hide();
	$('#info').hide();
	$('#checks').hide();	
	$('#TriDesc').hide();
	$('#SheDesc').hide();
	$('#DeeDesc').hide();	
	$('#worldC').hide();
	$('#worldA').hide();
	$('#worldE').hide();
	$('#worldACE').hide();
}

function progress() {

	hide(); 
	$('#worldACE').show();
		
	if(document.getElementById("myCheckD").checked == true)
	{$('#worldA').show();
	$('#checks').show();}
	
	if(document.getElementById("myCheckS").checked == true)
	{$('#worldE').show();
	$('#checks').show();}
	
	if(document.getElementById("myCheckT").checked == true)
	{$('#worldC').show();
	$('#checks').show();}
	
}

function Desc1() {
	hide();
	$('#TriDesc').show();
}

function Desc2() {
	hide();
	$('#DeeDesc').show();
}

function Desc3() {
	hide();
	$('#SheDesc').show();
}

function close1() {
	$('#TriDesc').hide();
}

function close2() {
	$('#DeeDesc').hide();
}

function close3() {
	$('#SheDesc').hide();
}

</script>
		
	</body>            
</html>
