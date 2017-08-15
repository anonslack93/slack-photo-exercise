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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _App = __webpack_require__(1);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var init = function init() {
  new _App2.default({ container: document.querySelector('.app') });
};

if (document.readyState !== 'loading') {
  init();
} else {
  var handleReady = function handleReady() {
    document.removeEventListener('DOMContentLoaded', handleReady);
    init();
  };
  document.addEventListener('DOMContentLoaded', handleReady);
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _flickrAPI = __webpack_require__(2);

var _flickrAPI2 = _interopRequireDefault(_flickrAPI);

var _flickrSearchAPI = __webpack_require__(4);

var _flickrSearchAPI2 = _interopRequireDefault(_flickrSearchAPI);

var _SearchForm = __webpack_require__(6);

var _SearchForm2 = _interopRequireDefault(_SearchForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FLICKR_API_KEY = 'ed4a2d49acb1d0d7c73bb8aeacc3a82c';

var App = function () {
  function App(_ref) {
    var container = _ref.container;

    _classCallCheck(this, App);

    this._subViews = [];

    this._setupAPIClients();
    this._setupSubViews(container);
  }

  _createClass(App, [{
    key: '_setupAPIClients',
    value: function _setupAPIClients() {
      var flickrAPIClient = (0, _flickrAPI2.default)(FLICKR_API_KEY);

      this._flickrSearchAPIClient = (0, _flickrSearchAPI2.default)(flickrAPIClient, {
        // Ask the API to return fully constructed URLs for a couple of different
        // image sizes. We could construct the URLs on the client, but pushing
        // this work to the server has no noticeable performance downside and
        // removes some complexity from the client code.
        extras: 'url_n,url_c'
      });
    }
  }, {
    key: '_setupSubViews',
    value: function _setupSubViews(container) {
      var searchFormView = new _SearchForm2.default({
        placeholderText: 'Try: San Francisco, New York, London',
        submitText: 'Search',
        onSearch: this._handleSearch.bind(this)
      });

      container.appendChild(searchFormView.getElement());
      this._subViews.push(searchFormView);
    }
  }, {
    key: '_handleSearch',
    value: function _handleSearch(text) {
      this._flickrSearchAPIClient(text).then(function (response) {
        console.log(response);
      });
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this._subViews.forEach(function (subView) {
        return subView.destroy();
      });
    }
  }]);

  return App;
}();

exports.default = App;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _getURLWithParameters = __webpack_require__(3);

var _getURLWithParameters2 = _interopRequireDefault(_getURLWithParameters);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FLICKR_REST_URL = 'https://api.flickr.com/services/rest';

exports.default = function (APIKey) {
  return function (method, options) {
    var requestParams = _extends({
      api_key: APIKey,
      format: 'json',
      nojsoncallback: '1',
      method: method
    }, options);

    var requestURL = (0, _getURLWithParameters2.default)(FLICKR_REST_URL, requestParams);

    return fetch(requestURL).then(function (response) {
      // Trigger rejection on HTTP failure codes, since fetch() will always
      // resolve except in cases of network failure.
      if (!response.ok) {
        throw new Error('API request failed with code ' + response.status);
      }
      return response.json();
    }).then(function (responseJSON) {
      // Flickr's API has its own way of representing errors rather than
      // using HTTP status codes.
      if (responseJSON.stat !== 'ok') {
        throw new Error('API request failed: ' + responseJSON.message);
      }
      return responseJSON;
    });
  };
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (baseURL) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var keys = Object.keys(params);

  if (keys.length === 0) return baseURL;

  var queryString = keys.map(function (key) {
    var value = params[key];

    if (value === undefined || value === null) return null;

    return encodeURIComponent(key) + '=' + encodeURIComponent(value);
  }).filter(Boolean).join('&');

  return baseURL + '?' + queryString;
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _flickrSearchAPIAdapter = __webpack_require__(5);

var _flickrSearchAPIAdapter2 = _interopRequireDefault(_flickrSearchAPIAdapter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (flickrAPIClient, options) {
  return function (text, perRequestOptions) {
    return flickrAPIClient('flickr.photos.search', _extends({
      text: text
    }, options, perRequestOptions)).then(_flickrSearchAPIAdapter2.default);
  };
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (APIResponse) {
  return {
    photos: APIResponse.photos.photo.map(function (photo) {
      return {
        title: photo.title,
        thumbnailURL: photo.url_n,
        fullURL: photo.url_c,
        thumbnailHeight: photo.height_n,
        thumbnailWidth: photo.width_n,
        fullHeight: photo.height_c,
        fullWidth: photo.width_c
      };
    })
  };
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _throttle = __webpack_require__(7);

var _throttle2 = _interopRequireDefault(_throttle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SearchForm = function () {
  function SearchForm(_ref) {
    var placeholderText = _ref.placeholderText,
        submitText = _ref.submitText,
        onSearch = _ref.onSearch;

    _classCallCheck(this, SearchForm);

    this._setupElements(placeholderText, submitText);
    this._setupListeners(onSearch);
  }

  _createClass(SearchForm, [{
    key: '_setupElements',
    value: function _setupElements(placeholderText, submitText) {
      var form = document.createElement('form');
      this._elements = { form: form };

      form.classList.add('search-form');
      form.innerHTML = '\n      <input class="search-input" type="text" placeholder="' + placeholderText + '"/>\n      <button class="search-submit-btn" disabled type="submit">' + submitText + '</button>\n    ';

      this._elements.input = form.querySelector('.search-input');
      this._elements.submitBtn = form.querySelector('.search-submit-btn');
    }
  }, {
    key: '_setupListeners',
    value: function _setupListeners(onSearch) {
      var _this = this;

      this._inputEventHandler = (0, _throttle2.default)(this._handleValueChange, 250, this);
      this._elements.input.addEventListener('input', this._inputEventHandler);

      this._submitEventHandler = function (event) {
        return _this._handleSubmit(onSearch, event);
      };
      this._elements.form.addEventListener('submit', this._submitEventHandler);
    }
  }, {
    key: '_destroyListeners',
    value: function _destroyListeners() {
      this._elements.input.removeEventListener('input', this._inputEventHandler);
      this._elements.form.removeEventListener('submit', this._submitEventHandler);
    }
  }, {
    key: '_handleValueChange',
    value: function _handleValueChange(event) {
      this._elements.submitBtn.disabled = event.target.value.length === 0;
    }
  }, {
    key: '_handleSubmit',
    value: function _handleSubmit(onSearch, event) {
      event.preventDefault();
      event.stopPropagation();

      var input = this._elements.input;


      if (input.value.length === 0) return;

      onSearch(input.value);
    }
  }, {
    key: 'getElement',
    value: function getElement() {
      return this._elements.form;
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this._elements.form.remove();
      this._destroyListeners();
      this._elements = null;
    }
  }]);

  return SearchForm;
}();

exports.default = SearchForm;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (fn) {
  var timeWindow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
  var context = arguments[2];

  var lastCallTime = void 0;
  var pendingCall = void 0;

  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var now = +new Date();
    var fnContext = context || this;
    var nextCallTime = lastCallTime + timeWindow;

    if (lastCallTime && now < nextCallTime) {
      clearTimeout(pendingCall);
      pendingCall = setTimeout(function () {
        lastCallTime = now;
        fn.apply(fnContext, args);
      }, timeWindow);
    } else {
      lastCallTime = now;
      fn.apply(fnContext, args);
    }
  };
};

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map