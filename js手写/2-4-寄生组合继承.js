// 父类：Animal
function Animal(name) {
  this.name = name;
  this.colors = ['black', 'white']; // 引用类型属性
}
Animal.prototype.getName = function() {
  return this.name;
};
// 子类：Dog
function Dog(name, age) {
  // 1. 构造函数继承：调用父类构造函数，传递参数，继承实例属性
  Animal.call(this, name); 
  // 子类自身的实例属性
  this.age = age;
}

// function inheritPrototype(subType,superType){
//   const prototype1 = Object.create(superType.prototype);
//   prototype1.constructor = subType;
//   subType.prototype = prototype1
// }
function clone(parent,child){
  child.prototype = Object.create(parent.prototype)
  child.prototype.constructor = child
}
clone(Animal,Dog)

Dog.prototype.getAge = function(){
  return this.age
}

// 测试代码
const dog1 = new Dog('奶昔', 2);
dog1.colors.push('brown'); // 修改dog1的colors（引用类型）
const dog2 = new Dog('hh', 1);

console.log(dog1.name); // 奶昔（继承父类属性，传参成功）
console.log(dog1.getName()); 
console.log(dog1.getAge()); // 2（子类原型方法）
console.log(dog1.colors); // ['black', 'white', 'brown']（dog1的独立属性）

console.log(dog2.name); // hh（传参成功，属性独立）
console.log(dog2.colors); // ['black', 'white']（不受dog1影响）
console.log(dog2.getName()); // hh（继承父类原型方法）
console.log(Dog.prototype.constructor); // 输出Dog（constructor指向正确）