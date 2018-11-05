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
/******/ 	return __webpack_require__(__webpack_require__.s = 92);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
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
/* 2 */
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
/* 3 */
/***/ (function(module, exports) {

module.exports = {}

/***/ }),
/* 4 */
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
/* 5 */
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
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
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


/***/ }),
/* 10 */
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
/* 11 */
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
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(67)
)

/* script */
__vue_exports__ = __webpack_require__(68)

/* template */
var __vue_template__ = __webpack_require__(69)
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
__vue_options__.__file = "/Users/wangsai/workspace/github/163music-weex/src/components/common/back.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-225c21aa"
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
/* 67 */
/***/ (function(module, exports) {

module.exports = {
  "back-wrapper": {
    "width": "750",
    "height": "100",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "borderBottomWidth": "1",
    "borderBottomColor": "#CCCCCC",
    "borderBottomStyle": "solid"
  },
  "back": {
    "width": "60",
    "height": "100",
    "paddingLeft": "36",
    "marginRight": "120",
    "justifyContent": "center"
  },
  "back-icon": {
    "width": "24",
    "height": "44"
  },
  "title-content": {
    "color": "#FFFFFF",
    "textAlign": "center"
  },
  "title": {
    "fontSize": "30"
  },
  "desc": {
    "fontSize": "23"
  },
  "back-right-icon": {
    "width": "180",
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "back-whale": {
    "width": "55",
    "height": "55"
  },
  "back-share": {
    "width": "90",
    "height": "90"
  }
}

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vImage = __webpack_require__(0);

var _vImage2 = _interopRequireDefault(_vImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'back',
  props: {
    title: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    }
  },
  data: function data() {
    return {
      titleClass: ['title-content', 'title'],
      descClass: ['title-content', 'desc']
    };
  },
  components: {
    VImage: _vImage2.default
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

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: ["back-wrapper"]
  }, [_c('div', {
    staticClass: ["back"]
  }, [_c('v-image', {
    staticClass: ["back-icon"],
    attrs: {
      "src": "act/cm2_act_view_btn_back.png"
    }
  })], 1), _c('div', {
    staticClass: ["title-wrapper"]
  }, [_c('text', {
    class: _vm.titleClass
  }, [_vm._v(_vm._s(_vm.title))]), _c('text', {
    class: _vm.descClass
  }, [_vm._v(_vm._s(_vm.desc))])]), _c('div', {
    staticClass: ["back-right-icon"]
  }, [_c('v-image', {
    staticClass: ["back-whale"],
    attrs: {
      "src": "topbar/cm5_topbar_icn_effect.png"
    }
  }), _c('v-image', {
    staticClass: ["back-share"],
    attrs: {
      "src": "list/cm2_list_detail_icn_share.png"
    }
  })], 1)])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isNative = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== 'object';

var isFn = function isFn(fn) {
	return typeof fn === 'function';
};

var isPhone = function isPhone(str) {
	if (typeof str === 'number') {
		str = str.toString();
	} else if (typeof str !== 'string') {
		return false;
	}

	return (/^\+?[\d\-\#\*\.\(\)]+$/.test(str)
	);
};

var isEmail = function isEmail(str) {
	if (typeof str !== 'string') {
		return false;
	}

	return (/^(\w)+([\.\-\_]\w+)*@(\w)+(([\.\-\_]\w+)+)$/.test(str)
	);
};

module.exports = {
	isNative: isNative,
	isFn: isFn,
	isPhone: isPhone,
	isEmail: isEmail
};

/***/ }),
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _play = __webpack_require__(93);

var _play2 = _interopRequireDefault(_play);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_play2.default.el = '#root';
new Vue(_play2.default);

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(94)
)

/* script */
__vue_exports__ = __webpack_require__(95)

