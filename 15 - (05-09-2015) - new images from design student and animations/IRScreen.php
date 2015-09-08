<html>
<head>

	<meta http-equiv="Content-type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" >	
	<link type="text/css" rel="stylesheet" href="style/IRScreenCS.css">
	<script type="text/javascript" src="http://dev.junaio.com/arel/js/arel.js"></script>
	<script type="text/javascript" src="http://code.jquery.com/jquery-1.8.3.min.js"></script>
	<script type="text/javascript" src="javascript/OlvestonJS.js"></script>
	<link rel="stylesheet" href="animate.min.css">
	
    </head>
	<body>
	
	<div id="info" class="animated infinite rubberBand"><h2>YOU FOUND AN IMAGE</h2></div>
	
	<div id="Congrats" class="animated flash">
	<br><br>
	<h1>YOU FOUND ALL THE TOYS!</h1>
	<br><br>
	<p><img class="smiley" src="http://www.imgion.com/images/01/Smiliy-Congratulation-.gif"  alt="Smiley Congratulation" /></p>
	<br><br>			
	</div>
	
	<div id="header">
	
	<div id="Mglass" class="animated infinite tada">
	<img class="displayed2" onclick="restart()" src="images/Home.png">
	</div>
	
	<div id="Mglass2" class="animated infinite tada">	
	<img class="displayed2" onclick="search()" src="images/search.png">
	</div>
	
	<div id="prgrss" class="animated infinite tada">
	<img class="displayed2" onclick="progress()" src="images/World.png">
	</div>
	
	<div id="exit" class="animated infinite tada">	
	<img class="displayed2" onclick="search()" src="images/cross.png">
	</div>
	
<!--	    <table align="left" id="checks">
		<tr>
		<th>
		<div><img class="flags" id="Sheep" src="images/Flag1.png" onclick="Desc3()" alt="Flags" ><input type="checkbox" id="myCheckS"/></img></div></th>
		<th><div><img class="flags" id="Deer" src="images/Flag2.png" onclick="Desc2()" alt="Flags" ><input type="checkbox" id="myCheckD"/></img></div></th>
		<th><div><img class="flags" id="Tric" src="images/Flag3.png" onclick="Desc1()" alt="Flags" ><input type="checkbox" id="myCheckT"/></img></div></th>
		</tr>
		</table>		-->
		
		<div id="checksheep" class="animated tada"><img class="flags" id="Sheep" src="images/Flag1.png" onclick="Desc3()" alt="Flags" ><input type="checkbox" id="myCheckS"/></img></div>
		<div id="checkdeer" class="animated tada"><img class="flags" id="Deer" src="images/Flag2.png" onclick="Desc2()" alt="Flags" ><input type="checkbox" id="myCheckD"/></img></div>
		<div id="checktric" class="animated tada"><img class="flags" id="Tric" src="images/Flag3.png" onclick="Desc1()" alt="Flags" ><input type="checkbox" id="myCheckT"/></img></div>
		
	</div>
			
			<div id="home" class="animated bounceInDown">
			<img class="displayed3" src="images/olveston.png" onclick="hide()" alt="home" ></div>
			
			<div id="worldC" class="animated rotateInUpRight">
			<img class="displayed" src="images/RUS.png" onclick="Desc1()" alt="Trasure Hunt Pic" ></div>
			
			<div id="worldA" class="animated rotateInUpRight">
			<img class="displayed" src="images/AUS.png" onclick="Desc2()" alt="Trasure Hunt Pic" ></div>
			
			<div id="worldE" class="animated rotateInUpRight">
			<img class="displayed" src="images/EUR.png" onclick="Desc3()" alt="Trasure Hunt Pic" ></div>

			<div id="worldACE" class="animated rotateInUpRight">
			<img class="displayed" src="images/ALL.png" alt="Trasure Hunt Pic" ></div>		
			
			
			<div id="TriDesc" class="animated rotateInUpLeft">
			<br>
			<h1>TRICYCLE</h1><br>
			<br><br>
			<h3>Olveston was built for Dunedin businessman, collector and philanthropist David Theomin, his wife Marie and their two children Edward and Dorothy.
			<br>
			Designed by acclaimed English architect Sir Ernest George, <br> 
			Olveston was built as a family home furnished with fine art, <br>
			furniture and artefacts purchased from all around the world.</h3>
			<br>
			</div>
			
			<div id="SheDesc" class="animated rotateInUpLeft">
			<br>
			<h1>SHEEP</h1><br>
			<br><br>
			<h3>Olveston was built for Dunedin businessman, collector and philanthropist David Theomin, his wife Marie and their two children Edward and Dorothy.
			<br>
			Designed by acclaimed English architect Sir Ernest George, <br> 
			Olveston was built as a family home furnished with fine art, <br>
			furniture and artefacts purchased from all around the world.</h3>
			<br>
			</div>
			
			<div id="DeeDesc" class="animated rotateInUpLeft">
			<br>
			<h1>DEER</h1><br>
			<br><br>
			<h3>Olveston was built for Dunedin businessman, collector and philanthropist David Theomin, his wife Marie and their two children Edward and Dorothy.
			<br>
			Designed by acclaimed English architect Sir Ernest George, <br> 
			Olveston was built as a family home furnished with fine art, <br>
			furniture and artefacts purchased from all around the world.</h3>
			<br>
			</div>
		
	</body>            
</html>
