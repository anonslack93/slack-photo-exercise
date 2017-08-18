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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (image, objectFitRule) {
  if ('objectFit' in document.documentElement.style === false) {
    (image.runtimeStyle || image.style).background = 'url("' + image.src + '") no-repeat 50%/' + (image.currentStyle ? image.currentStyle['object-fit'] : objectFitRule);

    image.src = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'' + image.width + '\' height=\'' + image.height + '\'%3E%3C/svg%3E';
  }
};

/***/ }),
/* 1 */
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

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(3);

var _App = __webpack_require__(4);

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
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"almost-white":"rgb(250, 250, 250)","lighter-grey":"rgb(240, 240, 240)","light-grey":"rgb(160, 160, 162)","dark-grey":"rgb(113, 114, 116)","darker-grey":"rgb(85, 84, 89)","alert-red":"rgb(255, 135, 109)","light-blue":"rgb(41, 178, 238)","subdued-blue":"rgb(61, 156, 212)","20-percent-black":"rgba(0, 0, 0, 0.2)","30-percent-black":"rgba(0, 0, 0, 0.3)","40-percent-black":"rgba(0, 0, 0, 0.4)","30-percent-white":"rgba(255, 255, 255, 0.3)"};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _objectFitPolyfill = __webpack_require__(0);

var _objectFitPolyfill2 = _interopRequireDefault(_objectFitPolyfill);

var _flickrAPI = __webpack_require__(5);

var _flickrAPI2 = _interopRequireDefault(_flickrAPI);

var _flickrSearchAPI = __webpack_require__(7);

var _flickrSearchAPI2 = _interopRequireDefault(_flickrSearchAPI);

var _flickrSearchAPIAdapter = __webpack_require__(8);

var _flickrSearchAPIAdapter2 = _interopRequireDefault(_flickrSearchAPIAdapter);

var _SearchForm = __webpack_require__(9);

var _SearchForm2 = _interopRequireDefault(_SearchForm);

var _PhotoList = __webpack_require__(10);

var _PhotoList2 = _interopRequireDefault(_PhotoList);

var _Lightbox = __webpack_require__(11);

var _Lightbox2 = _interopRequireDefault(_Lightbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FLICKR_API_KEY = 'ed4a2d49acb1d0d7c73bb8aeacc3a82c';
var ITEMS_PER_PAGE = 30;

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
        extras: 'url_n,url_z,url_c,url_b',

        // For now, we're sorting by interestingness. We could expose sorting
        // in the UI and do this dynamically.
        sort: 'interestingness-desc',
        per_page: ITEMS_PER_PAGE
      });
    }
  }, {
    key: '_setupSubViews',
    value: function _setupSubViews(container) {
      this._searchFormView = new _SearchForm2.default({
        placeholderText: 'Try: San Francisco, New York',
        submitText: 'Search',
        onSearch: this._handleSearch.bind(this)
      });

      container.appendChild(this._searchFormView.getElement());
      this._subViews.push(this._searchFormView);
      this._searchFormView.focus();

      this._photoListView = new _PhotoList2.default({
        onImageMount: this._addLightboxAttributeToImage,
        numberOfPlaceholders: ITEMS_PER_PAGE
      });

      container.appendChild(this._photoListView.getElement());
      this._subViews.push(this._photoListView);

      this._lightboxView = new _Lightbox2.default({
        enableAttribute: 'data-lightbox',
        urlAttribute: 'data-lightbox-url'
      });

      document.body.appendChild(this._lightboxView.getElement());
      this._subViews.push(this._lightboxView);
    }
  }, {
    key: '_handleSearch',
    value: function _handleSearch(text) {
      var _this = this;

      var flickrToLightboxList = function flickrToLightboxList(_ref2) {
        var title = _ref2.title,
            fullURL = _ref2.fullURL;
        return { title: title, url: fullURL };
      };

      this._photoListView.setPhotos(function (page) {
        var photoData = _this._flickrSearchAPIClient(text, { page: page }).then(_flickrSearchAPIAdapter2.default);

        var lightboxData = photoData.then(function (_ref3) {
          var photos = _ref3.photos;
          return photos.map(flickrToLightboxList);
        });

        if (page === 1) {
          _this._lightboxView.setPhotos(lightboxData);
        } else {
          // The Lightbox view needs to know about additional pages so it can
          // handle previous/next behavior.
          _this._lightboxView.addPhotos(lightboxData);
        }

        return photoData;
      });
    }
  }, {
    key: '_addLightboxAttributeToImage',
    value: function _addLightboxAttributeToImage(imageElement, imageData) {
      imageElement.src = imageData.thumbnailURL;
      imageElement.setAttribute('data-lightbox', '');
      imageElement.setAttribute('data-lightbox-url', imageData.fullURL);
      (0, _objectFitPolyfill2.default)(imageElement, 'cover');
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this._subViews.forEach(function (subView) {
        return subView.destroy();
      });
      this._subViews = null;
      this._searchFormView = null;
      this._photoListView = null;
      this._lightboxView = null;
      this._flickrSearchAPIClient = null;
    }
  }]);

  return App;
}();

