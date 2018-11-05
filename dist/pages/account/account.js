// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 88);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(3)
)

/* script */
__vue_exports__ = __webpack_require__(4)

/* template */
var __vue_template__ = __webpack_require__(5)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/wangsai/workspace/github/163music-weex/src/components/common/vImage.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-0f6762c9"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                                * CopyRight (C) 2017-2022 Alibaba Group Holding Limited.
                                                                                                                                                                                                                                                                                * Created by Tw93 on 17/11/01
                                                                                                                                                                                                                                                                                */

var _urlParse = __webpack_require__(9);

var _urlParse2 = _interopRequireDefault(_urlParse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Utils = {
  UrlParser: _urlParse2.default,
  _typeof: function _typeof(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
  },
  isPlainObject: function isPlainObject(obj) {
    return Utils._typeof(obj) === 'object';
  },
  isString: function isString(obj) {
    return typeof obj === 'string';
  },
  isNonEmptyArray: function isNonEmptyArray() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    return obj && obj.length > 0 && Array.isArray(obj) && typeof obj !== 'undefined';
  },
  isObject: function isObject(item) {
    return item && (typeof item === 'undefined' ? 'undefined' : _typeof2(item)) === 'object' && !Array.isArray(item);
  },
  isEmptyObject: function isEmptyObject(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  },
  decodeIconFont: function decodeIconFont(text) {
    // 正则匹配 图标和文字混排 eg: 我去上学校&#xe600;,天天不&#xe600;迟到
    var regExp = /&#x[a-z|0-9]{4,5};?/g;
    if (regExp.test(text)) {
      return text.replace(new RegExp(regExp, 'g'), function (iconText) {
        var replace = iconText.replace(/&#x/, '0x').replace(/;$/, '');
        return String.fromCharCode(replace);
      });
    } else {
      return text;
    }
  },
  mergeDeep: function mergeDeep(target) {
    for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      sources[_key - 1] = arguments[_key];
    }

    if (!sources.length) return target;
    var source = sources.shift();
    if (Utils.isObject(target) && Utils.isObject(source)) {
      for (var key in source) {
        if (Utils.isObject(source[key])) {
          if (!target[key]) {
            Object.assign(target, _defineProperty({}, key, {}));
          }
          Utils.mergeDeep(target[key], source[key]);
        } else {
          Object.assign(target, _defineProperty({}, key, source[key]));
        }
      }
    }
    return Utils.mergeDeep.apply(Utils, [target].concat(sources));
  },
  appendProtocol: function appendProtocol(url) {
    if (/^\/\//.test(url)) {
      var bundleUrl = weex.config.bundleUrl;

      return 'http' + (/^https:/.test(bundleUrl) ? 's' : '') + ':' + url;
    }
    return url;
  },
  encodeURLParams: function encodeURLParams(url) {
    var parsedUrl = new _urlParse2.default(url, true);
    return parsedUrl.toString();
  },
  goToH5Page: function goToH5Page(jumpUrl) {
    var animated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    var Navigator = weex.requireModule('navigator');
    var jumpUrlObj = new Utils.UrlParser(jumpUrl, true);
    var url = Utils.appendProtocol(jumpUrlObj.toString());
    Navigator.push({
      url: Utils.encodeURLParams(url),
      animated: animated.toString()
    }, callback);
  },

  env: {
    isTaobao: function isTaobao() {
      var appName = weex.config.env.appName;

      return (/(tb|taobao|淘宝)/i.test(appName)
      );
    },
    isTrip: function isTrip() {
      var appName = weex.config.env.appName;

      return appName === 'LX';
    },
    isBoat: function isBoat() {
      var appName = weex.config.env.appName;

      return appName === 'Boat' || appName === 'BoatPlayground';
    },
    isWeb: function isWeb() {
      var platform = weex.config.env.platform;

      return (typeof window === 'undefined' ? 'undefined' : _typeof2(window)) === 'object' && platform.toLowerCase() === 'web';
    },
    isIOS: function isIOS() {
      var platform = weex.config.env.platform;

      return platform.toLowerCase() === 'ios';
    },

    /**
     * 是否为 iPhone X
     * @returns {boolean}
     */
    isIPhoneX: function isIPhoneX() {
      var deviceHeight = weex.config.env.deviceHeight;

      if (Utils.env.isWeb()) {
        return (typeof window === 'undefined' ? 'undefined' : _typeof2(window)) !== undefined && window.screen && window.screen.width && window.screen.height && parseInt(window.screen.width, 10) === 375 && parseInt(window.screen.height, 10) === 812;
      }
      return Utils.env.isIOS() && deviceHeight === 2436;
    },
    isAndroid: function isAndroid() {
      var platform = weex.config.env.platform;

      return platform.toLowerCase() === 'android';
    },
    isAlipay: function isAlipay() {
      var appName = weex.config.env.appName;

      return appName === 'AP';
    },
    isTmall: function isTmall() {
      var appName = weex.config.env.appName;

      return (/(tm|tmall|天猫)/i.test(appName)
      );
    },
    isAliWeex: function isAliWeex() {
      return Utils.env.isTmall() || Utils.env.isTrip() || Utils.env.isTaobao();
    },

    /**
     * 获取weex屏幕真实的设置高度，需要减去导航栏高度
     * @returns {Number}
     */
    getPageHeight: function getPageHeight() {
      var env = weex.config.env;

      var navHeight = Utils.env.isWeb() ? 0 : Utils.env.isIPhoneX() ? 176 : 132;
      return env.deviceHeight / env.deviceWidth * 750 - navHeight;
    },

    /**
     * 获取weex屏幕真实的设置高度
     * @returns {Number}
     */
    getScreenHeight: function getScreenHeight() {
      var env = weex.config.env;

      return env.deviceHeight / env.deviceWidth * 750;
    }
  },

  /**
   * 版本号比较
   * @memberOf Utils
   * @param currVer {string}
   * @param promoteVer {string}
   * @returns {boolean}
   * @example
   *
   * const { Utils } = require('@ali/wx-bridge');
   * const { compareVersion } = Utils;
   * console.log(compareVersion('0.1.100', '0.1.11')); // 'true'
   */
  compareVersion: function compareVersion() {
    var currVer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '0.0.0';
    var promoteVer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0.0.0';

    if (currVer === promoteVer) return true;
    var currVerArr = currVer.split('.');
    var promoteVerArr = promoteVer.split('.');
    var len = Math.max(currVerArr.length, promoteVerArr.length);
    for (var i = 0; i < len; i++) {
      var proVal = ~~promoteVerArr[i];
      var curVal = ~~currVerArr[i];
      if (proVal < curVal) {
        return true;
      } else if (proVal > curVal) {
        return false;
      }
    }
    return false;
  },

  /**
   * 分割数组
   * @param arr 被分割数组
   * @param size 分割数组的长度
   * @returns {Array}
   */
  arrayChunk: function arrayChunk() {
    var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;

    var groups = [];
    if (arr && arr.length > 0) {
      groups = arr.map(function (e, i) {
        return i % size === 0 ? arr.slice(i, i + size) : null;
      }).filter(function (e) {
        return e;
      });
    }
    return groups;
  },

  /*
   * 截断字符串
   * @param str 传入字符串
   * @param len 截断长度
   * @param hasDot 末尾是否...
   * @returns {String}
   */
  truncateString: function truncateString(str, len) {
    var hasDot = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    var newLength = 0;
    var newStr = '';
    var singleChar = '';
    var chineseRegex = /[^\x00-\xff]/g;
    var strLength = str.replace(chineseRegex, '**').length;
    for (var i = 0; i < strLength; i++) {
      singleChar = str.charAt(i).toString();
      if (singleChar.match(chineseRegex) !== null) {
        newLength += 2;
      } else {
        newLength++;
      }
      if (newLength > len) {
        break;
      }
      newStr += singleChar;
    }

    if (hasDot && strLength > len) {
      newStr += '...';
    }
    return newStr;
  },

  /*
   * 转换 obj 为 url params参数
   * @param obj 传入字符串
   * @returns {String}
   */
  objToParams: function objToParams(obj) {
    var str = "";
    for (var key in obj) {
      if (str !== "") {
        str += "&";
      }
      str += key + "=" + encodeURIComponent(obj[key]);
    }
    return str;
  },

  /*
   * 转换 url params参数为obj
   * @param str 传入url参数字符串
   * @returns {Object}
   */
  paramsToObj: function paramsToObj(str) {
    var obj = {};
    try {
      obj = JSON.parse('{"' + decodeURI(str).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
    } catch (e) {
      console.log(e);
    }
    return obj;
  },

  animation: {
    /**
     * 返回定义页面转场动画起初的位置
     * @param ref
     * @param transform 运动类型
     * @param status
     * @param callback 回调函数
     */
    pageTransitionAnimation: function pageTransitionAnimation(ref, transform, status, callback) {
      var animation = weex.requireModule('animation');
      animation.transition(ref, {
        styles: {
          transform: transform
        },
        duration: status ? 250 : 300, // ms
        timingFunction: status ? 'ease-in' : 'ease-out',
        delay: 0 // ms
      }, function () {
        callback && callback();
      });
    }
  },
  uiStyle: {
    /**
     * 返回定义页面转场动画起初的位置
     * @param animationType 页面转场动画的类型 push，model
     * @param size 分割数组的长度
     * @returns {}
     */
    pageTransitionAnimationStyle: function pageTransitionAnimationStyle(animationType) {
      if (animationType === 'push') {
        return {
          left: '750px',
          top: '0px',
          height: weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750 + 'px'
        };
      } else if (animationType === 'model') {
        return {
          top: weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750 + 'px',
          left: '0px',
          height: weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750 + 'px'
        };
      }
      return {};
    }
  }
};

exports.default = Utils;

/***/ }),

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Check if we're required to add a port number.
 *
 * @see https://url.spec.whatwg.org/#default-port
 * @param {Number|String} port Port number we need to check
 * @param {String} protocol Protocol we need to check against.
 * @returns {Boolean} Is it a default port for the given protocol
 * @api private
 */
