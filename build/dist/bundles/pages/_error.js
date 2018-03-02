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

/***/ "./pages/_error.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var _jsxFileName = '/home/fadiqua/nextjs-starter-antd/pages/_error.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__("next/head");

var _head2 = _interopRequireDefault(_head);

var _link = __webpack_require__("next/link");

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Creating a page named _error.js lets you override HTTP error messages
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


// import Styles from '../css/index.scss'

var Error = function (_React$Component) {
  _inherits(Error, _React$Component);

  function Error() {
    _classCallCheck(this, Error);

    return _possibleConstructorReturn(this, (Error.__proto__ || Object.getPrototypeOf(Error)).apply(this, arguments));
  }

  _createClass(Error, [{
    key: 'render',
    value: function render() {
      {/*<style dangerouslySetInnerHTML={{__html: Styles}}/>*/}
      var response;
      switch (this.props.errorCode) {
        case 200: // Also display a 404 if someone requests /_error explicitly
        case 404:
          response = _react2.default.createElement(
            'div',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 30
              }
            },
            _react2.default.createElement(_head2.default, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 31
              }
            }),
            _react2.default.createElement(
              'div',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 33
                }
              },
              _react2.default.createElement(
                'h1',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                  }
                },
                'Page Not Found'
              ),
              _react2.default.createElement(
                'p',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                  }
                },
                'The page ',
                _react2.default.createElement(
                  'strong',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 35
                    }
                  },
                  this.props.url.pathname
                ),
                ' does not exist.'
              ),
              _react2.default.createElement(
                'p',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                  }
                },
                _react2.default.createElement(
                  _link2.default,
                  { href: '/', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 36
                    }
                  },
                  _react2.default.createElement(
                    'a',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 36
                      }
                    },
                    'Home'
                  )
                )
              )
            )
          );
          break;
        case 500:
          response = _react2.default.createElement(
            'div',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 43
              }
            },
            _react2.default.createElement(_head2.default, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 44
              }
            }),
            _react2.default.createElement(
              'div',
              { className: 'pt-5 text-center', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 47
                }
              },
              _react2.default.createElement(
                'h1',
                { className: 'display-4', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                  }
                },
                'Internal Server Error'
              ),
              _react2.default.createElement(
                'p',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                  }
                },
                'An internal server error occurred.'
              )
            )
          );
          break;
        default:
          response = _react2.default.createElement(
            'div',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 56
              }
            },
            _react2.default.createElement(_head2.default, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 57
              }
            }),
            _react2.default.createElement(
              'div',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 60
                }
              },
              _react2.default.createElement(
                'h1',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                  }
                },
                'HTTP ',
                this.props.errorCode,
                ' Error'
              ),
              _react2.default.createElement(
                'p',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                  }
                },
                'An ',
                _react2.default.createElement(
                  'strong',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 63
                    }
                  },
                  'HTTP ',
                  this.props.errorCode
                ),
                ' error occurred while trying to access ',
                _react2.default.createElement(
                  'strong',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 64
                    }
                  },
                  this.props.url.pathname
                )
              )
            )
          );
      }

      return response;
    }
  }], [{
    key: 'propTypes',
    value: function propTypes() {
      return {
        errorCode: _react2.default.PropTypes.number.isRequired,
        url: _react2.default.PropTypes.string.isRequired
      };
    }
  }, {
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var res = _ref.res,
          xhr = _ref.xhr;

      var errorCode = res ? res.statusCode : xhr ? xhr.status : null;
      return { errorCode: errorCode };
    }
  }]);

  return Error;
}(_react2.default.Component);

exports.default = Error;

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/_error.js");


/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=_error.js.map