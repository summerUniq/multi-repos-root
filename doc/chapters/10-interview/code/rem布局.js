(function (win) {
    let docEl = window.document.documentElement
    let timer = ''
    function changeRem(params) {
        let width = docEl.getBoundingClientRect().width
        if (width > 750) { // 750 是设计稿的大小
            width = 750
        }
        let fontS = width / 10
        docEl.style.fontSize = fontS
    }

    win.addEventListener('resize', function () {
        clearTimeout(timer);
        timer = setTimeout(changeRem, 30)
    }, false)

    win.addEventListener('pageshow', function (e) {
        if (e.persisted) {
            clearTimeout(timer)
            timer = setTimeout(changeRem, 30);
        }
    }, false)

    changeRem()

})(window)