module.exports = function required(port, protocol) {
  protocol = protocol.split(':')[0];
  port = +port;

  if (!port) return false;

  switch (protocol) {
    case 'http':
    case 'ws':
    return port !== 80;

    case 'https':
    case 'wss':
    return port !== 443;

    case 'ftp':
    return port !== 21;

    case 'gopher':
    return port !== 70;

    case 'file':
    return false;
  }

  return port !== 0;
};


/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty;

/**
 * Decode a URI encoded string.
 *
 * @param {String} input The URI encoded string.
 * @returns {String} The decoded string.
 * @api private
 */
function decode(input) {
  return decodeURIComponent(input.replace(/\+/g, ' '));
}

/**
 * Simple query string parser.
 *
 * @param {String} query The query string that needs to be parsed.
 * @returns {Object}
 * @api public
 */
function querystring(query) {
  var parser = /([^=?&]+)=?([^&]*)/g
    , result = {}
    , part;

  while (part = parser.exec(query)) {
    var key = decode(part[1])
      , value = decode(part[2]);

    //
    // Prevent overriding of existing properties. This ensures that build-in
    // methods like `toString` or __proto__ are not overriden by malicious
    // querystrings.
    //
    if (key in result) continue;
    result[key] = value;
  }

  return result;
}

/**
 * Transform a query string to an object.
 *
 * @param {Object} obj Object that should be transformed.
 * @param {String} prefix Optional prefix.
 * @returns {String}
 * @api public
 */
