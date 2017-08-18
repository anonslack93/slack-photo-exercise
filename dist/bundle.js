!function(e){function t(i){if(n[i])return n[i].exports;var s=n[i]={i:i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){"objectFit"in document.documentElement.style==!1&&((e.runtimeStyle||e.style).background='url("'+e.src+'") no-repeat 50%/'+(e.currentStyle?e.currentStyle["object-fit"]:t),e.src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+e.width+"' height='"+e.height+"'%3E%3C/svg%3E")}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,n=arguments[2],i=void 0,s=void 0;return function(){for(var r=arguments.length,o=Array(r),l=0;l<r;l++)o[l]=arguments[l];var u=+new Date,a=n||this,h=i+t;i&&u<h?(clearTimeout(s),s=setTimeout(function(){i=u,e.apply(a,o)},t)):(i=u,e.apply(a,o))}}},function(e,t,n){"use strict";n(3);var i=n(4),s=function(e){return e&&e.__esModule?e:{default:e}}(i),r=function(){new s.default({container:document.querySelector(".app")})};if("loading"!==document.readyState)r();else{var o=function e(){document.removeEventListener("DOMContentLoaded",e),r()};document.addEventListener("DOMContentLoaded",o)}},function(e,t){e.exports={"almost-white":"rgb(250, 250, 250)","lighter-grey":"rgb(240, 240, 240)","light-grey":"rgb(160, 160, 162)","dark-grey":"rgb(113, 114, 116)","darker-grey":"rgb(85, 84, 89)","alert-red":"rgb(255, 135, 109)","light-blue":"rgb(41, 178, 238)","subdued-blue":"rgb(61, 156, 212)","20-percent-black":"rgba(0, 0, 0, 0.2)","30-percent-black":"rgba(0, 0, 0, 0.3)","40-percent-black":"rgba(0, 0, 0, 0.4)","30-percent-white":"rgba(255, 255, 255, 0.3)"}},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=n(0),l=i(o),u=n(5),a=i(u),h=n(7),c=i(h),d=n(8),_=i(d),f=n(9),p=i(f),m=n(10),v=i(m),b=n(11),g=i(b),y=function(){function e(t){var n=t.container;s(this,e),this._subViews=[],this._setupAPIClients(),this._setupSubViews(n)}return r(e,[{key:"_setupAPIClients",value:function(){var e=(0,a.default)("ed4a2d49acb1d0d7c73bb8aeacc3a82c");this._flickrSearchAPIClient=(0,c.default)(e,{extras:"url_n,url_z,url_c,url_b",sort:"interestingness-desc",per_page:30})}},{key:"_setupSubViews",value:function(e){this._searchFormView=new p.default({placeholderText:"Try: San Francisco, New York",submitText:"Search",onSearch:this._handleSearch.bind(this)}),e.appendChild(this._searchFormView.getElement()),this._subViews.push(this._searchFormView),this._searchFormView.focus(),this._photoListView=new v.default({onImageMount:this._addLightboxAttributeToImage,numberOfPlaceholders:30}),e.appendChild(this._photoListView.getElement()),this._subViews.push(this._photoListView),this._lightboxView=new g.default({enableAttribute:"data-lightbox",urlAttribute:"data-lightbox-url"}),document.body.appendChild(this._lightboxView.getElement()),this._subViews.push(this._lightboxView)}},{key:"_handleSearch",value:function(e){var t=this,n=function(e){return{title:e.title,url:e.fullURL}};this._photoListView.setPhotos(function(i){var s=t._flickrSearchAPIClient(e,{page:i}).then(_.default),r=s.then(function(e){return e.photos.map(n)});return 1===i?t._lightboxView.setPhotos(r):t._lightboxView.addPhotos(r),s})}},{key:"_addLightboxAttributeToImage",value:function(e,t){e.src=t.thumbnailURL,e.setAttribute("data-lightbox",""),e.setAttribute("data-lightbox-url",t.fullURL),(0,l.default)(e,"cover")}},{key:"destroy",value:function(){this._subViews.forEach(function(e){return e.destroy()}),this._subViews=null,this._searchFormView=null,this._photoListView=null,this._lightboxView=null,this._flickrSearchAPIClient=null}}]),e}();t.default=y},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},s=n(6),r=function(e){return e&&e.__esModule?e:{default:e}}(s);t.default=function(e){return function(t,n){var s=i({api_key:e,format:"json",nojsoncallback:"1",method:t},n),o=(0,r.default)("https://api.flickr.com/services/rest",s);return fetch(o).then(function(e){if(!e.ok)throw new Error("API request failed with code "+e.status);return e.json()}).then(function(e){if("ok"!==e.stat)throw new Error("API request failed: "+e.message);return e})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object.keys(t);return 0===n.length?e:e+"?"+n.sort().map(function(e){var n=t[e];return void 0===n||null===n?null:encodeURIComponent(e)+"="+encodeURIComponent(n)}).filter(Boolean).join("&")}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};t.default=function(e,t){return function(n,s){return e("flickr.photos.search",i({text:n},t,s))}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return{page:e.photos.page,pages:e.photos.pages,perPage:e.photos.perpage,photos:e.photos.photo.map(function(e){return{title:e.title,thumbnailURL:e.url_n,fullURL:e.url_b||e.url_c||e.url_z,thumbnailHeight:e.height_n,thumbnailWidth:e.width_n,fullHeight:e.height_b||e.height_c||e.height_z,fullWidth:e.width_b||e.width_c||e.width_z}})}}},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=n(1),o=function(e){return e&&e.__esModule?e:{default:e}}(r),l=function(){function e(t){var n=t.placeholderText,s=t.submitText,r=t.onSearch;i(this,e),this._setupElements(n,s),this._setupListeners(r)}return s(e,[{key:"_setupElements",value:function(e,t){var n=document.createElement("form");this._elements={form:n},n.classList.add("search-form"),n.innerHTML='\n      <input class="search-input" type="text" placeholder="'+e+'"/>\n      <button class="search-submit-btn" disabled type="submit">'+t+"</button>\n    ",this._elements.input=n.querySelector(".search-input"),this._elements.submitBtn=n.querySelector(".search-submit-btn")}},{key:"_setupListeners",value:function(e){var t=this;this._inputEventHandler=(0,o.default)(this._handleValueChange,250,this),this._elements.input.addEventListener("input",this._inputEventHandler),this._submitEventHandler=function(n){return t._handleSubmit(e,n)},this._elements.form.addEventListener("submit",this._submitEventHandler)}},{key:"_destroyListeners",value:function(){this._elements.input.removeEventListener("input",this._inputEventHandler),this._elements.form.removeEventListener("submit",this._submitEventHandler)}},{key:"_handleValueChange",value:function(e){this._elements.submitBtn.disabled=0===e.target.value.length}},{key:"_handleSubmit",value:function(e,t){t.preventDefault(),t.stopPropagation();var n=this._elements.input;0!==n.value.length&&e(n.value)}},{key:"focus",value:function(){this._elements.input.focus()}},{key:"getElement",value:function(){return this._elements.form}},{key:"destroy",value:function(){this._elements.form.remove(),this._destroyListeners(),this._elements=null}}]),e}();t.default=l},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=n(1),o=function(e){return e&&e.__esModule?e:{default:e}}(r),l=function(){function e(t){var n=t.onImageMount,s=t.numberOfPlaceholders;i(this,e),this._pages=null,this._perPage=null,this._currentPage=null,this._isLoading=!1,this._getData=null,this._onImageMount=n,this._numberOfPlaceholders=s,this._listItems=[],this._handleDocumentScroll=(0,o.default)(this._handleDocumentScroll,500,this),this._setupElements()}return s(e,[{key:"_setupElements",value:function(){this._element=document.createElement("ul"),this._element.classList.add("photo-list")}},{key:"setPhotos",value:function(e){var t=this;this.reset(),this._showLoadingPlaceholders(),this._getData="function"==typeof e?e:function(){return e},this._currentPage=1,this._isLoading=!0,Promise.resolve(this._getData(this._currentPage)).then(function(e){var n=e.photos,i=e.pages,s=e.perPage;t._isLoading=!1,t._pages=i,t._perPage=s,t._processNewPhotos(n),t._setupScrollListener()}).catch(function(e){console.error("PhotoList.setPhotos: ",e),t.reset(),t._showFetchError()})}},{key:"reset",value:function(){this._destroyScrollListener(),this._element.innerHTML="",this._listItems.length=0}},{key:"_setupScrollListener",value:function(){document.addEventListener("scroll",this._handleDocumentScroll)}},{key:"_destroyScrollListener",value:function(){document.removeEventListener("scroll",this._handleDocumentScroll)}},{key:"_processNewPhotos",value:function(e){var t=this,n=(this._currentPage-1)*this._perPage;if(e.forEach(function(e,i){var s=i+n;if(s>=t._listItems.length){var r=t._createListItem();t._onImageMount(r.image,e),r.wrapper.classList.remove("photo-list-placeholder"),t._element.appendChild(r.wrapper),t._listItems.push(r)}else{var o=t._listItems[s];t._onImageMount(o.image,e),o.wrapper.classList.remove("photo-list-placeholder")}}),e.length+n<this._listItems.length){for(var i=e.length+n-1;++i<this._listItems.length;){this._listItems[i].wrapper.remove()}this._listItems.length=e.length+n}}},{key:"_showLoadingPlaceholders",value:function(){for(var e=-1;++e<this._numberOfPlaceholders;){var t=this._createListItem();t.wrapper.classList.add("photo-list-placeholder"),this._element.appendChild(t.wrapper),this._listItems.push(t)}}},{key:"_showFetchError",value:function(){this._element.innerHTML="\n      <h2 class='photo-list-load-error'>\n        Uh-oh, it looks like something went wrong. Try searching again.\n      </h2>\n    "}},{key:"_createListItem",value:function(){var e={wrapper:document.createElement("li"),image:document.createElement("img")};return e.wrapper.classList.add("photo-list-item"),e.image.classList.add("photo-list-image"),e.wrapper.appendChild(e.image),e}},{key:"_handleDocumentScroll",value:function(e){var t=this,n=window.pageYOffset,i=window.innerHeight,s=document.body.offsetHeight;Math.max(s-(n+i),0)<150&&this._currentPage<this._pages&&!this._isLoading&&(this._isLoading=!0,this._showLoadingPlaceholders(),Promise.resolve(this._getData(this._currentPage+1)).then(function(e){var n=e.photos,i=e.pages;t._isLoading=!1,t._pages=i,t._currentPage++,t._processNewPhotos(n)}).catch(function(e){console.error("PhotoList.setPhotos: ",e),t.reset(),t._showFetchError()}))}},{key:"getElement",value:function(){return this._element}},{key:"destroy",value:function(){this.reset(),this._element.remove(),this._getData=null,this._onImageMount=null}}]),e}();t.default=l},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=n(0),o=function(e){return e&&e.__esModule?e:{default:e}}(r),l=function(){function e(t){var n=t.enableAttribute,s=t.urlAttribute;i(this,e),this._isVisible=!1,this._currentIndex=null,this._photos=[],this._enableAttribute=n,this._urlAttribute=s,this._handleDocumentClick=this._handleDocumentClick.bind(this),this._handleDocumentKeydown=this._handleDocumentKeydown.bind(this),this.hide=this.hide.bind(this),this.previous=this.previous.bind(this),this.next=this.next.bind(this),this._setupElements(),this._setupListeners(n,s)}return s(e,[{key:"_setupElements",value:function(){var e=document.createElement("div");this._elements={wrapper:e},e.classList.add("lightbox-wrapper"),e.innerHTML="\n      <div class='lightbox-modal'>\n        <div class='lightbox-title-bar'>\n          <h2 class='lightbox-title'></h2>\n          <button class='lightbox-close-button'>Close</button>\n        </div>\n        <img class='lightbox-image'>\n        <div class='lightbox-button-bar'>\n          <button class='lightbox-previous-button'>Previous</button>\n          <button class='lightbox-next-button'>Next</button>\n        </div>\n      </div>\n    ",this._elements.modal=e.querySelector(".lightbox-modal"),this._elements.title=e.querySelector(".lightbox-title"),this._elements.closeButton=e.querySelector(".lightbox-close-button"),this._elements.previousButton=e.querySelector(".lightbox-previous-button"),this._elements.nextButton=e.querySelector(".lightbox-next-button"),this._elements.image=e.querySelector(".lightbox-image")}},{key:"_setupListeners",value:function(){var e=this._elements,t=e.closeButton,n=e.previousButton,i=e.nextButton;document.addEventListener("click",this._handleDocumentClick,!0),document.addEventListener("keydown",this._handleDocumentKeydown,!0),t.addEventListener("click",this.hide),n.addEventListener("click",this.previous),i.addEventListener("click",this.next)}},{key:"_destroyListeners",value:function(){var e=this._elements,t=e.closeButton,n=e.previousButton,i=e.nextButton;document.removeEventListener("click",this._handleDocumentClick,!0),document.removeEventListener("keydown",this._handleDocumentKeydown,!0),t.removeEventListener("click",this.hide),n.removeEventListener("click",this.previous),i.removeEventListener("click",this.next)}},{key:"_handleDocumentClick",value:function(e){var t=e.target;if(this._isVisible&&!this._elements.modal.contains(t)&&this.hide(),t.hasAttribute(this._enableAttribute)){var n=t.getAttribute(this._urlAttribute);n&&this.show(n)}}},{key:"_handleDocumentKeydown",value:function(e){if(this._isVisible){var t=function(){e.preventDefault(),e.stopPropagation()};"Escape"===e.key||"Esc"===e.key?(t(),this.hide()):"ArrowLeft"===e.key||"Left"===e.key?(t(),this.previous()):"ArrowRight"!==e.key&&"Right"!==e.key||(t(),this.next())}}},{key:"previous",value:function(){if(0!==this._currentIndex){var e=this._currentIndex-1,t=this._photos[e].url;this.show(t)}}},{key:"next",value:function(){if(this._currentIndex!==this._photos.length-1){var e=this._currentIndex+1,t=this._photos[e].url;this.show(t)}}},{key:"setPhotos",value:function(e){var t=this;this.reset(),Promise.resolve(e).then(function(e){t._photos=e})}},{key:"addPhotos",value:function(e){var t=this;Promise.resolve(e).then(function(e){t._photos=t._photos.concat(e)})}},{key:"show",value:function(e){var t=this._elements,n=t.wrapper,i=t.image,s=t.title,r=t.previousButton,l=t.nextButton,u=this._photos.findIndex(function(t){return t.url===e});i.src=e,(0,o.default)(i,"contain"),s.textContent=this._photos[u].title,n.classList.add("lightbox-visible"),r.disabled=0===u,l.disabled=u===this._photos.length-1,this._currentUrl=e,this._currentIndex=u,this._isVisible=!0}},{key:"hide",value:function(){var e=this._elements,t=e.wrapper,n=e.image,i=e.title;n.src="",i.textContent="",t.classList.remove("lightbox-visible"),this._currentUrl=null,this._currentIndex=null,this._isVisible=!1}},{key:"reset",value:function(){this._photos.length=0}},{key:"getElement",value:function(){return this._elements.wrapper}},{key:"destroy",value:function(){this._elements.wrapper.remove(),this._destroyListeners(),this._elements=null,this._photos=null}}]),e}();t.default=l}]);