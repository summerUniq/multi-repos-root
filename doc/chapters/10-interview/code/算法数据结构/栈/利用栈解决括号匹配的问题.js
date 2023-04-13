// LeetCode20 括号匹配

const isValid = function (s) {
    const map = {
        '(': -1,
        ')': 1,
        '{': -2,
        '}': 2,
        '[': -3,
        ']': 3
    }

    const stack = []
    for (let i = 0; i < s.length; i++) {
        const current = s[i]
        if (map[current] < 0) {
            stack.push(s[i])
        } else {
            let last = stack.pop()
            if (map[last] + map[current] !== 0) {
                return false
            }
        }
    }

    if (stack.length > 0) {
        return false
    }

    return true
}