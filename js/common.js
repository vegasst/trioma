$(document).ready(function() {

	  $('.header__burger').click(function(event) {
    $('.header__burger,.header__menu_mob').toggleClass('active');
    $('body').toggleClass('lock')
  });  //burger


	$(".section_header").animated("fadeInUp", "fadeOutDown");
	$(".animation_1").animated("flipInY", "flipOutY");
	$(".animation_LR").animated("fadeInLeft", "fadeOutLeft");
	$(".animation_RL").animated("fadeInRight", "fadeOutRight");
	$(".animation_zoom").animated("zoomIn", "zoomOut");

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
		//DetectMenu();
		//heightDetect();
		//ResizeHeaderBlocks();
	});


var winHeight = $(window).height();

$(window).scroll(function(){

  var winScrollTop = $(this).scrollTop();

  if(winScrollTop > winHeight/2)
  {
  	$('.top_button').css({ display: "block" });	
  }
  else
  {
  	$('.top_button').css({ display: "none" });		
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

}); 