function querystringify(obj, prefix) {
  prefix = prefix || '';

  var pairs = [];

  //
  // Optionally prefix with a '?' if needed
  //
  if ('string' !== typeof prefix) prefix = '?';

  for (var key in obj) {
    if (has.call(obj, key)) {
      pairs.push(encodeURIComponent(key) +'='+ encodeURIComponent(obj[key]));
    }
  }

  return pairs.length ? prefix + pairs.join('&') : '';
}

//
// Expose the module.
//
exports.stringify = querystringify;
exports.parse = querystring;


/***/ }),

/***/ 12:
/***/ (function(module, exports) {

module.exports = {
  "header-wrapper": {
    "width": "750",
    "height": "120",
    "backgroundColor": "#dc4238",
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "flex-end"
  },
  "header-title": {
    "width": "534",
    "textAlign": "center",
    "color": "#FFFFFF"
  },
  "header-title-margin": {
    "marginLeft": "91"
  },
  "icon-left": {
    "width": "56",
    "height": "56",
    "marginRight": "35"
  },
  "icon-playing": {
    "width": "56",
    "height": "56",
    "marginLeft": "35"
  },
  "icon-search": {
    "width": "24",
    "height": "24",
    "marginRight": "15"
  },
  "search-wrapper": {
    "width": "534",
    "height": "60",
    "lineHeight": "60",
    "textAlign": "center",
    "backgroundColor": "#df645c",
    "borderRadius": "30",
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "search": {
    "fontSize": "26",
    "color": "#ffaca9",
    "textAlign": "center"
  }
}

/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vImage = __webpack_require__(0);

var _vImage2 = _interopRequireDefault(_vImage);

var _util = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'header',
  props: {
    hasLeft: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: '搜索音乐、视频、歌词、电台'
    },
    page: {
      type: String,
      default: 'find'
    }
  },
  components: {
    VImage: _vImage2.default
  },
  computed: {
    leftSrc: function leftSrc() {
      return {
        find: 'topbar/cm2_topbar_icn_mic@2x.png',
        video: 'video/cm4_video_btn_post@2x.png'
      }[this.page];
    }
  },
  methods: {
    leftIcon: function leftIcon() {},
    search: function search() {},
    playing: function playing() {
      (0, _util.jumpIn)({ url: '/pages/play/play' });
    }
  }
};

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: ["header-wrapper"]
  }, [(_vm.hasLeft) ? _c('v-image', {
    staticClass: ["icon-left"],
    attrs: {
      "src": _vm.leftSrc
    },
    on: {
      "click": _vm.leftIcon
    }
  }) : _vm._e(), (_vm.title) ? _c('text', {
    class: ['header-title', !_vm.hasLeft && 'header-title-margin']
  }, [_vm._v(_vm._s(_vm.title))]) : _c('div', {
    staticClass: ["search-wrapper"],
    on: {
      "click": _vm.search
    }
  }, [_c('v-image', {
    staticClass: ["icon-search"],
    attrs: {
      "src": "list/cm2_list_icn_search.png"
    }
  }), _c('text', {
    staticClass: ["search"]
  }, [_vm._v(_vm._s(_vm.placeholder))])], 1), _c('v-image', {
    staticClass: ["icon-playing"],
    attrs: {
      "src": "topbar/cm2_topbar_icn_playing@2x.png"
    },
    nativeOn: {
      "click": _vm.playing
    }
  })], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
  工具方法
*/

/**
 * [当前域名/ip]
 */
var getHost = exports.getHost = function getHost() {
  var host = '';
  var regex = /https?:\/\/([^/]+)/i;
  var match = weex.config.bundleUrl.match(regex);

  if (typeof match !== 'undefined' && match !== null) {
    host = match[0];
  }
  return host;
};

/**
 * [当前平台]
 */
var getPlatform = exports.getPlatform = function getPlatform() {
  return weex.config.env.platform.toLowerCase();
};

/**
 * [日期格式化]
 * @param {any}    date   日期
 * @param {string} format 日期格式
 * for example:
 *  format = 'yyyyMMddhhmmss'           -> '20180619135353'
 *  format = 'yyyy-MM-dd hh:mm:ss'      -> '2018-06-19 13:53:53'
 *  format = 'yyyy年MM月dd日hh时mm分ss秒' -> '2018年06月19日13时53分53秒'
 */
var dateFormat = exports.dateFormat = function dateFormat(date) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyyMMddhhmmss';

  if (!date) {
    date = new Date();
  }
  if (typeof date === 'string' && /^\d+$/.test(date)) {
    date = new Date(+date);
  }
  if (typeof date === 'number') {
    date = new Date(date);
  }
  if (typeof date !== 'number' && !(date instanceof Date)) {
    date = date.replace(/年|月/g, '-').replace(/日/g, '');
    date = new Date(date);
  }

  var o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds() // 毫秒
  };
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, String(date.getFullYear()).substr(4 - RegExp.$1.length));
  }
  Object.keys(o).forEach(function (k) {
    if (new RegExp('(' + k + ')').test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(String(o[k]).length));
    }
  });
  return format;
};

/**
 * [页面跳转]
 * @param {string}   url       相对地址
 * @param {string}   animated  是否开启动画, 默认值为'true'
 * @param {function} callback  跳转后的回调
 */
