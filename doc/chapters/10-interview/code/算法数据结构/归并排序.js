function mergeSort(arr) {
    const length = arr.length
    if (length < 2) {
        return arr
    }
    const mid = Math.floor(length / 2)
    const left = arr.slice(0, mid)
    const right = arr.slice(mid, length)
    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
    let result = []
    while (left.length > 0 & right.length > 0) {
        if (left[0] <= right[0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }

    while (left.length) {
        result.push(left.shift())
    }

    while (right.length) {
        result.push(right.shift())
    }

    return result
}

// var arr = [3,44,38,5,47,15,36,26];

// left [3,44,38,5] right=[47,15,36,26]

// [3,44] [38,5]     |  [47, 15] [36, 26]

// [3] [44]     |   [38]   [5]    | [47] [15] | [36] [26]
 
// [3]   [44]  ===> merge [3,44]  [5, 38]  ==> merge [3, 5, 38, 44]  

// merge [15, 47] [26, 36] => [15, 26, 36, 47]
