/* 
  find
  方法返回数组中满足提供的测试函数的第一个元素的值。
  否则返回 undefined。

  语法
  arr.find(callback[, thisArg])

  参数
  callback
  在数组每一项上执行的函数，接收 3 个参数：
    element
    当前遍历到的元素。
    index可选
    当前遍历到的索引。
    array可选
    数组本身。
  thisArg可选
  执行回调时用作this 的对象。
  如果提供了 thisArg参数，那么它将作为每次 callback函数执行时的this ，
  如果未提供，则使用 undefined。

*/
Array.prototype.myFind = function (callback, thisArg) {
  // callback 处理
  if (typeof callback !== 'function') {
    throw new TypeError(`${callback} is not a function`)
  }
  // thisArg 处理
  thisArg = thisArg || globalThis
  // 获取数组
  let arr = this
  for (let i = 0; i < arr.length; i++) {
    if (callback.call(thisArg, arr[i], i, arr)) {
      return arr[i]
    }
  }
  return undefined
}