var jumpIn = exports.jumpIn = function jumpIn() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { animated: 'true' };
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  var navigator = weex.requireModule('navigator');
  // let platform = getPlatform()
  var platform = 'test'; // Use weex playground
  var address = options.url;
  var _ref = [],
      url = _ref[0],
      index = _ref[1];


  if (!address) {
    var modal = weex.requireModule('modal');
    modal.toast({ message: '地址错误' });
    return;
  }

  switch (platform) {
    case 'test':
      // demo
      navigator.push({
        // url: `http://192.168.1.11:8081/dist${address}.js`, // for test
        url: getHost() + '/dist' + address + '.js',
        animated: options.animated
      }, callback);
      break;

    case 'web':
      url = address.split('.')[0];
      window.location.href = '' + getHost() + options.url + '.html';
      break;

    case 'ios':
      index = weex.config.bundleUrl.indexOf('bundlejs');
      url = weex.config.bundleUrl.substring(0, index) + 'bundlejs';
      navigator.push({
        url: url + address + '.js',
        animated: options.animated
      }, callback);
      break;

    case 'android':
      index = weex.config.bundleUrl.indexOf('dist');
      url = weex.config.bundleUrl.substring(0, index) + 'dist';
      navigator.push({
        url: url + address,
        animated: options.animated
      }, callback);
      break;
  }
};

var jumpOut = exports.jumpOut = function jumpOut() {
  var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { animated: 'true' };
  var callback = arguments[1];

  navigator.pop({ animated: option.animated }, callback);
};

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = __webpack_require__(2);

exports.default = {
  name: 'image',
  props: {
    src: {
      type: String,
      default: ''
    }
  },
  computed: {
    locationSrc: function locationSrc() {
      return this.setImageUrl(this.src);
    }
  },
  methods: {
    setImageUrl: function setImageUrl(src) {
      return {
        /**
         * Android本地路径
         * 对应src -> main -> assets -> images(自己新建的文件夹)
         */
        android: 'file:///android_asset/images/' + src,
        /**
         * IOS本地路径
         * 对应 WeexDemo.xcworkspace(xcode打开)
         * WeexDemo ->resource -> images(xcode不会自动添加图片，需手动添加)
         */
        ios: 'local:///images/' + src,
        web: this.webUrl(src)
        // }[getPlatform()]
      }['web'];
    },
    webUrl: function webUrl(src) {
      if (src.indexOf('http') >= 0) {
        return src;
      }
      // return `http://192.168.1.11:8081/src/assets/images/${src}` // for test
      return (0, _util.getHost)() + '/src/assets/images/' + src;
    }
  }
}; //
//
//
//

// import { getPlatform, getHost } from '@/common/js/util'

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('image', {
    attrs: {
      "src": _vm.locationSrc
    }
  })
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(57)
)

/* script */
__vue_exports__ = __webpack_require__(58)

