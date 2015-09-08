<html>
    <head>
	    	<script type="text/javascript" src="arelGLUE6.js"></script>
    <title>Getting Started GLUE 1</title>
    </head>
	<body>
<?PHP
/**
Copyright (C) 2008 ionix Limited
http://www.ionix.ltd.uk/

This script was written by ionix Limited, and was distributed
via the OpenCrypt.com Blog.

PHP/JavaScript World Map with Continent and Ocean Selection
http://www.OpenCrypt.com/blog.php?a=34

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License as
published by the Free Software Foundation; either version 2 of
the License, or any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

GNU GPL License
http://www.opensource.org/licenses/gpl-license.php
*/

ini_set('error_reporting', E_ALL | E_STRICT);
ini_set('display_errors', 'On');



/*
Continent/Ocean options:

canada
north_america
south_america
south_pole
europe
eurasia
africa
australia
sea_pacific
sea_atlantic
sea_arctic
sea_indian
sea_pacific2

*/



function world_map($pre_select = "", $large_map = "0", $maps_url = "") {


# $pre_select = List of continents/oceans to pre-select in map, continents should be seperated by commas.
# e.g. canada,europe,australia

# $large_map = Size of map.
# 1 equals large map with width of 1488 pixels.
# 0/default or any other value equals small map with width of 600 pixels.
# Currently only 1488 and 600 are supported, any value not equal to 1 will default to width 600.
# New imagemap must be created for other sizes as positions values cannot be automatically calculated.

# $maps_url = URL (relative or absolute/full) to map images without trailing slash.
# e,g. /images or http://www.opencrypt.com/images



$width = "1025";
$height = "650";

if ($large_map!="1") {

$width = "600";
$height = "304";


$coordinates = <<<END
<area shape="poly" alt="Canada" coords="99,58,156,59,168,72,212,66,205,40,216,42,275,7,205,6,184,19,153,17,137,24,92,20,65,41,100,43" nohref title="Canada" onMouseOver="update_map_mouseover('canada');" onMouseOut="update_map_mouseout('canada');" onClick="update_map_onclick('canada');" />
<area shape="poly" alt="North America" coords="104,62,159,62,171,74,162,92,154,101,145,98,131,98,125,102,108,91,94,91,87,78" nohref title="North America" onMouseOver="update_map_mouseover('north_america');" onMouseOut="update_map_mouseout('north_america');" onClick="update_map_onclick('north_america');" />
<area shape="poly" alt="South America" coords="191,225,185,260,145,163,148,141,116,122,98,92,136,111,152,104,175,113,150,114,145,127,177,129,224,160" nohref title="South America" onMouseOver="update_map_mouseover('south_america');" onMouseOut="update_map_mouseout('south_america');" onClick="update_map_onclick('south_america');" />
<area shape="poly" alt="Europe" coords="264,73,273,85,295,71,319,78,335,66,361,78,368,13,314,21,267,50,278,59" nohref title="Europe" onMouseOver="update_map_mouseover('europe')" onMouseOut="update_map_mouseout('europe')" onClick="update_map_onclick('europe')" />
<area shape="poly" alt="Africa" coords="265,139,250,118,266,86,298,82,337,93,354,129,370,127,361,193,317,213,298,174,297,140" nohref title="Africa" onMouseOver="update_map_mouseover('africa')" onMouseOut="update_map_mouseout('africa')" onClick="update_map_onclick('africa')" />
<area shape="poly" alt="Australia" coords="463,220,464,192,505,169,500,148,537,161,526,181,531,204,564,221,535,235,506,228,492,210" nohref title="Australia" onMouseOver="update_map_mouseover('australia')" onMouseOut="update_map_mouseout('australia')" onClick="update_map_onclick('australia')" />
<area shape="poly" alt="South Pole" coords="138,302,468,300,509,281,403,263,237,289,212,266,102,290" nohref title="South Pole" onMouseOver="update_map_mouseover('south_pole')" onMouseOut="update_map_mouseout('south_pole')" onClick="update_map_onclick('south_pole')" />
<area shape="poly" alt="Eurasia" coords="532,31,510,59,487,45,515,76,493,94,476,81,483,100,502,137,494,168,451,164,432,112,414,139,388,105,361,128,320,79,334,65,360,82,368,9" nohref title="Eurasia" onMouseOver="update_map_mouseover('eurasia')" onMouseOut="update_map_mouseout('eurasia')" onClick="update_map_onclick('eurasia')" />
<area shape="poly" alt="Pacific" coords="59,40,97,44,96,62,85,78,116,126,145,140,144,160,186,269,101,289,33,240,2,175,10,104" nohref title="Pacific" onMouseOver="update_map_mouseover('sea_pacific')" onMouseOut="update_map_mouseout('sea_pacific')" onClick="update_map_onclick('sea_pacific')" />
<area shape="poly" alt="Atlantic" coords="189,266,227,159,160,117,171,73,207,40,277,41,249,120,270,141,287,143,314,213,317,273,240,286,215,263" nohref title="Atlantic" onMouseOver="update_map_mouseover('sea_atlantic')" onMouseOut="update_map_mouseout('sea_atlantic')" onClick="update_map_onclick('sea_atlantic')" />
<area shape="poly" alt="Arctic" coords="96,17,138,22,151,13,182,17,205,3,279,5,227,39,281,39,316,17,371,8,520,28,462,0,135,1" nohref title="Arctic" onMouseOver="update_map_mouseover('sea_arctic')" onMouseOut="update_map_mouseout('sea_arctic')" onClick="update_map_onclick('sea_arctic')" />
<area shape="poly" alt="Pacific" coords="448,267,449,165,495,170,461,190,461,220,538,237,567,221,534,203,539,155,507,146,492,96,522,76,509,63,532,35,583,93,598,162,575,226,511,280" nohref title="Pacific" onMouseOver="update_map_mouseover('sea_pacific2')" onMouseOut="update_map_mouseout('sea_pacific2')" onClick="update_map_onclick('sea_pacific2')" />
<area shape="poly" alt="Indian" coords="320,270,317,215,366,194,374,120,387,108,413,141,432,115,450,165,446,269,404,261" nohref title="Indian" onMouseOver="update_map_mouseover('sea_indian')" onMouseOut="update_map_mouseout('sea_indian')" onClick="update_map_onclick('sea_indian')" />
END;

} else {

$coordinates = <<<END
<area shape="poly" alt="Canada" coords="147,122,252,151,358,151,412,173,452,159,461,176,511,153,691,24,482,16,450,45,367,44,327,61,235,57,175,84" nohref title="Canada" onMouseOver="update_map_mouseover('canada');" onMouseOut="update_map_mouseout('canada');" onClick="update_map_onclick('canada');" />
<area shape="poly" alt="North America" coords="246,154,360,153,413,175,451,160,456,172,379,231,377,259,347,235,306,253,233,218,223,189" nohref title="North America" onMouseOver="update_map_mouseover('north_america');" onMouseOut="update_map_mouseout('north_america');" onClick="update_map_onclick('north_america');" />
<area shape="poly" alt="South America" coords="455,619,360,376,374,340,255,273,233,224,308,256,311,282,368,265,448,294,453,335,561,399,459,601,482,620" nohref title="South America" onMouseOver="update_map_mouseover('south_america');" onMouseOut="update_map_mouseout('south_america');" onClick="update_map_onclick('south_america');" />
<area shape="poly" alt="Europe" coords="669,207,791,203,834,165,892,192,888,137,914,134,909,32,747,32,727,97,670,128" nohref title="Europe" onMouseOver="update_map_mouseover('europe')" onMouseOut="update_map_mouseout('europe')" onClick="update_map_onclick('europe')" />
<area shape="poly" alt="Africa" coords="628,310,636,252,679,209,741,206,829,232,884,322,914,320,898,474,781,533,718,342,661,354" nohref title="Africa" onMouseOver="update_map_mouseover('africa')" onMouseOut="update_map_mouseout('africa')" onClick="update_map_onclick('africa')" />
<area shape="poly" alt="Australia" coords="1155,532,1161,467,1257,423,1247,376,1331,387,1373,422,1299,420,1304,457,1397,550,1330,584,1253,571" nohref title="Australia" onMouseOver="update_map_mouseover('australia')" onMouseOut="update_map_mouseout('australia')" onClick="update_map_onclick('australia')" />
<area shape="poly" alt="South Pole" coords="348,749,1140,750,1235,712,1132,671,663,696,513,660,269,720" nohref title="South Pole" onMouseOver="update_map_mouseover('south_pole')" onMouseOut="update_map_mouseout('south_pole')" onClick="update_map_onclick('south_pole')" />
<area shape="poly" alt="" coords="1307,81,1206,302,1241,389,1214,423,1128,406,1090,343,1093,300,1064,272,1039,351,964,258,886,317,832,230,807,193,859,179,895,197,891,140,919,135,913,32" nohref title="" onMouseOver="update_map_mouseover('eurasia')" onMouseOut="update_map_mouseout('eurasia')" onClick="update_map_onclick('eurasia')" />
END;

}

$location_display['canada'] = "none";
$location_display['north_america'] = "none";
$location_display['south_america'] = "none";
$location_display['south_pole'] = "none";
$location_display['europe'] = "none";
$location_display['eurasia'] = "none";
$location_display['africa'] = "none";
$location_display['australia'] = "none";


$db_location = $pre_select;

$location_script = "";
$location_title = "";
$locations = explode(",",$db_location);
for ($i=0; $i<count($locations); $i++) {
	$location_display[$locations[$i]] = "block";
	$location_script = "world_map_visible[area] = \"$locations[$i]\";\n";
	$location_title .= ucwords($locations[$i]);
	if ($i<count($locations)+1) {
		$location_title .= ", ";
	}
}




$output = <<<END
<div style="position:relative;width:$height;height:$height;">
<img src="$maps_url/world_map_half_colour.gif" class="world_map" id="world_map_bg" width=$width height=$height style="z-index:1;display:block;" />
<img src="$maps_url/world_map_canada.png" class="world_map" id="world_map_canada" width=$width height=$height style="z-index:2;display:$location_display[canada]" />
<img src="$maps_url/world_map_north_america.gif" class="world_map" id="world_map_north_america" width=$width height=$height style="z-index:3;display:$location_display[north_america]" />
<img src="$maps_url/world_map_south_america.gif" class="world_map" id="world_map_south_america" width=$width height=$height style="z-index:4;display:$location_display[south_america]" />
<img src="$maps_url/world_map_south_pole.gif" class="world_map" id="world_map_south_pole" width=$width height=$height style="z-index:5;display:$location_display[south_pole]" />
<img src="$maps_url/world_map_europe.gif" class="world_map" id="world_map_europe" width=$width height=$height style="z-index:6;display:$location_display[europe]" />
<img src="$maps_url/world_map_africa.gif" class="world_map" id="world_map_africa" width=$width height=$height style="z-index:7;display:$location_display[africa]" />
<img src="$maps_url/world_map_eurasia.gif" class="world_map" id="world_map_eurasia" width=$width height=$height style="z-index:8;display:$location_display[eurasia]" />
<img src="$maps_url/world_map_australia.gif" class="world_map" id="world_map_australia" width=$width height=$height style="z-index:9;display:$location_display[australia]" />

<img src="$maps_url/space.gif" class="world_map" id="world_map" usemap="#world_map_half_colour" width=$width height=$height style="border-style:none;z-index:99;display:block;" />
</div>

<map id="world_map_half_colour" name="world_map_half_colour">
$coordinates
<area shape="default" nohref="nohref" alt="" />
</map>
END;

return $output;
}
?>
	</body>            
</html>