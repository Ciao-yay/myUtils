/* 
  filter
  方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。 
  var newArray = arr.filter(callback(element[, index[, array]])[, thisArg])
  callback
  用来测试数组的每个元素的函数。返回 true 表示该元素通过测试，保留该元素，false 则不保留。它接受以下三个参数：
    element
    数组中当前正在处理的元素。
    index可选
    正在处理的元素在数组中的索引。
    array可选
    调用了 filter 的数组本身。
  thisArg可选
  执行 callback 时，用于 this 的值。

  返回值
  一个新的、由通过测试的元素组成的数组，如果没有任何数组元素通过测试，则返回空数组。
*/
Array.prototype.myFilter = function (callback, thisArg) {
  // 保证传入的第一个参数是回调函数
  if (typeof callback !== 'function') {
    throw new TypeError(`${callback} is not a function`)
  }
  // 对指定 this 值做处理
  // globalThis 新语法指向全局属性
  thisArg = thisArg || globalThis
  // 指定对象
  let context = this
  // 新数组
  let res = []
  for (let i = 0; i < context.length; i++) {
    if (callback.call(thisArg, context[i], i, context)) {
      res.push(context[i])
    }
  }
  return res
}