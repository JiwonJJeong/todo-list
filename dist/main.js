/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/3Dumb.woff2 */ "./src/fonts/3Dumb.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/3Dumb.woff */ "./src/fonts/3Dumb.woff"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* webfonts, custom variables, global resets, and changes to body */
@font-face {
    font-family: "Cartoon";
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("woff2"),
        url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("woff");
}


* {
    --document-background-color: #B1AFFF;
    --base-background-color: #FFE9D0;
    --button-color: pink;
    --content-background-color: #FFFED3;
    box-sizing: border-box;
}

:root{
    background-color: var(--document-background-color);
}

h1,
h2,
h3,
p {
    margin: 0;
    padding: 0;
}

body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10vh;
    gap: 10px;
    font-family: Helvetica, Arial, sans-serif;
}


/* section and style page into 3 main sections */

.base.area {
    display: grid;
    grid-template-rows: 100px auto;
    grid-template-columns: 300px 1fr;
    background-color: var(--base-background-color);
    border-radius: 10px;
    max-width: 1000px;
    min-width: 600px;
}

/* stylize header */

.header.area {
    grid-column: 1/3;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .header.logo {
        font-family: "Cartoon";
        font-size: 40px;
        flex-grow:1;
        text-align: center;
    }

    .help.button{
        aspect-ratio: 1/1;
        border-radius: 60%;
        width: 25px;
        margin: 10px;
        align-self: flex-start;
    }
    
}


/* stylize sidebar area*/
.sidebar.area {
    display: flex;
    flex-direction: column;
    position: relative;

    .button{
        border: 2px solid var(--button-color);
        transition-duration: 0.4s;
        padding: 10px;
        background-color: white;
    }

    .button:hover, .button.pressed{
        background-color: var(--button-color);
        color: white;
    }

    .new-button.container{
        position: absolute;
        top: 50px;
        flex-direction: column;
        align-self: center;
    }

    /* default hsla values for sidebar bar colors */
    --h: 199;
    --s: 100;
    --l: 87%;
    --a:1;

    .bar.area {
        border: solid 1px rgb(0, 0, 0);
        flex: 0 0 60px;
        /* center text */
        display: flex;
        align-items: center;
        padding-left: 20px;
        background: hsl(var(--h) var(--s) var(--l) / var(--a));
        justify-content:space-between;
    }

    .bar.area.open{
        --l: 70%;
    }

    /* style the form that appears to edit name */
    .bar.area form{
        display: flex;
    }

    .bar.area form input{
        margin-left: -10px;
        padding: 5px 12px;
        --l: 25%;
        border: 2px solid gray;
        width: 250px;
    }

    .bar.area form .submit.button{
        padding: 10px 2px;
        font-size: 12px;
        text-align: center;
    }
}

/* display child todos of projects as wanted */
.sidebar .project-and-child-todo {
    display: flex;
    flex-direction: column;
}

.sidebar .project-and-child-todo .todo.bar.area {
    flex: 0 0 40px;
    padding-left: 40px;
}

/* stylize content area */
.content.area{
    display:flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    background: var(--content-background-color);

    .content.title{
        align-self:center;
    }

    .content.date{
        align-self: flex-end;
    }



    .checklist.area{
        display:grid;
        grid-template-columns: 30px 1fr;
        align-items:end;
    }

    /* default text content */
    .default.text{
        text-align: center;
        font-size: 20px;
    }

    .add-todo.button{
        align-self: center;
        width: max-content;
        aspect-ratio: auto;
        padding: 10px;
        border: 2px solid var(--button-color);
        transition-duration: 0.4s;
        background-color: white;
    }

    .add-todo.button:hover{
        background-color: var(--button-color);
        color: white;
    }
}

/* stylizing dialogs! */

dialog.delete.dialog form{
    display:grid;
    grid-template-columns: max-content 1fr;
    gap: 10px;
    align-items: center;

    label{
        text-align:end;
    }

    select{
        padding: 5px;
    }

    .container{
        grid-column: 2/3;
        display: flex;
        gap: 20px;
        justify-content: flex-end;
    }

    .container .button{
        padding: 5px;
    }
}

dialog.new.todo.dialog form{
    display:flex;
    flex-direction: column;
    gap: 10px;

    > *{
        display: grid;
        grid-template-columns: 110px 1fr;
        gap: 10px;
    }

    select, input {
        padding: 5px;
    }

    label, p{
        align-self: center;
    }

    .priority.question.area{
        display:flex;
        justify-content: space-between;

        .container{
            align-self: center;
            display: grid;
            grid-template-columns: max-content 1fr;
            gap: 2px;
            margin-right: 100px;
        }
    }

    .description label{
        align-self:flex-start;
    }

    textarea{
        min-width: 237.25px;
        max-width: 577px;
        padding: 5px;
    }

    .checklist.question.area{
        div.checklist{
            grid-column: 2/3;
            display: flex;
            gap: 10px;
        }
        input {
            width: 100%;
        }
        label{
            text-align:end;
        }
        .add.checklist.button{
            grid-row: -1/0;
            grid-column: 2/3;
            aspect-ratio: 1/1;
            border-radius: 50%;
            border: 1px solid rgb(54, 54, 54);
            padding: 5px;
            justify-self: flex-end;
        }
    }

    .container{
        grid-column: 2/3;
        display: flex;
        gap: 20px;
        justify-content: flex-end;
    }

    .container .button{
        padding: 5px;
    }
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["/* webfonts, custom variables, global resets, and changes to body */\n@font-face {\n    font-family: \"Cartoon\";\n    src: url(\"./fonts/3Dumb.woff2\") format(\"woff2\"),\n        url(\"./fonts/3Dumb.woff\") format(\"woff\");\n}\n\n\n* {\n    --document-background-color: #B1AFFF;\n    --base-background-color: #FFE9D0;\n    --button-color: pink;\n    --content-background-color: #FFFED3;\n    box-sizing: border-box;\n}\n\n:root{\n    background-color: var(--document-background-color);\n}\n\nh1,\nh2,\nh3,\np {\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin-top: 10vh;\n    gap: 10px;\n    font-family: Helvetica, Arial, sans-serif;\n}\n\n\n/* section and style page into 3 main sections */\n\n.base.area {\n    display: grid;\n    grid-template-rows: 100px auto;\n    grid-template-columns: 300px 1fr;\n    background-color: var(--base-background-color);\n    border-radius: 10px;\n    max-width: 1000px;\n    min-width: 600px;\n}\n\n/* stylize header */\n\n.header.area {\n    grid-column: 1/3;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n\n    .header.logo {\n        font-family: \"Cartoon\";\n        font-size: 40px;\n        flex-grow:1;\n        text-align: center;\n    }\n\n    .help.button{\n        aspect-ratio: 1/1;\n        border-radius: 60%;\n        width: 25px;\n        margin: 10px;\n        align-self: flex-start;\n    }\n    \n}\n\n\n/* stylize sidebar area*/\n.sidebar.area {\n    display: flex;\n    flex-direction: column;\n    position: relative;\n\n    .button{\n        border: 2px solid var(--button-color);\n        transition-duration: 0.4s;\n        padding: 10px;\n        background-color: white;\n    }\n\n    .button:hover, .button.pressed{\n        background-color: var(--button-color);\n        color: white;\n    }\n\n    .new-button.container{\n        position: absolute;\n        top: 50px;\n        flex-direction: column;\n        align-self: center;\n    }\n\n    /* default hsla values for sidebar bar colors */\n    --h: 199;\n    --s: 100;\n    --l: 87%;\n    --a:1;\n\n    .bar.area {\n        border: solid 1px rgb(0, 0, 0);\n        flex: 0 0 60px;\n        /* center text */\n        display: flex;\n        align-items: center;\n        padding-left: 20px;\n        background: hsl(var(--h) var(--s) var(--l) / var(--a));\n        justify-content:space-between;\n    }\n\n    .bar.area.open{\n        --l: 70%;\n    }\n\n    /* style the form that appears to edit name */\n    .bar.area form{\n        display: flex;\n    }\n\n    .bar.area form input{\n        margin-left: -10px;\n        padding: 5px 12px;\n        --l: 25%;\n        border: 2px solid gray;\n        width: 250px;\n    }\n\n    .bar.area form .submit.button{\n        padding: 10px 2px;\n        font-size: 12px;\n        text-align: center;\n    }\n}\n\n/* display child todos of projects as wanted */\n.sidebar .project-and-child-todo {\n    display: flex;\n    flex-direction: column;\n}\n\n.sidebar .project-and-child-todo .todo.bar.area {\n    flex: 0 0 40px;\n    padding-left: 40px;\n}\n\n/* stylize content area */\n.content.area{\n    display:flex;\n    flex-direction: column;\n    gap: 10px;\n    padding: 20px;\n    background: var(--content-background-color);\n\n    .content.title{\n        align-self:center;\n    }\n\n    .content.date{\n        align-self: flex-end;\n    }\n\n\n\n    .checklist.area{\n        display:grid;\n        grid-template-columns: 30px 1fr;\n        align-items:end;\n    }\n\n    /* default text content */\n    .default.text{\n        text-align: center;\n        font-size: 20px;\n    }\n\n    .add-todo.button{\n        align-self: center;\n        width: max-content;\n        aspect-ratio: auto;\n        padding: 10px;\n        border: 2px solid var(--button-color);\n        transition-duration: 0.4s;\n        background-color: white;\n    }\n\n    .add-todo.button:hover{\n        background-color: var(--button-color);\n        color: white;\n    }\n}\n\n/* stylizing dialogs! */\n\ndialog.delete.dialog form{\n    display:grid;\n    grid-template-columns: max-content 1fr;\n    gap: 10px;\n    align-items: center;\n\n    label{\n        text-align:end;\n    }\n\n    select{\n        padding: 5px;\n    }\n\n    .container{\n        grid-column: 2/3;\n        display: flex;\n        gap: 20px;\n        justify-content: flex-end;\n    }\n\n    .container .button{\n        padding: 5px;\n    }\n}\n\ndialog.new.todo.dialog form{\n    display:flex;\n    flex-direction: column;\n    gap: 10px;\n\n    > *{\n        display: grid;\n        grid-template-columns: 110px 1fr;\n        gap: 10px;\n    }\n\n    select, input {\n        padding: 5px;\n    }\n\n    label, p{\n        align-self: center;\n    }\n\n    .priority.question.area{\n        display:flex;\n        justify-content: space-between;\n\n        .container{\n            align-self: center;\n            display: grid;\n            grid-template-columns: max-content 1fr;\n            gap: 2px;\n            margin-right: 100px;\n        }\n    }\n\n    .description label{\n        align-self:flex-start;\n    }\n\n    textarea{\n        min-width: 237.25px;\n        max-width: 577px;\n        padding: 5px;\n    }\n\n    .checklist.question.area{\n        div.checklist{\n            grid-column: 2/3;\n            display: flex;\n            gap: 10px;\n        }\n        input {\n            width: 100%;\n        }\n        label{\n            text-align:end;\n        }\n        .add.checklist.button{\n            grid-row: -1/0;\n            grid-column: 2/3;\n            aspect-ratio: 1/1;\n            border-radius: 50%;\n            border: 1px solid rgb(54, 54, 54);\n            padding: 5px;\n            justify-self: flex-end;\n        }\n    }\n\n    .container{\n        grid-column: 2/3;\n        display: flex;\n        gap: 20px;\n        justify-content: flex-end;\n    }\n\n    .container .button{\n        padding: 5px;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pageManager: () => (/* binding */ pageManager)
/* harmony export */ });
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render.js */ "./src/render.js");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
//module to call the other create or render functions based on inputs









const pageManager = (function () {
  let projects = [];
  let todosWithoutProject = [];

  const getProjectsAndNakedTodos = function () {
    return { projects, todosWithoutProject };
  };

  const moveProjectNodeUp = function (event, projectAndChildNode) {
    const project = projectAndChildNode.project;
    const index = projects.indexOf(project);
    console.log("Move project up" + index);
    if (index >= 1) {
      _render_js__WEBPACK_IMPORTED_MODULE_0__.renderManager.swapNodeElements(
        projectAndChildNode,
        projectAndChildNode.previousElementSibling,
      );
      swapArrayElements(projects, index - 1, index);
      _storage_js__WEBPACK_IMPORTED_MODULE_3__.storageManager.setProjectOrTodo(projects[index]);
      _storage_js__WEBPACK_IMPORTED_MODULE_3__.storageManager.setProjectOrTodo(projects[index - 1]);
    } else {
      console.log("This project is as high as it can be!");
    }
    event.stopPropagation();
  };

  const moveProjectNodeDown = function (event, projectAndChildNode) {
    const project = projectAndChildNode.project;
    const index = projects.indexOf(project);
    console.log("Move project down" + index);
    console.log(projects.length);
    if (index < projects.length - 1) {
      _render_js__WEBPACK_IMPORTED_MODULE_0__.renderManager.swapNodeElements(
        projectAndChildNode,
        projectAndChildNode.nextElementSibling,
      );
      swapArrayElements(projects, index, index + 1);
      _storage_js__WEBPACK_IMPORTED_MODULE_3__.storageManager.setProjectOrTodo(projects[index]);
      _storage_js__WEBPACK_IMPORTED_MODULE_3__.storageManager.setProjectOrTodo(projects[index + 1]);
    } else {
      console.log("This project is as low as it can be!");
    }
    event.stopPropagation();
  };

  const swapArrayElements = function (array, index1, index2) {
    const firstElementHolder = array[index1];
    delete array[index1];
    array[index1] = array[index2];
    array[index2] = firstElementHolder;
  };

  const sortNakedTodos = function () {
    todosWithoutProject.sort(comparePriority);
  };

  const comparePriority = function (a, b) {
    return b.priority - a.priority;
  };

  const moveTodoToProject = function (project, todo) {
    project.addTodo(todo);
  };

  const removeTodoFromProject = function (project, todo) {
    project.removeTodo(todo);
    todosWithoutProject.push(todo);
    _storage_js__WEBPACK_IMPORTED_MODULE_3__.storageManager.setProjectOrTodo(project);
  };

  const toggleOpenCloseProjectTab = function (projectAndChildTodosAreaNode) {
    const projectObject = projectAndChildTodosAreaNode.project;
    const projectBar =
      projectAndChildTodosAreaNode.querySelector(".project.bar.area");
    console.log(
      "You are trying to open/close the project: " + projectObject.name,
    );
    projectObject.toggleShowTodos();
    if (projectObject.getIsTodosShown()) {
      _render_js__WEBPACK_IMPORTED_MODULE_0__.renderManager.appendProjectChildTodos(projectAndChildTodosAreaNode);
      const projectBarNode =
        projectAndChildTodosAreaNode.querySelector(".project.bar.area");
      _render_js__WEBPACK_IMPORTED_MODULE_0__.renderManager.bindChildTodoBars(projectBarNode);
      projectBar.classList.add("open");
    } else {
      _render_js__WEBPACK_IMPORTED_MODULE_0__.renderManager.clearProjectChildTodos(projectAndChildTodosAreaNode);
      projectBar.classList.remove("open");
    }
    _storage_js__WEBPACK_IMPORTED_MODULE_3__.storageManager.setProjectOrTodo(projectObject);
  };

  const processNewTodoFormSubmit = function (event, formElement) {
    let isFormValid = formElement.checkValidity();
    if (!isFormValid) {
      formElement.reportValidity();
    } else {
      event.preventDefault();
      const name = formElement.elements.name.value;
      const description = formElement.elements.description.value;
      const dueDate = formElement.elements.dueDate.value;
      const priority = formElement.elements.priority.value;
      let checklist = formElement.elements.checklist;
      let checklistValuesWithNoBlanks;
      if (checklist.length > 1) {
        const checklistArray = (checklist = Array.from(checklist));
        checklistValuesWithNoBlanks = checklistArray
          .map((checklist) => checklist.value)
          .filter((value) => value !== "");
      } else {
        checklistValuesWithNoBlanks = [checklist.value];
      }
      const projectToAddToIndex =
        formElement.querySelector("select").selectedIndex - 1;
      let projectToAddTo = null;
      if (projectToAddToIndex >= 0) {
        projectToAddTo = projects[projectToAddToIndex];
      }
      const newTodo = createAndAddTodo(
        projectToAddTo,
        name,
        description,
        dueDate,
        priority,
        ...checklistValuesWithNoBlanks,
      );
      if (projectToAddTo == null) {
        sortNakedTodos();
        const indexToAddTo = todosWithoutProject.indexOf(newTodo);
        const newTodoNode = _render_js__WEBPACK_IMPORTED_MODULE_0__.renderManager.appendNewTodoAtIndex(
          newTodo,
          indexToAddTo,
        );
        _render_js__WEBPACK_IMPORTED_MODULE_0__.renderManager.bindTodoBar(newTodoNode);
      } else if (projectToAddTo.getIsTodosShown()) {
        const indexToAddTo = projectToAddTo.getTodoArray().indexOf(newTodo);
        const newTodoNode = _render_js__WEBPACK_IMPORTED_MODULE_0__.renderManager.appendNewTodoAtIndex(
          newTodo,
          indexToAddTo,
          projectToAddToIndex,
        );
        _render_js__WEBPACK_IMPORTED_MODULE_0__.renderManager.bindTodoBar(newTodoNode);
      }
      _render_js__WEBPACK_IMPORTED_MODULE_0__.renderManager.closeNewTodoFormDialog();
    }
  };

  const processNewProject = function () {
    const newProjectObject = createAndAddProject("New Project (rename me!)");
    const newNode = _render_js__WEBPACK_IMPORTED_MODULE_0__.renderManager.renderAndBindNewProject(newProjectObject);
    _storage_js__WEBPACK_IMPORTED_MODULE_3__.storageManager.setProjectOrTodo(newProjectObject);
  };

  const processEditNameForm = function (event, formElement) {
    event.preventDefault();
    event.stopPropagation();
    const todoOrProjectObject = formElement.object;
    const name = formElement.elements.name.value;
    todoOrProjectObject.name = name;
    _render_js__WEBPACK_IMPORTED_MODULE_0__.renderManager.displayIcons(formElement.parentNode.parentNode);
    _render_js__WEBPACK_IMPORTED_MODULE_0__.renderManager.closeEditNameForm();
    _storage_js__WEBPACK_IMPORTED_MODULE_3__.storageManager.setProjectOrTodo(todoOrProjectObject);
  };

  const processDeleteFormSubmit = function (event, deleteForm) {
    event.preventDefault();
    const indexOfProjectToRemove =
      deleteForm.querySelector(".project.selection").value;
    let removedObject;
    if (indexOfProjectToRemove >= 0) {
      removedObject = projects.splice(indexOfProjectToRemove, 1)[0];
      console.log(removedObject.name + " is deleted");
      _render_js__WEBPACK_IMPORTED_MODULE_0__.renderManager.removeTab(indexOfProjectToRemove);
      _storage_js__WEBPACK_IMPORTED_MODULE_3__.storageManager.removeProjectOrTodo(indexOfProjectToRemove);
      _render_js__WEBPACK_IMPORTED_MODULE_0__.renderManager.closeDeleteDialog();
      return;
    }
    const todoSelectionNode = deleteForm.querySelector(".todo.selection");
    const projectAndTodoIndexOfTodoToRemove =
      todoSelectionNode.value.split(",");
    const indexOfOptgroupSelected = Number(
      projectAndTodoIndexOfTodoToRemove[0],
    );
    const indexOfTodoToRemove = Number(projectAndTodoIndexOfTodoToRemove[1]);
    console.log(
      "Indexes for delete: " +
        indexOfOptgroupSelected +
        " " +
        indexOfTodoToRemove,
    );
    // the todo to remove is part of a project
    if (indexOfOptgroupSelected !== -1 && indexOfTodoToRemove >= 0) {
      const projectToRemoveFrom = projects[indexOfOptgroupSelected];
      removedObject = projectToRemoveFrom
        .getTodoArray()
        .splice(indexOfTodoToRemove, 1)[0];
      _render_js__WEBPACK_IMPORTED_MODULE_0__.renderManager.removeTab(indexOfOptgroupSelected, indexOfTodoToRemove);
      console.log(
        `${removedObject.name} from ${projectToRemoveFrom.name} is removed`,
      );
      _storage_js__WEBPACK_IMPORTED_MODULE_3__.storageManager.removeProjectOrTodo(indexOfOptgroupSelected);
    }
    // the todo to remove is not part of a project
    else if (indexOfOptgroupSelected == -1 && indexOfTodoToRemove >= 0) {
      removedObject = todosWithoutProject.splice(indexOfTodoToRemove, 1)[0];
      _render_js__WEBPACK_IMPORTED_MODULE_0__.renderManager.removeTab(null, indexOfTodoToRemove);
      console.log(
        `${removedObject.name} from todos without projects is removed`,
      );
      _storage_js__WEBPACK_IMPORTED_MODULE_3__.storageManager.removeProjectOrTodo(indexOfTodoToRemove);
    }
    _render_js__WEBPACK_IMPORTED_MODULE_0__.renderManager.closeDeleteDialog();
  };

  const processChecklistToggle = function (checklistObject, todoObject) {
    checklistObject.toggleComplete();
    _storage_js__WEBPACK_IMPORTED_MODULE_3__.storageManager.setProjectOrTodo(todoObject);
  };

  // use parameter project = null if you want the todo to have no project
  const createAndAddTodo = function (
    project,
    title,
    description,
    dueDate,
    priority,
    ...checklistArray
  ) {
    const todo = (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.createTodo)(
      title,
      description,
      dueDate,
      priority,
      ...checklistArray,
    );
    if (project !== null) {
      if (!projects.includes(project)) {
        alert("You are trying to add a todo to a nonexisting project");
      }
      moveTodoToProject(project, todo);
      project.sortTodos();
      _storage_js__WEBPACK_IMPORTED_MODULE_3__.storageManager.setProjectOrTodo(project);
    } else {
      todosWithoutProject.push(todo);
      _storage_js__WEBPACK_IMPORTED_MODULE_3__.storageManager.setProjectOrTodo(todo);
    }

    return todo;
  };

  const createAndAddProject = function (name) {
    const createdProject = (0,_project_js__WEBPACK_IMPORTED_MODULE_2__.createProject)(name);
    projects.push(createdProject);
    _storage_js__WEBPACK_IMPORTED_MODULE_3__.storageManager.setProjectOrTodo(createdProject);
    return createdProject;
  };

  const init = function () {
    const projectsAndTodos = _storage_js__WEBPACK_IMPORTED_MODULE_3__.storageManager.getProjectsAndTodosFromStorage();
    console.log(projectsAndTodos);
    if (
      projectsAndTodos.projects.length !== 0 ||
      projectsAndTodos.todos.length !== 0
    ) {
      projects = projectsAndTodos.projects;
      todosWithoutProject = projectsAndTodos.todos;
    } else {
      addExampleTodosandProjects();
      console.log("No data detected in localStorage. Added examples!");
    }
    _render_js__WEBPACK_IMPORTED_MODULE_0__.renderManager.init();
    _storage_js__WEBPACK_IMPORTED_MODULE_3__.storageManager.setAllProjectsAndTodos();
  };

  const addExampleTodosandProjects = function () {
    projects = [];
    todosWithoutProject = [];
    createAndAddTodo(
      null,
      "Drive mom to airport",
      "This is a high priority task! Make sure to drop mom off at ABC airport Terminal 1.",
      "2024-07-10",
      3,
      "Check-in for flight",
      "Pick up mom at 8:00 AM",
    );
    createAndAddTodo(
      null,
      "Buy new camping gear",
      "This is a low priority task. Prepare extra supplies for Mount Awesome hiking trip with the boys.",
      "2024-11-27",
      1,
      "Buy new water bottle",
      "Buy more climbing rope",
      "Pack new stuff into camping bag",
    );
    const testProject = createAndAddProject("TOP Todo List Project");
    createAndAddTodo(
      testProject,
      "Stylize with CSS",
      "Use flexbox and grid to layout elements! Also mess with some pseudoclasses to make some interactive buttons! After having a good layout, everything else like color or font is for fun!",
      "2024-06-29",
      1,
      "Center elements",
      "Stylize buttons and pseudoclasses",
      "Stylize form inputs",
      "Add icons",
      "Choose color palette",
    );
    createAndAddTodo(
      testProject,
      "Add ability to edit existing todos",
      "Existing todos should be able to be deleted. Their names and checklist status should also be able to be edited. All of this information should be properly stored, not just rendered on the DOM directly.",
      "2024-06-23",
      3,
    );
    const testProject2 = createAndAddProject("Woodworking Project");
    createAndAddTodo(
      testProject2,
      "Brainstorm something to make",
      "Try to create a basic concept sketch of the next project to make. Concept sketch should have multiple perspectives and some close-up diagrams of any key mechanical parts.",
      "2024-07-04",
      3,
      "Research inspiration ideas",
      "Check my current supplies",
    );
  };

  return {
    getProjectsAndNakedTodos,
    createAndAddTodo,
    createAndAddProject,
    moveTodoToProject,
    removeTodoFromProject,
    addExampleTodosandProjects,
    toggleOpenCloseProjectTab,
    processNewTodoFormSubmit,
    comparePriority,
    moveProjectNodeUp,
    moveProjectNodeDown,
    processNewProject,
    processEditNameForm,
    processDeleteFormSubmit,
    init,
    processChecklistToggle,
  };
})();

pageManager.init();




/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   attachProjectMethods: () => (/* binding */ attachProjectMethods),
/* harmony export */   createProject: () => (/* binding */ createProject)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
// module for project that (can) hold todos //


function createProject(name) {
    const methods = projectMethodDelegate();

    let isComplete = false;
    let todoArray = [];
    let isTodosShown = false;

    return {
        ...methods,
        name,
        todoArray,
        isTodosShown,
    }
}

const projectMethodDelegate = function(){

    const getTodoArray = function () {
        return this.todoArray;
    }

    const getTodo = function(index){
        return this.todoArray[index];
    }

    const addTodo = function (newTodo) {
        this.todoArray.push(newTodo);
    }

    const removeTodo = function (todoToRemove) {
        this.todoArray.pop(todoToRemove);
    }

    // sort by priority only with 3 being highest (and first), 1 being lowest
    const sortTodos = function () {
        this.todoArray.sort(_index_js__WEBPACK_IMPORTED_MODULE_0__.pageManager.comparePriority);
    }

    const toggleShowTodos = function(){
        this.isTodosShown = !this.isTodosShown;
    }

    const getIsTodosShown = function(){
        return this.isTodosShown;
    }

    return{
        sortTodos,
        getTodo,
        addTodo,
        removeTodo,
        getTodoArray,
        toggleShowTodos,
        getIsTodosShown,
    }
}

const attachProjectMethods = function(partial){
    const methods = projectMethodDelegate();

    return {
        ...methods,
        ...partial,
    }
}



/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderManager: () => (/* binding */ renderManager)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _images_menu_up_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/menu-up.svg */ "./src/images/menu-up.svg");
/* harmony import */ var _images_menu_down_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/menu-down.svg */ "./src/images/menu-down.svg");
// module strictly for displaying elements




