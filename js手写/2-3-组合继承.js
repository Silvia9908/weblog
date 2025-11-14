function Animal(name){
  this.name = name
  this.colors = ['black','white']
}
Animal.prototype.getName = function(){
  return this.name
}
function Dog(name,age){
  Animal.call(this,name)
  this.age = age
}
//第一种 创建一个Animal的实例，作为Dog的原型对象。
//Dog.prototype = new Animal()
//第二种：创建一个空对象，让这个空对象的__proto__指向Animal.prototype，作为Dog的原型对象。
Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.constructor = Dog//指向自己
//第二种更合理
//已经通过Animal.call(this, name)让每个Dog实例都有了自己的name和colors（避免共享引用类型）
//此时Dog.prototype只需要继承Animal的原型方法（如getName）即可，完全不需要继承Animal的实例属性（否则会导致冗余）
//如果用Dog.prototype = new Animal()，会导致
//Dog.prototype上多出colors: ['black','white']等冗余属性（但实际访问dog1.colors时，会优先用实例上的colors，原型上的冗余属性毫无意义）。
let dog1 = new Dog('奶昔',2)
dog1.colors.push('brown')
let dog2 = new Dog('hh',1)
console.log(dog2);
//