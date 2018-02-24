$(function() {

// THE BELOW SHOULD START TO FIX THE JUMPING INTERVAL

    var nIntervId;
 
    function changeColor() {
      nIntervId = setInterval(flashText, 1000);
    }
 
    function flashText() {
      var oElem = document.getElementById('my_box');
      oElem.style.color = oElem.style.color == 'red' ? 'blue' : 'red';
      // 'red' ? 'blue' : 'red' is a ternary operator.
    }
 
    function stopTextColor() {
      clearInterval(nIntervId);
    }








	// var notPlaying = false;

	var default;

	function startClock() {
			var nycDate = moment().tz("America/New_York").format('HH:mm:ss');
			if(notPlaying === false){
			$('.clock').html(nycDate);
			}
		};

	function default() {
		default = setInterval(startClock, 1000;)
	}

	startClock();

	    function stopClock() {
	      clearInterval(default);
	      clearInterval();
	      clearInterval();
	    }









function nycDate() {
	setInterval(function() {
	    var nycDate = moment().tz("America/New_York").format('HH:mm:ss');
	    $('.clock').html(nycDate);
	}, 1000);
};

function dubDate() {
	setInterval(function() {
	    var dubDate = moment().tz("Asia/Dubai").format('HH:mm:ss');
	    $('.clock').html(dubDate);
	}, 1000);
};

function aukDate() {
	setInterval(function() {
	    var aukDate = moment().tz("Pacific/Auckland").format('HH:mm:ss');
	    $('.clock').html(aukDate);
	}, 1000);
};

nycDate();

	$("#one").on('click', function() {
		// notPlaying = true;
		nycDate();
	});

	$("#two").on('click', function() {
		// notPlaying = true;
		aukDate();
	});

	$("#three").on('click', function() {
		// notPlaying = true;
		dubDate();
	});





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




  // var decimal_places = 1;
  // var decimal_factor = decimal_places === 0 ? 1 : decimal_places * 10;

  // $('#target').animateNumber(
  //   {
  //     number: 100 * decimal_factor,
  //     color: 'green',
  //     'font-size': '30px',

  //     numberStep: function(now, tween) {
  //       var floored_number = Math.floor(now) / decimal_factor,
  //           target = $(tween.elem);
  //       if (decimal_places > 0) {
  //         floored_number = floored_number.toFixed(decimal_places);
  //       }

  //       target.text(floored_number + ' %');
  //     }
  //   },
  //   15000
  // )


});