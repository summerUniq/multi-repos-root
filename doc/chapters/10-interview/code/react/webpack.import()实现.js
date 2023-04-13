function importAsync(url) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script')

        const tempGlobal = '__tempModuleLoadingVariable' + Math.random().toString(32).substring(2)

        script.type = 'module'
        script.textContent = `import * as m from ${url}; window.${tempGlobal}=m`

        script.onload = function () {
            resolve(window[tempGlobal])
            delete window[tempGlobal]
            script.remove()
        }

        script.onerror = function () {
            reject(new Error("Failed to load module script with URL " + url));
            delete window[tempGlobal];
        }

        document.documentElement.appendChild(script)
    })
}