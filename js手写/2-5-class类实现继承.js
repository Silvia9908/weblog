// 父类：Animal
class Animal {
  // 构造函数：初始化实例属性，接收name参数
  constructor(name) {
    this.name = name;
    this.colors = ['black', 'white']; // 引用类型属性
  }

  // 父类的原型方法（无需显式写在prototype上，class语法自动挂载）
  getName() {
    return this.name;
  }
}

// 子类：Dog，通过extends继承Animal
class Dog extends Animal {
  // 子类构造函数：必须先调用super()，再定义自己的属性
  //this关键字代表类的实例，只有在实例相关的上下文中（如constructor内部、原型方法内部）才能使用。
  //直接在类体的顶层写this.name = name，此时this没有明确的实例指向，不符合语法规范，会报错。
  time = '1'//直接的写法也可以
  constructor(name, age) {
    // super() 相当于 Animal.call(this, name)，调用父类构造函数并传参
    super(name); //这里的name是传参，this.name和this.colors直接挂载到子类实例上的
    // 子类自己的实例属性
    this.age = age;
  }

  // 子类的原型方法
  getAge() {
    return this.age;
  }

  // 可以重写父类方法（多态）
  getName() {
    return `Dog's name is ${this.name}`;
  }
}

// 测试代码
const dog1 = new Dog('奶昔', 2);
dog1.colors.push('brown'); // 修改dog1的colors
const dog2 = new Dog('hh', 1);

console.log(dog1.time); 
console.log(dog1.name);// 奶昔（继承父类属性，传参成功）
console.log(dog1.getAge()); // 2（子类方法）
console.log(dog1.colors); // ['black', 'white', 'brown']（dog1独立属性）
console.log(dog1.getName()); // Dog's name is 奶昔（调用重写后的方法）

console.log(dog2.name); // hh（属性独立）
console.log(dog2.colors); // ['black', 'white']（不受dog1影响）
console.log(dog2.getName()); // Dog's name is hh（重写方法生效）