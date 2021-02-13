/* 
  every
  方法测试一个数组内的所有元素是否都能通过某个指定函数的测试。
  它返回一个布尔值。
  注意：若收到一个空数组，此方法在一切情况下都会返回 true。

  语法
  arr.every(callback(element[, index[, array]])[, thisArg])

  参数
  callback
  用来测试每个元素的函数，它可以接收三个参数：
    element
    用于测试的当前值。
    index可选
    用于测试的当前值的索引。
    array可选
    调用 every 的当前数组。
  thisArg
  执行 callback 时使用的 this 值

  返回值
  如果回调函数的每一次返回都为 truthy 值，返回 true ，
  否则返回 false。


*/
Array.prototype.myEvery = function (callback, thisArg) {
  if (typeof callback !== 'function') {
    throw new TypeError(`${callback} is not a function`)
  }
  // thisArg
  thisArg = thisArg || globalThis
  // 数组
  let arr = this
  // 长度
  const len = arr.length
  // 长度为零直接 return
  if (!len) return true
  for(let i=0;i<len;i++){
    if(!callback.call(thisArg,arr[i],i,arr)){
      return false
    }
  }
  return true
}

/* 
  人家写的

*/
// 如果没有这个属性再重新定义
// if (!Array.prototype.every) {
//   Array.prototype.every = function(callbackfn, thisArg) {
// 严格模式
//     'use strict';
// 为啥他们变量都喜欢命成单个字母的大小写
//     var T, k;
// 先判断 this （调用的数组）
//     if (this == null) {
//       throw new TypeError('this is null or not defined');
//     }

//     // 1. Let O be the result of calling ToObject passing the this
//     //    value as the argument.
/* 
  把数组变成对象，为啥？(其实数组就是对象)
  鉴于这总是被强制转换为对象,因此Object(this)不是必需的.
  但是,它明确指出了隐含的内容,以避免歧义并提高代码理解能力
  严格的模式是关键！当函数处于严格模式时,不会强制执行此原始值！
  这可能是使用Object(this)显式转换的最合理的解释 
*/
//     var O = Object(this);

//     // 2. Let lenValue be the result of calling the Get internal method
//     //    of O with the argument "length".
//     // 3. Let len be ToUint32(lenValue).
/* 
  x >>> 0本质上就是保证x有意义（为数字类型），且为正整数，
  在有效的数组范围内（0 ～ 0xFFFFFFFF），
  且在无意义的情况下缺省值为0。
*/
//     var len = O.length >>> 0;

//     // 4. If IsCallable(callbackfn) is false, throw a TypeError exception.
/* 
  保证回调是个函数
*/
//     if (typeof callbackfn !== 'function') {
//       throw new TypeError();
//     }

//     // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
//     if (arguments.length > 1) {
//       T = thisArg;
//     }
/* 
  循环数 k
*/
//     // 6. Let k be 0.
//     k = 0;

//     // 7. Repeat, while k < len
//     while (k < len) {

//       var kValue;

//       // a. Let Pk be ToString(k).
//       //   This is implicit for LHS operands of the in operator
//       // b. Let kPresent be the result of calling the HasProperty internal
//       //    method of O with argument Pk.
//       //   This step can be combined with c
//       // c. If kPresent is true, then
/* 
  通过对象来做遍历
*/
//       if (k in O) {

//         // i. Let kValue be the result of calling the Get internal method
//         //    of O with argument Pk.
//         kValue = O[k];

//         // ii. Let testResult be the result of calling the Call internal method
//         //     of callbackfn with T as the this value and argument list
//         //     containing kValue, k, and O.
//         var testResult = callbackfn.call(T, kValue, k, O);

//         // iii. If ToBoolean(testResult) is false, return false.
//         if (!testResult) {
//           return false;
//         }
//       }
//       k++;
//     }
//     return true;
//   };
// }