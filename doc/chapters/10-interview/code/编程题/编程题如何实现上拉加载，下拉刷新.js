// 上拉加载

const clientHeight = document.documentElement.clientHeight

const scrollHeight = document.body.scrollHeight

const scrollTop = document.documentElement.scrollTop

const distance = 50

if ((scrollTop + clientHeight) >= (scrollHeight - distance)) {
    // 获取下一页数据
}