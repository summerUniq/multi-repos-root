// 请判断一个链表是否为回文链表。

// 示例 1:

// 输入: 1->2
// 输出: false

// 示例 2:

// 输入: 1->2->2->1
// 输出: true

function isPalindrome(head) {
    let left = head
    function traverse(right) {
        if (right == null) { return true }
        let res = traverse(right.next)
        res = res && (right.val === left.val)
        left = left.next
        return res
    }
    return traverse(head)
}

function isPalindrome1(head) {
    let left = head
    let right = reverse(findCenter(head))
    while (right !== null) {
        if (left.val !== right.val) {
            return false
        }
        left = left.next
        right = right.next
    }
    return true
}

function findCenter(head) {
    let slow = head, faster = head
    while (faster && faster.next !== null) {
        slow = head.next
        faster = head.next.next
    }
    if (faster !== null) {
        slow = slow.next
    }
    return slow
}

function reverse(head) {
    let prev = null, cur = head, nxt = head
    while (cur !== null) {
        nxt = cur.next
        cur.next = prev
        prev = cur
        cur = nxt
    }
    return prev
}

