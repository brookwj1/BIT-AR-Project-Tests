/* Copyright 2007-2014 metaio GmbH. All rights reserved.
 * Authors: Timothy Jones, William Brook
 * Class: ARELViewActivity.java
 * Subject: Project 2.
 * Date: 30/10/2015
 * Description: Class that retrieves arel layout.
 */

package olveston.augmented.reality;


import android.view.View;

import com.metaio.sdk.ARELActivity;
import olveston.augmented.reality.R;


public class ARELViewActivity extends ARELActivity 
{
	@Override
	protected int getGUILayout() 
	{
		return R.layout.arel;
	}
	
	public void onButtonClick(View v)
	{
		finish();
	}
 
}
