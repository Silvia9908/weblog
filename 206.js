const rl = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
});
//创建节点
const ListNode = (val,next)=>({val,next});
//创建链表
const createList = (arr)=>{
    let dummy = ListNode(null);
    let current = dummy;
    arr.forEach(val=>{
        current.next = ListNode(val);
        current = current.next;
    });
    return dummy.next;
};
//反转链表
const reverseList = (head)=>{
    let pre = null;
    let current = head;
    while(current){
        const temp = current.next;
        current.next = pre;
        pre = current;
        current = temp;
    }
    return pre;
}
//输入输出处理
rl.on('line',(input)=>{
    //数组解析
    const arr = input.trim().split(' ').map(Number);
    const head = createList(arr);//链表
    const reservedHead = reverseList(head);//反转
    const res = [];
    let current =  reservedHead;
    while(current){//转化为数组
        res.push(current.val);
        current = current.next;
    }
    console.log(res.join(' '));
})