const renderManager = function () {

    const init = function () {
        renderBaseBackground();
        renderHeader();
        renderHelpButton();
        renderSidebar();
        renderDefaultContent();
        prerenderDialogs();
        bindAllEvents();
        prerenderEditNameForm();
    }

    // helper functions to easily create DOM elements

    const createElement = function (tag, classAttribute, innerText) {
        const createdElement = document.createElement(tag);
        if (classAttribute !== undefined && classAttribute !== null) {
            const splitClassStringsArray = classAttribute.split(" ");
            for (let singleClass of splitClassStringsArray) {
                createdElement.classList.add(singleClass);
            }
        };
        if (innerText !== undefined) { createdElement.innerText = innerText };
        return createdElement;
    }

    const createLabelAndInput = function (id, type = "text", labelText, value, requiredBoolean, maxlength) {
        const label = document.createElement("label");
        label.innerText = labelText;
        label.for = id;
        let input;
        if (type === "textarea"){
            input = document.createElement("textarea");
        } else{
            input = document.createElement("input");
            input.type = type;
        }
        input.id = id;
        input.name = id;
        if (value !== undefined && value !== null) {
            input.value = value;
        }
        if (requiredBoolean === true) {
            input.setAttribute("required", "");
        }
        if (maxlength !== undefined){
            input.setAttribute("maxlength",maxlength);
        }
        return { label, input };
    }

    const composeContainedFieldElement = function ({ label, input }) {
        const containerDiv = createElement("div", input.name);
        containerDiv.append(label, input);
        return containerDiv;
    }

    const createImage = function (src, classString, altText) {
        const image = createElement("img", classString);
        image.src = src;
        image.alt = altText;
        image.style.width = "29px";
        return image;
    }

    // functions related to displaying and rendering
    const renderHelpButton = function(){
        const helpButton = createElement("button","help button","?");
        header.appendChild(helpButton);
    }

    let baseBackground;
    const renderBaseBackground = function () {
        baseBackground = createElement("div", "base area");
        const body = document.querySelector("body");
        body.appendChild(baseBackground);
    }

    let header;
    const renderHeader = function () {
        header = createElement("div", "header area");
        const logo = createElement("h1", "header logo", "To Do List");
        header.appendChild(logo);
        baseBackground.appendChild(header);
    }

    // displaying and rendering sidebar

    let sidebar;
    const renderSidebar = function () {
        sidebar = createElement("div", "sidebar area");
        const newDropdown = composeNewDropdown();
        sidebar.appendChild(newDropdown.dropdownButton);
        sidebar.appendChild(newDropdown.newButtonContainer);
        const projectsAndTodosToDisplay = _index_js__WEBPACK_IMPORTED_MODULE_0__.pageManager.getProjectsAndNakedTodos();
        const projectsArray = projectsAndTodosToDisplay.projects;
        const todosArray = projectsAndTodosToDisplay.todosWithoutProject;
        for (let project of projectsArray) {
            const projectTab = composeProjectAndChildTodosTab(project);
            sidebar.appendChild(projectTab);
        }
        for (let todo of todosArray) {
            const todoTab = composeTodoTab(todo);
            sidebar.appendChild(todoTab);
        }
        baseBackground.appendChild(sidebar);
    }

    const composeNewDropdown = function () {
        const dropdownButton = createElement("button", "new-dropdown button", "Menu Options");
        const newButtonContainer = prerenderNewButtons();
        return { dropdownButton, newButtonContainer }
    }

    const prerenderNewButtons = function () {
        const container = createElement("div", "new-button container");
        const newProjectButton = createElement("button", "new project button", "New Project");
        const newTodoButton = createElement("button", "new todo button", "New Todo");
        const deleteButton = createElement("button", "delete button", "Remove Project or Todo");
        container.appendChild(newProjectButton);
        container.appendChild(newTodoButton);
        container.appendChild(deleteButton);
        toggleShowHideElement(container);
        return container;
    }

    const toggleShowHideElement = function (element) {
        const currentDisplayState = element.style.display;
        if (currentDisplayState !== "none") {
            element.style.display = "none";
        } else {
            element.style.display = "flex";
        }
        const dropdownButton = sidebar.querySelector(".new-dropdown.button");
        if (dropdownButton !== null){
            if (dropdownButton.classList.contains("pressed")){
                dropdownButton.classList.remove("pressed");
            } else {
                dropdownButton.classList.add("pressed");
            }
        }
    }

    const composeProjectAndChildTodosTab = function (projectToDisplay) {
        const projectBarAndTodoArea = createElement("div", "project-and-child-todo area");
        const projectBarArea = createElement("div", "project bar area");
        projectBarAndTodoArea.project = projectToDisplay;
        projectBarAndTodoArea.object = projectToDisplay;
        projectBarArea.project = projectToDisplay;
        projectBarArea.object = projectToDisplay;
        const projectName = createElement("p", "project name", projectToDisplay.name);
        projectBarArea.appendChild(projectName);
        projectBarAndTodoArea.appendChild(projectBarArea);
        renderMoveProjectImages(projectBarAndTodoArea);
        // make sure to render todos of the project, if the project should be open
        if (projectToDisplay.getIsTodosShown()) {
            appendProjectChildTodos(projectBarAndTodoArea);
            projectBarArea.classList.add("open");
        }
        return projectBarAndTodoArea;
    }

    const renderAndBindNewProject = function(projectToDisplay){
        const projectBarNode = composeProjectAndChildTodosTab(projectToDisplay);
        const projectAndChildTodoNodes = sidebar.querySelectorAll(".project-and-child-todo.area");
        let lastProjectBarNodeToAppendAfter = projectAndChildTodoNodes[projectAndChildTodoNodes.length-1];
        if (lastProjectBarNodeToAppendAfter == undefined){
            lastProjectBarNodeToAppendAfter = sidebar.querySelector(".new-button.container");
        }
        lastProjectBarNodeToAppendAfter.after(projectBarNode);
        bindProjectAndChildTodosBar(projectBarNode);
        bindUpDownIcons(projectBarNode)
    }

    const appendProjectChildTodos = function(projectBarAndTodoArea){
        const todosArray = projectBarAndTodoArea.project.getTodoArray();
        for (let todo of todosArray) {
            const todoTab = composeTodoTab(todo);
            todoTab.project = projectBarAndTodoArea.project;
            projectBarAndTodoArea.appendChild(todoTab);
        }
    }

    const clearProjectChildTodos = function(projectBarAndTodoArea){
        const todoBarNodes = projectBarAndTodoArea.querySelectorAll(".todo.bar.area");
        for (let node of todoBarNodes){
            projectBarAndTodoArea.removeChild(node);
        }
    }

    const composeTodoTab = function (todoToDisplay) {
        const todoBarArea = createElement("div", "todo bar area");
        const todoName = createElement("p", "todo name", todoToDisplay.name);
        todoBarArea.appendChild(todoName);
        todoBarArea.object = todoToDisplay;
        return todoBarArea;
    }

    const appendNewTodoAtIndex = function(todoObject, index, projectIndex){
        const todoTabNode = composeTodoTab(todoObject);
        let todoNodeList;
        if (projectIndex == undefined){
            todoNodeList = document.querySelectorAll(".sidebar.area > .todo.bar.area");
        } else {
            const projectList = sidebar.querySelectorAll(".project-and-child-todo");
            todoNodeList = projectList[projectIndex].querySelectorAll(".todo.bar.area");
        }
        const todoNodeToInsertBefore = todoNodeList[index];
        if (todoNodeToInsertBefore !== undefined){
            todoNodeToInsertBefore.parentNode.insertBefore(todoTabNode, todoNodeToInsertBefore);
        } else {
            let todoNodeToInsertAfter = todoNodeList[index-1];
            if (todoNodeToInsertAfter == undefined){
                todoNodeToInsertAfter = sidebar.querySelector(".new-button.container")
            }
            todoNodeToInsertAfter.after(todoTabNode);
        }
        console.log(todoNodeToInsertBefore, todoNodeList, index);
        return todoTabNode;
    }

    const renderMoveProjectImages = function (projectBarAndTodoArea) {
        const container = createElement("div","icon container");
        const upIconElement = createImage(_images_menu_up_svg__WEBPACK_IMPORTED_MODULE_1__, "up icon", "move project up icon");
        const downIconElement = createImage(_images_menu_down_svg__WEBPACK_IMPORTED_MODULE_2__, "down icon", "move project down icon");
        upIconElement.projectAndChildNode = projectBarAndTodoArea;
        downIconElement.projectAndChildNode = projectBarAndTodoArea;
        const projectBar = projectBarAndTodoArea.querySelector(".project.bar.area");
        container.append(upIconElement, downIconElement);
        projectBar.appendChild(container);
    }

    const hideIcons = function(projectBarAndTodoArea){
        const icons = projectBarAndTodoArea.querySelectorAll("img.icon");
        for (let icon of icons){
            icon.style.display = "none";
        }
    }

    const displayIcons = function(projectBarAndTodoArea){
        const icons = projectBarAndTodoArea.querySelectorAll("img.icon");
        for (let icon of icons){
            icon.style.display = "inline";
        }
    }

    const removeTab = function(indexOfProject, indexOfTodo){
        let projectNodeToSearch;
        // find the project to delete from if there is a project specified
        if (indexOfProject !== null){
            projectNodeToSearch = sidebar.querySelectorAll(".project-and-child-todo.area")[indexOfProject];
            console.log(projectNodeToSearch);
        }
        // if projectIndex specified AND todoIndex specified AND the project is open, delete the todo of the project
        if (indexOfProject !== null && indexOfTodo !== undefined && projectNodeToSearch.project.getIsTodosShown()){
            const todoToRemove = projectNodeToSearch.querySelectorAll(":scope > .todo.bar.area")[indexOfTodo];
            todoToRemove.parentNode.removeChild(todoToRemove);
        } 
        // else if projectIndex not specified AND todoIndex specified, delete the naked todo
        else if (indexOfProject == null && indexOfTodo !== undefined){
            const todoToRemove = sidebar.querySelectorAll(":scope > .todo.bar.area")[indexOfTodo];
            todoToRemove.parentNode.removeChild(todoToRemove);
        }
        // else if no index for todo is specified, delete the entire project specified
        else if (indexOfProject !== null && indexOfTodo == undefined){
            projectNodeToSearch.parentNode.removeChild(projectNodeToSearch);
        }
    }

    // prerenderEditNameForm, able to be moved around as needed
    let prerenderedEditNameForm;
    const prerenderEditNameForm = function(){
        prerenderedEditNameForm = createElement("form","edit name form");
        const input = createElement("input");
        input.name = "name";
        input.setAttribute("maxlength",40);
        const submitButton = createElement("submit","submit button", "Save");
        bindEditNameFormSubmit(submitButton, input);
        prerenderedEditNameForm.appendChild(input);
        prerenderedEditNameForm.appendChild(submitButton);
        prerenderedEditNameForm.isActive = false;
    };

    // form will submit on both clicking the submit OR enter button
    const bindEditNameFormSubmit = function(buttonNode, inputNode){
        buttonNode.addEventListener("click", (e) => _index_js__WEBPACK_IMPORTED_MODULE_0__.pageManager.processEditNameForm(e, prerenderedEditNameForm));
        inputNode.addEventListener("keydown", function(e){
            if (e.code == "Enter"){
                _index_js__WEBPACK_IMPORTED_MODULE_0__.pageManager.processEditNameForm(e, prerenderedEditNameForm);
            }
        })
    }

    const renderEditNameFormAtBar = function(barNode){
        if (!prerenderedEditNameForm.isActive){
            const barTextNode = barNode.querySelector(".name");
            barNode.replaceChild(prerenderedEditNameForm, barTextNode);
            prerenderedEditNameForm.holdOldNodeContent = document.createElement("div");
            prerenderedEditNameForm.holdOldNodeContent = barTextNode;
            const input = prerenderedEditNameForm.querySelector("input");
            input.value = barNode.object.name;
            prerenderedEditNameForm.isActive = true;
            prerenderedEditNameForm.object = barNode.object;
        } else{
            alert("Please submit previous edit name.");
            return;
        }
    }

    const closeEditNameForm = function(){
        const textNodeToAddBack = prerenderedEditNameForm.holdOldNodeContent;
        prerenderedEditNameForm.isActive = false;
        prerenderedEditNameForm.parentNode.replaceChild(textNodeToAddBack, prerenderedEditNameForm);
        textNodeToAddBack.innerText = textNodeToAddBack.parentNode.object.name;
    }

    // displaying content

    let content;
    const renderDefaultContent = function () {
        content = composeDefaultContent();
        baseBackground.appendChild(content);
    }

    const composeDefaultContent = function(){
        const contentArea = createElement("div", "content area");
        const defaultText = createElement("p", "default text", "Let's get started! Choose a todo.");
        const defaultAddTodoButton = createElement("button", "add-todo button", "Or create one!");
        const defaultHelplistHeader = createElement("p","help header","Need help? Explore these functions: ");
        const defaultHelpList = composeHelpList();
        contentArea.appendChild(defaultText);
        contentArea.appendChild(defaultAddTodoButton);
        contentArea.append(defaultHelplistHeader, defaultHelpList);
        return contentArea;
    }

    const renderTodoContent = function (todo) {
        const todoTitle = createElement("h2", "content title", todo.name);
        const todoDate = createElement("p", "content date", todo.dueDate);
        const todoDescription = createElement("p", "content description", todo.description);
        const todoChecklist = composeChecklistElements(todo.getChecklistArray());
        content.appendChild(todoTitle);
        content.appendChild(todoDate);
        content.appendChild(todoDescription);
        content.appendChild(todoChecklist);
    }

    const composeChecklistElements = function (checklistArray) {
        const checklistArea = createElement("div", "checklist area");
        for (let i=0; i<checklistArray.length; i++) {
            const checklist = checklistArray[i];
            const checkfield = createLabelAndInput("checklist " + i,"checkbox", checklist.description);
            if (checklist.isComplete){
                checkfield.input.setAttribute("checked","");
            }
            checklistArea.append(checkfield.input, checkfield.label);
        }
        return checklistArea;
    }

    const composeHelpList = function(){
        const list = createElement("ul","help list");
        const helpFunction1 = createElement("li",null,"Click 'Menu Options'.");
        const helpFunction2 = createElement("li",null,"Open a project folder.");
        const helpFunction3 = createElement("li",null,"Click up/down icons.");
        const helpFunction4 = createElement("li",null,"Right click a tab.");
        const helpFunction5 = createElement("li",null,"Click a checkbox.");
        const helpFunction6 = createElement("li",null,"Refresh the page! (local storage)");
        list.append(helpFunction1, helpFunction2, helpFunction3, helpFunction4, helpFunction5, helpFunction6);
        return list;
    }

    const clearContentArea = function () {
        while (content.firstChild) {
            content.removeChild(content.firstChild);
        }
    }

    // codes for dialogs. Use dialogs for new todo forms

    let newTodoFormDialog;
    let deleteDialog;
    const prerenderDialogs = function () {
        newTodoFormDialog = composeNewTodoFormDialog();
        deleteDialog = composeDeleteDialog();
        baseBackground.append(newTodoFormDialog, deleteDialog);
    }

    const showNewTodoFormDialog = function () {
        rerenderProjectSelection();
        newTodoFormDialog.showModal();
    }

    const closeNewTodoFormDialog = function () {
        newTodoFormDialog.querySelector("form").reset();
        resetChecklistFieldsToOne();
        resetSizeOfTextarea();
        newTodoFormDialog.close();
    }

    const composeNewTodoFormDialog = function () {
        const todoFormDialog = createElement("dialog", "new todo dialog");
        const todoForm = document.createElement("form");
        const todoFormElementsArray = Object.values(composeTodoFormElements());
        for (let element of todoFormElementsArray) {
            todoForm.appendChild(element);
        }
        const buttonContainer = createElement("div","button container");
        const submitButton = createElement("input", "submit button", "Submit");
        submitButton.type = "submit";
        const cancelButton = createElement("button" ,"cancel button", "Cancel");
        cancelButton.type = "button";
        buttonContainer.append(cancelButton,submitButton);
        todoForm.appendChild(buttonContainer);
        todoFormDialog.appendChild(todoForm);
        return todoFormDialog;
    }

    const composeTodoFormElements = function () {
        const nameFields = composeContainedFieldElement(createLabelAndInput("name", "text", "Title*:", null, true, 40));
        const descriptionFields = composeContainedFieldElement(createLabelAndInput("description", "textarea", "Description:"));
        const dueDateFields = composeContainedFieldElement(createLabelAndInput("dueDate", "date", "Due Date:"));
        const priorityQuestion = composePriorityRadioInput();
        const projectFieldQuestion = composeProjectSelectInput();
        const checklistQuestion = composeChecklistInputArea();
        return { nameFields, dueDateFields, priorityQuestion, projectFieldQuestion, descriptionFields, checklistQuestion };
    }

    const composePriorityRadioInput = function () {
        const priorityQuestionContainer = createElement("div", "priority question area");
        const priorityRadioQuestionText = createElement("p", "priority text", "Priority*:");
        const radioContainer = createElement("div","container");
        const priorityHighRadioFields = createLabelAndInput("priority", "radio", "High", 3, true);
        const priorityMediumRadioFields = createLabelAndInput("priority", "radio", "Medium", 2);
        const priorityLowRadioFields = createLabelAndInput("priority", "radio", "Low", 1);
        radioContainer.append(priorityHighRadioFields.input, priorityHighRadioFields.label,
            priorityMediumRadioFields.input, priorityMediumRadioFields.label,
            priorityLowRadioFields.input, priorityLowRadioFields.label);
        priorityQuestionContainer.append(priorityRadioQuestionText,radioContainer);
        return priorityQuestionContainer;
    }

    const composeProjectSelectInput = function(){
        const container = createElement("div","project question area");
        const questionText = createElement("p","project text","Add to project: ");
        const selectElement = composeProjectSelection();
        container.append(questionText, selectElement);
        return container;
    }

    const composeProjectSelection = function(){
        const selectElement = createElement("select", "project selection");
        const projectNames = _index_js__WEBPACK_IMPORTED_MODULE_0__.pageManager.getProjectsAndNakedTodos().projects.map((project)=>(project.name));
        projectNames.unshift("(no project)");
        for (let i=0; i < projectNames.length ; i++){
            const option = document.createElement("option");
            option.value = i-1;
            option.innerText = projectNames[i];
            selectElement.appendChild(option);
        }
        return selectElement;
    }

    const rerenderProjectSelection = function(){
        console.log("project selection for new todo form rerendered")
        const selectElement = newTodoFormDialog.querySelector("select");
        const newSelect = composeProjectSelection();
        selectElement.parentNode.replaceChild(newSelect,selectElement);
    }

    const composeChecklistInputArea = function(){
        const container = createElement("div","checklist question area");
        const questionText = createElement("p","checklist text","Make checklist: ");
        const field = composeContainedFieldElement(createLabelAndInput("checklist", "text", "Task 1", null, false));
        const addAnotherFieldButton = createElement("button","add checklist button","+");
        addAnotherFieldButton.type = "button";
        container.append(questionText, field, addAnotherFieldButton);
        return container;
    }

    let checklistCount = 2;
    const addAnotherChecklistField = function(){
        const field = composeContainedFieldElement(createLabelAndInput("checklist", "text", "Task " + checklistCount, null, false));
        checklistCount++;
        const nodeToAppendBefore = newTodoFormDialog.querySelector(".add.checklist.button");
        nodeToAppendBefore.parentNode.insertBefore(field, nodeToAppendBefore);
    }

    const resetChecklistFieldsToOne = function(){
        checklistCount = 2;
        const checklistArea = newTodoFormDialog.querySelector(".checklist.question.area");
        const checklists = checklistArea.querySelectorAll("div.checklist");
        console.log(checklists);
        for (let i = 1; i<checklists.length; i++){
            checklistArea.removeChild(checklists[i]);
        }
    }

    const resetSizeOfTextarea = function(){
        const textarea = newTodoFormDialog.querySelector("textarea");
        textarea.style.width = "374px";
        textarea.style.height = "123px";
    }

    // code for delete dialog

    const showDeleteDialog = function(){
        deleteDialog.showModal();
        updateDeleteFormSelection();
    }

    const closeDeleteDialog = function(){
        deleteDialog.close();
        deleteDialog.querySelector("form").reset();
    }

    const composeDeleteDialog = function(){
        deleteDialog = createElement("dialog","delete dialog");
        const deleteForm = composeDeleteForm();
        deleteDialog.appendChild(deleteForm);
        return deleteDialog;
    }

    const updateDeleteFormSelection = function(){
        const oldDeleteForm = deleteDialog.querySelector(".delete.form");
        const newDeleteForm = composeDeleteForm();
        oldDeleteForm.parentNode.replaceChild(newDeleteForm, oldDeleteForm);
        bindDeleteFormDialogArea();
    }

    const composeDeleteForm = function(){
        const deleteProjectPrompt = createElement("label", "delete project label", "Delete an entire project: ");
        const projectSelection = composeProjectSelection();
        const deleteTodoPrompt = createElement("label", "delete todo label", "Delete todo: ");
        const todoSelection = composeTodoSelection();
        const buttonContainer = createElement("div","button container");
        const submitButton = createElement("input","submit button", "Submit");
        submitButton.type = "submit";
        const cancelButton = createElement("button", "cancel button" ,"Cancel");
        cancelButton.type = "button";
        buttonContainer.append(cancelButton, submitButton);
        const form = createElement ("form","delete form");
        form.append(deleteProjectPrompt, projectSelection, deleteTodoPrompt, todoSelection, buttonContainer);
        return form;
    }

    const composeTodoSelection = function(){
        const selectElement = createElement("select","todo selection");
        const projects = _index_js__WEBPACK_IMPORTED_MODULE_0__.pageManager.getProjectsAndNakedTodos().projects;
        const nakedTodos = _index_js__WEBPACK_IMPORTED_MODULE_0__.pageManager.getProjectsAndNakedTodos().todosWithoutProject;
        const noSelectOption = document.createElement("option")
        noSelectOption.innerText = "(no todo)";
        noSelectOption.value = -1;
        selectElement.appendChild(noSelectOption);
        for (let project of projects){
            const optgroup = document.createElement("optgroup");
            const projectIndex = projects.indexOf(project);
            optgroup.label = project.name;
            const todos = project.getTodoArray();
            for (let todo of todos){
                const selection = document.createElement("option");
                selection.value = [projectIndex, todos.indexOf(todo)];
                selection.innerText = todo.name;
                optgroup.appendChild(selection);
            }
            selectElement.appendChild(optgroup);
        }
        for (let todo of nakedTodos){
            const selection = document.createElement("option");
            selection.value = [-1,nakedTodos.indexOf(todo)];
            selection.innerText = todo.name;
            selectElement.appendChild(selection);
        }
        return selectElement;
    }

    // most binding event listerner functions

    const bindAllEvents = function () {
        bindHelpButton();
        bindSidebarArea();
        bindContentArea();
        bindTodoFormDialogArea();
        bindDeleteFormDialogArea();
    }

    const bindHelpButton = function(){
        const helpButton = document.querySelector(".help.button");
        helpButton.addEventListener("click", function (){
            clearContentArea();
            const newContent = composeDefaultContent();
            baseBackground.replaceChild(newContent, content);
            content = newContent;
            bindContentArea();
    })};

    const bindSidebarArea = function () {
        bindDropdownArea();
        bindAllProjectsAndAnyChildTodos();
        bindAllNakedTodos();
        bindUpDownIcons();
    }

    const bindDropdownArea = function () {
        const dropdownButton = sidebar.querySelector(".new-dropdown.button");
        const newButtonContainer = sidebar.querySelector(".new-button.container");
        dropdownButton.addEventListener("click", () => toggleShowHideElement(newButtonContainer));
        const newProjectButton = newButtonContainer.querySelector(".new.project.button");
        newProjectButton.addEventListener("click", () => _index_js__WEBPACK_IMPORTED_MODULE_0__.pageManager.processNewProject());
        const newTodoButton = newButtonContainer.querySelector(".new.todo.button");
        newTodoButton.addEventListener("click", () => showNewTodoFormDialog());
        const deleteButton = newButtonContainer.querySelector(".delete.button");
        deleteButton.addEventListener("click", () => showDeleteDialog());
    }

    const bindAllProjectsAndAnyChildTodos = function () {
        const projectAndChildTodoBars = sidebar.querySelectorAll(".project-and-child-todo.area");
        for (let projectAndChildTodoBar of projectAndChildTodoBars) {
            bindProjectAndChildTodosBar(projectAndChildTodoBar);
        }
    }

    const bindAllNakedTodos = function () {
        const nakedTodoBars = sidebar.querySelectorAll(".sidebar.area > .todo.bar.area");
        for (let todoBar of nakedTodoBars) {
            bindTodoBar(todoBar);
        }
    }

    const bindProjectAndChildTodosBar = function (projectAndChildTodosNode) {
        const projectBarNode = projectAndChildTodosNode.querySelector(".project.bar.area");
        projectBarNode.addEventListener("click", () => _index_js__WEBPACK_IMPORTED_MODULE_0__.pageManager.toggleOpenCloseProjectTab(projectAndChildTodosNode));
        projectBarNode.addEventListener("auxclick", function() {
            renderEditNameFormAtBar(projectBarNode);
            hideIcons(projectAndChildTodosNode);
        });
        bindChildTodoBars(projectBarNode);
    }

    const bindChildTodoBars = function(projectBarNode){
        if (projectBarNode.project.getIsTodosShown()) {
            let childBarNode = projectBarNode.nextSibling;
            while (childBarNode !== null) {
                bindTodoBar(childBarNode);
                childBarNode = childBarNode.nextSibling;
            }
        }
    }

    const bindTodoBar = function (todoBar) {
        todoBar.addEventListener("click", () => rerenderContentArea(todoBar.object));
        todoBar.addEventListener("auxclick", () => renderEditNameFormAtBar(todoBar));
    }

    const bindUpDownIcons = function (projectBarNode) {
        let upIcons;
        let downIcons;
        // if a project bar node is NOT specified, bind to all icons
        if (projectBarNode === undefined){
            upIcons = sidebar.querySelectorAll(".up.icon");
            downIcons = sidebar.querySelectorAll(".down.icon");
        } else{
            upIcons = [projectBarNode.querySelector(".up.icon")];
            downIcons = [projectBarNode.querySelector(".down.icon")];
        }
        for (let upIconElement of upIcons){
            upIconElement.addEventListener("click", (e)=>_index_js__WEBPACK_IMPORTED_MODULE_0__.pageManager.moveProjectNodeUp(e,upIconElement.projectAndChildNode));
        }
        for (let downIconElement of downIcons){
            downIconElement.addEventListener("click", (e)=>_index_js__WEBPACK_IMPORTED_MODULE_0__.pageManager.moveProjectNodeDown(e,downIconElement.projectAndChildNode));
        }
    }

    const bindDeleteFormDialogArea = function(){
        const submitButton = deleteDialog.querySelector(".submit.button");
        const cancelButton = deleteDialog.querySelector(".cancel.button");
        submitButton.addEventListener("click", (e) => _index_js__WEBPACK_IMPORTED_MODULE_0__.pageManager.processDeleteFormSubmit(e, deleteDialog.querySelector("form")));
        cancelButton.addEventListener("click", closeDeleteDialog);
    }

    // content binding

    const rerenderContentArea = function (todoObject) {
        clearContentArea();
        renderTodoContent(todoObject);
        bindContentArea(todoObject);
    }

    const swapNodeElements = function(obj1, obj2) {
        // create marker element and insert it where obj1 is
        var temp = document.createElement("div");
        obj1.parentNode.insertBefore(temp, obj1);
        // move obj1 to right before obj2
        obj2.parentNode.insertBefore(obj1, obj2);
        // move obj2 to right before where obj1 used to be
        temp.parentNode.insertBefore(obj2, temp);
        // remove temporary marker node
        temp.parentNode.removeChild(temp);
    }

    const bindContentArea = function (todoObject) {
        const addTodoButton = content.querySelector(".add-todo.button");
        if (todoObject == undefined ){
            addTodoButton.addEventListener("click", () => showNewTodoFormDialog());
        } else{
            const checklistInputs = content.querySelectorAll("input");
            const todoChecklists = todoObject.getChecklistArray();
            for (let i = 0; i < checklistInputs.length ; i++){
                checklistInputs[i].addEventListener("click", ()=> _index_js__WEBPACK_IMPORTED_MODULE_0__.pageManager.processChecklistToggle(todoChecklists[i],todoObject));
            }
        }
    }

    const bindTodoFormDialogArea = function () {
        const submitButton = newTodoFormDialog.querySelector(".submit.button");
        const cancelButton = newTodoFormDialog.querySelector(".cancel.button");
        const addAnotherFieldButton = newTodoFormDialog.querySelector(".add.checklist.button");
        const todoForm = newTodoFormDialog.querySelector("form");
        submitButton.addEventListener("click", (e) => _index_js__WEBPACK_IMPORTED_MODULE_0__.pageManager.processNewTodoFormSubmit(e, todoForm));
        cancelButton.addEventListener("click", closeNewTodoFormDialog);
        addAnotherFieldButton.addEventListener("click", addAnotherChecklistField)
    }

    return { init, swapNodeElements,
        appendProjectChildTodos, clearProjectChildTodos,
        renderAndBindNewProject, appendNewTodoAtIndex,
        closeNewTodoFormDialog, bindChildTodoBars,
        bindTodoBar, closeEditNameForm,
        removeTab, closeDeleteDialog, displayIcons,
     };
}();





