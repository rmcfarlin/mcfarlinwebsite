$(window).on("load", function () {
	$(".loader .inner").fadeOut(750, function() {
		$(".loader").fadeOut(1000);
	});
})

$(document).ready(function() {

	$('#slides').superslides({
		animation: 'fade',
		play: 5000,
		pagination: false
	});
	
	$('#values').superslides({
		animation: 'fade',
		play: 5000,
		pagination: false
	});


	var typed = new Typed(".typed", {
		strings: ["Accountant.", "Web Developer.", "Process Automation Specialist.", "Lifelong Learner."],
		typeSpeed: 60,
		loop: true,
		startDelay: 1000,
		showCursor: false
	});
	
	var values = new Typed(".values", {
		strings: ["Relentlessly pursue purposeful progress.", 
				"Give more in value than you receive in compensation.",
				"Everyone sweeps the floor.",
				"Treat every experience as an opportunity to learn.",
				"Strive for integrity and humility.",
				"Share bad news sooner rather than later."],
		typeSpeed: 100,
		loop: true,
		startDelay: 1000,
		showCursor: false
	});
	
	$(".owl-carousel").owlCarousel({
		loop: true,
		items: 4,
		responsive:{
			0:{
				items:1
			},
			480:{
				items: 2	
			},
			768:{
				items:3
			},
			938:{
				items:4
			}
		}
	});
    
    var skillsTopOffset = $(".skillsSection").offset().top;
    var statsTopOffset = $(".statsSection").offset().top;
	var countUpFinished = false;
    
    $(window).scroll(function() {
    	if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
    		$('.chart').easyPieChart({
		        easing: "easeInOut",
		        barColor: "#dfe6e9",
		        trackColor: false,
		        scaleColor: false,
		        lineWidth: 6,
		        size: 152,
		        onStep: function(from, to, percent) {
		        	$(this.el).find('.percent').text(Math.round(percent));
		        }
		    });	
    	}
    	
		if(!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) {
			$(".counter").each(function() {
				var element = $(this);
				var endVal = parseInt(element.text());
			
				element.countup(endVal);
			})
			
			countUpFinished = true;
		}
	
    });
    
    $("#navigation li a").click(function(event) {
    	event.preventDefault();
    	
    	var targetElement = $(this).attr("href");
    	var targetPosition = $(targetElement).offset().top;
    	
    	$("html, body").animate({scrollTop: targetPosition - 50}, "slow")
    });
    
    const nav = $("#navigation");
    const navTop = nav.offset().top;
    const val = $("#values");
    const valTop = val.offset().top;
    
    $(window).on("scroll", stickyNavigation);
    
    function stickyNavigation() {
    	var body = $("body");
    	if($(window).scrollTop() >= navTop) {
    		body.css("padding-top", nav.outerHeight() + "px");
    		body.addClass("fixedNav");
    	} else {
    		body.removeClass("fixedNav")
    		body.css("padding-top", 0);
    	}
    };

	$("[data-fancybox]").fancybox();
	
	$(".items").isotope({
		filter: '*',
		animationOptions: {
			duration: 1500,
			easing: 'linear',
			queue: false
		}
	});
	
	$("#filters a").click(function() {
		$("#filters .current").removeClass("current");
		$(this).addClass("current");
		
		var selector = $(this).attr("data-filter");
		
		$(".items").isotope({
			filter: selector,
			animationOptions: {
				duration: 1500,
				easing: 'linear',
				queue: false
			}
		});
		
		return false;
		
	});

});