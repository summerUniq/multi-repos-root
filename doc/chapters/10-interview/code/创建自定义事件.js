const event1 = new Event('myEvent')

const event2 = new CustomEvent('myCustomEvent', {
    detail: {
        name: 'xq'
    }
})

const event3 = document.createEvent('CustomEvent')
event3.initEvent('myCustomEvent2', true, true)

let btn = document.getElementsByTagName('button')[0]
btn.addEventListener('myCustomEvent2', function (e) {
    // 事件触发回调
    console.log(e.detail)
})

setTimeout(() => {
    btn.dispatchEvent(event3)
}, 2000)