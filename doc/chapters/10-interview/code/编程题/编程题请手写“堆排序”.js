function heapSort(array) {
    var heapSize = array.length, temp;
    for (let i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
        heapify(array, i, heapSize)
    }

    for (var j = heapSize - 1; j >= 1; j--) {
        temp = array[0];
        array[0] = array[j];
        array[j] = temp;
        heapify(array, 0, --heapSize);
    }
    return array;
}

function heapify(arr, x, len) {
    var l = 2 * x + 1, r = 2 * x + 2, largest = x, temp;
    if (l < len & arr[l] > arr[largest]) {
        largest = l
    }
    if (r < len & arr[r] > arr[largest]) {
        largest = r
    }

    if (largest != x) {
        temp = arr[x]
        arr[x] = arr[largest]
        arr[largest] = arr[x]
        heapify(arr, largest, len)
    }

}