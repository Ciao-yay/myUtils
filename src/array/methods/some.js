/* 
  some
  方法测试数组中是不是至少有1个元素通过了被提供的函数测试。
  它返回的是一个Boolean类型的值。
  注意：如果用一个空数组进行测试，在任何情况下它返回的都是false。

  语法
  arr.some(callback(element[, index[, array]])[, thisArg])

  参数
  callback
  用来测试每个元素的函数，接受三个参数：
    element
    数组中正在处理的元素。
    index 可选
    数组中正在处理的元素的索引值。
    array可选
    some()被调用的数组。
  thisArg可选
  执行 callback 时使用的 this 值。

  返回值
  数组中有至少一个元素通过回调函数的测试就会返回true；
  所有元素都没有通过回调函数的测试返回值才会为false。
*/
Array.prototype.mySome = function(callback,thisArg){
  let T
  // 处理回调函数
  if(typeof callback !== 'function'){
    throw new TypeError(`${callback} is not a function`)
  }
  // 处理 this (数组)
  if(!this){
    throw new TypeError('Array.prototype.some called on null or undefined')
  }
  let o = Object(this)
  // 处理长度
  let len = o.length >>> 0
  if(!len) return false
  // 处理 thisArg
  if(arguments.length>1){
    T = thisArg
  }
  // 循环
  for(let i = 0;i<len;i++){
    if(callback.call(T,o[i],i,o)){
      return true
    }
  }
  return false
}


/* 
  别人写的

*/

// Production steps of ECMA-262, Edition 5, 15.4.4.17
// Reference: http://es5.github.io/#x15.4.4.17
// if (!Array.prototype.some) {
//   Array.prototype.some = function(fun/*, thisArg*/) {
//     'use strict';

//     if (this == null) {
//       throw new TypeError('Array.prototype.some called on null or undefined');
//     }

//     if (typeof fun !== 'function') {
//       throw new TypeError();
//     }

//     var t = Object(this);
//     var len = t.length >>> 0;

//     var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
/* 
  判断 i in t
  some() 遍历的元素的范围在第一次调用 callback. 前就已经确定了。
  在调用 some() 后被添加到数组中的值不会被 callback 访问到。
  如果数组中存在且还未被访问到的元素被 callback 改变了，
  则其传递给 callback 的值是 some() 访问到它那一刻的值。
  已经被删除的元素不会被访问到。
*/
//     for (var i = 0; i < len; i++) {
//       if (i in t && fun.call(thisArg, t[i], i, t)) {
//         return true;
//       }
//     }

//     return false;
//   };
// }