const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = [];
rl.on('line',(line)=>{
    lines.push(line.trim());
}).on('close',()=>{
    const [M,X,Y,Z] = lines[0].split(" ").map(Number);
    //起点就是终点
    if(X===Y){
        console.log(0);
        return;
    }


    //遍历,将路线存入routes 线路1{price:2,station:{7,12}}
    const routes = [];
    for(let i = 1;i<=M;i++){
        const parts = lines[i].split(' ').map(Number);
        const price = parts[0];
        const stations = new Set(parts.slice(2));
        routes.push({price,stations});
    }

    const minDistance = new Map();//记录各站点到起点的最小花费
    const visited = new Set();//记录乙访问的节点
    const allStations = new Set();//所有可能的站点

    minDistance.set(X,0);//先把起始点加到min里
    allStations.add(X);//现在有的结点就是起始结点,多做这一步是为了保证起点一定包含,哪怕起点不在线路里

    //起始距离为0 其他初始化为无穷大
    for(const route of routes){
        for(const s of route.stations){//set自动去重
            allStations.add(s);
            if(!minDistance.has(s)){
                minDistance.set(s,Infinity);
            }
        }
    }
    let result = -1;
    while(true){
        //1.选择距离原点最近的未被访问过的结点
        let currentStation = null;
        let currentMin = Infinity;
        for(const s of allStations){
            if(!visited.has(s)&&minDistance.get(s)<currentMin){
                currentMin = minDistance.get(s);
                currentStation = s;
            }
        }
        //没有可访问的结点了 
        if(currentStation===null) break;
        //到达终点,返回答案
        if(currentStation===Y){
            result=currentMin;
            break;
        }

        //2.标记该点被访问
        visited.add(currentStation);
        //花费已经超过了,无需更新
        if(currentMin>Z) continue;

        //3.更新所有未被访问结点到原点的距离
        for(const route of routes){
            // 只有当前结点在路线上时,才能通过该路线更新其他节点
            if(route.stations.has(currentStation)){
                const newCost = currentMin+route.price;
                //遍历路线上的所有节点,更新距离
                for(const s of route.stations){
                    if(!visited.has(s)&&newCost<minDistance.get(s)&&newCost<=Z){
                        minDistance.set(s,newCost);
                    }
                }
            }
        }
    }
    console.log(result!==-1&&result<=Z?result:-1);
})