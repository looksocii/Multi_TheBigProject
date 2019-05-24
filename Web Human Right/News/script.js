$(window).on('scroll', function(){
	if($(window).scrollTop()) {
		$('nav').addClass('black');
		//$('nav').removeClass('white');
	}
	else {
		$('nav').removeClass('black');
		//$('nav').addClass('white');
	}
});