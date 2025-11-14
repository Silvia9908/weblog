//1.获取页面上所有的img元素，转换为数组
let imgList = [...document.querySelectorAll('img')]
//2.记录图片总数，后续用于判断是否所有图片已加载
let length = imgList.length

//3.定义懒加载核心函数
const imgLazyLoad = function(){
    //记录已经加载的图片数理
    let count = 0
    //4.返回一个立即执行函数，形成闭包，维护count等变量的状态
    return (function(){
        let deleteIndexList = []//存储需要从imgList删除的图片索引
        //5.遍历当前所有未加载的图片
        imgList.forEach((img,index)=>{
            //6.获取图片相对于可视区域的位置信息
            let rect = img.getBoundingClientRect()
            //7.判断图片是否进入可视区域，顶部小于视口高度时进入
            if(rect.top<window.innerHeight){
                //8.将data-src得到真实地址赋值给src，触发图片加载
                img.src = img.dataset.src
                //9.记录该图片的索引，后续从imgList中删除
                deleteIndexList.push(index)
                //10.已加载图片+1
                count++
                //11.如果所有的图片都已加载，删除滚动监听
                if(count===length){
                    document.removeEventListener('scroll',imgLazyLoad)
                }
            }
        })
        //12.过滤imgList 移除已加载图片
        imgList = imgList.filter((img,index)=>!deleteIndexList.includes(index))
    })()
}
//防抖
function debounce(fn,delay){
    let timer = null
    return function(){
        clearTimeout(timer)
        timer = setTimeout(fn,delay)
    }
}
//13.为scroll事件绑定懒加载函数
document.addEventListener('scroll',debounce(imgLazyLoad,100))