/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   storageManager: () => (/* binding */ storageManager)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");
// this module is for working with localStorage to store data //




const storageManager = function () {
    let projects = [];
    let todos = [];
    let isStorageAvailable;

    const storageAvailable = function () {
        let test = 'test';
        try {
            localStorage.setItem(test, test);
            localStorage.removeItem(test);
            console.log("local storage available");
            console.log(localStorage);
            return true;
        } catch (e) {
            console.log("local storage unavailable");
            return false;
        }
    }

    const turnStorageOn = function () {
        isStorageAvailable = checkStorageAvailable();
    }

    const checkStorageAvailable = function () {
        return Boolean(storageAvailable("localStorage"));
    }

    turnStorageOn();

    const getProjectsAndTodosFromStorage = function () {
        const partialProjectsAndTodos = getPartialProjectsAndTodos();
        if (partialProjectsAndTodos == undefined) {
            alert("No projects or todos obtained from storage")
            return undefined;
        }
        const partialProjects = partialProjectsAndTodos.partialProjects;
        const partialTodos = partialProjectsAndTodos.partialTodos;
        let projects = [];
        let todos = [];
        for (let partialProject of partialProjects) {
            projects.push(reattachProjectMethods(partialProject));
        }
        for (let partialTodo of partialTodos) {
            todos.push(reattachTodoMethods(partialTodo));
        }

        return { projects, todos };
    }

    const reattachProjectMethods = function (partial) {
        partial = (0,_project_js__WEBPACK_IMPORTED_MODULE_1__.attachProjectMethods)(partial);
        for (let i=0; i< partial.getTodoArray().length; i++) {
            const todo = partial.getTodoArray()[i];
            partial.todoArray[i] = reattachTodoMethods(todo);
        }
        return partial;
    }

    const reattachTodoMethods = function (partial) {
        partial = (0,_todo_js__WEBPACK_IMPORTED_MODULE_2__.attachTodoMethods)(partial);
        for (let i=0; i< partial.getChecklistArray().length; i++) {
            const checklist = partial.getChecklistArray()[i];
            partial.checklistArray[i] = reattachChecklistMethods(checklist);
        }
        return partial;
    }

    const reattachChecklistMethods = function (partial) {
        partial = (0,_todo_js__WEBPACK_IMPORTED_MODULE_2__.attachChecklistMethods)(partial);
        return partial;
    }

    const getPartialProjectsAndTodos = function () {
        let partialProjects = [];
        let partialTodos = [];
        if (!isStorageAvailable) {
            return;
        }
        let i = 0;
        let projectFromStorage = localStorage.getItem(`project${i}`);
        while (projectFromStorage !== null) {
            partialProjects.push(JSON.parse(projectFromStorage));
            i++;
            projectFromStorage = localStorage.getItem(`project${i}`);
        }
        i = 0;
        let todoFromStorage = localStorage.getItem(`todo${i}`);
        while (todoFromStorage !== null) {
            partialTodos.push(JSON.parse(todoFromStorage));
            i++;
            todoFromStorage = localStorage.getItem(`todo${i}`);
        }
        return { partialProjects, partialTodos }
    }

    const setAllProjectsAndTodos = function () {
        if (!isStorageAvailable) {
            return;
        }
        setAllProjects();
        setAllTodos();
    }

    const setAllProjects = function(){
        const projects = _index_js__WEBPACK_IMPORTED_MODULE_0__.pageManager.getProjectsAndNakedTodos().projects;
        for (let project of projects) {
            setProjectOrTodo(project);
        }
    }

    const setAllTodos = function(){
        const todos = _index_js__WEBPACK_IMPORTED_MODULE_0__.pageManager.getProjectsAndNakedTodos().todosWithoutProject;
        for (let todo of todos) {
            setProjectOrTodo(todo);
        }
    }

    const setProjectOrTodo = function (object) {
        if (!isStorageAvailable) {
            return;
        }
        let finalJSON;
        const projects = _index_js__WEBPACK_IMPORTED_MODULE_0__.pageManager.getProjectsAndNakedTodos().projects;
        const projectIndex = projects.indexOf(object);
        if (projectIndex !== -1) {
            finalJSON = stringifyProject(object);
            localStorage.setItem(`project${projectIndex}`, finalJSON);
            console.log(`Local storage updated project${projectIndex}`)
        } else {
            const todos = _index_js__WEBPACK_IMPORTED_MODULE_0__.pageManager.getProjectsAndNakedTodos().todosWithoutProject;
            const todoIndex = todos.indexOf(object);
            finalJSON = stringifyTodo(object);
            localStorage.setItem(`todo${todoIndex}`, finalJSON);
            console.log(`Local storage updated project${projectIndex}`)
        }
    }

    const stringifyProject = function (projectObject) {
        let projectJSON = JSON.stringify(projectObject);
        return projectJSON;
    }

    const stringifyTodo = function (todoObject) {
        const initialJSON = JSON.stringify(todoObject);
        const checklistJSON = stringifyChecklist(todoObject);
        const finalTodoJSON = insertChecklistJSON(checklistJSON, initialJSON);
        return finalTodoJSON;
    }

    const stringifyChecklist = function (todoObject) {
        let JSONstring = "";
        const checklistArray = todoObject.getChecklistArray();
        for (let checklist of checklistArray) {
            JSONstring += JSON.stringify(checklist) + ", ";
        }
        if (JSONstring.length > 0) {
            JSONstring = JSONstring.slice(0, -2);
        }
        return JSONstring;
    }

    const insertTodoJSON = function (todoJSON, initialJSON) {
        const indexOfTodoArrayKey = initialJSON.indexOf("todoArray");
        const indexToAddTo = indexOfTodoArrayKey + ('todoArray":[');
        const indexToRemoveUpTo = initialJSON.indexOf("]",indexToAddTo);
        const insertedJSON = initialJSON.substring(0, indexToAddTo)
            + todoJSON
            + initialJSON.substring(indexToRemoveUpTo);
        return insertedJSON;
    }

    const insertChecklistJSON = function (checklistArrayJSON, initialJSON) {
        const indexOfChecklistArrayKey = initialJSON.indexOf("checklistArray");
        const indexToAddTo = indexOfChecklistArrayKey + ('checklistArray":[').length;
        const indexToRemoveUpTo = initialJSON.indexOf("]",indexToAddTo);
        const insertedJSON = initialJSON.substring(0, indexToAddTo)
            + checklistArrayJSON
            + initialJSON.substring(indexToRemoveUpTo);
        return insertedJSON;
    }

    const removeProjectOrTodo = function (objectIndex) {
        if (!isStorageAvailable) {
            return;
        }
        console.log(`trying to remove ${objectIndex}`);
        localStorage.clear();
        setAllProjectsAndTodos();
        console.log(`StorageManager has updated to ${localStorage}`);
        console.log(localStorage);
    }

    return {
        setAllProjectsAndTodos, setProjectOrTodo,
        getProjectsAndTodosFromStorage, removeProjectOrTodo,
    }


}();



/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   attachChecklistMethods: () => (/* binding */ attachChecklistMethods),
/* harmony export */   attachTodoMethods: () => (/* binding */ attachTodoMethods),
/* harmony export */   completeToggleable: () => (/* binding */ completeToggleable),
/* harmony export */   createChecklist: () => (/* binding */ createChecklist),
/* harmony export */   createTodo: () => (/* binding */ createTodo)
/* harmony export */ });
// module for todo and checklist//

function createTodo (name,description,dueDate,priority,...checklistDescriptions){
    let isComplete = false;

    // IIFE to initialize checklist array when todo is created
    let checklistArray = [];
    const initChecklist = function(){
        for (let description of checklistDescriptions){
            checklistArray.push(createChecklist(description));
        }
    }();

    const methods = todoMethodDelegate();


    return {
        name,
        description,
        dueDate,
        priority,
        isComplete,
        checklistArray,
        ...methods,
    }
}

const todoMethodDelegate = function(){

    const getChecklistArray = function () {
        return this.checklistArray;
    }

    const addChecklist = function (newChecklist) {
        this.checklistArray.push(newChecklist);
    }

    const removeChecklist = function (checklistToRemove) {
        this.checklistArray.pop(checklistToRemove);
    }

    return {
        getChecklistArray,
        addChecklist,
        removeChecklist,
        ...completeToggleable(),
    }
}

const attachTodoMethods = function(partial){
    const methods = todoMethodDelegate();
    
    return {
        ...methods,
        ...partial,
    }
}

function createChecklist(description) {
    let isComplete = false;

    return {
        isComplete,
        ...completeToggleable(),
        description,
    }
}

function completeToggleable() {

    const toggleComplete = function(){
        this.isComplete = !this.isComplete;
        console.log("Toggled complete status to " + this.isComplete);
        console.log(this);
    }

    return {
        toggleComplete,
    }
}

const attachChecklistMethods = function(partial){

    return {
        ...completeToggleable(),
        ...partial,
    }
}



/***/ }),

/***/ "./src/fonts/3Dumb.woff":
/*!******************************!*\
  !*** ./src/fonts/3Dumb.woff ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "88f5496976e6b98da2fd.woff";

/***/ }),

/***/ "./src/fonts/3Dumb.woff2":
/*!*******************************!*\
  !*** ./src/fonts/3Dumb.woff2 ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5057644226f7c04ea312.woff2";

/***/ }),

/***/ "./src/images/menu-down.svg":
/*!**********************************!*\
  !*** ./src/images/menu-down.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "09850ba33147031eed05.svg";

/***/ }),

