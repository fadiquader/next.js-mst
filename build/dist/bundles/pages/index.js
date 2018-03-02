module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ ({

/***/ "./components/Layout/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Layout = undefined;

var _layout = __webpack_require__("antd/lib/layout");

var _layout2 = _interopRequireDefault(_layout);

var _jsxFileName = '/home/fadiqua/nextjs-starter-antd/components/Layout/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = __webpack_require__("styled-jsx/style");

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _router = __webpack_require__("next/router");

var _router2 = _interopRequireDefault(_router);

var _head = __webpack_require__("next/head");

var _head2 = _interopRequireDefault(_head);

var _link = __webpack_require__("next/link");

var _link2 = _interopRequireDefault(_link);

var _reactIntl = __webpack_require__("react-intl");

var _universalCookie = __webpack_require__("universal-cookie");

var _universalCookie2 = _interopRequireDefault(_universalCookie);

var _package = __webpack_require__("./package.json");

var _package2 = _interopRequireDefault(_package);

var _PageWithIntl = __webpack_require__("./components/PageWithIntl.js");

var _PageWithIntl2 = _interopRequireDefault(_PageWithIntl);

var _NavBar = __webpack_require__("./components/NavBar/index.js");

var _NavBar2 = _interopRequireDefault(_NavBar);

var _main = __webpack_require__("./styles/main.scss");

var _main2 = _interopRequireDefault(_main);

var _mobxReact = __webpack_require__("mobx-react");

var _ant = __webpack_require__("./styles/ant.less");

var _ant2 = _interopRequireDefault(_ant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// project files

// import NavBar from '../NavBar'

var Content = _layout2.default.Content;

// @inject('store') @observer

var Layout = exports.Layout = function (_React$Component) {
  _inherits(Layout, _React$Component);

  function Layout(props) {
    _classCallCheck(this, Layout);

    var _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this, props));

    _this.onChangeLanguage = function (lang) {
      if (window) {
        localStorage.setItem('locale', lang);
        window.location.href = window.location.href + '?lang=' + lang;
      }
    };

    _this.state = {};

    _this.onChangeLanguage = _this.onChangeLanguage.bind(_this);
    return _this;
  }

  _createClass(Layout, [{
    key: 'render',
    value: function render() {
      // console.log(this.context._documentProps.__NEXT_DATA__)
      return _react2.default.createElement(
        _react2.default.Fragment,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          }
        },
        _react2.default.createElement(
          _head2.default,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            }
          },
          _react2.default.createElement('meta', { charSet: 'UTF-8', __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            }
          }),
          _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', __source: {
              fileName: _jsxFileName,
              lineNumber: 49
            }
          }),
          _react2.default.createElement(
            'title',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 50
              }
            },
            this.props.title || 'Next.js Starter Project'
          ),
          _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _ant2.default }, __source: {
              fileName: _jsxFileName,
              lineNumber: 51
            }
          }),
          _react2.default.createElement('script', { src: 'https://cdn.polyfill.io/v2/polyfill.min.js', __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            }
          })
        ),
        _react2.default.createElement(_style2.default, {
          styleId: _main2.default.__hash,
          css: _main2.default
        }),
        _react2.default.createElement(
          _layout2.default,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            }
          },
          _react2.default.createElement(_NavBar2.default, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 57
            }
          }),
          _react2.default.createElement(
            Content,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 58
              }
            },
            this.props.children
          )
        )
      );
    }
  }]);

  return Layout;
}(_react2.default.Component);

exports.default = (0, _PageWithIntl2.default)(Layout);

/***/ }),

/***/ "./components/NProgress.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = "/home/fadiqua/nextjs-starter-antd/components/NProgress.js";

var _style = __webpack_require__("styled-jsx/style");

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__("next/head");

var _head2 = _interopRequireDefault(_head);

var _nprogress = __webpack_require__("nprogress");

var _nprogress2 = _interopRequireDefault(_nprogress);

var _router = __webpack_require__("next/router");

var _router2 = _interopRequireDefault(_router);

var _nprogress3 = __webpack_require__("./styles/nprogress.css");

var _nprogress4 = _interopRequireDefault(_nprogress3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_nprogress2.default.configure({ showSpinner: false });

_router2.default.onRouteChangeStart = function (url) {
  _nprogress2.default.start();
};

_router2.default.onRouteChangeComplete = function () {
  return _nprogress2.default.done();
};
_router2.default.onRouteChangeError = function () {
  return _nprogress2.default.done();
};

exports.default = function () {
  return _react2.default.createElement(
    "div",
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      }
    },
    _react2.default.createElement(_style2.default, {
      styleId: _nprogress4.default.__hash,
      css: _nprogress4.default
    })
  );
};

