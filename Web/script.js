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

function change(element,value) {
	element.parentElement.setAttribute('data-select',value);

};


$('choice1').on('click', function() { // when you click the div
  $(this).removeClass('hover'); // add the class 'no-hover'
});

$('choice2').on('click', function() { // when you click the div
  $(this).unbind("mouseenter mouseleave"); // add the class 'no-hover'
});