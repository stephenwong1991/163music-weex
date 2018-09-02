/**
 * [请求接口]
 * @param {Object} options 请求接口的参数
 * }
 */
const NODE_ENV = process.env.NODE_ENV || 'development'
const host = {
  'production': '',
  // 'development': 'http://localhost:3000'
  'development': 'http://192.168.1.11:3000'
}[NODE_ENV]

export default {
  _core (options) {
    let stream = weex.requireModule('stream')
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
          return resolve(response.data)
        } else {
          return reject(response.data)
        }
      })
    })
  },
  // 获取 banner(轮播图)数据
  banner () {
    return this._core({ url: '/banner' })
  },
  // 推荐歌单
  personalized () {
    return this._core({ url: '/personalized' })
  },
  // 推荐 mv
  personalizedMV () {
    return this._core({ url: '/personalized/mv' })
  },
  // 朋友 动态
  friendEvent () {
    return this._core({ url: '/event/get?csrf_token=6e0d35c7b441a824642dd33366768ea5' })
  }
}
