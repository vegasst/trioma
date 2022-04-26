$(document).ready(function() {

	$("#portfolio_grid").mixItUp();

	$(".s_portfolio li").click(function() {
		$(".s_portfolio li").removeClass("active");
		$(this).addClass("active");
	});

	$(".popup").magnificPopup({type:"image"});
	$(".popup_content").magnificPopup({
		type:"inline",
		midClick: true
	});

	$(".section_header").animated("fadeInUp", "fadeOutDown");
	$(".animation_1").animated("flipInY", "flipOutY");
	$(".animation_2").animated("fadeInLeft", "fadeOutRight");
	$(".animation_3").animated("fadeInRight", "fadeOutDown");
	$(".animation_zoom").animated("ZoomIn", "ZoomOut");

	$(".left .resume_item").animated("fadeInLeft", "fadeOutDown");
	$(".right .resume_item").animated("fadeInRight", "fadeOutDown");

	function heightDetect() {
		$(".main_head").css("height", $(window).height());
	};
	function DetectMenu()
	{
		var width = $('body').innerWidth();
		if (width < 768 || $(window).scrollTop() > 10) {
    $('.top_mnu_big').hide();
  	$(".toggle_mnu").show();}
    else
    {
    	$('.top_mnu_big').show();
    	$(".toggle_mnu").hide();}
	};
function ResizeHeaderBlocks()
{
	var width = $(window).width();
	var height = $(window).height();

if (width>600)
{
			w=width/3;
			h=height/2;
		}
		else
		{
		w=width/1,8;
			h=height/4;	
			}
		$('.top_wrapper').css({ height: height-100 });		
		$('.header_block_item').css({ height: h });	
		$('.header_block_item').css({ width: w });	
		

};


//функция счетчика


	//ActivateFixedMenu();
  DetectMenu();
	heightDetect();
	//ResizeHeaderBlocks();

	$(window).resize(function() {
		DetectMenu();
		heightDetect();
		//ResizeHeaderBlocks();
	});

var target = $('.counter');
var targetPos = target.offset().top;
var winHeight = $(window).height();
var scrollToElem = targetPos - winHeight;
var start = false;
$(window).scroll(function(){

  var winScrollTop = $(this).scrollTop();

  if(winScrollTop > scrollToElem && start == false){
start = true;
$('#counter_revers')
  .prop('number', $('#counter_revers').attr('data-from'))
  .animateNumber(
    {
      number: $('#counter_revers').attr('data-to'),
      numberStep: function(now, tween) {
        var target = $(tween.elem),
            rounded_now = Math.round(now);

        target.text(rounded_now);
      }
    },
    3000,
    'linear'
  );


  $('#counter_normal')
  .prop('number', $('#counter_normal').attr('data-from'))
  .animateNumber(
    {
      number: $('#counter_normal').attr('data-to')
    },
    3000
  );

    $('#counter_normal2')
  .prop('number', $('#counter_normal2').attr('data-from'))
  .animateNumber(
    {
      number: $('#counter_normal2').attr('data-to')
    },
    3000
  );

//**************************

  }
});

	
	$("input, select, textarea").jqBootstrapValidation();

	$(".top_mnu ul a").mPageScroll2id();


	//show_snow({ minSize: 5, maxSize: 50, newOn: 1000, flakeColor: '#FFFFFF' });



});

//$(function(){
//  $('.block').draggable();
//})

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
	$(".top_text h1").animated("fadeInRight", "fadeOutLeft");
	$(".top_text p").animated("fadeInLeft", "fadeOutLeft");
	$(".top_logo img").animated("bounceIn", "bounceOut");

}); 
