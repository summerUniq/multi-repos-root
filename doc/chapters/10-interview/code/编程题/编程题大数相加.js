function appendZero(str, len) {
    for (let i = 0; i < len; i++) {
        str = '0' + str
    }

    // '0'.repeat(len) + str

    return str
}

function add1(a, b) {
    let i = a.length, j = b.length;
    let len = i - j;
    let maxLen = i
    if (len > 0) {
        appendZero(b, len)
    } else {
        appendZero(a, Math.abs(len))
        maxLen = j
    }
    let arrA = a.split('').reverse();
    let arrB = b.split('').reverse();
    let sumArr = []
    for (let m = 0; m < maxLen; m++) {
        const c = arrA[m] + arrB[m] + (sumArr[m] || 0)
        if (c > 9) {
            sumArr[m] = c % 10
            sumArr[m + 1] = (sumArr[m + 1] || 0) + 1
        } else {
            sumArr[m] = c
        }
    }
    let sum = sumArr.reverse().join('')
    return sum
}

function add2(a, b) {
    let al = a.length, bl = b.length;
    let arrA = a.split('')
    let arrB = b.split('')
    let go = 0
    let sum = []
    while (al || bl) {
        let num1 = arrA.pop()
        let num2 = arrB.pop()
        let temp = num1 + num2 + go
        if (temp > 9) {
            go = 1
            temp %= 10
        }
        sum.unshift(temp)
    }
    if (go) {
        sum.unshift(go)
    }
    return sum.join('')
}