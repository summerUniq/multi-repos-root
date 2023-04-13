function getType(value) {
    if (value === null) {
        return value + "";
    }

    if (typeof value === "object") {
        let str = Object.prototype.toString.call(value)
        let type = str.split(' ')[1].split("")

        type.pop()

        return type.join("").toLowerCase()

    } else {
        return typeof value
    }
}