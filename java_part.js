$(document).ready(function() {
	$(window).scroll(function() {
		if($(document).scrollTop() > 400) {
			$(".line1").fadeIn(1000);
			$(".firstline img").animate({opacity: 1}, 1000);
		}
	});
});

$(document).ready(function() {
	$(window).scroll(function() {
		if($(document).scrollTop() > 750) {
			$(".line2").fadeIn(1000);
			$(".secondline img").animate({opacity: 1}, 1000);
		}
	});
});

$(document).ready(function() {
	$(window).scroll(function() {
		if($(document).scrollTop() > 1100) {
			$(".line3").fadeIn(1000);
			$(".thirdline img").animate({opacity: 1}, 1000);
		}
	});
});

$(document).ready(function() {
	$(window).ready(function() {
		$(".welcome").animate({opacity: 1}, 1500);
		$(".sidebar li").animate({opacity: 1}, 1500);
	});
});

$(document).ready(function() {  //what-we-do text appearing
	$(window).scroll(function() {
		if($(document).scrollTop() > 1450) {
			$(".what-we-do-1").animate({opacity: 1}, 1000);
		}
	});
});

$(document).ready(function() {  //table appearing
	$(window).scroll(function() {
		if($(document).scrollTop() > 1600) {
			$(".row1").animate({opacity: 1}, 1000);
			$(".col").animate({opacity: 1}, 1000);
		}
		if($(document).scrollTop() > 1930) {
			$(".row2").animate({opacity: 1}, 1000);
		}
		if($(document).scrollTop() > 2260) {
			$(".row3").animate({opacity: 1}, 1000);
		}
		if($(document).scrollTop() > 2400) {
			$("#b5").animate({opacity: 1}, 1000);
		}
	});
});

$(document).ready(function() {  //what-we-do text appearing
	$(window).scroll(function() {
		if($(document).scrollTop() > 2700) {
			$(".get-in-touch-1").animate({opacity: 1}, 1000);
		}
	});
});

$(document).ready(function() {  //what-we-do text appearing
	$(window).scroll(function() {
		if($(document).scrollTop() > 2900) {
			$(".forms").animate({opacity: 1}, 1000);
			$(".contacts").animate({opacity: 1}, 1000);
			$(".social-icons").animate({opacity: 1}, 1000);
		}
	});
});

