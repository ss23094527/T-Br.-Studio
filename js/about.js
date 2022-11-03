
//文字飛入
$(document).scroll(function () {
    let y = $(this).scrollTop();

	

	if (y > 360 ) {
        $('.about-us-card-body').fadeIn();
		$('.about-us-container-text').fadeIn();
		
      
    } else {
		$('.about-us-card-body').fadeOut();
		$('.about-us-container-text').fadeOut();
	
    }

	if (y > 650 ) {
        $('.commision-page-body1').fadeIn();
		
	
		
      
    } else {
		$('.commision-page-body1').fadeOut();
	
	
    }


	if (y > 800 ) {
        $('.commision-page-body2').fadeIn();
	
		
      
    } else {
		$('.commision-page-body2').fadeOut();
	
	
    }

	if (y > 900 ) {
        $('.commision-page-body3').fadeIn();
	
		
      
    } else {
		$('.commision-page-body3').fadeOut();
	
	
    }

    if (y > 2550 ) {
        $('.totoru-introduce').fadeIn();
		$('.head-icon-t').fadeIn();
		$('.totoru').fadeIn();

      
    } else {
		$('.totoru-introduce').fadeOut();
		$('.head-icon-t').fadeOut();
		$('.totoru').fadeOut();
    }




	if (y > 3050 ) {
        $('.browncofe-introduce').fadeIn();
		$('.browncofe-icon').fadeIn();
		$('.browncofe').fadeIn();
	
      
    } else {
		$('.browncofe-introduce').fadeOut();
		$('.browncofe-icon').fadeOut();
		$('.browncofe').fadeOut();

        
    }


	if (y > 4500 ) {
        $('.totoru-inform').fadeIn();
		$('.totoru-gmail').fadeIn();
		$('.totoru-phone').fadeIn();
		$('.gmail-t').fadeIn();
		$('.phone-t').fadeIn();
		$('.browncofe-inform').fadeIn();
		$('.browncofe-gmail').fadeIn();
		$('.browncofe-phone').fadeIn();
		$('.gmail-b').fadeIn();
		$('.phone-b').fadeIn();
	
      
    } else {
		$('.totoru-inform').fadeOut();
		$('.totoru-gmail').fadeOut();
		$('.totoru-phone').fadeOut();
		$('.gmail-t').fadeOut();
		$('.phone-t').fadeOut();
		$('.browncofe-inform').fadeOut();
		$('.browncofe-gmail').fadeOut();
		$('.browncofe-phone').fadeOut();
		$('.gmail-b').fadeOut();
		$('.phone-b').fadeOut();
    }




    
});

//contact us
function captchaCode() {
	var Numb1, Numb2, Numb3, Numb4, Code;     
	Numb1 = (Math.ceil(Math.random() * 10)-1).toString();
	Numb2 = (Math.ceil(Math.random() * 10)-1).toString();
	Numb3 = (Math.ceil(Math.random() * 10)-1).toString();
	Numb4 = (Math.ceil(Math.random() * 10)-1).toString();
	
	Code = Numb1 + Numb2 + Numb3 + Numb4;
	$("#captcha span").remove();
	$("#captcha input").remove();
	$("#captcha").append("<span id='code'>" + Code + "</span><input type='button' onclick='captchaCode();'>");
  }
  
  $(function() {
	captchaCode();
	
	$('#contactForm').submit(function(){
	  var captchaVal = $("#code").text();
	  var captchaCode = $(".captcha").val();
	  if (captchaVal == captchaCode) {
		$(".captcha").css({
		  "color" : "#609D29"
		});
	  }
	  else {
		$(".captcha").css({
		  "color" : "#CE3B46"
		});
	  }
	  
	  var emailFilter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,10})+$/;   
	  var emailText = $(".email").val();
	  if (emailFilter.test(emailText)) {
		$(".email").css({
		  "color" : "#609D29"
		});
	  }
	  else {
		$(".email").css({
		  "color" : "#CE3B46"
		});
	  }
	  
	  var nameFilter = /^([a-zA-Z \t]{3,15})+$/;
	  var nameText = $(".name").val();
	  if (nameFilter.test(nameText)) {
		$(".name").css({
		  "color" : "#609D29"
		});
	  }
	  else {
		$(".name").css({
		  "color" : "#CE3B46"
		});
	  }
	  
	  var messageText = $(".message").val().length;
	  if (messageText > 50) {
		$(".message").css({
		  "color" : "#609D29"
		});
	  }
	  else {
		$(".message").css({
		  "color" : "#CE3B46"
		});
	  }
	  
	  if ((captchaVal !== captchaCode) || (!emailFilter.test(emailText)) || (!nameFilter.test(nameText)) || (messageText < 50)) {
		return false;
	  }
	  if ((captchaVal == captchaCode) && (emailFilter.test(emailText)) && (nameFilter.test(nameText)) && (messageText > 50)) {
		$("#contactForm").css("display", "none");
		$("#form").append("<h2>Message sent!</h2>");
		return false;
	  }
	});       
  });