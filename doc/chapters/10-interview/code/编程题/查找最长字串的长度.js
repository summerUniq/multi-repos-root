function maxLength(str) {
    if (typeof str !== 'string') { return }
    let arr = []
    let maxLength = 0;
    let maxStr = ''

    for (let i = 0; i < str.length; i++) {
        const s = str[i]
        if (!arr.includes(s)) {
            arr.push(s)
        } else {
            let currentLenth = arr.length;
            if (currentLenth <= maxLength) {
            } else {
                maxLength = arr.length
                maxStr = arr.join('')
            }
            arr = [s]
        }
    }

    return { maxLength, maxStr }

}

console.log(maxLength('abcccabcacd'))