class SqQueue {
    constructor(length) {
        this.queue = new Array(length + 1)

        this.first = 0

        this.last = 0

        this.size = 0
    }

    enQueue(item) {
        // 扩容
        if (this.first === (this.last + 1) % this.queue.length) {
            this.resize(this.getLength() * 2 + 1)
        }
        this.queue[this.last] = item
        this.size++
        this.last = (this.last + 1) % this.queue.length
    }

    deQueue() {
        if (this.isEmpty()) {
            throw Error('Queue is Empty')
        }
        const d = this.queue[this.first]
        this.queue[this.first] = null
        this.first = (this.first + 1) % this.queue.length
        this.size--

        // 缩容
        if (this.size === this.getLength() / 4 && this.getLength() !== 2) {
            this.resize(this.getLength() / 2)
        }
        return r
    }

    getHeader() {
        if (this.isEmpty()) {
            throw Error('Queue is Empty')
        }
        return this.queue[this.first]
    }

    isEmpty() {
        return this.first === this.last
    }

    resize(length) {
        const r = new Array(length)
        for (let i = 0; i < length; i++) {
            r[i] = this.queue[(i + this.first) % this.queue.length]
        }
        this.queue = r
        this.first = 0
        this.last = this.size
    }

    getLength() {
        return this.queue.length
    }
}