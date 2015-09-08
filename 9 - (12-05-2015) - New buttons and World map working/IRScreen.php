<html>
    <head>
    	<meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" >
    	<script type="text/javascript" src="http://dev.junaio.com/arel/js/arel.js"></script>
    	<script type="text/javascript" src="http://code.jquery.com/jquery-1.8.3.min.js"></script>
		<link type="text/css" rel="stylesheet" href="style/IRScreenCS.css">
    	<script type="text/javascript" src="OlvestonJS.js"></script>
    </head>
	<body>
	
	
	<div id="info">YOU FOUND AN IMAGE</div>
	
	<div id="Congrats">
	<br><br>
	<p><img class="smiley" src="http://www.imgion.com/images/01/Smiliy-Congratulation-.gif"  alt="Smiley Congratulation" /></p>
	<br><br>
	<h1>YOU FOUND ALL THE TOYS!</h1>
	<br><br><br>			
	<img class="displayed2" onclick="hide()" src="images/Back.png"><br>
	</div>
	
	
	<div id="Mglass">
	<a href="index.php">
	<img class="displayed2" src="images/Home.png">
	</a>
	</div>
	
	<div id="Mglass">
	<img class="displayed2" onclick="closeWin()" src="images/World.png">
	</div>
	
	
	    <table align="left" id="checks">
		<tr><th><br><img class="flags" src="images/Flag1.png" alt="Flags" ></th></tr>
		<tr><th><input type="checkbox" id="myCheckS"></th></tr>
		<tr><th><img class="flags" src="images/Flag2.png" alt="Flags" ></th></tr>
		<tr><th><input type="checkbox" id="myCheckD"></th></tr>
		<tr><th><img class="flags" src="images/Flag3.png" alt="Flags" ></th></tr>
		<tr><th><input type="checkbox" id="myCheckT"></th></tr>
		</table>
		
			<div id="center">
			<div id="worldC">
			<br />
			<img class="displayed" src="images/CANADA.png" alt="Trasure Hunt Pic" >
			<br><div id="wrldDesc">
			<h3>Olveston was built for Dunedin businessman, collector and philanthropist David Theomin, his wife Marie and their two children Edward and Dorothy.
			<br>
			Designed by acclaimed English architect Sir Ernest George, Olveston was built as a family home furnished with fine art, furniture and artefacts purchased from all around the world.<h3/>
			<br></div>
			<br>
			<img class="displayed2" onclick="hide()" src="images/Back.png">
			</div>
			
			<div id="worldA">
			<br />
			<img class="displayed" src="images/AFRICA.png" alt="Trasure Hunt Pic" >
			<br><div id="wrldDesc">
			<h3>Olveston was built for Dunedin businessman, collector and philanthropist David Theomin, his wife Marie and their two children Edward and Dorothy.
			<br>
			Designed by acclaimed English architect Sir Ernest George, Olveston was built as a family home furnished with fine art, furniture and artefacts purchased from all around the world.<h3/>
			<br></div>
			<br>
			<img class="displayed2" onclick="hide()" src="images/Back.png">
			</div>
			
			<div id="worldE">
			<br />
			<img class="displayed" src="images/EUROPE.png" alt="Trasure Hunt Pic" >
			<br><div id="wrldDesc">
			<h3>Olveston was built for Dunedin businessman, collector and philanthropist David Theomin, his wife Marie and their two children Edward and Dorothy.
			<br>
			Designed by acclaimed English architect Sir Ernest George, Olveston was built as a family home furnished with fine art, furniture and artefacts purchased from all around the world.<h3/>
			<br></div>
			<br>
			<img class="displayed2" onclick="hide()" src="images/Back.png">
			</div>
			
			<div id="worldEC">
			<br />
			<img class="displayed" src="images/EC.png" alt="Trasure Hunt Pic" >
			<br><div id="wrldDesc">
			<h3>Olveston was built for Dunedin businessman, collector and philanthropist David Theomin, his wife Marie and their two children Edward and Dorothy.
			<br>
			Designed by acclaimed English architect Sir Ernest George, Olveston was built as a family home furnished with fine art, furniture and artefacts purchased from all around the world.<h3/>
			<br></div>
			<br>
			<img class="displayed2" onclick="hide()" src="images/Back.png">
			</div>
			
			<div id="worldAE">
			<br />
			<img class="displayed" src="images/AE.png" alt="Trasure Hunt Pic" >
			<br><div id="wrldDesc">
			<h3>Olveston was built for Dunedin businessman, collector and philanthropist David Theomin, his wife Marie and their two children Edward and Dorothy.
			<br>
			Designed by acclaimed English architect Sir Ernest George, Olveston was built as a family home furnished with fine art, furniture and artefacts purchased from all around the world.<h3/>
			<br></div>
			<br>
			<img class="displayed2" onclick="hide()" src="images/Back.png">
			</div>
			
			<div id="worldAC">
			<br />
			<img class="displayed" src="images/AC.png" alt="Trasure Hunt Pic" >
			<br><div id="wrldDesc">
			<h3>Olveston was built for Dunedin businessman, collector and philanthropist David Theomin, his wife Marie and their two children Edward and Dorothy.
			<br>
			Designed by acclaimed English architect Sir Ernest George, Olveston was built as a family home furnished with fine art, furniture and artefacts purchased from all around the world.<h3/>
			<br></div>
			<br>
			<img class="displayed2" onclick="hide()" src="images/Back.png">
			</div>
			
			<div id="worldACE">
			<br />
			<img class="displayed" src="images/ACE.png" alt="Trasure Hunt Pic" >
			<br><div id="wrldDesc">
			<h3>Olveston was built for Dunedin businessman, collector and philanthropist David Theomin, his wife Marie and their two children Edward and Dorothy.
			<br>
			Designed by acclaimed English architect Sir Ernest George, Olveston was built as a family home furnished with fine art, furniture and artefacts purchased from all around the world.<h3/>
			<br></div>
			<br>
			<img class="displayed2" onclick="hide()" src="images/Back.png">
			</div>
			
			<br />
			</div>
			
				<script>