/* template */
var __vue_template__ = __webpack_require__(65)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/wangsai/workspace/github/163music-weex/src/pages/account/account.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-515515f7"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 57:
/***/ (function(module, exports) {

module.exports = {
  "account-wrapper": {
    "backgroundColor": "#eeeff0"
  },
  "person-info-wrapper": {
    "height": "245",
    "backgroundColor": "#FFFFFF",
    "marginBottom": "17"
  },
  "info": {
    "height": "158",
    "paddingLeft": "25",
    "paddingRight": "25",
    "borderBottomColor": "#ebeced",
    "borderBottomWidth": "1",
    "borderBottomStyle": "solid",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between"
  },
  "info-avatar": {
    "width": "103",
    "height": "103",
    "borderRadius": "50",
    "marginRight": "17"
  },
  "info-item": {
    "marginLeft": "-170"
  },
  "info-name": {
    "color": "#313132",
    "fontSize": "36",
    "marginBottom": "17"
  },
  "info-lv-wrapper": {
    "width": "86",
    "height": "32"
  },
  "info-lv-text": {
    "width": "60",
    "height": "32",
    "lineHeight": "36",
    "color": "#9a9a9b",
    "fontStyle": "italic",
    "fontSize": "22",
    "textAlign": "right"
  },
  "info-lv": {
    "width": "68",
    "height": "32",
    "position": "absolute",
    "left": 0,
    "top": 0
  },
  "info-jifen": {
    "width": "124",
    "height": "44",
    "borderRadius": "20",
    "borderWidth": "1",
    "borderStyle": "solid",
    "borderColor": "#d74f47"
  },
  "info-jifen-icon": {
    "width": "30",
    "height": "30",
    "position": "absolute",
    "left": "15",
    "top": "6"
  },
  "info-jifen-text": {
    "color": "#d74f47",
    "paddingLeft": "50",
    "fontSize": "28",
    "height": "44",
    "lineHeight": "44"
  },
  "relationship": {
    "height": "87",
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "relationship-item": {
    "height": "50",
    "flex": 1,
    "justifyContent": "center",
    "alignItems": "center",
    "borderRightWidth": "1",
    "borderRightStyle": "solid",
    "borderRightColor": "#e9eaeb"
  },
  "relationship-text": {
    "color": "#aaabac",
    "textAlign": "center",
    "fontSize": "26"
  },
  "relationship-num": {
    "color": "#2e2e2f",
    "textAlign": "center",
    "fontSize": "26"
  },
  "relationship-icon": {
    "width": "30",
    "height": "30"
  },
  "account-wrapper-list": {
    "marginBottom": "17"
  },
  "cell-bottom": {
    "width": "654",
    "height": "1",
    "backgroundColor": "#e9eaeb",
    "position": "absolute",
    "right": 0,
    "bottom": 0
  },
  "image": {
    "width": "48",
    "height": "48",
    "marginRight": "20"
  },
  "logout": {
    "height": "80",
    "lineHeight": "80",
    "marginBottom": "17",
    "backgroundColor": "#FFFFFF",
    "color": "#d84036",
    "textAlign": "center"
  }
}

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wxcCell = __webpack_require__(59);

var _wxcCell2 = _interopRequireDefault(_wxcCell);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _config = __webpack_require__(64);

var _config2 = _interopRequireDefault(_config);

var _header = __webpack_require__(6);

var _header2 = _interopRequireDefault(_header);

var _vImage = __webpack_require__(0);

var _vImage2 = _interopRequireDefault(_vImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'account',
  props: {
    parentStyle: {
      type: Object,
      default: function _default() {
        return {
          height: _utils2.default.env.getPageHeight() + 'px'
        };
      }
    }
  },
  data: function data() {
    return {
      mine: _config2.default.mine,
      vip: _config2.default.vip,
      setting: _config2.default.setting,
      about: _config2.default.about,
      cellStyle: {
        height: '80px',
        borderBottomWidth: '0',
        backgroundColor: '#FFFFFF'
      }
    };
  },
  components: {
    WxcCell: _wxcCell2.default,
    VHeader: _header2.default,
    VImage: _vImage2.default
  },
  methods: {
    wxcCellClicked: function wxcCellClicked(e) {
      console.log(e);
    },
    logout: function logout() {
      var modal = weex.requireModule('modal');
      modal.confirm({
        message: '网易云音乐\n确定退出当前账号吗？',
        okTitle: '确定',
        cancelTitle: '取消',
        duration: 0.3
      }, function (value) {
        // todo: logout
      });
    }
  }
};

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(60);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(12)
)

/* script */
__vue_exports__ = __webpack_require__(13)

/* template */
var __vue_template__ = __webpack_require__(14)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/wangsai/workspace/github/163music-weex/src/components/common/header.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-af5d225e"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(61)
)

/* script */
__vue_exports__ = __webpack_require__(62)

/* template */
var __vue_template__ = __webpack_require__(63)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/wangsai/workspace/github/163music-weex/node_modules/_weex-ui@0.6.5@weex-ui/packages/wxc-cell/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2b48a08a"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 61:
/***/ (function(module, exports) {

module.exports = {
  "wxc-cell": {
    "flexDirection": "row",
    "alignItems": "center",
    "paddingLeft": "24",
    "paddingRight": "24",
    "backgroundColor": "#ffffff"
  },
  "cell-margin": {
    "marginBottom": "24"
  },
  "cell-title": {
    "flex": 1
  },
  "cell-indent": {
    "paddingBottom": "30",
    "paddingTop": "30"
  },
  "has-desc": {
    "paddingBottom": "18",
    "paddingTop": "18"
  },
  "cell-top-border": {
    "borderTopColor": "#e2e2e2",
    "borderTopWidth": "1"
  },
  "cell-bottom-border": {
    "borderBottomColor": "#e2e2e2",
    "borderBottomWidth": "1"
  },
  "cell-label-text": {
    "fontSize": "30",
    "color": "#666666",
    "width": "188",
    "marginRight": "10"
  },
  "cell-arrow-icon": {
    "width": "22",
    "height": "22"
  },
  "cell-content": {
    "color": "#333333",
    "fontSize": "30",
    "lineHeight": "40"
  },
  "cell-desc-text": {
    "color": "#999999",
    "fontSize": "24",
    "lineHeight": "30",
    "marginTop": "4",
    "marginRight": "30"
  },
  "extra-content-text": {
    "fontSize": "28",
    "color": "#999999",
    "marginRight": "4"
  }
}

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: {
    label: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    extraContent: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    },
    hasTopBorder: {
      type: Boolean,
      default: false
    },
    hasMargin: {
      type: Boolean,
      default: false
    },
    hasBottomBorder: {
      type: Boolean,
      default: true
    },
    hasArrow: {
      type: Boolean,
      default: false
    },
    arrowIcon: {
      type: String,
      default: 'https://gw.alicdn.com/tfs/TB11zBUpwMPMeJjy1XbXXcwxVXa-22-22.png'
    },
    hasVerticalIndent: {
      type: Boolean,
      default: true
    },
    cellStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    autoAccessible: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    cellClicked: function cellClicked(e) {
      var link = this.link;
      this.$emit('wxcCellClicked', { e: e });
      link && _utils2.default.goToH5Page(link, true);
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ 63:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['wxc-cell', _vm.hasTopBorder && 'cell-top-border', _vm.hasBottomBorder && 'cell-bottom-border', _vm.hasMargin && 'cell-margin', _vm.hasVerticalIndent && 'cell-indent', _vm.desc && 'has-desc'],
    style: _vm.cellStyle,
    attrs: {
      "accessible": _vm.autoAccessible,
      "ariaLabel": (_vm.label + "," + _vm.title + "," + _vm.desc)
    },
    on: {
      "click": _vm.cellClicked
    }
  }, [_vm._t("label", [(_vm.label) ? _c('div', [_c('text', {
    staticClass: ["cell-label-text"]
  }, [_vm._v(_vm._s(_vm.label))])]) : _vm._e()]), _c('div', {
    staticClass: ["cell-title"]
  }, [_vm._t("title", [_c('text', {
    staticClass: ["cell-content"]
  }, [_vm._v(_vm._s(_vm.title))]), (_vm.desc) ? _c('text', {
    staticClass: ["cell-desc-text"]
  }, [_vm._v(_vm._s(_vm.desc))]) : _vm._e()])], 2), _vm._t("value"), _vm._t("default"), (_vm.extraContent) ? _c('text', {
    staticClass: ["extra-content-text"]
  }, [_vm._v(_vm._s(_vm.extraContent))]) : _vm._e(), (_vm.hasArrow) ? _c('image', {
    staticClass: ["cell-arrow-icon"],
    attrs: {
      "src": _vm.arrowIcon,
      "ariaHidden": true
    }
  }) : _vm._e()], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  mine: [{ title: '我的消息', icon: 'set/cm2_set_icn_mail@2x.png' }],
  vip: [{ title: '会员中心', icon: 'set/cm5_set_icn_vip@2x.png' }, { title: '商城', icon: 'set/cm2_set_icn_store@2x.png' }, { title: '游戏推荐Beta', icon: 'set/cm2_set_icn_gamecenter@2x.png' }, { title: '在线听歌免流量', icon: 'set/cm2_set_icn_combo@2x.png' }],
  setting: [{ title: '设置', icon: 'set/cm2_set_icn_set@2x.png' }, { title: '扫一扫', icon: 'set/cm2_set_icn_scan@2x.png' }, { title: '个性换肤', icon: 'set/cm2_set_icn_skin@2x.png' }, { title: '夜间模式', icon: 'set/cm2_set_icn_night@2x.png' }, { title: '定时关闭', icon: 'set/cm2_set_icn_time@2x.png' }, { title: '音乐闹钟', icon: 'set/cm2_set_icn_alamclock@2x.png' }, { title: '驾驶模式', icon: 'set/cm2_set_icn_vehicle@2x.png' }, { title: '优惠券', icon: 'set/cm4_set_icn_coupon@2x.png' }],
  about: [{ title: '分享网易云音乐', icon: 'set/cm2_set_icn_share@2x.png' }, { title: '关于', icon: 'set/cm2_set_icn_about@2x.png' }]
};

/***/ }),

