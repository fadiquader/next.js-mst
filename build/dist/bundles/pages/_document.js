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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_document.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _regenerator = __webpack_require__("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/home/fadiqua/nextjs-starter-antd/pages/_document.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _document = __webpack_require__("next/document");

var _document2 = _interopRequireDefault(_document);

var _server = __webpack_require__("styled-jsx/server");

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var isProd = (process && process.env && "development" || 'development') === 'production';

var DefaultDocument = function (_Document) {
  _inherits(DefaultDocument, _Document);

  function DefaultDocument() {
    _classCallCheck(this, DefaultDocument);

    return _possibleConstructorReturn(this, (DefaultDocument.__proto__ || Object.getPrototypeOf(DefaultDocument)).apply(this, arguments));
  }

  _createClass(DefaultDocument, [{
    key: 'render',
    value: function render() {
      /**
       * Here we use _document.js to add a "lang" propery to the HTML object if
       * one is set on the page.
       **/
      var _props = this.props,
          dev = _props.dev,
          __NEXT_DATA__ = _props.__NEXT_DATA__;

      var lang = __NEXT_DATA__.props.locale || 'en';
      var polyfill = 'https://cdn.polyfill.io/v2/polyfill.min.js?features=Intl.~locale.' + lang;
      var assetPrefix = __NEXT_DATA__.assetPrefix;

      var buildId = !dev ? __NEXT_DATA__.buildId : null;

      return _react2.default.createElement(
        'html',
        { lang: lang, __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          }
        },
        _react2.default.createElement(_document.Head, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          }
        }),
        _react2.default.createElement(
          'body',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 45
            }
          },
          this.props.customValue,
          _react2.default.createElement(_document.Main, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            }
          }),
          _react2.default.createElement('script', { src: polyfill, __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            }
          }),
          _react2.default.createElement('script', {
            dangerouslySetInnerHTML: {
              __html: this.props.localeDataScript
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 49
            }
          }),
          _react2.default.createElement(_document.NextScript, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 54
            }
          })
        )
      );
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(context) {
        var props, _context$renderPage, html, head, errorHtml, chunks, _context$req, locale, localeDataScript, styles;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _get(DefaultDocument.__proto__ || Object.getPrototypeOf(DefaultDocument), 'getInitialProps', this).call(this, context);

              case 2:
                props = _context.sent;
                _context$renderPage = context.renderPage(), html = _context$renderPage.html, head = _context$renderPage.head, errorHtml = _context$renderPage.errorHtml, chunks = _context$renderPage.chunks;
                _context$req = context.req, locale = _context$req.locale, localeDataScript = _context$req.localeDataScript;
                styles = (0, _server2.default)();
                return _context.abrupt('return', _extends({}, props, {
                  locale: locale,
                  localeDataScript: localeDataScript,
                  html: html, head: head,
                  errorHtml: errorHtml,
                  chunks: chunks, styles: styles
                }));

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return DefaultDocument;
}(_document2.default);

exports.default = DefaultDocument;

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/_document.js");


/***/ }),

/***/ "babel-runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ "next/document":
/***/ (function(module, exports) {

module.exports = require("next/document");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/server":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/server");

/***/ })

/******/ });
//# sourceMappingURL=_document.js.map