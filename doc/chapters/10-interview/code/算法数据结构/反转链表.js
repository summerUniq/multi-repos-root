// 定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。

// 输入: 1->2->3->4->5->NULL
// 输出: 5->4->3->2->1->NULL

// 解法一（迭代法）--- 双指针

// 本方法是对链表进行遍历，然后在访问各节点时修改 next 的指向，达到反转链表的目的。

// 初始化 cur 和 pre 两个节点，分别指向 head 和 null。
// 对链表进行循环，声明 temp 节点用来保存当前节点的下一个节点。
// 修改当前节点 cur 的 next 指针指向为 pre 节点。
// pre 节点修改为 cur 节点。
// cur 节点修改为 temp 节点。
// 继续进行处理，直到 cur 节点为 null，返回 pre 节点。

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// 分析

// cur = ListNode(1)  next = ListNode(2)
// pre = ListNode(null) next = ListNode(5)

// temp = ListNode(2)

// cur.next = ListNode(null) 

// pre = ListNode(1)  next = ListNode(null)

// cur = ListNode(2) next = ListNode()


function reverseList(head) {
    let cur = head
    let pre = null

    while (cur) {
        let temp = cur.next
        cur.next = pre
        pre = cur
        cur = temp
    }
}

// 方法二： 递归
const reverseList1 = (head) => {
    if (head === null || head.next === null) {
        return head
    }

    const reverseHead = reverseList1(head.next)

    head.next.next = head
    head.next = null

    return reverseHead
}