
const Queue = require('../队列/单链队列')
console.log(Queue);
class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST {
    constructor() {
        this.root = null
        this.size = 0
    }
    getSize() {
        return this.size
    }
    isEmpty() {
        return this.size === 0
    }

    addNode(v) {
        this.root = this._addChild(this.root, v)
    }

    _addChild(node, v) {
        if (!node) {
            this.size++
            return new Node(v)
        }
        if (node.value > v) {
            node.left = this._addChild(node.left, v)
        } else if (node.value < v) {
            node.right = this._addChild(node.right, v)
        }

        return node
    }

    // 遍历实现
    preTraversal() {
        this._pre(this.root)
    }

    _pre(node) {
        if (node) {
            console.log(node.value)
            this._pre(node.left)
            this._pre(node.right)
        }
    }

    midTraversal() {
        this._mid(this.root)
    }

    _mid(node) {
        if (node) {
            this._mid(node.left)
            console.log(node.value)
            this._mid(node.right)
        }
    }

    backTraversal() {
        this._back(this.root)
    }

    _back(node) {
        if (node) {
            this._back(node.left)
            this._back(node.right)
            console.log(node.value)
        }
    }

    breadthTraversal() {
        if (!this.root) {
            return null
        }
        const q = new Queue()
        q.enQueue(this.root)

        while (!q.isEmpty()) {
            const node = q.deQueue()
            console.log(node.value)
            if (node.left) {
                q.enQueue(node.left)
            }
            if (node.right) {
                q.queue(node.right)
            }
        }
    }

    getMin() {
        return this._getMin(this.root).value
    }

    _getMin(node) {
        if (!node.left) {
            return node
        }
        return this._getMin(node.left)
    }

    getMax() {
        this._getMin(this.root)
    }

    _getMax(node) {
        if (!node.right) {
            return node
        }
        return this._getMax(node.right)
    }

    floor(v) {
        const node = this._floor(this.root, v)

        return node ? node.value : null;

    }

    _floor(node, v) {
        if (!node) {
            return null
        }
        if (node.value > v) {
            return this._floor(node.left, v)
        }

        const right = this._floor(node.right, v)

        if (right) { return right }

        return node
    }

    ceil(v) {
        const node = this._ceil(this.root, v)

        return node ? node.value : null
    }

    _ceil(node, v) {
        if (!node) {
            return null
        }
        if (node.value < v) {
            return this._ceil(node.right, v)
        }

        const left = this._ceil(node.left, v)

        return left ? left : node
    }

}

const a = new BST()
a.addNode(5)
a.addNode(2)
a.addNode(1)
a.addNode(4)
a.addNode(6)
a.addNode(7)
a.addNode(3)

// a.preTraversal()
// a.midTraversal()
// a.backTraversal()
// a.backTraversal()
console.log(a.floor(4.3));
console.log(a.ceil(4.3));