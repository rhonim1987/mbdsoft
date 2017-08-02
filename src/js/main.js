var $menu = $('.menu');
var $logo = $('.logo--link');
var $nav = $('.nav--link');
var $menuHeight = $menu.height();
console.log($menuHeight);


var stickyMenu = function(){
	var $scrollTop = $(window).scrollTop();
	console.log($scrollTop);
	if($scrollTop >= $menuHeight){
		$menu.addClass('menuSticky');
		$logo.addClass('logoSticky');
		$nav.addClass('navSticky');
	}else{
		$menu.removeClass('menuSticky');
		$logo.removeClass('logoSticky');
		$nav.removeClass('navSticky');
	}
}

$(window).on('scroll', stickyMenu);

