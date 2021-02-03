/* 
  与 call 类似，不同在于参数形式
  只接收两个参数，第一个是指定运行环境，第二个是参数数组
*/
// 手撕
Function.prototype.myApply = function(thisArg,arr){
  // 先判断参数是否存在，再判断是不是数组
  // console.log(arr)
  if(arr && !(arr instanceof Array)){
    throw new TypeError('CreateListFromArrayLike called on non-object')
  }
  // console.log(arr instanceof Array)
  thisArg = thisArg || window // 需要注意未指定时不一定是window，所以这里需要改一下
  const fn = Symbol('fn')
  thisArg[fn] = this
  const res = thisArg[fn](...arr || [])
  delete thisArg[fn]
  return res
}
function myApply(obj,thisArg,arr){
  if(arr && !(arr instanceof Array)){
    throw new TypeError('CreateListFromArrayLike called on non-object')
  }
  thisArg = thisArg || window
  const fn = Symbol('fn')
  thisArg[fn] = obj
  const res = thisArg[fn](...arr || [])
  delete thisArg[fn]
  return res
}