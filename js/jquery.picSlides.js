$(function(){
	var oFocus=$('#pic_wrap_focus'),
		oThumbnails=oFocus.find('.pic_nav_thumbnails'),
		oBig=oFocus.find('.pic_wrap_big'),
		aTLi=oThumbnails.find('li'),
		aBLi=oBig.find('li'),
		index=0,
		aBLiImg = aBLi.eq(0).children('.inbetweening'),
		imgSrc= aBLiImg.attr('src');
		aBLi.eq(0).css('background','url('+imgSrc+') center no-repeat');
	aTLi.click(function(){
		index=$(this).index();
		$(this).addClass('active').siblings().removeClass();
		aBLi.eq(index).addClass('active').siblings().removeClass();
		aBLi.eq(index).stop().animate({'opacity':1},300).siblings().stop().animate({'opacity':0},300);
		
		aBLiImg = aBLi.eq(index).children('.inbetweening');
		imgSrc= aBLiImg.attr('src');
		aBLi.eq(index).css('background','url('+imgSrc+') center no-repeat');
	});
});