/***/ }),

/***/ "./components/NavBar/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _menu = __webpack_require__("antd/lib/menu");

var _menu2 = _interopRequireDefault(_menu);

var _dropdown = __webpack_require__("antd/lib/dropdown");

var _dropdown2 = _interopRequireDefault(_dropdown);

var _icon = __webpack_require__("antd/lib/icon");

var _icon2 = _interopRequireDefault(_icon);

var _regenerator = __webpack_require__("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _layout = __webpack_require__("antd/lib/layout");

var _layout2 = _interopRequireDefault(_layout);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec,
    _class,
    _jsxFileName = '/home/fadiqua/nextjs-starter-antd/components/NavBar/index.js';

var _style = __webpack_require__("styled-jsx/style");

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _router = __webpack_require__("next/router");

var _router2 = _interopRequireDefault(_router);

var _head = __webpack_require__("next/head");

var _head2 = _interopRequireDefault(_head);

var _link = __webpack_require__("next/link");

var _link2 = _interopRequireDefault(_link);

var _mobxReact = __webpack_require__("mobx-react");

var _universalCookie = __webpack_require__("universal-cookie");

var _universalCookie2 = _interopRequireDefault(_universalCookie);

var _Authenticate = __webpack_require__("./services/Authenticate.js");

var _Authenticate2 = _interopRequireDefault(_Authenticate);

var _index = __webpack_require__("./components/NavBar/index.scss");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = _layout2.default.Header;
var NavBar = (_dec = (0, _mobxReact.inject)('store'), _dec(_class = (0, _mobxReact.observer)(_class = function (_Component) {
  _inherits(NavBar, _Component);

  function NavBar(props) {
    _classCallCheck(this, NavBar);

    var _this = _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).call(this, props));

    _this.handleSignoutSubmit = _this._handleSignoutSubmit.bind(_this);
    return _this;
  }

  _createClass(NavBar, [{
    key: '_handleSignoutSubmit',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var authStore, cookies;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                authStore = this.props.store.authStore;
                // Save current URL so user is redirected back here after signing out

                cookies = new _universalCookie2.default();

                cookies.set('redirect_url', window.location.pathname, { path: '/' });
                _context.next = 6;
                return _Authenticate2.default.signout();

              case 6:
                authStore.signout();
                _router2.default.push('/');

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function _handleSignoutSubmit(_x) {
        return _ref.apply(this, arguments);
      }

      return _handleSignoutSubmit;
    }()
  }, {
    key: 'render',
    value: function render() {
      var authStore = this.props.store.authStore;

      console.log('token ', this.props.store.authStore.token);
      var navigateMenu = _react2.default.createElement(
        _menu2.default,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          }
        },
        _react2.default.createElement(
          _menu2.default.Item,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            }
          },
          _react2.default.createElement(
            'a',
            { href: '//localhost:3000?lang=en', __source: {
                fileName: _jsxFileName,
                lineNumber: 38
              }
            },
            'En'
          )
        ),
        _react2.default.createElement(
          _menu2.default.Item,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            }
          },
          _react2.default.createElement(
            'a',
            { href: '//localhost:3000?lang=ar', __source: {
                fileName: _jsxFileName,
                lineNumber: 41
              }
            },
            'Ar'
          )
        ),
        _react2.default.createElement(_menu2.default.Divider, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          }
        }),
        _react2.default.createElement(
          _menu2.default.Item,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            }
          },
          _react2.default.createElement(
            _link2.default,
            { prefetch: true, href: '/login', __source: {
                fileName: _jsxFileName,
                lineNumber: 45
              }
            },
            _react2.default.createElement(
              'a',
              { href: '/login', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 46
                }
              },
              'Login'
            )
          )
        ),
        _react2.default.createElement(
          _menu2.default.Item,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 49
            }
          },
          _react2.default.createElement(
            _link2.default,
            { prefetch: true, href: '/examples/protected', __source: {
                fileName: _jsxFileName,
                lineNumber: 50
              }
            },
            _react2.default.createElement(
              'a',
              { href: '/examples/protected', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 51
                }
              },
              'Protected'
            )
          )
        )
      );
      return _react2.default.createElement(
        Header,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          }
        },
        _react2.default.createElement(
          'div',
          {
            className: 'jsx-' + _index2.default.__scopedHash + ' ' + 'logo',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            }
          },
          _react2.default.createElement(
            _link2.default,
            { prefetch: true, href: '/', __source: {
                fileName: _jsxFileName,
                lineNumber: 59
              }
            },
            _react2.default.createElement(
              'span',
              {
                className: 'jsx-' + _index2.default.__scopedHash,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 60
                }
              },
              'logo'
            )
          )
        ),
        _react2.default.createElement(
          _menu2.default,
          { mode: 'horizontal', theme: 'dark', selectedKeys: [], style: { lineHeight: '64px' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 65
            }
          },
          _react2.default.createElement(
            _menu2.default.Item,
            { key: '123', __source: {
                fileName: _jsxFileName,
                lineNumber: 66
              }
            },
            _react2.default.createElement(
              _dropdown2.default,
              { overlay: navigateMenu, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 67
                }
              },
              _react2.default.createElement(
                'a',
                {
                  className: 'jsx-' + _index2.default.__scopedHash,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                  }
                },
                'Examples ',
                _react2.default.createElement(_icon2.default, { type: 'down', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                  }
                })
              )
            )
          ),
          authStore.isAuthenticated && _react2.default.createElement(
            _menu2.default.Item,
            { key: 'logout', __source: {
                fileName: _jsxFileName,
                lineNumber: 74
              }
            },
            _react2.default.createElement(
              'a',
              { onClick: this.handleSignoutSubmit, className: 'jsx-' + _index2.default.__scopedHash,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 75
                }
              },
              'logout'
            )
          )
        ),
        _react2.default.createElement(_style2.default, {
          styleId: _index2.default.__scopedHash,
          css: _index2.default.__scoped
        })
      );
    }
  }]);

  return NavBar;
}(_react.Component)) || _class) || _class);
exports.default = NavBar;

