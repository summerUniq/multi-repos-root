class EventEmitter {
    constructor() {
        this.events = {}
    }
    on(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [callback]
        } else {
            this.events[eventName].push(callback)
        }
    }
    emit(eventName) {
        if (this.events[eventName]) {
            this.events[eventName].forEach(cb => cb());
        }
    }
}

// 测试用例

const event1 = new EventEmitter()

function workDay() {
    console.log("每天工作");
}
function makeMoney() {
    console.log("赚100万");
}
function sayLove() {
    console.log("向喜欢的人示爱");
}

event1.on('money', makeMoney)
event1.on('work', workDay)
event1.on('love', sayLove)

event1.emit('money')