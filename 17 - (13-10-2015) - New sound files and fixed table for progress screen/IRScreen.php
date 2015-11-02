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
	
	<div id="info" class="animated infinite rubberBand">
	<img src="images/NewImg.png">
	</div>
	
	<div id="Congrats" class="animated flash">
    <img class="cng" src="images/cng.png">			
	</div>  
	
	<div id="header">
	
<!-- 	<div id="Mglass" class="animated infinite tada">
	<img class="displayed2" onclick="restart()" src="images/Home.png">
	</div> -->
	
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
			
			<!-- <div id="home" class="animated bounceInDown">
			<img class="displayed3" src="images/olveston.png" onclick="hide()" alt="home" ></div>   
			
			<div id="worldC" class="animated rotateInUpRight">
			<img class="displayed" src="images/RUS.png" onclick="Desc1()" alt="Trasure Hunt Pic" ></div>
			
			<div id="worldA" class="animated rotateInUpRight">
			<img class="displayed" src="images/AUS.png" onclick="Desc2()" alt="Trasure Hunt Pic" ></div>
			
			<div id="worldE" class="animated rotateInUpRight">
			<img class="displayed" src="images/EUR.png" onclick="Desc3()" alt="Trasure Hunt Pic" ></div>

			<div id="worldACE" class="animated rotateInUpRight">
			<img class="displayed" src="images/ALL.png" alt="Trasure Hunt Pic" ></div>	  -->	
			
			<div id="frame" class="animated infinite bounce">	
			</div>
			
			<div id="TriDesc" class="animated rotateInUpLeft">
			<img src="images/desc.png" alt="description here" />
			</div>
			
			<div id="SheDesc" class="animated rotateInUpLeft">
			<img src="images/desc.png" alt="description here" />
			</div>
			
			<div id="DeeDesc" class="animated rotateInUpLeft">
			<img src="images/desc.png" alt="description here" />
			</div>
		
		
		
<div id="tableofimages">  

<table border="0" cellpadding="0">
<tr>

<td id="1" align="center" valign="center">
<div id="star1" class="animated bounce"> 
<img src="images/star.png" alt="description here" />
</div>
<div id="img1" class="animated zoomInUp"> 
<img src="table2.png" alt="description here" />
</div>
</td>

<td id="2" align="center" valign="center">
<div id="star2" class="animated bounce"> 
<img src="images/star.png" alt="description here" />
</div>
<div id="img2" class="animated zoomInUp"> 
<img src="images/der.png" onclick="Desc2()" alt="description here" />
</div>
</td>

<td id="3" align="center" valign="center">
<div id="star3" class="animated bounce"> 
<img src="images/star.png" alt="description here" />
</div>
<div id="img3" class="animated zoomInUp"> 
<img src="table3.png" alt="description here" />
</div>
</td>

<td id="4" align="center" valign="center">
<div id="star4" class="animated bounce"> 
<img src="images/star.png" alt="description here" />
</div>
<div id="img4" class="animated zoomInUp"> 
<img src="table.png" alt="description here" />
</div>
</td>

</tr>

<tr>

<td id="5" align="center" valign="center">
<div id="star5" class="animated bounce"> 
<img src="images/star.png" alt="description here" />
</div>
<div id="img5" class="animated zoomInUp"> 
<img src="images/trc.png" onclick="Desc1()" alt="description here" />
</div>
</td>

<td id="6" align="center" valign="center">
<div id="star6" class="animated bounce"> 
<img src="images/star.png" alt="description here" />
</div>
<div id="img6" class="animated zoomInUp"> 
<img src="table4.png" alt="description here" />
</div>
</td>

<td id="7" align="center" valign="center">
<div id="star7" class="animated bounce"> 
<img src="images/star.png" alt="description here" />
</div>
<div id="img7" class="animated zoomInUp"> 
<img src="table3.png" alt="description here" />
</div>
</td>

<td id="8" align="center" valign="center">
<div id="star8" class="animated bounce"> 
<img src="images/star.png" alt="description here" />
</div>
<div id="img8" class="animated zoomInUp"> 
<img src="images/shp.png" onclick="Desc3()" alt="description here" />
</div>
</td>

</tr>

<tr>

<td id="9" align="center" valign="center">
<div id="star9" class="animated bounce"> 
<img src="images/star.png" alt="description here" />
</div>
<div id="img9" class="animated zoomInUp"> 
<img src="table2.png" alt="description here" />
</div>
</td>

<td align="center" valign="center">
</td>
<td align="center" valign="center">
</td>

<td id="10" align="center" valign="center">
<div id="star10" class="animated bounce"> 
<img src="images/star.png" alt="description here" />
</div>
<div id="img10" class="animated zoomInUp"> 
<img src="table.png" alt="description here" />
</div>
</td>

</tr>
</table>

</div>  
	
	
	
	</body>            
</html>
