//文字飛入
$(document).scroll(function () {
    let y = $(this).scrollTop();

	


    if (y > 300 ) {
        $('.boxx5').fadeIn();
		$('.boxx6').fadeIn();
		$('.boxx7').fadeIn();
        $('.boxx8').fadeIn();
        $('.browncofe').fadeIn();
      
    } else {
		$('.boxx5').fadeOut();
		$('.boxx6').fadeOut();
		$('.boxx7').fadeOut();
        $('.boxx8').fadeOut();
        $('.browncofe').fadeOut();
    }



    if (y > 1000 ) {
        $('.business-commision').fadeIn();
		$('.business-commision1').fadeIn();
		$('.business-commision2').fadeIn();
        $('.commision1').fadeIn();
        $('.commision2').fadeIn();
      
    } else {
		$('.business-commision').fadeOut();
		$('.business-commision1').fadeOut();
		$('.business-commision2').fadeOut();
        $('.commision1').fadeOut();
        $('.commision2').fadeOut();
    }



	

	


    
});
