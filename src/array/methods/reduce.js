/* 
  reduce
  reduce(): 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，
  将其结果汇总为单个返回值。

  reducer 函数接收4个参数:
    Accumulator (acc) (累计器)
    Current Value (cur) (当前值)
    Current Index (idx) (当前索引)
    Source Array (src) (源数组)
  您的 reducer 函数的返回值分配给累计器，该返回值在数组的每个迭代中被记住，并最后成为最终的单个结果值。   

  arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])

  callback
  执行数组中每个值 (如果没有提供 initialValue则第一个值除外)的函数，包含四个参数：
  accumulator
  累计器累计回调的返回值; 它是上一次调用回调时返回的累积值，或initialValue（见于下方）。

  currentValue
  数组中正在处理的元素。
  index 可选
  数组中正在处理的当前元素的索引。 如果提供了initialValue，则起始索引号为0，否则从索引1起始。
  array可选
  调用reduce()的数组
  initialValue可选
  作为第一次调用 callback函数时的第一个参数的值。 
  如果没有提供初始值，则将使用数组中的第一个元素。 
  在没有初始值的空数组上调用 reduce 将报错。


  回调函数第一次执行时，accumulator 和currentValue的取值
  有两种情况：
  如果调用reduce()时提供了initialValue，accumulator取值为
  initialValue，currentValue取数组中的第一个值；
  如果没有提供 initialValue，那么accumulator取数组中的第一个值，
  currentValue取数组中的第二个值。

  注意：如果没有提供initialValue，reduce 会从索引1的地方开始
  执行 callback 方法，跳过第一个索引。
  如果提供initialValue，从索引0开始。

  如果数组为空且没有提供initialValue，会抛出TypeError 。
  如果数组仅有一个元素（无论位置如何）
  并且没有提供initialValue， 
  或者有提供initialValue但是数组为空，
  那么此唯一值将被返回并且callback不会被执行。
*/


/* 
  还有一个问题是
    数组有长度，但没有值
*/
Array.prototype.myReduce = function (callback, initialValue = null) {
  const context = this
  if (!(initialValue || context.length)) {
    throw new TypeError('myReduce of empty array with no initial value')
  }
  // 有初始值给初始值，没有给数组的第一个值
  let accumulator = initialValue || context[0]
  // 有初始值索引从 1 开始，没有则索引从 0 开始
  for (let i = initialValue ? 0 : 1; i < context.length; i++) {
    accumulator = callback(accumulator, context[i], i, context)
  }
  return accumulator
}