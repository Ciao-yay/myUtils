/*
  map
  方法创建一个新数组，其结果是该数组中的每个元素是调用一次提供的函数后的返回值。
  var new_array = arr.map(function callback(currentValue[, index[, array]]) {
    // Return element for new_array
  }[, thisArg])
*/
Array.prototype.myMap = function (callback, thisArg = window) {
  // thisArg可选
  // 执行 callback 函数时值被用作this。
  const context = this
  let result = []
  for (let i = 0; i < context.length; i++) {
    result.push(callback.call(thisArg, context[i], i, context))
  }
  return result
}
function map(arr, callback) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr))
  }
  return result
} 