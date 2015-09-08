<html>
<head>
<script type="text/javascript" src="arelGLUE6.js"></script>
<!--

PHP/JavaScript World Map with Continent and Ocean Selection
http://www.OpenCrypt.com/blog.php?a=34

-->

<!-- CSS/Stylesheets (.text not required, only used for blog link) -->

<style type="text/css">

.text					{ font-family : Verdana, Arial, Helvetica, sans-serif; font-size : 13px; color : #222222; }
a.text					{ color: #0000aa; text-decoration: none; }
a.text:hover			{ color: #222222; text-decoration: underline; }

.world_map {
	border-color: #aaa;
border-style:solid;
border-width:2px;
-webkit-border-radius: 8px;

display: block;
position: absolute;
height: auto;
bottom: 0;
top: 0;
left: 0;
right: 0;
padding: 10px;

color: #333;
background-color: transparent;
font: normal normal bold 16px/normal Helvetica, Arial, sans-serif;
text-align: center;
opacity: 0.8;
display: none;
}

</style>
</head>
<body>

<?PHP


// Load World Map in small (600 pixels wide) mode with Europe pre-selected.  Images in images/ directory.

require "world_map.php";
print world_map('1', '1', 'images');



// Example 'Save Map' button using save_map() JavaScript function (code above).

print<<<END
<br><br>
<input type="button" name="save_map" value="Back" onclick="index2.html">
END;


?>


</body>
</html>