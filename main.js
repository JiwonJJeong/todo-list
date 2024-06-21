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








const pageManager = function(){
    let projects = []
    let todosWithoutProject = [];

    const getProjectsAndNakedTodos = function(){
        return {projects,todosWithoutProject}
    }

    const moveProjectNodeUp = function(event, projectAndChildNode){
        const project = projectAndChildNode.project;
        const index = projects.indexOf(project);
        console.log("Move project up" + index);
        if (index >= 1){
            _render_js__WEBPACK_IMPORTED_MODULE_0__.renderManager.swapNodeElements(projectAndChildNode, projectAndChildNode.previousElementSibling);
            swapArrayElements(projects, index-1, index);
            _storage_js__WEBPACK_IMPORTED_MODULE_3__.storageManager.setProjectOrTodo(projects[index]);
            _storage_js__WEBPACK_IMPORTED_MODULE_3__.storageManager.setProjectOrTodo(projects[index-1]);
        } else{
            console.log("This project is as high as it can be!");
        }
        event.stopPropagation();
    }

    const moveProjectNodeDown = function(event, projectAndChildNode){
        const project = projectAndChildNode.project;
        const index = projects.indexOf(project);
        console.log("Move project down" + index);
        console.log(projects.length);
        if (index < projects.length-1){
            _render_js__WEBPACK_IMPORTED_MODULE_0__.renderManager.swapNodeElements(projectAndChildNode, projectAndChildNode.nextElementSibling);
            swapArrayElements(projects, index, index+1);
            _storage_js__WEBPACK_IMPORTED_MODULE_3__.storageManager.setProjectOrTodo(projects[index]);
            _storage_js__WEBPACK_IMPORTED_MODULE_3__.storageManager.setProjectOrTodo(projects[index+1]);
        } else{
            console.log("This project is as low as it can be!");
        }
        event.stopPropagation();
    }

    const swapArrayElements = function(array, index1, index2){
        const firstElementHolder = array[index1];
        delete array[index1];
        array[index1] = array[index2];
        array[index2] = firstElementHolder;
    }

    const sortNakedTodos = function(){
        todosWithoutProject.sort(comparePriority);
    }

    const comparePriority = function(a,b){
        return b.priority - a.priority;
    };

    const moveTodoToProject = function(project, todo){
        project.addTodo(todo);
    }

    const removeTodoFromProject = function(project, todo){
        project.removeTodo(todo);
        todosWithoutProject.push(todo);
        _storage_js__WEBPACK_IMPORTED_MODULE_3__.storageManager.setProjectOrTodo(project);
    }

    const toggleOpenCloseProjectTab = function(projectAndChildTodosAreaNode){
        const projectObject = projectAndChildTodosAreaNode.project;
        const projectBar = projectAndChildTodosAreaNode.querySelector(".project.bar.area");
        console.log("You are trying to open/close the project: " + projectObject.name);
        projectObject.toggleShowTodos();
        if (projectObject.getIsTodosShown()){
            _render_js__WEBPACK_IMPORTED_MODULE_0__.renderManager.appendProjectChildTodos(projectAndChildTodosAreaNode);
            const projectBarNode = projectAndChildTodosAreaNode.querySelector(".project.bar.area");
            _render_js__WEBPACK_IMPORTED_MODULE_0__.renderManager.bindChildTodoBars(projectBarNode);
            projectBar.classList.add("open");
        } else{
            _render_js__WEBPACK_IMPORTED_MODULE_0__.renderManager.clearProjectChildTodos(projectAndChildTodosAreaNode);
            projectBar.classList.remove("open");
        }
        _storage_js__WEBPACK_IMPORTED_MODULE_3__.storageManager.setProjectOrTodo(projectObject);
    }

    const processNewTodoFormSubmit = function(event, formElement){
        let isFormValid = formElement.checkValidity();
        if(!isFormValid){
            formElement.reportValidity();
        } else{
            event.preventDefault();
            const name = formElement.elements.name.value;
            const description = formElement.elements.description.value;
            const dueDate = formElement.elements.dueDate.value;
            const priority = formElement.elements.priority.value;
            let  checklist = formElement.elements.checklist;
            let checklistValuesWithNoBlanks;
            if (checklist.length > 1){
                const checklistArray = checklist = Array.from(checklist);
                checklistValuesWithNoBlanks = checklistArray
                                .map((checklist)=>checklist.value)
                                .filter((value) => value !== "");
            } else{
                checklistValuesWithNoBlanks = [checklist.value];
            }
            const projectToAddToIndex = formElement.querySelector("select").selectedIndex-1;
            let projectToAddTo = null;
            if (projectToAddToIndex >=0){
                projectToAddTo = projects[projectToAddToIndex];
            }
            const newTodo = createAndAddTodo(projectToAddTo,name,description,dueDate,priority, ...checklistValuesWithNoBlanks);
            if (projectToAddTo == null){
                sortNakedTodos();
                const indexToAddTo = todosWithoutProject.indexOf(newTodo);
                const newTodoNode = _render_js__WEBPACK_IMPORTED_MODULE_0__.renderManager.appendNewTodoAtIndex(newTodo, indexToAddTo);
                _render_js__WEBPACK_IMPORTED_MODULE_0__.renderManager.bindTodoBar(newTodoNode);
            } else if (projectToAddTo.getIsTodosShown()) {
                const indexToAddTo = projectToAddTo.getTodoArray().indexOf(newTodo);
                const newTodoNode = _render_js__WEBPACK_IMPORTED_MODULE_0__.renderManager.appendNewTodoAtIndex(newTodo, indexToAddTo, projectToAddToIndex);
                _render_js__WEBPACK_IMPORTED_MODULE_0__.renderManager.bindTodoBar(newTodoNode);
            }
            _render_js__WEBPACK_IMPORTED_MODULE_0__.renderManager.closeNewTodoFormDialog();
        }
    }

    const processNewProject = function(){
        const newProjectObject = createAndAddProject("New Project (rename me!)");
        const newNode = _render_js__WEBPACK_IMPORTED_MODULE_0__.renderManager.renderAndBindNewProject(newProjectObject);
        _storage_js__WEBPACK_IMPORTED_MODULE_3__.storageManager.setProjectOrTodo(newProjectObject);
    }
    
    const processEditNameForm = function(event, formElement){
        event.preventDefault();
        event.stopPropagation();
        const todoOrProjectObject = formElement.object;
        const name = formElement.elements.name.value;
        todoOrProjectObject.name = name;
        _render_js__WEBPACK_IMPORTED_MODULE_0__.renderManager.displayIcons(formElement.parentNode.parentNode);
        _render_js__WEBPACK_IMPORTED_MODULE_0__.renderManager.closeEditNameForm();
        _storage_js__WEBPACK_IMPORTED_MODULE_3__.storageManager.setProjectOrTodo(todoOrProjectObject);
    }

    const processDeleteFormSubmit = function(event, deleteForm){
        event.preventDefault();
        const indexOfProjectToRemove = deleteForm.querySelector(".project.selection").value;
        let removedObject;
        if (indexOfProjectToRemove >=0){
            removedObject = projects.splice(indexOfProjectToRemove, 1);
            console.log(removedObject.name + " is deleted");
            _render_js__WEBPACK_IMPORTED_MODULE_0__.renderManager.removeTab(indexOfProjectToRemove);
        }
        const todoSelectionNode = deleteForm.querySelector(".todo.selection");
        const projectAndTodoIndexOfTodoToRemove = todoSelectionNode.value.split(",");
        const indexOfOptgroupSelected = Number(projectAndTodoIndexOfTodoToRemove[0]);
        const indexOfTodoToRemove = Number(projectAndTodoIndexOfTodoToRemove[1]);
        console.log("Indexes for delete: " + indexOfOptgroupSelected + " " + indexOfTodoToRemove)
        if (indexOfOptgroupSelected !== -1 && indexOfTodoToRemove >=0 ){
            const projectToRemoveFrom = projects[indexOfOptgroupSelected];
            removedObject = projectToRemoveFrom.getTodoArray().splice(indexOfTodoToRemove, 1)[0];
            _render_js__WEBPACK_IMPORTED_MODULE_0__.renderManager.removeTab(indexOfOptgroupSelected, indexOfTodoToRemove);
            console.log(`${removedObject.name} from ${projectToRemoveFrom.name} is removed`);
        } else if (indexOfOptgroupSelected == -1 && indexOfTodoToRemove >=0 ){
            removedObject = todosWithoutProject.splice(indexOfTodoToRemove, 1)[0];
            _render_js__WEBPACK_IMPORTED_MODULE_0__.renderManager.removeTab(null, indexOfTodoToRemove);
            console.log(`${removedObject.name} from todos without projects is removed`);
        }
        _render_js__WEBPACK_IMPORTED_MODULE_0__.renderManager.closeDeleteDialog();
    }

    const processChecklistToggle = function(checklistObject, todoObject){
        checklistObject.toggleComplete();
        _storage_js__WEBPACK_IMPORTED_MODULE_3__.storageManager.setProjectOrTodo(todoObject);
    }

    // use parameter project = null if you want the todo to have no project
    const createAndAddTodo = function(project,title,description,dueDate,priority,...checklistArray){
        const todo = (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.createTodo)(title,description,dueDate,priority,...checklistArray);
        if (project !== null){
            if (!projects.includes(project)){
                alert("You are trying to add a todo to a nonexisting project");
            }
            moveTodoToProject(project, todo);
            project.sortTodos();
            _storage_js__WEBPACK_IMPORTED_MODULE_3__.storageManager.setProjectOrTodo(project);
        } else{
            todosWithoutProject.push(todo);
            _storage_js__WEBPACK_IMPORTED_MODULE_3__.storageManager.setProjectOrTodo(todo);
        }

        return todo;
    }

    const createAndAddProject = function(name){
        const createdProject = (0,_project_js__WEBPACK_IMPORTED_MODULE_2__.createProject)(name);
        projects.push(createdProject);
        _storage_js__WEBPACK_IMPORTED_MODULE_3__.storageManager.setProjectOrTodo(createdProject);
        return createdProject;
    }

    const init = function(){
        const projectsAndTodos = _storage_js__WEBPACK_IMPORTED_MODULE_3__.storageManager.getProjectsAndTodosFromStorage();
        console.log(projectsAndTodos);
        if (projectsAndTodos.projects.length !==0 || projectsAndTodos.todos.length !==0){
            projects = projectsAndTodos.projects;
            todosWithoutProject = projectsAndTodos.todos;
        } else{
            addExampleTodosandProjects();
            console.log("No data detected in localStorage. Added examples!");
        }
        _render_js__WEBPACK_IMPORTED_MODULE_0__.renderManager.init();
        _storage_js__WEBPACK_IMPORTED_MODULE_3__.storageManager.setAllProjectsAndTodos();
    }

    const addExampleTodosandProjects = function(){
        projects = [];
        todosWithoutProject = [];
        createAndAddTodo(null, "Drive mom to airport", "This is a high priority task! Make sure to drop mom off at ABC airport Terminal 1.", "2024-07-10", 3, "Check-in for flight", "Pick up mom at 8:00 AM");
        createAndAddTodo(null, "Buy new camping gear", "This is a low priority task. Prepare extra supplies for Mount Awesome hiking trip with the boys.", "2024-11-27", 1, "Buy new water bottle", "Buy more climbing rope", "Pack new stuff into camping bag");
        const testProject = createAndAddProject("TOP Todo List Project");
        createAndAddTodo(testProject, "Stylize with CSS", "Use flexbox and grid to layout elements! Also mess with some pseudoclasses to make some interactive buttons! After having a good layout, everything else like color or font is for fun!", "2024-06-29", 1, "Center elements", "Stylize buttons and pseudoclasses", "Stylize form inputs", "Add icons", "Choose color palette");
        createAndAddTodo(testProject, "Add ability to edit existing todos", "Existing todos should be able to be deleted. Their names and checklist status should also be able to be edited. All of this information should be properly stored, not just rendered on the DOM directly.", "2024-06-23", 3, );
        const testProject2 = createAndAddProject("Woodworking Project");
        createAndAddTodo(testProject2,"Brainstorm something to make", "Try to create a basic concept sketch of the next project to make. Concept sketch should have multiple perspectives and some close-up diagrams of any key mechanical parts.", "2024-07-04", 3, "Research inspiration ideas", "Check my current supplies");
    }

    return {getProjectsAndNakedTodos, createAndAddTodo, createAndAddProject,
        moveTodoToProject, removeTodoFromProject, addExampleTodosandProjects, toggleOpenCloseProjectTab,
        processNewTodoFormSubmit, comparePriority, moveProjectNodeUp, moveProjectNodeDown,
        processNewProject, processEditNameForm, processDeleteFormSubmit, init, processChecklistToggle
    };

}();



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
        const helpFunction1 = createElement("li",null,"Click the 'Menu Options' button.");
        const helpFunction2 = createElement("li",null,"Click on a project tab.");
        const helpFunction3 = createElement("li",null,"Click the up/down icons.");
        const helpFunction4 = createElement("li",null,"Secondary click on any side tab.");
        const helpFunction5 = createElement("li",null,"Click on a checkbox inside a todo.");
        const helpFunction6 = createElement("li",null,"Try refreshing the page to test local data storage!");
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
        const projects = _index_js__WEBPACK_IMPORTED_MODULE_0__.pageManager.getProjectsAndNakedTodos().projects;
        const todos = _index_js__WEBPACK_IMPORTED_MODULE_0__.pageManager.getProjectsAndNakedTodos().todosWithoutProject;
        for (let project of projects) {
            setProjectOrTodo(project);
        }
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
        const todos = _index_js__WEBPACK_IMPORTED_MODULE_0__.pageManager.getProjectsAndNakedTodos().todosWithoutProject;
        const projectIndex = projects.indexOf(object);
        const todoIndex = todos.indexOf(object);
        if (projectIndex !== -1) {
            finalJSON = stringifyProject(object);
            localStorage.setItem(`project${projectIndex}`, finalJSON);
        } else {
            finalJSON = stringifyTodo(object);
            localStorage.setItem(`todo${todoIndex}`, finalJSON);
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

    const removeProjectOrTodo = function (object) {
        if (!isStorageAvailable) {
            return;
        }
        const projects = _index_js__WEBPACK_IMPORTED_MODULE_0__.pageManager.getProjectsAndNakedTodos().projects;
        const todos = _index_js__WEBPACK_IMPORTED_MODULE_0__.pageManager.getProjectsAndNakedTodos().todosWithoutProject;
        const projectIndex = projects.indexOf(object);
        const todoIndex = todos.indexOf(object);
        if (projectIndex !== -1) {
            localStorage.removeItem(`project${projectIndex}`);
        } else {
            localStorage.removeItem(`todo${todoIndex}`);
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLG1IQUFzQztBQUNsRiw0Q0FBNEMsaUhBQXFDO0FBQ2pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQsY0FBYyxtQ0FBbUM7QUFDakQ7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sd0ZBQXdGLE1BQU0sWUFBWSxNQUFNLE9BQU8sUUFBUSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLFFBQVEsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFFBQVEsYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxhQUFhLE1BQU0sWUFBWSxXQUFXLFlBQVksY0FBYyxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxjQUFjLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sWUFBWSxXQUFXLFVBQVUsVUFBVSxXQUFXLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sWUFBWSxNQUFNLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLGFBQWEsTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLFNBQVMsS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLE1BQU0sYUFBYSxNQUFNLFVBQVUsWUFBWSxXQUFXLGFBQWEsTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxZQUFZLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsYUFBYSxNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFN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QTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBLHFEQUFxRCxjQUFjO0FBQ25FO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxrREFBVztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMENBQTBDLGdEQUFNO0FBQ2hE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QTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcmVuZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzLzNEdW1iLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9mb250cy8zRHVtYi53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogd2ViZm9udHMsIGN1c3RvbSB2YXJpYWJsZXMsIGdsb2JhbCByZXNldHMsIGFuZCBjaGFuZ2VzIHRvIGJvZHkgKi9cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIkNhcnRvb25cIjtcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoXCJ3b2ZmMlwiKSxcbiAgICAgICAgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdChcIndvZmZcIik7XG59XG5cblxuKiB7XG4gICAgLS1kb2N1bWVudC1iYWNrZ3JvdW5kLWNvbG9yOiAjQjFBRkZGO1xuICAgIC0tYmFzZS1iYWNrZ3JvdW5kLWNvbG9yOiAjRkZFOUQwO1xuICAgIC0tYnV0dG9uLWNvbG9yOiBwaW5rO1xuICAgIC0tY29udGVudC1iYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRUQzO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbjpyb290e1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRvY3VtZW50LWJhY2tncm91bmQtY29sb3IpO1xufVxuXG5oMSxcbmgyLFxuaDMsXG5wIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuYm9keSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMTB2aDtcbiAgICBnYXA6IDEwcHg7XG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG5cblxuLyogc2VjdGlvbiBhbmQgc3R5bGUgcGFnZSBpbnRvIDMgbWFpbiBzZWN0aW9ucyAqL1xuXG4uYmFzZS5hcmVhIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggYXV0bztcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IDFmcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYXNlLWJhY2tncm91bmQtY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gICAgbWluLXdpZHRoOiA2MDBweDtcbn1cblxuLyogc3R5bGl6ZSBoZWFkZXIgKi9cblxuLmhlYWRlci5hcmVhIHtcbiAgICBncmlkLWNvbHVtbjogMS8zO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXG4gICAgLmhlYWRlci5sb2dvIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiQ2FydG9vblwiO1xuICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgIGZsZXgtZ3JvdzoxO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmhlbHAuYnV0dG9ue1xuICAgICAgICBhc3BlY3QtcmF0aW86IDEvMTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNjAlO1xuICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgIH1cbiAgICBcbn1cblxuXG4vKiBzdHlsaXplIHNpZGViYXIgYXJlYSovXG4uc2lkZWJhci5hcmVhIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgLmJ1dHRvbntcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYnV0dG9uLWNvbG9yKTtcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgLmJ1dHRvbjpob3ZlciwgLmJ1dHRvbi5wcmVzc2Vke1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IpO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgLm5ldy1idXR0b24uY29udGFpbmVye1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTBweDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIH1cblxuICAgIC8qIGRlZmF1bHQgaHNsYSB2YWx1ZXMgZm9yIHNpZGViYXIgYmFyIGNvbG9ycyAqL1xuICAgIC0taDogMTk5O1xuICAgIC0tczogMTAwO1xuICAgIC0tbDogODclO1xuICAgIC0tYToxO1xuXG4gICAgLmJhci5hcmVhIHtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggcmdiKDAsIDAsIDApO1xuICAgICAgICBmbGV4OiAwIDAgNjBweDtcbiAgICAgICAgLyogY2VudGVyIHRleHQgKi9cbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiBoc2wodmFyKC0taCkgdmFyKC0tcykgdmFyKC0tbCkgLyB2YXIoLS1hKSk7XG4gICAgICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xuICAgIH1cblxuICAgIC5iYXIuYXJlYS5vcGVue1xuICAgICAgICAtLWw6IDcwJTtcbiAgICB9XG5cbiAgICAvKiBzdHlsZSB0aGUgZm9ybSB0aGF0IGFwcGVhcnMgdG8gZWRpdCBuYW1lICovXG4gICAgLmJhci5hcmVhIGZvcm17XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuXG4gICAgLmJhci5hcmVhIGZvcm0gaW5wdXR7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgICAgICAgcGFkZGluZzogNXB4IDEycHg7XG4gICAgICAgIC0tbDogMjUlO1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xuICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgfVxuXG4gICAgLmJhci5hcmVhIGZvcm0gLnN1Ym1pdC5idXR0b257XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMnB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG59XG5cbi8qIGRpc3BsYXkgY2hpbGQgdG9kb3Mgb2YgcHJvamVjdHMgYXMgd2FudGVkICovXG4uc2lkZWJhciAucHJvamVjdC1hbmQtY2hpbGQtdG9kbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uc2lkZWJhciAucHJvamVjdC1hbmQtY2hpbGQtdG9kbyAudG9kby5iYXIuYXJlYSB7XG4gICAgZmxleDogMCAwIDQwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xufVxuXG4vKiBzdHlsaXplIGNvbnRlbnQgYXJlYSAqL1xuLmNvbnRlbnQuYXJlYXtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb250ZW50LWJhY2tncm91bmQtY29sb3IpO1xuXG4gICAgLmNvbnRlbnQudGl0bGV7XG4gICAgICAgIGFsaWduLXNlbGY6Y2VudGVyO1xuICAgIH1cblxuICAgIC5jb250ZW50LmRhdGV7XG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgIH1cblxuXG5cbiAgICAuY2hlY2tsaXN0LmFyZWF7XG4gICAgICAgIGRpc3BsYXk6Z3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHB4IDFmcjtcbiAgICAgICAgYWxpZ24taXRlbXM6ZW5kO1xuICAgIH1cblxuICAgIC8qIGRlZmF1bHQgdGV4dCBjb250ZW50ICovXG4gICAgLmRlZmF1bHQudGV4dHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuXG4gICAgLmFkZC10b2RvLmJ1dHRvbntcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gICAgICAgIGFzcGVjdC1yYXRpbzogYXV0bztcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYnV0dG9uLWNvbG9yKTtcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgLmFkZC10b2RvLmJ1dHRvbjpob3ZlcntcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yKTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbn1cblxuLyogc3R5bGl6aW5nIGRpYWxvZ3MhICovXG5cbmRpYWxvZy5kZWxldGUuZGlhbG9nIGZvcm17XG4gICAgZGlzcGxheTpncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWF4LWNvbnRlbnQgMWZyO1xuICAgIGdhcDogMTBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgbGFiZWx7XG4gICAgICAgIHRleHQtYWxpZ246ZW5kO1xuICAgIH1cblxuICAgIHNlbGVjdHtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgIH1cblxuICAgIC5jb250YWluZXJ7XG4gICAgICAgIGdyaWQtY29sdW1uOiAyLzM7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGdhcDogMjBweDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICB9XG5cbiAgICAuY29udGFpbmVyIC5idXR0b257XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICB9XG59XG5cbmRpYWxvZy5uZXcudG9kby5kaWFsb2cgZm9ybXtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEwcHg7XG5cbiAgICA+ICp7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTEwcHggMWZyO1xuICAgICAgICBnYXA6IDEwcHg7XG4gICAgfVxuXG4gICAgc2VsZWN0LCBpbnB1dCB7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICB9XG5cbiAgICBsYWJlbCwgcHtcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIH1cblxuICAgIC5wcmlvcml0eS5xdWVzdGlvbi5hcmVhe1xuICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgICAgICAuY29udGFpbmVye1xuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWF4LWNvbnRlbnQgMWZyO1xuICAgICAgICAgICAgZ2FwOiAycHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmRlc2NyaXB0aW9uIGxhYmVse1xuICAgICAgICBhbGlnbi1zZWxmOmZsZXgtc3RhcnQ7XG4gICAgfVxuXG4gICAgdGV4dGFyZWF7XG4gICAgICAgIG1pbi13aWR0aDogMjM3LjI1cHg7XG4gICAgICAgIG1heC13aWR0aDogNTc3cHg7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICB9XG5cbiAgICAuY2hlY2tsaXN0LnF1ZXN0aW9uLmFyZWF7XG4gICAgICAgIGRpdi5jaGVja2xpc3R7XG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMi8zO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGdhcDogMTBweDtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICBsYWJlbHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246ZW5kO1xuICAgICAgICB9XG4gICAgICAgIC5hZGQuY2hlY2tsaXN0LmJ1dHRvbntcbiAgICAgICAgICAgIGdyaWQtcm93OiAtMS8wO1xuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDIvMztcbiAgICAgICAgICAgIGFzcGVjdC1yYXRpbzogMS8xO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDU0LCA1NCwgNTQpO1xuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5jb250YWluZXJ7XG4gICAgICAgIGdyaWQtY29sdW1uOiAyLzM7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGdhcDogMjBweDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICB9XG5cbiAgICAuY29udGFpbmVyIC5idXR0b257XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVz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LFlBQVk7SUFDaEI7QUFDSjs7QUFFQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsU0FBUzs7SUFFVDtRQUNJLGFBQWE7UUFDYixnQ0FBZ0M7UUFDaEMsU0FBUztJQUNiOztJQUVBO1FBQ0ksWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLFlBQVk7UUFDWiw4QkFBOEI7O1FBRTlCO1lBQ0ksa0JBQWtCO1lBQ2xCLGFBQWE7WUFDYixzQ0FBc0M7WUFDdEMsUUFBUTtZQUNSLG1CQUFtQjtRQUN2QjtJQUNKOztJQUVBO1FBQ0kscUJBQXFCO0lBQ3pCOztJQUVBO1FBQ0ksbUJBQW1CO1FBQ25CLGdCQUFnQjtRQUNoQixZQUFZO0lBQ2hCOztJQUVBO1FBQ0k7WUFDSSxnQkFBZ0I7WUFDaEIsYUFBYTtZQUNiLFNBQVM7UUFDYjtRQUNBO1lBQ0ksV0FBVztRQUNmO1FBQ0E7WUFDSSxjQUFjO1FBQ2xCO1FBQ0E7WUFDSSxjQUFjO1lBQ2QsZ0JBQWdCO1lBQ2hCLGlCQUFpQjtZQUNqQixrQkFBa0I7WUFDbEIsaUNBQWlDO1lBQ2pDLFlBQVk7WUFDWixzQkFBc0I7UUFDMUI7SUFDSjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixhQUFhO1FBQ2IsU0FBUztRQUNULHlCQUF5QjtJQUM3Qjs7SUFFQTtRQUNJLFlBQVk7SUFDaEI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiB3ZWJmb250cywgY3VzdG9tIHZhcmlhYmxlcywgZ2xvYmFsIHJlc2V0cywgYW5kIGNoYW5nZXMgdG8gYm9keSAqL1xcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogXFxcIkNhcnRvb25cXFwiO1xcbiAgICBzcmM6IHVybChcXFwiLi9mb250cy8zRHVtYi53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSxcXG4gICAgICAgIHVybChcXFwiLi9mb250cy8zRHVtYi53b2ZmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxufVxcblxcblxcbioge1xcbiAgICAtLWRvY3VtZW50LWJhY2tncm91bmQtY29sb3I6ICNCMUFGRkY7XFxuICAgIC0tYmFzZS1iYWNrZ3JvdW5kLWNvbG9yOiAjRkZFOUQwO1xcbiAgICAtLWJ1dHRvbi1jb2xvcjogcGluaztcXG4gICAgLS1jb250ZW50LWJhY2tncm91bmQtY29sb3I6ICNGRkZFRDM7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kb2N1bWVudC1iYWNrZ3JvdW5kLWNvbG9yKTtcXG59XFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxucCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxMHZoO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5cXG4vKiBzZWN0aW9uIGFuZCBzdHlsZSBwYWdlIGludG8gMyBtYWluIHNlY3Rpb25zICovXFxuXFxuLmJhc2UuYXJlYSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggYXV0bztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCAxZnI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhc2UtYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIG1heC13aWR0aDogMTAwMHB4O1xcbiAgICBtaW4td2lkdGg6IDYwMHB4O1xcbn1cXG5cXG4vKiBzdHlsaXplIGhlYWRlciAqL1xcblxcbi5oZWFkZXIuYXJlYSB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuXFxuICAgIC5oZWFkZXIubG9nbyB7XFxuICAgICAgICBmb250LWZhbWlseTogXFxcIkNhcnRvb25cXFwiO1xcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICAgICAgZmxleC1ncm93OjE7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLmhlbHAuYnV0dG9ue1xcbiAgICAgICAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA2MCU7XFxuICAgICAgICB3aWR0aDogMjVweDtcXG4gICAgICAgIG1hcmdpbjogMTBweDtcXG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIH1cXG4gICAgXFxufVxcblxcblxcbi8qIHN0eWxpemUgc2lkZWJhciBhcmVhKi9cXG4uc2lkZWJhci5hcmVhIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICAuYnV0dG9ue1xcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYnV0dG9uLWNvbG9yKTtcXG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIH1cXG5cXG4gICAgLmJ1dHRvbjpob3ZlciwgLmJ1dHRvbi5wcmVzc2Vke1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yKTtcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgfVxcblxcbiAgICAubmV3LWJ1dHRvbi5jb250YWluZXJ7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDUwcHg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC8qIGRlZmF1bHQgaHNsYSB2YWx1ZXMgZm9yIHNpZGViYXIgYmFyIGNvbG9ycyAqL1xcbiAgICAtLWg6IDE5OTtcXG4gICAgLS1zOiAxMDA7XFxuICAgIC0tbDogODclO1xcbiAgICAtLWE6MTtcXG5cXG4gICAgLmJhci5hcmVhIHtcXG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4IHJnYigwLCAwLCAwKTtcXG4gICAgICAgIGZsZXg6IDAgMCA2MHB4O1xcbiAgICAgICAgLyogY2VudGVyIHRleHQgKi9cXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICAgICAgYmFja2dyb3VuZDogaHNsKHZhcigtLWgpIHZhcigtLXMpIHZhcigtLWwpIC8gdmFyKC0tYSkpO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XFxuICAgIH1cXG5cXG4gICAgLmJhci5hcmVhLm9wZW57XFxuICAgICAgICAtLWw6IDcwJTtcXG4gICAgfVxcblxcbiAgICAvKiBzdHlsZSB0aGUgZm9ybSB0aGF0IGFwcGVhcnMgdG8gZWRpdCBuYW1lICovXFxuICAgIC5iYXIuYXJlYSBmb3Jte1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgfVxcblxcbiAgICAuYmFyLmFyZWEgZm9ybSBpbnB1dHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcXG4gICAgICAgIHBhZGRpbmc6IDVweCAxMnB4O1xcbiAgICAgICAgLS1sOiAyNSU7XFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xcbiAgICB9XFxuXFxuICAgIC5iYXIuYXJlYSBmb3JtIC5zdWJtaXQuYnV0dG9ue1xcbiAgICAgICAgcGFkZGluZzogMTBweCAycHg7XFxuICAgICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG59XFxuXFxuLyogZGlzcGxheSBjaGlsZCB0b2RvcyBvZiBwcm9qZWN0cyBhcyB3YW50ZWQgKi9cXG4uc2lkZWJhciAucHJvamVjdC1hbmQtY2hpbGQtdG9kbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5zaWRlYmFyIC5wcm9qZWN0LWFuZC1jaGlsZC10b2RvIC50b2RvLmJhci5hcmVhIHtcXG4gICAgZmxleDogMCAwIDQwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogNDBweDtcXG59XFxuXFxuLyogc3R5bGl6ZSBjb250ZW50IGFyZWEgKi9cXG4uY29udGVudC5hcmVhe1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29udGVudC1iYWNrZ3JvdW5kLWNvbG9yKTtcXG5cXG4gICAgLmNvbnRlbnQudGl0bGV7XFxuICAgICAgICBhbGlnbi1zZWxmOmNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAuY29udGVudC5kYXRle1xcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgIH1cXG5cXG5cXG5cXG4gICAgLmNoZWNrbGlzdC5hcmVhe1xcbiAgICAgICAgZGlzcGxheTpncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHB4IDFmcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOmVuZDtcXG4gICAgfVxcblxcbiAgICAvKiBkZWZhdWx0IHRleHQgY29udGVudCAqL1xcbiAgICAuZGVmYXVsdC50ZXh0e1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICB9XFxuXFxuICAgIC5hZGQtdG9kby5idXR0b257XFxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgICAgICBhc3BlY3QtcmF0aW86IGF1dG87XFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYnV0dG9uLWNvbG9yKTtcXG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgfVxcblxcbiAgICAuYWRkLXRvZG8uYnV0dG9uOmhvdmVye1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yKTtcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgfVxcbn1cXG5cXG4vKiBzdHlsaXppbmcgZGlhbG9ncyEgKi9cXG5cXG5kaWFsb2cuZGVsZXRlLmRpYWxvZyBmb3Jte1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWF4LWNvbnRlbnQgMWZyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGxhYmVse1xcbiAgICAgICAgdGV4dC1hbGlnbjplbmQ7XFxuICAgIH1cXG5cXG4gICAgc2VsZWN0e1xcbiAgICAgICAgcGFkZGluZzogNXB4O1xcbiAgICB9XFxuXFxuICAgIC5jb250YWluZXJ7XFxuICAgICAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGdhcDogMjBweDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIH1cXG5cXG4gICAgLmNvbnRhaW5lciAuYnV0dG9ue1xcbiAgICAgICAgcGFkZGluZzogNXB4O1xcbiAgICB9XFxufVxcblxcbmRpYWxvZy5uZXcudG9kby5kaWFsb2cgZm9ybXtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuXFxuICAgID4gKntcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDExMHB4IDFmcjtcXG4gICAgICAgIGdhcDogMTBweDtcXG4gICAgfVxcblxcbiAgICBzZWxlY3QsIGlucHV0IHtcXG4gICAgICAgIHBhZGRpbmc6IDVweDtcXG4gICAgfVxcblxcbiAgICBsYWJlbCwgcHtcXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAucHJpb3JpdHkucXVlc3Rpb24uYXJlYXtcXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gICAgICAgIC5jb250YWluZXJ7XFxuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtYXgtY29udGVudCAxZnI7XFxuICAgICAgICAgICAgZ2FwOiAycHg7XFxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAuZGVzY3JpcHRpb24gbGFiZWx7XFxuICAgICAgICBhbGlnbi1zZWxmOmZsZXgtc3RhcnQ7XFxuICAgIH1cXG5cXG4gICAgdGV4dGFyZWF7XFxuICAgICAgICBtaW4td2lkdGg6IDIzNy4yNXB4O1xcbiAgICAgICAgbWF4LXdpZHRoOiA1NzdweDtcXG4gICAgICAgIHBhZGRpbmc6IDVweDtcXG4gICAgfVxcblxcbiAgICAuY2hlY2tsaXN0LnF1ZXN0aW9uLmFyZWF7XFxuICAgICAgICBkaXYuY2hlY2tsaXN0e1xcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBnYXA6IDEwcHg7XFxuICAgICAgICB9XFxuICAgICAgICBpbnB1dCB7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICB9XFxuICAgICAgICBsYWJlbHtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOmVuZDtcXG4gICAgICAgIH1cXG4gICAgICAgIC5hZGQuY2hlY2tsaXN0LmJ1dHRvbntcXG4gICAgICAgICAgICBncmlkLXJvdzogLTEvMDtcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICAgICAgICAgIGFzcGVjdC1yYXRpbzogMS8xO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoNTQsIDU0LCA1NCk7XFxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xcbiAgICAgICAgICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLmNvbnRhaW5lcntcXG4gICAgICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZ2FwOiAyMHB4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgfVxcblxcbiAgICAuY29udGFpbmVyIC5idXR0b257XFxuICAgICAgICBwYWRkaW5nOiA1cHg7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvL21vZHVsZSB0byBjYWxsIHRoZSBvdGhlciBjcmVhdGUgb3IgcmVuZGVyIGZ1bmN0aW9ucyBiYXNlZCBvbiBpbnB1dHNcblxuaW1wb3J0IHtyZW5kZXJNYW5hZ2VyfSBmcm9tIFwiLi9yZW5kZXIuanNcIjtcbmltcG9ydCB7Y3JlYXRlVG9kb30gZnJvbSBcIi4vdG9kby5qc1wiO1xuaW1wb3J0IHtjcmVhdGVQcm9qZWN0fSBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XG5pbXBvcnQge3N0b3JhZ2VNYW5hZ2VyfSBmcm9tIFwiLi9zdG9yYWdlLmpzXCI7XG5cbmltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuXG5jb25zdCBwYWdlTWFuYWdlciA9IGZ1bmN0aW9uKCl7XG4gICAgbGV0IHByb2plY3RzID0gW11cbiAgICBsZXQgdG9kb3NXaXRob3V0UHJvamVjdCA9IFtdO1xuXG4gICAgY29uc3QgZ2V0UHJvamVjdHNBbmROYWtlZFRvZG9zID0gZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHtwcm9qZWN0cyx0b2Rvc1dpdGhvdXRQcm9qZWN0fVxuICAgIH1cblxuICAgIGNvbnN0IG1vdmVQcm9qZWN0Tm9kZVVwID0gZnVuY3Rpb24oZXZlbnQsIHByb2plY3RBbmRDaGlsZE5vZGUpe1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdEFuZENoaWxkTm9kZS5wcm9qZWN0O1xuICAgICAgICBjb25zdCBpbmRleCA9IHByb2plY3RzLmluZGV4T2YocHJvamVjdCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTW92ZSBwcm9qZWN0IHVwXCIgKyBpbmRleCk7XG4gICAgICAgIGlmIChpbmRleCA+PSAxKXtcbiAgICAgICAgICAgIHJlbmRlck1hbmFnZXIuc3dhcE5vZGVFbGVtZW50cyhwcm9qZWN0QW5kQ2hpbGROb2RlLCBwcm9qZWN0QW5kQ2hpbGROb2RlLnByZXZpb3VzRWxlbWVudFNpYmxpbmcpO1xuICAgICAgICAgICAgc3dhcEFycmF5RWxlbWVudHMocHJvamVjdHMsIGluZGV4LTEsIGluZGV4KTtcbiAgICAgICAgICAgIHN0b3JhZ2VNYW5hZ2VyLnNldFByb2plY3RPclRvZG8ocHJvamVjdHNbaW5kZXhdKTtcbiAgICAgICAgICAgIHN0b3JhZ2VNYW5hZ2VyLnNldFByb2plY3RPclRvZG8ocHJvamVjdHNbaW5kZXgtMV0pO1xuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRoaXMgcHJvamVjdCBpcyBhcyBoaWdoIGFzIGl0IGNhbiBiZSFcIik7XG4gICAgICAgIH1cbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuXG4gICAgY29uc3QgbW92ZVByb2plY3ROb2RlRG93biA9IGZ1bmN0aW9uKGV2ZW50LCBwcm9qZWN0QW5kQ2hpbGROb2RlKXtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RBbmRDaGlsZE5vZGUucHJvamVjdDtcbiAgICAgICAgY29uc3QgaW5kZXggPSBwcm9qZWN0cy5pbmRleE9mKHByb2plY3QpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIk1vdmUgcHJvamVjdCBkb3duXCIgKyBpbmRleCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzLmxlbmd0aCk7XG4gICAgICAgIGlmIChpbmRleCA8IHByb2plY3RzLmxlbmd0aC0xKXtcbiAgICAgICAgICAgIHJlbmRlck1hbmFnZXIuc3dhcE5vZGVFbGVtZW50cyhwcm9qZWN0QW5kQ2hpbGROb2RlLCBwcm9qZWN0QW5kQ2hpbGROb2RlLm5leHRFbGVtZW50U2libGluZyk7XG4gICAgICAgICAgICBzd2FwQXJyYXlFbGVtZW50cyhwcm9qZWN0cywgaW5kZXgsIGluZGV4KzEpO1xuICAgICAgICAgICAgc3RvcmFnZU1hbmFnZXIuc2V0UHJvamVjdE9yVG9kbyhwcm9qZWN0c1tpbmRleF0pO1xuICAgICAgICAgICAgc3RvcmFnZU1hbmFnZXIuc2V0UHJvamVjdE9yVG9kbyhwcm9qZWN0c1tpbmRleCsxXSk7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGhpcyBwcm9qZWN0IGlzIGFzIGxvdyBhcyBpdCBjYW4gYmUhXCIpO1xuICAgICAgICB9XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cblxuICAgIGNvbnN0IHN3YXBBcnJheUVsZW1lbnRzID0gZnVuY3Rpb24oYXJyYXksIGluZGV4MSwgaW5kZXgyKXtcbiAgICAgICAgY29uc3QgZmlyc3RFbGVtZW50SG9sZGVyID0gYXJyYXlbaW5kZXgxXTtcbiAgICAgICAgZGVsZXRlIGFycmF5W2luZGV4MV07XG4gICAgICAgIGFycmF5W2luZGV4MV0gPSBhcnJheVtpbmRleDJdO1xuICAgICAgICBhcnJheVtpbmRleDJdID0gZmlyc3RFbGVtZW50SG9sZGVyO1xuICAgIH1cblxuICAgIGNvbnN0IHNvcnROYWtlZFRvZG9zID0gZnVuY3Rpb24oKXtcbiAgICAgICAgdG9kb3NXaXRob3V0UHJvamVjdC5zb3J0KGNvbXBhcmVQcmlvcml0eSk7XG4gICAgfVxuXG4gICAgY29uc3QgY29tcGFyZVByaW9yaXR5ID0gZnVuY3Rpb24oYSxiKXtcbiAgICAgICAgcmV0dXJuIGIucHJpb3JpdHkgLSBhLnByaW9yaXR5O1xuICAgIH07XG5cbiAgICBjb25zdCBtb3ZlVG9kb1RvUHJvamVjdCA9IGZ1bmN0aW9uKHByb2plY3QsIHRvZG8pe1xuICAgICAgICBwcm9qZWN0LmFkZFRvZG8odG9kbyk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlVG9kb0Zyb21Qcm9qZWN0ID0gZnVuY3Rpb24ocHJvamVjdCwgdG9kbyl7XG4gICAgICAgIHByb2plY3QucmVtb3ZlVG9kbyh0b2RvKTtcbiAgICAgICAgdG9kb3NXaXRob3V0UHJvamVjdC5wdXNoKHRvZG8pO1xuICAgICAgICBzdG9yYWdlTWFuYWdlci5zZXRQcm9qZWN0T3JUb2RvKHByb2plY3QpO1xuICAgIH1cblxuICAgIGNvbnN0IHRvZ2dsZU9wZW5DbG9zZVByb2plY3RUYWIgPSBmdW5jdGlvbihwcm9qZWN0QW5kQ2hpbGRUb2Rvc0FyZWFOb2RlKXtcbiAgICAgICAgY29uc3QgcHJvamVjdE9iamVjdCA9IHByb2plY3RBbmRDaGlsZFRvZG9zQXJlYU5vZGUucHJvamVjdDtcbiAgICAgICAgY29uc3QgcHJvamVjdEJhciA9IHByb2plY3RBbmRDaGlsZFRvZG9zQXJlYU5vZGUucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LmJhci5hcmVhXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIllvdSBhcmUgdHJ5aW5nIHRvIG9wZW4vY2xvc2UgdGhlIHByb2plY3Q6IFwiICsgcHJvamVjdE9iamVjdC5uYW1lKTtcbiAgICAgICAgcHJvamVjdE9iamVjdC50b2dnbGVTaG93VG9kb3MoKTtcbiAgICAgICAgaWYgKHByb2plY3RPYmplY3QuZ2V0SXNUb2Rvc1Nob3duKCkpe1xuICAgICAgICAgICAgcmVuZGVyTWFuYWdlci5hcHBlbmRQcm9qZWN0Q2hpbGRUb2Rvcyhwcm9qZWN0QW5kQ2hpbGRUb2Rvc0FyZWFOb2RlKTtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RCYXJOb2RlID0gcHJvamVjdEFuZENoaWxkVG9kb3NBcmVhTm9kZS5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QuYmFyLmFyZWFcIik7XG4gICAgICAgICAgICByZW5kZXJNYW5hZ2VyLmJpbmRDaGlsZFRvZG9CYXJzKHByb2plY3RCYXJOb2RlKTtcbiAgICAgICAgICAgIHByb2plY3RCYXIuY2xhc3NMaXN0LmFkZChcIm9wZW5cIik7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIHJlbmRlck1hbmFnZXIuY2xlYXJQcm9qZWN0Q2hpbGRUb2Rvcyhwcm9qZWN0QW5kQ2hpbGRUb2Rvc0FyZWFOb2RlKTtcbiAgICAgICAgICAgIHByb2plY3RCYXIuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XG4gICAgICAgIH1cbiAgICAgICAgc3RvcmFnZU1hbmFnZXIuc2V0UHJvamVjdE9yVG9kbyhwcm9qZWN0T2JqZWN0KTtcbiAgICB9XG5cbiAgICBjb25zdCBwcm9jZXNzTmV3VG9kb0Zvcm1TdWJtaXQgPSBmdW5jdGlvbihldmVudCwgZm9ybUVsZW1lbnQpe1xuICAgICAgICBsZXQgaXNGb3JtVmFsaWQgPSBmb3JtRWxlbWVudC5jaGVja1ZhbGlkaXR5KCk7XG4gICAgICAgIGlmKCFpc0Zvcm1WYWxpZCl7XG4gICAgICAgICAgICBmb3JtRWxlbWVudC5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGZvcm1FbGVtZW50LmVsZW1lbnRzLm5hbWUudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGZvcm1FbGVtZW50LmVsZW1lbnRzLmRlc2NyaXB0aW9uLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGZvcm1FbGVtZW50LmVsZW1lbnRzLmR1ZURhdGUudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBwcmlvcml0eSA9IGZvcm1FbGVtZW50LmVsZW1lbnRzLnByaW9yaXR5LnZhbHVlO1xuICAgICAgICAgICAgbGV0ICBjaGVja2xpc3QgPSBmb3JtRWxlbWVudC5lbGVtZW50cy5jaGVja2xpc3Q7XG4gICAgICAgICAgICBsZXQgY2hlY2tsaXN0VmFsdWVzV2l0aE5vQmxhbmtzO1xuICAgICAgICAgICAgaWYgKGNoZWNrbGlzdC5sZW5ndGggPiAxKXtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGVja2xpc3RBcnJheSA9IGNoZWNrbGlzdCA9IEFycmF5LmZyb20oY2hlY2tsaXN0KTtcbiAgICAgICAgICAgICAgICBjaGVja2xpc3RWYWx1ZXNXaXRoTm9CbGFua3MgPSBjaGVja2xpc3RBcnJheVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKChjaGVja2xpc3QpPT5jaGVja2xpc3QudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKHZhbHVlKSA9PiB2YWx1ZSAhPT0gXCJcIik7XG4gICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgICAgY2hlY2tsaXN0VmFsdWVzV2l0aE5vQmxhbmtzID0gW2NoZWNrbGlzdC52YWx1ZV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0VG9BZGRUb0luZGV4ID0gZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihcInNlbGVjdFwiKS5zZWxlY3RlZEluZGV4LTE7XG4gICAgICAgICAgICBsZXQgcHJvamVjdFRvQWRkVG8gPSBudWxsO1xuICAgICAgICAgICAgaWYgKHByb2plY3RUb0FkZFRvSW5kZXggPj0wKXtcbiAgICAgICAgICAgICAgICBwcm9qZWN0VG9BZGRUbyA9IHByb2plY3RzW3Byb2plY3RUb0FkZFRvSW5kZXhdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbmV3VG9kbyA9IGNyZWF0ZUFuZEFkZFRvZG8ocHJvamVjdFRvQWRkVG8sbmFtZSxkZXNjcmlwdGlvbixkdWVEYXRlLHByaW9yaXR5LCAuLi5jaGVja2xpc3RWYWx1ZXNXaXRoTm9CbGFua3MpO1xuICAgICAgICAgICAgaWYgKHByb2plY3RUb0FkZFRvID09IG51bGwpe1xuICAgICAgICAgICAgICAgIHNvcnROYWtlZFRvZG9zKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXhUb0FkZFRvID0gdG9kb3NXaXRob3V0UHJvamVjdC5pbmRleE9mKG5ld1RvZG8pO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1RvZG9Ob2RlID0gcmVuZGVyTWFuYWdlci5hcHBlbmROZXdUb2RvQXRJbmRleChuZXdUb2RvLCBpbmRleFRvQWRkVG8pO1xuICAgICAgICAgICAgICAgIHJlbmRlck1hbmFnZXIuYmluZFRvZG9CYXIobmV3VG9kb05vZGUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9qZWN0VG9BZGRUby5nZXRJc1RvZG9zU2hvd24oKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4VG9BZGRUbyA9IHByb2plY3RUb0FkZFRvLmdldFRvZG9BcnJheSgpLmluZGV4T2YobmV3VG9kbyk7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3VG9kb05vZGUgPSByZW5kZXJNYW5hZ2VyLmFwcGVuZE5ld1RvZG9BdEluZGV4KG5ld1RvZG8sIGluZGV4VG9BZGRUbywgcHJvamVjdFRvQWRkVG9JbmRleCk7XG4gICAgICAgICAgICAgICAgcmVuZGVyTWFuYWdlci5iaW5kVG9kb0JhcihuZXdUb2RvTm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZW5kZXJNYW5hZ2VyLmNsb3NlTmV3VG9kb0Zvcm1EaWFsb2coKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHByb2Nlc3NOZXdQcm9qZWN0ID0gZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdE9iamVjdCA9IGNyZWF0ZUFuZEFkZFByb2plY3QoXCJOZXcgUHJvamVjdCAocmVuYW1lIG1lISlcIik7XG4gICAgICAgIGNvbnN0IG5ld05vZGUgPSByZW5kZXJNYW5hZ2VyLnJlbmRlckFuZEJpbmROZXdQcm9qZWN0KG5ld1Byb2plY3RPYmplY3QpO1xuICAgICAgICBzdG9yYWdlTWFuYWdlci5zZXRQcm9qZWN0T3JUb2RvKG5ld1Byb2plY3RPYmplY3QpO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBwcm9jZXNzRWRpdE5hbWVGb3JtID0gZnVuY3Rpb24oZXZlbnQsIGZvcm1FbGVtZW50KXtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGNvbnN0IHRvZG9PclByb2plY3RPYmplY3QgPSBmb3JtRWxlbWVudC5vYmplY3Q7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBmb3JtRWxlbWVudC5lbGVtZW50cy5uYW1lLnZhbHVlO1xuICAgICAgICB0b2RvT3JQcm9qZWN0T2JqZWN0Lm5hbWUgPSBuYW1lO1xuICAgICAgICByZW5kZXJNYW5hZ2VyLmRpc3BsYXlJY29ucyhmb3JtRWxlbWVudC5wYXJlbnROb2RlLnBhcmVudE5vZGUpO1xuICAgICAgICByZW5kZXJNYW5hZ2VyLmNsb3NlRWRpdE5hbWVGb3JtKCk7XG4gICAgICAgIHN0b3JhZ2VNYW5hZ2VyLnNldFByb2plY3RPclRvZG8odG9kb09yUHJvamVjdE9iamVjdCk7XG4gICAgfVxuXG4gICAgY29uc3QgcHJvY2Vzc0RlbGV0ZUZvcm1TdWJtaXQgPSBmdW5jdGlvbihldmVudCwgZGVsZXRlRm9ybSl7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGluZGV4T2ZQcm9qZWN0VG9SZW1vdmUgPSBkZWxldGVGb3JtLnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC5zZWxlY3Rpb25cIikudmFsdWU7XG4gICAgICAgIGxldCByZW1vdmVkT2JqZWN0O1xuICAgICAgICBpZiAoaW5kZXhPZlByb2plY3RUb1JlbW92ZSA+PTApe1xuICAgICAgICAgICAgcmVtb3ZlZE9iamVjdCA9IHByb2plY3RzLnNwbGljZShpbmRleE9mUHJvamVjdFRvUmVtb3ZlLCAxKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlbW92ZWRPYmplY3QubmFtZSArIFwiIGlzIGRlbGV0ZWRcIik7XG4gICAgICAgICAgICByZW5kZXJNYW5hZ2VyLnJlbW92ZVRhYihpbmRleE9mUHJvamVjdFRvUmVtb3ZlKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0b2RvU2VsZWN0aW9uTm9kZSA9IGRlbGV0ZUZvcm0ucXVlcnlTZWxlY3RvcihcIi50b2RvLnNlbGVjdGlvblwiKTtcbiAgICAgICAgY29uc3QgcHJvamVjdEFuZFRvZG9JbmRleE9mVG9kb1RvUmVtb3ZlID0gdG9kb1NlbGVjdGlvbk5vZGUudmFsdWUuc3BsaXQoXCIsXCIpO1xuICAgICAgICBjb25zdCBpbmRleE9mT3B0Z3JvdXBTZWxlY3RlZCA9IE51bWJlcihwcm9qZWN0QW5kVG9kb0luZGV4T2ZUb2RvVG9SZW1vdmVbMF0pO1xuICAgICAgICBjb25zdCBpbmRleE9mVG9kb1RvUmVtb3ZlID0gTnVtYmVyKHByb2plY3RBbmRUb2RvSW5kZXhPZlRvZG9Ub1JlbW92ZVsxXSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSW5kZXhlcyBmb3IgZGVsZXRlOiBcIiArIGluZGV4T2ZPcHRncm91cFNlbGVjdGVkICsgXCIgXCIgKyBpbmRleE9mVG9kb1RvUmVtb3ZlKVxuICAgICAgICBpZiAoaW5kZXhPZk9wdGdyb3VwU2VsZWN0ZWQgIT09IC0xICYmIGluZGV4T2ZUb2RvVG9SZW1vdmUgPj0wICl7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0VG9SZW1vdmVGcm9tID0gcHJvamVjdHNbaW5kZXhPZk9wdGdyb3VwU2VsZWN0ZWRdO1xuICAgICAgICAgICAgcmVtb3ZlZE9iamVjdCA9IHByb2plY3RUb1JlbW92ZUZyb20uZ2V0VG9kb0FycmF5KCkuc3BsaWNlKGluZGV4T2ZUb2RvVG9SZW1vdmUsIDEpWzBdO1xuICAgICAgICAgICAgcmVuZGVyTWFuYWdlci5yZW1vdmVUYWIoaW5kZXhPZk9wdGdyb3VwU2VsZWN0ZWQsIGluZGV4T2ZUb2RvVG9SZW1vdmUpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYCR7cmVtb3ZlZE9iamVjdC5uYW1lfSBmcm9tICR7cHJvamVjdFRvUmVtb3ZlRnJvbS5uYW1lfSBpcyByZW1vdmVkYCk7XG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXhPZk9wdGdyb3VwU2VsZWN0ZWQgPT0gLTEgJiYgaW5kZXhPZlRvZG9Ub1JlbW92ZSA+PTAgKXtcbiAgICAgICAgICAgIHJlbW92ZWRPYmplY3QgPSB0b2Rvc1dpdGhvdXRQcm9qZWN0LnNwbGljZShpbmRleE9mVG9kb1RvUmVtb3ZlLCAxKVswXTtcbiAgICAgICAgICAgIHJlbmRlck1hbmFnZXIucmVtb3ZlVGFiKG51bGwsIGluZGV4T2ZUb2RvVG9SZW1vdmUpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYCR7cmVtb3ZlZE9iamVjdC5uYW1lfSBmcm9tIHRvZG9zIHdpdGhvdXQgcHJvamVjdHMgaXMgcmVtb3ZlZGApO1xuICAgICAgICB9XG4gICAgICAgIHJlbmRlck1hbmFnZXIuY2xvc2VEZWxldGVEaWFsb2coKTtcbiAgICB9XG5cbiAgICBjb25zdCBwcm9jZXNzQ2hlY2tsaXN0VG9nZ2xlID0gZnVuY3Rpb24oY2hlY2tsaXN0T2JqZWN0LCB0b2RvT2JqZWN0KXtcbiAgICAgICAgY2hlY2tsaXN0T2JqZWN0LnRvZ2dsZUNvbXBsZXRlKCk7XG4gICAgICAgIHN0b3JhZ2VNYW5hZ2VyLnNldFByb2plY3RPclRvZG8odG9kb09iamVjdCk7XG4gICAgfVxuXG4gICAgLy8gdXNlIHBhcmFtZXRlciBwcm9qZWN0ID0gbnVsbCBpZiB5b3Ugd2FudCB0aGUgdG9kbyB0byBoYXZlIG5vIHByb2plY3RcbiAgICBjb25zdCBjcmVhdGVBbmRBZGRUb2RvID0gZnVuY3Rpb24ocHJvamVjdCx0aXRsZSxkZXNjcmlwdGlvbixkdWVEYXRlLHByaW9yaXR5LC4uLmNoZWNrbGlzdEFycmF5KXtcbiAgICAgICAgY29uc3QgdG9kbyA9IGNyZWF0ZVRvZG8odGl0bGUsZGVzY3JpcHRpb24sZHVlRGF0ZSxwcmlvcml0eSwuLi5jaGVja2xpc3RBcnJheSk7XG4gICAgICAgIGlmIChwcm9qZWN0ICE9PSBudWxsKXtcbiAgICAgICAgICAgIGlmICghcHJvamVjdHMuaW5jbHVkZXMocHJvamVjdCkpe1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwiWW91IGFyZSB0cnlpbmcgdG8gYWRkIGEgdG9kbyB0byBhIG5vbmV4aXN0aW5nIHByb2plY3RcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtb3ZlVG9kb1RvUHJvamVjdChwcm9qZWN0LCB0b2RvKTtcbiAgICAgICAgICAgIHByb2plY3Quc29ydFRvZG9zKCk7XG4gICAgICAgICAgICBzdG9yYWdlTWFuYWdlci5zZXRQcm9qZWN0T3JUb2RvKHByb2plY3QpO1xuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICB0b2Rvc1dpdGhvdXRQcm9qZWN0LnB1c2godG9kbyk7XG4gICAgICAgICAgICBzdG9yYWdlTWFuYWdlci5zZXRQcm9qZWN0T3JUb2RvKHRvZG8pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRvZG87XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlQW5kQWRkUHJvamVjdCA9IGZ1bmN0aW9uKG5hbWUpe1xuICAgICAgICBjb25zdCBjcmVhdGVkUHJvamVjdCA9IGNyZWF0ZVByb2plY3QobmFtZSk7XG4gICAgICAgIHByb2plY3RzLnB1c2goY3JlYXRlZFByb2plY3QpO1xuICAgICAgICBzdG9yYWdlTWFuYWdlci5zZXRQcm9qZWN0T3JUb2RvKGNyZWF0ZWRQcm9qZWN0KTtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZWRQcm9qZWN0O1xuICAgIH1cblxuICAgIGNvbnN0IGluaXQgPSBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCBwcm9qZWN0c0FuZFRvZG9zID0gc3RvcmFnZU1hbmFnZXIuZ2V0UHJvamVjdHNBbmRUb2Rvc0Zyb21TdG9yYWdlKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzQW5kVG9kb3MpO1xuICAgICAgICBpZiAocHJvamVjdHNBbmRUb2Rvcy5wcm9qZWN0cy5sZW5ndGggIT09MCB8fCBwcm9qZWN0c0FuZFRvZG9zLnRvZG9zLmxlbmd0aCAhPT0wKXtcbiAgICAgICAgICAgIHByb2plY3RzID0gcHJvamVjdHNBbmRUb2Rvcy5wcm9qZWN0cztcbiAgICAgICAgICAgIHRvZG9zV2l0aG91dFByb2plY3QgPSBwcm9qZWN0c0FuZFRvZG9zLnRvZG9zO1xuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICBhZGRFeGFtcGxlVG9kb3NhbmRQcm9qZWN0cygpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJObyBkYXRhIGRldGVjdGVkIGluIGxvY2FsU3RvcmFnZS4gQWRkZWQgZXhhbXBsZXMhXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJlbmRlck1hbmFnZXIuaW5pdCgpO1xuICAgICAgICBzdG9yYWdlTWFuYWdlci5zZXRBbGxQcm9qZWN0c0FuZFRvZG9zKCk7XG4gICAgfVxuXG4gICAgY29uc3QgYWRkRXhhbXBsZVRvZG9zYW5kUHJvamVjdHMgPSBmdW5jdGlvbigpe1xuICAgICAgICBwcm9qZWN0cyA9IFtdO1xuICAgICAgICB0b2Rvc1dpdGhvdXRQcm9qZWN0ID0gW107XG4gICAgICAgIGNyZWF0ZUFuZEFkZFRvZG8obnVsbCwgXCJEcml2ZSBtb20gdG8gYWlycG9ydFwiLCBcIlRoaXMgaXMgYSBoaWdoIHByaW9yaXR5IHRhc2shIE1ha2Ugc3VyZSB0byBkcm9wIG1vbSBvZmYgYXQgQUJDIGFpcnBvcnQgVGVybWluYWwgMS5cIiwgXCIyMDI0LTA3LTEwXCIsIDMsIFwiQ2hlY2staW4gZm9yIGZsaWdodFwiLCBcIlBpY2sgdXAgbW9tIGF0IDg6MDAgQU1cIik7XG4gICAgICAgIGNyZWF0ZUFuZEFkZFRvZG8obnVsbCwgXCJCdXkgbmV3IGNhbXBpbmcgZ2VhclwiLCBcIlRoaXMgaXMgYSBsb3cgcHJpb3JpdHkgdGFzay4gUHJlcGFyZSBleHRyYSBzdXBwbGllcyBmb3IgTW91bnQgQXdlc29tZSBoaWtpbmcgdHJpcCB3aXRoIHRoZSBib3lzLlwiLCBcIjIwMjQtMTEtMjdcIiwgMSwgXCJCdXkgbmV3IHdhdGVyIGJvdHRsZVwiLCBcIkJ1eSBtb3JlIGNsaW1iaW5nIHJvcGVcIiwgXCJQYWNrIG5ldyBzdHVmZiBpbnRvIGNhbXBpbmcgYmFnXCIpO1xuICAgICAgICBjb25zdCB0ZXN0UHJvamVjdCA9IGNyZWF0ZUFuZEFkZFByb2plY3QoXCJUT1AgVG9kbyBMaXN0IFByb2plY3RcIik7XG4gICAgICAgIGNyZWF0ZUFuZEFkZFRvZG8odGVzdFByb2plY3QsIFwiU3R5bGl6ZSB3aXRoIENTU1wiLCBcIlVzZSBmbGV4Ym94IGFuZCBncmlkIHRvIGxheW91dCBlbGVtZW50cyEgQWxzbyBtZXNzIHdpdGggc29tZSBwc2V1ZG9jbGFzc2VzIHRvIG1ha2Ugc29tZSBpbnRlcmFjdGl2ZSBidXR0b25zISBBZnRlciBoYXZpbmcgYSBnb29kIGxheW91dCwgZXZlcnl0aGluZyBlbHNlIGxpa2UgY29sb3Igb3IgZm9udCBpcyBmb3IgZnVuIVwiLCBcIjIwMjQtMDYtMjlcIiwgMSwgXCJDZW50ZXIgZWxlbWVudHNcIiwgXCJTdHlsaXplIGJ1dHRvbnMgYW5kIHBzZXVkb2NsYXNzZXNcIiwgXCJTdHlsaXplIGZvcm0gaW5wdXRzXCIsIFwiQWRkIGljb25zXCIsIFwiQ2hvb3NlIGNvbG9yIHBhbGV0dGVcIik7XG4gICAgICAgIGNyZWF0ZUFuZEFkZFRvZG8odGVzdFByb2plY3QsIFwiQWRkIGFiaWxpdHkgdG8gZWRpdCBleGlzdGluZyB0b2Rvc1wiLCBcIkV4aXN0aW5nIHRvZG9zIHNob3VsZCBiZSBhYmxlIHRvIGJlIGRlbGV0ZWQuIFRoZWlyIG5hbWVzIGFuZCBjaGVja2xpc3Qgc3RhdHVzIHNob3VsZCBhbHNvIGJlIGFibGUgdG8gYmUgZWRpdGVkLiBBbGwgb2YgdGhpcyBpbmZvcm1hdGlvbiBzaG91bGQgYmUgcHJvcGVybHkgc3RvcmVkLCBub3QganVzdCByZW5kZXJlZCBvbiB0aGUgRE9NIGRpcmVjdGx5LlwiLCBcIjIwMjQtMDYtMjNcIiwgMywgKTtcbiAgICAgICAgY29uc3QgdGVzdFByb2plY3QyID0gY3JlYXRlQW5kQWRkUHJvamVjdChcIldvb2R3b3JraW5nIFByb2plY3RcIik7XG4gICAgICAgIGNyZWF0ZUFuZEFkZFRvZG8odGVzdFByb2plY3QyLFwiQnJhaW5zdG9ybSBzb21ldGhpbmcgdG8gbWFrZVwiLCBcIlRyeSB0byBjcmVhdGUgYSBiYXNpYyBjb25jZXB0IHNrZXRjaCBvZiB0aGUgbmV4dCBwcm9qZWN0IHRvIG1ha2UuIENvbmNlcHQgc2tldGNoIHNob3VsZCBoYXZlIG11bHRpcGxlIHBlcnNwZWN0aXZlcyBhbmQgc29tZSBjbG9zZS11cCBkaWFncmFtcyBvZiBhbnkga2V5IG1lY2hhbmljYWwgcGFydHMuXCIsIFwiMjAyNC0wNy0wNFwiLCAzLCBcIlJlc2VhcmNoIGluc3BpcmF0aW9uIGlkZWFzXCIsIFwiQ2hlY2sgbXkgY3VycmVudCBzdXBwbGllc1wiKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge2dldFByb2plY3RzQW5kTmFrZWRUb2RvcywgY3JlYXRlQW5kQWRkVG9kbywgY3JlYXRlQW5kQWRkUHJvamVjdCxcbiAgICAgICAgbW92ZVRvZG9Ub1Byb2plY3QsIHJlbW92ZVRvZG9Gcm9tUHJvamVjdCwgYWRkRXhhbXBsZVRvZG9zYW5kUHJvamVjdHMsIHRvZ2dsZU9wZW5DbG9zZVByb2plY3RUYWIsXG4gICAgICAgIHByb2Nlc3NOZXdUb2RvRm9ybVN1Ym1pdCwgY29tcGFyZVByaW9yaXR5LCBtb3ZlUHJvamVjdE5vZGVVcCwgbW92ZVByb2plY3ROb2RlRG93bixcbiAgICAgICAgcHJvY2Vzc05ld1Byb2plY3QsIHByb2Nlc3NFZGl0TmFtZUZvcm0sIHByb2Nlc3NEZWxldGVGb3JtU3VibWl0LCBpbml0LCBwcm9jZXNzQ2hlY2tsaXN0VG9nZ2xlXG4gICAgfTtcblxufSgpO1xuXG5cblxucGFnZU1hbmFnZXIuaW5pdCgpO1xuXG5leHBvcnQge3BhZ2VNYW5hZ2VyfTsiLCIvLyBtb2R1bGUgZm9yIHByb2plY3QgdGhhdCAoY2FuKSBob2xkIHRvZG9zIC8vXG5pbXBvcnQge3BhZ2VNYW5hZ2VyfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KG5hbWUpIHtcbiAgICBjb25zdCBtZXRob2RzID0gcHJvamVjdE1ldGhvZERlbGVnYXRlKCk7XG5cbiAgICBsZXQgaXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgIGxldCB0b2RvQXJyYXkgPSBbXTtcbiAgICBsZXQgaXNUb2Rvc1Nob3duID0gZmFsc2U7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICAuLi5tZXRob2RzLFxuICAgICAgICBuYW1lLFxuICAgICAgICB0b2RvQXJyYXksXG4gICAgICAgIGlzVG9kb3NTaG93bixcbiAgICB9XG59XG5cbmNvbnN0IHByb2plY3RNZXRob2REZWxlZ2F0ZSA9IGZ1bmN0aW9uKCl7XG5cbiAgICBjb25zdCBnZXRUb2RvQXJyYXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvZG9BcnJheTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRUb2RvID0gZnVuY3Rpb24oaW5kZXgpe1xuICAgICAgICByZXR1cm4gdGhpcy50b2RvQXJyYXlbaW5kZXhdO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZFRvZG8gPSBmdW5jdGlvbiAobmV3VG9kbykge1xuICAgICAgICB0aGlzLnRvZG9BcnJheS5wdXNoKG5ld1RvZG8pO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZVRvZG8gPSBmdW5jdGlvbiAodG9kb1RvUmVtb3ZlKSB7XG4gICAgICAgIHRoaXMudG9kb0FycmF5LnBvcCh0b2RvVG9SZW1vdmUpO1xuICAgIH1cblxuICAgIC8vIHNvcnQgYnkgcHJpb3JpdHkgb25seSB3aXRoIDMgYmVpbmcgaGlnaGVzdCAoYW5kIGZpcnN0KSwgMSBiZWluZyBsb3dlc3RcbiAgICBjb25zdCBzb3J0VG9kb3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudG9kb0FycmF5LnNvcnQocGFnZU1hbmFnZXIuY29tcGFyZVByaW9yaXR5KTtcbiAgICB9XG5cbiAgICBjb25zdCB0b2dnbGVTaG93VG9kb3MgPSBmdW5jdGlvbigpe1xuICAgICAgICB0aGlzLmlzVG9kb3NTaG93biA9ICF0aGlzLmlzVG9kb3NTaG93bjtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRJc1RvZG9zU2hvd24gPSBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5pc1RvZG9zU2hvd247XG4gICAgfVxuXG4gICAgcmV0dXJue1xuICAgICAgICBzb3J0VG9kb3MsXG4gICAgICAgIGdldFRvZG8sXG4gICAgICAgIGFkZFRvZG8sXG4gICAgICAgIHJlbW92ZVRvZG8sXG4gICAgICAgIGdldFRvZG9BcnJheSxcbiAgICAgICAgdG9nZ2xlU2hvd1RvZG9zLFxuICAgICAgICBnZXRJc1RvZG9zU2hvd24sXG4gICAgfVxufVxuXG5jb25zdCBhdHRhY2hQcm9qZWN0TWV0aG9kcyA9IGZ1bmN0aW9uKHBhcnRpYWwpe1xuICAgIGNvbnN0IG1ldGhvZHMgPSBwcm9qZWN0TWV0aG9kRGVsZWdhdGUoKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIC4uLm1ldGhvZHMsXG4gICAgICAgIC4uLnBhcnRpYWwsXG4gICAgfVxufVxuXG5leHBvcnQge2NyZWF0ZVByb2plY3QsIGF0dGFjaFByb2plY3RNZXRob2RzfTsiLCIvLyBtb2R1bGUgc3RyaWN0bHkgZm9yIGRpc3BsYXlpbmcgZWxlbWVudHNcbmltcG9ydCB7IHBhZ2VNYW5hZ2VyIH0gZnJvbSBcIi4vaW5kZXguanNcIjtcbmltcG9ydCB1cEljb24gZnJvbSBcIi4vaW1hZ2VzL21lbnUtdXAuc3ZnXCJcbmltcG9ydCBkb3duSWNvbiBmcm9tIFwiLi9pbWFnZXMvbWVudS1kb3duLnN2Z1wiXG5cbmNvbnN0IHJlbmRlck1hbmFnZXIgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICBjb25zdCBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZW5kZXJCYXNlQmFja2dyb3VuZCgpO1xuICAgICAgICByZW5kZXJIZWFkZXIoKTtcbiAgICAgICAgcmVuZGVySGVscEJ1dHRvbigpO1xuICAgICAgICByZW5kZXJTaWRlYmFyKCk7XG4gICAgICAgIHJlbmRlckRlZmF1bHRDb250ZW50KCk7XG4gICAgICAgIHByZXJlbmRlckRpYWxvZ3MoKTtcbiAgICAgICAgYmluZEFsbEV2ZW50cygpO1xuICAgICAgICBwcmVyZW5kZXJFZGl0TmFtZUZvcm0oKTtcbiAgICB9XG5cbiAgICAvLyBoZWxwZXIgZnVuY3Rpb25zIHRvIGVhc2lseSBjcmVhdGUgRE9NIGVsZW1lbnRzXG5cbiAgICBjb25zdCBjcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24gKHRhZywgY2xhc3NBdHRyaWJ1dGUsIGlubmVyVGV4dCkge1xuICAgICAgICBjb25zdCBjcmVhdGVkRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICAgICAgaWYgKGNsYXNzQXR0cmlidXRlICE9PSB1bmRlZmluZWQgJiYgY2xhc3NBdHRyaWJ1dGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IHNwbGl0Q2xhc3NTdHJpbmdzQXJyYXkgPSBjbGFzc0F0dHJpYnV0ZS5zcGxpdChcIiBcIik7XG4gICAgICAgICAgICBmb3IgKGxldCBzaW5nbGVDbGFzcyBvZiBzcGxpdENsYXNzU3RyaW5nc0FycmF5KSB7XG4gICAgICAgICAgICAgICAgY3JlYXRlZEVsZW1lbnQuY2xhc3NMaXN0LmFkZChzaW5nbGVDbGFzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGlmIChpbm5lclRleHQgIT09IHVuZGVmaW5lZCkgeyBjcmVhdGVkRWxlbWVudC5pbm5lclRleHQgPSBpbm5lclRleHQgfTtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZWRFbGVtZW50O1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZUxhYmVsQW5kSW5wdXQgPSBmdW5jdGlvbiAoaWQsIHR5cGUgPSBcInRleHRcIiwgbGFiZWxUZXh0LCB2YWx1ZSwgcmVxdWlyZWRCb29sZWFuLCBtYXhsZW5ndGgpIHtcbiAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIGxhYmVsLmlubmVyVGV4dCA9IGxhYmVsVGV4dDtcbiAgICAgICAgbGFiZWwuZm9yID0gaWQ7XG4gICAgICAgIGxldCBpbnB1dDtcbiAgICAgICAgaWYgKHR5cGUgPT09IFwidGV4dGFyZWFcIil7XG4gICAgICAgICAgICBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICBpbnB1dC50eXBlID0gdHlwZTtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dC5pZCA9IGlkO1xuICAgICAgICBpbnB1dC5uYW1lID0gaWQ7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXF1aXJlZEJvb2xlYW4gPT09IHRydWUpIHtcbiAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwiXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtYXhsZW5ndGggIT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJtYXhsZW5ndGhcIixtYXhsZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGxhYmVsLCBpbnB1dCB9O1xuICAgIH1cblxuICAgIGNvbnN0IGNvbXBvc2VDb250YWluZWRGaWVsZEVsZW1lbnQgPSBmdW5jdGlvbiAoeyBsYWJlbCwgaW5wdXQgfSkge1xuICAgICAgICBjb25zdCBjb250YWluZXJEaXYgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIGlucHV0Lm5hbWUpO1xuICAgICAgICBjb250YWluZXJEaXYuYXBwZW5kKGxhYmVsLCBpbnB1dCk7XG4gICAgICAgIHJldHVybiBjb250YWluZXJEaXY7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlSW1hZ2UgPSBmdW5jdGlvbiAoc3JjLCBjbGFzc1N0cmluZywgYWx0VGV4dCkge1xuICAgICAgICBjb25zdCBpbWFnZSA9IGNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgY2xhc3NTdHJpbmcpO1xuICAgICAgICBpbWFnZS5zcmMgPSBzcmM7XG4gICAgICAgIGltYWdlLmFsdCA9IGFsdFRleHQ7XG4gICAgICAgIGltYWdlLnN0eWxlLndpZHRoID0gXCIyOXB4XCI7XG4gICAgICAgIHJldHVybiBpbWFnZTtcbiAgICB9XG5cbiAgICAvLyBmdW5jdGlvbnMgcmVsYXRlZCB0byBkaXNwbGF5aW5nIGFuZCByZW5kZXJpbmdcbiAgICBjb25zdCByZW5kZXJIZWxwQnV0dG9uID0gZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgaGVscEJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIixcImhlbHAgYnV0dG9uXCIsXCI/XCIpO1xuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVscEJ1dHRvbik7XG4gICAgfVxuXG4gICAgbGV0IGJhc2VCYWNrZ3JvdW5kO1xuICAgIGNvbnN0IHJlbmRlckJhc2VCYWNrZ3JvdW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBiYXNlQmFja2dyb3VuZCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJiYXNlIGFyZWFcIik7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChiYXNlQmFja2dyb3VuZCk7XG4gICAgfVxuXG4gICAgbGV0IGhlYWRlcjtcbiAgICBjb25zdCByZW5kZXJIZWFkZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGhlYWRlciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJoZWFkZXIgYXJlYVwiKTtcbiAgICAgICAgY29uc3QgbG9nbyA9IGNyZWF0ZUVsZW1lbnQoXCJoMVwiLCBcImhlYWRlciBsb2dvXCIsIFwiVG8gRG8gTGlzdFwiKTtcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGxvZ28pO1xuICAgICAgICBiYXNlQmFja2dyb3VuZC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIH1cblxuICAgIC8vIGRpc3BsYXlpbmcgYW5kIHJlbmRlcmluZyBzaWRlYmFyXG5cbiAgICBsZXQgc2lkZWJhcjtcbiAgICBjb25zdCByZW5kZXJTaWRlYmFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzaWRlYmFyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInNpZGViYXIgYXJlYVwiKTtcbiAgICAgICAgY29uc3QgbmV3RHJvcGRvd24gPSBjb21wb3NlTmV3RHJvcGRvd24oKTtcbiAgICAgICAgc2lkZWJhci5hcHBlbmRDaGlsZChuZXdEcm9wZG93bi5kcm9wZG93bkJ1dHRvbik7XG4gICAgICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQobmV3RHJvcGRvd24ubmV3QnV0dG9uQ29udGFpbmVyKTtcbiAgICAgICAgY29uc3QgcHJvamVjdHNBbmRUb2Rvc1RvRGlzcGxheSA9IHBhZ2VNYW5hZ2VyLmdldFByb2plY3RzQW5kTmFrZWRUb2RvcygpO1xuICAgICAgICBjb25zdCBwcm9qZWN0c0FycmF5ID0gcHJvamVjdHNBbmRUb2Rvc1RvRGlzcGxheS5wcm9qZWN0cztcbiAgICAgICAgY29uc3QgdG9kb3NBcnJheSA9IHByb2plY3RzQW5kVG9kb3NUb0Rpc3BsYXkudG9kb3NXaXRob3V0UHJvamVjdDtcbiAgICAgICAgZm9yIChsZXQgcHJvamVjdCBvZiBwcm9qZWN0c0FycmF5KSB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0VGFiID0gY29tcG9zZVByb2plY3RBbmRDaGlsZFRvZG9zVGFiKHByb2plY3QpO1xuICAgICAgICAgICAgc2lkZWJhci5hcHBlbmRDaGlsZChwcm9qZWN0VGFiKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCB0b2RvIG9mIHRvZG9zQXJyYXkpIHtcbiAgICAgICAgICAgIGNvbnN0IHRvZG9UYWIgPSBjb21wb3NlVG9kb1RhYih0b2RvKTtcbiAgICAgICAgICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQodG9kb1RhYik7XG4gICAgICAgIH1cbiAgICAgICAgYmFzZUJhY2tncm91bmQuYXBwZW5kQ2hpbGQoc2lkZWJhcik7XG4gICAgfVxuXG4gICAgY29uc3QgY29tcG9zZU5ld0Ryb3Bkb3duID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBkcm9wZG93bkJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgXCJuZXctZHJvcGRvd24gYnV0dG9uXCIsIFwiTWVudSBPcHRpb25zXCIpO1xuICAgICAgICBjb25zdCBuZXdCdXR0b25Db250YWluZXIgPSBwcmVyZW5kZXJOZXdCdXR0b25zKCk7XG4gICAgICAgIHJldHVybiB7IGRyb3Bkb3duQnV0dG9uLCBuZXdCdXR0b25Db250YWluZXIgfVxuICAgIH1cblxuICAgIGNvbnN0IHByZXJlbmRlck5ld0J1dHRvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJuZXctYnV0dG9uIGNvbnRhaW5lclwiKTtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdEJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgXCJuZXcgcHJvamVjdCBidXR0b25cIiwgXCJOZXcgUHJvamVjdFwiKTtcbiAgICAgICAgY29uc3QgbmV3VG9kb0J1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgXCJuZXcgdG9kbyBidXR0b25cIiwgXCJOZXcgVG9kb1wiKTtcbiAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBcImRlbGV0ZSBidXR0b25cIiwgXCJSZW1vdmUgUHJvamVjdCBvciBUb2RvXCIpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEJ1dHRvbik7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdUb2RvQnV0dG9uKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG4gICAgICAgIHRvZ2dsZVNob3dIaWRlRWxlbWVudChjb250YWluZXIpO1xuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH1cblxuICAgIGNvbnN0IHRvZ2dsZVNob3dIaWRlRWxlbWVudCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnREaXNwbGF5U3RhdGUgPSBlbGVtZW50LnN0eWxlLmRpc3BsYXk7XG4gICAgICAgIGlmIChjdXJyZW50RGlzcGxheVN0YXRlICE9PSBcIm5vbmVcIikge1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkcm9wZG93bkJ1dHRvbiA9IHNpZGViYXIucXVlcnlTZWxlY3RvcihcIi5uZXctZHJvcGRvd24uYnV0dG9uXCIpO1xuICAgICAgICBpZiAoZHJvcGRvd25CdXR0b24gIT09IG51bGwpe1xuICAgICAgICAgICAgaWYgKGRyb3Bkb3duQnV0dG9uLmNsYXNzTGlzdC5jb250YWlucyhcInByZXNzZWRcIikpe1xuICAgICAgICAgICAgICAgIGRyb3Bkb3duQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJwcmVzc2VkXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkcm9wZG93bkJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicHJlc3NlZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNvbXBvc2VQcm9qZWN0QW5kQ2hpbGRUb2Rvc1RhYiA9IGZ1bmN0aW9uIChwcm9qZWN0VG9EaXNwbGF5KSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RCYXJBbmRUb2RvQXJlYSA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJwcm9qZWN0LWFuZC1jaGlsZC10b2RvIGFyZWFcIik7XG4gICAgICAgIGNvbnN0IHByb2plY3RCYXJBcmVhID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInByb2plY3QgYmFyIGFyZWFcIik7XG4gICAgICAgIHByb2plY3RCYXJBbmRUb2RvQXJlYS5wcm9qZWN0ID0gcHJvamVjdFRvRGlzcGxheTtcbiAgICAgICAgcHJvamVjdEJhckFuZFRvZG9BcmVhLm9iamVjdCA9IHByb2plY3RUb0Rpc3BsYXk7XG4gICAgICAgIHByb2plY3RCYXJBcmVhLnByb2plY3QgPSBwcm9qZWN0VG9EaXNwbGF5O1xuICAgICAgICBwcm9qZWN0QmFyQXJlYS5vYmplY3QgPSBwcm9qZWN0VG9EaXNwbGF5O1xuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwicHJvamVjdCBuYW1lXCIsIHByb2plY3RUb0Rpc3BsYXkubmFtZSk7XG4gICAgICAgIHByb2plY3RCYXJBcmVhLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcbiAgICAgICAgcHJvamVjdEJhckFuZFRvZG9BcmVhLmFwcGVuZENoaWxkKHByb2plY3RCYXJBcmVhKTtcbiAgICAgICAgcmVuZGVyTW92ZVByb2plY3RJbWFnZXMocHJvamVjdEJhckFuZFRvZG9BcmVhKTtcbiAgICAgICAgLy8gbWFrZSBzdXJlIHRvIHJlbmRlciB0b2RvcyBvZiB0aGUgcHJvamVjdCwgaWYgdGhlIHByb2plY3Qgc2hvdWxkIGJlIG9wZW5cbiAgICAgICAgaWYgKHByb2plY3RUb0Rpc3BsYXkuZ2V0SXNUb2Rvc1Nob3duKCkpIHtcbiAgICAgICAgICAgIGFwcGVuZFByb2plY3RDaGlsZFRvZG9zKHByb2plY3RCYXJBbmRUb2RvQXJlYSk7XG4gICAgICAgICAgICBwcm9qZWN0QmFyQXJlYS5jbGFzc0xpc3QuYWRkKFwib3BlblwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvamVjdEJhckFuZFRvZG9BcmVhO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlckFuZEJpbmROZXdQcm9qZWN0ID0gZnVuY3Rpb24ocHJvamVjdFRvRGlzcGxheSl7XG4gICAgICAgIGNvbnN0IHByb2plY3RCYXJOb2RlID0gY29tcG9zZVByb2plY3RBbmRDaGlsZFRvZG9zVGFiKHByb2plY3RUb0Rpc3BsYXkpO1xuICAgICAgICBjb25zdCBwcm9qZWN0QW5kQ2hpbGRUb2RvTm9kZXMgPSBzaWRlYmFyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdC1hbmQtY2hpbGQtdG9kby5hcmVhXCIpO1xuICAgICAgICBsZXQgbGFzdFByb2plY3RCYXJOb2RlVG9BcHBlbmRBZnRlciA9IHByb2plY3RBbmRDaGlsZFRvZG9Ob2Rlc1twcm9qZWN0QW5kQ2hpbGRUb2RvTm9kZXMubGVuZ3RoLTFdO1xuICAgICAgICBpZiAobGFzdFByb2plY3RCYXJOb2RlVG9BcHBlbmRBZnRlciA9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgbGFzdFByb2plY3RCYXJOb2RlVG9BcHBlbmRBZnRlciA9IHNpZGViYXIucXVlcnlTZWxlY3RvcihcIi5uZXctYnV0dG9uLmNvbnRhaW5lclwiKTtcbiAgICAgICAgfVxuICAgICAgICBsYXN0UHJvamVjdEJhck5vZGVUb0FwcGVuZEFmdGVyLmFmdGVyKHByb2plY3RCYXJOb2RlKTtcbiAgICAgICAgYmluZFByb2plY3RBbmRDaGlsZFRvZG9zQmFyKHByb2plY3RCYXJOb2RlKTtcbiAgICAgICAgYmluZFVwRG93bkljb25zKHByb2plY3RCYXJOb2RlKVxuICAgIH1cblxuICAgIGNvbnN0IGFwcGVuZFByb2plY3RDaGlsZFRvZG9zID0gZnVuY3Rpb24ocHJvamVjdEJhckFuZFRvZG9BcmVhKXtcbiAgICAgICAgY29uc3QgdG9kb3NBcnJheSA9IHByb2plY3RCYXJBbmRUb2RvQXJlYS5wcm9qZWN0LmdldFRvZG9BcnJheSgpO1xuICAgICAgICBmb3IgKGxldCB0b2RvIG9mIHRvZG9zQXJyYXkpIHtcbiAgICAgICAgICAgIGNvbnN0IHRvZG9UYWIgPSBjb21wb3NlVG9kb1RhYih0b2RvKTtcbiAgICAgICAgICAgIHRvZG9UYWIucHJvamVjdCA9IHByb2plY3RCYXJBbmRUb2RvQXJlYS5wcm9qZWN0O1xuICAgICAgICAgICAgcHJvamVjdEJhckFuZFRvZG9BcmVhLmFwcGVuZENoaWxkKHRvZG9UYWIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY2xlYXJQcm9qZWN0Q2hpbGRUb2RvcyA9IGZ1bmN0aW9uKHByb2plY3RCYXJBbmRUb2RvQXJlYSl7XG4gICAgICAgIGNvbnN0IHRvZG9CYXJOb2RlcyA9IHByb2plY3RCYXJBbmRUb2RvQXJlYS5xdWVyeVNlbGVjdG9yQWxsKFwiLnRvZG8uYmFyLmFyZWFcIik7XG4gICAgICAgIGZvciAobGV0IG5vZGUgb2YgdG9kb0Jhck5vZGVzKXtcbiAgICAgICAgICAgIHByb2plY3RCYXJBbmRUb2RvQXJlYS5yZW1vdmVDaGlsZChub2RlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNvbXBvc2VUb2RvVGFiID0gZnVuY3Rpb24gKHRvZG9Ub0Rpc3BsYXkpIHtcbiAgICAgICAgY29uc3QgdG9kb0JhckFyZWEgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwidG9kbyBiYXIgYXJlYVwiKTtcbiAgICAgICAgY29uc3QgdG9kb05hbWUgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcInRvZG8gbmFtZVwiLCB0b2RvVG9EaXNwbGF5Lm5hbWUpO1xuICAgICAgICB0b2RvQmFyQXJlYS5hcHBlbmRDaGlsZCh0b2RvTmFtZSk7XG4gICAgICAgIHRvZG9CYXJBcmVhLm9iamVjdCA9IHRvZG9Ub0Rpc3BsYXk7XG4gICAgICAgIHJldHVybiB0b2RvQmFyQXJlYTtcbiAgICB9XG5cbiAgICBjb25zdCBhcHBlbmROZXdUb2RvQXRJbmRleCA9IGZ1bmN0aW9uKHRvZG9PYmplY3QsIGluZGV4LCBwcm9qZWN0SW5kZXgpe1xuICAgICAgICBjb25zdCB0b2RvVGFiTm9kZSA9IGNvbXBvc2VUb2RvVGFiKHRvZG9PYmplY3QpO1xuICAgICAgICBsZXQgdG9kb05vZGVMaXN0O1xuICAgICAgICBpZiAocHJvamVjdEluZGV4ID09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICB0b2RvTm9kZUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNpZGViYXIuYXJlYSA+IC50b2RvLmJhci5hcmVhXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdExpc3QgPSBzaWRlYmFyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdC1hbmQtY2hpbGQtdG9kb1wiKTtcbiAgICAgICAgICAgIHRvZG9Ob2RlTGlzdCA9IHByb2plY3RMaXN0W3Byb2plY3RJbmRleF0ucXVlcnlTZWxlY3RvckFsbChcIi50b2RvLmJhci5hcmVhXCIpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRvZG9Ob2RlVG9JbnNlcnRCZWZvcmUgPSB0b2RvTm9kZUxpc3RbaW5kZXhdO1xuICAgICAgICBpZiAodG9kb05vZGVUb0luc2VydEJlZm9yZSAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIHRvZG9Ob2RlVG9JbnNlcnRCZWZvcmUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodG9kb1RhYk5vZGUsIHRvZG9Ob2RlVG9JbnNlcnRCZWZvcmUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHRvZG9Ob2RlVG9JbnNlcnRBZnRlciA9IHRvZG9Ob2RlTGlzdFtpbmRleC0xXTtcbiAgICAgICAgICAgIGlmICh0b2RvTm9kZVRvSW5zZXJ0QWZ0ZXIgPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICB0b2RvTm9kZVRvSW5zZXJ0QWZ0ZXIgPSBzaWRlYmFyLnF1ZXJ5U2VsZWN0b3IoXCIubmV3LWJ1dHRvbi5jb250YWluZXJcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRvZG9Ob2RlVG9JbnNlcnRBZnRlci5hZnRlcih0b2RvVGFiTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2codG9kb05vZGVUb0luc2VydEJlZm9yZSwgdG9kb05vZGVMaXN0LCBpbmRleCk7XG4gICAgICAgIHJldHVybiB0b2RvVGFiTm9kZTtcbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJNb3ZlUHJvamVjdEltYWdlcyA9IGZ1bmN0aW9uIChwcm9qZWN0QmFyQW5kVG9kb0FyZWEpIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLFwiaWNvbiBjb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IHVwSWNvbkVsZW1lbnQgPSBjcmVhdGVJbWFnZSh1cEljb24sIFwidXAgaWNvblwiLCBcIm1vdmUgcHJvamVjdCB1cCBpY29uXCIpO1xuICAgICAgICBjb25zdCBkb3duSWNvbkVsZW1lbnQgPSBjcmVhdGVJbWFnZShkb3duSWNvbiwgXCJkb3duIGljb25cIiwgXCJtb3ZlIHByb2plY3QgZG93biBpY29uXCIpO1xuICAgICAgICB1cEljb25FbGVtZW50LnByb2plY3RBbmRDaGlsZE5vZGUgPSBwcm9qZWN0QmFyQW5kVG9kb0FyZWE7XG4gICAgICAgIGRvd25JY29uRWxlbWVudC5wcm9qZWN0QW5kQ2hpbGROb2RlID0gcHJvamVjdEJhckFuZFRvZG9BcmVhO1xuICAgICAgICBjb25zdCBwcm9qZWN0QmFyID0gcHJvamVjdEJhckFuZFRvZG9BcmVhLnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC5iYXIuYXJlYVwiKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZCh1cEljb25FbGVtZW50LCBkb3duSWNvbkVsZW1lbnQpO1xuICAgICAgICBwcm9qZWN0QmFyLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgY29uc3QgaGlkZUljb25zID0gZnVuY3Rpb24ocHJvamVjdEJhckFuZFRvZG9BcmVhKXtcbiAgICAgICAgY29uc3QgaWNvbnMgPSBwcm9qZWN0QmFyQW5kVG9kb0FyZWEucXVlcnlTZWxlY3RvckFsbChcImltZy5pY29uXCIpO1xuICAgICAgICBmb3IgKGxldCBpY29uIG9mIGljb25zKXtcbiAgICAgICAgICAgIGljb24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZGlzcGxheUljb25zID0gZnVuY3Rpb24ocHJvamVjdEJhckFuZFRvZG9BcmVhKXtcbiAgICAgICAgY29uc3QgaWNvbnMgPSBwcm9qZWN0QmFyQW5kVG9kb0FyZWEucXVlcnlTZWxlY3RvckFsbChcImltZy5pY29uXCIpO1xuICAgICAgICBmb3IgKGxldCBpY29uIG9mIGljb25zKXtcbiAgICAgICAgICAgIGljb24uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVUYWIgPSBmdW5jdGlvbihpbmRleE9mUHJvamVjdCwgaW5kZXhPZlRvZG8pe1xuICAgICAgICBsZXQgcHJvamVjdE5vZGVUb1NlYXJjaDtcbiAgICAgICAgLy8gZmluZCB0aGUgcHJvamVjdCB0byBkZWxldGUgZnJvbSBpZiB0aGVyZSBpcyBhIHByb2plY3Qgc3BlY2lmaWVkXG4gICAgICAgIGlmIChpbmRleE9mUHJvamVjdCAhPT0gbnVsbCl7XG4gICAgICAgICAgICBwcm9qZWN0Tm9kZVRvU2VhcmNoID0gc2lkZWJhci5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtYW5kLWNoaWxkLXRvZG8uYXJlYVwiKVtpbmRleE9mUHJvamVjdF07XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0Tm9kZVRvU2VhcmNoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiBwcm9qZWN0SW5kZXggc3BlY2lmaWVkIEFORCB0b2RvSW5kZXggc3BlY2lmaWVkIEFORCB0aGUgcHJvamVjdCBpcyBvcGVuLCBkZWxldGUgdGhlIHRvZG8gb2YgdGhlIHByb2plY3RcbiAgICAgICAgaWYgKGluZGV4T2ZQcm9qZWN0ICE9PSBudWxsICYmIGluZGV4T2ZUb2RvICE9PSB1bmRlZmluZWQgJiYgcHJvamVjdE5vZGVUb1NlYXJjaC5wcm9qZWN0LmdldElzVG9kb3NTaG93bigpKXtcbiAgICAgICAgICAgIGNvbnN0IHRvZG9Ub1JlbW92ZSA9IHByb2plY3ROb2RlVG9TZWFyY2gucXVlcnlTZWxlY3RvckFsbChcIjpzY29wZSA+IC50b2RvLmJhci5hcmVhXCIpW2luZGV4T2ZUb2RvXTtcbiAgICAgICAgICAgIHRvZG9Ub1JlbW92ZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRvZG9Ub1JlbW92ZSk7XG4gICAgICAgIH0gXG4gICAgICAgIC8vIGVsc2UgaWYgcHJvamVjdEluZGV4IG5vdCBzcGVjaWZpZWQgQU5EIHRvZG9JbmRleCBzcGVjaWZpZWQsIGRlbGV0ZSB0aGUgbmFrZWQgdG9kb1xuICAgICAgICBlbHNlIGlmIChpbmRleE9mUHJvamVjdCA9PSBudWxsICYmIGluZGV4T2ZUb2RvICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgY29uc3QgdG9kb1RvUmVtb3ZlID0gc2lkZWJhci5xdWVyeVNlbGVjdG9yQWxsKFwiOnNjb3BlID4gLnRvZG8uYmFyLmFyZWFcIilbaW5kZXhPZlRvZG9dO1xuICAgICAgICAgICAgdG9kb1RvUmVtb3ZlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodG9kb1RvUmVtb3ZlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBlbHNlIGlmIG5vIGluZGV4IGZvciB0b2RvIGlzIHNwZWNpZmllZCwgZGVsZXRlIHRoZSBlbnRpcmUgcHJvamVjdCBzcGVjaWZpZWRcbiAgICAgICAgZWxzZSBpZiAoaW5kZXhPZlByb2plY3QgIT09IG51bGwgJiYgaW5kZXhPZlRvZG8gPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIHByb2plY3ROb2RlVG9TZWFyY2gucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChwcm9qZWN0Tm9kZVRvU2VhcmNoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHByZXJlbmRlckVkaXROYW1lRm9ybSwgYWJsZSB0byBiZSBtb3ZlZCBhcm91bmQgYXMgbmVlZGVkXG4gICAgbGV0IHByZXJlbmRlcmVkRWRpdE5hbWVGb3JtO1xuICAgIGNvbnN0IHByZXJlbmRlckVkaXROYW1lRm9ybSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIHByZXJlbmRlcmVkRWRpdE5hbWVGb3JtID0gY3JlYXRlRWxlbWVudChcImZvcm1cIixcImVkaXQgbmFtZSBmb3JtXCIpO1xuICAgICAgICBjb25zdCBpbnB1dCA9IGNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgaW5wdXQubmFtZSA9IFwibmFtZVwiO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJtYXhsZW5ndGhcIiw0MCk7XG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoXCJzdWJtaXRcIixcInN1Ym1pdCBidXR0b25cIiwgXCJTYXZlXCIpO1xuICAgICAgICBiaW5kRWRpdE5hbWVGb3JtU3VibWl0KHN1Ym1pdEJ1dHRvbiwgaW5wdXQpO1xuICAgICAgICBwcmVyZW5kZXJlZEVkaXROYW1lRm9ybS5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgICAgIHByZXJlbmRlcmVkRWRpdE5hbWVGb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XG4gICAgICAgIHByZXJlbmRlcmVkRWRpdE5hbWVGb3JtLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgfTtcblxuICAgIC8vIGZvcm0gd2lsbCBzdWJtaXQgb24gYm90aCBjbGlja2luZyB0aGUgc3VibWl0IE9SIGVudGVyIGJ1dHRvblxuICAgIGNvbnN0IGJpbmRFZGl0TmFtZUZvcm1TdWJtaXQgPSBmdW5jdGlvbihidXR0b25Ob2RlLCBpbnB1dE5vZGUpe1xuICAgICAgICBidXR0b25Ob2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4gcGFnZU1hbmFnZXIucHJvY2Vzc0VkaXROYW1lRm9ybShlLCBwcmVyZW5kZXJlZEVkaXROYW1lRm9ybSkpO1xuICAgICAgICBpbnB1dE5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICBpZiAoZS5jb2RlID09IFwiRW50ZXJcIil7XG4gICAgICAgICAgICAgICAgcGFnZU1hbmFnZXIucHJvY2Vzc0VkaXROYW1lRm9ybShlLCBwcmVyZW5kZXJlZEVkaXROYW1lRm9ybSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyRWRpdE5hbWVGb3JtQXRCYXIgPSBmdW5jdGlvbihiYXJOb2RlKXtcbiAgICAgICAgaWYgKCFwcmVyZW5kZXJlZEVkaXROYW1lRm9ybS5pc0FjdGl2ZSl7XG4gICAgICAgICAgICBjb25zdCBiYXJUZXh0Tm9kZSA9IGJhck5vZGUucXVlcnlTZWxlY3RvcihcIi5uYW1lXCIpO1xuICAgICAgICAgICAgYmFyTm9kZS5yZXBsYWNlQ2hpbGQocHJlcmVuZGVyZWRFZGl0TmFtZUZvcm0sIGJhclRleHROb2RlKTtcbiAgICAgICAgICAgIHByZXJlbmRlcmVkRWRpdE5hbWVGb3JtLmhvbGRPbGROb2RlQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBwcmVyZW5kZXJlZEVkaXROYW1lRm9ybS5ob2xkT2xkTm9kZUNvbnRlbnQgPSBiYXJUZXh0Tm9kZTtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gcHJlcmVuZGVyZWRFZGl0TmFtZUZvcm0ucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBiYXJOb2RlLm9iamVjdC5uYW1lO1xuICAgICAgICAgICAgcHJlcmVuZGVyZWRFZGl0TmFtZUZvcm0uaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgcHJlcmVuZGVyZWRFZGl0TmFtZUZvcm0ub2JqZWN0ID0gYmFyTm9kZS5vYmplY3Q7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIGFsZXJ0KFwiUGxlYXNlIHN1Ym1pdCBwcmV2aW91cyBlZGl0IG5hbWUuXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY2xvc2VFZGl0TmFtZUZvcm0gPSBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCB0ZXh0Tm9kZVRvQWRkQmFjayA9IHByZXJlbmRlcmVkRWRpdE5hbWVGb3JtLmhvbGRPbGROb2RlQ29udGVudDtcbiAgICAgICAgcHJlcmVuZGVyZWRFZGl0TmFtZUZvcm0uaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgcHJlcmVuZGVyZWRFZGl0TmFtZUZvcm0ucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQodGV4dE5vZGVUb0FkZEJhY2ssIHByZXJlbmRlcmVkRWRpdE5hbWVGb3JtKTtcbiAgICAgICAgdGV4dE5vZGVUb0FkZEJhY2suaW5uZXJUZXh0ID0gdGV4dE5vZGVUb0FkZEJhY2sucGFyZW50Tm9kZS5vYmplY3QubmFtZTtcbiAgICB9XG5cbiAgICAvLyBkaXNwbGF5aW5nIGNvbnRlbnRcblxuICAgIGxldCBjb250ZW50O1xuICAgIGNvbnN0IHJlbmRlckRlZmF1bHRDb250ZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gY29tcG9zZURlZmF1bHRDb250ZW50KCk7XG4gICAgICAgIGJhc2VCYWNrZ3JvdW5kLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbXBvc2VEZWZhdWx0Q29udGVudCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRBcmVhID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImNvbnRlbnQgYXJlYVwiKTtcbiAgICAgICAgY29uc3QgZGVmYXVsdFRleHQgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcImRlZmF1bHQgdGV4dFwiLCBcIkxldCdzIGdldCBzdGFydGVkISBDaG9vc2UgYSB0b2RvLlwiKTtcbiAgICAgICAgY29uc3QgZGVmYXVsdEFkZFRvZG9CdXR0b24gPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwiYWRkLXRvZG8gYnV0dG9uXCIsIFwiT3IgY3JlYXRlIG9uZSFcIik7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRIZWxwbGlzdEhlYWRlciA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsXCJoZWxwIGhlYWRlclwiLFwiTmVlZCBoZWxwPyBFeHBsb3JlIHRoZXNlIGZ1bmN0aW9uczogXCIpO1xuICAgICAgICBjb25zdCBkZWZhdWx0SGVscExpc3QgPSBjb21wb3NlSGVscExpc3QoKTtcbiAgICAgICAgY29udGVudEFyZWEuYXBwZW5kQ2hpbGQoZGVmYXVsdFRleHQpO1xuICAgICAgICBjb250ZW50QXJlYS5hcHBlbmRDaGlsZChkZWZhdWx0QWRkVG9kb0J1dHRvbik7XG4gICAgICAgIGNvbnRlbnRBcmVhLmFwcGVuZChkZWZhdWx0SGVscGxpc3RIZWFkZXIsIGRlZmF1bHRIZWxwTGlzdCk7XG4gICAgICAgIHJldHVybiBjb250ZW50QXJlYTtcbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJUb2RvQ29udGVudCA9IGZ1bmN0aW9uICh0b2RvKSB7XG4gICAgICAgIGNvbnN0IHRvZG9UaXRsZSA9IGNyZWF0ZUVsZW1lbnQoXCJoMlwiLCBcImNvbnRlbnQgdGl0bGVcIiwgdG9kby5uYW1lKTtcbiAgICAgICAgY29uc3QgdG9kb0RhdGUgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcImNvbnRlbnQgZGF0ZVwiLCB0b2RvLmR1ZURhdGUpO1xuICAgICAgICBjb25zdCB0b2RvRGVzY3JpcHRpb24gPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcImNvbnRlbnQgZGVzY3JpcHRpb25cIiwgdG9kby5kZXNjcmlwdGlvbik7XG4gICAgICAgIGNvbnN0IHRvZG9DaGVja2xpc3QgPSBjb21wb3NlQ2hlY2tsaXN0RWxlbWVudHModG9kby5nZXRDaGVja2xpc3RBcnJheSgpKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZCh0b2RvVGl0bGUpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHRvZG9EYXRlKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZCh0b2RvRGVzY3JpcHRpb24pO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHRvZG9DaGVja2xpc3QpO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbXBvc2VDaGVja2xpc3RFbGVtZW50cyA9IGZ1bmN0aW9uIChjaGVja2xpc3RBcnJheSkge1xuICAgICAgICBjb25zdCBjaGVja2xpc3RBcmVhID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImNoZWNrbGlzdCBhcmVhXCIpO1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8Y2hlY2tsaXN0QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrbGlzdCA9IGNoZWNrbGlzdEFycmF5W2ldO1xuICAgICAgICAgICAgY29uc3QgY2hlY2tmaWVsZCA9IGNyZWF0ZUxhYmVsQW5kSW5wdXQoXCJjaGVja2xpc3QgXCIgKyBpLFwiY2hlY2tib3hcIiwgY2hlY2tsaXN0LmRlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgIGlmIChjaGVja2xpc3QuaXNDb21wbGV0ZSl7XG4gICAgICAgICAgICAgICAgY2hlY2tmaWVsZC5pbnB1dC5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsXCJcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjaGVja2xpc3RBcmVhLmFwcGVuZChjaGVja2ZpZWxkLmlucHV0LCBjaGVja2ZpZWxkLmxhYmVsKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2hlY2tsaXN0QXJlYTtcbiAgICB9XG5cbiAgICBjb25zdCBjb21wb3NlSGVscExpc3QgPSBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCBsaXN0ID0gY3JlYXRlRWxlbWVudChcInVsXCIsXCJoZWxwIGxpc3RcIik7XG4gICAgICAgIGNvbnN0IGhlbHBGdW5jdGlvbjEgPSBjcmVhdGVFbGVtZW50KFwibGlcIixudWxsLFwiQ2xpY2sgdGhlICdNZW51IE9wdGlvbnMnIGJ1dHRvbi5cIik7XG4gICAgICAgIGNvbnN0IGhlbHBGdW5jdGlvbjIgPSBjcmVhdGVFbGVtZW50KFwibGlcIixudWxsLFwiQ2xpY2sgb24gYSBwcm9qZWN0IHRhYi5cIik7XG4gICAgICAgIGNvbnN0IGhlbHBGdW5jdGlvbjMgPSBjcmVhdGVFbGVtZW50KFwibGlcIixudWxsLFwiQ2xpY2sgdGhlIHVwL2Rvd24gaWNvbnMuXCIpO1xuICAgICAgICBjb25zdCBoZWxwRnVuY3Rpb240ID0gY3JlYXRlRWxlbWVudChcImxpXCIsbnVsbCxcIlNlY29uZGFyeSBjbGljayBvbiBhbnkgc2lkZSB0YWIuXCIpO1xuICAgICAgICBjb25zdCBoZWxwRnVuY3Rpb241ID0gY3JlYXRlRWxlbWVudChcImxpXCIsbnVsbCxcIkNsaWNrIG9uIGEgY2hlY2tib3ggaW5zaWRlIGEgdG9kby5cIik7XG4gICAgICAgIGNvbnN0IGhlbHBGdW5jdGlvbjYgPSBjcmVhdGVFbGVtZW50KFwibGlcIixudWxsLFwiVHJ5IHJlZnJlc2hpbmcgdGhlIHBhZ2UgdG8gdGVzdCBsb2NhbCBkYXRhIHN0b3JhZ2UhXCIpO1xuICAgICAgICBsaXN0LmFwcGVuZChoZWxwRnVuY3Rpb24xLCBoZWxwRnVuY3Rpb24yLCBoZWxwRnVuY3Rpb24zLCBoZWxwRnVuY3Rpb240LCBoZWxwRnVuY3Rpb241LCBoZWxwRnVuY3Rpb242KTtcbiAgICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgfVxuXG4gICAgY29uc3QgY2xlYXJDb250ZW50QXJlYSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2hpbGUgKGNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gY29kZXMgZm9yIGRpYWxvZ3MuIFVzZSBkaWFsb2dzIGZvciBuZXcgdG9kbyBmb3Jtc1xuXG4gICAgbGV0IG5ld1RvZG9Gb3JtRGlhbG9nO1xuICAgIGxldCBkZWxldGVEaWFsb2c7XG4gICAgY29uc3QgcHJlcmVuZGVyRGlhbG9ncyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbmV3VG9kb0Zvcm1EaWFsb2cgPSBjb21wb3NlTmV3VG9kb0Zvcm1EaWFsb2coKTtcbiAgICAgICAgZGVsZXRlRGlhbG9nID0gY29tcG9zZURlbGV0ZURpYWxvZygpO1xuICAgICAgICBiYXNlQmFja2dyb3VuZC5hcHBlbmQobmV3VG9kb0Zvcm1EaWFsb2csIGRlbGV0ZURpYWxvZyk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd05ld1RvZG9Gb3JtRGlhbG9nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXJlbmRlclByb2plY3RTZWxlY3Rpb24oKTtcbiAgICAgICAgbmV3VG9kb0Zvcm1EaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgfVxuXG4gICAgY29uc3QgY2xvc2VOZXdUb2RvRm9ybURpYWxvZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbmV3VG9kb0Zvcm1EaWFsb2cucXVlcnlTZWxlY3RvcihcImZvcm1cIikucmVzZXQoKTtcbiAgICAgICAgcmVzZXRDaGVja2xpc3RGaWVsZHNUb09uZSgpO1xuICAgICAgICByZXNldFNpemVPZlRleHRhcmVhKCk7XG4gICAgICAgIG5ld1RvZG9Gb3JtRGlhbG9nLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgY29tcG9zZU5ld1RvZG9Gb3JtRGlhbG9nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCB0b2RvRm9ybURpYWxvZyA9IGNyZWF0ZUVsZW1lbnQoXCJkaWFsb2dcIiwgXCJuZXcgdG9kbyBkaWFsb2dcIik7XG4gICAgICAgIGNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgICAgIGNvbnN0IHRvZG9Gb3JtRWxlbWVudHNBcnJheSA9IE9iamVjdC52YWx1ZXMoY29tcG9zZVRvZG9Gb3JtRWxlbWVudHMoKSk7XG4gICAgICAgIGZvciAobGV0IGVsZW1lbnQgb2YgdG9kb0Zvcm1FbGVtZW50c0FycmF5KSB7XG4gICAgICAgICAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsXCJidXR0b24gY29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBjcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgXCJzdWJtaXQgYnV0dG9uXCIsIFwiU3VibWl0XCIpO1xuICAgICAgICBzdWJtaXRCdXR0b24udHlwZSA9IFwic3VibWl0XCI7XG4gICAgICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiAsXCJjYW5jZWwgYnV0dG9uXCIsIFwiQ2FuY2VsXCIpO1xuICAgICAgICBjYW5jZWxCdXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmQoY2FuY2VsQnV0dG9uLHN1Ym1pdEJ1dHRvbik7XG4gICAgICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcik7XG4gICAgICAgIHRvZG9Gb3JtRGlhbG9nLmFwcGVuZENoaWxkKHRvZG9Gb3JtKTtcbiAgICAgICAgcmV0dXJuIHRvZG9Gb3JtRGlhbG9nO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbXBvc2VUb2RvRm9ybUVsZW1lbnRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBuYW1lRmllbGRzID0gY29tcG9zZUNvbnRhaW5lZEZpZWxkRWxlbWVudChjcmVhdGVMYWJlbEFuZElucHV0KFwibmFtZVwiLCBcInRleHRcIiwgXCJUaXRsZSo6XCIsIG51bGwsIHRydWUsIDQwKSk7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uRmllbGRzID0gY29tcG9zZUNvbnRhaW5lZEZpZWxkRWxlbWVudChjcmVhdGVMYWJlbEFuZElucHV0KFwiZGVzY3JpcHRpb25cIiwgXCJ0ZXh0YXJlYVwiLCBcIkRlc2NyaXB0aW9uOlwiKSk7XG4gICAgICAgIGNvbnN0IGR1ZURhdGVGaWVsZHMgPSBjb21wb3NlQ29udGFpbmVkRmllbGRFbGVtZW50KGNyZWF0ZUxhYmVsQW5kSW5wdXQoXCJkdWVEYXRlXCIsIFwiZGF0ZVwiLCBcIkR1ZSBEYXRlOlwiKSk7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5UXVlc3Rpb24gPSBjb21wb3NlUHJpb3JpdHlSYWRpb0lucHV0KCk7XG4gICAgICAgIGNvbnN0IHByb2plY3RGaWVsZFF1ZXN0aW9uID0gY29tcG9zZVByb2plY3RTZWxlY3RJbnB1dCgpO1xuICAgICAgICBjb25zdCBjaGVja2xpc3RRdWVzdGlvbiA9IGNvbXBvc2VDaGVja2xpc3RJbnB1dEFyZWEoKTtcbiAgICAgICAgcmV0dXJuIHsgbmFtZUZpZWxkcywgZHVlRGF0ZUZpZWxkcywgcHJpb3JpdHlRdWVzdGlvbiwgcHJvamVjdEZpZWxkUXVlc3Rpb24sIGRlc2NyaXB0aW9uRmllbGRzLCBjaGVja2xpc3RRdWVzdGlvbiB9O1xuICAgIH1cblxuICAgIGNvbnN0IGNvbXBvc2VQcmlvcml0eVJhZGlvSW5wdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5UXVlc3Rpb25Db250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwicHJpb3JpdHkgcXVlc3Rpb24gYXJlYVwiKTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHlSYWRpb1F1ZXN0aW9uVGV4dCA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwicHJpb3JpdHkgdGV4dFwiLCBcIlByaW9yaXR5KjpcIik7XG4gICAgICAgIGNvbnN0IHJhZGlvQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLFwiY29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCBwcmlvcml0eUhpZ2hSYWRpb0ZpZWxkcyA9IGNyZWF0ZUxhYmVsQW5kSW5wdXQoXCJwcmlvcml0eVwiLCBcInJhZGlvXCIsIFwiSGlnaFwiLCAzLCB0cnVlKTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHlNZWRpdW1SYWRpb0ZpZWxkcyA9IGNyZWF0ZUxhYmVsQW5kSW5wdXQoXCJwcmlvcml0eVwiLCBcInJhZGlvXCIsIFwiTWVkaXVtXCIsIDIpO1xuICAgICAgICBjb25zdCBwcmlvcml0eUxvd1JhZGlvRmllbGRzID0gY3JlYXRlTGFiZWxBbmRJbnB1dChcInByaW9yaXR5XCIsIFwicmFkaW9cIiwgXCJMb3dcIiwgMSk7XG4gICAgICAgIHJhZGlvQ29udGFpbmVyLmFwcGVuZChwcmlvcml0eUhpZ2hSYWRpb0ZpZWxkcy5pbnB1dCwgcHJpb3JpdHlIaWdoUmFkaW9GaWVsZHMubGFiZWwsXG4gICAgICAgICAgICBwcmlvcml0eU1lZGl1bVJhZGlvRmllbGRzLmlucHV0LCBwcmlvcml0eU1lZGl1bVJhZGlvRmllbGRzLmxhYmVsLFxuICAgICAgICAgICAgcHJpb3JpdHlMb3dSYWRpb0ZpZWxkcy5pbnB1dCwgcHJpb3JpdHlMb3dSYWRpb0ZpZWxkcy5sYWJlbCk7XG4gICAgICAgIHByaW9yaXR5UXVlc3Rpb25Db250YWluZXIuYXBwZW5kKHByaW9yaXR5UmFkaW9RdWVzdGlvblRleHQscmFkaW9Db250YWluZXIpO1xuICAgICAgICByZXR1cm4gcHJpb3JpdHlRdWVzdGlvbkNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBjb25zdCBjb21wb3NlUHJvamVjdFNlbGVjdElucHV0ID0gZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLFwicHJvamVjdCBxdWVzdGlvbiBhcmVhXCIpO1xuICAgICAgICBjb25zdCBxdWVzdGlvblRleHQgPSBjcmVhdGVFbGVtZW50KFwicFwiLFwicHJvamVjdCB0ZXh0XCIsXCJBZGQgdG8gcHJvamVjdDogXCIpO1xuICAgICAgICBjb25zdCBzZWxlY3RFbGVtZW50ID0gY29tcG9zZVByb2plY3RTZWxlY3Rpb24oKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChxdWVzdGlvblRleHQsIHNlbGVjdEVsZW1lbnQpO1xuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbXBvc2VQcm9qZWN0U2VsZWN0aW9uID0gZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3Qgc2VsZWN0RWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiwgXCJwcm9qZWN0IHNlbGVjdGlvblwiKTtcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWVzID0gcGFnZU1hbmFnZXIuZ2V0UHJvamVjdHNBbmROYWtlZFRvZG9zKCkucHJvamVjdHMubWFwKChwcm9qZWN0KT0+KHByb2plY3QubmFtZSkpO1xuICAgICAgICBwcm9qZWN0TmFtZXMudW5zaGlmdChcIihubyBwcm9qZWN0KVwiKTtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgcHJvamVjdE5hbWVzLmxlbmd0aCA7IGkrKyl7XG4gICAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gaS0xO1xuICAgICAgICAgICAgb3B0aW9uLmlubmVyVGV4dCA9IHByb2plY3ROYW1lc1tpXTtcbiAgICAgICAgICAgIHNlbGVjdEVsZW1lbnQuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2VsZWN0RWxlbWVudDtcbiAgICB9XG5cbiAgICBjb25zdCByZXJlbmRlclByb2plY3RTZWxlY3Rpb24gPSBmdW5jdGlvbigpe1xuICAgICAgICBjb25zb2xlLmxvZyhcInByb2plY3Qgc2VsZWN0aW9uIGZvciBuZXcgdG9kbyBmb3JtIHJlcmVuZGVyZWRcIilcbiAgICAgICAgY29uc3Qgc2VsZWN0RWxlbWVudCA9IG5ld1RvZG9Gb3JtRGlhbG9nLnF1ZXJ5U2VsZWN0b3IoXCJzZWxlY3RcIik7XG4gICAgICAgIGNvbnN0IG5ld1NlbGVjdCA9IGNvbXBvc2VQcm9qZWN0U2VsZWN0aW9uKCk7XG4gICAgICAgIHNlbGVjdEVsZW1lbnQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3U2VsZWN0LHNlbGVjdEVsZW1lbnQpO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbXBvc2VDaGVja2xpc3RJbnB1dEFyZWEgPSBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsXCJjaGVja2xpc3QgcXVlc3Rpb24gYXJlYVwiKTtcbiAgICAgICAgY29uc3QgcXVlc3Rpb25UZXh0ID0gY3JlYXRlRWxlbWVudChcInBcIixcImNoZWNrbGlzdCB0ZXh0XCIsXCJNYWtlIGNoZWNrbGlzdDogXCIpO1xuICAgICAgICBjb25zdCBmaWVsZCA9IGNvbXBvc2VDb250YWluZWRGaWVsZEVsZW1lbnQoY3JlYXRlTGFiZWxBbmRJbnB1dChcImNoZWNrbGlzdFwiLCBcInRleHRcIiwgXCJUYXNrIDFcIiwgbnVsbCwgZmFsc2UpKTtcbiAgICAgICAgY29uc3QgYWRkQW5vdGhlckZpZWxkQnV0dG9uID0gY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLFwiYWRkIGNoZWNrbGlzdCBidXR0b25cIixcIitcIik7XG4gICAgICAgIGFkZEFub3RoZXJGaWVsZEJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChxdWVzdGlvblRleHQsIGZpZWxkLCBhZGRBbm90aGVyRmllbGRCdXR0b24pO1xuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH1cblxuICAgIGxldCBjaGVja2xpc3RDb3VudCA9IDI7XG4gICAgY29uc3QgYWRkQW5vdGhlckNoZWNrbGlzdEZpZWxkID0gZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgZmllbGQgPSBjb21wb3NlQ29udGFpbmVkRmllbGRFbGVtZW50KGNyZWF0ZUxhYmVsQW5kSW5wdXQoXCJjaGVja2xpc3RcIiwgXCJ0ZXh0XCIsIFwiVGFzayBcIiArIGNoZWNrbGlzdENvdW50LCBudWxsLCBmYWxzZSkpO1xuICAgICAgICBjaGVja2xpc3RDb3VudCsrO1xuICAgICAgICBjb25zdCBub2RlVG9BcHBlbmRCZWZvcmUgPSBuZXdUb2RvRm9ybURpYWxvZy5xdWVyeVNlbGVjdG9yKFwiLmFkZC5jaGVja2xpc3QuYnV0dG9uXCIpO1xuICAgICAgICBub2RlVG9BcHBlbmRCZWZvcmUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZmllbGQsIG5vZGVUb0FwcGVuZEJlZm9yZSk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzZXRDaGVja2xpc3RGaWVsZHNUb09uZSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNoZWNrbGlzdENvdW50ID0gMjtcbiAgICAgICAgY29uc3QgY2hlY2tsaXN0QXJlYSA9IG5ld1RvZG9Gb3JtRGlhbG9nLnF1ZXJ5U2VsZWN0b3IoXCIuY2hlY2tsaXN0LnF1ZXN0aW9uLmFyZWFcIik7XG4gICAgICAgIGNvbnN0IGNoZWNrbGlzdHMgPSBjaGVja2xpc3RBcmVhLnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXYuY2hlY2tsaXN0XCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhjaGVja2xpc3RzKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGk8Y2hlY2tsaXN0cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBjaGVja2xpc3RBcmVhLnJlbW92ZUNoaWxkKGNoZWNrbGlzdHNbaV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVzZXRTaXplT2ZUZXh0YXJlYSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IHRleHRhcmVhID0gbmV3VG9kb0Zvcm1EaWFsb2cucXVlcnlTZWxlY3RvcihcInRleHRhcmVhXCIpO1xuICAgICAgICB0ZXh0YXJlYS5zdHlsZS53aWR0aCA9IFwiMzc0cHhcIjtcbiAgICAgICAgdGV4dGFyZWEuc3R5bGUuaGVpZ2h0ID0gXCIxMjNweFwiO1xuICAgIH1cblxuICAgIC8vIGNvZGUgZm9yIGRlbGV0ZSBkaWFsb2dcblxuICAgIGNvbnN0IHNob3dEZWxldGVEaWFsb2cgPSBmdW5jdGlvbigpe1xuICAgICAgICBkZWxldGVEaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgICAgIHVwZGF0ZURlbGV0ZUZvcm1TZWxlY3Rpb24oKTtcbiAgICB9XG5cbiAgICBjb25zdCBjbG9zZURlbGV0ZURpYWxvZyA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGRlbGV0ZURpYWxvZy5jbG9zZSgpO1xuICAgICAgICBkZWxldGVEaWFsb2cucXVlcnlTZWxlY3RvcihcImZvcm1cIikucmVzZXQoKTtcbiAgICB9XG5cbiAgICBjb25zdCBjb21wb3NlRGVsZXRlRGlhbG9nID0gZnVuY3Rpb24oKXtcbiAgICAgICAgZGVsZXRlRGlhbG9nID0gY3JlYXRlRWxlbWVudChcImRpYWxvZ1wiLFwiZGVsZXRlIGRpYWxvZ1wiKTtcbiAgICAgICAgY29uc3QgZGVsZXRlRm9ybSA9IGNvbXBvc2VEZWxldGVGb3JtKCk7XG4gICAgICAgIGRlbGV0ZURpYWxvZy5hcHBlbmRDaGlsZChkZWxldGVGb3JtKTtcbiAgICAgICAgcmV0dXJuIGRlbGV0ZURpYWxvZztcbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGVEZWxldGVGb3JtU2VsZWN0aW9uID0gZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3Qgb2xkRGVsZXRlRm9ybSA9IGRlbGV0ZURpYWxvZy5xdWVyeVNlbGVjdG9yKFwiLmRlbGV0ZS5mb3JtXCIpO1xuICAgICAgICBjb25zdCBuZXdEZWxldGVGb3JtID0gY29tcG9zZURlbGV0ZUZvcm0oKTtcbiAgICAgICAgb2xkRGVsZXRlRm9ybS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdEZWxldGVGb3JtLCBvbGREZWxldGVGb3JtKTtcbiAgICAgICAgYmluZERlbGV0ZUZvcm1EaWFsb2dBcmVhKCk7XG4gICAgfVxuXG4gICAgY29uc3QgY29tcG9zZURlbGV0ZUZvcm0gPSBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCBkZWxldGVQcm9qZWN0UHJvbXB0ID0gY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIFwiZGVsZXRlIHByb2plY3QgbGFiZWxcIiwgXCJEZWxldGUgYW4gZW50aXJlIHByb2plY3Q6IFwiKTtcbiAgICAgICAgY29uc3QgcHJvamVjdFNlbGVjdGlvbiA9IGNvbXBvc2VQcm9qZWN0U2VsZWN0aW9uKCk7XG4gICAgICAgIGNvbnN0IGRlbGV0ZVRvZG9Qcm9tcHQgPSBjcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgXCJkZWxldGUgdG9kbyBsYWJlbFwiLCBcIkRlbGV0ZSB0b2RvOiBcIik7XG4gICAgICAgIGNvbnN0IHRvZG9TZWxlY3Rpb24gPSBjb21wb3NlVG9kb1NlbGVjdGlvbigpO1xuICAgICAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsXCJidXR0b24gY29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBjcmVhdGVFbGVtZW50KFwiaW5wdXRcIixcInN1Ym1pdCBidXR0b25cIiwgXCJTdWJtaXRcIik7XG4gICAgICAgIHN1Ym1pdEJ1dHRvbi50eXBlID0gXCJzdWJtaXRcIjtcbiAgICAgICAgY29uc3QgY2FuY2VsQnV0dG9uID0gY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBcImNhbmNlbCBidXR0b25cIiAsXCJDYW5jZWxcIik7XG4gICAgICAgIGNhbmNlbEJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZChjYW5jZWxCdXR0b24sIHN1Ym1pdEJ1dHRvbik7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBjcmVhdGVFbGVtZW50IChcImZvcm1cIixcImRlbGV0ZSBmb3JtXCIpO1xuICAgICAgICBmb3JtLmFwcGVuZChkZWxldGVQcm9qZWN0UHJvbXB0LCBwcm9qZWN0U2VsZWN0aW9uLCBkZWxldGVUb2RvUHJvbXB0LCB0b2RvU2VsZWN0aW9uLCBidXR0b25Db250YWluZXIpO1xuICAgICAgICByZXR1cm4gZm9ybTtcbiAgICB9XG5cbiAgICBjb25zdCBjb21wb3NlVG9kb1NlbGVjdGlvbiA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IHNlbGVjdEVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KFwic2VsZWN0XCIsXCJ0b2RvIHNlbGVjdGlvblwiKTtcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSBwYWdlTWFuYWdlci5nZXRQcm9qZWN0c0FuZE5ha2VkVG9kb3MoKS5wcm9qZWN0cztcbiAgICAgICAgY29uc3QgbmFrZWRUb2RvcyA9IHBhZ2VNYW5hZ2VyLmdldFByb2plY3RzQW5kTmFrZWRUb2RvcygpLnRvZG9zV2l0aG91dFByb2plY3Q7XG4gICAgICAgIGNvbnN0IG5vU2VsZWN0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKVxuICAgICAgICBub1NlbGVjdE9wdGlvbi5pbm5lclRleHQgPSBcIihubyB0b2RvKVwiO1xuICAgICAgICBub1NlbGVjdE9wdGlvbi52YWx1ZSA9IC0xO1xuICAgICAgICBzZWxlY3RFbGVtZW50LmFwcGVuZENoaWxkKG5vU2VsZWN0T3B0aW9uKTtcbiAgICAgICAgZm9yIChsZXQgcHJvamVjdCBvZiBwcm9qZWN0cyl7XG4gICAgICAgICAgICBjb25zdCBvcHRncm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRncm91cFwiKTtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RJbmRleCA9IHByb2plY3RzLmluZGV4T2YocHJvamVjdCk7XG4gICAgICAgICAgICBvcHRncm91cC5sYWJlbCA9IHByb2plY3QubmFtZTtcbiAgICAgICAgICAgIGNvbnN0IHRvZG9zID0gcHJvamVjdC5nZXRUb2RvQXJyYXkoKTtcbiAgICAgICAgICAgIGZvciAobGV0IHRvZG8gb2YgdG9kb3Mpe1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uLnZhbHVlID0gW3Byb2plY3RJbmRleCwgdG9kb3MuaW5kZXhPZih0b2RvKV07XG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uLmlubmVyVGV4dCA9IHRvZG8ubmFtZTtcbiAgICAgICAgICAgICAgICBvcHRncm91cC5hcHBlbmRDaGlsZChzZWxlY3Rpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZWN0RWxlbWVudC5hcHBlbmRDaGlsZChvcHRncm91cCk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgdG9kbyBvZiBuYWtlZFRvZG9zKXtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgICAgICBzZWxlY3Rpb24udmFsdWUgPSBbLTEsbmFrZWRUb2Rvcy5pbmRleE9mKHRvZG8pXTtcbiAgICAgICAgICAgIHNlbGVjdGlvbi5pbm5lclRleHQgPSB0b2RvLm5hbWU7XG4gICAgICAgICAgICBzZWxlY3RFbGVtZW50LmFwcGVuZENoaWxkKHNlbGVjdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNlbGVjdEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLy8gbW9zdCBiaW5kaW5nIGV2ZW50IGxpc3Rlcm5lciBmdW5jdGlvbnNcblxuICAgIGNvbnN0IGJpbmRBbGxFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGJpbmRIZWxwQnV0dG9uKCk7XG4gICAgICAgIGJpbmRTaWRlYmFyQXJlYSgpO1xuICAgICAgICBiaW5kQ29udGVudEFyZWEoKTtcbiAgICAgICAgYmluZFRvZG9Gb3JtRGlhbG9nQXJlYSgpO1xuICAgICAgICBiaW5kRGVsZXRlRm9ybURpYWxvZ0FyZWEoKTtcbiAgICB9XG5cbiAgICBjb25zdCBiaW5kSGVscEJ1dHRvbiA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IGhlbHBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlbHAuYnV0dG9uXCIpO1xuICAgICAgICBoZWxwQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKXtcbiAgICAgICAgICAgIGNsZWFyQ29udGVudEFyZWEoKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld0NvbnRlbnQgPSBjb21wb3NlRGVmYXVsdENvbnRlbnQoKTtcbiAgICAgICAgICAgIGJhc2VCYWNrZ3JvdW5kLnJlcGxhY2VDaGlsZChuZXdDb250ZW50LCBjb250ZW50KTtcbiAgICAgICAgICAgIGNvbnRlbnQgPSBuZXdDb250ZW50O1xuICAgICAgICAgICAgYmluZENvbnRlbnRBcmVhKCk7XG4gICAgfSl9O1xuXG4gICAgY29uc3QgYmluZFNpZGViYXJBcmVhID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBiaW5kRHJvcGRvd25BcmVhKCk7XG4gICAgICAgIGJpbmRBbGxQcm9qZWN0c0FuZEFueUNoaWxkVG9kb3MoKTtcbiAgICAgICAgYmluZEFsbE5ha2VkVG9kb3MoKTtcbiAgICAgICAgYmluZFVwRG93bkljb25zKCk7XG4gICAgfVxuXG4gICAgY29uc3QgYmluZERyb3Bkb3duQXJlYSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgZHJvcGRvd25CdXR0b24gPSBzaWRlYmFyLnF1ZXJ5U2VsZWN0b3IoXCIubmV3LWRyb3Bkb3duLmJ1dHRvblwiKTtcbiAgICAgICAgY29uc3QgbmV3QnV0dG9uQ29udGFpbmVyID0gc2lkZWJhci5xdWVyeVNlbGVjdG9yKFwiLm5ldy1idXR0b24uY29udGFpbmVyXCIpO1xuICAgICAgICBkcm9wZG93bkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdG9nZ2xlU2hvd0hpZGVFbGVtZW50KG5ld0J1dHRvbkNvbnRhaW5lcikpO1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0QnV0dG9uID0gbmV3QnV0dG9uQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIubmV3LnByb2plY3QuYnV0dG9uXCIpO1xuICAgICAgICBuZXdQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBwYWdlTWFuYWdlci5wcm9jZXNzTmV3UHJvamVjdCgpKTtcbiAgICAgICAgY29uc3QgbmV3VG9kb0J1dHRvbiA9IG5ld0J1dHRvbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLm5ldy50b2RvLmJ1dHRvblwiKTtcbiAgICAgICAgbmV3VG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gc2hvd05ld1RvZG9Gb3JtRGlhbG9nKCkpO1xuICAgICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBuZXdCdXR0b25Db250YWluZXIucXVlcnlTZWxlY3RvcihcIi5kZWxldGUuYnV0dG9uXCIpO1xuICAgICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHNob3dEZWxldGVEaWFsb2coKSk7XG4gICAgfVxuXG4gICAgY29uc3QgYmluZEFsbFByb2plY3RzQW5kQW55Q2hpbGRUb2RvcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdEFuZENoaWxkVG9kb0JhcnMgPSBzaWRlYmFyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdC1hbmQtY2hpbGQtdG9kby5hcmVhXCIpO1xuICAgICAgICBmb3IgKGxldCBwcm9qZWN0QW5kQ2hpbGRUb2RvQmFyIG9mIHByb2plY3RBbmRDaGlsZFRvZG9CYXJzKSB7XG4gICAgICAgICAgICBiaW5kUHJvamVjdEFuZENoaWxkVG9kb3NCYXIocHJvamVjdEFuZENoaWxkVG9kb0Jhcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBiaW5kQWxsTmFrZWRUb2RvcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgbmFrZWRUb2RvQmFycyA9IHNpZGViYXIucXVlcnlTZWxlY3RvckFsbChcIi5zaWRlYmFyLmFyZWEgPiAudG9kby5iYXIuYXJlYVwiKTtcbiAgICAgICAgZm9yIChsZXQgdG9kb0JhciBvZiBuYWtlZFRvZG9CYXJzKSB7XG4gICAgICAgICAgICBiaW5kVG9kb0Jhcih0b2RvQmFyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGJpbmRQcm9qZWN0QW5kQ2hpbGRUb2Rvc0JhciA9IGZ1bmN0aW9uIChwcm9qZWN0QW5kQ2hpbGRUb2Rvc05vZGUpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdEJhck5vZGUgPSBwcm9qZWN0QW5kQ2hpbGRUb2Rvc05vZGUucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LmJhci5hcmVhXCIpO1xuICAgICAgICBwcm9qZWN0QmFyTm9kZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gcGFnZU1hbmFnZXIudG9nZ2xlT3BlbkNsb3NlUHJvamVjdFRhYihwcm9qZWN0QW5kQ2hpbGRUb2Rvc05vZGUpKTtcbiAgICAgICAgcHJvamVjdEJhck5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImF1eGNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmVuZGVyRWRpdE5hbWVGb3JtQXRCYXIocHJvamVjdEJhck5vZGUpO1xuICAgICAgICAgICAgaGlkZUljb25zKHByb2plY3RBbmRDaGlsZFRvZG9zTm9kZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBiaW5kQ2hpbGRUb2RvQmFycyhwcm9qZWN0QmFyTm9kZSk7XG4gICAgfVxuXG4gICAgY29uc3QgYmluZENoaWxkVG9kb0JhcnMgPSBmdW5jdGlvbihwcm9qZWN0QmFyTm9kZSl7XG4gICAgICAgIGlmIChwcm9qZWN0QmFyTm9kZS5wcm9qZWN0LmdldElzVG9kb3NTaG93bigpKSB7XG4gICAgICAgICAgICBsZXQgY2hpbGRCYXJOb2RlID0gcHJvamVjdEJhck5vZGUubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICB3aGlsZSAoY2hpbGRCYXJOb2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgYmluZFRvZG9CYXIoY2hpbGRCYXJOb2RlKTtcbiAgICAgICAgICAgICAgICBjaGlsZEJhck5vZGUgPSBjaGlsZEJhck5vZGUubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBiaW5kVG9kb0JhciA9IGZ1bmN0aW9uICh0b2RvQmFyKSB7XG4gICAgICAgIHRvZG9CYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHJlcmVuZGVyQ29udGVudEFyZWEodG9kb0Jhci5vYmplY3QpKTtcbiAgICAgICAgdG9kb0Jhci5hZGRFdmVudExpc3RlbmVyKFwiYXV4Y2xpY2tcIiwgKCkgPT4gcmVuZGVyRWRpdE5hbWVGb3JtQXRCYXIodG9kb0JhcikpO1xuICAgIH1cblxuICAgIGNvbnN0IGJpbmRVcERvd25JY29ucyA9IGZ1bmN0aW9uIChwcm9qZWN0QmFyTm9kZSkge1xuICAgICAgICBsZXQgdXBJY29ucztcbiAgICAgICAgbGV0IGRvd25JY29ucztcbiAgICAgICAgLy8gaWYgYSBwcm9qZWN0IGJhciBub2RlIGlzIE5PVCBzcGVjaWZpZWQsIGJpbmQgdG8gYWxsIGljb25zXG4gICAgICAgIGlmIChwcm9qZWN0QmFyTm9kZSA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIHVwSWNvbnMgPSBzaWRlYmFyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIudXAuaWNvblwiKTtcbiAgICAgICAgICAgIGRvd25JY29ucyA9IHNpZGViYXIucXVlcnlTZWxlY3RvckFsbChcIi5kb3duLmljb25cIik7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIHVwSWNvbnMgPSBbcHJvamVjdEJhck5vZGUucXVlcnlTZWxlY3RvcihcIi51cC5pY29uXCIpXTtcbiAgICAgICAgICAgIGRvd25JY29ucyA9IFtwcm9qZWN0QmFyTm9kZS5xdWVyeVNlbGVjdG9yKFwiLmRvd24uaWNvblwiKV07XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgdXBJY29uRWxlbWVudCBvZiB1cEljb25zKXtcbiAgICAgICAgICAgIHVwSWNvbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKT0+cGFnZU1hbmFnZXIubW92ZVByb2plY3ROb2RlVXAoZSx1cEljb25FbGVtZW50LnByb2plY3RBbmRDaGlsZE5vZGUpKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBkb3duSWNvbkVsZW1lbnQgb2YgZG93bkljb25zKXtcbiAgICAgICAgICAgIGRvd25JY29uRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpPT5wYWdlTWFuYWdlci5tb3ZlUHJvamVjdE5vZGVEb3duKGUsZG93bkljb25FbGVtZW50LnByb2plY3RBbmRDaGlsZE5vZGUpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGJpbmREZWxldGVGb3JtRGlhbG9nQXJlYSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRlbGV0ZURpYWxvZy5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1pdC5idXR0b25cIik7XG4gICAgICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRlbGV0ZURpYWxvZy5xdWVyeVNlbGVjdG9yKFwiLmNhbmNlbC5idXR0b25cIik7XG4gICAgICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHBhZ2VNYW5hZ2VyLnByb2Nlc3NEZWxldGVGb3JtU3VibWl0KGUsIGRlbGV0ZURpYWxvZy5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKSkpO1xuICAgICAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlRGVsZXRlRGlhbG9nKTtcbiAgICB9XG5cbiAgICAvLyBjb250ZW50IGJpbmRpbmdcblxuICAgIGNvbnN0IHJlcmVuZGVyQ29udGVudEFyZWEgPSBmdW5jdGlvbiAodG9kb09iamVjdCkge1xuICAgICAgICBjbGVhckNvbnRlbnRBcmVhKCk7XG4gICAgICAgIHJlbmRlclRvZG9Db250ZW50KHRvZG9PYmplY3QpO1xuICAgICAgICBiaW5kQ29udGVudEFyZWEodG9kb09iamVjdCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc3dhcE5vZGVFbGVtZW50cyA9IGZ1bmN0aW9uKG9iajEsIG9iajIpIHtcbiAgICAgICAgLy8gY3JlYXRlIG1hcmtlciBlbGVtZW50IGFuZCBpbnNlcnQgaXQgd2hlcmUgb2JqMSBpc1xuICAgICAgICB2YXIgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG9iajEucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGVtcCwgb2JqMSk7XG4gICAgICAgIC8vIG1vdmUgb2JqMSB0byByaWdodCBiZWZvcmUgb2JqMlxuICAgICAgICBvYmoyLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG9iajEsIG9iajIpO1xuICAgICAgICAvLyBtb3ZlIG9iajIgdG8gcmlnaHQgYmVmb3JlIHdoZXJlIG9iajEgdXNlZCB0byBiZVxuICAgICAgICB0ZW1wLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG9iajIsIHRlbXApO1xuICAgICAgICAvLyByZW1vdmUgdGVtcG9yYXJ5IG1hcmtlciBub2RlXG4gICAgICAgIHRlbXAucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0ZW1wKTtcbiAgICB9XG5cbiAgICBjb25zdCBiaW5kQ29udGVudEFyZWEgPSBmdW5jdGlvbiAodG9kb09iamVjdCkge1xuICAgICAgICBjb25zdCBhZGRUb2RvQnV0dG9uID0gY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10b2RvLmJ1dHRvblwiKTtcbiAgICAgICAgaWYgKHRvZG9PYmplY3QgPT0gdW5kZWZpbmVkICl7XG4gICAgICAgICAgICBhZGRUb2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBzaG93TmV3VG9kb0Zvcm1EaWFsb2coKSk7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrbGlzdElucHV0cyA9IGNvbnRlbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0XCIpO1xuICAgICAgICAgICAgY29uc3QgdG9kb0NoZWNrbGlzdHMgPSB0b2RvT2JqZWN0LmdldENoZWNrbGlzdEFycmF5KCk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoZWNrbGlzdElucHV0cy5sZW5ndGggOyBpKyspe1xuICAgICAgICAgICAgICAgIGNoZWNrbGlzdElucHV0c1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PiBwYWdlTWFuYWdlci5wcm9jZXNzQ2hlY2tsaXN0VG9nZ2xlKHRvZG9DaGVja2xpc3RzW2ldLHRvZG9PYmplY3QpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGJpbmRUb2RvRm9ybURpYWxvZ0FyZWEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IG5ld1RvZG9Gb3JtRGlhbG9nLnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWl0LmJ1dHRvblwiKTtcbiAgICAgICAgY29uc3QgY2FuY2VsQnV0dG9uID0gbmV3VG9kb0Zvcm1EaWFsb2cucXVlcnlTZWxlY3RvcihcIi5jYW5jZWwuYnV0dG9uXCIpO1xuICAgICAgICBjb25zdCBhZGRBbm90aGVyRmllbGRCdXR0b24gPSBuZXdUb2RvRm9ybURpYWxvZy5xdWVyeVNlbGVjdG9yKFwiLmFkZC5jaGVja2xpc3QuYnV0dG9uXCIpO1xuICAgICAgICBjb25zdCB0b2RvRm9ybSA9IG5ld1RvZG9Gb3JtRGlhbG9nLnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuICAgICAgICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiBwYWdlTWFuYWdlci5wcm9jZXNzTmV3VG9kb0Zvcm1TdWJtaXQoZSwgdG9kb0Zvcm0pKTtcbiAgICAgICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZU5ld1RvZG9Gb3JtRGlhbG9nKTtcbiAgICAgICAgYWRkQW5vdGhlckZpZWxkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRBbm90aGVyQ2hlY2tsaXN0RmllbGQpXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgaW5pdCwgc3dhcE5vZGVFbGVtZW50cyxcbiAgICAgICAgYXBwZW5kUHJvamVjdENoaWxkVG9kb3MsIGNsZWFyUHJvamVjdENoaWxkVG9kb3MsXG4gICAgICAgIHJlbmRlckFuZEJpbmROZXdQcm9qZWN0LCBhcHBlbmROZXdUb2RvQXRJbmRleCxcbiAgICAgICAgY2xvc2VOZXdUb2RvRm9ybURpYWxvZywgYmluZENoaWxkVG9kb0JhcnMsXG4gICAgICAgIGJpbmRUb2RvQmFyLCBjbG9zZUVkaXROYW1lRm9ybSxcbiAgICAgICAgcmVtb3ZlVGFiLCBjbG9zZURlbGV0ZURpYWxvZywgZGlzcGxheUljb25zLFxuICAgICB9O1xufSgpO1xuXG5cblxuZXhwb3J0IHsgcmVuZGVyTWFuYWdlciB9OyIsIi8vIHRoaXMgbW9kdWxlIGlzIGZvciB3b3JraW5nIHdpdGggbG9jYWxTdG9yYWdlIHRvIHN0b3JlIGRhdGEgLy9cbmltcG9ydCB7IHBhZ2VNYW5hZ2VyIH0gZnJvbSBcIi4vaW5kZXguanNcIjtcbmltcG9ydCB7IGF0dGFjaFByb2plY3RNZXRob2RzLCAgfSBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XG5pbXBvcnQgeyBhdHRhY2hUb2RvTWV0aG9kcywgYXR0YWNoQ2hlY2tsaXN0TWV0aG9kcyB9IGZyb20gXCIuL3RvZG8uanNcIjtcblxuY29uc3Qgc3RvcmFnZU1hbmFnZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IHByb2plY3RzID0gW107XG4gICAgbGV0IHRvZG9zID0gW107XG4gICAgbGV0IGlzU3RvcmFnZUF2YWlsYWJsZTtcblxuICAgIGNvbnN0IHN0b3JhZ2VBdmFpbGFibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCB0ZXN0ID0gJ3Rlc3QnO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGVzdCwgdGVzdCk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh0ZXN0KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibG9jYWwgc3RvcmFnZSBhdmFpbGFibGVcIik7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJsb2NhbCBzdG9yYWdlIHVuYXZhaWxhYmxlXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgdHVyblN0b3JhZ2VPbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaXNTdG9yYWdlQXZhaWxhYmxlID0gY2hlY2tTdG9yYWdlQXZhaWxhYmxlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgY2hlY2tTdG9yYWdlQXZhaWxhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gQm9vbGVhbihzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKTtcbiAgICB9XG5cbiAgICB0dXJuU3RvcmFnZU9uKCk7XG5cbiAgICBjb25zdCBnZXRQcm9qZWN0c0FuZFRvZG9zRnJvbVN0b3JhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IHBhcnRpYWxQcm9qZWN0c0FuZFRvZG9zID0gZ2V0UGFydGlhbFByb2plY3RzQW5kVG9kb3MoKTtcbiAgICAgICAgaWYgKHBhcnRpYWxQcm9qZWN0c0FuZFRvZG9zID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgYWxlcnQoXCJObyBwcm9qZWN0cyBvciB0b2RvcyBvYnRhaW5lZCBmcm9tIHN0b3JhZ2VcIilcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFydGlhbFByb2plY3RzID0gcGFydGlhbFByb2plY3RzQW5kVG9kb3MucGFydGlhbFByb2plY3RzO1xuICAgICAgICBjb25zdCBwYXJ0aWFsVG9kb3MgPSBwYXJ0aWFsUHJvamVjdHNBbmRUb2Rvcy5wYXJ0aWFsVG9kb3M7XG4gICAgICAgIGxldCBwcm9qZWN0cyA9IFtdO1xuICAgICAgICBsZXQgdG9kb3MgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgcGFydGlhbFByb2plY3Qgb2YgcGFydGlhbFByb2plY3RzKSB7XG4gICAgICAgICAgICBwcm9qZWN0cy5wdXNoKHJlYXR0YWNoUHJvamVjdE1ldGhvZHMocGFydGlhbFByb2plY3QpKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBwYXJ0aWFsVG9kbyBvZiBwYXJ0aWFsVG9kb3MpIHtcbiAgICAgICAgICAgIHRvZG9zLnB1c2gocmVhdHRhY2hUb2RvTWV0aG9kcyhwYXJ0aWFsVG9kbykpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgcHJvamVjdHMsIHRvZG9zIH07XG4gICAgfVxuXG4gICAgY29uc3QgcmVhdHRhY2hQcm9qZWN0TWV0aG9kcyA9IGZ1bmN0aW9uIChwYXJ0aWFsKSB7XG4gICAgICAgIHBhcnRpYWwgPSBhdHRhY2hQcm9qZWN0TWV0aG9kcyhwYXJ0aWFsKTtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPCBwYXJ0aWFsLmdldFRvZG9BcnJheSgpLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB0b2RvID0gcGFydGlhbC5nZXRUb2RvQXJyYXkoKVtpXTtcbiAgICAgICAgICAgIHBhcnRpYWwudG9kb0FycmF5W2ldID0gcmVhdHRhY2hUb2RvTWV0aG9kcyh0b2RvKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGFydGlhbDtcbiAgICB9XG5cbiAgICBjb25zdCByZWF0dGFjaFRvZG9NZXRob2RzID0gZnVuY3Rpb24gKHBhcnRpYWwpIHtcbiAgICAgICAgcGFydGlhbCA9IGF0dGFjaFRvZG9NZXRob2RzKHBhcnRpYWwpO1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8IHBhcnRpYWwuZ2V0Q2hlY2tsaXN0QXJyYXkoKS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY2hlY2tsaXN0ID0gcGFydGlhbC5nZXRDaGVja2xpc3RBcnJheSgpW2ldO1xuICAgICAgICAgICAgcGFydGlhbC5jaGVja2xpc3RBcnJheVtpXSA9IHJlYXR0YWNoQ2hlY2tsaXN0TWV0aG9kcyhjaGVja2xpc3QpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXJ0aWFsO1xuICAgIH1cblxuICAgIGNvbnN0IHJlYXR0YWNoQ2hlY2tsaXN0TWV0aG9kcyA9IGZ1bmN0aW9uIChwYXJ0aWFsKSB7XG4gICAgICAgIHBhcnRpYWwgPSBhdHRhY2hDaGVja2xpc3RNZXRob2RzKHBhcnRpYWwpO1xuICAgICAgICByZXR1cm4gcGFydGlhbDtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRQYXJ0aWFsUHJvamVjdHNBbmRUb2RvcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHBhcnRpYWxQcm9qZWN0cyA9IFtdO1xuICAgICAgICBsZXQgcGFydGlhbFRvZG9zID0gW107XG4gICAgICAgIGlmICghaXNTdG9yYWdlQXZhaWxhYmxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBsZXQgcHJvamVjdEZyb21TdG9yYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oYHByb2plY3Qke2l9YCk7XG4gICAgICAgIHdoaWxlIChwcm9qZWN0RnJvbVN0b3JhZ2UgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHBhcnRpYWxQcm9qZWN0cy5wdXNoKEpTT04ucGFyc2UocHJvamVjdEZyb21TdG9yYWdlKSk7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgICBwcm9qZWN0RnJvbVN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgcHJvamVjdCR7aX1gKTtcbiAgICAgICAgfVxuICAgICAgICBpID0gMDtcbiAgICAgICAgbGV0IHRvZG9Gcm9tU3RvcmFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGB0b2RvJHtpfWApO1xuICAgICAgICB3aGlsZSAodG9kb0Zyb21TdG9yYWdlICE9PSBudWxsKSB7XG4gICAgICAgICAgICBwYXJ0aWFsVG9kb3MucHVzaChKU09OLnBhcnNlKHRvZG9Gcm9tU3RvcmFnZSkpO1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgdG9kb0Zyb21TdG9yYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oYHRvZG8ke2l9YCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgcGFydGlhbFByb2plY3RzLCBwYXJ0aWFsVG9kb3MgfVxuICAgIH1cblxuICAgIGNvbnN0IHNldEFsbFByb2plY3RzQW5kVG9kb3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNTdG9yYWdlQXZhaWxhYmxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSBwYWdlTWFuYWdlci5nZXRQcm9qZWN0c0FuZE5ha2VkVG9kb3MoKS5wcm9qZWN0cztcbiAgICAgICAgY29uc3QgdG9kb3MgPSBwYWdlTWFuYWdlci5nZXRQcm9qZWN0c0FuZE5ha2VkVG9kb3MoKS50b2Rvc1dpdGhvdXRQcm9qZWN0O1xuICAgICAgICBmb3IgKGxldCBwcm9qZWN0IG9mIHByb2plY3RzKSB7XG4gICAgICAgICAgICBzZXRQcm9qZWN0T3JUb2RvKHByb2plY3QpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IHRvZG8gb2YgdG9kb3MpIHtcbiAgICAgICAgICAgIHNldFByb2plY3RPclRvZG8odG9kbyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzZXRQcm9qZWN0T3JUb2RvID0gZnVuY3Rpb24gKG9iamVjdCkge1xuICAgICAgICBpZiAoIWlzU3RvcmFnZUF2YWlsYWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBmaW5hbEpTT047XG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gcGFnZU1hbmFnZXIuZ2V0UHJvamVjdHNBbmROYWtlZFRvZG9zKCkucHJvamVjdHM7XG4gICAgICAgIGNvbnN0IHRvZG9zID0gcGFnZU1hbmFnZXIuZ2V0UHJvamVjdHNBbmROYWtlZFRvZG9zKCkudG9kb3NXaXRob3V0UHJvamVjdDtcbiAgICAgICAgY29uc3QgcHJvamVjdEluZGV4ID0gcHJvamVjdHMuaW5kZXhPZihvYmplY3QpO1xuICAgICAgICBjb25zdCB0b2RvSW5kZXggPSB0b2Rvcy5pbmRleE9mKG9iamVjdCk7XG4gICAgICAgIGlmIChwcm9qZWN0SW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICBmaW5hbEpTT04gPSBzdHJpbmdpZnlQcm9qZWN0KG9iamVjdCk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgcHJvamVjdCR7cHJvamVjdEluZGV4fWAsIGZpbmFsSlNPTik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmaW5hbEpTT04gPSBzdHJpbmdpZnlUb2RvKG9iamVjdCk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgdG9kbyR7dG9kb0luZGV4fWAsIGZpbmFsSlNPTik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzdHJpbmdpZnlQcm9qZWN0ID0gZnVuY3Rpb24gKHByb2plY3RPYmplY3QpIHtcbiAgICAgICAgbGV0IHByb2plY3RKU09OID0gSlNPTi5zdHJpbmdpZnkocHJvamVjdE9iamVjdCk7XG4gICAgICAgIHJldHVybiBwcm9qZWN0SlNPTjtcbiAgICB9XG5cbiAgICBjb25zdCBzdHJpbmdpZnlUb2RvID0gZnVuY3Rpb24gKHRvZG9PYmplY3QpIHtcbiAgICAgICAgY29uc3QgaW5pdGlhbEpTT04gPSBKU09OLnN0cmluZ2lmeSh0b2RvT2JqZWN0KTtcbiAgICAgICAgY29uc3QgY2hlY2tsaXN0SlNPTiA9IHN0cmluZ2lmeUNoZWNrbGlzdCh0b2RvT2JqZWN0KTtcbiAgICAgICAgY29uc3QgZmluYWxUb2RvSlNPTiA9IGluc2VydENoZWNrbGlzdEpTT04oY2hlY2tsaXN0SlNPTiwgaW5pdGlhbEpTT04pO1xuICAgICAgICByZXR1cm4gZmluYWxUb2RvSlNPTjtcbiAgICB9XG5cbiAgICBjb25zdCBzdHJpbmdpZnlDaGVja2xpc3QgPSBmdW5jdGlvbiAodG9kb09iamVjdCkge1xuICAgICAgICBsZXQgSlNPTnN0cmluZyA9IFwiXCI7XG4gICAgICAgIGNvbnN0IGNoZWNrbGlzdEFycmF5ID0gdG9kb09iamVjdC5nZXRDaGVja2xpc3RBcnJheSgpO1xuICAgICAgICBmb3IgKGxldCBjaGVja2xpc3Qgb2YgY2hlY2tsaXN0QXJyYXkpIHtcbiAgICAgICAgICAgIEpTT05zdHJpbmcgKz0gSlNPTi5zdHJpbmdpZnkoY2hlY2tsaXN0KSArIFwiLCBcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoSlNPTnN0cmluZy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBKU09Oc3RyaW5nID0gSlNPTnN0cmluZy5zbGljZSgwLCAtMik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEpTT05zdHJpbmc7XG4gICAgfVxuXG4gICAgY29uc3QgaW5zZXJ0VG9kb0pTT04gPSBmdW5jdGlvbiAodG9kb0pTT04sIGluaXRpYWxKU09OKSB7XG4gICAgICAgIGNvbnN0IGluZGV4T2ZUb2RvQXJyYXlLZXkgPSBpbml0aWFsSlNPTi5pbmRleE9mKFwidG9kb0FycmF5XCIpO1xuICAgICAgICBjb25zdCBpbmRleFRvQWRkVG8gPSBpbmRleE9mVG9kb0FycmF5S2V5ICsgKCd0b2RvQXJyYXlcIjpbJyk7XG4gICAgICAgIGNvbnN0IGluZGV4VG9SZW1vdmVVcFRvID0gaW5pdGlhbEpTT04uaW5kZXhPZihcIl1cIixpbmRleFRvQWRkVG8pO1xuICAgICAgICBjb25zdCBpbnNlcnRlZEpTT04gPSBpbml0aWFsSlNPTi5zdWJzdHJpbmcoMCwgaW5kZXhUb0FkZFRvKVxuICAgICAgICAgICAgKyB0b2RvSlNPTlxuICAgICAgICAgICAgKyBpbml0aWFsSlNPTi5zdWJzdHJpbmcoaW5kZXhUb1JlbW92ZVVwVG8pO1xuICAgICAgICByZXR1cm4gaW5zZXJ0ZWRKU09OO1xuICAgIH1cblxuICAgIGNvbnN0IGluc2VydENoZWNrbGlzdEpTT04gPSBmdW5jdGlvbiAoY2hlY2tsaXN0QXJyYXlKU09OLCBpbml0aWFsSlNPTikge1xuICAgICAgICBjb25zdCBpbmRleE9mQ2hlY2tsaXN0QXJyYXlLZXkgPSBpbml0aWFsSlNPTi5pbmRleE9mKFwiY2hlY2tsaXN0QXJyYXlcIik7XG4gICAgICAgIGNvbnN0IGluZGV4VG9BZGRUbyA9IGluZGV4T2ZDaGVja2xpc3RBcnJheUtleSArICgnY2hlY2tsaXN0QXJyYXlcIjpbJykubGVuZ3RoO1xuICAgICAgICBjb25zdCBpbmRleFRvUmVtb3ZlVXBUbyA9IGluaXRpYWxKU09OLmluZGV4T2YoXCJdXCIsaW5kZXhUb0FkZFRvKTtcbiAgICAgICAgY29uc3QgaW5zZXJ0ZWRKU09OID0gaW5pdGlhbEpTT04uc3Vic3RyaW5nKDAsIGluZGV4VG9BZGRUbylcbiAgICAgICAgICAgICsgY2hlY2tsaXN0QXJyYXlKU09OXG4gICAgICAgICAgICArIGluaXRpYWxKU09OLnN1YnN0cmluZyhpbmRleFRvUmVtb3ZlVXBUbyk7XG4gICAgICAgIHJldHVybiBpbnNlcnRlZEpTT047XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlUHJvamVjdE9yVG9kbyA9IGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICAgICAgaWYgKCFpc1N0b3JhZ2VBdmFpbGFibGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IHBhZ2VNYW5hZ2VyLmdldFByb2plY3RzQW5kTmFrZWRUb2RvcygpLnByb2plY3RzO1xuICAgICAgICBjb25zdCB0b2RvcyA9IHBhZ2VNYW5hZ2VyLmdldFByb2plY3RzQW5kTmFrZWRUb2RvcygpLnRvZG9zV2l0aG91dFByb2plY3Q7XG4gICAgICAgIGNvbnN0IHByb2plY3RJbmRleCA9IHByb2plY3RzLmluZGV4T2Yob2JqZWN0KTtcbiAgICAgICAgY29uc3QgdG9kb0luZGV4ID0gdG9kb3MuaW5kZXhPZihvYmplY3QpO1xuICAgICAgICBpZiAocHJvamVjdEluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oYHByb2plY3Qke3Byb2plY3RJbmRleH1gKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGB0b2RvJHt0b2RvSW5kZXh9YCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzZXRBbGxQcm9qZWN0c0FuZFRvZG9zLCBzZXRQcm9qZWN0T3JUb2RvLFxuICAgICAgICBnZXRQcm9qZWN0c0FuZFRvZG9zRnJvbVN0b3JhZ2UsIHJlbW92ZVByb2plY3RPclRvZG8sXG4gICAgfVxuXG5cbn0oKTtcblxuZXhwb3J0IHsgc3RvcmFnZU1hbmFnZXIgfTsiLCIvLyBtb2R1bGUgZm9yIHRvZG8gYW5kIGNoZWNrbGlzdC8vXG5cbmZ1bmN0aW9uIGNyZWF0ZVRvZG8gKG5hbWUsZGVzY3JpcHRpb24sZHVlRGF0ZSxwcmlvcml0eSwuLi5jaGVja2xpc3REZXNjcmlwdGlvbnMpe1xuICAgIGxldCBpc0NvbXBsZXRlID0gZmFsc2U7XG5cbiAgICAvLyBJSUZFIHRvIGluaXRpYWxpemUgY2hlY2tsaXN0IGFycmF5IHdoZW4gdG9kbyBpcyBjcmVhdGVkXG4gICAgbGV0IGNoZWNrbGlzdEFycmF5ID0gW107XG4gICAgY29uc3QgaW5pdENoZWNrbGlzdCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGZvciAobGV0IGRlc2NyaXB0aW9uIG9mIGNoZWNrbGlzdERlc2NyaXB0aW9ucyl7XG4gICAgICAgICAgICBjaGVja2xpc3RBcnJheS5wdXNoKGNyZWF0ZUNoZWNrbGlzdChkZXNjcmlwdGlvbikpO1xuICAgICAgICB9XG4gICAgfSgpO1xuXG4gICAgY29uc3QgbWV0aG9kcyA9IHRvZG9NZXRob2REZWxlZ2F0ZSgpO1xuXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgZHVlRGF0ZSxcbiAgICAgICAgcHJpb3JpdHksXG4gICAgICAgIGlzQ29tcGxldGUsXG4gICAgICAgIGNoZWNrbGlzdEFycmF5LFxuICAgICAgICAuLi5tZXRob2RzLFxuICAgIH1cbn1cblxuY29uc3QgdG9kb01ldGhvZERlbGVnYXRlID0gZnVuY3Rpb24oKXtcblxuICAgIGNvbnN0IGdldENoZWNrbGlzdEFycmF5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGVja2xpc3RBcnJheTtcbiAgICB9XG5cbiAgICBjb25zdCBhZGRDaGVja2xpc3QgPSBmdW5jdGlvbiAobmV3Q2hlY2tsaXN0KSB7XG4gICAgICAgIHRoaXMuY2hlY2tsaXN0QXJyYXkucHVzaChuZXdDaGVja2xpc3QpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZUNoZWNrbGlzdCA9IGZ1bmN0aW9uIChjaGVja2xpc3RUb1JlbW92ZSkge1xuICAgICAgICB0aGlzLmNoZWNrbGlzdEFycmF5LnBvcChjaGVja2xpc3RUb1JlbW92ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0Q2hlY2tsaXN0QXJyYXksXG4gICAgICAgIGFkZENoZWNrbGlzdCxcbiAgICAgICAgcmVtb3ZlQ2hlY2tsaXN0LFxuICAgICAgICAuLi5jb21wbGV0ZVRvZ2dsZWFibGUoKSxcbiAgICB9XG59XG5cbmNvbnN0IGF0dGFjaFRvZG9NZXRob2RzID0gZnVuY3Rpb24ocGFydGlhbCl7XG4gICAgY29uc3QgbWV0aG9kcyA9IHRvZG9NZXRob2REZWxlZ2F0ZSgpO1xuICAgIFxuICAgIHJldHVybiB7XG4gICAgICAgIC4uLm1ldGhvZHMsXG4gICAgICAgIC4uLnBhcnRpYWwsXG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVDaGVja2xpc3QoZGVzY3JpcHRpb24pIHtcbiAgICBsZXQgaXNDb21wbGV0ZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaXNDb21wbGV0ZSxcbiAgICAgICAgLi4uY29tcGxldGVUb2dnbGVhYmxlKCksXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgIH1cbn1cblxuZnVuY3Rpb24gY29tcGxldGVUb2dnbGVhYmxlKCkge1xuXG4gICAgY29uc3QgdG9nZ2xlQ29tcGxldGUgPSBmdW5jdGlvbigpe1xuICAgICAgICB0aGlzLmlzQ29tcGxldGUgPSAhdGhpcy5pc0NvbXBsZXRlO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlRvZ2dsZWQgY29tcGxldGUgc3RhdHVzIHRvIFwiICsgdGhpcy5pc0NvbXBsZXRlKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdG9nZ2xlQ29tcGxldGUsXG4gICAgfVxufVxuXG5jb25zdCBhdHRhY2hDaGVja2xpc3RNZXRob2RzID0gZnVuY3Rpb24ocGFydGlhbCl7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICAuLi5jb21wbGV0ZVRvZ2dsZWFibGUoKSxcbiAgICAgICAgLi4ucGFydGlhbCxcbiAgICB9XG59XG5cbmV4cG9ydCB7Y3JlYXRlVG9kbywgY3JlYXRlQ2hlY2tsaXN0LCBjb21wbGV0ZVRvZ2dsZWFibGUsIGF0dGFjaFRvZG9NZXRob2RzLCBhdHRhY2hDaGVja2xpc3RNZXRob2RzfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=