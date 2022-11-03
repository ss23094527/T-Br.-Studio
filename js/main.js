


 // go to top
jQuery(document).ready(function($) {
	
	$('.top').click(function(event) {
		event.preventDefault();

		$('html, body').animate({
			scrollTop: 0
		},
			1000);
	});

});



 // loading animation
$(window).on('load', function() { // makes sure the whole site is loaded 
	$('#status').fadeOut(); // will first fade out the loading animation 
	$('#preloader').delay(250).fadeOut('slow'); // will fade out the white DIV that covers the website. 
	$('body').delay(250).css({'overflow':'visible'});
  })

  $(document).ready(function() {
	$('#fullpage').fullpage();
});

//文字飛入
$(document).scroll(function () {
    let y = $(this).scrollTop();
    if (y > 150 ) {
        $('.painters').fadeIn();
      
    } else {
		$('.painters').fadeOut();
        
    }

	if (y > 400 ) {
        $('.painter-icon-A').fadeIn();
		$('.painter-icon-B').fadeIn();
      
    } else {
		$('.painter-icon-A').fadeOut();
		$('.painter-icon-B').fadeOut();
        
    }

	if (y > 600 ) {
        $('.about_title').fadeIn();
		$('.about_title2').fadeIn();
      
    } else {
		$('.about_title').fadeOut();
		$('.about_title2').fadeOut();
        
    }



    if (y > 780) {
        $('.portfoliotext').fadeIn();
    } else {
        $('.portfoliotext').fadeOut();
    }

    


//作品圖飛入


if (y > 850) {
	$('.item').fadeIn();
} else {
	$('.item').fadeOut();
}


});