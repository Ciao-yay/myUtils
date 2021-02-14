/* 
  数组去重
    1. 本质是双重循环，效率较低
      判定方法
      1. 遍历时当前元素是否在数组中
      2. 遍历时当前元素索引是否等于数组中第一次出现该元素的索引
    2. 循环加对象容器，一遍遍历（Object.prototype.hasOwnProperty）
    3. ES6 Set + ... 或者 from + Set


*/
// 利用数组的过滤函数和其包含函数
function unique1(arr) {
  // 新建数组。作为返回结果
  let res = []
  // 判断接收的是不是数组
  if (!arr instanceof Array) {
    throw new TypeError(`${arr} is not a array`)
  }
  // 数组过滤
  arr.filter(item => {
    if (!res.includes(item)) res.push(item)
    /* 
      根本不能用 in 
      对数组使用 in ，如 i in arr ，代表数组中包不包含某数字（索引）
      
    */
    // if (!(item in res)) res.push(item)

  })
  /* 
    下面这俩种是笨比操作，没往数组里添加元素，怎么可能有元素
  */
  // res = arr.filter(item=>!res.includes(item))
  // res = arr.filter(item=>!(item in res))

  return res
}
// 利用 reduce 函数
function unique2(arr) {
  // 判断接收的是不是数组
  if (!arr instanceof Array) {
    throw new TypeError(`${arr} is not a array`)
  }
  let res
  res = arr.reduce((prev, cur, i) => {
    if (!(prev.includes(cur))) prev.push(cur)
    // if (!prev.includes(cur)) prev.push(cur)
    return prev
  }, [])
  return res
}
/* 
  利用 Object.prototype.hasOwnProperty
  效率较高，一次遍历
*/
function unique3(arr) {
  // 判断接收的是不是数组
  if (!arr instanceof Array) {
    throw new TypeError(`${arr} is not a array`)
  }
  let res = []
  let obj = {}
  // 遍历
  arr.forEach(item => {
    if (!obj.hasOwnProperty(item)) {
      obj[item] = true
      res.push(item)
    }
  })
  return res
}

/* 
  Set + ...
*/
function unique4(arr) {
  // 判断接收的是不是数组
  if (!arr instanceof Array) {
    throw new TypeError(`${arr} is not a array`)
  }
  return [...new Set(arr)]
}