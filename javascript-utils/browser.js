/* ----------------------------------------
    判断是否为手机浏览器
------------------------------------------ */
var isMobile = function() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true;
    } else {
        return false;
    }
}

/* ----------------------------------------
    判断是否为 IE 浏览器
------------------------------------------ */
var isIE = function() {
    if (/msie/i.test(navigator.userAgent)) {
        return true;
    } else {
        return false;
    }
}