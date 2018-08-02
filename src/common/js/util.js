/**
  工具方法
*/

/**
 * [当前域名/ip]
 */
export const getHost = () => {
  let host = ''
  let regex = /https?:\/\/([^/]+)/i
  let match = weex.config.bundleUrl.match(regex)

  if (typeof match !== 'undefined' && match !== null) {
    host = match[0]
  }
  return host
}

/**
 * [当前平台]
 */
export const getPlatform = () => {
  return weex.config.env.platform.toLowerCase()
}

/**
 * [日期格式化]
 * @param {any}    date   日期
 * @param {string} format 日期格式
 * for example:
 *  format = 'yyyyMMddhhmmss'           -> '20180619135353'
 *  format = 'yyyy-MM-dd hh:mm:ss'      -> '2018-06-19 13:53:53'
 *  format = 'yyyy年MM月dd日hh时mm分ss秒' -> '2018年06月19日13时53分53秒'
 */
export const dateFormat = (date, format = 'yyyyMMddhhmmss') => {
  if (!date) {
    date = new Date()
  }
  if (typeof date === 'string' && /^\d+$/.test(date)) {
    date = new Date(+date)
  }
  if (typeof date === 'number') {
    date = new Date(date)
  }
  if (typeof date !== 'number' && !(date instanceof Date)) {
    date = date.replace(/年|月/g, '-').replace(/日/g, '')
    date = new Date(date)
  }

  const o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, String(date.getFullYear()).substr(4 - RegExp.$1.length))
  }
  Object.keys(o).forEach(k => {
    if (new RegExp(`(${k})`).test(format)) {
      format = format.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[ k ]) : ((`00${o[ k ]}`).substr((String(o[ k ])).length)))
    }
  })
  return format
}

/**
 * [页面跳转]
 * @param {string}   url       相对地址
 * @param {string}   animated  是否开启动画, 默认值为'true'
 * @param {function} callback  跳转后的回调
 */
// export const jumpPage = {
//   push: (option, callback) => {
//     let platform = getPlatform()
//     let url = null
//     let address = option.url

//     if (platform === 'web') {
//       let ars = address.split('.')[0]
//       window.location.href = getHost() + ars + '.html'
//       return
//     }

//     let animated = option.animated || 'true'
//     let cb = callback || ''
//     if (platform === 'ios') {
//       let index = weex.config.bundleUrl.indexOf('bundlejs')
//       url = weex.config.bundleUrl.substring(0, index) + 'bundlejs'
//     }
//     if (platform === 'android') {
//       let h = weex.config.bundleUrl.indexOf('dist')
//       url = weex.config.bundleUrl.substring(0, h) + 'dist'
//       navigator.push({
//         url: url + address,
//         animated: animated
//       }, cb)
//       return
//     }
//     navigator.push({
//       url: url + address,
//       animated: animated
//     }, cb)
//   },
//   pop: (option, callback) => {
//     let url = weex.config.bundleUrl
//     if (url.includes('dashboard')) {
//       return
//     }
//     let animated = option ? option.animated ? option.animated : 'true' : 'true'
//     let cb = callback || ''
//     navigator.pop({
//       animated: animated
//     }, cb)
//   }
// }
