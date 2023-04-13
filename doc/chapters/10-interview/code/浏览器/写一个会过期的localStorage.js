// 惰性删除
const lsc = (function (self) {
    var prefix = 'one_more_lsc_'

    self.set = function (key, value, expires) {
        key = prefix + key
        value = JSON.stringify({ val: value, expires: new Date().getTime() + expires * 1000 })
        localStorage.setItem(key, value)
    }

    self.get = function (key) {
        key = prefix + key
        let value = localStorage.getItem(key)
        if (!value) {
            return null
        }
        value = JSON.parse(value)
        const { expires, val } = value
        if (new Date().getTime() > expires) {
            localStorage.removeItem(key)
            return null
        }
        return val
    }
    return self

})(lsc || {})

// 定时删除
const lsc1 = (function (self) {
    const prefix = 'one_more_lsc_'
    let list = []

    self.init = function () {
        const keys = Object.keys(localStorage)
        const reg = new RegExp(`^${prefix}`)
        const temp = []
        if (!keys || !keys.length) {
            return
        }
        keys.forEach((key) => {
            if (reg.test(key)) {
                temp.push(key)
            }
        })
        list = temp
    }

    self.init()

    self.check = function () {
        if (!list.length) {
            return
        }
        var checkCount = 0

        while (checkCount < 500) {
            var expireCount = 0
            for (let i = 0; i < 20; i++) {
                if (!list.length) {
                    break
                }
                let index = Math.floor(Math.random() * list.length)
                let key = list[index]
                let val = localStorage.getItem(key)
                if (!val) {
                    list.splice(index, 1)
                    localStorage.removeItem(key)
                    expireCount++
                }

                val = JSON.parse(val)
                const { expires } = val
                if (expires < new Date().getTime()) {
                    list.splice(index, 1)
                    localStorage.removeItem(key)
                    expireCount++
                }
            }
            if (expireCount <= 5 || list.length === 0) {
                break
            }

            checkCount++
        }
    }

    setInterval(self.check, 1000)

    return self

})(lsc1 || {})