/***/ }),

/***/ "./components/NavBar/index.scss":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


;

(function () {
  "use strict";

  module.exports = ".logo {\n  height: 31px;\n  color: white;\n  float: left;\n  margin-right: 32px;\n  cursor: pointer; }\n";
})();

/***/ }),

/***/ "./components/PageWithIntl.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _jsxFileName = '/home/fadiqua/nextjs-starter-antd/components/PageWithIntl.js';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _universalCookie = __webpack_require__("universal-cookie");

var _universalCookie2 = _interopRequireDefault(_universalCookie);

var _router = __webpack_require__("next/router");

var _router2 = _interopRequireDefault(_router);

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _reactIntl = __webpack_require__("react-intl");

var _localeProvider = __webpack_require__("antd/lib/locale-provider");

var _localeProvider2 = _interopRequireDefault(_localeProvider);

var _mobxReact = __webpack_require__("mobx-react");

var _mobxStateTree = __webpack_require__("mobx-state-tree");

var _stores = __webpack_require__("./stores/index.js");

var _Authenticate = __webpack_require__("./services/Authenticate.js");

var _Authenticate2 = _interopRequireDefault(_Authenticate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Register React Intl's locale data for the user's locale in the browser. This
// locale data was added to the page by `pages/_document.js`. This only happens
// once, on initial page load in the browser.
if (typeof window !== 'undefined' && window.ReactIntlLocaleData) {
  Object.keys(window.ReactIntlLocaleData).forEach(function (lang) {
    (0, _reactIntl.addLocaleData)(window.ReactIntlLocaleData[lang]);
  });
}

// auth-required, so should redirect to login if not authenticated
// no-auth-required, doesn't matter auth here
// redirect-if-auth, redirect if to home page or profile page if is authenticated


exports.default = function (Page) {
  var authStatus = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'no-auth-required';

  var IntlPage = (0, _reactIntl.injectIntl)(Page);

  return function (_Component) {
    _inherits(PageWithIntl, _Component);

    _createClass(PageWithIntl, null, [{
      key: 'getInitialProps',
      value: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(context) {
          var props, req, res, query, isServer, session, store, redirect, cookies;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  props = void 0;

                  if (!(typeof Page.getInitialProps === 'function')) {
                    _context.next = 5;
                    break;
                  }

                  _context.next = 4;
                  return Page.getInitialProps(context);

                case 4:
                  props = _context.sent;

                case 5:
                  // Get the `locale` and `messages` from the request object on the server.
                  // In the browser, use the same values that the server serialized.
                  req = context.req, res = context.res, query = context.query;
                  isServer = !!req;
                  _context.next = 9;
                  return _Authenticate2.default.init({
                    req: req, force: true
                  });

                case 9:
                  session = _context.sent;
                  store = (0, _stores.initStore)(isServer);


                  if (session.token) {
                    store.authStore.authenticate(session);
                  }
                  redirect = authStatus === 'auth-required' && !session.token ? '/login' : authStatus === 'redirect-if-auth' && session.token ? '/' : null;

                  if (redirect !== null) {
                    if (isServer && res) {
                      res.writeHead(302, { Location: redirect });
                      res.end();
                    } else {
                      _router2.default.push(redirect);
                    }
                  }

                  if (query.redirect) {
                    cookies = new _universalCookie2.default(req && req.headers.cookie ? req.headers.cookie : null);

                    cookies.set('redirect_url', query.redirect, { path: '/' });
                  }

                  return _context.abrupt('return', _extends({}, props, { isServer: isServer, session: session, initialState: (0, _mobxStateTree.getSnapshot)(store) }));

                case 16:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function getInitialProps(_x2) {
          return _ref.apply(this, arguments);
        }

        return getInitialProps;
      }()
    }]);

    function PageWithIntl(props) {
      _classCallCheck(this, PageWithIntl);

      var _this = _possibleConstructorReturn(this, (PageWithIntl.__proto__ || Object.getPrototypeOf(PageWithIntl)).call(this, props));

      _this.store = (0, _stores.initStore)(props.isServer, props.initialState);
      return _this;
    }

    _createClass(PageWithIntl, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            locale = _props.locale,
            messages = _props.messages,
            antdLocale = _props.antdLocale,
            now = _props.now,
            props = _objectWithoutProperties(_props, ['locale', 'messages', 'antdLocale', 'now']);

        return _react2.default.createElement(
          _localeProvider2.default,
          { locale: antdLocale, __source: {
              fileName: _jsxFileName,
              lineNumber: 76
            }
          },
          _react2.default.createElement(
            _reactIntl.IntlProvider,
            { locale: locale || 'en', messages: messages, initialNow: now, __source: {
                fileName: _jsxFileName,
                lineNumber: 77
              }
            },
            _react2.default.createElement(
              _mobxReact.Provider,
              { store: this.store, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 78
                }
              },
              _react2.default.createElement(IntlPage, _extends({}, props, {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 79
                }
              }))
            )
          )
        );
      }
    }]);

    return PageWithIntl;
  }(_react.Component);
};

