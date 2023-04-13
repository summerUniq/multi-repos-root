function identify<T>(params:T):T {
    return params
}

let output1 = identify<string>('1111')
let output2 = identify<number>(1)