/***/ 65:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('v-header', {
    attrs: {
      "hasMic": false,
      "title": '账号'
    }
  }), _c('scroller', {
    staticClass: ["account-wrapper"],
    style: {
      height: parseInt(this.parentStyle.height) + 'px'
    }
  }, [_c('div', {
    staticClass: ["person-info-wrapper"]
  }, [_c('div', {
    staticClass: ["info"]
  }, [_c('v-image', {
    staticClass: ["info-avatar"],
    attrs: {
      "src": "set/avatar.jpg"
    }
  }), _c('div', {
    staticClass: ["info-item"]
  }, [_c('text', {
    staticClass: ["info-name"]
  }, [_vm._v("Stephen_Wong")]), _c('div', {
    staticClass: ["info-lv-wrapper"]
  }, [_c('text', {
    staticClass: ["info-lv-text"]
  }, [_vm._v("7")]), _c('v-image', {
    staticClass: ["info-lv"],
    attrs: {
      "src": "set/cm2_set_lv@2x.png"
    }
  })], 1)]), _c('div', {
    staticClass: ["info-jifen"]
  }, [_c('v-image', {
    staticClass: ["info-jifen-icon"],
    attrs: {
      "src": "set/cm2_set_btnicn_jifen@2x.png"
    }
  }), _c('text', {
    staticClass: ["info-jifen-text"]
  }, [_vm._v("签到")])], 1)], 1), _c('div', {
    staticClass: ["relationship"]
  }, [_vm._m(0), _vm._m(1), _vm._m(2), _c('div', {
    staticClass: ["relationship-item"]
  }, [_c('v-image', {
    staticClass: ["relationship-icon"],
    attrs: {
      "src": "set/cm2_set_icn_edit@2x.png"
    }
  }), _c('text', {
    staticClass: ["relationship-text"]
  }, [_vm._v("我的资料")])], 1)])]), _c('div', {
    staticClass: ["account-wrapper-list"]
  }, _vm._l((_vm.mine), function(item, index) {
    return _c('wxc-cell', {
      key: index,
      attrs: {
        "cellStyle": _vm.cellStyle,
        "title": item.title,
        "hasArrow": true
      },
      on: {
        "wxcCellClicked": _vm.wxcCellClicked
      }
    }, [_c('v-image', {
      staticClass: ["image"],
      attrs: {
        "slot": "label",
        "src": item.icon
      },
      slot: "label"
    }), (index !== _vm.mine.length - 1) ? _c('div', {
      staticClass: ["cell-bottom"],
      attrs: {
        "slot": "value"
      },
      slot: "value"
    }) : _vm._e()], 1)
  })), _c('div', {
    staticClass: ["account-wrapper-list"]
  }, _vm._l((_vm.vip), function(item, index) {
    return _c('wxc-cell', {
      key: index,
      attrs: {
        "cellStyle": _vm.cellStyle,
        "title": item.title,
        "hasArrow": true
      },
      on: {
        "wxcCellClicked": _vm.wxcCellClicked
      }
    }, [_c('v-image', {
      staticClass: ["image"],
      attrs: {
        "slot": "label",
        "src": item.icon
      },
      slot: "label"
    }), (index !== _vm.vip.length - 1) ? _c('div', {
      staticClass: ["cell-bottom"],
      attrs: {
        "slot": "value"
      },
      slot: "value"
    }) : _vm._e()], 1)
  })), _c('div', {
    staticClass: ["account-wrapper-list"]
  }, _vm._l((_vm.setting), function(item, index) {
    return _c('wxc-cell', {
      key: index,
      attrs: {
        "cellStyle": _vm.cellStyle,
        "title": item.title,
        "hasArrow": index !== 3
      },
      on: {
        "wxcCellClicked": _vm.wxcCellClicked
      }
    }, [_c('v-image', {
      staticClass: ["image"],
      attrs: {
        "slot": "label",
        "src": item.icon
      },
      slot: "label"
    }), (index === 3) ? _c('switch', {
      attrs: {
        "slot": "value"
      },
      slot: "value"
    }) : _vm._e(), (index !== _vm.setting.length - 1) ? _c('div', {
      staticClass: ["cell-bottom"],
      attrs: {
        "slot": "value"
      },
      slot: "value"
    }) : _vm._e()], 1)
  })), _c('div', {
    staticClass: ["account-wrapper-list"]
  }, _vm._l((_vm.about), function(item, index) {
    return _c('wxc-cell', {
      key: index,
      attrs: {
        "cellStyle": _vm.cellStyle,
        "title": item.title,
        "hasArrow": true
      },
      on: {
        "wxcCellClicked": _vm.wxcCellClicked
      }
    }, [_c('v-image', {
      staticClass: ["image"],
      attrs: {
        "slot": "label",
        "src": item.icon
      },
      slot: "label"
    }), (index !== _vm.about.length - 1) ? _c('div', {
      staticClass: ["cell-bottom"],
      attrs: {
        "slot": "value"
      },
      slot: "value"
    }) : _vm._e()], 1)
  })), _c('text', {
    staticClass: ["logout"],
    on: {
      "click": _vm.logout
    }
  }, [_vm._v("退出登陆")])])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["relationship-item"]
  }, [_c('text', {
    staticClass: ["relationship-text"]
  }, [_vm._v("动态")]), _c('text', {
    staticClass: ["relationship-num"]
  }, [_vm._v("1")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["relationship-item"]
  }, [_c('text', {
    staticClass: ["relationship-text"]
  }, [_vm._v("关注")]), _c('text', {
    staticClass: ["relationship-num"]
  }, [_vm._v("1")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["relationship-item"]
  }, [_c('text', {
    staticClass: ["relationship-text"]
  }, [_vm._v("粉丝")]), _c('text', {
    staticClass: ["relationship-num"]
  }, [_vm._v("1")])])
}]}
module.exports.render._withStripped = true

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _account = __webpack_require__(56);

