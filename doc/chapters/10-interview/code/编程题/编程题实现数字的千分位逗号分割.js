// 1
function thousands1(num) {
    let arr = (num || 0).toString().split('')
    let result = [], counter = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        counter++
        result.unshift(arr[i])
        if (!(counter % 3) && i !== 0) {
            result.unshift(',')
        }
    }

    return result.join('')
}

console.log(thousands1(1223344554546654));

// 2
function thousands2(num) {
    var result = '', counter = 0
    let str = (num || 0).toString()
    for (let i = str.length - 1; i >= 0; i--) {
        counter++
        result = str.charAt(i) + result
        if (counter % 3 == 0 && i !== 0) {
            result = ',' + result
        }
    }

    return result
}

// 3- 
function thousands3(num) {
    var num = (num || 0).toString(), result = '';
    while (num.length > 3) {
        result = ',' + num.slice(-3) + result
        num = num.slice(0, num.length - 3)
    }
    if (num) {
        result = num + result
    }

    return result
}

// 4- 正则
function thousands4(num) {
    var str = (num || 0).toString()
    // (?=(\d{3})+(?!\d))匹配一个位置，这个位置后面首先是3的倍数个数字的字符串，接下来的位置不是数字
    return str.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

console.log(thousands4(999999977778));