$(function() {
    var data = [
        ["阿努比斯", "anbs"],
        ["蚩尤", "cy"],
        ["狐妖", "hy"],
        ["帽子女巫", "mznw"],
        ["比诺曹", "bnc"],
        ["特蕾莎", "tls"],
        ["田禹治", "tyz"],
        ["亚巴顿", "ybd"],
        ["雅典娜", "ydn"],
        ["贞德", "zd"],
        ["治疗奈丽", "zlnl"]
    ];
    var b = [],
        t = [];
    for (var i = 0, len = data.length; i < len; i++) {
        if (i == 0) {
            var c1 = " class='active' style='opacity:1; filter:alpha(opacity=100);'"
        } else {
            var c1 = ""
        }
        b.push("<li" + c1 + "><img class='inbetweening' title='" + data[i][0] + "' src='images/" + data[i][1] + ".jpg'/></li>");
        t.push("<li" + c1 + "><img title='" + data[i][0] + "_缩略图' src='images/thumbnails/" + data[i][1] + ".jpg'/></li>")
    };
    $(".picBig_list").html(b.join(""));
    $(".pic_sliderbox").html(t.join(""));
    var linum = $('.pic_sliderbox li').length,
        box_h = $('.pic_nav_box').height() + 18,
        ul_h = linum * 168,
		page_n = ul_h / box_h,
        scroll_n = Math.floor(ul_h / box_h),
        ml = 0;
		
	if(page_n == scroll_n) scroll_n-=1;	
    $(".pic_sliderbox").css('height', ul_h + 'px');
    $(".pic_next").click(function() {
        if ($('.pic_sliderbox').is(':animated')) {
            $('.pic_sliderbox').stop(true, true)
        }
        if ($('.pic_sliderbox li').length > 4) {
            ml = parseInt($('.pic_sliderbox').css('top'));
            if (ml == box_h * scroll_n * -1) {
                alert("已经是最后一页了！");
                return true
            } else if (ml <= 0 && ml > (ul_h * -1)) {
                $('.pic_sliderbox').animate({
                    top: ml - box_h + 'px'
                }, 'slow')
            }
        } else return false
    });
    $(".pic_prev").click(function() {
        if ($('.pic_sliderbox').is(':animated')) {
            $('.pic_sliderbox').stop(true, true)
        }
        if ($('.pic_sliderbox li').length > 4) {
            ml = parseInt($('.pic_sliderbox').css('top'));
            if (ml == 0) {
                alert("已经是第一页了！");
                return true
            } else if (ml < 0 && ml > (ul_h * -1)) {
                $('.pic_sliderbox').animate({
                    top: ml + box_h + 'px'
                }, 'slow')
            }
        } else return false
    })
});