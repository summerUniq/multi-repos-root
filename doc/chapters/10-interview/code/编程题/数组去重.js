const arr = [1, 1, '1', 17, true, true, false, false, 'true', 'a', {}, {}];
// // => [1, '1', 17, true, false, 'true', 'a', {}, {}]

// 1- set 
// const myset = Array.from(new Set(arr))


//  2- for for + splice

function unique1(arr) {
    let len = arr.length
    console.log('len start', len);
    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j++; j < len) {
            if (arr[i] === arr[j]) {
                arr.splice(j, 1)
                console.log('splice', len);
                len--
                j--
            }
        }
    }
    return arr
}

// 3- indexOf
function unique2(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

// 4- include
function unique3(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (!newArr.includes(arr[i])) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

// 5- filter
function unique4(arr) {
    return arr.filter((v, i) => arr.indexOf(v) === i)
}

// 6- map
function unique5(arr) {
    const map = new Map()
    const res = []
    for (let i = 0; i < arr.length; i++) {
        if (!map.has(arr[i])) {
            map.set(arr[i], true)
            res.push(arr[i])
        }
    }

    return res
}
