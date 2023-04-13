const arr = [1, 2, 3]

function logger(arr) {
    arr.reduce((p, cur) => {
        return p.then(() => {
            return new Promise((resolve) => setTimeout(() => {
                resolve(console.log(cur))
            }, 1000))
        })
    }, Promise.resolve())
}