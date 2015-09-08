<html>
    <head>
    	<meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" >
    	<script type="text/javascript" src="http://dev.junaio.com/arel/js/arel.js"></script>
    	<script type="text/javascript" src="http://code.jquery.com/jquery-1.8.3.min.js"></script>
		<link type="text/css" rel="stylesheet" href="indexCS.css">
    	<script type="text/javascript" src="arelGLUE6.js"></script>
  		
    <title>Getting Started GLUE 1</title>
    </head>
	<body>
	
	    <table align="center" id = 'timetable'>
		<tr>
		<th><br><br>Sheep</th>
		<th><input type="checkbox" id="myCheckS"></th>
		</tr>
		<tr>
		<th><br><br>Deer</th>
		<th><input type="checkbox" id="myCheckD"></th>
		</tr>
		<tr>
		<th><br><br>Tricycle</th>
		<th><input type="checkbox" id="myCheckT"></th>
		</tr></table>
		
		<div id="center">
			<!-- <div id="info">Please hold your device over the metaio pattern<br /><br /><img src="metaioMan.png" /></div> -->
			<div id="info">YOU FOUND AN IMAGE.<br /><br /><br>
			<!--<a href="http://www.google.com" >Home</a>-->
			</div>
			
			<div id="worldCan">
			<br />
			<?PHP
			// Load World Map in small (600 pixels wide) mode with Europe pre-selected.  Images in images/ directory.
			require "world_map.php";
			print world_map('canada', '1', 'images');
			print<<<END
			<br><br>
			<p> fefifnaeklnfaffnee ef aj feges gjse fj aaejss jaee3jfje f e fja ef eej a feje j a ejf ajke aj efje j aejf eaej fjeaafeafja ejfe f eg rjn yn bsjvjs bjr </p>
END;
?>
				<br />
			</div>
			
			<div id="worldEur">
			<br />
			<?PHP
			// Load World Map in small (600 pixels wide) mode with Europe pre-selected.  Images in images/ directory.
			require "world_map.php";
			print world_map('europe', '1', 'images');
			print<<<END
			<br><br>
			<p> fefifnaeklnfaffnee ef aj feges gjse fj aaejss jaee3jfje f e fja ef eej a feje j a ejf ajke aj efje j aejf eaej fjeaafeafja ejfe f eg rjn yn bsjvjs bjr </p>
END;
?>
				<br />
			</div>
			
			<div id="worldEurCan">
			<br />
			<?PHP
			// Load World Map in small (600 pixels wide) mode with Europe pre-selected.  Images in images/ directory.
			require "world_map.php";
			print world_map('canada, europe', '1', 'images');
			print<<<END
			<br><br>
			<p> fefifnaeklnfaffnee ef aj feges gjse fj aaejss jaee3jfje f e fja ef eej a feje j a ejf ajke aj efje j aejf eaej fjeaafeafja ejfe f eg rjn yn bsjvjs bjr </p>
END;
?>
				<br />
			</div>			
			
			
		</div>
	</body>            
</html>
