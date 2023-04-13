class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
        // 修改后
        this.size = 1
    }
}

class BST {
    constructor() {
        this.root = null
    }

    _getSize(node) {
        return node ? node.size : 0
    }

    addNode(v) {
        this.root = this._addChild(this.root, v)
    }

    _addChild(node, v) {
        if (!node) {
            return new Node(v)
        }
        if (node.value > v) {
            // 修改后
            node.size++
            node.left = this._addChild(node.left, v)
        } else if (node.value < v) {
            // 修改后
            node.size++
            node.right = this._addChild(node.right, v)
        }

        return node
    }

    select(v) {
        let node = this._select(this.root, v)
        return node ? node.value : null
    }

    _select(node, v) {
        if (!node) {
            return null
        }
        const size = node.left ? node.left.size : 0
        if (size > v) {
            return this._select(node.left, v)
        }
        if (size < v) {
            return this._select(node.right, v - size - 1)
        }
        return node
    }

    delectMin() {
        this.root = this._delectMin(this.root)
        console.log(this.root)
    }

    _delectMin(node) {
        if (node !== null & !node.left) {
            return node.right
        }
        node.left = this._delectMin(node.left)
        node.size = this._getSize(node.left) + this._getSize(node.right) + 1
        return node
    }

    delectMax() {
        this.root = this._delectMax(this.root)
        console.log(this.root);
    }

    _delectMax(node) {
        if (node !== null && !node.right) {
            return node.left
        }
        node.right = this._delectMax(node.right)
        node.size = this._getSize(node.left) + this._getSize(node.right) + 1
        return node
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

    delect(v) {
        this.root = this._delect(this.root, v)
    }

    _delect(node, v) {
        if (!node) {
            return null
        }
        if (node.value < v) {
            node.right = this._delect(node.right, v)
        } else if (node.value > v) {
            node.left = this._delect(node.left, v)
        } else {
            if (!node.left) {
                return node.right
            }

            if (!node.right) {
                return node.left
            }

            let min = this._getMin(node.right)
            min.right = this._delectMin(node.right)
            min.left = node.left
            node = min
        }

        node.size = this._getSize(node.left) + this._getSize(node.right) + 1

        return node
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
a.delectMax()

// a.preTraversal()
// a.midTraversal()
// a.backTraversal()
// a.backTraversal()
// console.log(a.floor(4.3));
// console.log(a.ceil(4.3));
// console.log(a.select(0));
// console.log(a.select(1));
// console.log(a.select(2));
// console.log(a.select(3));
// console.log(a.select(4));
// console.log(a.select(5));
// console.log(a.select(6));
