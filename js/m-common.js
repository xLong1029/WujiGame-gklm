$(function() {
	function swipeWrap(e, n, t, o, i) {
		for (var a = $(e), r = t || !1, c = o || !1, s = i || !1, d = a.find(".swipe_con").length, l = a.find(".left_arrow"), h = a.find(".right_arrow"), p = 0; d > p; p++) {
			var m = a.find(".swipe_con").eq(p),
			u = m.find("a");
			u.length < 1 && m.remove()
		}
		if (d = a.find(".swipe_con").length, d > 1 && c) for (var p = 0; d > p; p++) {
			var f = "";
			0 == p && (f = "current"),
			a.find(".swipe_nav").append('<a href="javascript:;" class="' + f + '"></a>')
		}
		for (var g = a.find(".swipe_con").length > 0 ? a.find(".swipe_con").get(0).getElementsByTagName("img") : [], w = g.length, p = 0; w > p; p++) g[p].attributes["data-src"] && (g[p].src = g[p].attributes["data-src"].value);
		var v = new Swipe(a.find(".swipe").get(0), {
			startSlide: 0,
			speed: 400,
			auto: n,
			continuous: s,
			disableScroll: !1,
			stopPropagation: !1,
			callback: function(e, n) {
				for (var t = n.getElementsByTagName("img"), o = 0, i = t.length; i > o; o++) t[o].attributes["data-src"] && (t[o].src = t[o].attributes["data-src"].value);
				a.find(".swipe_nav a").removeClass("current").eq(e).addClass("current"),
				r && (0 == e ? (l.hide(), h.show()) : e == d - 1 ? h.hide() : (l.show(), h.show()))
			}
		});
		l.click(function() {
			v.prev()
		}),
		h.click(function() {
			v.next()
		}),
		a.find(".swipe_nav a").each(function(e) {
			$(this).bind("click",
			function() {
				v.slide(e)
			})
		})
	};	
	
	swipeWrap("#sliderA", "3000", !1, !0, !0),
	swipeWrap("#sliderB", !1, !0, !0, !0);
	
	/*var $appendTxt = '<div class="pop_cont"><div class="gift_info"><div>恭喜你，获得一个神秘的礼包暗号:</div><div class="anhao f_red">乐享无极</div><div style="padding:0 10px;">加入官方Q群：335862074，联系客服MM发出暗号，即可获得<span class="f_red">价值888元的游戏尊享礼包！</span></div><a onclick="giftClose();" class="btn_close">确定</a></div><div class="shade"></div></div>';*/
	
	var $appendTxt = '<div class="pop_cont"><div class="gift_info"><div>礼包活动暂未开启，敬请期待，谢谢支持!</div><a onclick="giftClose();" class="btn_close">确定</a></div></div>';
	
	//弹出礼包窗口
	$(".btn_gift").click(function(){
		var $winTop = $(window).scrollTop();
		
		$("#giftPop").append($appendTxt);
		//设置遮罩高度
		$(".shade").css({"height":$(document).height(),"display":"block"});
		
		//设置弹窗高度
		/*$(".gift_info").css("top",$winTop + 130);*/
	});
	
	//弹出视频窗口
	$(".video_btn").click(function(){
		$("#m_video").css({"display":"block"});
		document.getElementById("shipin").play();
		$(".shade").css({"height":$(document).height(),"display":"block"});
	});
	
	//关闭视频窗口
	$(".shade").click(function(){
		if($("#m_video").css("display")==="block")
		{
			$("#m_video").css({"display":"none"});
			$(".shade").css({"height":0,"display":"none"});
			document.getElementById("shipin").pause();
		}
		else return true;
	});
	
	//判断浏览器
	var browser = {
		versions: function () {
			var u = navigator.userAgent, app = navigator.appVersion;
			return {//移动终端浏览器版本信息
				trident: u.indexOf('Trident') > -1, //IE内核
				presto: u.indexOf('Presto') > -1, //opera内核
				webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
				gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
				mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
				ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
				android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
				iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
				iPad: u.indexOf('iPad') > -1, //是否iPad
				webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
			};
		}(),
		language: (navigator.browserLanguage || navigator.language).toLowerCase()
	}
		
	$(".down-btn").click(function(){
		if (browser.versions.mobile) {//判断是否是移动设备打开。browser代码在下面
			var ua = navigator.userAgent.toLowerCase();//获取判断用的对象
			//在微信中打开
			if (ua.match(/MicroMessenger/i) == "micromessenger") {
				/*_czc.push(["_trackEvent", "微信应用宝包", "游戏下载", "微信"]);
				$(this).attr("href","http://a.app.qq.com/o/simple.jsp?pkgname=com.tencent.tmgp.zywjsmz"); */
				alert("微信端安装包暂未开放，敬请期待！");
				return true;
			}
			
			//是否在安卓浏览器打开
			else if(browser.versions.android){
				/*_czc.push(["_trackEvent", "手机安卓包", "游戏下载", "手机官网"]);
				window.open("http://cdn.smz.wuji.com/01wj/moshen.wuji_A.1225.apk");*/
				alert("新包即将推出，敬请期待，谢谢！");
			}
			
			//是否在IOS浏览器打开
			else if (browser.versions.ios) {
				/*_czc.push(["_trackEvent", "手机iOS包", "游戏下载", "手机官网"]);*/
				alert("新包即将推出，敬请期待，谢谢！");
			}
			
			else{
				/*_czc.push(["_trackEvent", "手机安卓包", "游戏下载", "手机官网"]);
				window.open("http://cdn.smz.wuji.com/01wj/moshen.wuji_A.1225.apk");*/
				alert("新包即将推出，敬请期待，谢谢！");
			}
			
		} 
	});
	
	$('.btn_android').click(function(){
		if (browser.versions.mobile) {//判断是否是移动设备打开。browser代码在下面
			var ua = navigator.userAgent.toLowerCase();//获取判断用的对象
			//在微信中打开
			if (ua.match(/MicroMessenger/i) == "micromessenger") {
				/*_czc.push(["_trackEvent", "微信应用宝包", "游戏下载", "微信"]);
				$(this).attr("href","http://a.app.qq.com/o/simple.jsp?pkgname=com.tencent.tmgp.zywjsmz"); */
				alert("微信端安装包暂未开放，敬请期待！");
				return true;
			}
			
			//是否在安卓浏览器打开
			else if(browser.versions.android){
				/*_czc.push(["_trackEvent", "手机安卓包", "游戏下载", "手机官网"]);*/
				alert("新包即将推出，敬请期待，谢谢！");
			}
			
			else{
				/*_czc.push(["_trackEvent", "手机安卓包", "游戏下载", "手机官网"]);
				window.open("http://cdn.smz.wuji.com/01wj/moshen.wuji_A.1225.apk");*/
				alert("新包即将推出，敬请期待，谢谢！");
			}
		} 
	});
});

//关闭礼包窗口
function giftClose() {
	$(".pop_cont").remove();
	$(".shade").css({"height":0,"display":"none"});
}
	
function setTab(name,m,n){ 
	for( var i=1;i<=n;i++){ 
		var menu = document.getElementById(name+i); 
		var showCont = document.getElementById("cont_"+name+"_"+i); 
			menu.className = (i==m ? "on":""); 
			showCont.style.display = (i==m ? "block":"none"); 
	} 
}