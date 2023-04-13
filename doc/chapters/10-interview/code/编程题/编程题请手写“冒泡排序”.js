function bubbleSort(arr) {
    console.time('改进前冒泡排序耗时');
    let len = arr.length
    for (var i = 0; i < len; i++) {
        for (j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1]
                arr[j + 1] = arr[j]
                arr[j] = temp
            }
        }
    }
    console.timeEnd('改进前冒泡排序耗时')
    return arr
}

var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(bubbleSort(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]


function bubbleSort2(arr) {
    console.time('改进后冒泡时间')
    let i = arr.length - 1

    while (i > 0) {
        let pos = 0
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                pos = j
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
        i = pos
    }
    console.timeEnd('改进后冒泡时间')
    return arr
}

console.log(bubbleSort2(arr))


function bubbleSort3(arr) {
    console.time('最后的')
    let low = 0
    let high = arr.length - 1
    while (low < high) {
        for (let i = low; i < high; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
            }
            --high
        }
        for (let j = high; j > low; j--) {
            if (arr[j] < arr[j - 1]) {
                let temp = arr[j]
                arr[j] = arr[j - 1]
                arr[j - 1] = temp
            }
        }
        ++low
    }
    console.timeEnd('最后的')
    return arr
}

console.log(bubbleSort3(arr));