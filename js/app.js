var count = 0;
var i;
var mobmenu = document.querySelector('.mob-menu');
var headings = document.querySelector('.headings');
var moba = document.querySelectorAll('.mob-a');

function showMenu(){
	if(count%2==0){
		mobmenu.style.height="280px";
		headings.style.display = 'none';
		for (i = 0; i < moba.length; i++) {
		moba[i].style.display = 'block';
		}
	}
	else{
		mobmenu.style.height="0px";
		headings.style.display = 'flex';
		for (i = 0; i < moba.length; i++) {
		moba[i].style.display = 'none';
		}
	}
	count++;
}

$('.features').waypoint(function(){
	$('.feature-card-left').addClass('animate__animated animate__slideInLeft');
	$('.feature-card-right').addClass('animate__animated animate__slideInRight');
	
},{
  offset: '30%'
})
$('.pricing').waypoint(function(){
	$('.pricing-card-left').addClass(' animate__animated animate__slideInLeft');
	$('.pricing-card-top').addClass(' animate__animated animate__slideInTop');
	$('.pricing-card-right').addClass(' animate__animated animate__slideInRight');
},{
  offset: '20%'
})
$('.trainers').waypoint(function(){
	$('.trainer-card-left').addClass(' animate__animated animate__slideInLeft');
	$('.trainer-card-bottom').addClass(' animate__animated animate__fadeInUpBig');
	$('.trainer-card-right').addClass(' animate__animated animate__slideInRight');
},{
  offset: '20%'
})

$(function(){
//    showHideNav();
    $(window).scroll(function(){
        showHideNav();
    })
    function showHideNav() {
        if($(window).scrollTop() > 70){
            $(".mob-nav").addClass("dark-bg-nav");
			$(".navbar").addClass("dark-bg-nav");
        }else{
            $(".navbar").removeClass("dark-bg-nav");
			  $(".mob-nav").removeClass("dark-bg-nav");
        }
    }
    
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
	dots:false,
    autoplay:500,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});


$(document).ready(function() {
  $('.gallerys').magnificPopup({
	  type:'image',
	  delegate:'a',
	  gallery:{
		  enabled:true
	  }
  });
});

