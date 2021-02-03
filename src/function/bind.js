/* 
  bind() 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。
  语法: function.bind(thisArg, arg1, arg2, ...)

*/
// 有点难，先来个简易版
/* 
  与 call() 类似,所以内部可以利用 call() 实现，
  不同点在于 bind() 不执行函数并返回一个新函数，
  新函数的参数包括 bind() 传入的参数以及新函数传入的参数

*/

Function.prototype.myBind = function (thisArg, ...args) {
  var self = this
  // new优先级
  var fbound = function () {
    self.apply(this instanceof self ? this : thisArg, args.concat(Array.prototype.slice.call(arguments)))
  }
  // 继承原型上的属性和方法
  fbound.prototype = Object.create(self.prototype);
  return fbound;
}