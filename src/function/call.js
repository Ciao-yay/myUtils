/* 
  预备知识
  this，当前运行环境
  http://www.ruanyifeng.com/blog/2018/06/javascript-this.html

  构造函数
  https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Object/Object
  如果给定的值是 null 或 undefined, 它会创建并返回一个空对象。
  否则，它将返回一个和给定的值相对应的类型的对象。
  如果给定值是一个已经在的对象，则会返回这个已经存在的值（相同地址）。
  特点
  函数体内部使用了this关键字，代表了所要生成的对象实例。
  生成对象的时候，必须使用new命令。

  new
  创建一个空对象，作为将要返回的对象实例。
  将这个空对象的原型，指向构造函数的prototype属性。
  将这个空对象赋值给函数内部的this关键字。
  开始执行构造函数内部的代码。

  构造函数之所以叫“构造函数”，就是说这个函数的目的，就是操作一个空对象（即this对象），将其“构造”为需要的样子。


  call
  定义
  call() 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数。
  注意：
  1.该方法的语法和作用与 apply() 方法类似，只有一个区别，就是 call() 方法接受的是一个参数列表，而 apply() 方法接受的是一个包含多个参数的数组。
  2.如果没有传递第一个参数，this 的值将会被绑定为全局对象。在严格模式下，this 的值将会是 undefined

  语法
  function.call(thisArg, arg1, arg2, ...)

  例子
  function Product(name, price) {
  this.name = name;
  this.price = price;
  }

  function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
  }

  console.log(new Food('cheese', 5).name);
  // expected output: "cheese"
*/
/* 
  分析
  需要两个参数   需要的运行环境、不定长参数...arg
  行为 
  改变了运行环境this
*/

// 手写call
Function.prototype.myCall = function(thisArg,...args){
  // this当前
  thisArg = thisArg || window
  const fn = Symbol('fn')
  thisArg[fn] = this
  let res = thisArg[fn](...args)
  return res

}














function myCall(Fn,thisArg, ...args) {
  if(typeof Fn !== 'function') {
    throw new TypeError('error')
  }
  const temp = Symbol('temp')        // 声明一个独有的Symbol属性, 防止fn覆盖已有属性
  // const temp = 'temp'+new Date().toString
  thisArg = thisArg || window    // 若没有传入this, 默认绑定window对象
  thisArg[temp] = Fn              // this指向调用call的对象,即我们要改变this指向的函数
  const result = thisArg[temp](...args)  // 执行当前函数
  delete thisArg[temp]          // 删除我们声明的fn属性
  return result                  // 返回函数执行结果
}

