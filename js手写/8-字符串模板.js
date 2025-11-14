/* 
function render(template,data){
    const reg = /\{\{(.+?)\}\}/g
    if(reg.test(template)){
        const name = reg.exec(template)[1]
        template = template.replace(reg,data[name])
        return render(template,data)
    }
    return template
}

// 测试 1：基础变量
const tpl1 = '姓名：{{name}}，年龄：{{age}}';
const data1 = { name: '李四', age: 25 };
console.log(render(tpl1, data1)); // "姓名：李四，年龄：25"
 */

function render(template,data){
    const reg = /\{\{(.+?)\}\}/g
    return template.replace(reg,(match,key)=>{
        //match是正则匹配到的完整的字符串 {{ name }}
        //key是正则中捕获组匹配到的内容 即 (.+?) 提取的占位符内部的内容，如 name
        const trimmedKey = key.trim()
        let value = data//保存数据对象引用，避免直接修改原data
        //split('.') 就是将 address.city 拆分成 ['address', 'city']，再通过循环逐层访问。
        const keys = trimmedKey.split('.')
        for(const k of keys){//逐层访问，address-》city
            if(value === null || value === undefined){
                value = ''
                break
            }
            value = value[k]
        }
        return value ?? ''
    })
}

// 测试 2：嵌套对象和数组
const tpl2 = '地址：{{address.city}}，邮编：{{address.code}}，技能：{{skills.1}}';
const data2 = {
  address: { city: '北京', code: '100000' },
  skills: ['HTML', 'JavaScript']
};
console.log(render(tpl2, data2)); 
// 输出：地址：北京，邮编：100000，技能：JavaScript（正常）

// 测试 3：带空格的占位符
const tpl3 = '爱好：{{ hobby }}';
const data3 = { hobby: '摄影' };
console.log(render(tpl3, data3)); 
// 输出：爱好：摄影（正常）

// 测试 4：不存在的变量
const tpl4 = '职业：{{job}}';
const data4 = { name: '王五' };
console.log(render(tpl4, data4)); 
// 输出：职业：（正常，空字符串）
