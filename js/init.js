$(document).ready(function() {
	if (Modernizr.rgba && Modernizr.textshadow)
	{
		$("h1").addClass("shadowAndAlphaBackground");
	}
	else
	{
		$("h1").addClass("noShadowAndAlpha");
	}
	
});