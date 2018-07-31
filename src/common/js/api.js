/**
 * [请求接口]
 * @param {json} options 请求接口的参数
 * }
 */
export const $http = options => {
  const stream = weex.requireModule('stream')
  let method = (options.method || 'GET').toUpperCase()
  let body = options.body || {}
  if (options.$vm) {
    options.$vm.isShowLoading = true
  }
  return new Promise((resolve, reject) => {
    stream.fetch({
      method: method,
      url: '',
      type: 'json',
      body: body
    }, response => {
      if (options.$vm) {
        options.$vm.isShowLoading = false
      }
      resolve(response.data)
      reject(response.data)
    })
  })
}
