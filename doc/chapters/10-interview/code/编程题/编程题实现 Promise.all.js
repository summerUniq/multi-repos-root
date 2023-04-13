Promise.myAll = function (promiseArr) {
    return new Promise((resolve, reject) => {
        let counter = 0
        let result = []
        for (let i = 0; i < promiseArr.length; i++) {
            promiseArr[i].then((res) => {
                result[i] = res
                counter++
                if (counter === promiseArr.length) {
                    resolve(result)
                }
            }).catch(err => reject(err))
        }
    })
}

function promiseAll(promiseArr) {
    return new Promise((resolve, reject) => {
        let interactorIndex = 0;
        let fullCount = 0;
        let promiseResults = []

        for (let item of promiseArr) {
            let resultIndex = interactorIndex;
            interactorIndex += 1
            Promise.resolve(item).then((res) => {
                promiseResults[resultIndex] = res
                fullCount++
                if (interactorIndex === fullCount) {
                    resolve(promiseResults)
                }
            }).catch(err => reject(err))
        }

        if (interactorIndex === 0) {
            resolve(promiseResults)
        }
    })
}

if (!Promise.all) {
    Promise.all = promiseAll
}