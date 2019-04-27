$(function() {
    var data = [
        ["弗莱迪", "img_hero_7000_5000"],
        ["猪綱烈", "img_hero_7001_5001"],
        ["比诺曹", "img_hero_7002_5002"],
        ["亚巴顿", "img_hero_7003_5003"],
        ["奈丽", "img_hero_7006_5006"],
        ["菲娜", "img_hero_7008_5008"],
        ["黛安娜", "img_hero_7009_5009"],
        ["NTR", "img_hero_7011_5011"],
        ["梦露", "img_hero_7012_5012"],
        ["杰森", "img_hero_7014_5014"],
        ["格尔曼", "img_hero_7015_5015"],
        ["多哥", "img_hero_7016_5016"],
        ["巴格兔", "img_hero_7017_5017"],
        ["本尼", "img_hero_7018_5018"],
        ["霸波尔奔", "img_hero_7021_5021"],
        ["特蕾莎", "img_hero_7024_5024"]
    ];
    var dataherf = [
        ["fld"],
        ["zgl"],
        ["bnc"],
        ["ybd"],
        ["nl"],
        ["fn"],
        ["dan"],
        ["ntr"],
        ["menglu"],
        ["js"],
        ["gem"],
        ["dg"],
        ["bgt"],
        ["bn"],
        ["bbeb"],
        ["tls"]
    ];
    var c = [];
    for (var i = 0, len = data.length; i < len; i++) {
        if (window.location.href.indexOf(dataherf[i]) != -1) {
            var c1 = " class='active'"
        } else {
            var c1 = ""
        }
        c.push("<li" + c1 + "><a href='../" + dataherf[i] + "/index.html'><img title='" + data[i][0] + "' src='../images/card/" + data[i][1] + ".jpg'/><span class='card_name'>" + data[i][0] + "</span><div class='card_shade'></div></a></li>")
    };
    $(".mainlist").html(c.join(""));
    var linum = $('.mainlist li').length,
        box_w = $('.card_nav_box').width(),
        indexnum = $('.mainlist li.active').index(),
        ul_w = linum * 143,
        scroll_n = Math.floor(ul_w / box_w),
        pagenum = Math.ceil(ul_w / box_w),
        nowpage = 1,
        ml = 0;
    if (pagenum > 0) {
        nowpage = Math.ceil((indexnum + 1) / 7);
        $('.now_page').text(nowpage);
        $('.all_page').text(pagenum)
    } else return false; if (nowpage > 1) {
        $(".card_sliderbox").css('left', -(nowpage - 1) * box_w + 'px')
    }
    $(".card_sliderbox").css('width', ul_w + 'px');
    $(".nav_next").click(function() {
        if ($('.mainlist').is(':animated')) {
            $('.mainlist').stop(true, true)
        }
        if ($('.mainlist li').length > 7) {
            ml = parseInt($('.mainlist').css('left'));
            if (ml == box_w * scroll_n * -1) {
                alert("已经是最后一页了！");
                return true
            } else if (ml <= 0 && ml > (ul_w * -1)) {
                $('.mainlist').animate({
                    left: ml - box_w + 'px'
                }, 'slow');
                nowpage += 1;
                $('.now_page').text(nowpage)
            }
        } else return false
    });
    $(".nav_prev").click(function() {
        if ($('.mainlist').is(':animated')) {
            $('.mainlist').stop(true, true)
        }
        if ($('.mainlist li').length > 7) {
            ml = parseInt($('.mainlist').css('left'));
            if (ml == 0) {
                alert("已经是第一页了！");
                return true
            } else if (ml < 0 && ml > (ul_w * -1)) {
                $('.mainlist').animate({
                    left: ml + box_w + 'px'
                }, 'slow');
                nowpage -= 1;
                $('.now_page').text(nowpage)
            }
        } else return false
    });
    $("#navHide").click(function() {
        $(".nav_page").css('display', 'none');
        $(".pic_select_nav").animate({
            height: 29
        });
        $(".nav_bg_i").css('background-position-y', '-18px')
    });
    $(".nav_bg_t").hover(function() {
        if ($(".pic_select_nav").height() == 29) {
            $(".nav_page").css('display', 'block');
            $(".pic_select_nav").animate({
                height: 236
            });
            $(".nav_bg_i").css('background-position-y', '8px')
        }
    });
    $(".pic_sliderbox li").click(function() {
        $(".skin_name").find('label').text($(this).find('img').attr('title'))
    });
    $(".ability_box li").click(function() {
        var nowindex = $(this).index(),
            nowDesc = $(this).eq(nowindex).children(".ability_desc");
        $(".ability_box li").each(function() {
            var findDesc = $(this).find(".ability_desc");
            if ($(this).index() == nowindex) {
                return true
            } else {
                if (findDesc.is((':visible'))) {
                    findDesc.animate({
                        width: 'toggle'
                    })
                }
            }
        });
        $(this).toggleClass('active').siblings().removeClass();
        $(this).find(".ability_desc").animate({
            width: 'toggle'
        })
    });
    $(".hero_video").click(function() {
        var videoHref = $(this).find('a').attr('videoHref');
        if (videoHref != "") {
            $("#VideoContent").html("<embed src='" + videoHref + "' allowFullScreen='true' quality='high' bgcolor='#000000' width='800' height='450' align='middle' allowScriptAccess='always' type='application/x-shockwave-flash'></embed>")
        } else {
            $("#VideoContent").html("暂无视频，敬请期待...")
        }
        $(".popupbox").css({
            'display': 'block',
            'position': 'fixed',
            'z-index': '9999',
            'left': '50%',
            'top': '50%',
            'margin-top': '-235px',
            'margin-left': '-410px',
            'width': '820px',
            'height': '470px',
            'color': '#fff',
            'background-color': '#000',
            'text-align': 'center',
            'line-height': '400px'
        });
        $(".pop_close").css({
            'position': 'absolute',
            'top': '-17px',
            'right': '-70px',
            'display': 'block',
            'width': '60px',
            'height': '60px',
            'font': 'bold 70px/60px simsun'
        });
        $(document.body).append("<div id='black_bg' style='border-top-width: 1px;border-top-style: solid;border-top-color: rgb(0, 0, 0); position: absolute; height:"+$(document).innerHeight()+"px;z-index: 9998; width: 100%; left: 0px; top: 0px; opacity: 0.6; display: block; background-color: rgb(0, 0, 0);'>");
    });
    hidDialogs = function() {
        $(".popupbox").css('display', 'none');
        var obj = $("#black_bg");
        obj.remove()
    }
});