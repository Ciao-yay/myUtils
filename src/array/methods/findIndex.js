/* 
  findIndex()
  方法返回数组中满足提供的测试函数的第一个元素的索引。
  若没有找到对应元素则返回-1。

  语法
  arr.findIndex(callback[, thisArg])

  参数
  callback
  针对数组中的每个元素, 都会执行该回调函数, 执行时会自动传入下面三个参数:
    element
    当前元素。
    index
    当前元素的索引。
    array
    调用findIndex的数组。
  thisArg
  可选。执行callback时作为this对象的值

  返回值
    数组中通过提供测试函数的第一个元素的索引。否则，返回-1


*/
Array.prototype.myFindIndex = function (callback, thisArg) {
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
  if (!len) return -1
  for (let i = 0; i < len; i++) {
    if (callback.call(thisArg, arr[i], i, arr)) {
      return i
    }
  }
  return -1
}