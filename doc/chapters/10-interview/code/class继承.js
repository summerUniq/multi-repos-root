class Parent {
    constructor(value) {
        this.val = value
    }
    getValue() {
        console.log(this.val);
    }
}

class Child extends Parent {
    constructor(value) {
        super(value)
        this.val = value
    }
}