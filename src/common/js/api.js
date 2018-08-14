/**
 * [请求接口]
 * @param {json} options 请求接口的参数
 * }
 */
const NODE_ENV = process.env.NODE_ENV || 'development'
const host = {
  'production': '',
  // 'development': 'http://localhost:3000'
  'development': 'http://192.168.1.11:3000'
}[NODE_ENV]

export const $http = (options) => {
  const stream = weex.requireModule('stream')
  let method = (options.method || 'GET').toUpperCase()
  let body = options.body || {}
  let data = {
    method: method,
    url: host + options.url,
    type: 'json'
  }
  if (method === 'POST') {
    data.body = body
  }
  return new Promise((resolve, reject) => {
    stream.fetch(data, response => {
      if (response.ok && response.status === 200) {
        resolve(response.data)
      } else {
        reject(response.data)
      }
    })
  })
}