var _account2 = _interopRequireDefault(_account);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_account2.default.el = '#root';
new Vue(_account2.default);

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var required = __webpack_require__(10)
  , qs = __webpack_require__(11)
  , protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i
  , slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//;

/**
 * These are the parse rules for the URL parser, it informs the parser
 * about:
 *
 * 0. The char it Needs to parse, if it's a string it should be done using
 *    indexOf, RegExp using exec and NaN means set as current value.
 * 1. The property we should set when parsing this value.
 * 2. Indication if it's backwards or forward parsing, when set as number it's
 *    the value of extra chars that should be split off.
 * 3. Inherit from location if non existing in the parser.
 * 4. `toLowerCase` the resulting value.
 */
var rules = [
  ['#', 'hash'],                        // Extract from the back.
  ['?', 'query'],                       // Extract from the back.
  function sanitize(address) {          // Sanitize what is left of the address
    return address.replace('\\', '/');
  },
  ['/', 'pathname'],                    // Extract from the back.
  ['@', 'auth', 1],                     // Extract from the front.
  [NaN, 'host', undefined, 1, 1],       // Set left over value.
  [/:(\d+)$/, 'port', undefined, 1],    // RegExp the back.
  [NaN, 'hostname', undefined, 1, 1]    // Set left over.
];

/**
 * These properties should not be copied or inherited from. This is only needed
 * for all non blob URL's as a blob URL does not include a hash, only the
 * origin.
 *
 * @type {Object}
 * @private
 */
var ignore = { hash: 1, query: 1 };

/**
 * The location object differs when your code is loaded through a normal page,
 * Worker or through a worker using a blob. And with the blobble begins the
 * trouble as the location object will contain the URL of the blob, not the
 * location of the page where our code is loaded in. The actual origin is
 * encoded in the `pathname` so we can thankfully generate a good "default"
 * location from it so we can generate proper relative URL's again.
 *
 * @param {Object|String} loc Optional default location object.
 * @returns {Object} lolcation object.
 * @public
 */
function lolcation(loc) {
  var location = global && global.location || {};
  loc = loc || location;

  var finaldestination = {}
    , type = typeof loc
    , key;

  if ('blob:' === loc.protocol) {
    finaldestination = new Url(unescape(loc.pathname), {});
  } else if ('string' === type) {
    finaldestination = new Url(loc, {});
    for (key in ignore) delete finaldestination[key];
  } else if ('object' === type) {
    for (key in loc) {
      if (key in ignore) continue;
      finaldestination[key] = loc[key];
    }

    if (finaldestination.slashes === undefined) {
      finaldestination.slashes = slashes.test(loc.href);
    }
  }

  return finaldestination;
}

/**
 * @typedef ProtocolExtract
 * @type Object
 * @property {String} protocol Protocol matched in the URL, in lowercase.
 * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
 * @property {String} rest Rest of the URL that is not part of the protocol.
 */

/**
 * Extract protocol information from a URL with/without double slash ("//").
 *
 * @param {String} address URL we want to extract from.
 * @return {ProtocolExtract} Extracted information.
 * @private
 */
function extractProtocol(address) {
  var match = protocolre.exec(address);

  return {
    protocol: match[1] ? match[1].toLowerCase() : '',
    slashes: !!match[2],
    rest: match[3]
  };
}

/**
 * Resolve a relative URL pathname against a base URL pathname.
 *
 * @param {String} relative Pathname of the relative URL.
 * @param {String} base Pathname of the base URL.
 * @return {String} Resolved pathname.
 * @private
 */
function resolve(relative, base) {
  var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/'))
    , i = path.length
    , last = path[i - 1]
    , unshift = false
    , up = 0;

  while (i--) {
    if (path[i] === '.') {
      path.splice(i, 1);
    } else if (path[i] === '..') {
      path.splice(i, 1);
      up++;
    } else if (up) {
      if (i === 0) unshift = true;
      path.splice(i, 1);
      up--;
    }
  }

  if (unshift) path.unshift('');
  if (last === '.' || last === '..') path.push('');

  return path.join('/');
}

/**
 * The actual URL instance. Instead of returning an object we've opted-in to
 * create an actual constructor as it's much more memory efficient and
 * faster and it pleases my OCD.
 *
 * It is worth noting that we should not use `URL` as class name to prevent
 * clashes with the global URL instance that got introduced in browsers.
 *
 * @constructor
 * @param {String} address URL we want to parse.
 * @param {Object|String} location Location defaults for relative paths.
 * @param {Boolean|Function} parser Parser for the query string.
 * @private
 */
