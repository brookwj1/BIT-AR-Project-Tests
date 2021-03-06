<?php
require_once 'ARELLibrary/arel_xmlhelper.class.php';

//start output
ArelXMLHelper::start(NULL, "loading.html", "assets/Tracking.zip");

$deer = ArelXMLHelper::createGLUEModel3D(
		"1",	//ID 
	"assets/deer.obj", //model Path
	"assets/dog_uvw_02.png", //texture Path
	array(0,-100,0), //translation
	array(3,3,3), //scale
	new ArelRotation(ArelRotation::ROTATION_EULERDEG, array(0,0,0)), //rotation
	1 //CoordinateSystemID
);

$sheep = ArelXMLHelper::createGLUEModel3D(
	"2",	//ID 
	"assets/sheep.obj", //model Path
	"assets/sheep_uvw_02.png", //texture Path
	array(0,-100,0), //translation
	array(3,3,3), //scale
	new ArelRotation(ArelRotation::ROTATION_EULERDEG, array(-90,0,0)), //rotation
	2 //CoordinateSystemID
);

$tricycle = ArelXMLHelper::createGLUEModel3D(
	"3",	//ID 
	"assets/tricycle.obj", //model Path
	"assets/tricycle_uvw_tex.png", //texture Path
	array(0,-100,0), //translation
	array(3,3,3), //scale
	new ArelRotation(ArelRotation::ROTATION_EULERDEG, array(90,0,0)), //rotation
	3 //CoordinateSystemID
);

// $doll = ArelXMLHelper::createGLUEModel3D(
	// "3",	//ID 
	// "assets/dolls.mfbx", //model Path
	// "assets/tricycle_uvw_tex.png", //texture Path
	// array(0,-100,0), //translation
	// array(3,3,3), //scale
	// new ArelRotation(ArelRotation::ROTATION_EULERDEG, array(90,0,0)), //rotation
	// 4 //CoordinateSystemID
// );

//output the object
ArelXMLHelper::outputObject($deer);
ArelXMLHelper::outputObject($sheep);
ArelXMLHelper::outputObject($tricycle);
// ArelXMLHelper::outputObject($doll);

//end the output
ArelXMLHelper::end();

?>