/***/ }),

/***/ "./package.json":
/***/ (function(module, exports) {

module.exports = {"name":"andreas-test","version":"5.2.0","description":"A starter Next.js project","author":"Fadi quader","license":"ISC","main":"index.js","dependencies":{"antd":"^3.2.0","autoprefixer":"^7.2.6","axios":"^0.18.0","babel-core":"^6.26.0","babel-loader":"^7.1.2","babel-plugin-wrap-in-js":"^1.1.1","connect-mongo":"^2.0.1","cookie-parser":"^1.4.3","css-loader":"^0.28.9","dotenv":"^5.0.0","express":"^4.16.2","express-session":"^1.15.6","intl":"^1.2.5","isomorphic-fetch":"^2.2.1","less":"^2.7.3","less-loader":"^4.0.5","lusca":"^1.5.2","mobx":"^3.5.1","mobx-react":"^4.4.2","mobx-state-tree":"^1.3.1","next":"^5.0.0","nprogress":"^0.2.0","passport":"^0.4.0","passport-facebook":"^2.1.1","passport-google-oauth":"^1.0.0","passport-twitter":"^1.0.4","popper.js":"^1.12.3","raw-loader":"^0.5.1","react":"^16.2.0","react-dom":"^16.2.0","react-intl":"^2.4.0","universal-cookie":"^2.1.2"},"devDependencies":{"babel-plugin-dynamic-import-node":"^1.2.0","babel-plugin-import":"^1.6.3","babel-plugin-inline-dotenv":"^1.1.2","babel-plugin-module-resolver":"^3.0.0","babel-plugin-react-intl":"^2.4.0","babel-plugin-transform-decorators-legacy":"^1.3.4","babel-plugin-transform-inline-environment-variables":"^0.3.0","babel-polyfill":"^6.26.0","babel-preset-es2015":"^6.24.1","babel-preset-es2016":"^6.24.1","babel-preset-stage-0":"^6.24.1","babel-preset-stage-2":"^6.24.1","babel-register":"^6.26.0","eslint":"^4.5.0","eslint-config-xo":"^0.18.2","eslint-config-xo-react":"^0.13.0","eslint-config-xo-space":"^0.16.0","eslint-plugin-react":"^7.3.0","extract-text-webpack-plugin":"^3.0.2","ignore-loader":"^0.1.2","mobx-devtools-mst":"^0.9.9","node-sass":"^4.7.2","postcss-cssnext":"^3.1.0","postcss-easy-import":"^3.0.0","postcss-loader":"^2.1.0","precss":"^3.1.0","sass-loader":"^6.0.6","style-loader":"^0.19.1","styled-jsx-css-loader":"^0.3.0","styled-jsx-plugin-sass":"^0.2.3","webpack":"3.10.0","webpack-bundle-analyzer":"^2.11.1","xo":"^0.18.2"},"optionalDependencies":{"fsevents":"*"},"scripts":{"test":"xo","clean":"rm -rf .next/static","dev":"NODE_ENV=development PORT=3000 node server/bootstrap.js","build":"npm run clean && next build  && node ./scripts/default-lang.js","start":"node server/bootstrap.js","postinstall":"next build "},"engines":{"node":"7.x.x"},"xo":{"space:":2,"semicolon":false,"extends":["xo-space","xo-react/space"],"ignores":["next.config.js"]},"now":{"name":"nextjs-starter","alias":"nextjs-starter.now.sh"}}

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec,
    _class,
    _jsxFileName = '/home/fadiqua/nextjs-starter-antd/pages/index.js';

// import Page from '../components/page'

// import Home from '../components/Home';


var _link = __webpack_require__("next/link");

var _link2 = _interopRequireDefault(_link);

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__("mobx-react");

var _reactIntl = __webpack_require__("react-intl");

var _Layout = __webpack_require__("./components/Layout/index.js");

var _Layout2 = _interopRequireDefault(_Layout);

var _NProgress = __webpack_require__("./components/NProgress.js");

var _NProgress2 = _interopRequireDefault(_NProgress);

var _PageWithIntl = __webpack_require__("./components/PageWithIntl.js");

var _PageWithIntl2 = _interopRequireDefault(_PageWithIntl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = (_dec = (0, _mobxReact.inject)('store'), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      var _props$store = this.props.store,
          postStore = _props$store.postStore,
          authStore = _props$store.authStore;

      if (postStore.isLoading) {
        return _react2.default.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            }
          },
          'loading...'
        );
      }
      // console.log('auth ', authStore)
      return _react2.default.createElement(
        _Layout2.default,
        _extends({}, this.props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          }
        }),
        _react2.default.createElement(_NProgress2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          }
        }),
        _react2.default.createElement(
          'div',
          { className: 'text-light rounded-0', style: {
              backgroundColor: 'rgba(73,155,234,1)',
              background: 'radial-gradient(ellipse at center, rgba(73,155,234,1) 0%, rgba(32,124,229,1) 100%)',
              boxShadow: 'inset 0 0 100px rgba(0,0,0,0.1)'
            }, __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            }
          },
          _react2.default.createElement(
            'div',
            { className: 'container', __source: {
                fileName: _jsxFileName,
                lineNumber: 34
              }
            },
            _react2.default.createElement(
              'h1',
              { className: 'display-2 mb-3', style: { fontWeight: 300 }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 35
                }
              },
              _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'projectName', defaultMessage: 'Starter Project', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 36
                }
              })
            ),
            _react2.default.createElement(
              'p',
              { className: 'lead mb-5', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 38
                }
              },
              _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'projectDescription', defaultMessage: 'A reference and template for react projects', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 39
                }
              })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'container', __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            }
          },
          _react2.default.createElement(
            'ol',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 46
              }
            },
            postStore.posts.values().map(function (post) {
              return _react2.default.createElement(
                'li',
                { key: post.id, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                  }
                },
                _react2.default.createElement(
                  'a',
                  {
                    href: '/post/' + post.id,
                    onClick: function onClick(e) {
                      e.preventDefault();
                      return false;
                    },
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 49
                    }
                  },
                  post.title
                ),
                _react2.default.createElement(
                  'div',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 58
                    }
                  },
                  post.body
                )
              );
            })
          )
        )
      );
    }
  }]);

  return Home;
}(_react2.default.Component)) || _class) || _class);
exports.default = (0, _PageWithIntl2.default)(Home);

