$(function() {

// THE BELOW SHOULD START TO FIX THE JUMPING INTERVAL

// var refreshIntervalId = setInterval(fname, 10000);

// /* later */
// clearInterval(refreshIntervalId);


// BEGIN TO TRUNCATE FUNCTIONS USING OBJECTS

	// var NYC = {
	// 	current: function(){moment().tz("America/New_York").format('HH:mm:ss')}
	// }

	// var AUK = {
	// 	current: function(){moment().tz("Pacific/Auckland").format('HH:mm:ss')}
	// }

	// var DUB = {
	// 	current: function(){moment().tz("Asia/Dubai").format('HH:mm:ss')}
	// }


	// function clock(city){
	//   	var time = city.current();
	// 	// $('.clock').html(time);
	// 	console.log(time)
	// };

	// clock(NYC);


	function NYC() {
	  	var nycDate = moment().tz("America/New_York").format('HH:mm:ss');
		$('.clock').html(nycDate);
	};

	function AUK() {
	    var aukDate = moment().tz("Pacific/Auckland").format('HH:mm:ss');
	    $('.clock').html(aukDate);
	};

	function DUB() {
	    var dubDate = moment().tz("Asia/Dubai").format('HH:mm:ss');
	    $('.clock').html(dubDate);
	};

	function startNYC() {
		startNYC = function(){ setInterval(function(){ NYC() }, 1000)};
	};

	var startNYC = function(){ setInterval(function(){ NYC() }, 1000)};
	var startAUK = function(){ setInterval(function(){ AUK() }, 1000)};
	var startDUB = function(){ setInterval(function(){ DUB() }, 1000)};

	startNYC();

	function stopClock() {
		clearInterval(startNYC);
		clearInterval(startDUB);
		clearInterval(startAUK);
	};

	$("#one").on('click', function() {
		stopClock();
		startNYC();
	});

	$("#two").on('click', function() {
		stopClock();
		startAUK();
	});

	$("#three").on('click', function() {
		stopClock();
		startDUB();
	});

	// function default() {
	// 	var default = setInterval(startClock, 1000;)
	// }

	// function startClock() {
	// 		var nycDate = moment().tz("America/New_York").format('HH:mm:ss');
	// 		$('.clock').html(nycDate);
	// 	};


// function nycDate() {
// 	setInterval(function() {
// 	    var nycDate = moment().tz("America/New_York").format('HH:mm:ss');
// 	    $('.clock').html(nycDate);
// 	}, 1000);
// };

// function dubDate() {
// 	setInterval(function() {
// 	    var dubDate = moment().tz("Asia/Dubai").format('HH:mm:ss');
// 	    $('.clock').html(dubDate);
// 	}, 1000);
// };

// function aukDate() {
// 	setInterval(function() {
// 	    var aukDate = moment().tz("Pacific/Auckland").format('HH:mm:ss');
// 	    $('.clock').html(aukDate);
// 	}, 1000);
// };

// nycDate();





// function addZero(i) {
//     if (i < 10) {
//         i = "0" + i;
//     }
//     return i;
// }

// setInterval(function() {
//     var date = new Date();
//     var h = addZero(date.getHours());
//     var m = addZero(date.getMinutes());
//     var s = addZero(date.getSeconds());
//     $('.DUB').html(
//         h + ":" + m + ":" + s
//         );
// }, 500);

// function preventOverageDub(i) {
//     if (i <= 14) {
//         i = i + 9;
//     }

//     else {
//     	i = i - 15;
//     }

//     return i;
// }


});