/***/ "./src/images/menu-up.svg":
/*!********************************!*\
  !*** ./src/images/menu-up.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3afdfaf1d50e5cc8e070.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLG1IQUFzQztBQUNsRiw0Q0FBNEMsaUhBQXFDO0FBQ2pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQsY0FBYyxtQ0FBbUM7QUFDakQ7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sd0ZBQXdGLE1BQU0sWUFBWSxNQUFNLE9BQU8sUUFBUSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLFFBQVEsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFFBQVEsYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxhQUFhLE1BQU0sWUFBWSxXQUFXLFlBQVksY0FBYyxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxjQUFjLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sWUFBWSxXQUFXLFVBQVUsVUFBVSxXQUFXLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sWUFBWSxNQUFNLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLGFBQWEsTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLFNBQVMsS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLE1BQU0sYUFBYSxNQUFNLFVBQVUsWUFBWSxXQUFXLGFBQWEsTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxZQUFZLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsYUFBYSxNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFN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QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRXVCOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZXdkI7QUFDdUM7O0FBRXZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCLGtEQUFXO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkVBO0FBQ3lDO0FBQ0E7QUFDSTs7QUFFN0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUEscURBQXFELGNBQWM7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLGtEQUFXO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQ0FBMEMsZ0RBQU07QUFDaEQsNENBQTRDLGtEQUFRO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvREFBb0Qsa0RBQVc7QUFDL0Q7QUFDQTtBQUNBLGdCQUFnQixrREFBVztBQUMzQjtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IseUJBQXlCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZCQUE2QixrREFBVztBQUN4QztBQUNBLHNCQUFzQiwwQkFBMEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHFCQUFxQjtBQUM3QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCLGtEQUFXO0FBQ3BDLDJCQUEyQixrREFBVztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCxrREFBVztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxrREFBVztBQUNsRTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFD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V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3JlbmRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy8zRHVtYi53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZm9udHMvM0R1bWIud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIHdlYmZvbnRzLCBjdXN0b20gdmFyaWFibGVzLCBnbG9iYWwgcmVzZXRzLCBhbmQgY2hhbmdlcyB0byBib2R5ICovXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJDYXJ0b29uXCI7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KFwid29mZjJcIiksXG4gICAgICAgIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQoXCJ3b2ZmXCIpO1xufVxuXG5cbioge1xuICAgIC0tZG9jdW1lbnQtYmFja2dyb3VuZC1jb2xvcjogI0IxQUZGRjtcbiAgICAtLWJhc2UtYmFja2dyb3VuZC1jb2xvcjogI0ZGRTlEMDtcbiAgICAtLWJ1dHRvbi1jb2xvcjogcGluaztcbiAgICAtLWNvbnRlbnQtYmFja2dyb3VuZC1jb2xvcjogI0ZGRkVEMztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG46cm9vdHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kb2N1bWVudC1iYWNrZ3JvdW5kLWNvbG9yKTtcbn1cblxuaDEsXG5oMixcbmgzLFxucCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbmJvZHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDEwdmg7XG4gICAgZ2FwOiAxMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xufVxuXG5cbi8qIHNlY3Rpb24gYW5kIHN0eWxlIHBhZ2UgaW50byAzIG1haW4gc2VjdGlvbnMgKi9cblxuLmJhc2UuYXJlYSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IGF1dG87XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCAxZnI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFzZS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG1heC13aWR0aDogMTAwMHB4O1xuICAgIG1pbi13aWR0aDogNjAwcHg7XG59XG5cbi8qIHN0eWxpemUgaGVhZGVyICovXG5cbi5oZWFkZXIuYXJlYSB7XG4gICAgZ3JpZC1jb2x1bW46IDEvMztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblxuICAgIC5oZWFkZXIubG9nbyB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkNhcnRvb25cIjtcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICBmbGV4LWdyb3c6MTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIC5oZWxwLmJ1dHRvbntcbiAgICAgICAgYXNwZWN0LXJhdGlvOiAxLzE7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDYwJTtcbiAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICB9XG4gICAgXG59XG5cblxuLyogc3R5bGl6ZSBzaWRlYmFyIGFyZWEqL1xuLnNpZGViYXIuYXJlYSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIC5idXR0b257XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJ1dHRvbi1jb2xvcik7XG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgIC5idXR0b246aG92ZXIsIC5idXR0b24ucHJlc3NlZHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yKTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgIC5uZXctYnV0dG9uLmNvbnRhaW5lcntcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwcHg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAvKiBkZWZhdWx0IGhzbGEgdmFsdWVzIGZvciBzaWRlYmFyIGJhciBjb2xvcnMgKi9cbiAgICAtLWg6IDE5OTtcbiAgICAtLXM6IDEwMDtcbiAgICAtLWw6IDg3JTtcbiAgICAtLWE6MTtcblxuICAgIC5iYXIuYXJlYSB7XG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4IHJnYigwLCAwLCAwKTtcbiAgICAgICAgZmxleDogMCAwIDYwcHg7XG4gICAgICAgIC8qIGNlbnRlciB0ZXh0ICovXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgYmFja2dyb3VuZDogaHNsKHZhcigtLWgpIHZhcigtLXMpIHZhcigtLWwpIC8gdmFyKC0tYSkpO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcbiAgICB9XG5cbiAgICAuYmFyLmFyZWEub3BlbntcbiAgICAgICAgLS1sOiA3MCU7XG4gICAgfVxuXG4gICAgLyogc3R5bGUgdGhlIGZvcm0gdGhhdCBhcHBlYXJzIHRvIGVkaXQgbmFtZSAqL1xuICAgIC5iYXIuYXJlYSBmb3Jte1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cblxuICAgIC5iYXIuYXJlYSBmb3JtIGlucHV0e1xuICAgICAgICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxMnB4O1xuICAgICAgICAtLWw6IDI1JTtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgZ3JheTtcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgIH1cblxuICAgIC5iYXIuYXJlYSBmb3JtIC5zdWJtaXQuYnV0dG9ue1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDJweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxufVxuXG4vKiBkaXNwbGF5IGNoaWxkIHRvZG9zIG9mIHByb2plY3RzIGFzIHdhbnRlZCAqL1xuLnNpZGViYXIgLnByb2plY3QtYW5kLWNoaWxkLXRvZG8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnNpZGViYXIgLnByb2plY3QtYW5kLWNoaWxkLXRvZG8gLnRvZG8uYmFyLmFyZWEge1xuICAgIGZsZXg6IDAgMCA0MHB4O1xuICAgIHBhZGRpbmctbGVmdDogNDBweDtcbn1cblxuLyogc3R5bGl6ZSBjb250ZW50IGFyZWEgKi9cbi5jb250ZW50LmFyZWF7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29udGVudC1iYWNrZ3JvdW5kLWNvbG9yKTtcblxuICAgIC5jb250ZW50LnRpdGxle1xuICAgICAgICBhbGlnbi1zZWxmOmNlbnRlcjtcbiAgICB9XG5cbiAgICAuY29udGVudC5kYXRle1xuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICB9XG5cblxuXG4gICAgLmNoZWNrbGlzdC5hcmVhe1xuICAgICAgICBkaXNwbGF5OmdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweCAxZnI7XG4gICAgICAgIGFsaWduLWl0ZW1zOmVuZDtcbiAgICB9XG5cbiAgICAvKiBkZWZhdWx0IHRleHQgY29udGVudCAqL1xuICAgIC5kZWZhdWx0LnRleHR7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cblxuICAgIC5hZGQtdG9kby5idXR0b257XG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IG1heC1jb250ZW50O1xuICAgICAgICBhc3BlY3QtcmF0aW86IGF1dG87XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJ1dHRvbi1jb2xvcik7XG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgIC5hZGQtdG9kby5idXR0b246aG92ZXJ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1jb2xvcik7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG59XG5cbi8qIHN0eWxpemluZyBkaWFsb2dzISAqL1xuXG5kaWFsb2cuZGVsZXRlLmRpYWxvZyBmb3Jte1xuICAgIGRpc3BsYXk6Z3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1heC1jb250ZW50IDFmcjtcbiAgICBnYXA6IDEwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGxhYmVse1xuICAgICAgICB0ZXh0LWFsaWduOmVuZDtcbiAgICB9XG5cbiAgICBzZWxlY3R7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICB9XG5cbiAgICAuY29udGFpbmVye1xuICAgICAgICBncmlkLWNvbHVtbjogMi8zO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBnYXA6IDIwcHg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgfVxuXG4gICAgLmNvbnRhaW5lciAuYnV0dG9ue1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgfVxufVxuXG5kaWFsb2cubmV3LnRvZG8uZGlhbG9nIGZvcm17XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxMHB4O1xuXG4gICAgPiAqe1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDExMHB4IDFmcjtcbiAgICAgICAgZ2FwOiAxMHB4O1xuICAgIH1cblxuICAgIHNlbGVjdCwgaW5wdXQge1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgfVxuXG4gICAgbGFiZWwsIHB7XG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAucHJpb3JpdHkucXVlc3Rpb24uYXJlYXtcbiAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgICAgLmNvbnRhaW5lcntcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1heC1jb250ZW50IDFmcjtcbiAgICAgICAgICAgIGdhcDogMnB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5kZXNjcmlwdGlvbiBsYWJlbHtcbiAgICAgICAgYWxpZ24tc2VsZjpmbGV4LXN0YXJ0O1xuICAgIH1cblxuICAgIHRleHRhcmVhe1xuICAgICAgICBtaW4td2lkdGg6IDIzNy4yNXB4O1xuICAgICAgICBtYXgtd2lkdGg6IDU3N3B4O1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgfVxuXG4gICAgLmNoZWNrbGlzdC5xdWVzdGlvbi5hcmVhe1xuICAgICAgICBkaXYuY2hlY2tsaXN0e1xuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDIvMztcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBnYXA6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgbGFiZWx7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOmVuZDtcbiAgICAgICAgfVxuICAgICAgICAuYWRkLmNoZWNrbGlzdC5idXR0b257XG4gICAgICAgICAgICBncmlkLXJvdzogLTEvMDtcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAyLzM7XG4gICAgICAgICAgICBhc3BlY3QtcmF0aW86IDEvMTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYig1NCwgNTQsIDU0KTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuY29udGFpbmVye1xuICAgICAgICBncmlkLWNvbHVtbjogMi8zO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBnYXA6IDIwcHg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgfVxuXG4gICAgLmNvbnRhaW5lciAuYnV0dG9ue1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsbUVBQW1FO0FBQ25FO0lBQ0ksc0JBQXNCO0lBQ3RCOzhEQUM0QztBQUNoRDs7O0FBR0E7SUFDSSxvQ0FBb0M7SUFDcEMsZ0NBQWdDO0lBQ2hDLG9CQUFvQjtJQUNwQixtQ0FBbUM7SUFDbkMsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksa0RBQWtEO0FBQ3REOztBQUVBOzs7O0lBSUksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJB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QUNJLHFCQUFxQjtJQUN6Qjs7SUFFQTtRQUNJLG1CQUFtQjtRQUNuQixnQkFBZ0I7UUFDaEIsWUFBWTtJQUNoQjs7SUFFQTtRQUNJO1lBQ0ksZ0JBQWdCO1lBQ2hCLGFBQWE7WUFDYixTQUFTO1FBQ2I7UUFDQTtZQUNJLFdBQVc7UUFDZjtRQUNBO1lBQ0ksY0FBYztRQUNsQjtRQUNBO1lBQ0ksY0FBYztZQUNkLGdCQUFnQjtZQUNoQixpQkFBaUI7WUFDakIsa0JBQWtCO1lBQ2xCLGlDQUFpQztZQUNqQyxZQUFZO1lBQ1osc0JBQXNCO1FBQzFCO0lBQ0o7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsYUFBYTtRQUNiLFNBQVM7UUFDVCx5QkFBeUI7SUFDN0I7O0lBRUE7UUFDSSxZQUFZO0lBQ2hCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogd2ViZm9udHMsIGN1c3RvbSB2YXJpYWJsZXMsIGdsb2JhbCByZXNldHMsIGFuZCBjaGFuZ2VzIHRvIGJvZHkgKi9cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJDYXJ0b29uXFxcIjtcXG4gICAgc3JjOiB1cmwoXFxcIi4vZm9udHMvM0R1bWIud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksXFxuICAgICAgICB1cmwoXFxcIi4vZm9udHMvM0R1bWIud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbn1cXG5cXG5cXG4qIHtcXG4gICAgLS1kb2N1bWVudC1iYWNrZ3JvdW5kLWNvbG9yOiAjQjFBRkZGO1xcbiAgICAtLWJhc2UtYmFja2dyb3VuZC1jb2xvcjogI0ZGRTlEMDtcXG4gICAgLS1idXR0b24tY29sb3I6IHBpbms7XFxuICAgIC0tY29udGVudC1iYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRUQzO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZG9jdW1lbnQtYmFja2dyb3VuZC1jb2xvcik7XFxufVxcblxcbmgxLFxcbmgyLFxcbmgzLFxcbnAge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMTB2aDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG59XFxuXFxuXFxuLyogc2VjdGlvbiBhbmQgc3R5bGUgcGFnZSBpbnRvIDMgbWFpbiBzZWN0aW9ucyAqL1xcblxcbi5iYXNlLmFyZWEge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IGF1dG87XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggMWZyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYXNlLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcXG4gICAgbWluLXdpZHRoOiA2MDBweDtcXG59XFxuXFxuLyogc3R5bGl6ZSBoZWFkZXIgKi9cXG5cXG4uaGVhZGVyLmFyZWEge1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcblxcbiAgICAuaGVhZGVyLmxvZ28ge1xcbiAgICAgICAgZm9udC1mYW1pbHk6IFxcXCJDYXJ0b29uXFxcIjtcXG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgICAgIGZsZXgtZ3JvdzoxO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC5oZWxwLmJ1dHRvbntcXG4gICAgICAgIGFzcGVjdC1yYXRpbzogMS8xO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNjAlO1xcbiAgICAgICAgd2lkdGg6IDI1cHg7XFxuICAgICAgICBtYXJnaW46IDEwcHg7XFxuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICB9XFxuICAgIFxcbn1cXG5cXG5cXG4vKiBzdHlsaXplIHNpZGViYXIgYXJlYSovXFxuLnNpZGViYXIuYXJlYSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gICAgLmJ1dHRvbntcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJ1dHRvbi1jb2xvcik7XFxuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xcbiAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB9XFxuXFxuICAgIC5idXR0b246aG92ZXIsIC5idXR0b24ucHJlc3NlZHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1jb2xvcik7XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgIH1cXG5cXG4gICAgLm5ldy1idXR0b24uY29udGFpbmVye1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiA1MHB4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAvKiBkZWZhdWx0IGhzbGEgdmFsdWVzIGZvciBzaWRlYmFyIGJhciBjb2xvcnMgKi9cXG4gICAgLS1oOiAxOTk7XFxuICAgIC0tczogMTAwO1xcbiAgICAtLWw6IDg3JTtcXG4gICAgLS1hOjE7XFxuXFxuICAgIC5iYXIuYXJlYSB7XFxuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCByZ2IoMCwgMCwgMCk7XFxuICAgICAgICBmbGV4OiAwIDAgNjBweDtcXG4gICAgICAgIC8qIGNlbnRlciB0ZXh0ICovXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gICAgICAgIGJhY2tncm91bmQ6IGhzbCh2YXIoLS1oKSB2YXIoLS1zKSB2YXIoLS1sKSAvIHZhcigtLWEpKTtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xcbiAgICB9XFxuXFxuICAgIC5iYXIuYXJlYS5vcGVue1xcbiAgICAgICAgLS1sOiA3MCU7XFxuICAgIH1cXG5cXG4gICAgLyogc3R5bGUgdGhlIGZvcm0gdGhhdCBhcHBlYXJzIHRvIGVkaXQgbmFtZSAqL1xcbiAgICAuYmFyLmFyZWEgZm9ybXtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIH1cXG5cXG4gICAgLmJhci5hcmVhIGZvcm0gaW5wdXR7XFxuICAgICAgICBtYXJnaW4tbGVmdDogLTEwcHg7XFxuICAgICAgICBwYWRkaW5nOiA1cHggMTJweDtcXG4gICAgICAgIC0tbDogMjUlO1xcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgZ3JheTtcXG4gICAgICAgIHdpZHRoOiAyNTBweDtcXG4gICAgfVxcblxcbiAgICAuYmFyLmFyZWEgZm9ybSAuc3VibWl0LmJ1dHRvbntcXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMnB4O1xcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxufVxcblxcbi8qIGRpc3BsYXkgY2hpbGQgdG9kb3Mgb2YgcHJvamVjdHMgYXMgd2FudGVkICovXFxuLnNpZGViYXIgLnByb2plY3QtYW5kLWNoaWxkLXRvZG8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uc2lkZWJhciAucHJvamVjdC1hbmQtY2hpbGQtdG9kbyAudG9kby5iYXIuYXJlYSB7XFxuICAgIGZsZXg6IDAgMCA0MHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XFxufVxcblxcbi8qIHN0eWxpemUgY29udGVudCBhcmVhICovXFxuLmNvbnRlbnQuYXJlYXtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbnRlbnQtYmFja2dyb3VuZC1jb2xvcik7XFxuXFxuICAgIC5jb250ZW50LnRpdGxle1xcbiAgICAgICAgYWxpZ24tc2VsZjpjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLmNvbnRlbnQuZGF0ZXtcXG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgICB9XFxuXFxuXFxuXFxuICAgIC5jaGVja2xpc3QuYXJlYXtcXG4gICAgICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweCAxZnI7XFxuICAgICAgICBhbGlnbi1pdGVtczplbmQ7XFxuICAgIH1cXG5cXG4gICAgLyogZGVmYXVsdCB0ZXh0IGNvbnRlbnQgKi9cXG4gICAgLmRlZmF1bHQudGV4dHtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgfVxcblxcbiAgICAuYWRkLXRvZG8uYnV0dG9ue1xcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgICAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgICAgICAgYXNwZWN0LXJhdGlvOiBhdXRvO1xcbiAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJ1dHRvbi1jb2xvcik7XFxuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIH1cXG5cXG4gICAgLmFkZC10b2RvLmJ1dHRvbjpob3ZlcntcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1jb2xvcik7XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgIH1cXG59XFxuXFxuLyogc3R5bGl6aW5nIGRpYWxvZ3MhICovXFxuXFxuZGlhbG9nLmRlbGV0ZS5kaWFsb2cgZm9ybXtcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1heC1jb250ZW50IDFmcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBsYWJlbHtcXG4gICAgICAgIHRleHQtYWxpZ246ZW5kO1xcbiAgICB9XFxuXFxuICAgIHNlbGVjdHtcXG4gICAgICAgIHBhZGRpbmc6IDVweDtcXG4gICAgfVxcblxcbiAgICAuY29udGFpbmVye1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBnYXA6IDIwcHg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICB9XFxuXFxuICAgIC5jb250YWluZXIgLmJ1dHRvbntcXG4gICAgICAgIHBhZGRpbmc6IDVweDtcXG4gICAgfVxcbn1cXG5cXG5kaWFsb2cubmV3LnRvZG8uZGlhbG9nIGZvcm17XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcblxcbiAgICA+ICp7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMTBweCAxZnI7XFxuICAgICAgICBnYXA6IDEwcHg7XFxuICAgIH1cXG5cXG4gICAgc2VsZWN0LCBpbnB1dCB7XFxuICAgICAgICBwYWRkaW5nOiA1cHg7XFxuICAgIH1cXG5cXG4gICAgbGFiZWwsIHB7XFxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLnByaW9yaXR5LnF1ZXN0aW9uLmFyZWF7XFxuICAgICAgICBkaXNwbGF5OmZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuICAgICAgICAuY29udGFpbmVye1xcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWF4LWNvbnRlbnQgMWZyO1xcbiAgICAgICAgICAgIGdhcDogMnB4O1xcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTAwcHg7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLmRlc2NyaXB0aW9uIGxhYmVse1xcbiAgICAgICAgYWxpZ24tc2VsZjpmbGV4LXN0YXJ0O1xcbiAgICB9XFxuXFxuICAgIHRleHRhcmVhe1xcbiAgICAgICAgbWluLXdpZHRoOiAyMzcuMjVweDtcXG4gICAgICAgIG1heC13aWR0aDogNTc3cHg7XFxuICAgICAgICBwYWRkaW5nOiA1cHg7XFxuICAgIH1cXG5cXG4gICAgLmNoZWNrbGlzdC5xdWVzdGlvbi5hcmVhe1xcbiAgICAgICAgZGl2LmNoZWNrbGlzdHtcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgaW5wdXQge1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgfVxcbiAgICAgICAgbGFiZWx7XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjplbmQ7XFxuICAgICAgICB9XFxuICAgICAgICAuYWRkLmNoZWNrbGlzdC5idXR0b257XFxuICAgICAgICAgICAgZ3JpZC1yb3c6IC0xLzA7XFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgICAgICAgICBhc3BlY3QtcmF0aW86IDEvMTtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDU0LCA1NCwgNTQpO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcXG4gICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5jb250YWluZXJ7XFxuICAgICAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGdhcDogMjBweDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIH1cXG5cXG4gICAgLmNvbnRhaW5lciAuYnV0dG9ue1xcbiAgICAgICAgcGFkZGluZzogNXB4O1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy9tb2R1bGUgdG8gY2FsbCB0aGUgb3RoZXIgY3JlYXRlIG9yIHJlbmRlciBmdW5jdGlvbnMgYmFzZWQgb24gaW5wdXRzXG5cbmltcG9ydCB7IHJlbmRlck1hbmFnZXIgfSBmcm9tIFwiLi9yZW5kZXIuanNcIjtcbmltcG9ydCB7IGNyZWF0ZVRvZG8gfSBmcm9tIFwiLi90b2RvLmpzXCI7XG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xuaW1wb3J0IHsgc3RvcmFnZU1hbmFnZXIgfSBmcm9tIFwiLi9zdG9yYWdlLmpzXCI7XG5cbmltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuXG5cbmNvbnN0IHBhZ2VNYW5hZ2VyID0gKGZ1bmN0aW9uICgpIHtcbiAgbGV0IHByb2plY3RzID0gW107XG4gIGxldCB0b2Rvc1dpdGhvdXRQcm9qZWN0ID0gW107XG5cbiAgY29uc3QgZ2V0UHJvamVjdHNBbmROYWtlZFRvZG9zID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7IHByb2plY3RzLCB0b2Rvc1dpdGhvdXRQcm9qZWN0IH07XG4gIH07XG5cbiAgY29uc3QgbW92ZVByb2plY3ROb2RlVXAgPSBmdW5jdGlvbiAoZXZlbnQsIHByb2plY3RBbmRDaGlsZE5vZGUpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdEFuZENoaWxkTm9kZS5wcm9qZWN0O1xuICAgIGNvbnN0IGluZGV4ID0gcHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KTtcbiAgICBjb25zb2xlLmxvZyhcIk1vdmUgcHJvamVjdCB1cFwiICsgaW5kZXgpO1xuICAgIGlmIChpbmRleCA+PSAxKSB7XG4gICAgICByZW5kZXJNYW5hZ2VyLnN3YXBOb2RlRWxlbWVudHMoXG4gICAgICAgIHByb2plY3RBbmRDaGlsZE5vZGUsXG4gICAgICAgIHByb2plY3RBbmRDaGlsZE5vZGUucHJldmlvdXNFbGVtZW50U2libGluZyxcbiAgICAgICk7XG4gICAgICBzd2FwQXJyYXlFbGVtZW50cyhwcm9qZWN0cywgaW5kZXggLSAxLCBpbmRleCk7XG4gICAgICBzdG9yYWdlTWFuYWdlci5zZXRQcm9qZWN0T3JUb2RvKHByb2plY3RzW2luZGV4XSk7XG4gICAgICBzdG9yYWdlTWFuYWdlci5zZXRQcm9qZWN0T3JUb2RvKHByb2plY3RzW2luZGV4IC0gMV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIlRoaXMgcHJvamVjdCBpcyBhcyBoaWdoIGFzIGl0IGNhbiBiZSFcIik7XG4gICAgfVxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9O1xuXG4gIGNvbnN0IG1vdmVQcm9qZWN0Tm9kZURvd24gPSBmdW5jdGlvbiAoZXZlbnQsIHByb2plY3RBbmRDaGlsZE5vZGUpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdEFuZENoaWxkTm9kZS5wcm9qZWN0O1xuICAgIGNvbnN0IGluZGV4ID0gcHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KTtcbiAgICBjb25zb2xlLmxvZyhcIk1vdmUgcHJvamVjdCBkb3duXCIgKyBpbmRleCk7XG4gICAgY29uc29sZS5sb2cocHJvamVjdHMubGVuZ3RoKTtcbiAgICBpZiAoaW5kZXggPCBwcm9qZWN0cy5sZW5ndGggLSAxKSB7XG4gICAgICByZW5kZXJNYW5hZ2VyLnN3YXBOb2RlRWxlbWVudHMoXG4gICAgICAgIHByb2plY3RBbmRDaGlsZE5vZGUsXG4gICAgICAgIHByb2plY3RBbmRDaGlsZE5vZGUubmV4dEVsZW1lbnRTaWJsaW5nLFxuICAgICAgKTtcbiAgICAgIHN3YXBBcnJheUVsZW1lbnRzKHByb2plY3RzLCBpbmRleCwgaW5kZXggKyAxKTtcbiAgICAgIHN0b3JhZ2VNYW5hZ2VyLnNldFByb2plY3RPclRvZG8ocHJvamVjdHNbaW5kZXhdKTtcbiAgICAgIHN0b3JhZ2VNYW5hZ2VyLnNldFByb2plY3RPclRvZG8ocHJvamVjdHNbaW5kZXggKyAxXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiVGhpcyBwcm9qZWN0IGlzIGFzIGxvdyBhcyBpdCBjYW4gYmUhXCIpO1xuICAgIH1cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfTtcblxuICBjb25zdCBzd2FwQXJyYXlFbGVtZW50cyA9IGZ1bmN0aW9uIChhcnJheSwgaW5kZXgxLCBpbmRleDIpIHtcbiAgICBjb25zdCBmaXJzdEVsZW1lbnRIb2xkZXIgPSBhcnJheVtpbmRleDFdO1xuICAgIGRlbGV0ZSBhcnJheVtpbmRleDFdO1xuICAgIGFycmF5W2luZGV4MV0gPSBhcnJheVtpbmRleDJdO1xuICAgIGFycmF5W2luZGV4Ml0gPSBmaXJzdEVsZW1lbnRIb2xkZXI7XG4gIH07XG5cbiAgY29uc3Qgc29ydE5ha2VkVG9kb3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgdG9kb3NXaXRob3V0UHJvamVjdC5zb3J0KGNvbXBhcmVQcmlvcml0eSk7XG4gIH07XG5cbiAgY29uc3QgY29tcGFyZVByaW9yaXR5ID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gYi5wcmlvcml0eSAtIGEucHJpb3JpdHk7XG4gIH07XG5cbiAgY29uc3QgbW92ZVRvZG9Ub1Byb2plY3QgPSBmdW5jdGlvbiAocHJvamVjdCwgdG9kbykge1xuICAgIHByb2plY3QuYWRkVG9kbyh0b2RvKTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVUb2RvRnJvbVByb2plY3QgPSBmdW5jdGlvbiAocHJvamVjdCwgdG9kbykge1xuICAgIHByb2plY3QucmVtb3ZlVG9kbyh0b2RvKTtcbiAgICB0b2Rvc1dpdGhvdXRQcm9qZWN0LnB1c2godG9kbyk7XG4gICAgc3RvcmFnZU1hbmFnZXIuc2V0UHJvamVjdE9yVG9kbyhwcm9qZWN0KTtcbiAgfTtcblxuICBjb25zdCB0b2dnbGVPcGVuQ2xvc2VQcm9qZWN0VGFiID0gZnVuY3Rpb24gKHByb2plY3RBbmRDaGlsZFRvZG9zQXJlYU5vZGUpIHtcbiAgICBjb25zdCBwcm9qZWN0T2JqZWN0ID0gcHJvamVjdEFuZENoaWxkVG9kb3NBcmVhTm9kZS5wcm9qZWN0O1xuICAgIGNvbnN0IHByb2plY3RCYXIgPVxuICAgICAgcHJvamVjdEFuZENoaWxkVG9kb3NBcmVhTm9kZS5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QuYmFyLmFyZWFcIik7XG4gICAgY29uc29sZS5sb2coXG4gICAgICBcIllvdSBhcmUgdHJ5aW5nIHRvIG9wZW4vY2xvc2UgdGhlIHByb2plY3Q6IFwiICsgcHJvamVjdE9iamVjdC5uYW1lLFxuICAgICk7XG4gICAgcHJvamVjdE9iamVjdC50b2dnbGVTaG93VG9kb3MoKTtcbiAgICBpZiAocHJvamVjdE9iamVjdC5nZXRJc1RvZG9zU2hvd24oKSkge1xuICAgICAgcmVuZGVyTWFuYWdlci5hcHBlbmRQcm9qZWN0Q2hpbGRUb2Rvcyhwcm9qZWN0QW5kQ2hpbGRUb2Rvc0FyZWFOb2RlKTtcbiAgICAgIGNvbnN0IHByb2plY3RCYXJOb2RlID1cbiAgICAgICAgcHJvamVjdEFuZENoaWxkVG9kb3NBcmVhTm9kZS5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QuYmFyLmFyZWFcIik7XG4gICAgICByZW5kZXJNYW5hZ2VyLmJpbmRDaGlsZFRvZG9CYXJzKHByb2plY3RCYXJOb2RlKTtcbiAgICAgIHByb2plY3RCYXIuY2xhc3NMaXN0LmFkZChcIm9wZW5cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbmRlck1hbmFnZXIuY2xlYXJQcm9qZWN0Q2hpbGRUb2Rvcyhwcm9qZWN0QW5kQ2hpbGRUb2Rvc0FyZWFOb2RlKTtcbiAgICAgIHByb2plY3RCYXIuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XG4gICAgfVxuICAgIHN0b3JhZ2VNYW5hZ2VyLnNldFByb2plY3RPclRvZG8ocHJvamVjdE9iamVjdCk7XG4gIH07XG5cbiAgY29uc3QgcHJvY2Vzc05ld1RvZG9Gb3JtU3VibWl0ID0gZnVuY3Rpb24gKGV2ZW50LCBmb3JtRWxlbWVudCkge1xuICAgIGxldCBpc0Zvcm1WYWxpZCA9IGZvcm1FbGVtZW50LmNoZWNrVmFsaWRpdHkoKTtcbiAgICBpZiAoIWlzRm9ybVZhbGlkKSB7XG4gICAgICBmb3JtRWxlbWVudC5yZXBvcnRWYWxpZGl0eSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgbmFtZSA9IGZvcm1FbGVtZW50LmVsZW1lbnRzLm5hbWUudmFsdWU7XG4gICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGZvcm1FbGVtZW50LmVsZW1lbnRzLmRlc2NyaXB0aW9uLnZhbHVlO1xuICAgICAgY29uc3QgZHVlRGF0ZSA9IGZvcm1FbGVtZW50LmVsZW1lbnRzLmR1ZURhdGUudmFsdWU7XG4gICAgICBjb25zdCBwcmlvcml0eSA9IGZvcm1FbGVtZW50LmVsZW1lbnRzLnByaW9yaXR5LnZhbHVlO1xuICAgICAgbGV0IGNoZWNrbGlzdCA9IGZvcm1FbGVtZW50LmVsZW1lbnRzLmNoZWNrbGlzdDtcbiAgICAgIGxldCBjaGVja2xpc3RWYWx1ZXNXaXRoTm9CbGFua3M7XG4gICAgICBpZiAoY2hlY2tsaXN0Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgY29uc3QgY2hlY2tsaXN0QXJyYXkgPSAoY2hlY2tsaXN0ID0gQXJyYXkuZnJvbShjaGVja2xpc3QpKTtcbiAgICAgICAgY2hlY2tsaXN0VmFsdWVzV2l0aE5vQmxhbmtzID0gY2hlY2tsaXN0QXJyYXlcbiAgICAgICAgICAubWFwKChjaGVja2xpc3QpID0+IGNoZWNrbGlzdC52YWx1ZSlcbiAgICAgICAgICAuZmlsdGVyKCh2YWx1ZSkgPT4gdmFsdWUgIT09IFwiXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hlY2tsaXN0VmFsdWVzV2l0aE5vQmxhbmtzID0gW2NoZWNrbGlzdC52YWx1ZV07XG4gICAgICB9XG4gICAgICBjb25zdCBwcm9qZWN0VG9BZGRUb0luZGV4ID1cbiAgICAgICAgZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihcInNlbGVjdFwiKS5zZWxlY3RlZEluZGV4IC0gMTtcbiAgICAgIGxldCBwcm9qZWN0VG9BZGRUbyA9IG51bGw7XG4gICAgICBpZiAocHJvamVjdFRvQWRkVG9JbmRleCA+PSAwKSB7XG4gICAgICAgIHByb2plY3RUb0FkZFRvID0gcHJvamVjdHNbcHJvamVjdFRvQWRkVG9JbmRleF07XG4gICAgICB9XG4gICAgICBjb25zdCBuZXdUb2RvID0gY3JlYXRlQW5kQWRkVG9kbyhcbiAgICAgICAgcHJvamVjdFRvQWRkVG8sXG4gICAgICAgIG5hbWUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBkdWVEYXRlLFxuICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgLi4uY2hlY2tsaXN0VmFsdWVzV2l0aE5vQmxhbmtzLFxuICAgICAgKTtcbiAgICAgIGlmIChwcm9qZWN0VG9BZGRUbyA9PSBudWxsKSB7XG4gICAgICAgIHNvcnROYWtlZFRvZG9zKCk7XG4gICAgICAgIGNvbnN0IGluZGV4VG9BZGRUbyA9IHRvZG9zV2l0aG91dFByb2plY3QuaW5kZXhPZihuZXdUb2RvKTtcbiAgICAgICAgY29uc3QgbmV3VG9kb05vZGUgPSByZW5kZXJNYW5hZ2VyLmFwcGVuZE5ld1RvZG9BdEluZGV4KFxuICAgICAgICAgIG5ld1RvZG8sXG4gICAgICAgICAgaW5kZXhUb0FkZFRvLFxuICAgICAgICApO1xuICAgICAgICByZW5kZXJNYW5hZ2VyLmJpbmRUb2RvQmFyKG5ld1RvZG9Ob2RlKTtcbiAgICAgIH0gZWxzZSBpZiAocHJvamVjdFRvQWRkVG8uZ2V0SXNUb2Rvc1Nob3duKCkpIHtcbiAgICAgICAgY29uc3QgaW5kZXhUb0FkZFRvID0gcHJvamVjdFRvQWRkVG8uZ2V0VG9kb0FycmF5KCkuaW5kZXhPZihuZXdUb2RvKTtcbiAgICAgICAgY29uc3QgbmV3VG9kb05vZGUgPSByZW5kZXJNYW5hZ2VyLmFwcGVuZE5ld1RvZG9BdEluZGV4KFxuICAgICAgICAgIG5ld1RvZG8sXG4gICAgICAgICAgaW5kZXhUb0FkZFRvLFxuICAgICAgICAgIHByb2plY3RUb0FkZFRvSW5kZXgsXG4gICAgICAgICk7XG4gICAgICAgIHJlbmRlck1hbmFnZXIuYmluZFRvZG9CYXIobmV3VG9kb05vZGUpO1xuICAgICAgfVxuICAgICAgcmVuZGVyTWFuYWdlci5jbG9zZU5ld1RvZG9Gb3JtRGlhbG9nKCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHByb2Nlc3NOZXdQcm9qZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IG5ld1Byb2plY3RPYmplY3QgPSBjcmVhdGVBbmRBZGRQcm9qZWN0KFwiTmV3IFByb2plY3QgKHJlbmFtZSBtZSEpXCIpO1xuICAgIGNvbnN0IG5ld05vZGUgPSByZW5kZXJNYW5hZ2VyLnJlbmRlckFuZEJpbmROZXdQcm9qZWN0KG5ld1Byb2plY3RPYmplY3QpO1xuICAgIHN0b3JhZ2VNYW5hZ2VyLnNldFByb2plY3RPclRvZG8obmV3UHJvamVjdE9iamVjdCk7XG4gIH07XG5cbiAgY29uc3QgcHJvY2Vzc0VkaXROYW1lRm9ybSA9IGZ1bmN0aW9uIChldmVudCwgZm9ybUVsZW1lbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IHRvZG9PclByb2plY3RPYmplY3QgPSBmb3JtRWxlbWVudC5vYmplY3Q7XG4gICAgY29uc3QgbmFtZSA9IGZvcm1FbGVtZW50LmVsZW1lbnRzLm5hbWUudmFsdWU7XG4gICAgdG9kb09yUHJvamVjdE9iamVjdC5uYW1lID0gbmFtZTtcbiAgICByZW5kZXJNYW5hZ2VyLmRpc3BsYXlJY29ucyhmb3JtRWxlbWVudC5wYXJlbnROb2RlLnBhcmVudE5vZGUpO1xuICAgIHJlbmRlck1hbmFnZXIuY2xvc2VFZGl0TmFtZUZvcm0oKTtcbiAgICBzdG9yYWdlTWFuYWdlci5zZXRQcm9qZWN0T3JUb2RvKHRvZG9PclByb2plY3RPYmplY3QpO1xuICB9O1xuXG4gIGNvbnN0IHByb2Nlc3NEZWxldGVGb3JtU3VibWl0ID0gZnVuY3Rpb24gKGV2ZW50LCBkZWxldGVGb3JtKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBpbmRleE9mUHJvamVjdFRvUmVtb3ZlID1cbiAgICAgIGRlbGV0ZUZvcm0ucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LnNlbGVjdGlvblwiKS52YWx1ZTtcbiAgICBsZXQgcmVtb3ZlZE9iamVjdDtcbiAgICBpZiAoaW5kZXhPZlByb2plY3RUb1JlbW92ZSA+PSAwKSB7XG4gICAgICByZW1vdmVkT2JqZWN0ID0gcHJvamVjdHMuc3BsaWNlKGluZGV4T2ZQcm9qZWN0VG9SZW1vdmUsIDEpWzBdO1xuICAgICAgY29uc29sZS5sb2cocmVtb3ZlZE9iamVjdC5uYW1lICsgXCIgaXMgZGVsZXRlZFwiKTtcbiAgICAgIHJlbmRlck1hbmFnZXIucmVtb3ZlVGFiKGluZGV4T2ZQcm9qZWN0VG9SZW1vdmUpO1xuICAgICAgc3RvcmFnZU1hbmFnZXIucmVtb3ZlUHJvamVjdE9yVG9kbyhpbmRleE9mUHJvamVjdFRvUmVtb3ZlKTtcbiAgICAgIHJlbmRlck1hbmFnZXIuY2xvc2VEZWxldGVEaWFsb2coKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdG9kb1NlbGVjdGlvbk5vZGUgPSBkZWxldGVGb3JtLnF1ZXJ5U2VsZWN0b3IoXCIudG9kby5zZWxlY3Rpb25cIik7XG4gICAgY29uc3QgcHJvamVjdEFuZFRvZG9JbmRleE9mVG9kb1RvUmVtb3ZlID1cbiAgICAgIHRvZG9TZWxlY3Rpb25Ob2RlLnZhbHVlLnNwbGl0KFwiLFwiKTtcbiAgICBjb25zdCBpbmRleE9mT3B0Z3JvdXBTZWxlY3RlZCA9IE51bWJlcihcbiAgICAgIHByb2plY3RBbmRUb2RvSW5kZXhPZlRvZG9Ub1JlbW92ZVswXSxcbiAgICApO1xuICAgIGNvbnN0IGluZGV4T2ZUb2RvVG9SZW1vdmUgPSBOdW1iZXIocHJvamVjdEFuZFRvZG9JbmRleE9mVG9kb1RvUmVtb3ZlWzFdKTtcbiAgICBjb25zb2xlLmxvZyhcbiAgICAgIFwiSW5kZXhlcyBmb3IgZGVsZXRlOiBcIiArXG4gICAgICAgIGluZGV4T2ZPcHRncm91cFNlbGVjdGVkICtcbiAgICAgICAgXCIgXCIgK1xuICAgICAgICBpbmRleE9mVG9kb1RvUmVtb3ZlLFxuICAgICk7XG4gICAgLy8gdGhlIHRvZG8gdG8gcmVtb3ZlIGlzIHBhcnQgb2YgYSBwcm9qZWN0XG4gICAgaWYgKGluZGV4T2ZPcHRncm91cFNlbGVjdGVkICE9PSAtMSAmJiBpbmRleE9mVG9kb1RvUmVtb3ZlID49IDApIHtcbiAgICAgIGNvbnN0IHByb2plY3RUb1JlbW92ZUZyb20gPSBwcm9qZWN0c1tpbmRleE9mT3B0Z3JvdXBTZWxlY3RlZF07XG4gICAgICByZW1vdmVkT2JqZWN0ID0gcHJvamVjdFRvUmVtb3ZlRnJvbVxuICAgICAgICAuZ2V0VG9kb0FycmF5KClcbiAgICAgICAgLnNwbGljZShpbmRleE9mVG9kb1RvUmVtb3ZlLCAxKVswXTtcbiAgICAgIHJlbmRlck1hbmFnZXIucmVtb3ZlVGFiKGluZGV4T2ZPcHRncm91cFNlbGVjdGVkLCBpbmRleE9mVG9kb1RvUmVtb3ZlKTtcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICBgJHtyZW1vdmVkT2JqZWN0Lm5hbWV9IGZyb20gJHtwcm9qZWN0VG9SZW1vdmVGcm9tLm5hbWV9IGlzIHJlbW92ZWRgLFxuICAgICAgKTtcbiAgICAgIHN0b3JhZ2VNYW5hZ2VyLnJlbW92ZVByb2plY3RPclRvZG8oaW5kZXhPZk9wdGdyb3VwU2VsZWN0ZWQpO1xuICAgIH1cbiAgICAvLyB0aGUgdG9kbyB0byByZW1vdmUgaXMgbm90IHBhcnQgb2YgYSBwcm9qZWN0XG4gICAgZWxzZSBpZiAoaW5kZXhPZk9wdGdyb3VwU2VsZWN0ZWQgPT0gLTEgJiYgaW5kZXhPZlRvZG9Ub1JlbW92ZSA+PSAwKSB7XG4gICAgICByZW1vdmVkT2JqZWN0ID0gdG9kb3NXaXRob3V0UHJvamVjdC5zcGxpY2UoaW5kZXhPZlRvZG9Ub1JlbW92ZSwgMSlbMF07XG4gICAgICByZW5kZXJNYW5hZ2VyLnJlbW92ZVRhYihudWxsLCBpbmRleE9mVG9kb1RvUmVtb3ZlKTtcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICBgJHtyZW1vdmVkT2JqZWN0Lm5hbWV9IGZyb20gdG9kb3Mgd2l0aG91dCBwcm9qZWN0cyBpcyByZW1vdmVkYCxcbiAgICAgICk7XG4gICAgICBzdG9yYWdlTWFuYWdlci5yZW1vdmVQcm9qZWN0T3JUb2RvKGluZGV4T2ZUb2RvVG9SZW1vdmUpO1xuICAgIH1cbiAgICByZW5kZXJNYW5hZ2VyLmNsb3NlRGVsZXRlRGlhbG9nKCk7XG4gIH07XG5cbiAgY29uc3QgcHJvY2Vzc0NoZWNrbGlzdFRvZ2dsZSA9IGZ1bmN0aW9uIChjaGVja2xpc3RPYmplY3QsIHRvZG9PYmplY3QpIHtcbiAgICBjaGVja2xpc3RPYmplY3QudG9nZ2xlQ29tcGxldGUoKTtcbiAgICBzdG9yYWdlTWFuYWdlci5zZXRQcm9qZWN0T3JUb2RvKHRvZG9PYmplY3QpO1xuICB9O1xuXG4gIC8vIHVzZSBwYXJhbWV0ZXIgcHJvamVjdCA9IG51bGwgaWYgeW91IHdhbnQgdGhlIHRvZG8gdG8gaGF2ZSBubyBwcm9qZWN0XG4gIGNvbnN0IGNyZWF0ZUFuZEFkZFRvZG8gPSBmdW5jdGlvbiAoXG4gICAgcHJvamVjdCxcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkdWVEYXRlLFxuICAgIHByaW9yaXR5LFxuICAgIC4uLmNoZWNrbGlzdEFycmF5XG4gICkge1xuICAgIGNvbnN0IHRvZG8gPSBjcmVhdGVUb2RvKFxuICAgICAgdGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIGR1ZURhdGUsXG4gICAgICBwcmlvcml0eSxcbiAgICAgIC4uLmNoZWNrbGlzdEFycmF5LFxuICAgICk7XG4gICAgaWYgKHByb2plY3QgIT09IG51bGwpIHtcbiAgICAgIGlmICghcHJvamVjdHMuaW5jbHVkZXMocHJvamVjdCkpIHtcbiAgICAgICAgYWxlcnQoXCJZb3UgYXJlIHRyeWluZyB0byBhZGQgYSB0b2RvIHRvIGEgbm9uZXhpc3RpbmcgcHJvamVjdFwiKTtcbiAgICAgIH1cbiAgICAgIG1vdmVUb2RvVG9Qcm9qZWN0KHByb2plY3QsIHRvZG8pO1xuICAgICAgcHJvamVjdC5zb3J0VG9kb3MoKTtcbiAgICAgIHN0b3JhZ2VNYW5hZ2VyLnNldFByb2plY3RPclRvZG8ocHJvamVjdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvZG9zV2l0aG91dFByb2plY3QucHVzaCh0b2RvKTtcbiAgICAgIHN0b3JhZ2VNYW5hZ2VyLnNldFByb2plY3RPclRvZG8odG9kbyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvZG87XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlQW5kQWRkUHJvamVjdCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgY29uc3QgY3JlYXRlZFByb2plY3QgPSBjcmVhdGVQcm9qZWN0KG5hbWUpO1xuICAgIHByb2plY3RzLnB1c2goY3JlYXRlZFByb2plY3QpO1xuICAgIHN0b3JhZ2VNYW5hZ2VyLnNldFByb2plY3RPclRvZG8oY3JlYXRlZFByb2plY3QpO1xuICAgIHJldHVybiBjcmVhdGVkUHJvamVjdDtcbiAgfTtcblxuICBjb25zdCBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHByb2plY3RzQW5kVG9kb3MgPSBzdG9yYWdlTWFuYWdlci5nZXRQcm9qZWN0c0FuZFRvZG9zRnJvbVN0b3JhZ2UoKTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0c0FuZFRvZG9zKTtcbiAgICBpZiAoXG4gICAgICBwcm9qZWN0c0FuZFRvZG9zLnByb2plY3RzLmxlbmd0aCAhPT0gMCB8fFxuICAgICAgcHJvamVjdHNBbmRUb2Rvcy50b2Rvcy5sZW5ndGggIT09IDBcbiAgICApIHtcbiAgICAgIHByb2plY3RzID0gcHJvamVjdHNBbmRUb2Rvcy5wcm9qZWN0cztcbiAgICAgIHRvZG9zV2l0aG91dFByb2plY3QgPSBwcm9qZWN0c0FuZFRvZG9zLnRvZG9zO1xuICAgIH0gZWxzZSB7XG4gICAgICBhZGRFeGFtcGxlVG9kb3NhbmRQcm9qZWN0cygpO1xuICAgICAgY29uc29sZS5sb2coXCJObyBkYXRhIGRldGVjdGVkIGluIGxvY2FsU3RvcmFnZS4gQWRkZWQgZXhhbXBsZXMhXCIpO1xuICAgIH1cbiAgICByZW5kZXJNYW5hZ2VyLmluaXQoKTtcbiAgICBzdG9yYWdlTWFuYWdlci5zZXRBbGxQcm9qZWN0c0FuZFRvZG9zKCk7XG4gIH07XG5cbiAgY29uc3QgYWRkRXhhbXBsZVRvZG9zYW5kUHJvamVjdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcHJvamVjdHMgPSBbXTtcbiAgICB0b2Rvc1dpdGhvdXRQcm9qZWN0ID0gW107XG4gICAgY3JlYXRlQW5kQWRkVG9kbyhcbiAgICAgIG51bGwsXG4gICAgICBcIkRyaXZlIG1vbSB0byBhaXJwb3J0XCIsXG4gICAgICBcIlRoaXMgaXMgYSBoaWdoIHByaW9yaXR5IHRhc2shIE1ha2Ugc3VyZSB0byBkcm9wIG1vbSBvZmYgYXQgQUJDIGFpcnBvcnQgVGVybWluYWwgMS5cIixcbiAgICAgIFwiMjAyNC0wNy0xMFwiLFxuICAgICAgMyxcbiAgICAgIFwiQ2hlY2staW4gZm9yIGZsaWdodFwiLFxuICAgICAgXCJQaWNrIHVwIG1vbSBhdCA4OjAwIEFNXCIsXG4gICAgKTtcbiAgICBjcmVhdGVBbmRBZGRUb2RvKFxuICAgICAgbnVsbCxcbiAgICAgIFwiQnV5IG5ldyBjYW1waW5nIGdlYXJcIixcbiAgICAgIFwiVGhpcyBpcyBhIGxvdyBwcmlvcml0eSB0YXNrLiBQcmVwYXJlIGV4dHJhIHN1cHBsaWVzIGZvciBNb3VudCBBd2Vzb21lIGhpa2luZyB0cmlwIHdpdGggdGhlIGJveXMuXCIsXG4gICAgICBcIjIwMjQtMTEtMjdcIixcbiAgICAgIDEsXG4gICAgICBcIkJ1eSBuZXcgd2F0ZXIgYm90dGxlXCIsXG4gICAgICBcIkJ1eSBtb3JlIGNsaW1iaW5nIHJvcGVcIixcbiAgICAgIFwiUGFjayBuZXcgc3R1ZmYgaW50byBjYW1waW5nIGJhZ1wiLFxuICAgICk7XG4gICAgY29uc3QgdGVzdFByb2plY3QgPSBjcmVhdGVBbmRBZGRQcm9qZWN0KFwiVE9QIFRvZG8gTGlzdCBQcm9qZWN0XCIpO1xuICAgIGNyZWF0ZUFuZEFkZFRvZG8oXG4gICAgICB0ZXN0UHJvamVjdCxcbiAgICAgIFwiU3R5bGl6ZSB3aXRoIENTU1wiLFxuICAgICAgXCJVc2UgZmxleGJveCBhbmQgZ3JpZCB0byBsYXlvdXQgZWxlbWVudHMhIEFsc28gbWVzcyB3aXRoIHNvbWUgcHNldWRvY2xhc3NlcyB0byBtYWtlIHNvbWUgaW50ZXJhY3RpdmUgYnV0dG9ucyEgQWZ0ZXIgaGF2aW5nIGEgZ29vZCBsYXlvdXQsIGV2ZXJ5dGhpbmcgZWxzZSBsaWtlIGNvbG9yIG9yIGZvbnQgaXMgZm9yIGZ1biFcIixcbiAgICAgIFwiMjAyNC0wNi0yOVwiLFxuICAgICAgMSxcbiAgICAgIFwiQ2VudGVyIGVsZW1lbnRzXCIsXG4gICAgICBcIlN0eWxpemUgYnV0dG9ucyBhbmQgcHNldWRvY2xhc3Nlc1wiLFxuICAgICAgXCJTdHlsaXplIGZvcm0gaW5wdXRzXCIsXG4gICAgICBcIkFkZCBpY29uc1wiLFxuICAgICAgXCJDaG9vc2UgY29sb3IgcGFsZXR0ZVwiLFxuICAgICk7XG4gICAgY3JlYXRlQW5kQWRkVG9kbyhcbiAgICAgIHRlc3RQcm9qZWN0LFxuICAgICAgXCJBZGQgYWJpbGl0eSB0byBlZGl0IGV4aXN0aW5nIHRvZG9zXCIsXG4gICAgICBcIkV4aXN0aW5nIHRvZG9zIHNob3VsZCBiZSBhYmxlIHRvIGJlIGRlbGV0ZWQuIFRoZWlyIG5hbWVzIGFuZCBjaGVja2xpc3Qgc3RhdHVzIHNob3VsZCBhbHNvIGJlIGFibGUgdG8gYmUgZWRpdGVkLiBBbGwgb2YgdGhpcyBpbmZvcm1hdGlvbiBzaG91bGQgYmUgcHJvcGVybHkgc3RvcmVkLCBub3QganVzdCByZW5kZXJlZCBvbiB0aGUgRE9NIGRpcmVjdGx5LlwiLFxuICAgICAgXCIyMDI0LTA2LTIzXCIsXG4gICAgICAzLFxuICAgICk7XG4gICAgY29uc3QgdGVzdFByb2plY3QyID0gY3JlYXRlQW5kQWRkUHJvamVjdChcIldvb2R3b3JraW5nIFByb2plY3RcIik7XG4gICAgY3JlYXRlQW5kQWRkVG9kbyhcbiAgICAgIHRlc3RQcm9qZWN0MixcbiAgICAgIFwiQnJhaW5zdG9ybSBzb21ldGhpbmcgdG8gbWFrZVwiLFxuICAgICAgXCJUcnkgdG8gY3JlYXRlIGEgYmFzaWMgY29uY2VwdCBza2V0Y2ggb2YgdGhlIG5leHQgcHJvamVjdCB0byBtYWtlLiBDb25jZXB0IHNrZXRjaCBzaG91bGQgaGF2ZSBtdWx0aXBsZSBwZXJzcGVjdGl2ZXMgYW5kIHNvbWUgY2xvc2UtdXAgZGlhZ3JhbXMgb2YgYW55IGtleSBtZWNoYW5pY2FsIHBhcnRzLlwiLFxuICAgICAgXCIyMDI0LTA3LTA0XCIsXG4gICAgICAzLFxuICAgICAgXCJSZXNlYXJjaCBpbnNwaXJhdGlvbiBpZGVhc1wiLFxuICAgICAgXCJDaGVjayBteSBjdXJyZW50IHN1cHBsaWVzXCIsXG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldFByb2plY3RzQW5kTmFrZWRUb2RvcyxcbiAgICBjcmVhdGVBbmRBZGRUb2RvLFxuICAgIGNyZWF0ZUFuZEFkZFByb2plY3QsXG4gICAgbW92ZVRvZG9Ub1Byb2plY3QsXG4gICAgcmVtb3ZlVG9kb0Zyb21Qcm9qZWN0LFxuICAgIGFkZEV4YW1wbGVUb2Rvc2FuZFByb2plY3RzLFxuICAgIHRvZ2dsZU9wZW5DbG9zZVByb2plY3RUYWIsXG4gICAgcHJvY2Vzc05ld1RvZG9Gb3JtU3VibWl0LFxuICAgIGNvbXBhcmVQcmlvcml0eSxcbiAgICBtb3ZlUHJvamVjdE5vZGVVcCxcbiAgICBtb3ZlUHJvamVjdE5vZGVEb3duLFxuICAgIHByb2Nlc3NOZXdQcm9qZWN0LFxuICAgIHByb2Nlc3NFZGl0TmFtZUZvcm0sXG4gICAgcHJvY2Vzc0RlbGV0ZUZvcm1TdWJtaXQsXG4gICAgaW5pdCxcbiAgICBwcm9jZXNzQ2hlY2tsaXN0VG9nZ2xlLFxuICB9O1xufSkoKTtcblxucGFnZU1hbmFnZXIuaW5pdCgpO1xuXG5leHBvcnQgeyBwYWdlTWFuYWdlciB9O1xuIiwiLy8gbW9kdWxlIGZvciBwcm9qZWN0IHRoYXQgKGNhbikgaG9sZCB0b2RvcyAvL1xuaW1wb3J0IHtwYWdlTWFuYWdlcn0gZnJvbSBcIi4vaW5kZXguanNcIjtcblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdChuYW1lKSB7XG4gICAgY29uc3QgbWV0aG9kcyA9IHByb2plY3RNZXRob2REZWxlZ2F0ZSgpO1xuXG4gICAgbGV0IGlzQ29tcGxldGUgPSBmYWxzZTtcbiAgICBsZXQgdG9kb0FycmF5ID0gW107XG4gICAgbGV0IGlzVG9kb3NTaG93biA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLi4ubWV0aG9kcyxcbiAgICAgICAgbmFtZSxcbiAgICAgICAgdG9kb0FycmF5LFxuICAgICAgICBpc1RvZG9zU2hvd24sXG4gICAgfVxufVxuXG5jb25zdCBwcm9qZWN0TWV0aG9kRGVsZWdhdGUgPSBmdW5jdGlvbigpe1xuXG4gICAgY29uc3QgZ2V0VG9kb0FycmF5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b2RvQXJyYXk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0VG9kbyA9IGZ1bmN0aW9uKGluZGV4KXtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9kb0FycmF5W2luZGV4XTtcbiAgICB9XG5cbiAgICBjb25zdCBhZGRUb2RvID0gZnVuY3Rpb24gKG5ld1RvZG8pIHtcbiAgICAgICAgdGhpcy50b2RvQXJyYXkucHVzaChuZXdUb2RvKTtcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVUb2RvID0gZnVuY3Rpb24gKHRvZG9Ub1JlbW92ZSkge1xuICAgICAgICB0aGlzLnRvZG9BcnJheS5wb3AodG9kb1RvUmVtb3ZlKTtcbiAgICB9XG5cbiAgICAvLyBzb3J0IGJ5IHByaW9yaXR5IG9ubHkgd2l0aCAzIGJlaW5nIGhpZ2hlc3QgKGFuZCBmaXJzdCksIDEgYmVpbmcgbG93ZXN0XG4gICAgY29uc3Qgc29ydFRvZG9zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnRvZG9BcnJheS5zb3J0KHBhZ2VNYW5hZ2VyLmNvbXBhcmVQcmlvcml0eSk7XG4gICAgfVxuXG4gICAgY29uc3QgdG9nZ2xlU2hvd1RvZG9zID0gZnVuY3Rpb24oKXtcbiAgICAgICAgdGhpcy5pc1RvZG9zU2hvd24gPSAhdGhpcy5pc1RvZG9zU2hvd247XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0SXNUb2Rvc1Nob3duID0gZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNUb2Rvc1Nob3duO1xuICAgIH1cblxuICAgIHJldHVybntcbiAgICAgICAgc29ydFRvZG9zLFxuICAgICAgICBnZXRUb2RvLFxuICAgICAgICBhZGRUb2RvLFxuICAgICAgICByZW1vdmVUb2RvLFxuICAgICAgICBnZXRUb2RvQXJyYXksXG4gICAgICAgIHRvZ2dsZVNob3dUb2RvcyxcbiAgICAgICAgZ2V0SXNUb2Rvc1Nob3duLFxuICAgIH1cbn1cblxuY29uc3QgYXR0YWNoUHJvamVjdE1ldGhvZHMgPSBmdW5jdGlvbihwYXJ0aWFsKXtcbiAgICBjb25zdCBtZXRob2RzID0gcHJvamVjdE1ldGhvZERlbGVnYXRlKCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICAuLi5tZXRob2RzLFxuICAgICAgICAuLi5wYXJ0aWFsLFxuICAgIH1cbn1cblxuZXhwb3J0IHtjcmVhdGVQcm9qZWN0LCBhdHRhY2hQcm9qZWN0TWV0aG9kc307IiwiLy8gbW9kdWxlIHN0cmljdGx5IGZvciBkaXNwbGF5aW5nIGVsZW1lbnRzXG5pbXBvcnQgeyBwYWdlTWFuYWdlciB9IGZyb20gXCIuL2luZGV4LmpzXCI7XG5pbXBvcnQgdXBJY29uIGZyb20gXCIuL2ltYWdlcy9tZW51LXVwLnN2Z1wiXG5pbXBvcnQgZG93bkljb24gZnJvbSBcIi4vaW1hZ2VzL21lbnUtZG93bi5zdmdcIlxuXG5jb25zdCByZW5kZXJNYW5hZ2VyID0gZnVuY3Rpb24gKCkge1xuXG4gICAgY29uc3QgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVuZGVyQmFzZUJhY2tncm91bmQoKTtcbiAgICAgICAgcmVuZGVySGVhZGVyKCk7XG4gICAgICAgIHJlbmRlckhlbHBCdXR0b24oKTtcbiAgICAgICAgcmVuZGVyU2lkZWJhcigpO1xuICAgICAgICByZW5kZXJEZWZhdWx0Q29udGVudCgpO1xuICAgICAgICBwcmVyZW5kZXJEaWFsb2dzKCk7XG4gICAgICAgIGJpbmRBbGxFdmVudHMoKTtcbiAgICAgICAgcHJlcmVuZGVyRWRpdE5hbWVGb3JtKCk7XG4gICAgfVxuXG4gICAgLy8gaGVscGVyIGZ1bmN0aW9ucyB0byBlYXNpbHkgY3JlYXRlIERPTSBlbGVtZW50c1xuXG4gICAgY29uc3QgY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uICh0YWcsIGNsYXNzQXR0cmlidXRlLCBpbm5lclRleHQpIHtcbiAgICAgICAgY29uc3QgY3JlYXRlZEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gICAgICAgIGlmIChjbGFzc0F0dHJpYnV0ZSAhPT0gdW5kZWZpbmVkICYmIGNsYXNzQXR0cmlidXRlICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBzcGxpdENsYXNzU3RyaW5nc0FycmF5ID0gY2xhc3NBdHRyaWJ1dGUuc3BsaXQoXCIgXCIpO1xuICAgICAgICAgICAgZm9yIChsZXQgc2luZ2xlQ2xhc3Mgb2Ygc3BsaXRDbGFzc1N0cmluZ3NBcnJheSkge1xuICAgICAgICAgICAgICAgIGNyZWF0ZWRFbGVtZW50LmNsYXNzTGlzdC5hZGQoc2luZ2xlQ2xhc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBpZiAoaW5uZXJUZXh0ICE9PSB1bmRlZmluZWQpIHsgY3JlYXRlZEVsZW1lbnQuaW5uZXJUZXh0ID0gaW5uZXJUZXh0IH07XG4gICAgICAgIHJldHVybiBjcmVhdGVkRWxlbWVudDtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVMYWJlbEFuZElucHV0ID0gZnVuY3Rpb24gKGlkLCB0eXBlID0gXCJ0ZXh0XCIsIGxhYmVsVGV4dCwgdmFsdWUsIHJlcXVpcmVkQm9vbGVhbiwgbWF4bGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICBsYWJlbC5pbm5lclRleHQgPSBsYWJlbFRleHQ7XG4gICAgICAgIGxhYmVsLmZvciA9IGlkO1xuICAgICAgICBsZXQgaW5wdXQ7XG4gICAgICAgIGlmICh0eXBlID09PSBcInRleHRhcmVhXCIpe1xuICAgICAgICAgICAgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgaW5wdXQudHlwZSA9IHR5cGU7XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXQuaWQgPSBpZDtcbiAgICAgICAgaW5wdXQubmFtZSA9IGlkO1xuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVxdWlyZWRCb29sZWFuID09PSB0cnVlKSB7XG4gICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCBcIlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWF4bGVuZ3RoICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwibWF4bGVuZ3RoXCIsbWF4bGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBsYWJlbCwgaW5wdXQgfTtcbiAgICB9XG5cbiAgICBjb25zdCBjb21wb3NlQ29udGFpbmVkRmllbGRFbGVtZW50ID0gZnVuY3Rpb24gKHsgbGFiZWwsIGlucHV0IH0pIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyRGl2ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBpbnB1dC5uYW1lKTtcbiAgICAgICAgY29udGFpbmVyRGl2LmFwcGVuZChsYWJlbCwgaW5wdXQpO1xuICAgICAgICByZXR1cm4gY29udGFpbmVyRGl2O1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZUltYWdlID0gZnVuY3Rpb24gKHNyYywgY2xhc3NTdHJpbmcsIGFsdFRleHQpIHtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBjcmVhdGVFbGVtZW50KFwiaW1nXCIsIGNsYXNzU3RyaW5nKTtcbiAgICAgICAgaW1hZ2Uuc3JjID0gc3JjO1xuICAgICAgICBpbWFnZS5hbHQgPSBhbHRUZXh0O1xuICAgICAgICBpbWFnZS5zdHlsZS53aWR0aCA9IFwiMjlweFwiO1xuICAgICAgICByZXR1cm4gaW1hZ2U7XG4gICAgfVxuXG4gICAgLy8gZnVuY3Rpb25zIHJlbGF0ZWQgdG8gZGlzcGxheWluZyBhbmQgcmVuZGVyaW5nXG4gICAgY29uc3QgcmVuZGVySGVscEJ1dHRvbiA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IGhlbHBCdXR0b24gPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsXCJoZWxwIGJ1dHRvblwiLFwiP1wiKTtcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlbHBCdXR0b24pO1xuICAgIH1cblxuICAgIGxldCBiYXNlQmFja2dyb3VuZDtcbiAgICBjb25zdCByZW5kZXJCYXNlQmFja2dyb3VuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYmFzZUJhY2tncm91bmQgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiYmFzZSBhcmVhXCIpO1xuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoYmFzZUJhY2tncm91bmQpO1xuICAgIH1cblxuICAgIGxldCBoZWFkZXI7XG4gICAgY29uc3QgcmVuZGVySGVhZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBoZWFkZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiaGVhZGVyIGFyZWFcIik7XG4gICAgICAgIGNvbnN0IGxvZ28gPSBjcmVhdGVFbGVtZW50KFwiaDFcIiwgXCJoZWFkZXIgbG9nb1wiLCBcIlRvIERvIExpc3RcIik7XG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvKTtcbiAgICAgICAgYmFzZUJhY2tncm91bmQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICB9XG5cbiAgICAvLyBkaXNwbGF5aW5nIGFuZCByZW5kZXJpbmcgc2lkZWJhclxuXG4gICAgbGV0IHNpZGViYXI7XG4gICAgY29uc3QgcmVuZGVyU2lkZWJhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2lkZWJhciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJzaWRlYmFyIGFyZWFcIik7XG4gICAgICAgIGNvbnN0IG5ld0Ryb3Bkb3duID0gY29tcG9zZU5ld0Ryb3Bkb3duKCk7XG4gICAgICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQobmV3RHJvcGRvd24uZHJvcGRvd25CdXR0b24pO1xuICAgICAgICBzaWRlYmFyLmFwcGVuZENoaWxkKG5ld0Ryb3Bkb3duLm5ld0J1dHRvbkNvbnRhaW5lcik7XG4gICAgICAgIGNvbnN0IHByb2plY3RzQW5kVG9kb3NUb0Rpc3BsYXkgPSBwYWdlTWFuYWdlci5nZXRQcm9qZWN0c0FuZE5ha2VkVG9kb3MoKTtcbiAgICAgICAgY29uc3QgcHJvamVjdHNBcnJheSA9IHByb2plY3RzQW5kVG9kb3NUb0Rpc3BsYXkucHJvamVjdHM7XG4gICAgICAgIGNvbnN0IHRvZG9zQXJyYXkgPSBwcm9qZWN0c0FuZFRvZG9zVG9EaXNwbGF5LnRvZG9zV2l0aG91dFByb2plY3Q7XG4gICAgICAgIGZvciAobGV0IHByb2plY3Qgb2YgcHJvamVjdHNBcnJheSkge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdFRhYiA9IGNvbXBvc2VQcm9qZWN0QW5kQ2hpbGRUb2Rvc1RhYihwcm9qZWN0KTtcbiAgICAgICAgICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdFRhYik7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgdG9kbyBvZiB0b2Rvc0FycmF5KSB7XG4gICAgICAgICAgICBjb25zdCB0b2RvVGFiID0gY29tcG9zZVRvZG9UYWIodG9kbyk7XG4gICAgICAgICAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHRvZG9UYWIpO1xuICAgICAgICB9XG4gICAgICAgIGJhc2VCYWNrZ3JvdW5kLmFwcGVuZENoaWxkKHNpZGViYXIpO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbXBvc2VOZXdEcm9wZG93biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgZHJvcGRvd25CdXR0b24gPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwibmV3LWRyb3Bkb3duIGJ1dHRvblwiLCBcIk1lbnUgT3B0aW9uc1wiKTtcbiAgICAgICAgY29uc3QgbmV3QnV0dG9uQ29udGFpbmVyID0gcHJlcmVuZGVyTmV3QnV0dG9ucygpO1xuICAgICAgICByZXR1cm4geyBkcm9wZG93bkJ1dHRvbiwgbmV3QnV0dG9uQ29udGFpbmVyIH1cbiAgICB9XG5cbiAgICBjb25zdCBwcmVyZW5kZXJOZXdCdXR0b25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwibmV3LWJ1dHRvbiBjb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3RCdXR0b24gPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwibmV3IHByb2plY3QgYnV0dG9uXCIsIFwiTmV3IFByb2plY3RcIik7XG4gICAgICAgIGNvbnN0IG5ld1RvZG9CdXR0b24gPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwibmV3IHRvZG8gYnV0dG9uXCIsIFwiTmV3IFRvZG9cIik7XG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgXCJkZWxldGUgYnV0dG9uXCIsIFwiUmVtb3ZlIFByb2plY3Qgb3IgVG9kb1wiKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Byb2plY3RCdXR0b24pO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmV3VG9kb0J1dHRvbik7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICAgICAgICB0b2dnbGVTaG93SGlkZUVsZW1lbnQoY29udGFpbmVyKTtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBjb25zdCB0b2dnbGVTaG93SGlkZUVsZW1lbnQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBjb25zdCBjdXJyZW50RGlzcGxheVN0YXRlID0gZWxlbWVudC5zdHlsZS5kaXNwbGF5O1xuICAgICAgICBpZiAoY3VycmVudERpc3BsYXlTdGF0ZSAhPT0gXCJub25lXCIpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZHJvcGRvd25CdXR0b24gPSBzaWRlYmFyLnF1ZXJ5U2VsZWN0b3IoXCIubmV3LWRyb3Bkb3duLmJ1dHRvblwiKTtcbiAgICAgICAgaWYgKGRyb3Bkb3duQnV0dG9uICE9PSBudWxsKXtcbiAgICAgICAgICAgIGlmIChkcm9wZG93bkJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJwcmVzc2VkXCIpKXtcbiAgICAgICAgICAgICAgICBkcm9wZG93bkJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwicHJlc3NlZFwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZHJvcGRvd25CdXR0b24uY2xhc3NMaXN0LmFkZChcInByZXNzZWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjb21wb3NlUHJvamVjdEFuZENoaWxkVG9kb3NUYWIgPSBmdW5jdGlvbiAocHJvamVjdFRvRGlzcGxheSkge1xuICAgICAgICBjb25zdCBwcm9qZWN0QmFyQW5kVG9kb0FyZWEgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwicHJvamVjdC1hbmQtY2hpbGQtdG9kbyBhcmVhXCIpO1xuICAgICAgICBjb25zdCBwcm9qZWN0QmFyQXJlYSA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJwcm9qZWN0IGJhciBhcmVhXCIpO1xuICAgICAgICBwcm9qZWN0QmFyQW5kVG9kb0FyZWEucHJvamVjdCA9IHByb2plY3RUb0Rpc3BsYXk7XG4gICAgICAgIHByb2plY3RCYXJBbmRUb2RvQXJlYS5vYmplY3QgPSBwcm9qZWN0VG9EaXNwbGF5O1xuICAgICAgICBwcm9qZWN0QmFyQXJlYS5wcm9qZWN0ID0gcHJvamVjdFRvRGlzcGxheTtcbiAgICAgICAgcHJvamVjdEJhckFyZWEub2JqZWN0ID0gcHJvamVjdFRvRGlzcGxheTtcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcInByb2plY3QgbmFtZVwiLCBwcm9qZWN0VG9EaXNwbGF5Lm5hbWUpO1xuICAgICAgICBwcm9qZWN0QmFyQXJlYS5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG4gICAgICAgIHByb2plY3RCYXJBbmRUb2RvQXJlYS5hcHBlbmRDaGlsZChwcm9qZWN0QmFyQXJlYSk7XG4gICAgICAgIHJlbmRlck1vdmVQcm9qZWN0SW1hZ2VzKHByb2plY3RCYXJBbmRUb2RvQXJlYSk7XG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0byByZW5kZXIgdG9kb3Mgb2YgdGhlIHByb2plY3QsIGlmIHRoZSBwcm9qZWN0IHNob3VsZCBiZSBvcGVuXG4gICAgICAgIGlmIChwcm9qZWN0VG9EaXNwbGF5LmdldElzVG9kb3NTaG93bigpKSB7XG4gICAgICAgICAgICBhcHBlbmRQcm9qZWN0Q2hpbGRUb2Rvcyhwcm9qZWN0QmFyQW5kVG9kb0FyZWEpO1xuICAgICAgICAgICAgcHJvamVjdEJhckFyZWEuY2xhc3NMaXN0LmFkZChcIm9wZW5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByb2plY3RCYXJBbmRUb2RvQXJlYTtcbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJBbmRCaW5kTmV3UHJvamVjdCA9IGZ1bmN0aW9uKHByb2plY3RUb0Rpc3BsYXkpe1xuICAgICAgICBjb25zdCBwcm9qZWN0QmFyTm9kZSA9IGNvbXBvc2VQcm9qZWN0QW5kQ2hpbGRUb2Rvc1RhYihwcm9qZWN0VG9EaXNwbGF5KTtcbiAgICAgICAgY29uc3QgcHJvamVjdEFuZENoaWxkVG9kb05vZGVzID0gc2lkZWJhci5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtYW5kLWNoaWxkLXRvZG8uYXJlYVwiKTtcbiAgICAgICAgbGV0IGxhc3RQcm9qZWN0QmFyTm9kZVRvQXBwZW5kQWZ0ZXIgPSBwcm9qZWN0QW5kQ2hpbGRUb2RvTm9kZXNbcHJvamVjdEFuZENoaWxkVG9kb05vZGVzLmxlbmd0aC0xXTtcbiAgICAgICAgaWYgKGxhc3RQcm9qZWN0QmFyTm9kZVRvQXBwZW5kQWZ0ZXIgPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIGxhc3RQcm9qZWN0QmFyTm9kZVRvQXBwZW5kQWZ0ZXIgPSBzaWRlYmFyLnF1ZXJ5U2VsZWN0b3IoXCIubmV3LWJ1dHRvbi5jb250YWluZXJcIik7XG4gICAgICAgIH1cbiAgICAgICAgbGFzdFByb2plY3RCYXJOb2RlVG9BcHBlbmRBZnRlci5hZnRlcihwcm9qZWN0QmFyTm9kZSk7XG4gICAgICAgIGJpbmRQcm9qZWN0QW5kQ2hpbGRUb2Rvc0Jhcihwcm9qZWN0QmFyTm9kZSk7XG4gICAgICAgIGJpbmRVcERvd25JY29ucyhwcm9qZWN0QmFyTm9kZSlcbiAgICB9XG5cbiAgICBjb25zdCBhcHBlbmRQcm9qZWN0Q2hpbGRUb2RvcyA9IGZ1bmN0aW9uKHByb2plY3RCYXJBbmRUb2RvQXJlYSl7XG4gICAgICAgIGNvbnN0IHRvZG9zQXJyYXkgPSBwcm9qZWN0QmFyQW5kVG9kb0FyZWEucHJvamVjdC5nZXRUb2RvQXJyYXkoKTtcbiAgICAgICAgZm9yIChsZXQgdG9kbyBvZiB0b2Rvc0FycmF5KSB7XG4gICAgICAgICAgICBjb25zdCB0b2RvVGFiID0gY29tcG9zZVRvZG9UYWIodG9kbyk7XG4gICAgICAgICAgICB0b2RvVGFiLnByb2plY3QgPSBwcm9qZWN0QmFyQW5kVG9kb0FyZWEucHJvamVjdDtcbiAgICAgICAgICAgIHByb2plY3RCYXJBbmRUb2RvQXJlYS5hcHBlbmRDaGlsZCh0b2RvVGFiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNsZWFyUHJvamVjdENoaWxkVG9kb3MgPSBmdW5jdGlvbihwcm9qZWN0QmFyQW5kVG9kb0FyZWEpe1xuICAgICAgICBjb25zdCB0b2RvQmFyTm9kZXMgPSBwcm9qZWN0QmFyQW5kVG9kb0FyZWEucXVlcnlTZWxlY3RvckFsbChcIi50b2RvLmJhci5hcmVhXCIpO1xuICAgICAgICBmb3IgKGxldCBub2RlIG9mIHRvZG9CYXJOb2Rlcyl7XG4gICAgICAgICAgICBwcm9qZWN0QmFyQW5kVG9kb0FyZWEucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjb21wb3NlVG9kb1RhYiA9IGZ1bmN0aW9uICh0b2RvVG9EaXNwbGF5KSB7XG4gICAgICAgIGNvbnN0IHRvZG9CYXJBcmVhID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInRvZG8gYmFyIGFyZWFcIik7XG4gICAgICAgIGNvbnN0IHRvZG9OYW1lID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJ0b2RvIG5hbWVcIiwgdG9kb1RvRGlzcGxheS5uYW1lKTtcbiAgICAgICAgdG9kb0JhckFyZWEuYXBwZW5kQ2hpbGQodG9kb05hbWUpO1xuICAgICAgICB0b2RvQmFyQXJlYS5vYmplY3QgPSB0b2RvVG9EaXNwbGF5O1xuICAgICAgICByZXR1cm4gdG9kb0JhckFyZWE7XG4gICAgfVxuXG4gICAgY29uc3QgYXBwZW5kTmV3VG9kb0F0SW5kZXggPSBmdW5jdGlvbih0b2RvT2JqZWN0LCBpbmRleCwgcHJvamVjdEluZGV4KXtcbiAgICAgICAgY29uc3QgdG9kb1RhYk5vZGUgPSBjb21wb3NlVG9kb1RhYih0b2RvT2JqZWN0KTtcbiAgICAgICAgbGV0IHRvZG9Ob2RlTGlzdDtcbiAgICAgICAgaWYgKHByb2plY3RJbmRleCA9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgdG9kb05vZGVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaWRlYmFyLmFyZWEgPiAudG9kby5iYXIuYXJlYVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RMaXN0ID0gc2lkZWJhci5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtYW5kLWNoaWxkLXRvZG9cIik7XG4gICAgICAgICAgICB0b2RvTm9kZUxpc3QgPSBwcm9qZWN0TGlzdFtwcm9qZWN0SW5kZXhdLnF1ZXJ5U2VsZWN0b3JBbGwoXCIudG9kby5iYXIuYXJlYVwiKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0b2RvTm9kZVRvSW5zZXJ0QmVmb3JlID0gdG9kb05vZGVMaXN0W2luZGV4XTtcbiAgICAgICAgaWYgKHRvZG9Ob2RlVG9JbnNlcnRCZWZvcmUgIT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICB0b2RvTm9kZVRvSW5zZXJ0QmVmb3JlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRvZG9UYWJOb2RlLCB0b2RvTm9kZVRvSW5zZXJ0QmVmb3JlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCB0b2RvTm9kZVRvSW5zZXJ0QWZ0ZXIgPSB0b2RvTm9kZUxpc3RbaW5kZXgtMV07XG4gICAgICAgICAgICBpZiAodG9kb05vZGVUb0luc2VydEFmdGVyID09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICAgdG9kb05vZGVUb0luc2VydEFmdGVyID0gc2lkZWJhci5xdWVyeVNlbGVjdG9yKFwiLm5ldy1idXR0b24uY29udGFpbmVyXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0b2RvTm9kZVRvSW5zZXJ0QWZ0ZXIuYWZ0ZXIodG9kb1RhYk5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKHRvZG9Ob2RlVG9JbnNlcnRCZWZvcmUsIHRvZG9Ob2RlTGlzdCwgaW5kZXgpO1xuICAgICAgICByZXR1cm4gdG9kb1RhYk5vZGU7XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyTW92ZVByb2plY3RJbWFnZXMgPSBmdW5jdGlvbiAocHJvamVjdEJhckFuZFRvZG9BcmVhKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIixcImljb24gY29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCB1cEljb25FbGVtZW50ID0gY3JlYXRlSW1hZ2UodXBJY29uLCBcInVwIGljb25cIiwgXCJtb3ZlIHByb2plY3QgdXAgaWNvblwiKTtcbiAgICAgICAgY29uc3QgZG93bkljb25FbGVtZW50ID0gY3JlYXRlSW1hZ2UoZG93bkljb24sIFwiZG93biBpY29uXCIsIFwibW92ZSBwcm9qZWN0IGRvd24gaWNvblwiKTtcbiAgICAgICAgdXBJY29uRWxlbWVudC5wcm9qZWN0QW5kQ2hpbGROb2RlID0gcHJvamVjdEJhckFuZFRvZG9BcmVhO1xuICAgICAgICBkb3duSWNvbkVsZW1lbnQucHJvamVjdEFuZENoaWxkTm9kZSA9IHByb2plY3RCYXJBbmRUb2RvQXJlYTtcbiAgICAgICAgY29uc3QgcHJvamVjdEJhciA9IHByb2plY3RCYXJBbmRUb2RvQXJlYS5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QuYmFyLmFyZWFcIik7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQodXBJY29uRWxlbWVudCwgZG93bkljb25FbGVtZW50KTtcbiAgICAgICAgcHJvamVjdEJhci5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgIH1cblxuICAgIGNvbnN0IGhpZGVJY29ucyA9IGZ1bmN0aW9uKHByb2plY3RCYXJBbmRUb2RvQXJlYSl7XG4gICAgICAgIGNvbnN0IGljb25zID0gcHJvamVjdEJhckFuZFRvZG9BcmVhLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbWcuaWNvblwiKTtcbiAgICAgICAgZm9yIChsZXQgaWNvbiBvZiBpY29ucyl7XG4gICAgICAgICAgICBpY29uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGRpc3BsYXlJY29ucyA9IGZ1bmN0aW9uKHByb2plY3RCYXJBbmRUb2RvQXJlYSl7XG4gICAgICAgIGNvbnN0IGljb25zID0gcHJvamVjdEJhckFuZFRvZG9BcmVhLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbWcuaWNvblwiKTtcbiAgICAgICAgZm9yIChsZXQgaWNvbiBvZiBpY29ucyl7XG4gICAgICAgICAgICBpY29uLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZVwiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlVGFiID0gZnVuY3Rpb24oaW5kZXhPZlByb2plY3QsIGluZGV4T2ZUb2RvKXtcbiAgICAgICAgbGV0IHByb2plY3ROb2RlVG9TZWFyY2g7XG4gICAgICAgIC8vIGZpbmQgdGhlIHByb2plY3QgdG8gZGVsZXRlIGZyb20gaWYgdGhlcmUgaXMgYSBwcm9qZWN0IHNwZWNpZmllZFxuICAgICAgICBpZiAoaW5kZXhPZlByb2plY3QgIT09IG51bGwpe1xuICAgICAgICAgICAgcHJvamVjdE5vZGVUb1NlYXJjaCA9IHNpZGViYXIucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0LWFuZC1jaGlsZC10b2RvLmFyZWFcIilbaW5kZXhPZlByb2plY3RdO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdE5vZGVUb1NlYXJjaCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgcHJvamVjdEluZGV4IHNwZWNpZmllZCBBTkQgdG9kb0luZGV4IHNwZWNpZmllZCBBTkQgdGhlIHByb2plY3QgaXMgb3BlbiwgZGVsZXRlIHRoZSB0b2RvIG9mIHRoZSBwcm9qZWN0XG4gICAgICAgIGlmIChpbmRleE9mUHJvamVjdCAhPT0gbnVsbCAmJiBpbmRleE9mVG9kbyAhPT0gdW5kZWZpbmVkICYmIHByb2plY3ROb2RlVG9TZWFyY2gucHJvamVjdC5nZXRJc1RvZG9zU2hvd24oKSl7XG4gICAgICAgICAgICBjb25zdCB0b2RvVG9SZW1vdmUgPSBwcm9qZWN0Tm9kZVRvU2VhcmNoLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6c2NvcGUgPiAudG9kby5iYXIuYXJlYVwiKVtpbmRleE9mVG9kb107XG4gICAgICAgICAgICB0b2RvVG9SZW1vdmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0b2RvVG9SZW1vdmUpO1xuICAgICAgICB9IFxuICAgICAgICAvLyBlbHNlIGlmIHByb2plY3RJbmRleCBub3Qgc3BlY2lmaWVkIEFORCB0b2RvSW5kZXggc3BlY2lmaWVkLCBkZWxldGUgdGhlIG5ha2VkIHRvZG9cbiAgICAgICAgZWxzZSBpZiAoaW5kZXhPZlByb2plY3QgPT0gbnVsbCAmJiBpbmRleE9mVG9kbyAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIGNvbnN0IHRvZG9Ub1JlbW92ZSA9IHNpZGViYXIucXVlcnlTZWxlY3RvckFsbChcIjpzY29wZSA+IC50b2RvLmJhci5hcmVhXCIpW2luZGV4T2ZUb2RvXTtcbiAgICAgICAgICAgIHRvZG9Ub1JlbW92ZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRvZG9Ub1JlbW92ZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZWxzZSBpZiBubyBpbmRleCBmb3IgdG9kbyBpcyBzcGVjaWZpZWQsIGRlbGV0ZSB0aGUgZW50aXJlIHByb2plY3Qgc3BlY2lmaWVkXG4gICAgICAgIGVsc2UgaWYgKGluZGV4T2ZQcm9qZWN0ICE9PSBudWxsICYmIGluZGV4T2ZUb2RvID09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICBwcm9qZWN0Tm9kZVRvU2VhcmNoLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocHJvamVjdE5vZGVUb1NlYXJjaCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBwcmVyZW5kZXJFZGl0TmFtZUZvcm0sIGFibGUgdG8gYmUgbW92ZWQgYXJvdW5kIGFzIG5lZWRlZFxuICAgIGxldCBwcmVyZW5kZXJlZEVkaXROYW1lRm9ybTtcbiAgICBjb25zdCBwcmVyZW5kZXJFZGl0TmFtZUZvcm0gPSBmdW5jdGlvbigpe1xuICAgICAgICBwcmVyZW5kZXJlZEVkaXROYW1lRm9ybSA9IGNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIsXCJlZGl0IG5hbWUgZm9ybVwiKTtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBjcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGlucHV0Lm5hbWUgPSBcIm5hbWVcIjtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwibWF4bGVuZ3RoXCIsNDApO1xuICAgICAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBjcmVhdGVFbGVtZW50KFwic3VibWl0XCIsXCJzdWJtaXQgYnV0dG9uXCIsIFwiU2F2ZVwiKTtcbiAgICAgICAgYmluZEVkaXROYW1lRm9ybVN1Ym1pdChzdWJtaXRCdXR0b24sIGlucHV0KTtcbiAgICAgICAgcHJlcmVuZGVyZWRFZGl0TmFtZUZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgICBwcmVyZW5kZXJlZEVkaXROYW1lRm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xuICAgICAgICBwcmVyZW5kZXJlZEVkaXROYW1lRm9ybS5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgIH07XG5cbiAgICAvLyBmb3JtIHdpbGwgc3VibWl0IG9uIGJvdGggY2xpY2tpbmcgdGhlIHN1Ym1pdCBPUiBlbnRlciBidXR0b25cbiAgICBjb25zdCBiaW5kRWRpdE5hbWVGb3JtU3VibWl0ID0gZnVuY3Rpb24oYnV0dG9uTm9kZSwgaW5wdXROb2RlKXtcbiAgICAgICAgYnV0dG9uTm9kZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHBhZ2VNYW5hZ2VyLnByb2Nlc3NFZGl0TmFtZUZvcm0oZSwgcHJlcmVuZGVyZWRFZGl0TmFtZUZvcm0pKTtcbiAgICAgICAgaW5wdXROb2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgaWYgKGUuY29kZSA9PSBcIkVudGVyXCIpe1xuICAgICAgICAgICAgICAgIHBhZ2VNYW5hZ2VyLnByb2Nlc3NFZGl0TmFtZUZvcm0oZSwgcHJlcmVuZGVyZWRFZGl0TmFtZUZvcm0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlckVkaXROYW1lRm9ybUF0QmFyID0gZnVuY3Rpb24oYmFyTm9kZSl7XG4gICAgICAgIGlmICghcHJlcmVuZGVyZWRFZGl0TmFtZUZvcm0uaXNBY3RpdmUpe1xuICAgICAgICAgICAgY29uc3QgYmFyVGV4dE5vZGUgPSBiYXJOb2RlLnF1ZXJ5U2VsZWN0b3IoXCIubmFtZVwiKTtcbiAgICAgICAgICAgIGJhck5vZGUucmVwbGFjZUNoaWxkKHByZXJlbmRlcmVkRWRpdE5hbWVGb3JtLCBiYXJUZXh0Tm9kZSk7XG4gICAgICAgICAgICBwcmVyZW5kZXJlZEVkaXROYW1lRm9ybS5ob2xkT2xkTm9kZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgcHJlcmVuZGVyZWRFZGl0TmFtZUZvcm0uaG9sZE9sZE5vZGVDb250ZW50ID0gYmFyVGV4dE5vZGU7XG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IHByZXJlbmRlcmVkRWRpdE5hbWVGb3JtLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gYmFyTm9kZS5vYmplY3QubmFtZTtcbiAgICAgICAgICAgIHByZXJlbmRlcmVkRWRpdE5hbWVGb3JtLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHByZXJlbmRlcmVkRWRpdE5hbWVGb3JtLm9iamVjdCA9IGJhck5vZGUub2JqZWN0O1xuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICBhbGVydChcIlBsZWFzZSBzdWJtaXQgcHJldmlvdXMgZWRpdCBuYW1lLlwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNsb3NlRWRpdE5hbWVGb3JtID0gZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgdGV4dE5vZGVUb0FkZEJhY2sgPSBwcmVyZW5kZXJlZEVkaXROYW1lRm9ybS5ob2xkT2xkTm9kZUNvbnRlbnQ7XG4gICAgICAgIHByZXJlbmRlcmVkRWRpdE5hbWVGb3JtLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHByZXJlbmRlcmVkRWRpdE5hbWVGb3JtLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKHRleHROb2RlVG9BZGRCYWNrLCBwcmVyZW5kZXJlZEVkaXROYW1lRm9ybSk7XG4gICAgICAgIHRleHROb2RlVG9BZGRCYWNrLmlubmVyVGV4dCA9IHRleHROb2RlVG9BZGRCYWNrLnBhcmVudE5vZGUub2JqZWN0Lm5hbWU7XG4gICAgfVxuXG4gICAgLy8gZGlzcGxheWluZyBjb250ZW50XG5cbiAgICBsZXQgY29udGVudDtcbiAgICBjb25zdCByZW5kZXJEZWZhdWx0Q29udGVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IGNvbXBvc2VEZWZhdWx0Q29udGVudCgpO1xuICAgICAgICBiYXNlQmFja2dyb3VuZC5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICB9XG5cbiAgICBjb25zdCBjb21wb3NlRGVmYXVsdENvbnRlbnQgPSBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCBjb250ZW50QXJlYSA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJjb250ZW50IGFyZWFcIik7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRUZXh0ID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJkZWZhdWx0IHRleHRcIiwgXCJMZXQncyBnZXQgc3RhcnRlZCEgQ2hvb3NlIGEgdG9kby5cIik7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRBZGRUb2RvQnV0dG9uID0gY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBcImFkZC10b2RvIGJ1dHRvblwiLCBcIk9yIGNyZWF0ZSBvbmUhXCIpO1xuICAgICAgICBjb25zdCBkZWZhdWx0SGVscGxpc3RIZWFkZXIgPSBjcmVhdGVFbGVtZW50KFwicFwiLFwiaGVscCBoZWFkZXJcIixcIk5lZWQgaGVscD8gRXhwbG9yZSB0aGVzZSBmdW5jdGlvbnM6IFwiKTtcbiAgICAgICAgY29uc3QgZGVmYXVsdEhlbHBMaXN0ID0gY29tcG9zZUhlbHBMaXN0KCk7XG4gICAgICAgIGNvbnRlbnRBcmVhLmFwcGVuZENoaWxkKGRlZmF1bHRUZXh0KTtcbiAgICAgICAgY29udGVudEFyZWEuYXBwZW5kQ2hpbGQoZGVmYXVsdEFkZFRvZG9CdXR0b24pO1xuICAgICAgICBjb250ZW50QXJlYS5hcHBlbmQoZGVmYXVsdEhlbHBsaXN0SGVhZGVyLCBkZWZhdWx0SGVscExpc3QpO1xuICAgICAgICByZXR1cm4gY29udGVudEFyZWE7XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyVG9kb0NvbnRlbnQgPSBmdW5jdGlvbiAodG9kbykge1xuICAgICAgICBjb25zdCB0b2RvVGl0bGUgPSBjcmVhdGVFbGVtZW50KFwiaDJcIiwgXCJjb250ZW50IHRpdGxlXCIsIHRvZG8ubmFtZSk7XG4gICAgICAgIGNvbnN0IHRvZG9EYXRlID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJjb250ZW50IGRhdGVcIiwgdG9kby5kdWVEYXRlKTtcbiAgICAgICAgY29uc3QgdG9kb0Rlc2NyaXB0aW9uID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJjb250ZW50IGRlc2NyaXB0aW9uXCIsIHRvZG8uZGVzY3JpcHRpb24pO1xuICAgICAgICBjb25zdCB0b2RvQ2hlY2tsaXN0ID0gY29tcG9zZUNoZWNrbGlzdEVsZW1lbnRzKHRvZG8uZ2V0Q2hlY2tsaXN0QXJyYXkoKSk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodG9kb1RpdGxlKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZCh0b2RvRGF0ZSk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodG9kb0Rlc2NyaXB0aW9uKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZCh0b2RvQ2hlY2tsaXN0KTtcbiAgICB9XG5cbiAgICBjb25zdCBjb21wb3NlQ2hlY2tsaXN0RWxlbWVudHMgPSBmdW5jdGlvbiAoY2hlY2tsaXN0QXJyYXkpIHtcbiAgICAgICAgY29uc3QgY2hlY2tsaXN0QXJlYSA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJjaGVja2xpc3QgYXJlYVwiKTtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPGNoZWNrbGlzdEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjaGVja2xpc3QgPSBjaGVja2xpc3RBcnJheVtpXTtcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrZmllbGQgPSBjcmVhdGVMYWJlbEFuZElucHV0KFwiY2hlY2tsaXN0IFwiICsgaSxcImNoZWNrYm94XCIsIGNoZWNrbGlzdC5kZXNjcmlwdGlvbik7XG4gICAgICAgICAgICBpZiAoY2hlY2tsaXN0LmlzQ29tcGxldGUpe1xuICAgICAgICAgICAgICAgIGNoZWNrZmllbGQuaW5wdXQuc2V0QXR0cmlidXRlKFwiY2hlY2tlZFwiLFwiXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2hlY2tsaXN0QXJlYS5hcHBlbmQoY2hlY2tmaWVsZC5pbnB1dCwgY2hlY2tmaWVsZC5sYWJlbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNoZWNrbGlzdEFyZWE7XG4gICAgfVxuXG4gICAgY29uc3QgY29tcG9zZUhlbHBMaXN0ID0gZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgbGlzdCA9IGNyZWF0ZUVsZW1lbnQoXCJ1bFwiLFwiaGVscCBsaXN0XCIpO1xuICAgICAgICBjb25zdCBoZWxwRnVuY3Rpb24xID0gY3JlYXRlRWxlbWVudChcImxpXCIsbnVsbCxcIkNsaWNrICdNZW51IE9wdGlvbnMnLlwiKTtcbiAgICAgICAgY29uc3QgaGVscEZ1bmN0aW9uMiA9IGNyZWF0ZUVsZW1lbnQoXCJsaVwiLG51bGwsXCJPcGVuIGEgcHJvamVjdCBmb2xkZXIuXCIpO1xuICAgICAgICBjb25zdCBoZWxwRnVuY3Rpb24zID0gY3JlYXRlRWxlbWVudChcImxpXCIsbnVsbCxcIkNsaWNrIHVwL2Rvd24gaWNvbnMuXCIpO1xuICAgICAgICBjb25zdCBoZWxwRnVuY3Rpb240ID0gY3JlYXRlRWxlbWVudChcImxpXCIsbnVsbCxcIlJpZ2h0IGNsaWNrIGEgdGFiLlwiKTtcbiAgICAgICAgY29uc3QgaGVscEZ1bmN0aW9uNSA9IGNyZWF0ZUVsZW1lbnQoXCJsaVwiLG51bGwsXCJDbGljayBhIGNoZWNrYm94LlwiKTtcbiAgICAgICAgY29uc3QgaGVscEZ1bmN0aW9uNiA9IGNyZWF0ZUVsZW1lbnQoXCJsaVwiLG51bGwsXCJSZWZyZXNoIHRoZSBwYWdlISAobG9jYWwgc3RvcmFnZSlcIik7XG4gICAgICAgIGxpc3QuYXBwZW5kKGhlbHBGdW5jdGlvbjEsIGhlbHBGdW5jdGlvbjIsIGhlbHBGdW5jdGlvbjMsIGhlbHBGdW5jdGlvbjQsIGhlbHBGdW5jdGlvbjUsIGhlbHBGdW5jdGlvbjYpO1xuICAgICAgICByZXR1cm4gbGlzdDtcbiAgICB9XG5cbiAgICBjb25zdCBjbGVhckNvbnRlbnRBcmVhID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB3aGlsZSAoY29udGVudC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBjb2RlcyBmb3IgZGlhbG9ncy4gVXNlIGRpYWxvZ3MgZm9yIG5ldyB0b2RvIGZvcm1zXG5cbiAgICBsZXQgbmV3VG9kb0Zvcm1EaWFsb2c7XG4gICAgbGV0IGRlbGV0ZURpYWxvZztcbiAgICBjb25zdCBwcmVyZW5kZXJEaWFsb2dzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBuZXdUb2RvRm9ybURpYWxvZyA9IGNvbXBvc2VOZXdUb2RvRm9ybURpYWxvZygpO1xuICAgICAgICBkZWxldGVEaWFsb2cgPSBjb21wb3NlRGVsZXRlRGlhbG9nKCk7XG4gICAgICAgIGJhc2VCYWNrZ3JvdW5kLmFwcGVuZChuZXdUb2RvRm9ybURpYWxvZywgZGVsZXRlRGlhbG9nKTtcbiAgICB9XG5cbiAgICBjb25zdCBzaG93TmV3VG9kb0Zvcm1EaWFsb2cgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlcmVuZGVyUHJvamVjdFNlbGVjdGlvbigpO1xuICAgICAgICBuZXdUb2RvRm9ybURpYWxvZy5zaG93TW9kYWwoKTtcbiAgICB9XG5cbiAgICBjb25zdCBjbG9zZU5ld1RvZG9Gb3JtRGlhbG9nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBuZXdUb2RvRm9ybURpYWxvZy5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKS5yZXNldCgpO1xuICAgICAgICByZXNldENoZWNrbGlzdEZpZWxkc1RvT25lKCk7XG4gICAgICAgIHJlc2V0U2l6ZU9mVGV4dGFyZWEoKTtcbiAgICAgICAgbmV3VG9kb0Zvcm1EaWFsb2cuY2xvc2UoKTtcbiAgICB9XG5cbiAgICBjb25zdCBjb21wb3NlTmV3VG9kb0Zvcm1EaWFsb2cgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IHRvZG9Gb3JtRGlhbG9nID0gY3JlYXRlRWxlbWVudChcImRpYWxvZ1wiLCBcIm5ldyB0b2RvIGRpYWxvZ1wiKTtcbiAgICAgICAgY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICAgICAgY29uc3QgdG9kb0Zvcm1FbGVtZW50c0FycmF5ID0gT2JqZWN0LnZhbHVlcyhjb21wb3NlVG9kb0Zvcm1FbGVtZW50cygpKTtcbiAgICAgICAgZm9yIChsZXQgZWxlbWVudCBvZiB0b2RvRm9ybUVsZW1lbnRzQXJyYXkpIHtcbiAgICAgICAgICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIixcImJ1dHRvbiBjb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCBcInN1Ym1pdCBidXR0b25cIiwgXCJTdWJtaXRcIik7XG4gICAgICAgIHN1Ym1pdEJ1dHRvbi50eXBlID0gXCJzdWJtaXRcIjtcbiAgICAgICAgY29uc3QgY2FuY2VsQnV0dG9uID0gY3JlYXRlRWxlbWVudChcImJ1dHRvblwiICxcImNhbmNlbCBidXR0b25cIiwgXCJDYW5jZWxcIik7XG4gICAgICAgIGNhbmNlbEJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZChjYW5jZWxCdXR0b24sc3VibWl0QnV0dG9uKTtcbiAgICAgICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uQ29udGFpbmVyKTtcbiAgICAgICAgdG9kb0Zvcm1EaWFsb2cuYXBwZW5kQ2hpbGQodG9kb0Zvcm0pO1xuICAgICAgICByZXR1cm4gdG9kb0Zvcm1EaWFsb2c7XG4gICAgfVxuXG4gICAgY29uc3QgY29tcG9zZVRvZG9Gb3JtRWxlbWVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IG5hbWVGaWVsZHMgPSBjb21wb3NlQ29udGFpbmVkRmllbGRFbGVtZW50KGNyZWF0ZUxhYmVsQW5kSW5wdXQoXCJuYW1lXCIsIFwidGV4dFwiLCBcIlRpdGxlKjpcIiwgbnVsbCwgdHJ1ZSwgNDApKTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25GaWVsZHMgPSBjb21wb3NlQ29udGFpbmVkRmllbGRFbGVtZW50KGNyZWF0ZUxhYmVsQW5kSW5wdXQoXCJkZXNjcmlwdGlvblwiLCBcInRleHRhcmVhXCIsIFwiRGVzY3JpcHRpb246XCIpKTtcbiAgICAgICAgY29uc3QgZHVlRGF0ZUZpZWxkcyA9IGNvbXBvc2VDb250YWluZWRGaWVsZEVsZW1lbnQoY3JlYXRlTGFiZWxBbmRJbnB1dChcImR1ZURhdGVcIiwgXCJkYXRlXCIsIFwiRHVlIERhdGU6XCIpKTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHlRdWVzdGlvbiA9IGNvbXBvc2VQcmlvcml0eVJhZGlvSW5wdXQoKTtcbiAgICAgICAgY29uc3QgcHJvamVjdEZpZWxkUXVlc3Rpb24gPSBjb21wb3NlUHJvamVjdFNlbGVjdElucHV0KCk7XG4gICAgICAgIGNvbnN0IGNoZWNrbGlzdFF1ZXN0aW9uID0gY29tcG9zZUNoZWNrbGlzdElucHV0QXJlYSgpO1xuICAgICAgICByZXR1cm4geyBuYW1lRmllbGRzLCBkdWVEYXRlRmllbGRzLCBwcmlvcml0eVF1ZXN0aW9uLCBwcm9qZWN0RmllbGRRdWVzdGlvbiwgZGVzY3JpcHRpb25GaWVsZHMsIGNoZWNrbGlzdFF1ZXN0aW9uIH07XG4gICAgfVxuXG4gICAgY29uc3QgY29tcG9zZVByaW9yaXR5UmFkaW9JbnB1dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgcHJpb3JpdHlRdWVzdGlvbkNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJwcmlvcml0eSBxdWVzdGlvbiBhcmVhXCIpO1xuICAgICAgICBjb25zdCBwcmlvcml0eVJhZGlvUXVlc3Rpb25UZXh0ID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJwcmlvcml0eSB0ZXh0XCIsIFwiUHJpb3JpdHkqOlwiKTtcbiAgICAgICAgY29uc3QgcmFkaW9Db250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsXCJjb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5SGlnaFJhZGlvRmllbGRzID0gY3JlYXRlTGFiZWxBbmRJbnB1dChcInByaW9yaXR5XCIsIFwicmFkaW9cIiwgXCJIaWdoXCIsIDMsIHRydWUpO1xuICAgICAgICBjb25zdCBwcmlvcml0eU1lZGl1bVJhZGlvRmllbGRzID0gY3JlYXRlTGFiZWxBbmRJbnB1dChcInByaW9yaXR5XCIsIFwicmFkaW9cIiwgXCJNZWRpdW1cIiwgMik7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5TG93UmFkaW9GaWVsZHMgPSBjcmVhdGVMYWJlbEFuZElucHV0KFwicHJpb3JpdHlcIiwgXCJyYWRpb1wiLCBcIkxvd1wiLCAxKTtcbiAgICAgICAgcmFkaW9Db250YWluZXIuYXBwZW5kKHByaW9yaXR5SGlnaFJhZGlvRmllbGRzLmlucHV0LCBwcmlvcml0eUhpZ2hSYWRpb0ZpZWxkcy5sYWJlbCxcbiAgICAgICAgICAgIHByaW9yaXR5TWVkaXVtUmFkaW9GaWVsZHMuaW5wdXQsIHByaW9yaXR5TWVkaXVtUmFkaW9GaWVsZHMubGFiZWwsXG4gICAgICAgICAgICBwcmlvcml0eUxvd1JhZGlvRmllbGRzLmlucHV0LCBwcmlvcml0eUxvd1JhZGlvRmllbGRzLmxhYmVsKTtcbiAgICAgICAgcHJpb3JpdHlRdWVzdGlvbkNvbnRhaW5lci5hcHBlbmQocHJpb3JpdHlSYWRpb1F1ZXN0aW9uVGV4dCxyYWRpb0NvbnRhaW5lcik7XG4gICAgICAgIHJldHVybiBwcmlvcml0eVF1ZXN0aW9uQ29udGFpbmVyO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbXBvc2VQcm9qZWN0U2VsZWN0SW5wdXQgPSBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsXCJwcm9qZWN0IHF1ZXN0aW9uIGFyZWFcIik7XG4gICAgICAgIGNvbnN0IHF1ZXN0aW9uVGV4dCA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsXCJwcm9qZWN0IHRleHRcIixcIkFkZCB0byBwcm9qZWN0OiBcIik7XG4gICAgICAgIGNvbnN0IHNlbGVjdEVsZW1lbnQgPSBjb21wb3NlUHJvamVjdFNlbGVjdGlvbigpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kKHF1ZXN0aW9uVGV4dCwgc2VsZWN0RWxlbWVudCk7XG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfVxuXG4gICAgY29uc3QgY29tcG9zZVByb2plY3RTZWxlY3Rpb24gPSBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCBzZWxlY3RFbGVtZW50ID0gY3JlYXRlRWxlbWVudChcInNlbGVjdFwiLCBcInByb2plY3Qgc2VsZWN0aW9uXCIpO1xuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZXMgPSBwYWdlTWFuYWdlci5nZXRQcm9qZWN0c0FuZE5ha2VkVG9kb3MoKS5wcm9qZWN0cy5tYXAoKHByb2plY3QpPT4ocHJvamVjdC5uYW1lKSk7XG4gICAgICAgIHByb2plY3ROYW1lcy51bnNoaWZ0KFwiKG5vIHByb2plY3QpXCIpO1xuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCBwcm9qZWN0TmFtZXMubGVuZ3RoIDsgaSsrKXtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgICAgICBvcHRpb24udmFsdWUgPSBpLTE7XG4gICAgICAgICAgICBvcHRpb24uaW5uZXJUZXh0ID0gcHJvamVjdE5hbWVzW2ldO1xuICAgICAgICAgICAgc2VsZWN0RWxlbWVudC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZWxlY3RFbGVtZW50O1xuICAgIH1cblxuICAgIGNvbnN0IHJlcmVuZGVyUHJvamVjdFNlbGVjdGlvbiA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicHJvamVjdCBzZWxlY3Rpb24gZm9yIG5ldyB0b2RvIGZvcm0gcmVyZW5kZXJlZFwiKVxuICAgICAgICBjb25zdCBzZWxlY3RFbGVtZW50ID0gbmV3VG9kb0Zvcm1EaWFsb2cucXVlcnlTZWxlY3RvcihcInNlbGVjdFwiKTtcbiAgICAgICAgY29uc3QgbmV3U2VsZWN0ID0gY29tcG9zZVByb2plY3RTZWxlY3Rpb24oKTtcbiAgICAgICAgc2VsZWN0RWxlbWVudC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdTZWxlY3Qsc2VsZWN0RWxlbWVudCk7XG4gICAgfVxuXG4gICAgY29uc3QgY29tcG9zZUNoZWNrbGlzdElucHV0QXJlYSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIixcImNoZWNrbGlzdCBxdWVzdGlvbiBhcmVhXCIpO1xuICAgICAgICBjb25zdCBxdWVzdGlvblRleHQgPSBjcmVhdGVFbGVtZW50KFwicFwiLFwiY2hlY2tsaXN0IHRleHRcIixcIk1ha2UgY2hlY2tsaXN0OiBcIik7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gY29tcG9zZUNvbnRhaW5lZEZpZWxkRWxlbWVudChjcmVhdGVMYWJlbEFuZElucHV0KFwiY2hlY2tsaXN0XCIsIFwidGV4dFwiLCBcIlRhc2sgMVwiLCBudWxsLCBmYWxzZSkpO1xuICAgICAgICBjb25zdCBhZGRBbm90aGVyRmllbGRCdXR0b24gPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsXCJhZGQgY2hlY2tsaXN0IGJ1dHRvblwiLFwiK1wiKTtcbiAgICAgICAgYWRkQW5vdGhlckZpZWxkQnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kKHF1ZXN0aW9uVGV4dCwgZmllbGQsIGFkZEFub3RoZXJGaWVsZEJ1dHRvbik7XG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfVxuXG4gICAgbGV0IGNoZWNrbGlzdENvdW50ID0gMjtcbiAgICBjb25zdCBhZGRBbm90aGVyQ2hlY2tsaXN0RmllbGQgPSBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCBmaWVsZCA9IGNvbXBvc2VDb250YWluZWRGaWVsZEVsZW1lbnQoY3JlYXRlTGFiZWxBbmRJbnB1dChcImNoZWNrbGlzdFwiLCBcInRleHRcIiwgXCJUYXNrIFwiICsgY2hlY2tsaXN0Q291bnQsIG51bGwsIGZhbHNlKSk7XG4gICAgICAgIGNoZWNrbGlzdENvdW50Kys7XG4gICAgICAgIGNvbnN0IG5vZGVUb0FwcGVuZEJlZm9yZSA9IG5ld1RvZG9Gb3JtRGlhbG9nLnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLmNoZWNrbGlzdC5idXR0b25cIik7XG4gICAgICAgIG5vZGVUb0FwcGVuZEJlZm9yZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShmaWVsZCwgbm9kZVRvQXBwZW5kQmVmb3JlKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXNldENoZWNrbGlzdEZpZWxkc1RvT25lID0gZnVuY3Rpb24oKXtcbiAgICAgICAgY2hlY2tsaXN0Q291bnQgPSAyO1xuICAgICAgICBjb25zdCBjaGVja2xpc3RBcmVhID0gbmV3VG9kb0Zvcm1EaWFsb2cucXVlcnlTZWxlY3RvcihcIi5jaGVja2xpc3QucXVlc3Rpb24uYXJlYVwiKTtcbiAgICAgICAgY29uc3QgY2hlY2tsaXN0cyA9IGNoZWNrbGlzdEFyZWEucXVlcnlTZWxlY3RvckFsbChcImRpdi5jaGVja2xpc3RcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKGNoZWNrbGlzdHMpO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaTxjaGVja2xpc3RzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGNoZWNrbGlzdEFyZWEucmVtb3ZlQ2hpbGQoY2hlY2tsaXN0c1tpXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZXNldFNpemVPZlRleHRhcmVhID0gZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgdGV4dGFyZWEgPSBuZXdUb2RvRm9ybURpYWxvZy5xdWVyeVNlbGVjdG9yKFwidGV4dGFyZWFcIik7XG4gICAgICAgIHRleHRhcmVhLnN0eWxlLndpZHRoID0gXCIzNzRweFwiO1xuICAgICAgICB0ZXh0YXJlYS5zdHlsZS5oZWlnaHQgPSBcIjEyM3B4XCI7XG4gICAgfVxuXG4gICAgLy8gY29kZSBmb3IgZGVsZXRlIGRpYWxvZ1xuXG4gICAgY29uc3Qgc2hvd0RlbGV0ZURpYWxvZyA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGRlbGV0ZURpYWxvZy5zaG93TW9kYWwoKTtcbiAgICAgICAgdXBkYXRlRGVsZXRlRm9ybVNlbGVjdGlvbigpO1xuICAgIH1cblxuICAgIGNvbnN0IGNsb3NlRGVsZXRlRGlhbG9nID0gZnVuY3Rpb24oKXtcbiAgICAgICAgZGVsZXRlRGlhbG9nLmNsb3NlKCk7XG4gICAgICAgIGRlbGV0ZURpYWxvZy5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKS5yZXNldCgpO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbXBvc2VEZWxldGVEaWFsb2cgPSBmdW5jdGlvbigpe1xuICAgICAgICBkZWxldGVEaWFsb2cgPSBjcmVhdGVFbGVtZW50KFwiZGlhbG9nXCIsXCJkZWxldGUgZGlhbG9nXCIpO1xuICAgICAgICBjb25zdCBkZWxldGVGb3JtID0gY29tcG9zZURlbGV0ZUZvcm0oKTtcbiAgICAgICAgZGVsZXRlRGlhbG9nLmFwcGVuZENoaWxkKGRlbGV0ZUZvcm0pO1xuICAgICAgICByZXR1cm4gZGVsZXRlRGlhbG9nO1xuICAgIH1cblxuICAgIGNvbnN0IHVwZGF0ZURlbGV0ZUZvcm1TZWxlY3Rpb24gPSBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCBvbGREZWxldGVGb3JtID0gZGVsZXRlRGlhbG9nLnF1ZXJ5U2VsZWN0b3IoXCIuZGVsZXRlLmZvcm1cIik7XG4gICAgICAgIGNvbnN0IG5ld0RlbGV0ZUZvcm0gPSBjb21wb3NlRGVsZXRlRm9ybSgpO1xuICAgICAgICBvbGREZWxldGVGb3JtLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld0RlbGV0ZUZvcm0sIG9sZERlbGV0ZUZvcm0pO1xuICAgICAgICBiaW5kRGVsZXRlRm9ybURpYWxvZ0FyZWEoKTtcbiAgICB9XG5cbiAgICBjb25zdCBjb21wb3NlRGVsZXRlRm9ybSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IGRlbGV0ZVByb2plY3RQcm9tcHQgPSBjcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgXCJkZWxldGUgcHJvamVjdCBsYWJlbFwiLCBcIkRlbGV0ZSBhbiBlbnRpcmUgcHJvamVjdDogXCIpO1xuICAgICAgICBjb25zdCBwcm9qZWN0U2VsZWN0aW9uID0gY29tcG9zZVByb2plY3RTZWxlY3Rpb24oKTtcbiAgICAgICAgY29uc3QgZGVsZXRlVG9kb1Byb21wdCA9IGNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCBcImRlbGV0ZSB0b2RvIGxhYmVsXCIsIFwiRGVsZXRlIHRvZG86IFwiKTtcbiAgICAgICAgY29uc3QgdG9kb1NlbGVjdGlvbiA9IGNvbXBvc2VUb2RvU2VsZWN0aW9uKCk7XG4gICAgICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIixcImJ1dHRvbiBjb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLFwic3VibWl0IGJ1dHRvblwiLCBcIlN1Ym1pdFwiKTtcbiAgICAgICAgc3VibWl0QnV0dG9uLnR5cGUgPSBcInN1Ym1pdFwiO1xuICAgICAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwiY2FuY2VsIGJ1dHRvblwiICxcIkNhbmNlbFwiKTtcbiAgICAgICAgY2FuY2VsQnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgICAgICBidXR0b25Db250YWluZXIuYXBwZW5kKGNhbmNlbEJ1dHRvbiwgc3VibWl0QnV0dG9uKTtcbiAgICAgICAgY29uc3QgZm9ybSA9IGNyZWF0ZUVsZW1lbnQgKFwiZm9ybVwiLFwiZGVsZXRlIGZvcm1cIik7XG4gICAgICAgIGZvcm0uYXBwZW5kKGRlbGV0ZVByb2plY3RQcm9tcHQsIHByb2plY3RTZWxlY3Rpb24sIGRlbGV0ZVRvZG9Qcm9tcHQsIHRvZG9TZWxlY3Rpb24sIGJ1dHRvbkNvbnRhaW5lcik7XG4gICAgICAgIHJldHVybiBmb3JtO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbXBvc2VUb2RvU2VsZWN0aW9uID0gZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3Qgc2VsZWN0RWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIixcInRvZG8gc2VsZWN0aW9uXCIpO1xuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IHBhZ2VNYW5hZ2VyLmdldFByb2plY3RzQW5kTmFrZWRUb2RvcygpLnByb2plY3RzO1xuICAgICAgICBjb25zdCBuYWtlZFRvZG9zID0gcGFnZU1hbmFnZXIuZ2V0UHJvamVjdHNBbmROYWtlZFRvZG9zKCkudG9kb3NXaXRob3V0UHJvamVjdDtcbiAgICAgICAgY29uc3Qgbm9TZWxlY3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpXG4gICAgICAgIG5vU2VsZWN0T3B0aW9uLmlubmVyVGV4dCA9IFwiKG5vIHRvZG8pXCI7XG4gICAgICAgIG5vU2VsZWN0T3B0aW9uLnZhbHVlID0gLTE7XG4gICAgICAgIHNlbGVjdEVsZW1lbnQuYXBwZW5kQ2hpbGQobm9TZWxlY3RPcHRpb24pO1xuICAgICAgICBmb3IgKGxldCBwcm9qZWN0IG9mIHByb2plY3RzKXtcbiAgICAgICAgICAgIGNvbnN0IG9wdGdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGdyb3VwXCIpO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdEluZGV4ID0gcHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KTtcbiAgICAgICAgICAgIG9wdGdyb3VwLmxhYmVsID0gcHJvamVjdC5uYW1lO1xuICAgICAgICAgICAgY29uc3QgdG9kb3MgPSBwcm9qZWN0LmdldFRvZG9BcnJheSgpO1xuICAgICAgICAgICAgZm9yIChsZXQgdG9kbyBvZiB0b2Rvcyl7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb24udmFsdWUgPSBbcHJvamVjdEluZGV4LCB0b2Rvcy5pbmRleE9mKHRvZG8pXTtcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb24uaW5uZXJUZXh0ID0gdG9kby5uYW1lO1xuICAgICAgICAgICAgICAgIG9wdGdyb3VwLmFwcGVuZENoaWxkKHNlbGVjdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxlY3RFbGVtZW50LmFwcGVuZENoaWxkKG9wdGdyb3VwKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCB0b2RvIG9mIG5ha2VkVG9kb3Mpe1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgIHNlbGVjdGlvbi52YWx1ZSA9IFstMSxuYWtlZFRvZG9zLmluZGV4T2YodG9kbyldO1xuICAgICAgICAgICAgc2VsZWN0aW9uLmlubmVyVGV4dCA9IHRvZG8ubmFtZTtcbiAgICAgICAgICAgIHNlbGVjdEVsZW1lbnQuYXBwZW5kQ2hpbGQoc2VsZWN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2VsZWN0RWxlbWVudDtcbiAgICB9XG5cbiAgICAvLyBtb3N0IGJpbmRpbmcgZXZlbnQgbGlzdGVybmVyIGZ1bmN0aW9uc1xuXG4gICAgY29uc3QgYmluZEFsbEV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYmluZEhlbHBCdXR0b24oKTtcbiAgICAgICAgYmluZFNpZGViYXJBcmVhKCk7XG4gICAgICAgIGJpbmRDb250ZW50QXJlYSgpO1xuICAgICAgICBiaW5kVG9kb0Zvcm1EaWFsb2dBcmVhKCk7XG4gICAgICAgIGJpbmREZWxldGVGb3JtRGlhbG9nQXJlYSgpO1xuICAgIH1cblxuICAgIGNvbnN0IGJpbmRIZWxwQnV0dG9uID0gZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgaGVscEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVscC5idXR0b25cIik7XG4gICAgICAgIGhlbHBCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpe1xuICAgICAgICAgICAgY2xlYXJDb250ZW50QXJlYSgpO1xuICAgICAgICAgICAgY29uc3QgbmV3Q29udGVudCA9IGNvbXBvc2VEZWZhdWx0Q29udGVudCgpO1xuICAgICAgICAgICAgYmFzZUJhY2tncm91bmQucmVwbGFjZUNoaWxkKG5ld0NvbnRlbnQsIGNvbnRlbnQpO1xuICAgICAgICAgICAgY29udGVudCA9IG5ld0NvbnRlbnQ7XG4gICAgICAgICAgICBiaW5kQ29udGVudEFyZWEoKTtcbiAgICB9KX07XG5cbiAgICBjb25zdCBiaW5kU2lkZWJhckFyZWEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGJpbmREcm9wZG93bkFyZWEoKTtcbiAgICAgICAgYmluZEFsbFByb2plY3RzQW5kQW55Q2hpbGRUb2RvcygpO1xuICAgICAgICBiaW5kQWxsTmFrZWRUb2RvcygpO1xuICAgICAgICBiaW5kVXBEb3duSWNvbnMoKTtcbiAgICB9XG5cbiAgICBjb25zdCBiaW5kRHJvcGRvd25BcmVhID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBkcm9wZG93bkJ1dHRvbiA9IHNpZGViYXIucXVlcnlTZWxlY3RvcihcIi5uZXctZHJvcGRvd24uYnV0dG9uXCIpO1xuICAgICAgICBjb25zdCBuZXdCdXR0b25Db250YWluZXIgPSBzaWRlYmFyLnF1ZXJ5U2VsZWN0b3IoXCIubmV3LWJ1dHRvbi5jb250YWluZXJcIik7XG4gICAgICAgIGRyb3Bkb3duQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0b2dnbGVTaG93SGlkZUVsZW1lbnQobmV3QnV0dG9uQ29udGFpbmVyKSk7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3RCdXR0b24gPSBuZXdCdXR0b25Db250YWluZXIucXVlcnlTZWxlY3RvcihcIi5uZXcucHJvamVjdC5idXR0b25cIik7XG4gICAgICAgIG5ld1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHBhZ2VNYW5hZ2VyLnByb2Nlc3NOZXdQcm9qZWN0KCkpO1xuICAgICAgICBjb25zdCBuZXdUb2RvQnV0dG9uID0gbmV3QnV0dG9uQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIubmV3LnRvZG8uYnV0dG9uXCIpO1xuICAgICAgICBuZXdUb2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBzaG93TmV3VG9kb0Zvcm1EaWFsb2coKSk7XG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IG5ld0J1dHRvbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmRlbGV0ZS5idXR0b25cIik7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gc2hvd0RlbGV0ZURpYWxvZygpKTtcbiAgICB9XG5cbiAgICBjb25zdCBiaW5kQWxsUHJvamVjdHNBbmRBbnlDaGlsZFRvZG9zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0QW5kQ2hpbGRUb2RvQmFycyA9IHNpZGViYXIucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0LWFuZC1jaGlsZC10b2RvLmFyZWFcIik7XG4gICAgICAgIGZvciAobGV0IHByb2plY3RBbmRDaGlsZFRvZG9CYXIgb2YgcHJvamVjdEFuZENoaWxkVG9kb0JhcnMpIHtcbiAgICAgICAgICAgIGJpbmRQcm9qZWN0QW5kQ2hpbGRUb2Rvc0Jhcihwcm9qZWN0QW5kQ2hpbGRUb2RvQmFyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGJpbmRBbGxOYWtlZFRvZG9zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBuYWtlZFRvZG9CYXJzID0gc2lkZWJhci5xdWVyeVNlbGVjdG9yQWxsKFwiLnNpZGViYXIuYXJlYSA+IC50b2RvLmJhci5hcmVhXCIpO1xuICAgICAgICBmb3IgKGxldCB0b2RvQmFyIG9mIG5ha2VkVG9kb0JhcnMpIHtcbiAgICAgICAgICAgIGJpbmRUb2RvQmFyKHRvZG9CYXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYmluZFByb2plY3RBbmRDaGlsZFRvZG9zQmFyID0gZnVuY3Rpb24gKHByb2plY3RBbmRDaGlsZFRvZG9zTm9kZSkge1xuICAgICAgICBjb25zdCBwcm9qZWN0QmFyTm9kZSA9IHByb2plY3RBbmRDaGlsZFRvZG9zTm9kZS5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QuYmFyLmFyZWFcIik7XG4gICAgICAgIHByb2plY3RCYXJOb2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBwYWdlTWFuYWdlci50b2dnbGVPcGVuQ2xvc2VQcm9qZWN0VGFiKHByb2plY3RBbmRDaGlsZFRvZG9zTm9kZSkpO1xuICAgICAgICBwcm9qZWN0QmFyTm9kZS5hZGRFdmVudExpc3RlbmVyKFwiYXV4Y2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZW5kZXJFZGl0TmFtZUZvcm1BdEJhcihwcm9qZWN0QmFyTm9kZSk7XG4gICAgICAgICAgICBoaWRlSWNvbnMocHJvamVjdEFuZENoaWxkVG9kb3NOb2RlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGJpbmRDaGlsZFRvZG9CYXJzKHByb2plY3RCYXJOb2RlKTtcbiAgICB9XG5cbiAgICBjb25zdCBiaW5kQ2hpbGRUb2RvQmFycyA9IGZ1bmN0aW9uKHByb2plY3RCYXJOb2RlKXtcbiAgICAgICAgaWYgKHByb2plY3RCYXJOb2RlLnByb2plY3QuZ2V0SXNUb2Rvc1Nob3duKCkpIHtcbiAgICAgICAgICAgIGxldCBjaGlsZEJhck5vZGUgPSBwcm9qZWN0QmFyTm9kZS5uZXh0U2libGluZztcbiAgICAgICAgICAgIHdoaWxlIChjaGlsZEJhck5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBiaW5kVG9kb0JhcihjaGlsZEJhck5vZGUpO1xuICAgICAgICAgICAgICAgIGNoaWxkQmFyTm9kZSA9IGNoaWxkQmFyTm9kZS5uZXh0U2libGluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGJpbmRUb2RvQmFyID0gZnVuY3Rpb24gKHRvZG9CYXIpIHtcbiAgICAgICAgdG9kb0Jhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gcmVyZW5kZXJDb250ZW50QXJlYSh0b2RvQmFyLm9iamVjdCkpO1xuICAgICAgICB0b2RvQmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJhdXhjbGlja1wiLCAoKSA9PiByZW5kZXJFZGl0TmFtZUZvcm1BdEJhcih0b2RvQmFyKSk7XG4gICAgfVxuXG4gICAgY29uc3QgYmluZFVwRG93bkljb25zID0gZnVuY3Rpb24gKHByb2plY3RCYXJOb2RlKSB7XG4gICAgICAgIGxldCB1cEljb25zO1xuICAgICAgICBsZXQgZG93bkljb25zO1xuICAgICAgICAvLyBpZiBhIHByb2plY3QgYmFyIG5vZGUgaXMgTk9UIHNwZWNpZmllZCwgYmluZCB0byBhbGwgaWNvbnNcbiAgICAgICAgaWYgKHByb2plY3RCYXJOb2RlID09PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgdXBJY29ucyA9IHNpZGViYXIucXVlcnlTZWxlY3RvckFsbChcIi51cC5pY29uXCIpO1xuICAgICAgICAgICAgZG93bkljb25zID0gc2lkZWJhci5xdWVyeVNlbGVjdG9yQWxsKFwiLmRvd24uaWNvblwiKTtcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgdXBJY29ucyA9IFtwcm9qZWN0QmFyTm9kZS5xdWVyeVNlbGVjdG9yKFwiLnVwLmljb25cIildO1xuICAgICAgICAgICAgZG93bkljb25zID0gW3Byb2plY3RCYXJOb2RlLnF1ZXJ5U2VsZWN0b3IoXCIuZG93bi5pY29uXCIpXTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCB1cEljb25FbGVtZW50IG9mIHVwSWNvbnMpe1xuICAgICAgICAgICAgdXBJY29uRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpPT5wYWdlTWFuYWdlci5tb3ZlUHJvamVjdE5vZGVVcChlLHVwSWNvbkVsZW1lbnQucHJvamVjdEFuZENoaWxkTm9kZSkpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGRvd25JY29uRWxlbWVudCBvZiBkb3duSWNvbnMpe1xuICAgICAgICAgICAgZG93bkljb25FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSk9PnBhZ2VNYW5hZ2VyLm1vdmVQcm9qZWN0Tm9kZURvd24oZSxkb3duSWNvbkVsZW1lbnQucHJvamVjdEFuZENoaWxkTm9kZSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYmluZERlbGV0ZUZvcm1EaWFsb2dBcmVhID0gZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZGVsZXRlRGlhbG9nLnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWl0LmJ1dHRvblwiKTtcbiAgICAgICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZGVsZXRlRGlhbG9nLnF1ZXJ5U2VsZWN0b3IoXCIuY2FuY2VsLmJ1dHRvblwiKTtcbiAgICAgICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4gcGFnZU1hbmFnZXIucHJvY2Vzc0RlbGV0ZUZvcm1TdWJtaXQoZSwgZGVsZXRlRGlhbG9nLnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpKSk7XG4gICAgICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VEZWxldGVEaWFsb2cpO1xuICAgIH1cblxuICAgIC8vIGNvbnRlbnQgYmluZGluZ1xuXG4gICAgY29uc3QgcmVyZW5kZXJDb250ZW50QXJlYSA9IGZ1bmN0aW9uICh0b2RvT2JqZWN0KSB7XG4gICAgICAgIGNsZWFyQ29udGVudEFyZWEoKTtcbiAgICAgICAgcmVuZGVyVG9kb0NvbnRlbnQodG9kb09iamVjdCk7XG4gICAgICAgIGJpbmRDb250ZW50QXJlYSh0b2RvT2JqZWN0KTtcbiAgICB9XG5cbiAgICBjb25zdCBzd2FwTm9kZUVsZW1lbnRzID0gZnVuY3Rpb24ob2JqMSwgb2JqMikge1xuICAgICAgICAvLyBjcmVhdGUgbWFya2VyIGVsZW1lbnQgYW5kIGluc2VydCBpdCB3aGVyZSBvYmoxIGlzXG4gICAgICAgIHZhciB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgb2JqMS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0ZW1wLCBvYmoxKTtcbiAgICAgICAgLy8gbW92ZSBvYmoxIHRvIHJpZ2h0IGJlZm9yZSBvYmoyXG4gICAgICAgIG9iajIucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUob2JqMSwgb2JqMik7XG4gICAgICAgIC8vIG1vdmUgb2JqMiB0byByaWdodCBiZWZvcmUgd2hlcmUgb2JqMSB1c2VkIHRvIGJlXG4gICAgICAgIHRlbXAucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUob2JqMiwgdGVtcCk7XG4gICAgICAgIC8vIHJlbW92ZSB0ZW1wb3JhcnkgbWFya2VyIG5vZGVcbiAgICAgICAgdGVtcC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRlbXApO1xuICAgIH1cblxuICAgIGNvbnN0IGJpbmRDb250ZW50QXJlYSA9IGZ1bmN0aW9uICh0b2RvT2JqZWN0KSB7XG4gICAgICAgIGNvbnN0IGFkZFRvZG9CdXR0b24gPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRvZG8uYnV0dG9uXCIpO1xuICAgICAgICBpZiAodG9kb09iamVjdCA9PSB1bmRlZmluZWQgKXtcbiAgICAgICAgICAgIGFkZFRvZG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHNob3dOZXdUb2RvRm9ybURpYWxvZygpKTtcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgY29uc3QgY2hlY2tsaXN0SW5wdXRzID0gY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIik7XG4gICAgICAgICAgICBjb25zdCB0b2RvQ2hlY2tsaXN0cyA9IHRvZG9PYmplY3QuZ2V0Q2hlY2tsaXN0QXJyYXkoKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hlY2tsaXN0SW5wdXRzLmxlbmd0aCA7IGkrKyl7XG4gICAgICAgICAgICAgICAgY2hlY2tsaXN0SW5wdXRzW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+IHBhZ2VNYW5hZ2VyLnByb2Nlc3NDaGVja2xpc3RUb2dnbGUodG9kb0NoZWNrbGlzdHNbaV0sdG9kb09iamVjdCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYmluZFRvZG9Gb3JtRGlhbG9nQXJlYSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3Qgc3VibWl0QnV0dG9uID0gbmV3VG9kb0Zvcm1EaWFsb2cucXVlcnlTZWxlY3RvcihcIi5zdWJtaXQuYnV0dG9uXCIpO1xuICAgICAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBuZXdUb2RvRm9ybURpYWxvZy5xdWVyeVNlbGVjdG9yKFwiLmNhbmNlbC5idXR0b25cIik7XG4gICAgICAgIGNvbnN0IGFkZEFub3RoZXJGaWVsZEJ1dHRvbiA9IG5ld1RvZG9Gb3JtRGlhbG9nLnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLmNoZWNrbGlzdC5idXR0b25cIik7XG4gICAgICAgIGNvbnN0IHRvZG9Gb3JtID0gbmV3VG9kb0Zvcm1EaWFsb2cucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XG4gICAgICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHBhZ2VNYW5hZ2VyLnByb2Nlc3NOZXdUb2RvRm9ybVN1Ym1pdChlLCB0b2RvRm9ybSkpO1xuICAgICAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlTmV3VG9kb0Zvcm1EaWFsb2cpO1xuICAgICAgICBhZGRBbm90aGVyRmllbGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZEFub3RoZXJDaGVja2xpc3RGaWVsZClcbiAgICB9XG5cbiAgICByZXR1cm4geyBpbml0LCBzd2FwTm9kZUVsZW1lbnRzLFxuICAgICAgICBhcHBlbmRQcm9qZWN0Q2hpbGRUb2RvcywgY2xlYXJQcm9qZWN0Q2hpbGRUb2RvcyxcbiAgICAgICAgcmVuZGVyQW5kQmluZE5ld1Byb2plY3QsIGFwcGVuZE5ld1RvZG9BdEluZGV4LFxuICAgICAgICBjbG9zZU5ld1RvZG9Gb3JtRGlhbG9nLCBiaW5kQ2hpbGRUb2RvQmFycyxcbiAgICAgICAgYmluZFRvZG9CYXIsIGNsb3NlRWRpdE5hbWVGb3JtLFxuICAgICAgICByZW1vdmVUYWIsIGNsb3NlRGVsZXRlRGlhbG9nLCBkaXNwbGF5SWNvbnMsXG4gICAgIH07XG59KCk7XG5cblxuXG5leHBvcnQgeyByZW5kZXJNYW5hZ2VyIH07IiwiLy8gdGhpcyBtb2R1bGUgaXMgZm9yIHdvcmtpbmcgd2l0aCBsb2NhbFN0b3JhZ2UgdG8gc3RvcmUgZGF0YSAvL1xuaW1wb3J0IHsgcGFnZU1hbmFnZXIgfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuaW1wb3J0IHsgYXR0YWNoUHJvamVjdE1ldGhvZHMsICB9IGZyb20gXCIuL3Byb2plY3QuanNcIjtcbmltcG9ydCB7IGF0dGFjaFRvZG9NZXRob2RzLCBhdHRhY2hDaGVja2xpc3RNZXRob2RzIH0gZnJvbSBcIi4vdG9kby5qc1wiO1xuXG5jb25zdCBzdG9yYWdlTWFuYWdlciA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgcHJvamVjdHMgPSBbXTtcbiAgICBsZXQgdG9kb3MgPSBbXTtcbiAgICBsZXQgaXNTdG9yYWdlQXZhaWxhYmxlO1xuXG4gICAgY29uc3Qgc3RvcmFnZUF2YWlsYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHRlc3QgPSAndGVzdCc7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0ZXN0LCB0ZXN0KTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHRlc3QpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJsb2NhbCBzdG9yYWdlIGF2YWlsYWJsZVwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJsb2NhbCBzdG9yYWdlIHVuYXZhaWxhYmxlXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgdHVyblN0b3JhZ2VPbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaXNTdG9yYWdlQXZhaWxhYmxlID0gY2hlY2tTdG9yYWdlQXZhaWxhYmxlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgY2hlY2tTdG9yYWdlQXZhaWxhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gQm9vbGVhbihzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKTtcbiAgICB9XG5cbiAgICB0dXJuU3RvcmFnZU9uKCk7XG5cbiAgICBjb25zdCBnZXRQcm9qZWN0c0FuZFRvZG9zRnJvbVN0b3JhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IHBhcnRpYWxQcm9qZWN0c0FuZFRvZG9zID0gZ2V0UGFydGlhbFByb2plY3RzQW5kVG9kb3MoKTtcbiAgICAgICAgaWYgKHBhcnRpYWxQcm9qZWN0c0FuZFRvZG9zID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgYWxlcnQoXCJObyBwcm9qZWN0cyBvciB0b2RvcyBvYnRhaW5lZCBmcm9tIHN0b3JhZ2VcIilcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFydGlhbFByb2plY3RzID0gcGFydGlhbFByb2plY3RzQW5kVG9kb3MucGFydGlhbFByb2plY3RzO1xuICAgICAgICBjb25zdCBwYXJ0aWFsVG9kb3MgPSBwYXJ0aWFsUHJvamVjdHNBbmRUb2Rvcy5wYXJ0aWFsVG9kb3M7XG4gICAgICAgIGxldCBwcm9qZWN0cyA9IFtdO1xuICAgICAgICBsZXQgdG9kb3MgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgcGFydGlhbFByb2plY3Qgb2YgcGFydGlhbFByb2plY3RzKSB7XG4gICAgICAgICAgICBwcm9qZWN0cy5wdXNoKHJlYXR0YWNoUHJvamVjdE1ldGhvZHMocGFydGlhbFByb2plY3QpKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBwYXJ0aWFsVG9kbyBvZiBwYXJ0aWFsVG9kb3MpIHtcbiAgICAgICAgICAgIHRvZG9zLnB1c2gocmVhdHRhY2hUb2RvTWV0aG9kcyhwYXJ0aWFsVG9kbykpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgcHJvamVjdHMsIHRvZG9zIH07XG4gICAgfVxuXG4gICAgY29uc3QgcmVhdHRhY2hQcm9qZWN0TWV0aG9kcyA9IGZ1bmN0aW9uIChwYXJ0aWFsKSB7XG4gICAgICAgIHBhcnRpYWwgPSBhdHRhY2hQcm9qZWN0TWV0aG9kcyhwYXJ0aWFsKTtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPCBwYXJ0aWFsLmdldFRvZG9BcnJheSgpLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB0b2RvID0gcGFydGlhbC5nZXRUb2RvQXJyYXkoKVtpXTtcbiAgICAgICAgICAgIHBhcnRpYWwudG9kb0FycmF5W2ldID0gcmVhdHRhY2hUb2RvTWV0aG9kcyh0b2RvKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGFydGlhbDtcbiAgICB9XG5cbiAgICBjb25zdCByZWF0dGFjaFRvZG9NZXRob2RzID0gZnVuY3Rpb24gKHBhcnRpYWwpIHtcbiAgICAgICAgcGFydGlhbCA9IGF0dGFjaFRvZG9NZXRob2RzKHBhcnRpYWwpO1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8IHBhcnRpYWwuZ2V0Q2hlY2tsaXN0QXJyYXkoKS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY2hlY2tsaXN0ID0gcGFydGlhbC5nZXRDaGVja2xpc3RBcnJheSgpW2ldO1xuICAgICAgICAgICAgcGFydGlhbC5jaGVja2xpc3RBcnJheVtpXSA9IHJlYXR0YWNoQ2hlY2tsaXN0TWV0aG9kcyhjaGVja2xpc3QpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXJ0aWFsO1xuICAgIH1cblxuICAgIGNvbnN0IHJlYXR0YWNoQ2hlY2tsaXN0TWV0aG9kcyA9IGZ1bmN0aW9uIChwYXJ0aWFsKSB7XG4gICAgICAgIHBhcnRpYWwgPSBhdHRhY2hDaGVja2xpc3RNZXRob2RzKHBhcnRpYWwpO1xuICAgICAgICByZXR1cm4gcGFydGlhbDtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRQYXJ0aWFsUHJvamVjdHNBbmRUb2RvcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHBhcnRpYWxQcm9qZWN0cyA9IFtdO1xuICAgICAgICBsZXQgcGFydGlhbFRvZG9zID0gW107XG4gICAgICAgIGlmICghaXNTdG9yYWdlQXZhaWxhYmxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBsZXQgcHJvamVjdEZyb21TdG9yYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oYHByb2plY3Qke2l9YCk7XG4gICAgICAgIHdoaWxlIChwcm9qZWN0RnJvbVN0b3JhZ2UgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHBhcnRpYWxQcm9qZWN0cy5wdXNoKEpTT04ucGFyc2UocHJvamVjdEZyb21TdG9yYWdlKSk7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgICBwcm9qZWN0RnJvbVN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgcHJvamVjdCR7aX1gKTtcbiAgICAgICAgfVxuICAgICAgICBpID0gMDtcbiAgICAgICAgbGV0IHRvZG9Gcm9tU3RvcmFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGB0b2RvJHtpfWApO1xuICAgICAgICB3aGlsZSAodG9kb0Zyb21TdG9yYWdlICE9PSBudWxsKSB7XG4gICAgICAgICAgICBwYXJ0aWFsVG9kb3MucHVzaChKU09OLnBhcnNlKHRvZG9Gcm9tU3RvcmFnZSkpO1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgdG9kb0Zyb21TdG9yYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oYHRvZG8ke2l9YCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgcGFydGlhbFByb2plY3RzLCBwYXJ0aWFsVG9kb3MgfVxuICAgIH1cblxuICAgIGNvbnN0IHNldEFsbFByb2plY3RzQW5kVG9kb3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNTdG9yYWdlQXZhaWxhYmxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc2V0QWxsUHJvamVjdHMoKTtcbiAgICAgICAgc2V0QWxsVG9kb3MoKTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRBbGxQcm9qZWN0cyA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gcGFnZU1hbmFnZXIuZ2V0UHJvamVjdHNBbmROYWtlZFRvZG9zKCkucHJvamVjdHM7XG4gICAgICAgIGZvciAobGV0IHByb2plY3Qgb2YgcHJvamVjdHMpIHtcbiAgICAgICAgICAgIHNldFByb2plY3RPclRvZG8ocHJvamVjdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzZXRBbGxUb2RvcyA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IHRvZG9zID0gcGFnZU1hbmFnZXIuZ2V0UHJvamVjdHNBbmROYWtlZFRvZG9zKCkudG9kb3NXaXRob3V0UHJvamVjdDtcbiAgICAgICAgZm9yIChsZXQgdG9kbyBvZiB0b2Rvcykge1xuICAgICAgICAgICAgc2V0UHJvamVjdE9yVG9kbyh0b2RvKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHNldFByb2plY3RPclRvZG8gPSBmdW5jdGlvbiAob2JqZWN0KSB7XG4gICAgICAgIGlmICghaXNTdG9yYWdlQXZhaWxhYmxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGZpbmFsSlNPTjtcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSBwYWdlTWFuYWdlci5nZXRQcm9qZWN0c0FuZE5ha2VkVG9kb3MoKS5wcm9qZWN0cztcbiAgICAgICAgY29uc3QgcHJvamVjdEluZGV4ID0gcHJvamVjdHMuaW5kZXhPZihvYmplY3QpO1xuICAgICAgICBpZiAocHJvamVjdEluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgZmluYWxKU09OID0gc3RyaW5naWZ5UHJvamVjdChvYmplY3QpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYHByb2plY3Qke3Byb2plY3RJbmRleH1gLCBmaW5hbEpTT04pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYExvY2FsIHN0b3JhZ2UgdXBkYXRlZCBwcm9qZWN0JHtwcm9qZWN0SW5kZXh9YClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHRvZG9zID0gcGFnZU1hbmFnZXIuZ2V0UHJvamVjdHNBbmROYWtlZFRvZG9zKCkudG9kb3NXaXRob3V0UHJvamVjdDtcbiAgICAgICAgICAgIGNvbnN0IHRvZG9JbmRleCA9IHRvZG9zLmluZGV4T2Yob2JqZWN0KTtcbiAgICAgICAgICAgIGZpbmFsSlNPTiA9IHN0cmluZ2lmeVRvZG8ob2JqZWN0KTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGB0b2RvJHt0b2RvSW5kZXh9YCwgZmluYWxKU09OKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBMb2NhbCBzdG9yYWdlIHVwZGF0ZWQgcHJvamVjdCR7cHJvamVjdEluZGV4fWApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzdHJpbmdpZnlQcm9qZWN0ID0gZnVuY3Rpb24gKHByb2plY3RPYmplY3QpIHtcbiAgICAgICAgbGV0IHByb2plY3RKU09OID0gSlNPTi5zdHJpbmdpZnkocHJvamVjdE9iamVjdCk7XG4gICAgICAgIHJldHVybiBwcm9qZWN0SlNPTjtcbiAgICB9XG5cbiAgICBjb25zdCBzdHJpbmdpZnlUb2RvID0gZnVuY3Rpb24gKHRvZG9PYmplY3QpIHtcbiAgICAgICAgY29uc3QgaW5pdGlhbEpTT04gPSBKU09OLnN0cmluZ2lmeSh0b2RvT2JqZWN0KTtcbiAgICAgICAgY29uc3QgY2hlY2tsaXN0SlNPTiA9IHN0cmluZ2lmeUNoZWNrbGlzdCh0b2RvT2JqZWN0KTtcbiAgICAgICAgY29uc3QgZmluYWxUb2RvSlNPTiA9IGluc2VydENoZWNrbGlzdEpTT04oY2hlY2tsaXN0SlNPTiwgaW5pdGlhbEpTT04pO1xuICAgICAgICByZXR1cm4gZmluYWxUb2RvSlNPTjtcbiAgICB9XG5cbiAgICBjb25zdCBzdHJpbmdpZnlDaGVja2xpc3QgPSBmdW5jdGlvbiAodG9kb09iamVjdCkge1xuICAgICAgICBsZXQgSlNPTnN0cmluZyA9IFwiXCI7XG4gICAgICAgIGNvbnN0IGNoZWNrbGlzdEFycmF5ID0gdG9kb09iamVjdC5nZXRDaGVja2xpc3RBcnJheSgpO1xuICAgICAgICBmb3IgKGxldCBjaGVja2xpc3Qgb2YgY2hlY2tsaXN0QXJyYXkpIHtcbiAgICAgICAgICAgIEpTT05zdHJpbmcgKz0gSlNPTi5zdHJpbmdpZnkoY2hlY2tsaXN0KSArIFwiLCBcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoSlNPTnN0cmluZy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBKU09Oc3RyaW5nID0gSlNPTnN0cmluZy5zbGljZSgwLCAtMik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEpTT05zdHJpbmc7XG4gICAgfVxuXG4gICAgY29uc3QgaW5zZXJ0VG9kb0pTT04gPSBmdW5jdGlvbiAodG9kb0pTT04sIGluaXRpYWxKU09OKSB7XG4gICAgICAgIGNvbnN0IGluZGV4T2ZUb2RvQXJyYXlLZXkgPSBpbml0aWFsSlNPTi5pbmRleE9mKFwidG9kb0FycmF5XCIpO1xuICAgICAgICBjb25zdCBpbmRleFRvQWRkVG8gPSBpbmRleE9mVG9kb0FycmF5S2V5ICsgKCd0b2RvQXJyYXlcIjpbJyk7XG4gICAgICAgIGNvbnN0IGluZGV4VG9SZW1vdmVVcFRvID0gaW5pdGlhbEpTT04uaW5kZXhPZihcIl1cIixpbmRleFRvQWRkVG8pO1xuICAgICAgICBjb25zdCBpbnNlcnRlZEpTT04gPSBpbml0aWFsSlNPTi5zdWJzdHJpbmcoMCwgaW5kZXhUb0FkZFRvKVxuICAgICAgICAgICAgKyB0b2RvSlNPTlxuICAgICAgICAgICAgKyBpbml0aWFsSlNPTi5zdWJzdHJpbmcoaW5kZXhUb1JlbW92ZVVwVG8pO1xuICAgICAgICByZXR1cm4gaW5zZXJ0ZWRKU09OO1xuICAgIH1cblxuICAgIGNvbnN0IGluc2VydENoZWNrbGlzdEpTT04gPSBmdW5jdGlvbiAoY2hlY2tsaXN0QXJyYXlKU09OLCBpbml0aWFsSlNPTikge1xuICAgICAgICBjb25zdCBpbmRleE9mQ2hlY2tsaXN0QXJyYXlLZXkgPSBpbml0aWFsSlNPTi5pbmRleE9mKFwiY2hlY2tsaXN0QXJyYXlcIik7XG4gICAgICAgIGNvbnN0IGluZGV4VG9BZGRUbyA9IGluZGV4T2ZDaGVja2xpc3RBcnJheUtleSArICgnY2hlY2tsaXN0QXJyYXlcIjpbJykubGVuZ3RoO1xuICAgICAgICBjb25zdCBpbmRleFRvUmVtb3ZlVXBUbyA9IGluaXRpYWxKU09OLmluZGV4T2YoXCJdXCIsaW5kZXhUb0FkZFRvKTtcbiAgICAgICAgY29uc3QgaW5zZXJ0ZWRKU09OID0gaW5pdGlhbEpTT04uc3Vic3RyaW5nKDAsIGluZGV4VG9BZGRUbylcbiAgICAgICAgICAgICsgY2hlY2tsaXN0QXJyYXlKU09OXG4gICAgICAgICAgICArIGluaXRpYWxKU09OLnN1YnN0cmluZyhpbmRleFRvUmVtb3ZlVXBUbyk7XG4gICAgICAgIHJldHVybiBpbnNlcnRlZEpTT047XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlUHJvamVjdE9yVG9kbyA9IGZ1bmN0aW9uIChvYmplY3RJbmRleCkge1xuICAgICAgICBpZiAoIWlzU3RvcmFnZUF2YWlsYWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGB0cnlpbmcgdG8gcmVtb3ZlICR7b2JqZWN0SW5kZXh9YCk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgICAgICBzZXRBbGxQcm9qZWN0c0FuZFRvZG9zKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBTdG9yYWdlTWFuYWdlciBoYXMgdXBkYXRlZCB0byAke2xvY2FsU3RvcmFnZX1gKTtcbiAgICAgICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzZXRBbGxQcm9qZWN0c0FuZFRvZG9zLCBzZXRQcm9qZWN0T3JUb2RvLFxuICAgICAgICBnZXRQcm9qZWN0c0FuZFRvZG9zRnJvbVN0b3JhZ2UsIHJlbW92ZVByb2plY3RPclRvZG8sXG4gICAgfVxuXG5cbn0oKTtcblxuZXhwb3J0IHsgc3RvcmFnZU1hbmFnZXIgfTsiLCIvLyBtb2R1bGUgZm9yIHRvZG8gYW5kIGNoZWNrbGlzdC8vXG5cbmZ1bmN0aW9uIGNyZWF0ZVRvZG8gKG5hbWUsZGVzY3JpcHRpb24sZHVlRGF0ZSxwcmlvcml0eSwuLi5jaGVja2xpc3REZXNjcmlwdGlvbnMpe1xuICAgIGxldCBpc0NvbXBsZXRlID0gZmFsc2U7XG5cbiAgICAvLyBJSUZFIHRvIGluaXRpYWxpemUgY2hlY2tsaXN0IGFycmF5IHdoZW4gdG9kbyBpcyBjcmVhdGVkXG4gICAgbGV0IGNoZWNrbGlzdEFycmF5ID0gW107XG4gICAgY29uc3QgaW5pdENoZWNrbGlzdCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGZvciAobGV0IGRlc2NyaXB0aW9uIG9mIGNoZWNrbGlzdERlc2NyaXB0aW9ucyl7XG4gICAgICAgICAgICBjaGVja2xpc3RBcnJheS5wdXNoKGNyZWF0ZUNoZWNrbGlzdChkZXNjcmlwdGlvbikpO1xuICAgICAgICB9XG4gICAgfSgpO1xuXG4gICAgY29uc3QgbWV0aG9kcyA9IHRvZG9NZXRob2REZWxlZ2F0ZSgpO1xuXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgZHVlRGF0ZSxcbiAgICAgICAgcHJpb3JpdHksXG4gICAgICAgIGlzQ29tcGxldGUsXG4gICAgICAgIGNoZWNrbGlzdEFycmF5LFxuICAgICAgICAuLi5tZXRob2RzLFxuICAgIH1cbn1cblxuY29uc3QgdG9kb01ldGhvZERlbGVnYXRlID0gZnVuY3Rpb24oKXtcblxuICAgIGNvbnN0IGdldENoZWNrbGlzdEFycmF5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGVja2xpc3RBcnJheTtcbiAgICB9XG5cbiAgICBjb25zdCBhZGRDaGVja2xpc3QgPSBmdW5jdGlvbiAobmV3Q2hlY2tsaXN0KSB7XG4gICAgICAgIHRoaXMuY2hlY2tsaXN0QXJyYXkucHVzaChuZXdDaGVja2xpc3QpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZUNoZWNrbGlzdCA9IGZ1bmN0aW9uIChjaGVja2xpc3RUb1JlbW92ZSkge1xuICAgICAgICB0aGlzLmNoZWNrbGlzdEFycmF5LnBvcChjaGVja2xpc3RUb1JlbW92ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0Q2hlY2tsaXN0QXJyYXksXG4gICAgICAgIGFkZENoZWNrbGlzdCxcbiAgICAgICAgcmVtb3ZlQ2hlY2tsaXN0LFxuICAgICAgICAuLi5jb21wbGV0ZVRvZ2dsZWFibGUoKSxcbiAgICB9XG59XG5cbmNvbnN0IGF0dGFjaFRvZG9NZXRob2RzID0gZnVuY3Rpb24ocGFydGlhbCl7XG4gICAgY29uc3QgbWV0aG9kcyA9IHRvZG9NZXRob2REZWxlZ2F0ZSgpO1xuICAgIFxuICAgIHJldHVybiB7XG4gICAgICAgIC4uLm1ldGhvZHMsXG4gICAgICAgIC4uLnBhcnRpYWwsXG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVDaGVja2xpc3QoZGVzY3JpcHRpb24pIHtcbiAgICBsZXQgaXNDb21wbGV0ZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaXNDb21wbGV0ZSxcbiAgICAgICAgLi4uY29tcGxldGVUb2dnbGVhYmxlKCksXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgIH1cbn1cblxuZnVuY3Rpb24gY29tcGxldGVUb2dnbGVhYmxlKCkge1xuXG4gICAgY29uc3QgdG9nZ2xlQ29tcGxldGUgPSBmdW5jdGlvbigpe1xuICAgICAgICB0aGlzLmlzQ29tcGxldGUgPSAhdGhpcy5pc0NvbXBsZXRlO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlRvZ2dsZWQgY29tcGxldGUgc3RhdHVzIHRvIFwiICsgdGhpcy5pc0NvbXBsZXRlKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdG9nZ2xlQ29tcGxldGUsXG4gICAgfVxufVxuXG5jb25zdCBhdHRhY2hDaGVja2xpc3RNZXRob2RzID0gZnVuY3Rpb24ocGFydGlhbCl7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICAuLi5jb21wbGV0ZVRvZ2dsZWFibGUoKSxcbiAgICAgICAgLi4ucGFydGlhbCxcbiAgICB9XG59XG5cbmV4cG9ydCB7Y3JlYXRlVG9kbywgY3JlYXRlQ2hlY2tsaXN0LCBjb21wbGV0ZVRvZ2dsZWFibGUsIGF0dGFjaFRvZG9NZXRob2RzLCBhdHRhY2hDaGVja2xpc3RNZXRob2RzfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=