/* 
  debounce 防抖
  触发一个事件，隔指定时间再执行，
  间隔时结束之前重复触发，会重置间隔时间
*/

function debounce(fuc, wait) {
  let timeId = null
  return function () {
    const context = this
    const args = arguments
    if (timeId) clearTimeout(timeId)
    timeId = setTimeout(() => {
      fuc.apply(context, args)
      timeId = null
    }, wait)
  }
}