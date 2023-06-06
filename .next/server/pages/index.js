module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/actions/fetch-phones.action.ts":
/*!********************************************!*\
  !*** ./src/actions/fetch-phones.action.ts ***!
  \********************************************/
/*! exports provided: useActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useActions", function() { return useActions; });
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ "recoil");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ "react-hot-toast");
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_toast__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _states__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../states */ "./src/states/index.ts");




function useActions() {
  const storage = Object(recoil__WEBPACK_IMPORTED_MODULE_0__["useRecoilValue"])(_states__WEBPACK_IMPORTED_MODULE_3__["StorageAtom"]);
  const searchTerm = Object(recoil__WEBPACK_IMPORTED_MODULE_0__["useRecoilValue"])(_states__WEBPACK_IMPORTED_MODULE_3__["SearchTermAtom"]);
  const minimumPrice = Object(recoil__WEBPACK_IMPORTED_MODULE_0__["useRecoilValue"])(_states__WEBPACK_IMPORTED_MODULE_3__["MinPriceAtom"]);
  const maximumPrice = Object(recoil__WEBPACK_IMPORTED_MODULE_0__["useRecoilValue"])(_states__WEBPACK_IMPORTED_MODULE_3__["MaxPriceAtom"]);
  const categories = Object(recoil__WEBPACK_IMPORTED_MODULE_0__["useRecoilValue"])(_states__WEBPACK_IMPORTED_MODULE_3__["CategoriesAtom"]);
  const [phones, setPhones] = Object(recoil__WEBPACK_IMPORTED_MODULE_0__["useRecoilState"])(_states__WEBPACK_IMPORTED_MODULE_3__["PhonesAtom"]);
  const [loading, setLoading] = Object(recoil__WEBPACK_IMPORTED_MODULE_0__["useRecoilState"])(_states__WEBPACK_IMPORTED_MODULE_3__["LoadingAtom"]);
  const fetchPhones = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(async () => {
    if (loading) return;
    const baseUrl = "https://api-dev.ezewholesale.com/ims/v2/inventories/prices/list?page=1&take=20&category=Cell+Phones";
    setLoading(true);
    return await new Promise((resolve, reject) => {
      const searchQuery = searchTerm ? `&searchTerm=${searchTerm}&` : ''; // const brandQuery = categories === CATEGORIES.ALL ? '&brand=Apple,Samsung,Google' : `&brand=${categories}`;
      // const brandQuery = '&brand=Apple';

      const brandQuery = '&brand=Apple,Samsung,Google';
      const fetchedPhones = [];
      fetch(`${baseUrl}${searchQuery}${brandQuery}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response => response.json()).then(response => {
        console.log(response);

        if (response.data) {
          for (const datum of response.data.data) {
            for (const item of datum.data) {
              const fetchedPhone = {
                id: item.id,
                quantity: item.quantity,
                grade: item.properties.grade,
                carrier: item.properties.carrier,
                storage: item.properties.storage,
                name: datum.name,
                imgUrl: datum.imgUrl,
                amount: item.amount
              };
              fetchedPhones.push(fetchedPhone);
            }
          }

          setPhones(fetchedPhones);
          setLoading(false);
          resolve(true);
        } else {
          react_hot_toast__WEBPACK_IMPORTED_MODULE_2__["toast"].error("An error occurred while fetching data");
          setLoading(false);
          resolve(false);
        }
      }).catch(err => {
        setLoading(false);
        react_hot_toast__WEBPACK_IMPORTED_MODULE_2__["toast"].error(err.message);
        resolve(false);
      });
    });
  }, []);
  return {
    fetchPhones
  };
}

/***/ }),

/***/ "./src/components/Dashboard/Gallery/Gadgets/index.module.scss":
/*!********************************************************************!*\
  !*** ./src/components/Dashboard/Gallery/Gadgets/index.module.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"gadgets": "Gadgets_gadgets__10ZDo",
	"singleGadget": "Gadgets_singleGadget__1zMs9",
	"photoContainer": "Gadgets_photoContainer__d_2qM",
	"gadgetPhoto": "Gadgets_gadgetPhoto__38KGz",
	"gadgetName": "Gadgets_gadgetName__1NPte",
	"gadgetStorage": "Gadgets_gadgetStorage__12t4I",
	"unitPrice": "Gadgets_unitPrice__slYRF",
	"gadgetPrice": "Gadgets_gadgetPrice__jaX7d",
	"grade": "Gadgets_grade__j5vii",
	"button": "Gadgets_button__3Idzo"
};


/***/ }),

/***/ "./src/components/Dashboard/Gallery/Gadgets/index.tsx":
/*!************************************************************!*\
  !*** ./src/components/Dashboard/Gallery/Gadgets/index.tsx ***!
  \************************************************************/
/*! exports provided: Gadgets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gadgets", function() { return Gadgets; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recoil */ "recoil");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.module.scss */ "./src/components/Dashboard/Gallery/Gadgets/index.module.scss");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _single_gadget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./single-gadget */ "./src/components/Dashboard/Gallery/Gadgets/single-gadget.tsx");
/* harmony import */ var states__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! states */ "./src/states/index.ts");
var _jsxFileName = "C:\\Users\\RAY RAY CHARM\\Documents\\GitHub\\eze-phone-gallery-ui\\src\\components\\Dashboard\\Gallery\\Gadgets\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Gadgets() {
  const phones = Object(recoil__WEBPACK_IMPORTED_MODULE_1__["useRecoilValue"])(states__WEBPACK_IMPORTED_MODULE_4__["PhonesAtom"]);
  return __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.gadgets,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, phones.map(phone => __jsx(_single_gadget__WEBPACK_IMPORTED_MODULE_3__["SingleGadget"], {
    key: phone.id,
    data: phone,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  })));
}

/***/ }),

/***/ "./src/components/Dashboard/Gallery/Gadgets/single-gadget.tsx":
/*!********************************************************************!*\
  !*** ./src/components/Dashboard/Gallery/Gadgets/single-gadget.tsx ***!
  \********************************************************************/
/*! exports provided: SingleGadget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleGadget", function() { return SingleGadget; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.module.scss */ "./src/components/Dashboard/Gallery/Gadgets/index.module.scss");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\RAY RAY CHARM\\Documents\\GitHub\\eze-phone-gallery-ui\\src\\components\\Dashboard\\Gallery\\Gadgets\\single-gadget.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function SingleGadget({
  data
}) {
  return __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.singleGadget,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.grade,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, data.grade), __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.photoContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.gadgetPhoto,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: data.imgUrl,
    alt: data.name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.gadgetName,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, data.name), __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.gadgetStorage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, data.carrier, " | ", data.storage), __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.unitPrice,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, "Unit price"), __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.gadgetPrice,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, "$", parseFloat(data.amount)), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, data.quantity, " Available"), __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.button,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, __jsx("button", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, "Buy")));
}

/***/ }),

/***/ "./src/components/Dashboard/Gallery/SideBar/MenuLists/Categories/index.tsx":
/*!*********************************************************************************!*\
  !*** ./src/components/Dashboard/Gallery/SideBar/MenuLists/Categories/index.tsx ***!
  \*********************************************************************************/
/*! exports provided: Categories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Categories", function() { return Categories; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.module.scss */ "./src/components/Dashboard/Gallery/SideBar/MenuLists/index.module.scss");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ "recoil");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _states__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../states */ "./src/states/index.ts");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../enums */ "./src/enums/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../utils */ "./src/utils/index.ts");
var _jsxFileName = "C:\\Users\\RAY RAY CHARM\\Documents\\GitHub\\eze-phone-gallery-ui\\src\\components\\Dashboard\\Gallery\\SideBar\\MenuLists\\Categories\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Categories() {
  const [categories, setCategories] = Object(recoil__WEBPACK_IMPORTED_MODULE_2__["useRecoilState"])(_states__WEBPACK_IMPORTED_MODULE_3__["CategoriesAtom"]);
  const allCategories = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["convertEnumToArray"])(_enums__WEBPACK_IMPORTED_MODULE_4__["CATEGORIES"]);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, "Categories", __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.categories,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, allCategories.map((category, index) => __jsx("div", {
    key: index,
    onClick: () => setCategories(category),
    className: categories === category ? _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.selected : "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }, category))));
}

/***/ }),

/***/ "./src/components/Dashboard/Gallery/SideBar/MenuLists/PriceFilter/index.tsx":
/*!**********************************************************************************!*\
  !*** ./src/components/Dashboard/Gallery/SideBar/MenuLists/PriceFilter/index.tsx ***!
  \**********************************************************************************/
/*! exports provided: PriceFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceFilter", function() { return PriceFilter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.module.scss */ "./src/components/Dashboard/Gallery/SideBar/MenuLists/index.module.scss");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ "recoil");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _states__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../states */ "./src/states/index.ts");
var _jsxFileName = "C:\\Users\\RAY RAY CHARM\\Documents\\GitHub\\eze-phone-gallery-ui\\src\\components\\Dashboard\\Gallery\\SideBar\\MenuLists\\PriceFilter\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function PriceFilter() {
  const [minPrice, setMinPrice] = Object(recoil__WEBPACK_IMPORTED_MODULE_2__["useRecoilState"])(_states__WEBPACK_IMPORTED_MODULE_3__["MinPriceAtom"]);
  const [maxPrice, setMaxPrice] = Object(recoil__WEBPACK_IMPORTED_MODULE_2__["useRecoilState"])(_states__WEBPACK_IMPORTED_MODULE_3__["MaxPriceAtom"]);

  function handleMinChange(event) {
    const min = parseFloat(event.target.value);
    if (min >= maxPrice) return;
    setMinPrice(min);
  }

  function handleMaxChange(event) {
    const max = parseFloat(event.target.value);
    if (max <= minPrice) return;
    setMaxPrice(max);
  }

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, "Price Filter", __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.pricefilter,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.sliders_control,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, __jsx("input", {
    id: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.fromSlider,
    type: "range",
    value: minPrice,
    min: "0",
    max: "1500",
    onChange: handleMinChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  }), __jsx("input", {
    id: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.toSlider,
    type: "range",
    value: maxPrice,
    min: "0",
    max: "1500",
    onChange: handleMaxChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.form_control,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.form_control_container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }, __jsx("input", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.form_control_container_input,
    type: "number",
    id: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.fromInput,
    value: minPrice,
    min: "0",
    max: "1000",
    onChange: handleMinChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.form_control_separator,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 21
    }
  }, "|"), __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.form_control_container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 21
    }
  }, __jsx("input", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.form_control_container_input,
    type: "number",
    id: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.toInput,
    value: maxPrice,
    min: "0",
    max: "1000",
    onChange: handleMaxChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 25
    }
  })))));
}

/***/ }),

/***/ "./src/components/Dashboard/Gallery/SideBar/MenuLists/Storage/index.tsx":
/*!******************************************************************************!*\
  !*** ./src/components/Dashboard/Gallery/SideBar/MenuLists/Storage/index.tsx ***!
  \******************************************************************************/
/*! exports provided: Storage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Storage", function() { return Storage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.module.scss */ "./src/components/Dashboard/Gallery/SideBar/MenuLists/index.module.scss");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ "recoil");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _states__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../states */ "./src/states/index.ts");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../enums */ "./src/enums/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../utils */ "./src/utils/index.ts");
var _jsxFileName = "C:\\Users\\RAY RAY CHARM\\Documents\\GitHub\\eze-phone-gallery-ui\\src\\components\\Dashboard\\Gallery\\SideBar\\MenuLists\\Storage\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Storage() {
  const [storage, setStorage] = Object(recoil__WEBPACK_IMPORTED_MODULE_2__["useRecoilState"])(_states__WEBPACK_IMPORTED_MODULE_3__["StorageAtom"]);
  const allStorage = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["convertEnumToArray"])(_enums__WEBPACK_IMPORTED_MODULE_4__["STORAGE"]);

  function addItem(item) {
    setStorage(prevStorage => {
      return prevStorage.includes(item) ? prevStorage : [...prevStorage, item];
    });
  }

  function removeItem(item) {
    setStorage(prevStorage => {
      return prevStorage.filter(value => value !== item);
    });
  }

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, "Storage", __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.storage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, allStorage.map((item, index) => __jsx("div", {
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, __jsx("label", {
    htmlFor: item,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, __jsx("input", {
    type: "checkbox",
    onClick: () => {
      storage.includes(item) ? removeItem(item) : addItem(item);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 15
    }
  }), item)))));
}

/***/ }),

/***/ "./src/components/Dashboard/Gallery/SideBar/MenuLists/index.module.scss":
/*!******************************************************************************!*\
  !*** ./src/components/Dashboard/Gallery/SideBar/MenuLists/index.module.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"menuLists": "MenuLists_menuLists__2hEaE",
	"categories": "MenuLists_categories__1JfqR",
	"pricefilter": "MenuLists_pricefilter__1VuG9",
	"storage": "MenuLists_storage__DA-s6",
	"selected": "MenuLists_selected__gFEAV",
	"sliders_control": "MenuLists_sliders_control__TKB89",
	"fromSlider": "MenuLists_fromSlider__1SOdY",
	"form_control": "MenuLists_form_control__hNQ2A",
	"form_control_separator": "MenuLists_form_control_separator__2tXGt",
	"form_control_container": "MenuLists_form_control_container__3NSpR"
};


/***/ }),

/***/ "./src/components/Dashboard/Gallery/SideBar/MenuLists/index.tsx":
/*!**********************************************************************!*\
  !*** ./src/components/Dashboard/Gallery/SideBar/MenuLists/index.tsx ***!
  \**********************************************************************/
/*! exports provided: MenuLists */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuLists", function() { return MenuLists; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.module.scss */ "./src/components/Dashboard/Gallery/SideBar/MenuLists/index.module.scss");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Categories_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Categories/index */ "./src/components/Dashboard/Gallery/SideBar/MenuLists/Categories/index.tsx");
/* harmony import */ var _PriceFilter_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PriceFilter/index */ "./src/components/Dashboard/Gallery/SideBar/MenuLists/PriceFilter/index.tsx");
/* harmony import */ var _Storage_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Storage/index */ "./src/components/Dashboard/Gallery/SideBar/MenuLists/Storage/index.tsx");
var _jsxFileName = "C:\\Users\\RAY RAY CHARM\\Documents\\GitHub\\eze-phone-gallery-ui\\src\\components\\Dashboard\\Gallery\\SideBar\\MenuLists\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function MenuLists() {
  return __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.menuLists,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx(_Categories_index__WEBPACK_IMPORTED_MODULE_2__["Categories"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }), __jsx(_PriceFilter_index__WEBPACK_IMPORTED_MODULE_3__["PriceFilter"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }), __jsx(_Storage_index__WEBPACK_IMPORTED_MODULE_4__["Storage"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }));
}

/***/ }),

/***/ "./src/components/Dashboard/Gallery/SideBar/index.module.scss":
/*!********************************************************************!*\
  !*** ./src/components/Dashboard/Gallery/SideBar/index.module.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"sidebar": "SideBar_sidebar__CxW10"
};


/***/ }),

/***/ "./src/components/Dashboard/Gallery/SideBar/index.tsx":
/*!************************************************************!*\
  !*** ./src/components/Dashboard/Gallery/SideBar/index.tsx ***!
  \************************************************************/
/*! exports provided: SideBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBar", function() { return SideBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.module.scss */ "./src/components/Dashboard/Gallery/SideBar/index.module.scss");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MenuLists__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuLists */ "./src/components/Dashboard/Gallery/SideBar/MenuLists/index.tsx");
var _jsxFileName = "C:\\Users\\RAY RAY CHARM\\Documents\\GitHub\\eze-phone-gallery-ui\\src\\components\\Dashboard\\Gallery\\SideBar\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function SideBar() {
  return __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.sidebar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx(_MenuLists__WEBPACK_IMPORTED_MODULE_2__["MenuLists"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }));
}

/***/ }),

/***/ "./src/components/Dashboard/Gallery/index.module.scss":
/*!************************************************************!*\
  !*** ./src/components/Dashboard/Gallery/index.module.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"gallery": "Gallery_gallery__bArO_"
};


/***/ }),

/***/ "./src/components/Dashboard/Gallery/index.tsx":
/*!****************************************************!*\
  !*** ./src/components/Dashboard/Gallery/index.tsx ***!
  \****************************************************/
/*! exports provided: Gallery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gallery", function() { return Gallery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SideBar_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SideBar/index */ "./src/components/Dashboard/Gallery/SideBar/index.tsx");
/* harmony import */ var _Gadgets_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Gadgets/index */ "./src/components/Dashboard/Gallery/Gadgets/index.tsx");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.module.scss */ "./src/components/Dashboard/Gallery/index.module.scss");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\RAY RAY CHARM\\Documents\\GitHub\\eze-phone-gallery-ui\\src\\components\\Dashboard\\Gallery\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Gallery() {
  return __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.gallery,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx(_SideBar_index__WEBPACK_IMPORTED_MODULE_1__["SideBar"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }), __jsx(_Gadgets_index__WEBPACK_IMPORTED_MODULE_2__["Gadgets"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }));
}

/***/ }),

/***/ "./src/components/Dashboard/Header/index.module.scss":
/*!***********************************************************!*\
  !*** ./src/components/Dashboard/Header/index.module.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Header_container__1iowp",
	"leftSection": "Header_leftSection__3oLfy",
	"form": "Header_form__vt53x",
	"title": "Header_title__3xrz7",
	"rightSection": "Header_rightSection__20Fno",
	"imgBox": "Header_imgBox__bQFAf"
};


/***/ }),

/***/ "./src/components/Dashboard/Header/index.tsx":
/*!***************************************************!*\
  !*** ./src/components/Dashboard/Header/index.tsx ***!
  \***************************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.module.scss */ "./src/components/Dashboard/Header/index.module.scss");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/ai */ "react-icons/ai");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recoil */ "recoil");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var states__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! states */ "./src/states/index.ts");
/* harmony import */ var actions_fetch_phones_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! actions/fetch-phones.action */ "./src/actions/fetch-phones.action.ts");
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hot-toast */ "react-hot-toast");
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_hot_toast__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\RAY RAY CHARM\\Documents\\GitHub\\eze-phone-gallery-ui\\src\\components\\Dashboard\\Header\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








function Header() {
  const [searchTerm, setSearchTerm] = Object(recoil__WEBPACK_IMPORTED_MODULE_3__["useRecoilState"])(states__WEBPACK_IMPORTED_MODULE_4__["SearchTermAtom"]);
  const [loading] = Object(recoil__WEBPACK_IMPORTED_MODULE_3__["useRecoilState"])(states__WEBPACK_IMPORTED_MODULE_4__["LoadingAtom"]);
  const {
    fetchPhones
  } = Object(actions_fetch_phones_action__WEBPACK_IMPORTED_MODULE_5__["useActions"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (loading) {
      react_hot_toast__WEBPACK_IMPORTED_MODULE_6__["toast"].loading("fetching phones...", {
        id: "ray"
      });
    } else {
      react_hot_toast__WEBPACK_IMPORTED_MODULE_6__["toast"].dismiss("ray");
    }
  }, [loading]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    fetchPhones();
  }, []);
  return __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.leftSection,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, "Shop our latest ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 27
    }
  }), "available stock here"), __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.form,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx("input", {
    type: "text",
    placeholder: "Enter search term (e.g iPhone x, 128GB or A1)",
    onChange: event => setSearchTerm(event.target.value),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }), __jsx("button", {
    onClick: fetchPhones,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, "Search ", __jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__["AiOutlineArrowRight"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 20
    }
  })))), __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.rightSection,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.imgBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  })));
}

/***/ }),

/***/ "./src/components/Dashboard/index.module.scss":
/*!****************************************************!*\
  !*** ./src/components/Dashboard/index.module.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Dashboard_container__Sa2h-"
};


/***/ }),

/***/ "./src/components/Dashboard/index.tsx":
/*!********************************************!*\
  !*** ./src/components/Dashboard/index.tsx ***!
  \********************************************/
/*! exports provided: Dashboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dashboard", function() { return Dashboard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header/index */ "./src/components/Dashboard/Header/index.tsx");
/* harmony import */ var _Gallery_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Gallery/index */ "./src/components/Dashboard/Gallery/index.tsx");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.module.scss */ "./src/components/Dashboard/index.module.scss");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\RAY RAY CHARM\\Documents\\GitHub\\eze-phone-gallery-ui\\src\\components\\Dashboard\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Dashboard() {
  return __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx(_Header_index__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }), __jsx(_Gallery_index__WEBPACK_IMPORTED_MODULE_2__["Gallery"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }));
}

/***/ }),

/***/ "./src/enums/categories.enum.ts":
/*!**************************************!*\
  !*** ./src/enums/categories.enum.ts ***!
  \**************************************/
/*! exports provided: CATEGORIES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CATEGORIES", function() { return CATEGORIES; });
let CATEGORIES;

(function (CATEGORIES) {
  CATEGORIES["ALL"] = "All";
  CATEGORIES["IPHONE"] = "iPhone";
  CATEGORIES["SAMSUNG"] = "Samsung";
  CATEGORIES["IPAD"] = "ipad";
  CATEGORIES["MACBOOK"] = "MacBook";
  CATEGORIES["AIRPODS"] = "AirPods";
})(CATEGORIES || (CATEGORIES = {}));

/***/ }),

/***/ "./src/enums/index.ts":
/*!****************************!*\
  !*** ./src/enums/index.ts ***!
  \****************************/
/*! exports provided: CATEGORIES, STORAGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _categories_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categories.enum */ "./src/enums/categories.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CATEGORIES", function() { return _categories_enum__WEBPACK_IMPORTED_MODULE_0__["CATEGORIES"]; });

/* harmony import */ var _storage_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.enum */ "./src/enums/storage.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STORAGE", function() { return _storage_enum__WEBPACK_IMPORTED_MODULE_1__["STORAGE"]; });




/***/ }),

/***/ "./src/enums/storage.enum.ts":
/*!***********************************!*\
  !*** ./src/enums/storage.enum.ts ***!
  \***********************************/
/*! exports provided: STORAGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORAGE", function() { return STORAGE; });
let STORAGE;

(function (STORAGE) {
  STORAGE["GB32"] = "32GB";
  STORAGE["GB64"] = "64GB";
  STORAGE["GB128"] = "128GB";
  STORAGE["GB256"] = "256GB";
})(STORAGE || (STORAGE = {}));

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Dashboard */ "./src/components/Dashboard/index.tsx");
var _jsxFileName = "C:\\Users\\RAY RAY CHARM\\Documents\\GitHub\\eze-phone-gallery-ui\\src\\pages\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Home() {
  return __jsx(components_Dashboard__WEBPACK_IMPORTED_MODULE_1__["Dashboard"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 10
    }
  });
}

/***/ }),

/***/ "./src/states/categories.atom.ts":
/*!***************************************!*\
  !*** ./src/states/categories.atom.ts ***!
  \***************************************/
/*! exports provided: CategoriesAtom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesAtom", function() { return CategoriesAtom; });
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ "recoil");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums */ "./src/enums/index.ts");


const CategoriesAtom = Object(recoil__WEBPACK_IMPORTED_MODULE_0__["atom"])({
  key: "categories",
  default: _enums__WEBPACK_IMPORTED_MODULE_1__["CATEGORIES"].ALL
});

/***/ }),

/***/ "./src/states/index.ts":
/*!*****************************!*\
  !*** ./src/states/index.ts ***!
  \*****************************/
/*! exports provided: CategoriesAtom, MaxPriceAtom, MinPriceAtom, SearchTermAtom, StorageAtom, LoadingAtom, PhonesAtom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _categories_atom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categories.atom */ "./src/states/categories.atom.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CategoriesAtom", function() { return _categories_atom__WEBPACK_IMPORTED_MODULE_0__["CategoriesAtom"]; });

/* harmony import */ var _max_price_atom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./max-price.atom */ "./src/states/max-price.atom.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaxPriceAtom", function() { return _max_price_atom__WEBPACK_IMPORTED_MODULE_1__["MaxPriceAtom"]; });

/* harmony import */ var _min_price_atom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./min-price.atom */ "./src/states/min-price.atom.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MinPriceAtom", function() { return _min_price_atom__WEBPACK_IMPORTED_MODULE_2__["MinPriceAtom"]; });

/* harmony import */ var _search_term_atom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-term.atom */ "./src/states/search-term.atom.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchTermAtom", function() { return _search_term_atom__WEBPACK_IMPORTED_MODULE_3__["SearchTermAtom"]; });

/* harmony import */ var _strorage_atom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./strorage.atom */ "./src/states/strorage.atom.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StorageAtom", function() { return _strorage_atom__WEBPACK_IMPORTED_MODULE_4__["StorageAtom"]; });

/* harmony import */ var _loading_atom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loading.atom */ "./src/states/loading.atom.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadingAtom", function() { return _loading_atom__WEBPACK_IMPORTED_MODULE_5__["LoadingAtom"]; });

/* harmony import */ var _phones_atom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./phones.atom */ "./src/states/phones.atom.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PhonesAtom", function() { return _phones_atom__WEBPACK_IMPORTED_MODULE_6__["PhonesAtom"]; });









/***/ }),

/***/ "./src/states/loading.atom.ts":
/*!************************************!*\
  !*** ./src/states/loading.atom.ts ***!
  \************************************/
/*! exports provided: LoadingAtom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingAtom", function() { return LoadingAtom; });
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ "recoil");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);

const LoadingAtom = Object(recoil__WEBPACK_IMPORTED_MODULE_0__["atom"])({
  key: "loading",
  default: false
});

/***/ }),

/***/ "./src/states/max-price.atom.ts":
/*!**************************************!*\
  !*** ./src/states/max-price.atom.ts ***!
  \**************************************/
/*! exports provided: MaxPriceAtom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaxPriceAtom", function() { return MaxPriceAtom; });
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ "recoil");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);

const MaxPriceAtom = Object(recoil__WEBPACK_IMPORTED_MODULE_0__["atom"])({
  key: "maxPrice",
  default: 1000
});

/***/ }),

/***/ "./src/states/min-price.atom.ts":
/*!**************************************!*\
  !*** ./src/states/min-price.atom.ts ***!
  \**************************************/
/*! exports provided: MinPriceAtom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinPriceAtom", function() { return MinPriceAtom; });
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ "recoil");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);

const MinPriceAtom = Object(recoil__WEBPACK_IMPORTED_MODULE_0__["atom"])({
  key: "minPrice",
  default: 100
});

/***/ }),

/***/ "./src/states/phones.atom.ts":
/*!***********************************!*\
  !*** ./src/states/phones.atom.ts ***!
  \***********************************/
/*! exports provided: PhonesAtom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhonesAtom", function() { return PhonesAtom; });
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ "recoil");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);

const PhonesAtom = Object(recoil__WEBPACK_IMPORTED_MODULE_0__["atom"])({
  key: "phones",
  default: []
});

/***/ }),

/***/ "./src/states/search-term.atom.ts":
/*!****************************************!*\
  !*** ./src/states/search-term.atom.ts ***!
  \****************************************/
/*! exports provided: SearchTermAtom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchTermAtom", function() { return SearchTermAtom; });
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ "recoil");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);

const SearchTermAtom = Object(recoil__WEBPACK_IMPORTED_MODULE_0__["atom"])({
  key: "searchTerm",
  default: ""
});

/***/ }),

/***/ "./src/states/strorage.atom.ts":
/*!*************************************!*\
  !*** ./src/states/strorage.atom.ts ***!
  \*************************************/
/*! exports provided: StorageAtom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageAtom", function() { return StorageAtom; });
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ "recoil");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);

const StorageAtom = Object(recoil__WEBPACK_IMPORTED_MODULE_0__["atom"])({
  key: "storage",
  default: []
});

/***/ }),

/***/ "./src/utils/enums-to-array.ts":
/*!*************************************!*\
  !*** ./src/utils/enums-to-array.ts ***!
  \*************************************/
/*! exports provided: convertEnumToArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertEnumToArray", function() { return convertEnumToArray; });
function convertEnumToArray(enumValue) {
  const values = [];

  for (const key in enumValue) {
    if (Object.prototype.hasOwnProperty.call(enumValue, key)) {
      values.push(enumValue[key]);
    }
  }

  return values;
}

/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/*! exports provided: convertEnumToArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enums_to_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums-to-array */ "./src/utils/enums-to-array.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "convertEnumToArray", function() { return _enums_to_array__WEBPACK_IMPORTED_MODULE_0__["convertEnumToArray"]; });



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-hot-toast":
/*!**********************************!*\
  !*** external "react-hot-toast" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-hot-toast");

/***/ }),

/***/ "react-icons/ai":
/*!*********************************!*\
  !*** external "react-icons/ai" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/ai");

/***/ }),

/***/ "recoil":
/*!*************************!*\
  !*** external "recoil" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("recoil");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvZmV0Y2gtcGhvbmVzLmFjdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9EYXNoYm9hcmQvR2FsbGVyeS9HYWRnZXRzL2luZGV4Lm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Rhc2hib2FyZC9HYWxsZXJ5L0dhZGdldHMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Rhc2hib2FyZC9HYWxsZXJ5L0dhZGdldHMvc2luZ2xlLWdhZGdldC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRGFzaGJvYXJkL0dhbGxlcnkvU2lkZUJhci9NZW51TGlzdHMvQ2F0ZWdvcmllcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRGFzaGJvYXJkL0dhbGxlcnkvU2lkZUJhci9NZW51TGlzdHMvUHJpY2VGaWx0ZXIvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Rhc2hib2FyZC9HYWxsZXJ5L1NpZGVCYXIvTWVudUxpc3RzL1N0b3JhZ2UvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Rhc2hib2FyZC9HYWxsZXJ5L1NpZGVCYXIvTWVudUxpc3RzL2luZGV4Lm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Rhc2hib2FyZC9HYWxsZXJ5L1NpZGVCYXIvTWVudUxpc3RzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9EYXNoYm9hcmQvR2FsbGVyeS9TaWRlQmFyL2luZGV4Lm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Rhc2hib2FyZC9HYWxsZXJ5L1NpZGVCYXIvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Rhc2hib2FyZC9HYWxsZXJ5L2luZGV4Lm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Rhc2hib2FyZC9HYWxsZXJ5L2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9EYXNoYm9hcmQvSGVhZGVyL2luZGV4Lm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Rhc2hib2FyZC9IZWFkZXIvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Rhc2hib2FyZC9pbmRleC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9EYXNoYm9hcmQvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9lbnVtcy9jYXRlZ29yaWVzLmVudW0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VudW1zL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9lbnVtcy9zdG9yYWdlLmVudW0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGVzL2NhdGVnb3JpZXMuYXRvbS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGVzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZXMvbG9hZGluZy5hdG9tLnRzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZXMvbWF4LXByaWNlLmF0b20udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlcy9taW4tcHJpY2UuYXRvbS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGVzL3Bob25lcy5hdG9tLnRzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZXMvc2VhcmNoLXRlcm0uYXRvbS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGVzL3N0cm9yYWdlLmF0b20udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2VudW1zLXRvLWFycmF5LnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9pbmRleC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWhvdC10b2FzdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2FpXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVjb2lsXCIiXSwibmFtZXMiOlsidXNlQWN0aW9ucyIsInN0b3JhZ2UiLCJ1c2VSZWNvaWxWYWx1ZSIsIlN0b3JhZ2VBdG9tIiwic2VhcmNoVGVybSIsIlNlYXJjaFRlcm1BdG9tIiwibWluaW11bVByaWNlIiwiTWluUHJpY2VBdG9tIiwibWF4aW11bVByaWNlIiwiTWF4UHJpY2VBdG9tIiwiY2F0ZWdvcmllcyIsIkNhdGVnb3JpZXNBdG9tIiwicGhvbmVzIiwic2V0UGhvbmVzIiwidXNlUmVjb2lsU3RhdGUiLCJQaG9uZXNBdG9tIiwibG9hZGluZyIsInNldExvYWRpbmciLCJMb2FkaW5nQXRvbSIsImZldGNoUGhvbmVzIiwidXNlQ2FsbGJhY2siLCJiYXNlVXJsIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZWFyY2hRdWVyeSIsImJyYW5kUXVlcnkiLCJmZXRjaGVkUGhvbmVzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiZGF0dW0iLCJpdGVtIiwiZmV0Y2hlZFBob25lIiwiaWQiLCJxdWFudGl0eSIsImdyYWRlIiwicHJvcGVydGllcyIsImNhcnJpZXIiLCJuYW1lIiwiaW1nVXJsIiwiYW1vdW50IiwicHVzaCIsInRvYXN0IiwiZXJyb3IiLCJjYXRjaCIsImVyciIsIm1lc3NhZ2UiLCJHYWRnZXRzIiwic3R5bGVzIiwiZ2FkZ2V0cyIsIm1hcCIsInBob25lIiwiU2luZ2xlR2FkZ2V0Iiwic2luZ2xlR2FkZ2V0IiwicGhvdG9Db250YWluZXIiLCJnYWRnZXRQaG90byIsImdhZGdldE5hbWUiLCJnYWRnZXRTdG9yYWdlIiwidW5pdFByaWNlIiwiZ2FkZ2V0UHJpY2UiLCJwYXJzZUZsb2F0IiwiYnV0dG9uIiwiQ2F0ZWdvcmllcyIsInNldENhdGVnb3JpZXMiLCJhbGxDYXRlZ29yaWVzIiwiY29udmVydEVudW1Ub0FycmF5IiwiQ0FURUdPUklFUyIsImNhdGVnb3J5IiwiaW5kZXgiLCJzZWxlY3RlZCIsIlByaWNlRmlsdGVyIiwibWluUHJpY2UiLCJzZXRNaW5QcmljZSIsIm1heFByaWNlIiwic2V0TWF4UHJpY2UiLCJoYW5kbGVNaW5DaGFuZ2UiLCJldmVudCIsIm1pbiIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlTWF4Q2hhbmdlIiwibWF4IiwicHJpY2VmaWx0ZXIiLCJzbGlkZXJzX2NvbnRyb2wiLCJmcm9tU2xpZGVyIiwidG9TbGlkZXIiLCJmb3JtX2NvbnRyb2wiLCJmb3JtX2NvbnRyb2xfY29udGFpbmVyIiwiZm9ybV9jb250cm9sX2NvbnRhaW5lcl9pbnB1dCIsImZyb21JbnB1dCIsImZvcm1fY29udHJvbF9zZXBhcmF0b3IiLCJ0b0lucHV0IiwiU3RvcmFnZSIsInNldFN0b3JhZ2UiLCJhbGxTdG9yYWdlIiwiU1RPUkFHRSIsImFkZEl0ZW0iLCJwcmV2U3RvcmFnZSIsImluY2x1ZGVzIiwicmVtb3ZlSXRlbSIsImZpbHRlciIsIk1lbnVMaXN0cyIsIm1lbnVMaXN0cyIsIlNpZGVCYXIiLCJzaWRlYmFyIiwiR2FsbGVyeSIsImdhbGxlcnkiLCJIZWFkZXIiLCJzZXRTZWFyY2hUZXJtIiwidXNlRWZmZWN0IiwiZGlzbWlzcyIsImNvbnRhaW5lciIsImxlZnRTZWN0aW9uIiwidGl0bGUiLCJmb3JtIiwicmlnaHRTZWN0aW9uIiwiaW1nQm94IiwiRGFzaGJvYXJkIiwiSG9tZSIsImF0b20iLCJrZXkiLCJkZWZhdWx0IiwiQUxMIiwiZW51bVZhbHVlIiwidmFsdWVzIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FB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WixDQUF4QixDOzs7Ozs7Ozs7Ozs7QUNIUDtBQUFBO0FBQU8sU0FBU3hELGtCQUFULENBQStCMEQsU0FBL0IsRUFBa0U7QUFDckUsUUFBTUMsTUFBVyxHQUFHLEVBQXBCOztBQUVBLE9BQUssTUFBTUosR0FBWCxJQUFrQkcsU0FBbEIsRUFBNkI7QUFDekIsUUFBSUUsTUFBTSxDQUFDQyxTQUFQLENBQWlCQyxjQUFqQixDQUFnQ0MsSUFBaEMsQ0FBcUNMLFNBQXJDLEVBQWdESCxHQUFoRCxDQUFKLEVBQTBEO0FBQ3RESSxZQUFNLENBQUNuRixJQUFQLENBQVlrRixTQUFTLENBQUNILEdBQUQsQ0FBckI7QUFDSDtBQUNKOztBQUVELFNBQU9JLE1BQVA7QUFDSCxDOzs7Ozs7Ozs7Ozs7QUNWRDtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsbUMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy9pbmRleC50c3hcIik7XG4iLCJpbXBvcnQgeyB1c2VSZWNvaWxTdGF0ZSwgdXNlUmVjb2lsVmFsdWUgfSBmcm9tIFwicmVjb2lsXCI7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENBVEVHT1JJRVMgfSBmcm9tIFwiLi4vZW51bXNcIjtcclxuaW1wb3J0IHsgUGhvbmUgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9waG9uZS5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCI7XHJcbmltcG9ydCB7XHJcbiAgU3RvcmFnZUF0b20sXHJcbiAgU2VhcmNoVGVybUF0b20sXHJcbiAgTWluUHJpY2VBdG9tLFxyXG4gIE1heFByaWNlQXRvbSxcclxuICBDYXRlZ29yaWVzQXRvbSxcclxuICBQaG9uZXNBdG9tLFxyXG4gIExvYWRpbmdBdG9tLFxyXG59IGZyb20gXCIuLi9zdGF0ZXNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VBY3Rpb25zKCkge1xyXG4gICAgY29uc3Qgc3RvcmFnZSA9IHVzZVJlY29pbFZhbHVlKFN0b3JhZ2VBdG9tKTtcclxuICAgIGNvbnN0IHNlYXJjaFRlcm0gPSB1c2VSZWNvaWxWYWx1ZShTZWFyY2hUZXJtQXRvbSk7XHJcbiAgICBjb25zdCBtaW5pbXVtUHJpY2UgPSB1c2VSZWNvaWxWYWx1ZShNaW5QcmljZUF0b20pO1xyXG4gICAgY29uc3QgbWF4aW11bVByaWNlID0gdXNlUmVjb2lsVmFsdWUoTWF4UHJpY2VBdG9tKTtcclxuICAgIGNvbnN0IGNhdGVnb3JpZXMgPSB1c2VSZWNvaWxWYWx1ZShDYXRlZ29yaWVzQXRvbSk7XHJcbiAgICBjb25zdCBbcGhvbmVzLCBzZXRQaG9uZXNdID0gdXNlUmVjb2lsU3RhdGUoUGhvbmVzQXRvbSk7XHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VSZWNvaWxTdGF0ZShMb2FkaW5nQXRvbSk7XHJcblxyXG4gICAgY29uc3QgZmV0Y2hQaG9uZXMgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGxvYWRpbmcpIHJldHVybjtcclxuICAgICAgICBjb25zdCBiYXNlVXJsID0gXCJodHRwczovL2FwaS1kZXYuZXpld2hvbGVzYWxlLmNvbS9pbXMvdjIvaW52ZW50b3JpZXMvcHJpY2VzL2xpc3Q/cGFnZT0xJnRha2U9MjAmY2F0ZWdvcnk9Q2VsbCtQaG9uZXNcIjtcclxuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG5cclxuICAgICAgICByZXR1cm4gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzZWFyY2hRdWVyeSA9IHNlYXJjaFRlcm0gPyBgJnNlYXJjaFRlcm09JHtzZWFyY2hUZXJtfSZgIDogJyc7XHJcbiAgICAgICAgICAgIC8vIGNvbnN0IGJyYW5kUXVlcnkgPSBjYXRlZ29yaWVzID09PSBDQVRFR09SSUVTLkFMTCA/ICcmYnJhbmQ9QXBwbGUsU2Ftc3VuZyxHb29nbGUnIDogYCZicmFuZD0ke2NhdGVnb3JpZXN9YDtcclxuICAgICAgICAgICAgLy8gY29uc3QgYnJhbmRRdWVyeSA9ICcmYnJhbmQ9QXBwbGUnO1xyXG4gICAgICAgICAgICBjb25zdCBicmFuZFF1ZXJ5ID0gJyZicmFuZD1BcHBsZSxTYW1zdW5nLEdvb2dsZSc7XHJcbiAgICAgICAgICAgIGNvbnN0IGZldGNoZWRQaG9uZXM6IFBob25lW10gPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGZldGNoKGAke2Jhc2VVcmx9JHtzZWFyY2hRdWVyeX0ke2JyYW5kUXVlcnl9YCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZGF0dW0gb2YgcmVzcG9uc2UuZGF0YS5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZGF0dW0uZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZldGNoZWRQaG9uZTogUGhvbmUgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWFudGl0eTogaXRlbS5xdWFudGl0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JhZGU6IGl0ZW0ucHJvcGVydGllcy5ncmFkZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FycmllcjogaXRlbS5wcm9wZXJ0aWVzLmNhcnJpZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JhZ2U6IGl0ZW0ucHJvcGVydGllcy5zdG9yYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBkYXR1bS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWdVcmw6IGRhdHVtLmltZ1VybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBpdGVtLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2hlZFBob25lcy5wdXNoKGZldGNoZWRQaG9uZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UGhvbmVzKGZldGNoZWRQaG9uZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdC5lcnJvcihcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIGZldGNoaW5nIGRhdGFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0LmVycm9yKGVyci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHJldHVybiB7ZmV0Y2hQaG9uZXN9XHJcbn1cclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZ2FkZ2V0c1wiOiBcIkdhZGdldHNfZ2FkZ2V0c19fMTBaRG9cIixcblx0XCJzaW5nbGVHYWRnZXRcIjogXCJHYWRnZXRzX3NpbmdsZUdhZGdldF9fMXpNczlcIixcblx0XCJwaG90b0NvbnRhaW5lclwiOiBcIkdhZGdldHNfcGhvdG9Db250YWluZXJfX2RfMnFNXCIsXG5cdFwiZ2FkZ2V0UGhvdG9cIjogXCJHYWRnZXRzX2dhZGdldFBob3RvX18zOEtHelwiLFxuXHRcImdhZGdldE5hbWVcIjogXCJHYWRnZXRzX2dhZGdldE5hbWVfXzFOUHRlXCIsXG5cdFwiZ2FkZ2V0U3RvcmFnZVwiOiBcIkdhZGdldHNfZ2FkZ2V0U3RvcmFnZV9fMTJ0NElcIixcblx0XCJ1bml0UHJpY2VcIjogXCJHYWRnZXRzX3VuaXRQcmljZV9fc2xZUkZcIixcblx0XCJnYWRnZXRQcmljZVwiOiBcIkdhZGdldHNfZ2FkZ2V0UHJpY2VfX2phWDdkXCIsXG5cdFwiZ3JhZGVcIjogXCJHYWRnZXRzX2dyYWRlX19qNXZpaVwiLFxuXHRcImJ1dHRvblwiOiBcIkdhZGdldHNfYnV0dG9uX18zSWR6b1wiXG59O1xuIiwiaW1wb3J0IHsgdXNlUmVjb2lsVmFsdWUgfSBmcm9tIFwicmVjb2lsXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vaW5kZXgubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IHsgU2luZ2xlR2FkZ2V0IH0gZnJvbSBcIi4vc2luZ2xlLWdhZGdldFwiO1xyXG5pbXBvcnQgeyBQaG9uZXNBdG9tIH0gZnJvbSBcInN0YXRlc1wiO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHYWRnZXRzKCl7XHJcbiAgICBjb25zdCBwaG9uZXMgPSB1c2VSZWNvaWxWYWx1ZShQaG9uZXNBdG9tKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdhZGdldHN9PlxyXG4gICAgICAgICAgICB7cGhvbmVzLm1hcChwaG9uZSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8U2luZ2xlR2FkZ2V0IGtleT17cGhvbmUuaWR9IGRhdGE9e3Bob25lfSAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuIiwiaW1wb3J0IHsgUGhvbmUgfSBmcm9tIFwiaW50ZXJmYWNlcy9waG9uZS5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9pbmRleC5tb2R1bGUuc2Nzc1wiO1xyXG5pbnRlcmZhY2UgU2luZ2xlR2FkZ2V0UHJvcHMge1xyXG4gICAgZGF0YTogUGhvbmUsXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTaW5nbGVHYWRnZXQoeyBkYXRhIH06IFNpbmdsZUdhZGdldFByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2luZ2xlR2FkZ2V0fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmFkZX0+XHJcbiAgICAgICAgICAgICAgICB7ZGF0YS5ncmFkZX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG9Db250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5nYWRnZXRQaG90b30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2RhdGEuaW1nVXJsfSBhbHQ9e2RhdGEubmFtZX0vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdhZGdldE5hbWV9PlxyXG4gICAgICAgICAgICAgICAge2RhdGEubmFtZX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ2FkZ2V0U3RvcmFnZX0+XHJcbiAgICAgICAgICAgICAgICB7ZGF0YS5jYXJyaWVyfSB8IHtkYXRhLnN0b3JhZ2V9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVuaXRQcmljZX0+XHJcbiAgICAgICAgICAgICAgICBVbml0IHByaWNlXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdhZGdldFByaWNlfT5cclxuICAgICAgICAgICAgICAgICR7cGFyc2VGbG9hdChkYXRhLmFtb3VudCl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge2RhdGEucXVhbnRpdHl9IEF2YWlsYWJsZVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICBCdXlcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9pbmRleC5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgeyB1c2VSZWNvaWxTdGF0ZSB9IGZyb20gXCJyZWNvaWxcIjtcclxuaW1wb3J0IHsgQ2F0ZWdvcmllc0F0b20gfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vc3RhdGVzXCI7XHJcbmltcG9ydCB7IENBVEVHT1JJRVMgfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vZW51bXNcIjtcclxuaW1wb3J0IHsgY29udmVydEVudW1Ub0FycmF5IH0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL3V0aWxzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ2F0ZWdvcmllcygpIHtcclxuICAgIGNvbnN0IFtjYXRlZ29yaWVzLCBzZXRDYXRlZ29yaWVzXSA9IHVzZVJlY29pbFN0YXRlKENhdGVnb3JpZXNBdG9tKTtcclxuICAgIGNvbnN0IGFsbENhdGVnb3JpZXMgPSBjb252ZXJ0RW51bVRvQXJyYXkoQ0FURUdPUklFUyk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICBDYXRlZ29yaWVzXHJcbiAgICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3JpZXN9PlxyXG4gICAgICAgICAgICAgICAge2FsbENhdGVnb3JpZXMubWFwKChjYXRlZ29yeSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRDYXRlZ29yaWVzKGNhdGVnb3J5KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjYXRlZ29yaWVzID09PSBjYXRlZ29yeSA/IHN0eWxlcy5zZWxlY3RlZCA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9pbmRleC5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgeyB1c2VSZWNvaWxTdGF0ZSB9IGZyb20gXCJyZWNvaWxcIjtcclxuaW1wb3J0IHsgTWF4UHJpY2VBdG9tLCBNaW5QcmljZUF0b20gfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vc3RhdGVzXCI7XHJcbmltcG9ydCB7IENoYW5nZUV2ZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUHJpY2VGaWx0ZXIoKSB7XHJcbiAgICBjb25zdCBbbWluUHJpY2UsIHNldE1pblByaWNlXSA9IHVzZVJlY29pbFN0YXRlKE1pblByaWNlQXRvbSk7XHJcbiAgICBjb25zdCBbbWF4UHJpY2UsIHNldE1heFByaWNlXSA9IHVzZVJlY29pbFN0YXRlKE1heFByaWNlQXRvbSk7XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlTWluQ2hhbmdlKGV2ZW50OiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pil7XHJcbiAgICAgICAgY29uc3QgbWluID0gcGFyc2VGbG9hdChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIGlmIChtaW4gPj0gbWF4UHJpY2UpIHJldHVybjtcclxuICAgICAgICBzZXRNaW5QcmljZShtaW4pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZU1heENoYW5nZShldmVudDogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pe1xyXG4gICAgICAgIGNvbnN0IG1heCA9IHBhcnNlRmxvYXQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICBpZiAobWF4IDw9IG1pblByaWNlKSByZXR1cm47XHJcbiAgICAgICAgc2V0TWF4UHJpY2UobWF4KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIFByaWNlIEZpbHRlclxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByaWNlZmlsdGVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2xpZGVyc19jb250cm9sfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtzdHlsZXMuZnJvbVNsaWRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhbmdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e21pblByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW49XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4PVwiMTUwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVNaW5DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e3N0eWxlcy50b1NsaWRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhbmdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e21heFByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW49XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4PVwiMTUwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVNYXhDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtX2NvbnRyb2x9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybV9jb250cm9sX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybV9jb250cm9sX2NvbnRhaW5lcl9pbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtzdHlsZXMuZnJvbUlucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e21pblByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg9XCIxMDAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVNaW5DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtX2NvbnRyb2xfc2VwYXJhdG9yfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybV9jb250cm9sX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybV9jb250cm9sX2NvbnRhaW5lcl9pbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e3N0eWxlcy50b0lucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e21heFByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg9XCIxMDAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVNYXhDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9pbmRleC5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgeyB1c2VSZWNvaWxTdGF0ZSB9IGZyb20gXCJyZWNvaWxcIjtcclxuaW1wb3J0IHsgU3RvcmFnZUF0b20gfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vc3RhdGVzXCI7XHJcbmltcG9ydCB7IFNUT1JBR0UgfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vZW51bXNcIjtcclxuaW1wb3J0IHsgY29udmVydEVudW1Ub0FycmF5IH0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL3V0aWxzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU3RvcmFnZSgpIHtcclxuICBjb25zdCBbc3RvcmFnZSwgc2V0U3RvcmFnZV0gPSB1c2VSZWNvaWxTdGF0ZShTdG9yYWdlQXRvbSk7XHJcbiAgY29uc3QgYWxsU3RvcmFnZSA9IGNvbnZlcnRFbnVtVG9BcnJheShTVE9SQUdFKTtcclxuXHJcbiAgZnVuY3Rpb24gYWRkSXRlbShpdGVtOiBTVE9SQUdFKTogdm9pZCB7XHJcbiAgICBzZXRTdG9yYWdlKChwcmV2U3RvcmFnZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcHJldlN0b3JhZ2UuaW5jbHVkZXMoaXRlbSkgPyBwcmV2U3RvcmFnZSA6IFsuLi5wcmV2U3RvcmFnZSwgaXRlbV07XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlbW92ZUl0ZW0oaXRlbTogU1RPUkFHRSk6IHZvaWQge1xyXG4gICAgc2V0U3RvcmFnZSgocHJldlN0b3JhZ2UpID0+IHtcclxuICAgICAgcmV0dXJuIHByZXZTdG9yYWdlLmZpbHRlcih2YWx1ZSA9PiB2YWx1ZSAhPT0gaXRlbSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICBTdG9yYWdlXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RvcmFnZX0+XHJcbiAgICAgICAge2FsbFN0b3JhZ2UubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2l0ZW19PlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc3RvcmFnZS5pbmNsdWRlcyhpdGVtKSA/IFxyXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUl0ZW0oaXRlbSkgOiBhZGRJdGVtKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIHtpdGVtfVxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtZW51TGlzdHNcIjogXCJNZW51TGlzdHNfbWVudUxpc3RzX18yaEVhRVwiLFxuXHRcImNhdGVnb3JpZXNcIjogXCJNZW51TGlzdHNfY2F0ZWdvcmllc19fMUpmcVJcIixcblx0XCJwcmljZWZpbHRlclwiOiBcIk1lbnVMaXN0c19wcmljZWZpbHRlcl9fMVZ1RzlcIixcblx0XCJzdG9yYWdlXCI6IFwiTWVudUxpc3RzX3N0b3JhZ2VfX0RBLXM2XCIsXG5cdFwic2VsZWN0ZWRcIjogXCJNZW51TGlzdHNfc2VsZWN0ZWRfX2dGRUFWXCIsXG5cdFwic2xpZGVyc19jb250cm9sXCI6IFwiTWVudUxpc3RzX3NsaWRlcnNfY29udHJvbF9fVEtCODlcIixcblx0XCJmcm9tU2xpZGVyXCI6IFwiTWVudUxpc3RzX2Zyb21TbGlkZXJfXzFTT2RZXCIsXG5cdFwiZm9ybV9jb250cm9sXCI6IFwiTWVudUxpc3RzX2Zvcm1fY29udHJvbF9faE5RMkFcIixcblx0XCJmb3JtX2NvbnRyb2xfc2VwYXJhdG9yXCI6IFwiTWVudUxpc3RzX2Zvcm1fY29udHJvbF9zZXBhcmF0b3JfXzJ0WEd0XCIsXG5cdFwiZm9ybV9jb250cm9sX2NvbnRhaW5lclwiOiBcIk1lbnVMaXN0c19mb3JtX2NvbnRyb2xfY29udGFpbmVyX18zTlNwUlwiXG59O1xuIiwiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9pbmRleC5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgeyBDYXRlZ29yaWVzIH0gZnJvbSBcIi4vQ2F0ZWdvcmllcy9pbmRleFwiO1xyXG5pbXBvcnQgeyBQcmljZUZpbHRlciB9IGZyb20gXCIuL1ByaWNlRmlsdGVyL2luZGV4XCI7XHJcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tIFwiLi9TdG9yYWdlL2luZGV4XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTWVudUxpc3RzKCl7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVudUxpc3RzfT5cclxuICAgICAgICAgICAgPENhdGVnb3JpZXMgLz5cclxuICAgICAgICAgICAgPFByaWNlRmlsdGVyIC8+XHJcbiAgICAgICAgICAgIDxTdG9yYWdlIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic2lkZWJhclwiOiBcIlNpZGVCYXJfc2lkZWJhcl9fQ3hXMTBcIlxufTtcbiIsImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vaW5kZXgubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IHsgTWVudUxpc3RzIH0gZnJvbSBcIi4vTWVudUxpc3RzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2lkZUJhcigpe1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNpZGViYXJ9PlxyXG4gICAgICAgICAgICA8TWVudUxpc3RzIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJnYWxsZXJ5XCI6IFwiR2FsbGVyeV9nYWxsZXJ5X19iQXJPX1wiXG59O1xuIiwiaW1wb3J0IHsgU2lkZUJhciB9IGZyb20gXCIuL1NpZGVCYXIvaW5kZXhcIjtcclxuaW1wb3J0IHsgR2FkZ2V0cyB9IGZyb20gXCIuL0dhZGdldHMvaW5kZXhcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9pbmRleC5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdhbGxlcnkoKXtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5nYWxsZXJ5fT5cclxuICAgICAgICAgICAgPFNpZGVCYXIgLz5cclxuICAgICAgICAgICAgPEdhZGdldHMgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkhlYWRlcl9jb250YWluZXJfXzFpb3dwXCIsXG5cdFwibGVmdFNlY3Rpb25cIjogXCJIZWFkZXJfbGVmdFNlY3Rpb25fXzNvTGZ5XCIsXG5cdFwiZm9ybVwiOiBcIkhlYWRlcl9mb3JtX192dDUzeFwiLFxuXHRcInRpdGxlXCI6IFwiSGVhZGVyX3RpdGxlX18zeHJ6N1wiLFxuXHRcInJpZ2h0U2VjdGlvblwiOiBcIkhlYWRlcl9yaWdodFNlY3Rpb25fXzIwRm5vXCIsXG5cdFwiaW1nQm94XCI6IFwiSGVhZGVyX2ltZ0JveF9fYlFGQWZcIlxufTtcbiIsImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vaW5kZXgubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IHsgQWlPdXRsaW5lQXJyb3dSaWdodCB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xyXG5pbXBvcnQgeyB1c2VSZWNvaWxTdGF0ZSB9IGZyb20gXCJyZWNvaWxcIjtcclxuaW1wb3J0IHsgU2VhcmNoVGVybUF0b20gfSBmcm9tIFwic3RhdGVzXCI7XHJcbmltcG9ydCB7IHVzZUFjdGlvbnMgfSBmcm9tIFwiYWN0aW9ucy9mZXRjaC1waG9uZXMuYWN0aW9uXCI7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LWhvdC10b2FzdFwiO1xyXG5pbXBvcnQgeyBMb2FkaW5nQXRvbSB9IGZyb20gXCJzdGF0ZXNcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gIGNvbnN0IFtzZWFyY2hUZXJtLCBzZXRTZWFyY2hUZXJtXSA9IHVzZVJlY29pbFN0YXRlKFNlYXJjaFRlcm1BdG9tKTtcclxuICBjb25zdCBbbG9hZGluZ10gPSB1c2VSZWNvaWxTdGF0ZShMb2FkaW5nQXRvbSk7XHJcbiAgY29uc3QgeyBmZXRjaFBob25lcyB9ID0gdXNlQWN0aW9ucygpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAobG9hZGluZykge1xyXG4gICAgICAgIHRvYXN0LmxvYWRpbmcoXCJmZXRjaGluZyBwaG9uZXMuLi5cIiwge2lkOiBcInJheVwifSk7XHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgICAgdG9hc3QuZGlzbWlzcyhcInJheVwiKTtcclxuICAgIH1cclxuICB9LCBbbG9hZGluZ10pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaFBob25lcygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZWZ0U2VjdGlvbn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XHJcbiAgICAgICAgICBTaG9wIG91ciBsYXRlc3QgPGJyIC8+XHJcbiAgICAgICAgICBhdmFpbGFibGUgc3RvY2sgaGVyZVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybX0+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHNlYXJjaCB0ZXJtIChlLmcgaVBob25lIHgsIDEyOEdCIG9yIEExKVwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldFNlYXJjaFRlcm0oZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2ZldGNoUGhvbmVzfT5cclxuICAgICAgICAgICAgU2VhcmNoIDxBaU91dGxpbmVBcnJvd1JpZ2h0IC8+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmlnaHRTZWN0aW9ufT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltZ0JveH0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkRhc2hib2FyZF9jb250YWluZXJfX1NhMmgtXCJcbn07XG4iLCJpbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwiLi9IZWFkZXIvaW5kZXhcIjtcclxuaW1wb3J0IHsgR2FsbGVyeSB9IGZyb20gXCIuL0dhbGxlcnkvaW5kZXhcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9pbmRleC5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIERhc2hib2FyZCgpe1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgICAgPEdhbGxlcnkgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSIsImV4cG9ydCBlbnVtIENBVEVHT1JJRVMge1xyXG4gICAgQUxMID0gXCJBbGxcIixcclxuICAgIElQSE9ORSA9IFwiaVBob25lXCIsXHJcbiAgICBTQU1TVU5HID0gXCJTYW1zdW5nXCIsXHJcbiAgICBJUEFEID0gXCJpcGFkXCIsXHJcbiAgICBNQUNCT09LID0gXCJNYWNCb29rXCIsXHJcbiAgICBBSVJQT0RTID0gXCJBaXJQb2RzXCIsXHJcbn1cclxuIiwiZXhwb3J0ICogZnJvbSBcIi4vY2F0ZWdvcmllcy5lbnVtXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3N0b3JhZ2UuZW51bVwiOyIsImV4cG9ydCBlbnVtIFNUT1JBR0Uge1xyXG4gICAgR0IzMiA9IFwiMzJHQlwiLFxyXG4gICAgR0I2NCA9IFwiNjRHQlwiLFxyXG4gICAgR0IxMjggPSBcIjEyOEdCXCIsXHJcbiAgICBHQjI1NiA9IFwiMjU2R0JcIixcclxufSIsImltcG9ydCB7IERhc2hib2FyZCB9IGZyb20gJ2NvbXBvbmVudHMvRGFzaGJvYXJkJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gPERhc2hib2FyZCAvPlxufVxuIiwiaW1wb3J0IHsgYXRvbSB9IGZyb20gXCJyZWNvaWxcIjtcclxuaW1wb3J0IHsgQ0FURUdPUklFUyB9IGZyb20gXCIuLi9lbnVtc1wiXHJcblxyXG5leHBvcnQgY29uc3QgQ2F0ZWdvcmllc0F0b20gPSBhdG9tPENBVEVHT1JJRVM+KHtcclxuICAgIGtleTogXCJjYXRlZ29yaWVzXCIsXHJcbiAgICBkZWZhdWx0OiBDQVRFR09SSUVTLkFMTCxcclxufSk7IiwiZXhwb3J0ICogZnJvbSBcIi4vY2F0ZWdvcmllcy5hdG9tXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL21heC1wcmljZS5hdG9tXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL21pbi1wcmljZS5hdG9tXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3NlYXJjaC10ZXJtLmF0b21cIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc3Ryb3JhZ2UuYXRvbVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9sb2FkaW5nLmF0b21cIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vcGhvbmVzLmF0b21cIjsiLCJpbXBvcnQgeyBhdG9tIH0gZnJvbSBcInJlY29pbFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExvYWRpbmdBdG9tID0gYXRvbTxib29sZWFuPih7XHJcbiAgICBrZXk6IFwibG9hZGluZ1wiLFxyXG4gICAgZGVmYXVsdDogZmFsc2UsXHJcbn0pOyIsImltcG9ydCB7IGF0b20gfSBmcm9tIFwicmVjb2lsXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTWF4UHJpY2VBdG9tID0gYXRvbTxudW1iZXI+KHtcclxuICAgIGtleTogXCJtYXhQcmljZVwiLFxyXG4gICAgZGVmYXVsdDogMTAwMCxcclxufSk7IiwiaW1wb3J0IHsgYXRvbSB9IGZyb20gXCJyZWNvaWxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBNaW5QcmljZUF0b20gPSBhdG9tPG51bWJlcj4oe1xyXG4gICAga2V5OiBcIm1pblByaWNlXCIsXHJcbiAgICBkZWZhdWx0OiAxMDAsXHJcbn0pOyIsImltcG9ydCB7IGF0b20gfSBmcm9tIFwicmVjb2lsXCI7XHJcbmltcG9ydCB7IFBob25lIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvcGhvbmUuaW50ZXJmYWNlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUGhvbmVzQXRvbSA9IGF0b208UGhvbmVbXT4oe1xyXG4gICAga2V5OiBcInBob25lc1wiLFxyXG4gICAgZGVmYXVsdDogW10sXHJcbn0pOyIsImltcG9ydCB7IGF0b20gfSBmcm9tIFwicmVjb2lsXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU2VhcmNoVGVybUF0b20gPSBhdG9tPHN0cmluZz4oe1xyXG4gICAga2V5OiBcInNlYXJjaFRlcm1cIixcclxuICAgIGRlZmF1bHQ6IFwiXCJcclxufSk7IiwiaW1wb3J0IHsgYXRvbSB9IGZyb20gXCJyZWNvaWxcIjtcclxuaW1wb3J0IHsgU1RPUkFHRSB9IGZyb20gXCIuLi9lbnVtc1wiXHJcblxyXG5leHBvcnQgY29uc3QgU3RvcmFnZUF0b20gPSBhdG9tPFNUT1JBR0VbXT4oe1xyXG4gICAga2V5OiBcInN0b3JhZ2VcIixcclxuICAgIGRlZmF1bHQ6IFtdLFxyXG59KTsiLCJleHBvcnQgZnVuY3Rpb24gY29udmVydEVudW1Ub0FycmF5PFQ+KGVudW1WYWx1ZTogUmVjb3JkPHN0cmluZywgVD4pOiBUW10ge1xyXG4gICAgY29uc3QgdmFsdWVzOiBUW10gPSBbXTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBlbnVtVmFsdWUpIHtcclxuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGVudW1WYWx1ZSwga2V5KSkge1xyXG4gICAgICAgICAgICB2YWx1ZXMucHVzaChlbnVtVmFsdWVba2V5XSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2YWx1ZXM7XHJcbn0iLCJleHBvcnQgKiBmcm9tIFwiLi9lbnVtcy10by1hcnJheVwiOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWhvdC10b2FzdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9haVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWNvaWxcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==