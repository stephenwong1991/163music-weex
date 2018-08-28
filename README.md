# 163music-weex
weex仿网易云音乐

use Weex+Weex ui+Nat.js

coding...

# 项目布局

```
.
├── src                                         // 源码目录
│   ├── assets                                  // 公共文件
│   │   └── images                              // 图片资源
│   ├── common                                  // 共用
│   │   ├── js
│   │   │   ├── api.js                          // 请求接口  
│   │   │   ├── const.js                        // 项目公共静态数据
│   │   │   ├── util.js                         // 公共函数
│   ├── components                              // 组件
│   │   ├── common                              // 公共组件
│   │   │   ├── back.vue                        // 返回头部组件
│   │   │   ├── header.vue                      // 公共头部组件
│   │   │   ├── tabBar.vue                      // 底部导航栏组件
│   │   │   └── vimage.vue                      // 图片组件
│   │   ├── find                                // 发现模块组件
│   │   │   ├── banner.vue                      // 发现模块banner组件
│   │   │   ├── list.vue                        // banner下菜单组件
│   │   │   └── song.vue                        // 歌单组件
│   ├── pages                                   // 页面
│   │   ├── dashboard
│   │   │   └── index.vue                       // 首页
│   │   ├── find
│   │   │   ├── find.vue                        // 发现页
│   │   │   └── config.js                       // 发现页配置文件
│   │   ├── video
│   │   │   ├── find.vue                        // 视频页
│   │   │   └── config.js                       // 视频页配置文件
│   │   ├── account
│   │   │   ├── find.vue                        // 账号页
│   │   │   └── config.js                       // 账号页配置文件
│   │   ├── play
│   │   │   └── play.vue                        // 播放页
.

```