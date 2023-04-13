// 组合继承
function Parent(value) {
    this.val = value
}

Parent.prototype.getValue = function () {
    console.log(this.val);
}

function Child(value) {
    Parent.call(this, value)
}

Child.prototype = new Parent()

// 寄生组合继承
Child.prototype = Object.create(Parent.prototype, {
    constructor: {
        value: Child,
        enumerable: false,
        writable: true,
        configurable: true
    }
})


