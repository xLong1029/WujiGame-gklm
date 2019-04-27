$(document).ready(function($){
	$("#slides").slidesjs({
		width: 888,
		height: 486,
		play: {
		  active: true,
		  auto: true,
		  interval: 4000,
		  swap: true
		}
	});
	$(".picture_slide").mouseenter(function(){
		$(".slidesjs-previous").fadeIn();
		$(".slidesjs-next").fadeIn();
	});
	$(".picture_slide").mouseleave(function(){
		$(".slidesjs-previous").fadeOut();
		$(".slidesjs-next").fadeOut();
	});
	
	//媒体链接
	var partnerHeight = 77,
        partnerLen = Math.ceil($('#par_slider a').length / 7),
        partnerIndex = 0;
	if (partnerLen > 1) {
		$('#par_slider').append($('#par_slider').html());
		function partnerScrollFn(){
		  if (partnerIndex >= partnerLen) {
			$('#par_slider').scrollTop(0);
			partnerIndex = 0;
		  }
		  partnerIndex ++;
		  $('#par_slider').animate({
			scrollTop: partnerIndex * partnerHeight
		  }, 300)
		  setTimeout(partnerScrollFn, 3000);
		}
		setTimeout(partnerScrollFn, 3000);
	}
	
	//播放视频
	$(".video_btn").click(function(){
		var videoHref=$(this).attr('videoHref');
		if(videoHref!="")
		{
			$("#VideoContent").html("<video id='shipin' src='"+videoHref+"' controls='' width='100%' height='100%'><source src='"+videoHref+"' type='video/mp4'></video>");
			}
		else
		{
			$("#VideoContent").html("暂无视频，敬请期待...");
			}	
		$(".popupbox").css({'display':'block', 'position':'fixed', 'z-index':'9999','left':'50%', 'top':'50%', 'margin-top': '-235px', 'margin-left':'-410px', 'width': '820px', 'height': '470px',	'color':'#fff', 'background-color':'#000', 'text-align':'center', 'line-height':'400px'});
		$(".pop_close").css({'position':'absolute', 'top':'-17px', 'right':'-70px', 'display': 'block', 'width':'60px', 'height':'60px', 'font':'bold 70px/60px simsun'});
		$(document.body).append("<div id='black_bg' style='border-top-width: 1px; border-top-style: solid; border-top-color: rgb(0, 0, 0); position: absolute; height: 1122"+$(document).innerHeight()+"px;z-index: 9998; width: 100%; left: 0; top: 0; bottom:0; opacity: 0.6; display: block; background-color: rgb(0, 0, 0);'>");
	});
	
	hidDialogs=function(){
		$(".popupbox").css('display','none');
		$("#black_bg").remove();
		document.getElementById("shipin").pause();
	}
});