/***/ }),

/***/ "./services/Authenticate.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _regenerator = __webpack_require__("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _isomorphicFetch = __webpack_require__("isomorphic-fetch");

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _axios = __webpack_require__("axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Authenticate = function () {
  function Authenticate() {
    _classCallCheck(this, Authenticate);
  }

  _createClass(Authenticate, null, [{
    key: 'init',
    value: function init(_ref) {
      var req = _ref.req,
          force = _ref.force;

      if (req) {
        if (req.session && req.session.token) {
          var _req$session = req.session,
              token = _req$session.token,
              refreshToken = _req$session.refreshToken;

          return this._getUserData(token);
        }
        return new Promise(function (resolve) {
          resolve({});
        });
      } else if (typeof window !== 'undefined') {
        var _token = this._getLocalStore('token');
        var _refreshToken = this._getLocalStore('refreshToken');
        if (_token) {
          return this._getUserData(_token);
        }
        return new Promise(function (resolve) {
          resolve({});
        });
      }
    }
  }, {
    key: '_getUserData',
    value: function _getUserData(token, refreshToken) {
      var _this = this;

      return (0, _isomorphicFetch2.default)('http://localhost:3000/api/me', {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          'x-token': token,
          'x-refresh-token': null
        }
      }).then(function (res) {
        return res.json();
      }).then(function (data) {
        if (data && data.token) {
          if (typeof window !== 'undefined') _this._saveLocalStore('token', data.token);
          return data;
        }
        return {};
      });
    }
  }, {
    key: 'csrfToken',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt('return', (0, _isomorphicFetch2.default)('/auth/csrf', {
                  credentials: 'same-origin'
                }).then(function (response) {
                  if (response.ok) {
                    return response;
                  } else {
                    return Promise.reject(Error('Unexpected response when trying to get CSRF token'));
                  }
                }).then(function (response) {
                  return response.json();
                }).then(function (data) {
                  return data.csrfToken;
                }).catch(function () {
                  return Error('Unable to get CSRF token');
                }));

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function csrfToken() {
        return _ref2.apply(this, arguments);
      }

      return csrfToken;
    }()
  }, {
    key: 'signout',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // Signout from the server
                // const csrfToken = await this.csrfToken()
                // const formData = { _csrf: csrfToken }

                // Encoded form parser for sending data in the body
                // const encodedForm = Object.keys(formData).map((key) => {
                //   return encodeURIComponent(key) + '=' + encodeURIComponent(formData[key])
                // }).join('&')

                // Remove cached session data
                this._removeLocalStore('token');
                // this._removeLocalStore('refreshToken');
                return _context2.abrupt('return', (0, _isomorphicFetch2.default)('http://localhost:3000/api/signout', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                  },
                  // body: encodedForm,
                  credentials: 'same-origin'
                }).then(function () {
                  return true;
                }).catch(function () {
                  return Error('Unable to sign out');
                }));

              case 2:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function signout() {
        return _ref3.apply(this, arguments);
      }

      return signout;
    }()
  }, {
    key: '_getLocalStore',
    value: function _getLocalStore(name) {
      // return localStorage.getItem(name) || null
      try {
        return JSON.parse(localStorage.getItem(name));
      } catch (err) {
        return null;
      }
    }
  }, {
    key: '_saveLocalStore',
    value: function _saveLocalStore(name, data) {
      // localStorage.setItem(name, data)
      try {
        localStorage.setItem(name, JSON.stringify(data));
        return true;
      } catch (err) {
        return false;
      }
    }
  }, {
    key: '_removeLocalStore',
    value: function _removeLocalStore(name) {
      try {
        localStorage.removeItem(name);
        return true;
      } catch (err) {
        return false;
      }
    }
  }]);

  return Authenticate;
}();

