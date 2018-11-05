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
/******/ 	return __webpack_require__(__webpack_require__.s = 81);
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

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(24)
)

/* script */
__vue_exports__ = __webpack_require__(25)

/* template */
var __vue_template__ = __webpack_require__(26)
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
__vue_options__.__file = "/Users/wangsai/workspace/github/163music-weex/src/components/find/list.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-77307558"
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

/***/ 24:
/***/ (function(module, exports) {

module.exports = {
  "topbtn-wrapper": {
    "paddingTop": "34",
    "paddingLeft": "44",
    "paddingRight": "44",
    "paddingBottom": "36",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "borderBottomWidth": "1",
    "borderBottomColor": "#e0e1e3",
    "borderBottomStyle": "solid"
  },
  "topbtn-item": {
    "alignItems": "center"
  },
  "topbtn-icon-wrapper": {
    "width": "100",
    "height": "100",
    "backgroundColor": "#e14838",
    "borderRadius": "50",
    "marginBottom": "14",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "topbtn-icon": {
    "width": "90",
    "height": "90"
  },
  "topbtn-text": {
    "textAlign": "center"
  }
}

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vImage = __webpack_require__(0);

var _vImage2 = _interopRequireDefault(_vImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: {
    list: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
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

/***/ }),

/***/ 26:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["topbtn-wrapper"]
  }, _vm._l((_vm.list), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: ["topbtn-item"]
    }, [_c('div', {
      staticClass: ["topbtn-icon-wrapper"]
    }, [_c('v-image', {
      staticClass: ["topbtn-icon"],
      attrs: {
        "src": item.icon
      }
    })], 1), _c('text', {
      staticClass: ["topbtn-text"]
    }, [_vm._v(_vm._s(item.text))])])
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true

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

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _list = __webpack_require__(23);

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_list2.default.el = '#root';
new Vue(_list2.default);

/***/ })

/******/ });