exports.default = App;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _getURLWithParameters = __webpack_require__(6);

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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (baseURL) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var keys = Object.keys(params);

  if (keys.length === 0) return baseURL;

  var queryString = keys.sort().map(function (key) {
    var value = params[key];

    if (value === undefined || value === null) return null;

    return encodeURIComponent(key) + '=' + encodeURIComponent(value);
  }).filter(Boolean).join('&');

  return baseURL + '?' + queryString;
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (flickrAPIClient, options) {
  return function (text, perRequestOptions) {
    return flickrAPIClient('flickr.photos.search', _extends({
      text: text
    }, options, perRequestOptions));
  };
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (APIResponse) {
  return {
    page: APIResponse.photos.page,
    pages: APIResponse.photos.pages,
    perPage: APIResponse.photos.perpage,
    photos: APIResponse.photos.photo.map(function (photo) {
      return {
        title: photo.title,
        thumbnailURL: photo.url_n,
        fullURL: photo.url_b || photo.url_c || photo.url_z,
        thumbnailHeight: photo.height_n,
        thumbnailWidth: photo.width_n,
        fullHeight: photo.height_b || photo.height_c || photo.height_z,
        fullWidth: photo.width_b || photo.width_c || photo.width_z
      };
    })
  };
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _throttle = __webpack_require__(1);

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
    key: 'focus',
    value: function focus() {
      this._elements.input.focus();
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _throttle = __webpack_require__(1);

var _throttle2 = _interopRequireDefault(_throttle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SCROLL_DISTANCE = 150;

var PhotoList = function () {
  function PhotoList(_ref) {
    var onImageMount = _ref.onImageMount,
        numberOfPlaceholders = _ref.numberOfPlaceholders;

    _classCallCheck(this, PhotoList);

    this._pages = null;
    this._perPage = null;
    this._currentPage = null;
    this._isLoading = false;
    this._getData = null;

    this._onImageMount = onImageMount;
    this._numberOfPlaceholders = numberOfPlaceholders;
    this._listItems = [];

    this._handleDocumentScroll = (0, _throttle2.default)(this._handleDocumentScroll, 500, this);

    this._setupElements();
  }

  _createClass(PhotoList, [{
    key: '_setupElements',
    value: function _setupElements() {
      this._element = document.createElement('ul');
      this._element.classList.add('photo-list');
    }
  }, {
    key: 'setPhotos',
    value: function setPhotos(photoData) {
      var _this = this;

      this.reset();
      this._showLoadingPlaceholders();

      // This allows us to accept either a function which returns a Promise
      // or an instance of a Promise.
      this._getData = typeof photoData === 'function' ? photoData : function () {
        return photoData;
      };
      this._currentPage = 1;
      this._isLoading = true;

      Promise.resolve(this._getData(this._currentPage)).then(function (_ref2) {
        var photos = _ref2.photos,
            pages = _ref2.pages,
            perPage = _ref2.perPage;

        _this._isLoading = false;
        _this._pages = pages;
        _this._perPage = perPage;
        _this._processNewPhotos(photos);
        _this._setupScrollListener();
      }).catch(function (error) {
        console.error('PhotoList.setPhotos: ', error);

        _this.reset();
        _this._showFetchError();
      });
    }
  }, {
    key: 'reset',
    value: function reset() {
      this._destroyScrollListener();
      this._element.innerHTML = '';
      // We mutate `length` to trim the array because it's faster than .slice().
      this._listItems.length = 0;
    }
  }, {
    key: '_setupScrollListener',
    value: function _setupScrollListener() {
      document.addEventListener('scroll', this._handleDocumentScroll);
    }
  }, {
    key: '_destroyScrollListener',
    value: function _destroyScrollListener() {
      document.removeEventListener('scroll', this._handleDocumentScroll);
    }
  }, {
    key: '_processNewPhotos',
    value: function _processNewPhotos(photos) {
      var _this2 = this;

      // We need to keep track of how many items are already listed because
      // we don't hold onto data from previous pages (photos.length will
      // only give us the length of the current page).
      var offset = (this._currentPage - 1) * this._perPage;

      photos.forEach(function (photo, pageIndex) {
        var index = pageIndex + offset;

        // If we ended up having more photos than the number of placeholder
        // items we created, we need to build more list items and
        // add them to the page.
        if (index >= _this2._listItems.length) {
          var listItem = _this2._createListItem();
          _this2._onImageMount(listItem.image, photo);

          listItem.wrapper.classList.remove('photo-list-placeholder');
          _this2._element.appendChild(listItem.wrapper);
          _this2._listItems.push(listItem);
        } else {
          var _listItem = _this2._listItems[index];
          _this2._onImageMount(_listItem.image, photo);

          _listItem.wrapper.classList.remove('photo-list-placeholder');
        }
      });

      // If there were more placeholder items than we ended up needing,
      // remove the excess and delete the listItem objects.
      if (photos.length + offset < this._listItems.length) {
        var index = photos.length + offset - 1;

        while (++index < this._listItems.length) {
          var listItem = this._listItems[index];
          listItem.wrapper.remove();
        }

        // We mutate `length` to trim the array because it's faster than .slice().
        this._listItems.length = photos.length + offset;
      }
    }
  }, {
    key: '_showLoadingPlaceholders',
    value: function _showLoadingPlaceholders() {
      var index = -1;
      while (++index < this._numberOfPlaceholders) {
        var listItem = this._createListItem();

        listItem.wrapper.classList.add('photo-list-placeholder');
        this._element.appendChild(listItem.wrapper);
        this._listItems.push(listItem);
      }
    }
  }, {
    key: '_showFetchError',
    value: function _showFetchError() {
      this._element.innerHTML = '\n      <h2 class=\'photo-list-load-error\'>\n        Uh-oh, it looks like something went wrong. Try searching again.\n      </h2>\n    ';
    }
  }, {
    key: '_createListItem',
    value: function _createListItem() {
      var listItem = {
        wrapper: document.createElement('li'),
        image: document.createElement('img')
      };

      listItem.wrapper.classList.add('photo-list-item');
      listItem.image.classList.add('photo-list-image');

      listItem.wrapper.appendChild(listItem.image);

      return listItem;
    }
  }, {
    key: '_handleDocumentScroll',
    value: function _handleDocumentScroll(event) {
      var _this3 = this;

      var scrollPosition = window.pageYOffset;
      var windowSize = window.innerHeight;
      var bodyHeight = document.body.offsetHeight;
      var distanceFromEnd = Math.max(bodyHeight - (scrollPosition + windowSize), 0);

      if (distanceFromEnd < SCROLL_DISTANCE && this._currentPage < this._pages && !this._isLoading) {
        this._isLoading = true;
        this._showLoadingPlaceholders();

        Promise.resolve(this._getData(this._currentPage + 1)).then(function (_ref3) {
          var photos = _ref3.photos,
              pages = _ref3.pages;

          // In case the API returns a potentially-inaccurate total page estimate.
          _this3._isLoading = false;
          _this3._pages = pages;
          _this3._currentPage++;

          _this3._processNewPhotos(photos);
        }).catch(function (error) {
          console.error('PhotoList.setPhotos: ', error);

          _this3.reset();
          _this3._showFetchError();
        });
      }
    }
  }, {
    key: 'getElement',
    value: function getElement() {
      return this._element;
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.reset();
      this._element.remove();
      this._getData = null;
      this._onImageMount = null;
    }
  }]);

  return PhotoList;
}();

exports.default = PhotoList;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _objectFitPolyfill = __webpack_require__(0);

var _objectFitPolyfill2 = _interopRequireDefault(_objectFitPolyfill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Lightbox = function () {
  function Lightbox(_ref) {
    var enableAttribute = _ref.enableAttribute,
        urlAttribute = _ref.urlAttribute;

    _classCallCheck(this, Lightbox);

    this._isVisible = false;
    this._currentIndex = null;
    this._photos = [];

    this._enableAttribute = enableAttribute;
    this._urlAttribute = urlAttribute;

    this._handleDocumentClick = this._handleDocumentClick.bind(this);
    this._handleDocumentKeydown = this._handleDocumentKeydown.bind(this);
    this.hide = this.hide.bind(this);
    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);

    this._setupElements();
    this._setupListeners(enableAttribute, urlAttribute);
  }

  _createClass(Lightbox, [{
    key: '_setupElements',
    value: function _setupElements() {
      var wrapper = document.createElement('div');
      this._elements = { wrapper: wrapper };

      wrapper.classList.add('lightbox-wrapper');
      wrapper.innerHTML = '\n      <div class=\'lightbox-modal\'>\n        <div class=\'lightbox-title-bar\'>\n          <h2 class=\'lightbox-title\'></h2>\n          <button class=\'lightbox-close-button\'>Close</button>\n        </div>\n        <img class=\'lightbox-image\'>\n        <div class=\'lightbox-button-bar\'>\n          <button class=\'lightbox-previous-button\'>Previous</button>\n          <button class=\'lightbox-next-button\'>Next</button>\n        </div>\n      </div>\n    ';

      this._elements.modal = wrapper.querySelector('.lightbox-modal');
      this._elements.title = wrapper.querySelector('.lightbox-title');
      this._elements.closeButton = wrapper.querySelector('.lightbox-close-button');
      this._elements.previousButton = wrapper.querySelector('.lightbox-previous-button');
      this._elements.nextButton = wrapper.querySelector('.lightbox-next-button');
      this._elements.image = wrapper.querySelector('.lightbox-image');
    }
  }, {
    key: '_setupListeners',
    value: function _setupListeners() {
      var _elements = this._elements,
          closeButton = _elements.closeButton,
          previousButton = _elements.previousButton,
          nextButton = _elements.nextButton;


      document.addEventListener('click', this._handleDocumentClick, true);
      document.addEventListener('keydown', this._handleDocumentKeydown, true);

      closeButton.addEventListener('click', this.hide);
      previousButton.addEventListener('click', this.previous);
      nextButton.addEventListener('click', this.next);
    }
  }, {
    key: '_destroyListeners',
    value: function _destroyListeners() {
      var _elements2 = this._elements,
          closeButton = _elements2.closeButton,
          previousButton = _elements2.previousButton,
          nextButton = _elements2.nextButton;


      document.removeEventListener('click', this._handleDocumentClick, true);
      document.removeEventListener('keydown', this._handleDocumentKeydown, true);

      closeButton.removeEventListener('click', this.hide);
      previousButton.removeEventListener('click', this.previous);
      nextButton.removeEventListener('click', this.next);
    }
  }, {
    key: '_handleDocumentClick',
    value: function _handleDocumentClick(_ref2) {
      var target = _ref2.target;

      if (this._isVisible && !this._elements.modal.contains(target)) {
        this.hide();
      }

      if (!target.hasAttribute(this._enableAttribute)) return;

      var url = target.getAttribute(this._urlAttribute);
      if (!url) return;

      this.show(url);
    }
  }, {
    key: '_handleDocumentKeydown',
    value: function _handleDocumentKeydown(event) {
      if (!this._isVisible) return;

      var cancel = function cancel() {
        event.preventDefault();
        event.stopPropagation();
      };

      if (event.key === 'Escape' || event.key === 'Esc') {
        cancel();
        this.hide();
      } else if (event.key === 'ArrowLeft' || event.key === 'Left') {
        cancel();
        this.previous();
      } else if (event.key === 'ArrowRight' || event.key === 'Right') {
        cancel();
        this.next();
      }
    }
  }, {
    key: 'previous',
    value: function previous() {
      if (this._currentIndex === 0) return;

      var previousIndex = this._currentIndex - 1;
      var url = this._photos[previousIndex].url;


      this.show(url);
    }
  }, {
    key: 'next',
    value: function next() {
      if (this._currentIndex === this._photos.length - 1) return;

      var nextIndex = this._currentIndex + 1;
      var url = this._photos[nextIndex].url;


      this.show(url);
    }
  }, {
    key: 'setPhotos',
    value: function setPhotos(photoData) {
      var _this = this;

      this.reset();
      Promise.resolve(photoData).then(function (photos) {
        _this._photos = photos;
      });
    }
  }, {
    key: 'addPhotos',
    value: function addPhotos(photoData) {
      var _this2 = this;

      Promise.resolve(photoData).then(function (photos) {
        _this2._photos = _this2._photos.concat(photos);
      });
    }
  }, {
    key: 'show',
    value: function show(url) {
      var _elements3 = this._elements,
          wrapper = _elements3.wrapper,
          image = _elements3.image,
          title = _elements3.title,
          previousButton = _elements3.previousButton,
          nextButton = _elements3.nextButton;

      var index = this._photos.findIndex(function (photo) {
        return photo.url === url;
      });

      image.src = url;
      (0, _objectFitPolyfill2.default)(image, 'contain');
      title.textContent = this._photos[index].title;
      wrapper.classList.add('lightbox-visible');

      previousButton.disabled = index === 0;
      nextButton.disabled = index === this._photos.length - 1;

      this._currentUrl = url;
      this._currentIndex = index;
      this._isVisible = true;
    }
  }, {
    key: 'hide',
    value: function hide() {
      var _elements4 = this._elements,
          wrapper = _elements4.wrapper,
          image = _elements4.image,
          title = _elements4.title;

      image.src = '';
      title.textContent = '';
      wrapper.classList.remove('lightbox-visible');

      this._currentUrl = null;
      this._currentIndex = null;
      this._isVisible = false;
    }
  }, {
    key: 'reset',
    value: function reset() {
      this._photos.length = 0;
    }
  }, {
    key: 'getElement',
    value: function getElement() {
      return this._elements.wrapper;
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this._elements.wrapper.remove();
      this._destroyListeners();
      this._elements = null;
      this._photos = null;
    }
  }]);

  return Lightbox;
}();

exports.default = Lightbox;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map