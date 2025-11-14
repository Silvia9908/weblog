function Animal(){
  this.colors = ['black','white']
}
Animal.prototype.getColor = function(){
  return this.colors
}

function Dog(){}
// 关键：让Dog的原型指向Animal的实例，实现继承
//原型链继承
Dog.prototype = new Animal()


let dog1 = new Dog()
dog1.colors.push('brown')
let dog2 = new Dog()
console.log(dog2.colors);//[ 'black', 'white', 'brown' ]
//因为所有实例共享Animal的原型指向的数组
//原型链继承缺陷：
//1.会导致父类的实例属性被所有子类实例共享（因为这些属性会变成子类原型上的属性）。
//2.子类在实例化的时候不能给父类构造函数传参