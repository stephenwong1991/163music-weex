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
export const jumpIn = (options = { animated: 'true' }, callback = null) => {
  let navigator = weex.requireModule('navigator')
  // let platform = getPlatform()
  let platform = 'test' // Use weex playground
  let address = options.url
  let [url, index] = []

  if (!address) {
    let modal = weex.requireModule('modal')
    modal.toast({ message: '地址错误' })
    return
  }

  switch (platform) {
    case 'test': // demo
      navigator.push({
        // url: `http://192.168.1.11:8081/dist${address}.js`, // for test
        url: `${getHost()}/dist${address}.js`,
        animated: options.animated
      }, callback)
      break

    case 'web':
      url = address.split('.')[0]
      window.location.href = `${getHost()}${options.url}.html`
      break

    case 'ios':
      index = weex.config.bundleUrl.indexOf('bundlejs')
      url = weex.config.bundleUrl.substring(0, index) + 'bundlejs'
      navigator.push({
        url: url + address + '.js',
        animated: options.animated
      }, callback)
      break

    case 'android':
      index = weex.config.bundleUrl.indexOf('dist')
      url = weex.config.bundleUrl.substring(0, index) + 'dist'
      navigator.push({
        url: url + address,
        animated: options.animated
      }, callback)
      break
  }
}

export const jumpOut = (option = { animated: 'true' }, callback) => {
  navigator.pop({ animated: option.animated }, callback)
}
