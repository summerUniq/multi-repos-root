// const obj = {
//     a: {
//         b: 1,
//         c: 2,
//         d: {
//             e: 5
//         }
//     },
//     b: [1, 3, { a: 2, b: 3 }],
//     c: 3
// }

// =====>

// {
//   'a.b': 1,
//   'a.c': 2,
//   'a.d.e': 5,
//   'b[0]': 1,
//   'b[1]': 3,
//   'b[2].a': 2,
//   'b[2].b': 3
//    c: 3
// }


function objectFlat(obj = '') {
    const res = {}
    function flat(item, prevKey = '') {
        Object.entries(item).forEach(([key, value]) => {
            let newKey = key;
            if (Array.isArray(item)) {
                newKey = prevKey ? `${prevKey}[${key}]` : key
            } else {
                newKey = prevKey ? `${prevKey}.${key}` : key
            }

            if (value && typeof value === 'object') {
                flat(value, newKey)
            } else {
                res[newKey] = value
            }
        })
    }

    flat(obj)

    return res
}