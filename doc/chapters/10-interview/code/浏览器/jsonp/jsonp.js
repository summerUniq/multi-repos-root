function jsonp({ url, params, callback }) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script')
        window[callback] = function (data) {
            resolve(data)
            document.body.removeChild(script)
        }
        params = { ...params, callback }
        let arr = []
        for (let key in params) {
            arr.push(`${key}=${params[key]}`)
        }
        script.src = `${url}?${arr.join('&')}`
        document.body.appendChild(script)
    })
}