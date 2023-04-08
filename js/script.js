
var images = document.images,
	images_total_count = images.length,
	images_loaded_count = 0,
	perc_display = document.getElementById('load-perc');


for (var i = 0; i < images_total_count; i++) {
	image_clone = new Image();
	image_clone.onload = image_loaded;
	image_clone.onerror = image_loaded;
	image_clone.src = images[i].src;

}

function image_loaded() {
	images_loaded_count++;

	perc_display.innerHTML = ((((100 / images_total_count) * images_loaded_count) << 0) + '%');
	if (images_loaded_count >= images_total_count) {
		document.body.onload = function () {
			setTimeout(function () {
				var preloader = document.getElementById('page-preloader');
				if (!preloader.classList.contains('done')) {
					preloader.classList.add("done")
				}
			}, 1000);
		}
	}
}
$(function () {

	$('.slider__wrapper').slick({

		prevArrow: '<button type="button" class="slider__btn slider__btn-right"><div ></button>',
		nextArrow: '<button type="button" class="slider__btn slider__btn-left"><div  ></button>',
		slidesToShow: 6,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [{
			breakpoint: 1140,
			settings: {
				slidesToShow: 5,

			}
		},
		{
			breakpoint: 870,
			settings: {
				slidesToShow: 3,

			}
		},
		{
			breakpoint: 580,
			settings: {
				slidesToShow: 2,
				

			}
		},
		
		
	],
	});
	var header = $("#header"),
		introH = $("#screen").innerHeight(),
		aboutH = $("#about").offset().top,
		portfolioH = $("#portfolio").offset().top,
		serviceH = $("#service").offset().top,
		contactsH = $("#contacts").offset().top,
		scrollOffset = $(window).scrollTop();
		aboutH=aboutH-30;
		portfolioH = portfolioH -100;
		serviceH =serviceH -60;
		contactsH =contactsH-230;

	/* Fixed Header*/
	checkScroll(scrollOffset);
	check(scrollOffset);
	$(window).on("scroll", function () {
		scrollOffset = $(this).scrollTop();
		checkScroll(scrollOffset);
		check(scrollOffset);
	});

	function checkScroll(scrollOffset) {
		if (scrollOffset >= introH) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	}

	function addClass(x){
        for(let m=1; m<5; m++){
            if(x==m){
                $("#nav ." + m).addClass("active");
				$("#logo").removeClass("active");
            } else{
                $("#nav ." + m).removeClass("active");
            }
        }
    }
	function check(scrollOffset) {
		if (scrollOffset >= aboutH && scrollOffset <= serviceH) {
			addClass(1);
		} else if (scrollOffset > serviceH && scrollOffset <= portfolioH){
			addClass(2);
		} else if (scrollOffset > portfolioH && scrollOffset < contactsH){
			addClass(3);
		} else if (scrollOffset >= contactsH ){
			addClass(4);
		}else if (scrollOffset = innerHeight ){
			addClass(0);
			$("#logo").addClass("active");
		}
		

	}

	/* Smooth scroll*/
	$("[data-scroll]").on("click", function (event) {
		event.preventDefault();
		var $this = $(this),
			blockId = $(this).data('scroll'),
			blockoffset = $(blockId).offset().top;
		$("#nav a").removeClass("active");
		$("#logo").removeClass("active");
		$this.addClass("active");
		$("html,body").animate({
			scrollTop: blockoffset
		}, 500);
	});
	// /*Menu nav toggly*/
	$("#header__burger").on("click", function(event) {
	    event.preventDefault();
	    // $('.header__burger-menu').toggleClass("active");
	    // $("#nav").toggleClass("active");
		if($("#nav ").hasClass("active")){
            $('.header__burger-menu').toggleClass("active");
        $("#nav").toggleClass("active");
          function timeS() {
            $("#nav").toggleClass("active1");
          }
          setTimeout(timeS, 500);
        }else{
            $('.header__burger-menu').toggleClass("active");
            $("#nav").toggleClass("active1");
              function timeS() {
                $("#nav").toggleClass("active");
              }
              
              setTimeout(timeS, 100);
        }
	});

});
$('.contacts__btn').prop('disabled', true);
$('#What').on('keyup', function () {
	if ($.trim($('input').val()).length > 0 && $.trim(($('textarea').val())).length > 0) {
		$('.contacts__btn').prop('disabled', false);
	}
	else {
		$('.contacts__btn').prop('disabled', true);
	}
});