/* template */
var __vue_template__ = __webpack_require__(122)
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
__vue_options__.__file = "/Users/wangsai/workspace/github/163music-weex/src/pages/play/play.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-0d7b5fdb"
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
/* 94 */
/***/ (function(module, exports) {

module.exports = {
  "play-bg": {
    "width": "750",
    "position": "absolute",
    "left": 0,
    "top": 0
  },
  "play-content-wrapper": {
    "position": "absolute",
    "left": 0,
    "top": 0
  },
  "play-station": {
    "height": "800",
    "overflow": "hidden",
    "alignItems": "center"
  },
  "play-radio-bg": {
    "width": "574",
    "height": "574",
    "top": "85"
  },
  "play-program-wrapper": {
    "width": "750",
    "alignItems": "center",
    "position": "absolute",
    "left": 0,
    "top": 0
  },
  "play-pointer": {
    "width": "222",
    "height": "366",
    "position": "absolute",
    "left": "315",
    "top": "-60"
  },
  "play-program": {
    "width": "490",
    "height": "490",
    "top": "128"
  },
  "play-program1": {
    "width": "404",
    "height": "404",
    "top": "-320"
  },
  "play-program2": {
    "width": "574",
    "height": "574",
    "top": "-810"
  },
  "play-program3": {
    "width": "560",
    "height": "280",
    "top": "-1240"
  }
}

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _natjs = __webpack_require__(96);

var _natjs2 = _interopRequireDefault(_natjs);

var _back = __webpack_require__(66);

var _back2 = _interopRequireDefault(_back);

var _vImage = __webpack_require__(0);

var _vImage2 = _interopRequireDefault(_vImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import $http from '@/common/js/api.js'
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
  data: function data() {
    return {
      defalutBg: 'clock/cm2_clock_bg.png'
    };
  },
  components: {
    VBack: _back2.default,
    VImage: _vImage2.default
  },
  created: function created() {
    var tabPageHeight = _utils2.default.env.getPageHeight();
    this.contentStyle = { height: tabPageHeight + 'px' };
    this.init();
  },

  methods: {
    init: function init() {
      this.getMusic();
    },
    getMusic: function getMusic() {
      _natjs2.default.audio.play('http://cdn.instapp.io/nat/samples/audio.mp3', function () {
        var modal = weex.requireModule('modal');
        modal.toast({ message: 'play' });
      });
      // $http({
      //   url: '/music/url?id=33894312'
      // }).then(res => {
      //   Nat.audio.play(res.data[0].url, () => {
      //     let modal = weex.requireModule('modal')
      //     modal.toast({ message: 'play' })
      //   })
      // })
    }
  }
};

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Nat = {};

if (weex && weex.requireModule || typeof __weex_define__ === 'function') {
	var camera = __webpack_require__(97);
	var communication = __webpack_require__(98);
	var geolocation = __webpack_require__(99);
	var media = __webpack_require__(100);
	var modal = __webpack_require__(104);
	var recorder = __webpack_require__(105);
	var network = __webpack_require__(106);
	var sensor = __webpack_require__(109);
	var device = __webpack_require__(112);
	var Navigator = __webpack_require__(119);
	var alipay = __webpack_require__(120);
	var wechat = __webpack_require__(121);

	// camera
	if (camera) {
		Nat.camera = camera;
	}

	// communication
	if (communication) {
		Nat.call = communication.call;
		Nat.sms = communication.sms;
		Nat.mail = communication.mail;
	}

	// geolocation
	if (geolocation) {
		Nat.geolocation = geolocation;
	}

	// media
	if (media) {
		Nat.audio = media.audio;
		Nat.image = media.image;
		Nat.video = media.video;
	}

	// recorder
	if (recorder) {
		Nat.recorder = recorder;
	}

	// modal
	if (modal) {
		Nat.alert = modal.alert;
		Nat.confirm = modal.confirm;
		Nat.prompt = modal.prompt;
		Nat.toast = modal.toast;
		Nat.actionSheet = modal.actionSheet;
	}

	// network
	if (network) {
		Nat.fetch = network.stream.fetch;
		Nat.download = network.transfer.download;
		Nat.upload = network.transfer.upload;
		Nat.websocket = network.websocket;
	}

	// sensor
	if (sensor) {
		Nat.accelerometer = sensor.accelerometer;
		Nat.compass = sensor.compass;
	}

	// device
	if (device) {
		Nat.device = device.info;
		Nat.battery = device.battery;
		Nat.network = device.network;
		Nat.screen = device.screen;
		Nat.vibrate = device.vibration.vibrate;
		Nat.volume = device.volume;
	}

	// navigator
	if (Navigator) {
		Nat.navigator = Navigator;
	}

	// alipay
	if (alipay) {
		Nat.alipay = alipay;
	}

	// wechat
	if (wechat) {
		Nat.wechat = wechat;
	}
}

module.exports = Nat;

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var camera = void 0;

if (weex && weex.requireModule) {
	camera = weex.requireModule('nat/camera');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		camera = __weex_require__('@weex-module/nat/camera');
	});
}

// launch

var launch = function launch(opts) {
	camera.launch();
};

// captureImage (snap)

var captureImage = function captureImage(opts, cb) {
	opts = opts || {};

	return new Promise(function (resolve, reject) {
		camera.captureImage({
			width: opts.width || null,
			height: opts.height || null
		}, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// captureVideo (record)

var captureVideo = function captureVideo(opts, cb) {
	opts = opts || {};

	return new Promise(function (resolve, reject) {
		camera.captureVideo({
			width: opts.width || null,
			height: opts.height || null
		}, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	launch: launch,
	captureImage: captureImage,
	captureVideo: captureVideo
};

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(75);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var communication = void 0;

if (weex && weex.requireModule) {
	communication = weex.requireModule('nat/communication');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		communication = __weex_require__('@weex-module/nat/communication');
	});
}

// call

var call = function call(to, cb) {
	return new Promise(function (resolve, reject) {
		if (!to) {
			reject({
				code: 101040,
				message: 'CALL_MISSING_ARGUMENT'
			});
			return;
		} else if (!_utils2.default.isPhone(to)) {
			reject({
				code: 101050,
				message: 'CALL_INVALID_ARGUMENT',
				details: 'Invalid phone number: ' + to
			});
			return;
		}

		communication.call(to, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve();
				if (typeof cb === 'function') cb(null);
			}
		});
	});
};

// sms

var sms = function sms(to, text, cb) {
	text = text || '';

	if (typeof text === 'function') {
		cb = text;
		text = '';
	}

	return new Promise(function (resolve, reject) {
		if (!to) {
			reject({
				code: 102040,
				message: 'SMS_MISSING_ARGUMENT'
			});
			return;
		}

		if (typeof to === 'string') {
			to = [to];
		}

		for (var i = 0; i < to.length; i++) {
			if (!_utils2.default.isPhone(to[i])) {
				reject({
					code: 102050,
					message: 'SMS_INVALID_ARGUMENT'
				});
				return;
			}
		}

		communication.sms(to, text, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve();
				if (typeof cb === 'function') cb(null);
			}
		});
	});
};

// mail

var mail = function mail(to, opts, cb) {
	opts = opts || {};

	if (typeof opts === 'function') {
		cb = opts;
		opts = {};
	}

	return new Promise(function (resolve, reject) {
		if (!to) {
			reject({
				code: 103040,
				message: 'MAIL_MISSING_ARGUMENT'
			});
			return;
		}

		if (typeof to === 'string') {
			to = [to];
		}

		for (var i = 0; i < to.length; i++) {
			if (!_utils2.default.isEmail(to[i])) {
				reject({
					code: 103050,
					message: 'MAIL_INVALID_ARGUMENT',
					details: 'Invalid emaill address: ' + to[i]
				});
				return;
			}
		}

		communication.mail(to, {
			subject: opts.subject || '',
			body: opts.body || '',
			attachments: opts.attachments || null
		}, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve();
				if (typeof cb === 'function') cb(null);
			}
		});
	});
};

