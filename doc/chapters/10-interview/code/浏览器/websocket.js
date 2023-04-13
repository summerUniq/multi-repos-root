let websocket = new Websocket('ws://localhost:3000')

websocket.onopen = function () {
    websocket.send('connect')
}

websocket.onmessage = function (e) {
    console.log(e.data)
}