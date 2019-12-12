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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\n\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_components_App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/App */ \"./src/components/App.js\");\n\n\n\n\n\n\nconst PORT = process.env.PORT || 3006;\nconst app = express__WEBPACK_IMPORTED_MODULE_3___default()();\napp.use(express__WEBPACK_IMPORTED_MODULE_3___default.a.static('./build'));\napp.get('/page*', (req, res) => {\n  const app = react_dom_server__WEBPACK_IMPORTED_MODULE_4___default.a.renderToString(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_components_App__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null));\n  const indexFile = path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve('./build/index.html');\n  fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFile(indexFile, 'utf8', (err, data) => {\n    if (err) {\n      console.error('Something went wrong:', err);\n      return res.status(500).send('Oops, better luck next time!');\n    }\n\n    return res.send(data.replace('<div id=\"root\"></div>', `<div id=\"root\">${app}</div>`));\n  });\n});\napp.listen(PORT, () => {\n  console.log(`😎 Server is listening on port ${PORT}`);\n}); // // \"start\": \"react-scripts start\",\n// // \"build\": \"react-scripts build\",\n// // \"test\": \"react-scripts test\",\n// // \"eject\": \"react-scripts eject\"\n// require('ignore-styles')\n// require('@babel/register')({\n//   ignore: [/(node_modules)/],\n//   presets: ['@babel/preset-env', '@babel/preset-react']\n// })\n// require('./server')\n// import path from 'path'\n// import fs from 'fs'\n// import express from 'express'\n// import React from 'react'\n// import ReactDOMServer from 'react-dom/server'\n// import App from '../src/components/App'\n// const PORT = 8080\n// const app = express()\n// const router = express.Router()\n// const serverRenderer = (req, res, next) => {\n//   fs.readFile(path.resolve('./build/index.html'), 'utf8', (err, data) => {\n//     if (err) {\n//       console.error(err)\n//       return res.status(500).send('An error occurred')\n//     }\n//     return res.send(\n//       data.replace(\n//         '<div id=\"root\"></div>',\n//         `<div id=\"root\">${ReactDOMServer.renderToString(<App />)}</div>`\n//       )\n//     )\n//   })\n// }\n// router.use('^/$', serverRenderer)\n// router.use(\n//   express.static(path.resolve(__dirname, '..', 'build'), { maxAge: '30d' })\n// )\n// // tell the app to use the above rules\n// app.use(router)\n// // app.use(express.static('./build'))\n// app.listen(PORT, () => {\n//   console.log(`SSR running on port ${PORT}`)\n// })\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".App {\\n  text-align: center;\\n}\\n\\n.App-header {\\n  background-color: #282c34;\\n  height: 70px;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  font-size: calc(10px + 2vmin);\\n  color: white;\\n  padding: 20px;\\n  cursor: pointer;\\n}\\n\\n.spinner {\\n  height: 80px;\\n  margin: auto;\\n}\\n\\n.App-intro {\\n  font-size: large;\\n}\\n\\n/* new css for movie component */\\n\\n* {\\n  box-sizing: border-box;\\n}\\n\\n.movies {\\n  display: flex;\\n  flex-wrap: wrap;\\n  flex-direction: row;\\n}\\n\\n.App-header h2 {\\n  margin: 0;\\n}\\n\\n.add-movies {\\n  text-align: center;\\n}\\n\\n.add-movies button {\\n  font-size: 16px;\\n  padding: 8px;\\n  margin: 0 10px 30px 10px;\\n}\\n\\n.movie {\\n  padding: 5px 25px 10px 25px;\\n  max-width: 25%;\\n}\\n\\n.errorMessage {\\n  margin: auto;\\n  font-weight: bold;\\n  color: rgb(161, 15, 15);\\n}\\n\\n\\n.search {\\n  display: flex;\\n  flex-direction: row;\\n  flex-wrap: wrap;\\n  justify-content: center;\\n  margin-top: 10px;\\n}\\n\\n\\ninput[type=\\\"submit\\\"] {\\n  padding: 5px;\\n  background-color: transparent;\\n  color: black;\\n  border: 1px solid black;\\n  width: 80px;\\n  margin-left: 5px;\\n  cursor: pointer;\\n}\\n\\n\\ninput[type=\\\"submit\\\"]:hover {\\n  background-color: #282c34;\\n  color: antiquewhite;\\n}\\n\\n\\n.search > input[type=\\\"text\\\"]{\\n  width: 40%;\\n  min-width: 170px;\\n}\\n\\n@media screen and (min-width: 694px) and (max-width: 915px) {\\n  .movie {\\n    max-width: 33%;\\n  }\\n}\\n\\n@media screen and (min-width: 652px) and (max-width: 693px) {\\n  .movie {\\n    max-width: 50%;\\n  }\\n}\\n\\n\\n@media screen and (max-width: 651px) {\\n  .movie {\\n    max-width: 100%;\\n    margin: auto;\\n  }\\n}\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/App.css?");

/***/ }),

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../App.css */ \"./src/App.css\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ \"./src/components/Header.js\");\n/* harmony import */ var _Movie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Movie */ \"./src/components/Movie.js\");\n/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Search */ \"./src/components/Search.js\");\n\n\n\n\n\n\nconst MOVIE_API_URL = \"https://www.omdbapi.com/?s=man&apikey=c20e5c15\";\n\nconst App = () => {\n  const [loading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true);\n  const [movies, setMovies] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  const [errorMessage, setErrorMessage] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    fetch(MOVIE_API_URL).then(response => response.json()).then(jsonResponse => {\n      setMovies(jsonResponse.Search);\n      setLoading(false);\n    });\n  }, []);\n\n  const search = searchValue => {\n    setLoading(true);\n    setErrorMessage(null);\n    fetch(`https://www.omdbapi.com/?s=${searchValue}&page=10&apikey=c20e5c15`).then(response => response.json()).then(jsonResponse => {\n      if (jsonResponse.Response === \"True\") {\n        setMovies(jsonResponse.Search);\n        setLoading(false);\n      } else {\n        setErrorMessage(jsonResponse.Error);\n        setLoading(false);\n      }\n    });\n  };\n\n  const componentDidMount = () => {\n    console.log('ahihii'); // const script = document.createElement(\"script\");\n    // script.src = \"/static/libs/a1.js\";\n    // script.async = true;\n    // script.onload = () => this.scriptLoaded();\n    // document.body.appendChild(script);\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__[\"Helmet\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"title\", null, \"Main Page\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"App\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    text: \"My Movie\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Search__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    search: search\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"App-intro\"\n  }, \"Sharing a few of our favourite movies\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"movies\"\n  }, loading && !errorMessage ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"loading...\") : errorMessage ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"errorMessage\"\n  }, errorMessage) : movies.map((movie, index) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Movie__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    key: `${index}-${movie.Title}`,\n    movie: movie\n  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"script\", {\n    src: process.env.PUBLIC_URL + '/assets/js/a1.js'\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"script\", {\n    src: process.env.PUBLIC_URL + '/assets/js/a2.js'\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"script\", {\n    src: process.env.PUBLIC_URL + '/assets/js/a3.js'\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"script\", {\n    src: process.env.PUBLIC_URL + '/assets/css/a1.css'\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"script\", {\n    src: process.env.PUBLIC_URL + '/assets/css/a2.css'\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"script\", {\n    src: process.env.PUBLIC_URL + '/assets/css/a3.css'\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: process.env.PUBLIC_URL + '/assets/images/img1.png',\n    alt: \"\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: process.env.PUBLIC_URL + '/wrongpath/sth/error.png',\n    alt: \"\"\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/components/App.js?");

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst Header = props => {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"header\", {\n    className: \"App-header\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, props.text));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\n//# sourceURL=webpack:///./src/components/Header.js?");