module.exports = {
	call: call,
	sms: sms,
	mail: mail
};

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var geolocation = void 0;

if (weex && weex.requireModule) {
	geolocation = weex.requireModule('nat/geolocation');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		geolocation = __weex_require__('@weex-module/nat/geolocation');
	});
}

// get
var get = function get(opts, cb) {
	if (typeof opts === 'function') {
		cb = opts;
		opts = {};
	}

	return new Promise(function (resolve, reject) {
		geolocation.get(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// watch

var watch = function watch(opts, cb) {
	if (typeof opts === 'function') {
		cb = opts;
		opts = {};
	}

	return new Promise(function (resolve, reject) {
		geolocation.watch({
			maximumAge: opts.maximumAge || 0,
			timeout: opts.timeout || 10000,
			model: opts.model || 'highAccuracy'
		}, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// clear watch

var clearWatch = function clearWatch(cb) {
	return new Promise(function (resolve, reject) {
		geolocation.clearWatch(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	get: get,
	watch: watch,
	clearWatch: clearWatch
};

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _audio = __webpack_require__(101);

var _audio2 = _interopRequireDefault(_audio);

var _image = __webpack_require__(102);

var _image2 = _interopRequireDefault(_image);

var _video = __webpack_require__(103);

var _video2 = _interopRequireDefault(_video);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
	audio: _audio2.default,
	image: _image2.default,
	video: _video2.default
};

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var audio = void 0;

if (weex && weex.requireModule) {
	audio = weex.requireModule('nat/media/audio');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		audio = __weex_require__('@weex-module/nat/media/audio');
	});
}

// play
var play = function play(path, cb) {
	return new Promise(function (resolve, reject) {
		if (!path) {
			reject({
				code: 110040,
				message: 'MEDIA_MISSING_ARGUMENT'
			});
			return;
		}

		audio.play(path, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve();
				if (typeof cb === 'function') cb(null);
			}
		});
	});
};

// pause

var pause = function pause(cb) {
	return new Promise(function (resolve, reject) {
		audio.pause(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve();
				if (typeof cb === 'function') cb(null);
			}
		});
	});
};

// stop

var stop = function stop(cb) {
	return new Promise(function (resolve, reject) {
		audio.stop(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve();
				if (typeof cb === 'function') cb(null);
			}
		});
	});
};

module.exports = {
	play: play,
	pause: pause,
	stop: stop
};

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var image = void 0;

if (weex && weex.requireModule) {
	image = weex.requireModule('nat/media/image');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		image = __weex_require__('@weex-module/nat/media/image');
	});
}

// pick
var pick = function pick(opts, cb) {
	opts = opts || {};

	if (typeof opts === 'function') {
		cb = opts;
		opts = {};
	}

	opts.limit = opts.limit || 1;
	opts.quality = opts.quality && opts.quality < 100 ? parseInt(opts.quality) : 100;

	return new Promise(function (resolve, reject) {
		image.pick({
			limit: opts.limit,
			quality: opts.quality,
			width: opts.width || null,
			height: opts.height || null,
			showCamera: opts.showCamera || false
		}, function (ret) {
			if (ret === null) {
				return;
			}

			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// preview

var preview = function preview(files, opts, cb) {
	opts = opts || {};

	if (typeof opts === 'function') {
		cb = opts;
		opts = {};
	}

	return new Promise(function (resolve, reject) {
		if (!files) {
			reject({
				code: 110040,
				message: 'MEDIA_MISSING_ARGUMENT'
			});
			return;
		}

		if (typeof files === 'string') {
			files = [files];
		}

		// style
		if (['dots', 'label', 'none'].indexOf(opts.style) < 0) {
			opts.style = 'dots';
		}

		if (opts.style === 'dots') {
			if (files.length > 9) {
				opts.style = 'label';
			} else if (files.length === 1) {
				opts.style = 'none';
			}
		}

		image.preview(files, {
			current: opts.current,
			style: opts.style
		}, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve();
				if (typeof cb === 'function') cb(null);
			}
		});
	});
};

// info

var info = function info(path, cb) {
	return new Promise(function (resolve, reject) {
		if (!path) {
			reject({
				code: 110040,
				message: 'MEDIA_MISSING_ARGUMENT'
			});
			return;
		}

		image.info(path, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// exif

var exif = function exif(path, cb) {
	return new Promise(function (resolve, reject) {
		if (!path) {
			reject({
				code: 110040,
				message: 'MEDIA_MISSING_ARGUMENT'
			});
			return;
		}

		image.exif(path, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	pick: pick,
	preview: preview,
	info: info,
	exif: exif
};

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var video = void 0;

if (weex && weex.requireModule) {
	video = weex.requireModule('nat/media/video');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		video = __weex_require__('@weex-module/nat/media/video');
	});
}

// play
var play = function play(path, cb) {
	return new Promise(function (resolve, reject) {
		if (!path) {
			reject({
				code: 110040,
				message: 'MEDIA_MISSING_ARGUMENT'
			});
			return;
		}

		video.play(path, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve();
				if (typeof cb === 'function') cb(null);
			}
		});
	});
};

// pause

var pause = function pause(cb) {
	return new Promise(function (resolve, reject) {
		video.pause(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve();
				if (typeof cb === 'function') cb(null);
			}
		});
	});
};

// stop

var stop = function stop(cb) {
	return new Promise(function (resolve, reject) {
		video.stop(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve();
				if (typeof cb === 'function') cb(null);
			}
		});
	});
};

module.exports = {
	play: play,
	pause: pause,
	stop: stop
};

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _utils = __webpack_require__(75);

var modal = void 0;

if (weex && weex.requireModule) {
	modal = weex.requireModule('nat/modal');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		modal = __weex_require__('@weex-module/nat/modal');
	});
}
// alert

