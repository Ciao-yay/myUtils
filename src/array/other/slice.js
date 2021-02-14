/* 
  slice
  数组切片
    方法返回一个新的数组对象，
    这一对象是一个由 begin 和 end 决定的
    原数组的浅拷贝（包括 begin，不包括end）。
    原始数组不会被改变。

  语法
    arr.slice([begin[, end]])

  参数
    begin 可选
      提取起始处的索引（从 0 开始），从该索引开始提取原数组元素。
      如果该参数为负数，则表示从原数组中的倒数第几个元素开始提取，
      slice(-2) 表示提取原数组中的倒数第二个元素到最后一个元素
      （包含最后一个元素）。
      如果省略 begin，则 slice 从索引 0 开始。
      如果 begin 超出原数组的索引范围，则会返回空数组。
    end 可选
      提取终止处的索引（从 0 开始），
      在该索引处结束提取原数组元素。
      slice 会提取原数组中索引从 begin 到 end 的所有元素
      （包含 begin，但不包含 end）。
      slice(1,4) 会提取原数组中从第二个元素开始一直到
      第四个元素的所有元素 （索引为 1, 2, 3的元素）。
      如果该参数为负数， 则它表示在原数组中的倒数第几个元素
      结束抽取。 slice(-2,-1) 表示抽取了原数组中的倒数第二个
      元素到最后一个元素（不包含最后一个元素，
      也就是只有倒数第二个元素）。
      如果 end 被省略，则 slice 会一直提取到原数组末尾。
      如果 end 大于数组的长度，slice 也会一直提取到原数组末尾。

    如果 begin > end 则返回空数组

  返回值
    一个含有被提取元素的新数组。


*/
Array.prototype.mySlice = function(){
  // 处理 this
  if(this === null ){
    throw new TypeError('Array.prototype.some called on null or undefined')
  }
  let context = this
  const len = context.length >>> 0
  // 处理参数
  // 还要确定参数是数字
  const args = [...arguments]
  let begin,end
  switch(args.length){
    case 0:
      return [...context]
    case 1:
      begin = args[0]>=0?args[0]:0
      break
    default:
      break
  }
  // 处理 begin、end
  // 没有 begin、end
  // 
}