function hide(){
	$('#Congrats').hide();
	$('#info').hide();		
	$('#worldC').hide();
	$('#worldA').hide();
	$('#worldE').hide();
	$('#worldAC').hide();
	$('#worldAE').hide();
	$('#worldACE').hide();
	$('#worldEC').hide();
}

function closeWin() {

	$('#info').hide();
	
	if(document.getElementById("myCheckD").checked == true && document.getElementById("myCheckS").checked == false && document.getElementById("myCheckT").checked == false){
	$('#worldC').show();}
	if(document.getElementById("myCheckD").checked == true && document.getElementById("myCheckS").checked == false && document.getElementById("myCheckT").checked == true){
	$('#worldEC').show();}
	if(document.getElementById("myCheckD").checked == true && document.getElementById("myCheckS").checked == true && document.getElementById("myCheckT").checked == false){
	$('#worldAC').show();}

	if(document.getElementById("myCheckS").checked == true && document.getElementById("myCheckD").checked == false && document.getElementById("myCheckT").checked == false){
	$('#worldA').show();}	
	if(document.getElementById("myCheckS").checked == true && document.getElementById("myCheckD").checked == false && document.getElementById("myCheckT").checked == true){
	$('#worldAE').show();}	
	if(document.getElementById("myCheckS").checked == true && document.getElementById("myCheckD").checked == true && document.getElementById("myCheckT").checked == false){
	$('#worldAC').show();}	

	if(document.getElementById("myCheckT").checked == true && document.getElementById("myCheckD").checked == false && document.getElementById("myCheckS").checked == false){
	$('#worldE').show();}
	if(document.getElementById("myCheckT").checked == true && document.getElementById("myCheckD").checked == false && document.getElementById("myCheckS").checked == true){
	$('#worldAE').show();}
	if(document.getElementById("myCheckT").checked == true && document.getElementById("myCheckD").checked == true && document.getElementById("myCheckS").checked == false){
	$('#worldEC').show();}	

	if(document.getElementById("myCheckS").checked == false && document.getElementById("myCheckD").checked == false && document.getElementById("myCheckT").checked == false)
	{hide();}
	
	if(document.getElementById("myCheckS").checked == true && document.getElementById("myCheckD").checked == true && document.getElementById("myCheckT").checked == true)
	{$('#worldACE').show();	}
}
</script>
		
	</body>            
</html>