function Url(address, location, parser) {
  if (!(this instanceof Url)) {
    return new Url(address, location, parser);
  }

  var relative, extracted, parse, instruction, index, key
    , instructions = rules.slice()
    , type = typeof location
    , url = this
    , i = 0;

  //
  // The following if statements allows this module two have compatibility with
  // 2 different API:
  //
  // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
  //    where the boolean indicates that the query string should also be parsed.
  //
  // 2. The `URL` interface of the browser which accepts a URL, object as
  //    arguments. The supplied object will be used as default values / fall-back
  //    for relative paths.
  //
  if ('object' !== type && 'string' !== type) {
    parser = location;
    location = null;
  }

  if (parser && 'function' !== typeof parser) parser = qs.parse;

  location = lolcation(location);

  //
  // Extract protocol information before running the instructions.
  //
  extracted = extractProtocol(address || '');
  relative = !extracted.protocol && !extracted.slashes;
  url.slashes = extracted.slashes || relative && location.slashes;
  url.protocol = extracted.protocol || location.protocol || '';
  address = extracted.rest;

  //
  // When the authority component is absent the URL starts with a path
  // component.
  //
  if (!extracted.slashes) instructions[3] = [/(.*)/, 'pathname'];

  for (; i < instructions.length; i++) {
    instruction = instructions[i];

    if (typeof instruction === 'function') {
      address = instruction(address);
      continue;
    }

    parse = instruction[0];
    key = instruction[1];

    if (parse !== parse) {
      url[key] = address;
    } else if ('string' === typeof parse) {
      if (~(index = address.indexOf(parse))) {
        if ('number' === typeof instruction[2]) {
          url[key] = address.slice(0, index);
          address = address.slice(index + instruction[2]);
        } else {
          url[key] = address.slice(index);
          address = address.slice(0, index);
        }
      }
    } else if ((index = parse.exec(address))) {
      url[key] = index[1];
      address = address.slice(0, index.index);
    }

    url[key] = url[key] || (
      relative && instruction[3] ? location[key] || '' : ''
    );

    //
    // Hostname, host and protocol should be lowercased so they can be used to
    // create a proper `origin`.
    //
    if (instruction[4]) url[key] = url[key].toLowerCase();
  }

  //
  // Also parse the supplied query string in to an object. If we're supplied
  // with a custom parser as function use that instead of the default build-in
  // parser.
  //
  if (parser) url.query = parser(url.query);

  //
  // If the URL is relative, resolve the pathname against the base URL.
  //
  if (
      relative
    && location.slashes
    && url.pathname.charAt(0) !== '/'
    && (url.pathname !== '' || location.pathname !== '')
  ) {
    url.pathname = resolve(url.pathname, location.pathname);
  }

  //
  // We should not add port numbers if they are already the default port number
  // for a given protocol. As the host also contains the port number we're going
  // override it with the hostname which contains no port number.
  //
  if (!required(url.port, url.protocol)) {
    url.host = url.hostname;
    url.port = '';
  }

  //
  // Parse down the `auth` for the username and password.
  //
  url.username = url.password = '';
  if (url.auth) {
    instruction = url.auth.split(':');
    url.username = instruction[0] || '';
    url.password = instruction[1] || '';
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

  //
  // The href is just the compiled result.
  //
  url.href = url.toString();
}

/**
 * This is convenience method for changing properties in the URL instance to
 * insure that they all propagate correctly.
 *
 * @param {String} part          Property we need to adjust.
 * @param {Mixed} value          The newly assigned value.
 * @param {Boolean|Function} fn  When setting the query, it will be the function
 *                               used to parse the query.
 *                               When setting the protocol, double slash will be
 *                               removed from the final url if it is true.
 * @returns {URL} URL instance for chaining.
 * @public
 */
function set(part, value, fn) {
  var url = this;

  switch (part) {
    case 'query':
      if ('string' === typeof value && value.length) {
        value = (fn || qs.parse)(value);
      }

      url[part] = value;
      break;

    case 'port':
      url[part] = value;

      if (!required(value, url.protocol)) {
        url.host = url.hostname;
        url[part] = '';
      } else if (value) {
        url.host = url.hostname +':'+ value;
      }

      break;

    case 'hostname':
      url[part] = value;

      if (url.port) value += ':'+ url.port;
      url.host = value;
      break;

    case 'host':
      url[part] = value;

      if (/:\d+$/.test(value)) {
        value = value.split(':');
        url.port = value.pop();
        url.hostname = value.join(':');
      } else {
        url.hostname = value;
        url.port = '';
      }

      break;

    case 'protocol':
      url.protocol = value.toLowerCase();
      url.slashes = !fn;
      break;

    case 'pathname':
    case 'hash':
      if (value) {
        var char = part === 'pathname' ? '/' : '#';
        url[part] = value.charAt(0) !== char ? char + value : value;
      } else {
        url[part] = value;
      }
      break;

    default:
      url[part] = value;
  }

  for (var i = 0; i < rules.length; i++) {
    var ins = rules[i];

    if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

  url.href = url.toString();

  return url;
}

/**
 * Transform the properties back in to a valid and full URL string.
 *
 * @param {Function} stringify Optional query stringify function.
 * @returns {String} Compiled version of the URL.
 * @public
 */
function toString(stringify) {
  if (!stringify || 'function' !== typeof stringify) stringify = qs.stringify;

  var query
    , url = this
    , protocol = url.protocol;

  if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';

  var result = protocol + (url.slashes ? '//' : '');

  if (url.username) {
    result += url.username;
    if (url.password) result += ':'+ url.password;
    result += '@';
  }

  result += url.host + url.pathname;

  query = 'object' === typeof url.query ? stringify(url.query) : url.query;
  if (query) result += '?' !== query.charAt(0) ? '?'+ query : query;

  if (url.hash) result += url.hash;

  return result;
}

Url.prototype = { set: set, toString: toString };

//
// Expose the URL parser and some additional properties that might be useful for
// others or testing.
//
Url.extractProtocol = extractProtocol;
Url.location = lolcation;
Url.qs = qs;

module.exports = Url;


/***/ })

/******/ });