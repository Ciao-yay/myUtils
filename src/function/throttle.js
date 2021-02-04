/* 
  throttle 节流
  在指定时间内多次触发事件只执行最后一次

  参数
  触发函数   时间间隔
  返回值
  没有返回值，在函数内部执行触发函数   错
  返回值是一个函数
*/
/* 
  思路：
  获取初次触发时间和当前触发事件时间的差值与 time 作比较
  关键是怎么储存时间，每次调用这个函数都是一个新的作用域
  利用闭包。。。
*/

/* 
  时间戳版
*/
// function throttle(fuc, wait = 300) {
//   let prev = new Date()
//   return function () {
//     const context = this // 这里的 this 指向调用该函数的对象
//     const now = new Date()
//     // prev 在闭包里
//     if (now - prev >= wait) {
//       console.log(now - prev)
//       fuc.apply(context, arguments)      // 这里为什么要改变 this 指向呢
//       prev = now      // fuc([...arguments])
//     }
//   }
// }
function throttle(fn, threshhold) {
  var timeout
  var start = new Date;
  var threshhold = threshhold || 160
  return function () {
    var context = this, args = arguments, curr = new Date() - 0
    clearTimeout(timeout)//总是干掉事件回调
    if (curr - start >= threshhold) {
      console.log("now", curr, curr - start)//注意这里相减的结果，都差不多是160左右
      fn.apply(context, args) //只执行一部分方法，这些方法是在某个时间段内执行一次
      start = curr
    }
  }
}
/*
  定时器版本
*/
// function throttle(fuc, wait = 300) {
//   let timeId = null
//   return function () {
//     const context = this // 这里的 this 指向调用该函数的对象
//     if (!timeId){ // prev 在闭包里
//       timeId = setTimeout(()=>{
//         fuc.apply(context,arguments)
//         // fuc([...arguments]) // 这里为什么要改变 this 指向呢
//         // clearTimeout(timeId) // 清除定时器为什么不行？
//         timeId = null
//       },wait)
//     }
//   }
// }