var Alert = function Alert(opts, cb) {
	return new Promise(function (resolve, reject) {
		if (typeof opts === 'string') {
			opts = {
				message: opts
			};
		}

		opts = opts || {};

		if (_utils.isNative) {
			modal.alert({
				title: opts.title || '',
				message: opts.message || '',
				okButton: opts.okButton || 'OK'
			}, function (ret) {
				ret = ret || {};

				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve();
					if (typeof cb === 'function') cb(null);
				}
			});
		} else {
			window.alert(opts.message);
			resolve();
		}
	});
};

// confirm

var Confirm = function Confirm(opts, cb) {
	return new Promise(function (resolve, reject) {
		if (typeof opts === 'string') {
			opts = {
				message: opts
			};
		}

		opts = opts || {};

		if (_utils.isNative) {
			modal.confirm({
				title: opts.title || '',
				message: opts.message || '',
				okButton: opts.okButton || 'OK',
				cancelButton: opts.cancelButton || 'Cancel'
			}, function (ret) {
				if (typeof ret === 'undefined') {
					ret = {
						error: 'unknow error, please report to natjs team'
					};
				}

				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		} else {
			var c = window.confirm(opts.message);
			resolve(c);
		}
	});
};

// prompt

var Prompt = function Prompt(opts, cb) {
	return new Promise(function (resolve, reject) {
		if (typeof opts === 'string') {
			opts = {
				message: opts
			};
		}

		opts = opts || {};

		if (_utils.isNative) {
			modal.prompt({
				title: opts.title || '',
				message: opts.message || '',
				text: opts.text || '',
				okButton: opts.okButton || 'OK',
				cancelButton: opts.cancelButton || 'Cancel'
			}, function (ret) {
				ret = ret || {};

				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		} else {
			var p = window.prompt(opts.message || '', opts.text || '');

			resolve({
				result: p && p.length,
				data: p
			});
		}
	});
};

// toast

var Toast = function Toast(opts, cb) {
	return new Promise(function (resolve, reject) {
		if (typeof opts === 'string') {
			opts = {
				message: opts
			};
		}

		opts = opts || {};

		// position
		if (['top', 'middle', 'bottom'].indexOf(opts.position) < 0) {
			opts.position = 'bottom';
		}

		if (_utils.isNative) {
			modal.toast({
				message: opts.message || '',
				duration: opts.duration || 3000,
				position: opts.position
			}, function (ret) {
				ret = ret || {};

				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve();
					if (typeof cb === 'function') cb(null);
				}
			});
		} else {
			window.alert(opts.message);
			resolve();
		}
	});
};

var actionSheet = {
	show: function show(opts, cb) {
		return new Promise(function (resolve, reject) {
			opts = opts || {};

			if (!Array.isArray(opts.options) || !opts.options.length) {
				reject({
					code: 145050,
					message: 'ACTIONSHEET_INVALID_ARGUMENT'
				});
				return;
			}

			var options = opts.options.map(function (item) {
				if (['string', 'number'].includes(typeof item === 'undefined' ? 'undefined' : _typeof(item))) {
					return {
						title: item
					};
				}
				return item;
			});

			if (_utils.isNative) {
				modal.showActionSheet({
					title: opts.title,
					options: options
				}, function (ret) {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				});
			} else {
				resolve();
			}
		});
	}
};

module.exports = {
	alert: Alert,
	confirm: Confirm,
	prompt: Prompt,
	toast: Toast,
	actionSheet: actionSheet
};

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var recorder = void 0;

if (weex && weex.requireModule) {
	recorder = weex.requireModule('nat/recorder');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		recorder = __weex_require__('@weex-module/nat/recorder');
	});
}

// start
var start = function start(opts, cb) {
	opts = opts || {};

	if (typeof opts === 'function') {
		cb = opts;
		opts = {};
	}

	return new Promise(function (resolve, reject) {
		// channel
		if (['stereo', 'mono'].indexOf(opts.channel) < 0) {
			opts.channel = 'stereo';
		}

		// quality
		if (['low', 'standard', 'high'].indexOf(opts.quality) < 0) {
			opts.quality = 'standard';
		}

		recorder.start({
			channel: opts.channel,
			quality: opts.quality
		}, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve();
				if (typeof cb === 'function') cb(null);
			}
		});
	});
};

// pause

var pause = function pause(cb) {
	return new Promise(function (resolve, reject) {
		recorder.pause(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve();
				if (typeof cb === 'function') cb(null);
			}
		});
	});
};

// stop

