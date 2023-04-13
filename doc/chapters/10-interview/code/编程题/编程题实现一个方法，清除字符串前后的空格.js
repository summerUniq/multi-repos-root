function trim(str) {
    return str.replace(/(^\s+)|(\s+$)/g, '')
}

const str1 = '    aaaaaakkk mmm   '

console.log(`-${trim(str1)}-`)