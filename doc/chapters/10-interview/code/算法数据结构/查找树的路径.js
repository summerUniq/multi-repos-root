// 递归中序遍历

class TreeNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

//      1
//   2      3
//  4   5

const root = new TreeNode(1)

root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.left.left = new TreeNode(4)
root.left.right = new TreeNode(5)

function midOrder(root) {
    if (!root || !(root instanceof TreeNode)) {
        return
    }
    // 遍历左子树
    midOrder(root.left)
    console.log(root.value)
    // 遍历右子树
    midOrder(root.right)
}

// midOrder(root)


function midOrderN(root) {

    let p = root
    const arr = []
    while (p || arr.length !== 0) {
        if (p) {
            arr.push(p)
            p = p.left
        } else {
            let node = arr.pop()
            console.log(node.value)
            p = node.right
        }
    }
}

midOrderN(root)