exports.default = Authenticate;

/***/ }),

/***/ "./stores/AuthStore.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthStore = undefined;

var _mobxStateTree = __webpack_require__("mobx-state-tree");

var _axios = __webpack_require__("axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AuthStore = exports.AuthStore = _mobxStateTree.types.model("AuthStore", {
  isAuthenticated: false,
  token: _mobxStateTree.types.optional(_mobxStateTree.types.string, ''),
  username: _mobxStateTree.types.optional(_mobxStateTree.types.string, '')
}).views(function (self) {
  return {
    get store() {
      return (0, _mobxStateTree.getParent)(self);
    }
  };
}).actions(function (self) {
  return {
    authenticate: function authenticate(data) {
      self.isAuthenticated = true;
      self.token = data.token;
      self.username = data.me.username;
    },
    signout: function signout() {
      self.isAuthenticated = false;
      self.token = '';
      self.username = '';
    }
  };
});

/***/ }),

/***/ "./stores/LoginStore.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoginStore = undefined;

var _regenerator = __webpack_require__("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _mobxStateTree = __webpack_require__("mobx-state-tree");

var _axios = __webpack_require__("axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoginStore = exports.LoginStore = _mobxStateTree.types.model("PostStore", {
  status: 'pending',
  username: _mobxStateTree.types.optional(_mobxStateTree.types.string, ''),
  password: _mobxStateTree.types.optional(_mobxStateTree.types.string, '')
}).views(function (self) {
  return {
    get store() {
      return (0, _mobxStateTree.getParent)(self);
    }
  };
}).actions(function (self) {
  return {
    changeStatus: function changeStatus(status) {
      self.status = status;
    },

    tryLogin: (0, _mobxStateTree.flow)( /*#__PURE__*/_regenerator2.default.mark(function login(_ref) {
      var username = _ref.username,
          password = _ref.password;
      var res;
      return _regenerator2.default.wrap(function login$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              console.log('username ', username, 'password ', password);
              _context.next = 4;
              return _axios2.default.post("/api/login", {
                username: username,
                password: password
              });

            case 4:
              res = _context.sent;

              localStorage.setItem('token', res.data.token);
              // self.store.authStore.authenticate(res.data)
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);

              console.error("Failed to login ", _context.t0);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, login, this, [[0, 8]]);
    }))
  };
});

