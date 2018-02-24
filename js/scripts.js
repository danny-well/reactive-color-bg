$(function() {

	$("#one a").focus();

	// function do_this(multiplier){
	// 	console.log("DOING THIS")
	// 	console.log(2 * multiplier)
	// }

	// do_this(4)
	// do_this(1)

	var NYC = {
	    lat: 40.6782,
	    long: -73.9442
	}

	var AUK = {
		lat: -36.8485,
		long: 174.7633
	}

	var DUB = {
		lat: 25.2048,
		long: 55.2708
	}

	function setAnimDelay(city){
		var lat = city.lat;
		var long = city.long;
		var times = SunCalc.getTimes(new Date(), lat, long);
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


	// Calculate angle of sunrise and sunset azimuth

	function azimuth(city) {
		var lat = city.lat;
		var long = city.long;
		var times = SunCalc.getTimes(new Date(), lat, long);
		var sunrisePos = SunCalc.getPosition(times.sunrise, lat, long);
		var sunsetPos = SunCalc.getPosition(times.sunset, lat, long);
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

	azimuth(NYC);
	setAnimDelay(NYC);

	$("#one").on('click', function() {
		setAnimDelay(NYC);
		azimuth(NYC);
	});

	$("#two").on('click', function() {
		setAnimDelay(AUK);
		azimuth(AUK);
	});

	$("#three").on('click', function() {
		setAnimDelay(DUB);
		azimuth(DUB);
	});

});

