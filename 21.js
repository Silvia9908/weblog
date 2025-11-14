const rl = require('readline').createInterface({input:process.stdin,output:process.stdout});
//创建节点
const Node = (v,n)=>({val:v,next:n});
//创建链表
const toList= arr =>arr.reduceRight((next,val)=>Node(val,next),null);
//合并链表
const mergeTwoLists=(l1,l2)=>{
    const dummy = Node(null);
    let cur = dummy;
    while(l1&&l2){
        if(l1.val<l2.val){
            cur.next=l1;
            l1 = l1.next;
        }else{
            cur.next = l2;
            l2 = l2.next;
        }
        cur = cur.next;
    }
    cur.next=l1||l2;
    return dummy.next;//输出头节点
}

const input = [];
rl.on('line',line=>{
    input.push(line.trim().split(' ').map(Number));
    if(input.length===2){
        let merged = mergeTwoLists(toList(input[0]),toList(input[1]));
        const res = [];
        while(merged){
            res.push(merged.val);
            merged = merged.next;
        }
        console.log(res.join(' '));
        //rl.close();
    }
})