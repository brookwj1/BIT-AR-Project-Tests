// Copyright 2007-2014 metaio GmbH. All rights reserved.
package com.metaio.Example;

import java.io.File;

import android.util.Log;
import android.view.View;

import com.metaio.sdk.ARViewActivity;
import com.metaio.sdk.MetaioDebug;
import com.metaio.sdk.jni.IGeometry;
import com.metaio.sdk.jni.IMetaioSDKCallback;
import com.metaio.tools.io.AssetsManager;

public class TutorialHelloWorld extends ARViewActivity 
{
	
	@Override
	protected int getGUILayout() 
	{
		// Attaching layout to the activity
		return R.layout.tutorial_hello_world; 
	}


	public void onButtonClick(View v)
	{
		finish();
	}
	
	
	@Override
	protected void loadContents() 
	{
		try
		{
			// Getting a file path for tracking configuration XML file
			File trackingConfigFile = AssetsManager.getAssetPathAsFile(getApplicationContext(), "TutorialHelloWorld/Assets/TrackingData_MarkerlessFast.xml");
			
			// Assigning tracking configuration
			boolean result = metaioSDK.setTrackingConfiguration(trackingConfigFile); 
			MetaioDebug.log("Tracking data loaded: " + result); 
	        
			// Getting a file path for a 3D geometry
			File Model1 = AssetsManager.getAssetPathAsFile(getApplicationContext(), "TutorialHelloWorld/Assets/sheep.obj");
			File Model2 = AssetsManager.getAssetPathAsFile(getApplicationContext(), "TutorialHelloWorld/Assets/tricycle.obj");
			File Model3 = AssetsManager.getAssetPathAsFile(getApplicationContext(), "TutorialHelloWorld/Assets/deer.obj");
			File Model4 = AssetsManager.getAssetPathAsFile(getApplicationContext(), "TutorialHelloWorld/Assets/metaioman.md2");
			
			if (Model1 != null) 
			{
				// Loading 3D geometry
				IGeometry geometry = metaioSDK.createGeometry(Model1);
				if (geometry != null) 
				{
					// Set geometry properties
					geometry.setScale(4f);
				}
				else
					MetaioDebug.log(Log.ERROR, "Error loading geometry: "+ Model1);
			}
			
			if (Model2 != null) 
			{
				// Loading 3D geometry
				IGeometry geometry = metaioSDK.createGeometry(Model2);
				if (geometry != null) 
				{
					// Set geometry properties
					geometry.setScale(4f);
				}
				else
					MetaioDebug.log(Log.ERROR, "Error loading geometry: "+ Model2);
			}
			
			if (Model3 != null) 
			{
				// Loading 3D geometry
				IGeometry geometry = metaioSDK.createGeometry(Model3);
				if (geometry != null) 
				{
					// Set geometry properties
					geometry.setScale(4f);
				}
				else
					MetaioDebug.log(Log.ERROR, "Error loading geometry: "+ Model3);
			}
			
			if (Model4 != null) 
			{
				// Loading 3D geometry
				IGeometry geometry = metaioSDK.createGeometry(Model4);
				if (geometry != null) 
				{
					// Set geometry properties
					geometry.setScale(4f);
				}
				else
					MetaioDebug.log(Log.ERROR, "Error loading geometry: "+ Model4);
			}
		}
		catch (Exception e)
		{
			MetaioDebug.printStackTrace(Log.ERROR, e);
		}
	}


	@Override
	protected void onGeometryTouched(IGeometry geometry)
	{
		// Not used in this tutorial
	}


	@Override
	protected IMetaioSDKCallback getMetaioSDKCallbackHandler()
	{
		// No callbacks needed in this tutorial
		return null;
	}	
}