/***/ }),

/***/ "./stores/PostStore.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PostStore = exports.Post = undefined;

var _regenerator = __webpack_require__("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _mobxStateTree = __webpack_require__("mobx-state-tree");

var _axios = __webpack_require__("axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Post = exports.Post = _mobxStateTree.types.model("Post", {
  id: _mobxStateTree.types.identifier(_mobxStateTree.types.number),
  // id: types.number,
  userId: _mobxStateTree.types.number,
  title: _mobxStateTree.types.string,
  body: _mobxStateTree.types.string
});

var PostStore = exports.PostStore = _mobxStateTree.types.model("PostStore", {
  isLoading: false,
  posts: _mobxStateTree.types.map(Post)
  // posts: types.array(Post)
}).views(function (self) {
  return {
    get store() {
      return (0, _mobxStateTree.getParent)(self);
    }
  };
}).actions(function (self) {
  return {
    markLoading: function markLoading(loading) {
      self.isLoading = loading;
    },
    updatePosts: function updatePosts(data) {
      data.forEach(function (post) {
        if (typeof post.userId === 'string') return;
        self.posts.put(post);
      });
    },

    loadPosts: (0, _mobxStateTree.flow)( /*#__PURE__*/_regenerator2.default.mark(function loadPosts() {
      var res;
      return _regenerator2.default.wrap(function loadPosts$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _axios2.default.get("https://jsonplaceholder.typicode.com/posts");

            case 3:
              res = _context.sent;

              self.updatePosts(res.data);
              self.markLoading(false);
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);

              console.error("Failed to load posts ", _context.t0);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, loadPosts, this, [[0, 8]]);
    }))
  };
});

function sortBooks(books) {
  return books.filter(function (b) {
    return b.isAvailable;
  }).sort(function (a, b) {
    return a.name > b.name ? 1 : a.name === b.name ? 0 : -1;
  });
}

/***/ }),

/***/ "./stores/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Store = undefined;
exports.initStore = initStore;

var _mobxStateTree = __webpack_require__("mobx-state-tree");

var _PostStore = __webpack_require__("./stores/PostStore.js");

var _LoginStore = __webpack_require__("./stores/LoginStore.js");

var _AuthStore = __webpack_require__("./stores/AuthStore.js");

var store = null;
var Store = exports.Store = _mobxStateTree.types.model('Store', {
  postStore: _mobxStateTree.types.optional(_PostStore.PostStore, {
    posts: {}
    // posts: []
  }),
  name: 'fadi quader',
  loginStore: _mobxStateTree.types.optional(_LoginStore.LoginStore, {}),
  authStore: _mobxStateTree.types.optional(_AuthStore.AuthStore, {})
}).views(function (self) {
  return {
    // get isLoading() {
    //   return self.bookStore.isLoading
    // },
    // get posts() {
    //   return self.postStore.posts
    // }
  };
}).actions(function (self) {
  return {
    afterCreate: function afterCreate() {
      self.postStore.loadPosts();
    }
  };
});

// const Store = types
//   .model({
//     lastUpdate: types.Date,
//     light: false
//   })
//   .actions((self) => {
//     let timer
//     function start () {
//       timer = setInterval(() => {
//         // mobx-state-tree doesn't allow anonymous callbacks changing data
//         // pass off to another action instead
//         self.update()
//       }, 1000)
//     }
//
//     function update () {
//       self.lastUpdate = Date.now()
//       self.light = true
//     }
//
//     function stop () {
//       clearInterval(timer)
//     }
//
//     return { start, stop, update }
//   })

