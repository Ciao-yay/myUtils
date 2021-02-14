/* 
  数组合并
  concat
    方法用于合并两个或多个数组。
    此方法不会更改现有数组，而是返回一个新数组。
  
  语法
    var new_array = old_array.concat(value1[, value2[, ...[, valueN]]])

  参数
    valueN可选
      数组和/或值，将被合并到一个新的数组中。
      如果省略了所有 valueN 参数，则 concat 会返回调用
      此方法的现存数组的一个浅拷贝。

  返回值
    新的 Array 实例。

*/
Array.prototype.myConcat = function(){
  // 处理 this
  if(this === null ){
    throw new TypeError('Array.prototype.some called on null or undefined')
  }
  let context = this
  /* 
    不影响原数组，所以要用新数组
  */
  let res = [...context]
  // 处理参数
  if(!arguments.length) return context
  let args = [...arguments]
  args.forEach(item=>{
    if(item instanceof Array){
      res.push(...item)
    }else{
      res.push(item)
    }
  })
  return res
}