$(document).ready(function(){
		$("#header").removeClass("#header-default");
	$(window).scroll(function(){
		if ($(this).scrollTop() > 10) {
			$("#header").css("background", "#fff");
			$(".navbar-button a").css("color", "#222");
		} else {
			$("#header").css("background", "none");
			$(".navbar-button a").css("color", "$fonts");
		};
	});

	$("#header").removeClass("addClass");
	$(window).scroll(function(){
		if ($(this).scrollTop() > 10) {
			$("#header").addClass("addClass");
		} else {
			$("#header").removeClass("addClass");
		};
	});

	$(".scrollDown").click(function(){
	$("html, body").animate({scrollTop: $("#section_first").height() - 100 },"slow");

	return false;});

	$('.navbar-button').click(function(){
		$('.navbar').slideToggle(500);
	});


  $(window).load(function() {
    setTimeout(function() {
      $('.banter-loader, .preloader').fadeOut('slow', function() {});
   	 },1000);
  	});

	$('a[href^="#"]').bind("click", function(e){
	  var anchor = $(this);
	  $('html, body').stop().animate({
	   scrollTop: $(anchor.attr("href")).offset().top 
	  }, 1000);
	  e.preventDefault();
	 });
	 return false;﻿

	  var $btnTop = $(".btn-top")
		$(window).on("scroll", function(){
			if ($(window).scrollTop() > 20){
				$btnTop.fadeIn();
			}else{
				$btnTop.fadeOut();
			}
		});

		$btnTop.on("click", function(){
			$("html,body").animate({scrollTop:0}, 800)
		});

});
