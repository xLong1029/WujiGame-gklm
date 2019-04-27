document.createElement("header"); 
document.createElement("footer"); 
document.createElement("nav"); 
document.createElement("article"); 
document.createElement("aside"); 
document.createElement("section"); 

(function () {
    var lessThenIE9 = function () {
        var UA = navigator.userAgent,
		        isIE = UA.indexOf('MSIE') > -1,
		        v = isIE ? /\d+/.exec(UA.split(';')[1]) : 'no ie';
        return v < 9;
    }

    if (lessThenIE9()) {
        /*location.href = "upbrowser.html";*/
		alert("您使用的IE浏览器版本过低，或您正在使用其他浏览器的兼容模式，请切换至极速模式或升级浏览器，以方便更好的浏览该网站，谢谢！")
    }
})();