var stop = function stop(cb) {
	return new Promise(function (resolve, reject) {
		recorder.stop(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	start: start,
	pause: pause,
	stop: stop
};

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _stream = __webpack_require__(107);

var _stream2 = _interopRequireDefault(_stream);

var _transfer = __webpack_require__(108);

var _transfer2 = _interopRequireDefault(_transfer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import websocket from './websocket'
// import info from './info'

module.exports = {
	stream: _stream2.default,
	transfer: _transfer2.default
	// websocket,
	// info
};

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _utils = __webpack_require__(75);

var stream = void 0;

if (weex && weex.requireModule) {
	stream = weex.requireModule('nat/stream');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		stream = __weex_require__('@weex-module/nat/stream');
	});
}

// fetch

var Fetch = function Fetch(url, opts, cb) {
	return new Promise(function (resolve, reject) {
		if (!url) {
			reject({
				code: 151040,
				message: 'FETCH_MISSING_ARGUMENT'
			});
			return;
		}

		if ((typeof url === 'undefined' ? 'undefined' : _typeof(url)) === 'object') {
			cb = opts;
			opts = url;
		} else if (typeof opts === 'function') {
			cb = opts;
			opts = {
				url: url
			};
		} else {
			opts = opts || {};
			opts.url = url;
		}

		// headers
		opts.headers = opts.headers || {};

		if (opts.headers['Content-Type'] && /application\/json/.test(opts.headers['Content-Type'])) {
			opts.type = 'json';
		}

		// method
		opts.method = opts.method ? opts.method.toUpperCase() : 'GET';

		if (['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD'].indexOf(opts.method) < 0) {
			reject({
				code: 151050,
				message: 'FETCH_INVALID_ARGUMENT',
				details: 'Unsupported request method'
			});
			return;
		}

		// type
		opts.type = opts.type ? opts.type.toLowerCase() : 'json';

		if (['json', 'jsonp', 'text'].indexOf(opts.type) < 0) {
			reject({
				code: 151050,
				message: 'FETCH_INVALID_ARGUMENT',
				details: 'Unsupported request type'
			});
			return;
		}

		// body
		if (_typeof(opts.body) === 'object') {
			if (opts.type === 'json' && opts.method !== 'GET') {
				opts.body = JSON.stringify(opts.body);
			} else {
				reject({
					code: 151050,
					message: 'FETCH_INVALID_ARGUMENT',
					details: 'Request body must be a string'
				});
				return;
			}
		}

		opts = {
			method: opts.method,
			url: opts.url,
			headers: opts.headers,
			type: opts.type,
			body: opts.body
		};

		if (_utils.isNative) {
			stream.fetch(opts, function (ret) {
				ret = ret || {};

				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					if (ret.ok && typeof ret.data === 'string') {
						switch (opts.type) {
							case 'json':
								ret.data = JSON.parse(ret.data);
								break;

							case 'jsonp':
								{
									var matched = ret.data.match(/^\s*?.*\((.*)\)\s*?$/);
									if (matched) {
										ret.data = JSON.parse(matched[1]);
									}
									break;
								}
						}
					}
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		} else {
			var _url = opts.url;
			delete opts.url;

			var _res = {};

			window.fetch(_url, opts).then(function (res) {
				_res = res;

				if (res.ok) {
					if (res.status === 204) {
						return null;
					} else {
						if (opts.type === 'json') {
							return res.json();
						} else {
							return res.text();
						}
					}
				} else {
					throw new Error(res.statusText);
				}
			}).then(function (data) {
				if (opts.type === 'jsonp') {
					var matched = data.match(/^\s*?.*\((.*)\)\s*?$/);
					if (matched) {
						data = JSON.parse(matched[1]);
					}
				}

				resolve({
					data: data,
					headers: _res.headers,
					ok: _res.ok,
					redirected: _res.redirected,
					status: _res.status,
					statusText: _res.statusText
				});
			}).catch(function (e) {
				reject(e);
				if (typeof cb === 'function') cb(e, null);
			});
		}
	});
};

module.exports = {
	fetch: Fetch
};

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var transfer = void 0;

if (weex && weex.requireModule) {
	transfer = weex.requireModule('nat/transfer');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		transfer = __weex_require__('@weex-module/nat/transfer');
	});
}

// download

var download = function download(url, opts, hooks, cb) {
	return new Promise(function (resolve, reject) {
		if (!url) {
			reject({
				code: 151040,
				message: 'DOWNLOAD_MISSING_ARGUMENT'
			});
			return;
		}

		if (typeof opts === 'function') {
			cb = opts;
		} else if ((typeof opts === 'undefined' ? 'undefined' : _typeof(opts)) === 'object') {
			if (typeof hooks === 'function') {
				cb = hooks;
			}
			// todo
			if (typeof opts.onProgress === 'function') {
				hooks = opts;
			}
		}

		if ((typeof url === 'undefined' ? 'undefined' : _typeof(url)) === 'object') {
			opts = url;
		} else {
			opts = opts || {};
			opts.url = url;
		}

		// hooks
		hooks = hooks || {};

		transfer.download({
			url: opts.url,
			headers: opts.headers || {},
			target: opts.target
		}, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else if (ret.progress) {
				if (typeof hooks.onProgress === 'function') {
					hooks.onProgress(ret.progress);
				}
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// upload

var upload = function upload(url, opts, hooks, cb) {
	return new Promise(function (resolve, reject) {
		if (!url) {
			reject({
				code: 151040,
				message: 'UPLOAD_MISSING_ARGUMENT'
			});
			return;
		}

		if (typeof opts === 'function') {
			cb = opts;
		} else if ((typeof opts === 'undefined' ? 'undefined' : _typeof(opts)) === 'object') {
			if (typeof hooks === 'function') {
				cb = hooks;
			}
			// todo
			if (typeof opts.onProgress === 'function') {
				hooks = opts;
			}
		}

		if ((typeof url === 'undefined' ? 'undefined' : _typeof(url)) === 'object') {
			opts = url;
		} else {
			opts = opts || {};
			opts.url = url;
		}

		// hooks
		hooks = hooks || {};

		// path
		if (!opts.path) {
			reject({
				code: 151040,
				message: 'UPLOAD_MISSING_ARGUMENT'
			});
			return;
		}

		// method
		opts.method = opts.method ? opts.method.toUpperCase() : 'POST';

		if (['POST', 'PUT', 'PATCH'].indexOf(opts.method) < 0) {
			reject({
				code: 151050,
				message: 'UPLOAD_INVALID_ARGUMENT',
				details: 'Unsupported request method'
			});
			return;
		}

		transfer.upload({
			url: opts.url,
			method: opts.method,
			path: opts.path,
			name: opts.name,
			headers: opts.headers || {},
			formData: opts.formData || {},
			mimeType: opts.mimeType
		}, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else if (ret.progress) {
				if (typeof hooks.onProgress === 'function') {
					hooks.onProgress(ret.progress);
				}
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	download: download,
	upload: upload
};

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _accelerometer = __webpack_require__(110);

var _accelerometer2 = _interopRequireDefault(_accelerometer);

var _compass = __webpack_require__(111);

var _compass2 = _interopRequireDefault(_compass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
	accelerometer: _accelerometer2.default,
	compass: _compass2.default
};

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var accelerometer = void 0;

if (weex && weex.requireModule) {
	accelerometer = weex.requireModule('nat/sensor/accelerometer');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		accelerometer = __weex_require__('@weex-module/nat/sensor/accelerometer');
	});
}

// get
var get = function get(opts, cb) {
	if (typeof opts === 'function') {
		cb = opts;
		opts = {};
	}

	return new Promise(function (resolve, reject) {
		accelerometer.get(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// watch

var watch = function watch(opts, cb) {
	if (typeof opts === 'function') {
		cb = opts;
		opts = {};
	}

	return new Promise(function (resolve, reject) {
		accelerometer.watch({
			interval: opts.interval || 32
		}, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// clear watch

var clearWatch = function clearWatch(cb) {
	return new Promise(function (resolve, reject) {
		accelerometer.clearWatch(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	get: get,
	watch: watch,
	clearWatch: clearWatch
};

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var compass = void 0;

if (weex && weex.requireModule) {
	compass = weex.requireModule('nat/sensor/compass');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		compass = __weex_require__('@weex-module/nat/sensor/compass');
	});
}

// get
var get = function get(opts, cb) {
	if (typeof opts === 'function') {
		cb = opts;
		opts = {};
	}

	return new Promise(function (resolve, reject) {
		compass.get(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// watch

var watch = function watch(opts, cb) {
	if (typeof opts === 'function') {
		cb = opts;
		opts = {};
	}

	return new Promise(function (resolve, reject) {
		compass.watch({
			interval: opts.interval || 32
		}, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// clear watch

var clearWatch = function clearWatch(cb) {
	return new Promise(function (resolve, reject) {
		compass.clearWatch(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	get: get,
	watch: watch,
	clearWatch: clearWatch
};

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _info = __webpack_require__(113);

var _info2 = _interopRequireDefault(_info);

var _battery = __webpack_require__(114);

var _battery2 = _interopRequireDefault(_battery);

var _network = __webpack_require__(115);

var _network2 = _interopRequireDefault(_network);

var _screen = __webpack_require__(116);

var _screen2 = _interopRequireDefault(_screen);

var _vibration = __webpack_require__(117);

var _vibration2 = _interopRequireDefault(_vibration);

var _volume = __webpack_require__(118);

var _volume2 = _interopRequireDefault(_volume);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
	info: _info2.default,
	battery: _battery2.default,
	network: _network2.default,
	screen: _screen2.default,
	vibration: _vibration2.default,
	volume: _volume2.default
};

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var device = void 0;

if (weex && weex.requireModule) {
	device = weex.requireModule('nat/device/info');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		device = __weex_require__('@weex-module/nat/device/info');
	});
}

// info

var info = function info(cb) {
	return new Promise(function (resolve, reject) {
		device.info(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	info: info
};

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var battery = void 0;

if (weex && weex.requireModule) {
	battery = weex.requireModule('nat/device/battery');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		battery = __weex_require__('@weex-module/nat/device/battery');
	});
}

// status

var status = function status(cb) {
	return new Promise(function (resolve, reject) {
		battery.status(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	status: status
};

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var network = void 0;

if (weex && weex.requireModule) {
	network = weex.requireModule('nat/device/network');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		network = __weex_require__('@weex-module/nat/device/network');
	});
}

// status

var status = function status(cb) {
	return new Promise(function (resolve, reject) {
		network.status(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	status: status
};

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var screen = void 0;

if (weex && weex.requireModule) {
	screen = weex.requireModule('nat/device/screen');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		screen = __weex_require__('@weex-module/nat/device/screen');
	});
}

// brightness

var brightness = {
	get: function get(cb) {
		return new Promise(function (resolve, reject) {
			screen.getBrightness(function (ret) {
				ret = ret || {};

				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	},

	set: function set(brightness, cb) {
		return new Promise(function (resolve, reject) {
			screen.setBrightness(brightness, function (ret) {
				ret = ret || {};

				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	}

	// orientation

};var orientation = {
	status: function status(cb) {
		return new Promise(function (resolve, reject) {
			screen.getOrientation(function (ret) {
				ret = ret || {};

				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	},

	lock: function lock(orientation, cb) {
		if (typeof orientation === 'function') {
			cb = orientation;
			orientation = {};
		}

		// orientation
		if (['portrait-primary', 'portrait-secondary', 'landscape-primary', 'landscape-secondary', 'portrait', // either portrait-primary or portrait-secondary.
		'landscape', // either landscape-primary or landscape-secondary.
		'any' // All orientations are supported (unlocked orientation)
		].indexOf(orientation) < 0) {
			orientation = 'any';
		}

		return new Promise(function (resolve, reject) {
			screen.lockOrientation(orientation, function (ret) {
				ret = ret || {};

				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	},

	unlock: function unlock(cb) {
		return new Promise(function (resolve, reject) {
			screen.unlockOrientation(function (ret) {
				ret = ret || {};

				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	}

	// info

};var info = function info(cb) {
	return new Promise(function (resolve, reject) {
		screen.info(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	brightness: brightness,
	orientation: orientation,
	info: info
};

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var vibration = void 0;

if (weex && weex.requireModule) {
	vibration = weex.requireModule('nat/device/vibration');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		vibration = __weex_require__('@weex-module/nat/device/vibration');
	});
}

// vibrate

var vibrate = function vibrate(time, cb) {
	if (typeof time === 'function') {
		cb = time;
		time = {};
	}

	return new Promise(function (resolve, reject) {
		vibration.vibrate(time || 500, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	vibrate: vibrate
};

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var volume = void 0;

if (weex && weex.requireModule) {
	volume = weex.requireModule('nat/device/volume');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		volume = __weex_require__('@weex-module/nat/device/volume');
	});
}

// get

var get = function get(cb) {
	return new Promise(function (resolve, reject) {
		volume.get(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// set

var set = function set(vol, cb) {
	return new Promise(function (resolve, reject) {
		volume.set(vol, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	get: get,
	set: set
};

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var navigator = void 0;

if (weex && weex.requireModule) {
	navigator = weex.requireModule('nat/navigator');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		navigator = __weex_require__('@weex-module/nat/navigator');
	});
}

// push

var push = function push(opts, cb) {
	opts = opts || {};

	if (typeof opts === 'string') {
		opts = {
			url: opts
		};
	}

	return new Promise(function (resolve, reject) {
		navigator.push(opts, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// pop
var pop = function pop(opts, cb) {
	return new Promise(function (resolve, reject) {
		navigator.pop(opts, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// popToRoot
var popToRoot = function popToRoot(opts, cb) {
	opts = opts || {
		animated: true
	};

	if (typeof opts === 'function') {
		cb = opts;
		opts = {
			animated: true
		};
	}

	return new Promise(function (resolve, reject) {
		navigator.popToRoot(opts, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// setTitle
var setTitle = function setTitle(opts, cb) {
	opts = opts || {};

	if (typeof opts === 'string') {
		opts = {
			title: opts
		};
	}

	return new Promise(function (resolve, reject) {
		navigator.setTitle(opts, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// setColor
var setColor = function setColor(opts, cb) {
	opts = opts || {};

	if (typeof opts === 'string') {
		opts = {
			color: opts
		};
	}

	return new Promise(function (resolve, reject) {
		navigator.setColor(opts, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// setBackgroundColor
var setBackgroundColor = function setBackgroundColor(opts, cb) {
	opts = opts || {};

	if (typeof opts === 'string') {
		opts = {
			backgroundColor: opts
		};
	}

	return new Promise(function (resolve, reject) {
		navigator.setBackgroundColor(opts, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// setFontSize
var setFontSize = function setFontSize(opts, cb) {
	opts = opts || {};

	if (typeof opts === 'string' || typeof opts === 'number') {
		opts = {
			fontSize: opts
		};
	}

	return new Promise(function (resolve, reject) {
		navigator.setFontSize(opts, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// init
var init = function init(opts, cb) {
	opts = opts || {};

	return new Promise(function (resolve, reject) {
		navigator.init(opts, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// hide
var hide = function hide(cb) {
	return new Promise(function (resolve, reject) {
		navigator.hide(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// show
var show = function show(cb) {
	return new Promise(function (resolve, reject) {
		navigator.show(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	push: push,
	pop: pop,
	popToRoot: popToRoot,
	setTitle: setTitle,
	setColor: setColor,
	setBackgroundColor: setBackgroundColor,
	setFontSize: setFontSize,
	init: init,
	hide: hide,
	show: show
};

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alipay = void 0;

if (weex && weex.requireModule) {
	alipay = weex.requireModule('nat/alipay');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		alipay = __weex_require__('@weex-module/nat/alipay');
	});
}

// pay

var pay = function pay(params, cb) {
	return new Promise(function (resolve, reject) {
		if (!params) {
			reject({
				code: 201040,
				message: 'PAY_MISSING_ARGUMENT'
			});
			return;
		}

		params = params || {};

		if (!params.info) {
			reject({
				code: 201040,
				message: 'PAY_MISSING_ARGUMENT',
				details: '[params.info] is required'
			});
			return;
		}

		if (!params.scheme) {
			reject({
				code: 201040,
				message: 'PAY_MISSING_ARGUMENT',
				details: '[params.scheme] is required'
			});
			return;
		}

		alipay.pay(params, function (ret) {
			ret = ret || {};

			if (ret.error) {
				switch (ret.error.code) {
					case '8000':
						ret.error.msg = '正在处理中，支付结果未知';
						break;

					case '4000':
						ret.error.msg = '订单支付失败';
						break;

					case '5000':
						ret.error.msg = '重复请求';
						break;

					case '6001':
						ret.error.msg = '用户中途取消';
						break;

					case '6002':
						ret.error.msg = '网络连接出错';
						break;

					case '6004':
						ret.error.msg = '支付结果未知';
						break;
				}
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// auth

var auth = function auth(params, cb) {
	return new Promise(function (resolve, reject) {
		if (!params) {
			reject({
				code: 201040,
				message: 'PAY_MISSING_ARGUMENT'
			});
			return;
		}

		params = params || {};

		if (!params.info) {
			reject({
				code: 201040,
				message: 'PAY_MISSING_ARGUMENT',
				details: '[params.info] is required'
			});
			return;
		}

		if (!params.scheme) {
			reject({
				code: 201040,
				message: 'PAY_MISSING_ARGUMENT',
				details: '[params.scheme] is required'
			});
			return;
		}

		alipay.auth(params, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	pay: pay,
	auth: auth
};

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var SHARE_TYPES = {
	'app': 1,
	'emotion': 2,
	'file': 3,
	'image': 4,
	'music': 5,
	'video': 6,
	'webpage': 7,
	'link': 7,
	'mini-program': 8
};

var SCENE_TYPES = {
	'session': 0,
	'timeline': 1,
	'favorite': 2
};

var __c = void 0;

var wechat = {
	get wechatModule() {
		if (__c) {
			return __c;
		} else if (weex && weex.requireModule) {
			__c = weex.requireModule('nat/wechat');
			return __c;
		}
	},

	// init
	init: function init(appId, cb) {
		var _this = this;

		return new Promise(function (resolve, reject) {
			if (!appId) {
				reject({
					code: 301040,
					message: 'MISSING_ARGUMENT',
					details: 'appId is required'
				});
				return;
			}

			_this.wechatModule.init(appId, function (ret) {
				ret = ret || {};

				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	},


	// checkInstalled
	checkInstalled: function checkInstalled(cb) {
		var _this2 = this;

		return new Promise(function (resolve, reject) {
			_this2.wechatModule.checkInstalled(function (ret) {
				ret = ret || {};

				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	},


	/**
 	share
 		@params
 	- content
 		- title
 		- description (desc)
 		- type
 		- filePath
 		- thumbUrl
 		- dataUrl
 		- link
 	- scene
  */
	share: function share(params, cb) {
		var _this3 = this;

		return new Promise(function (resolve, reject) {
			if (!params) {
				reject({
					code: 301040,
					message: 'SHARE_MISSING_ARGUMENT'
				});
				return;
			}

			params = params || {};

			if (typeof params.scene === 'string') {
				params.scene = SCENE_TYPES[params.scene] || 0;
			} else {
				params.scene = params.scene || 0;
			}

			if (typeof params.content === 'string') {
				params.text = params.content;
				delete params.content;
			} else {
				var type = 0;
				params.content = params.content || {};

				if (!params.content.description && params.content.desc) {
					params.content.description = params.content.desc;
				}

				if (typeof params.content.type === 'string') {
					type = SHARE_TYPES[params.content.type];
					params.content.type = type;

					if (!type) {
						reject({
							code: 301041,
							message: 'SHARE_ARGUMENT_ERROR',
							details: 'unsupported share content type'
						});
						return;
					}
				}

				// app & file
				// filePath: local only
				if ([1, 3].includes(type) && !params.content.filePath) {
					reject({
						code: 301041,
						message: 'SHARE_ARGUMENT_ERROR',
						details: 'content.filePath is required'
					});
					return;
				}
				// emotion & image & music & video
				else if ([2, 4, 5, 6].includes(type) && !params.content.dataUrl) {
						reject({
							code: 301041,
							message: 'SHARE_ARGUMENT_ERROR',
							details: 'content.dataUrl is required'
						});
						return;
					}

				// add link (music & webpage)
				if ([5, 7].includes(type) && !params.content.link) {
					reject({
						code: 301041,
						message: 'SHARE_ARGUMENT_ERROR',
						details: 'content.link is required'
					});
					return;
				}
			}

			_this3.wechatModule.share(params, function (ret) {
				ret = ret || {};

				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					delete ret.status;
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	},


	// pay
	pay: function pay(params, cb) {
		var _this4 = this;

		return new Promise(function (resolve, reject) {
			if (!params) {
				reject({
					code: 301040,
					message: 'PAY_MISSING_ARGUMENT'
				});
				return;
			}

			// if (!params.appid) {
			// 	reject({
			// 		code: 301040,
			// 		message: 'PAY_MISSING_ARGUMENT',
			// 		details: '[params.appid] is required'
			// 	})
			// 	return
			// }

			_this4.wechatModule.pay(params, function (ret) {
				ret = ret || {};

				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					delete ret.status;
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	},


	// auth
	auth: function auth(params, cb) {
		var _this5 = this;

		return new Promise(function (resolve, reject) {
			if (!params) {
				reject({
					code: 301040,
					message: 'PAY_MISSING_ARGUMENT'
				});
				return;
			}

			params = params || {};

			if (!params.info) {
				reject({
					code: 301040,
					message: 'PAY_MISSING_ARGUMENT',
					details: '[params.info] is required'
				});
				return;
			}

			_this5.wechatModule.auth(params, function (ret) {
				ret = ret || {};

				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					delete ret.status;
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	}
};

module.exports = wechat;

/***/ }),
/* 122 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["play-wrapper"]
  }, [_c('v-image', {
    staticClass: ["play-bg"],
    style: _vm.contentStyle,
    attrs: {
      "src": _vm.defalutBg
    }
  }), _c('v-image', {
    staticClass: ["play-bg"],
    style: _vm.contentStyle,
    attrs: {
      "src": "play/cm2_playbar_bg.png"
    }
  }), _c('v-image', {
    staticClass: ["play-bg"],
    style: _vm.contentStyle,
    attrs: {
      "src": "play/cm2_playbar_ready.png"
    }
  }), _c('div', {
    staticClass: ["play-content-wrapper"]
  }, [_c('v-back', {
    attrs: {
      "title": 'title',
      "desc": 'desc'
    }
  }), _c('div', {
    staticClass: ["play-station"]
  }, [_c('v-image', {
    staticClass: ["play-radio-bg"],
    attrs: {
      "src": "play/cm2_play_disc_radio_bg.png"
    }
  }), _c('div', {
    staticClass: ["play-program-wrapper"]
  }, [_c('v-image', {
    staticClass: ["play-program"],
    attrs: {
      "src": "default/cm2_default_cover_program.png"
    }
  }), _c('v-image', {
    staticClass: ["play-program1"],
    attrs: {
      "src": "play/cm2_play_disc.png"
    }
  }), _c('v-image', {
    staticClass: ["play-program2"],
    attrs: {
      "src": "play/cm2_play_disc@3x.png"
    }
  }), _c('v-image', {
    staticClass: ["play-program3"],
    attrs: {
      "src": "play/cm2_playing_mask.png"
    }
  })], 1), _c('v-image', {
    staticClass: ["play-pointer"],
    attrs: {
      "src": "play/cm2_play_needle_play-ip6@2x.png"
    }
  })], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);