function initStore(isServer) {
  var snapshot = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  // const fetcher = url => fetch(url).then(response => response.json());
  if (isServer) {
    store = Store.create({}, {
      // fetch: fetcher,
      alert: function alert(m) {
        return console.log(m);
      } // Noop for demo: window.alert(m)
    });
  }
  if (store === null) {
    store = Store.create({}, {
      // fetch: fetcher,
      alert: function alert(m) {
        return console.log(m);
      } // Noop for demo: window.alert(m)
    });
  }
  if (snapshot) {
    (0, _mobxStateTree.applySnapshot)(store, snapshot);
  }
  return store;
}

/***/ }),

/***/ "./styles/ant.less":
/***/ (function(module, exports) {

throw new Error("Module build failed: \n\n\n@primary-color: #b52348,\n                      ^\nDirective options not recognised\n      in /home/fadiqua/nextjs-starter-antd/styles/ant.less (line 3, column 24)");

/***/ }),

/***/ "./styles/main.scss":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


;

(function () {
  "use strict";

  module.exports = ".text-center {\n  text-align: center; }\n\n.container {\n  margin: 0 auto;\n  width: 80%;\n  max-width: 1200px; }\n\n@media screen and (max-width: 768px) {\n  .container {\n    width: 90%; } }\n";
})();

/***/ }),

/***/ "./styles/nprogress.css":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


;

(function () {
  "use strict";

  module.exports = "/* Make clicks pass-through */\n#nprogress {\n  pointer-events: none;\n}\n#nprogress .bar {\n  background: #29d;\n\n  position: fixed;\n  z-index: 1031;\n  top: 0;\n  left: 0;\n\n  width: 100%;\n  height: 2px;\n}\n/* Fancy blur effect */\n#nprogress .peg {\n  display: block;\n  position: absolute;\n  right: 0px;\n  width: 100px;\n  height: 100%;\n  -webkit-box-shadow: 0 0 10px #29d, 0 0 5px #29d;\n          box-shadow: 0 0 10px #29d, 0 0 5px #29d;\n  opacity: 1.0;\n\n  -webkit-transform: rotate(3deg) translate(0px, -4px);\n      -ms-transform: rotate(3deg) translate(0px, -4px);\n          transform: rotate(3deg) translate(0px, -4px);\n}\n/* Remove these to get rid of the spinner */\n#nprogress .spinner {\n  display: block;\n  position: fixed;\n  z-index: 1031;\n  top: 15px;\n  right: 15px;\n}\n#nprogress .spinner-icon {\n  width: 18px;\n  height: 18px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n\n  border: solid 2px transparent;\n  border-top-color: #29d;\n  border-left-color: #29d;\n  border-radius: 50%;\n\n  -webkit-animation: nprogress-spinner 400ms linear infinite;\n          animation: nprogress-spinner 400ms linear infinite;\n}\n.nprogress-custom-parent {\n  overflow: hidden;\n  position: relative;\n}\n.nprogress-custom-parent #nprogress .spinner,\n.nprogress-custom-parent #nprogress .bar {\n  position: absolute;\n}\n@-webkit-keyframes nprogress-spinner {\n  0%   { -webkit-transform: rotate(0deg); }\n  100% { -webkit-transform: rotate(360deg); }\n}\n@keyframes nprogress-spinner {\n  0%   { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n  100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n}\n\n";
})();

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "antd/lib/dropdown":
/***/ (function(module, exports) {

module.exports = require("antd/lib/dropdown");

/***/ }),

/***/ "antd/lib/icon":
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon");

/***/ }),

/***/ "antd/lib/layout":
/***/ (function(module, exports) {

module.exports = require("antd/lib/layout");

/***/ }),

/***/ "antd/lib/locale-provider":
/***/ (function(module, exports) {

module.exports = require("antd/lib/locale-provider");

/***/ }),

/***/ "antd/lib/menu":
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu");

/***/ }),

/***/ "axios":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "babel-runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ "isomorphic-fetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "mobx-react":
/***/ (function(module, exports) {

module.exports = require("mobx-react");

/***/ }),

/***/ "mobx-state-tree":
/***/ (function(module, exports) {

module.exports = require("mobx-state-tree");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-intl":
/***/ (function(module, exports) {

module.exports = require("react-intl");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "universal-cookie":
/***/ (function(module, exports) {

module.exports = require("universal-cookie");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map