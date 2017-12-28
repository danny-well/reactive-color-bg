$(function() {



	// var nycLat = 40.6782;
	// var nycLong = -73.9442;
	// var aukLat = -36.8485;
	// var aukLong = 174.7633;
	// var dubLat = 25.2048;
	// var dubLong = 55.2708;
	// var focusNYC = $("#one a").is(":focus");
	// var focusAUK = $("#two a").is(":focus");
	// var focusDUB = $("#three a").is(":focus");


	// if (focusNYC) {
	// 	var times = SunCalc.getTimes(new Date(), nycLat, nycLong)
	// }

	// else if (focusAUK) {
	// 	var times = SunCalc.getTimes(new Date(), aukLat, aukLong)
	// }

	// else if (focusDUB) {
	// 	var times = SunCalc.getTimes(new Date(), dubLat, dubLong)
	// }

	// else {
	// 	var times = SunCalc.getTimes(new Date(), nycLat, nycLong)
	// }


	// // var times = SunCalc.getTimes(new Date(), aukLat, aukLong);


	// var dubLat = 25.2048;
	// var dubLong = 55.2708;
	// var sunriseHour = times.sunrise.getHours();
	// var sunriseMin = times.sunrise.getMinutes();		
	// var nowHour = new Date().getHours();
	// var nowMin = new Date().getMinutes();
	// var hourDiff = sunriseHour - nowHour;
	// var minDiff = sunriseMin - nowMin;
	// var hoursAsPercent = hourDiff * 4.16; // Convert hours to percentage of day
	// var minsAsPercent = minDiff / 60 * 4.16; // Convert minutes to percentage of day
	// var totalPercent = hoursAsPercent + minsAsPercent; // Get full percentage
	// var animationDelay = nowHour >= 0 && nowHour < sunriseHour ? -86400 - ((totalPercent / 100 * 86400) * -1) : totalPercent / 100 * 86400; // Calculate animation delay

	// console.log(-86400 - ((totalPercent / 100 * 86400) * -1))

	$("#one a").focus();

	function setAnimDelay1(){
		var nycLat = 40.6782;
		var nycLong = -73.9442;
		var times = SunCalc.getTimes(new Date(), nycLat, nycLong)
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

	function setAnimDelay2(){
		var aukLat = -36.8485;
		var aukLong = 174.7633;
		var times = SunCalc.getTimes(new Date(), aukLat, aukLong)
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
		var dubLong = 55.2708;å
		var times = SunCalc.getTimes(new Date(), dubLat, dubLong)
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

	setAnimDelay1();

	$("#one").on('click', function() {
		setAnimDelay1();
	});

	$("#two").on('click', function() {
		setAnimDelay2();
	});

	$("#three").on('click', function() {
		setAnimDelay3();
	});

});
