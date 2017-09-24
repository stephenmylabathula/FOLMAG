function change_background_image(image){
	var imagepath = 'url('+image+')';
		$('#bg').fadeOut('slow');
		var imagepath = 'url('+image+')';
	
		setTimeout(function() { 
				$('#bg').css('background-image', imagepath); 
				$('#bg').fadeIn('slow'); }, 500);
}





function ReplaceContentInContainer(id,content) {
var container = document.getElementById(id);
container.innerHTML = content;
}





var containerID = "title";
var timerID = setInterval("CountdownTimer()",3000);
var content = "<h1 style=\"text-align:left\">Interview With Billy Graham</h1>";

function CountdownTimer() {	
	ReplaceContentInContainer(containerID, content);
}


$(window).load(function() {
    $('.flexslider').flexslider({
		controlNav:false
	}); 
});

$(window).load(function() {
$( '#frame' ).bind( 'mousewheel DOMMouseScroll', function ( e ) {
var e0 = e.originalEvent,
delta = e0.wheelDelta || -e0.detail;
this.scrollTop += ( delta < 0 ? 1 : -1 ) * 30;
e.preventDefault();
});
});
  
$(document).ready(function() {
		$(".fancybox").fancybox();
	});
	
$(window).load(function() {
  $('.flexslider1').flexslider({
	animation: "slide",
    animationLoop: true,
	move: 2,
    itemWidth: 312,
    itemMargin: 5,
    minItems: 2,
    maxItems: 3}); 
});