/***/ }),

/***/ "./src/components/Movie.js":
/*!*********************************!*\
  !*** ./src/components/Movie.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst DEFAULT_PLACEHOLDER_IMAGE = \"https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg\";\n\nconst Movie = ({\n  movie\n}) => {\n  const poster = movie.Poster === \"N/A\" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"movie\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, movie.Title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    width: \"200\",\n    alt: `The movie titled: ${movie.Title}`,\n    src: poster\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"(\", movie.Year, \")\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Movie);\n\n//# sourceURL=webpack:///./src/components/Movie.js?");

/***/ }),

/***/ "./src/components/Search.js":
/*!**********************************!*\
  !*** ./src/components/Search.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst Search = props => {\n  const [searchValue, setSearchValue] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\");\n\n  const handleSearchInputChanges = e => {\n    setSearchValue(e.target.value);\n  };\n\n  const resetInputField = () => {\n    setSearchValue(\"\");\n  };\n\n  const callSearchFunction = e => {\n    e.preventDefault();\n    props.search(searchValue);\n    resetInputField();\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    className: \"search\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    value: searchValue,\n    onChange: handleSearchInputChanges,\n    type: \"text\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    onClick: callSearchFunction,\n    type: \"submit\",\n    value: \"SEARCH\"\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Search);\n\n//# sourceURL=webpack:///./src/components/Search.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-helmet\");\n\n//# sourceURL=webpack:///external_%22react-helmet%22?");

/***/ })

/******/ });