$(function() {

	$("#one a").focus();

	function setAnimDelay1(){
		var nycLat = 40.6782;
		var nycLong = -73.9442;
		var times = SunCalc.getTimes(new Date(), nycLat, nycLong);
		var sunriseHour = times.sunrise.getHours();
		var sunriseMin = times.sunrise.getMinutes();		
		var nowHour = new Date().getHours();
		var nowMin = new Date().getMinutes();
		var hourDiff = sunriseHour - nowHour;
		var minDiff = sunriseMin - nowMin;
		var hoursAsPercent = hourDiff * 4.16; // Convert hours to percentage of day
		var minsAsPercent = minDiff / 60 * 4.16; // Convert minutes to percentage of day
		var totalPercent = hoursAsPercent + minsAsPercent; // Get full percentage
		var animationDelay = nowHour >= 0 && nowHour < sunriseHour ? -86400 - ((totalPercent / 100 * 86400) * -1) : totalPercent / 100 * 86400; // Calculate animation delay
		$("body").animate({animationDelay: animationDelay + "s"}, {duration: 1000, easing: "linear"});
		console.log(hourDiff,minDiff);
	}

	function setAnimDelay2(){
		var aukLat = -36.8485;
		var aukLong = 174.7633;
		var times = SunCalc.getTimes(new Date(), aukLat, aukLong);
		var sunriseHour = times.sunrise.getHours();
		var sunriseMin = times.sunrise.getMinutes();		
		var nowHour = new Date().getHours();
		var nowMin = new Date().getMinutes();
		var hourDiff = sunriseHour - nowHour;
		var minDiff = sunriseMin - nowMin;
		var hoursAsPercent = hourDiff * 4.16; // Convert hours to percentage of day
		var minsAsPercent = minDiff / 60 * 4.16; // Convert minutes to percentage of day
		var totalPercent = hoursAsPercent + minsAsPercent; // Get full percentage
		var animationDelay = nowHour >= 0 && nowHour < sunriseHour ? -86400 - ((totalPercent / 100 * 86400) * -1) : totalPercent / 100 * 86400; // Calculate animation delay
		$("body").animate({animationDelay: animationDelay + "s"}, {duration: 1000, easing: "linear"});
	}

	function setAnimDelay3(){
		var dubLat = 25.2048;
		var dubLong = 55.2708;
		var times = SunCalc.getTimes(new Date(), dubLat, dubLong);
		var sunriseHour = times.sunrise.getHours();
		var sunriseMin = times.sunrise.getMinutes();		
		var nowHour = new Date().getHours();
		var nowMin = new Date().getMinutes();
		var hourDiff = sunriseHour - nowHour;
		var minDiff = sunriseMin - nowMin;
		var hoursAsPercent = hourDiff * 4.16; // Convert hours to percentage of day
		var minsAsPercent = minDiff / 60 * 4.16; // Convert minutes to percentage of day
		var totalPercent = hoursAsPercent + minsAsPercent; // Get full percentage
		var animationDelay = nowHour >= 0 && nowHour < sunriseHour ? -86400 - ((totalPercent / 100 * 86400) * -1) : totalPercent / 100 * 86400; // Calculate animation delay
		$("body").animate({animationDelay: animationDelay + "s"}, {duration: 1000, easing: "linear"});
	}

	// function checkSunPosition(){
	// 	SunCalc.getPosition(Date timeAndDate, /*Number*/ latitude, /*Number*/ longitude)
	// }

	// SunCalc.getPosition(SunCalc.getTimes(new Date(), 51.5, -0.1).sunrise, 51.5, -0.1)

	function yay(){
		var dubLat = 25.2048;
		var dubLong = 55.2708;			
		var times = SunCalc.getTimes(new Date(), dubLat, dubLong);
		// console.log(times);
	};


	// Calculate angle of sunrise and sunset azimuth

	function azimuth1() {
		var nycLat = 40.6782;
		var nycLong = -73.9442;
		var times = SunCalc.getTimes(new Date(), nycLat, nycLong);
		var sunrisePos = SunCalc.getPosition(times.sunrise, nycLat, nycLong);
		var sunsetPos = SunCalc.getPosition(times.sunset, nycLat, nycLong);
		var sunriseAzimuth = sunrisePos.azimuth;
		var sunsetAzimuth = sunsetPos.azimuth;
		var sunriseAzimuthConverted = sunrisePos.azimuth * 180 / Math.PI;
		var sunsetAzimuthConverted = sunsetPos.azimuth * 180 / Math.PI;
		console.log(sunriseAzimuth);
		console.log(sunsetAzimuth);
		console.log(sunriseAzimuthConverted);
		console.log(sunsetAzimuthConverted);
	}

	function azimuth2() {
		var aukLat = -36.8485;
		var aukLong = 174.7633;
		var times = SunCalc.getTimes(new Date(), aukLat, aukLong);
		var sunrisePos = SunCalc.getPosition(times.sunrise, aukLat, aukLong);
		var sunsetPos = SunCalc.getPosition(times.sunset, aukLat, aukLong);
		var sunriseAzimuth = sunrisePos.azimuth;
		var sunsetAzimuth = sunsetPos.azimuth
		var sunriseAzimuthConverted = sunrisePos.azimuth * 180 / Math.PI;
		var sunsetAzimuthConverted = sunsetPos.azimuth * 180 / Math.PI;
		console.log(sunriseAzimuth);
		console.log(sunsetAzimuth);
		console.log(sunriseAzimuthConverted);
		console.log(sunsetAzimuthConverted);
	}	

	function azimuth3() {
		var dubLat = 25.2048;
		var dubLong = 55.2708;
		var times = SunCalc.getTimes(new Date(), dubLat, dubLong);
		var sunrisePos = SunCalc.getPosition(times.sunrise, dubLat, dubLong);
		var sunsetPos = SunCalc.getPosition(times.sunset, dubLat, dubLong);
		var sunriseAzimuth = sunrisePos.azimuth;
		var sunsetAzimuth = sunsetPos.azimuth;
		var sunriseAzimuthConverted = sunrisePos.azimuth * 180 / Math.PI;
		var sunsetAzimuthConverted = sunsetPos.azimuth * 180 / Math.PI;
		console.log(sunriseAzimuth);
		console.log(sunsetAzimuth);
		console.log(sunriseAzimuthConverted);
		console.log(sunsetAzimuthConverted);
	}	


	// Calculate aspect ratio of window
	$(window).resize(function() {
		var viewportWidth = $(window).width();
		var viewportHeight = $(window).height();
		var viewportRatio = viewportWidth / viewportHeight;
		console.log(viewportRatio)
	});

	azimuth1();
	setAnimDelay1();

	$("#one").on('click', function() {
		setAnimDelay1();
		azimuth1();
	});

	$("#two").on('click', function() {
		setAnimDelay2();
		azimuth2();
	});

	$("#three").on('click', function() {
		setAnimDelay3();
		azimuth3();
	});

});
