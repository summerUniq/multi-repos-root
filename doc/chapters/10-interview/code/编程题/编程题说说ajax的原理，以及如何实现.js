function myAjax(options) {
    const xhr = new XMLHttpRequest()

    options = options || {}
    options.type = (options.type || 'GET').toUpperCase()
    options.dataType = options.dataType || 'json'

    const params = options.data

    if (options.type === 'GET') {
        xhr.open('GET', options.url + '?' + params, true)
        xhr.send(null)
    } else if (options.type === "POST") {
        xhr.open('POST', options.url, true)
        xhr.send(params)
    }

    xhr.onreadystatechange = function (e) {
        if (xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status <= 300) {
                options.success && options.success(xhr.responseText, xhr.responseXML)
            } else {
                options.fail && options.fail(xhr.status)
            }
        }
    }
}