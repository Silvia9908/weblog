/* 
this->js关键字
当前环境执行期上下文对象的一个属性
执行上下文：代码运行时所处的环境
作用域：代码有权访问变量的范围
this在不同的环境，不同作用域下，指向不同的对象
 */

// 全局环境下，this指向全局对象window

console.log(this); // window
console.log(this === window); // true
var a = 10;
console.log(this.a); // 10
function fn() {
  console.log(this); // window
}   
fn();
// 对象环境下，this指向当前对象
var obj = {
  name: 'zhangsan',
  age: 20,  
  fn: function() {
    console.log(this); // obj
    console.log(this.name); // zhangsan
  }    
};  
obj.fn();
// 构造函数环境下，this指向新创建的对象
function Person(name, age) {
  this.name = name;
  this.age = age;
  console.log(this); // Person {}
}
var p1 = new Person('lisi', 25);// 创建了一个新的对象p1
console.log(p1.name);// lisi
console.log(p1.age);// 25
// 严格模式下，this指向undefined
"use strict";
function strictFn() {
  console.log(this); // undefined
}
strictFn();
// 箭头函数环境下，this指向定义时所在的环境对象
var obj2 = {
  name: 'wangwu',
  age: 30,
  fn: function() {
    var arrowFn = () => {
      console.log(this); // obj2
      console.log(this.name); // wangwu
    };
    arrowFn();
  }
};
obj2.fn();

var a = 'global->a';//nodejs中全局对象是global,var拿不到全局对象的属性
global.b = 'global->b';
var obj3 = {
  a: 'obj3->a',
  //b: 'obj3->b',
  fn: function() {
    var a = 'fn->a';
    //var b = 'fn->b';
    console.log(global.a); 
    console.log(global.b); // global->b
    function innerFn() {
      console.log(this.a);// global->a
      console.log(this.b);// global->b
    }
    innerFn();
  }
};
obj3.fn();
// obj3->a
// obj3->b
// global->a
// global->b

function baz(){
  console.log('baz');
  bar()
}
function bar(){
  console.log('bar');
  foo()
}
function foo(){
  console.log('foo');//调用栈，后进先出
}
baz()
// baz
// bar
// foo

function Person(name) {
  this.name = name;
  console.log(this);
}
const p = new Person('Alice'); // 控制台无输出Person { name: 'Alice' }
console.log(p.name); // 输出？ Alice

//1
const name = 'global';
const obj1 = {
  name: 'obj1',
  fn: function() {
    console.log(this.name);
    return function() {
      console.log(this.name);
    };
  },
  arrowFn: function() {
    console.log(this.name);
    return () => {
      console.log(this.name);
    };
  }
};
const obj2 = { name: 'obj2' };

obj1.fn()(); // obj1 global
obj1.fn().call(obj2); // obj1 obj2
obj1.arrowFn()(); // obj1 obj1

//2 多层对象嵌套+函数赋值
const obj3 = {
  name: 'obj1',
  fn: function() {
    console.log(this.name);
    return {
      name: 'obj2',
      fn: function() {
        console.log(this.name);
      }
    };
  }
};

obj3.fn()(); // obj1 obj2
const fn = obj3.fn;
fn()(); // ' ' obj2

//3 箭头函数+定时器+显示绑定
const obj = {
  name: 'obj',
  fn1: function() {
    setTimeout(() => {
      console.log(this.name);
    }, 0);
  },
  fn2: () => {
    setTimeout(function() {
      console.log(this.name);
    }, 0);
  }
};

obj.fn1(); // obj
obj.fn2(); // ' ' (node环境下为undefined)
obj.fn1.call({ name: 'newObj' }); // newObj

//4 构造函数+原型方法+显示绑定
function Animal(type) {
  this.type = type;
}
Animal.prototype.say = function() {
  console.log(this.type);
};

const cat = new Animal('cat');
const dog = { type: 'dog' };

cat.say(); // cat
Animal.prototype.say.call(dog); // dog
const say = cat.say;
say(); // ' ' (node环境下为undefined)
//new+bind+隐式
function Foo(name) {
  this.name = name;
}
const obj = { name: 'obj' };
const boundFoo = Foo.bind(obj);

const f1 = new Foo('f1');
const f2 = new boundFoo('f2');

console.log(f1.name); //f1
console.log(f2.name); //f2
console.log(obj.name); // obj