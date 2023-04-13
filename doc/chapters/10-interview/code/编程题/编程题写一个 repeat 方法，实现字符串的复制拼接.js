function repeat(target, n) {
    return (new Array(n + 1)).join(target)
}

function repeat1(target, n) {
    return Array.prototype.join.call({
        length: n + 1
    }, target)
}