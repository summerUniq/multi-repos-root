function insertionSort(array) {
    if (!Array.isArray(array)) {
        throw new Error('type error');
    }
    for (let i = 1; i < array.length; i++) {
        let key = array[i]
        let j = i - 1
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j]
            j--
        }

        array[j + 1] = key
    }
    return array
}

var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(insertionSort(arr));

// 二分法改进
function insertionSort2(array) {
    for (let i = 1; i < array.length; i++) {
        let key = array[i], left = 0, right = i - 1;
        while (left <= right) {
            let middle = parseInt((left + right) / 2)
            if (key < array[middle]) {
                right = middle - 1
            } else {
                left = middle + 1
            }
        }

        for (var j = right; j >= left; j--) {
            array[j + 1] = array[j]
        }
        array[left] = key
    }

    return array
}
console.log(insertionSort2(arr));
