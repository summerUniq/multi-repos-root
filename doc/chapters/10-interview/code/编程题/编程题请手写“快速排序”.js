function quickSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    var middleIndex = Math.floor(arr.length / 2)
    var middle = arr[middleIndex]
    let left = []
    let right = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < middle) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return quickSort(left).concat([middle], quickSort[right])
}