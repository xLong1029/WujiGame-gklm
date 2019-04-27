$(document).ready(function($){
	$(".video_list").mouseenter(function(){
		$(this).children(".video_img").children(".shade_bg").fadeIn(100);
		$(this).children(".video_img").children(".icon_play").fadeIn(100);
	});
	$(".video_list").mouseleave(function(){
		$(this).children(".video_img").children(".shade_bg").fadeOut();
		$(this).children(".video_img").children(".icon_play").fadeOut();
	});
	
	$("#HeroTab").tabso({
		cntSelect:"#HeroCon",
		tabEvent:"mouseover",
		tabStyle:"normal"
	});
		
	$(".hero_video").click(function(){		
		$(".popupbox").css({'display':'block', 'position':'fixed', 'z-index':'9999',	'left':'50%', 'top':'50%', 'margin-top': '-235px', 'margin-left':'-410px', 'width': '820px', 'height': '470px',	'color':'#fff', 'background-color':'#000', 'text-align':'center', 'line-height':'400px'});
		$(".pop_close").css({'position':'absolute', 'top':'-17px', 'right':'-70px', 'display': 'block', 'width':'60px', 'height':'60px', 'font':'bold 70px/60px simsun'});
		$(document.body).append("<div id='black_bg' style='border-top-width: 1px; border-top-style: solid; border-top-color: rgb(0, 0, 0); position: absolute; height: 1122px; z-index: 9998; width: 100%; left: 0px; top: 0px; opacity: 0.6; display: block; background-color: rgb(0, 0, 0);'>");
	});
	
	hidDialogs=function(){
		$(".popupbox").css('display','none');
		var obj = $("#black_bg");
		obj.remove();
	}
});