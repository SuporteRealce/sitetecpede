$(document).ready(function(){
	$('.btn-header-responsivo').click(function(){
		$(this).toggleClass('toggle');
		$('.header-responsivo').toggleClass('header-responsivo-ativo');
		$('.header-responsivo ul').toggleClass('ul-ativo');
	});

	$('.header-responsivo ul li a').click(function(){
		$('.header-responsivo ul').toggleClass('ul-ativo');
		$('.btn-header-responsivo').toggleClass('toggle');
		$('.header-responsivo').toggleClass('header-responsivo-ativo');
	});
});

$(window).on('scroll', function(){
	var posicaoAtual = $(window).scrollTop();
	var posicaoDiv = $('.header').position().top >= 0;

	if(posicaoAtual>=(posicaoDiv)) {
		$('.header').addClass('header-fixado');
		$('.header-responsivo').addClass('header-fixado');
	} else {
		$('.header').removeClass('header-fixado');
		$('.header-responsivo').removeClass('header-fixado');
	}
});

debounce = function(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments; 
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait); 
		if(callNow) func.apply(context, args);
	};
};

(function() {
	var $target = $('.anime'),
		animationClass = 'anime-start', 
		offset = $(window).height() * 3/4;

	function animeScroll() {
		var documentTop = $(document).scrollTop();

		$target.each(function() {
			var itemTop = $(this).offset().top;
			if(documentTop > itemTop - offset){
				$(this).addClass(animationClass);
			} else {
				$(this).removeClass(animationClass);
			}
		})
	}

	animeScroll();

	$(document).scroll(debounce(function() {
		animeScroll();
		console.log('teste');
	}, 200));		
}());
