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
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums */ "./src/enums/index.ts");
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-toast */ "react-hot-toast");
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_hot_toast__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _states__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../states */ "./src/states/index.ts");





function useActions() {
  const storage = Object(recoil__WEBPACK_IMPORTED_MODULE_0__["useRecoilValue"])(_states__WEBPACK_IMPORTED_MODULE_4__["StorageAtom"]);
  const searchTerm = Object(recoil__WEBPACK_IMPORTED_MODULE_0__["useRecoilValue"])(_states__WEBPACK_IMPORTED_MODULE_4__["SearchTermAtom"]);
  const minimumPrice = Object(recoil__WEBPACK_IMPORTED_MODULE_0__["useRecoilValue"])(_states__WEBPACK_IMPORTED_MODULE_4__["MinPriceAtom"]);
  const maximumPrice = Object(recoil__WEBPACK_IMPORTED_MODULE_0__["useRecoilValue"])(_states__WEBPACK_IMPORTED_MODULE_4__["MaxPriceAtom"]);
  const categories = Object(recoil__WEBPACK_IMPORTED_MODULE_0__["useRecoilValue"])(_states__WEBPACK_IMPORTED_MODULE_4__["CategoriesAtom"]);
  const [phones, setPhones] = Object(recoil__WEBPACK_IMPORTED_MODULE_0__["useRecoilState"])(_states__WEBPACK_IMPORTED_MODULE_4__["PhonesAtom"]);
  const [loading, setLoading] = Object(recoil__WEBPACK_IMPORTED_MODULE_0__["useRecoilState"])(_states__WEBPACK_IMPORTED_MODULE_4__["LoadingAtom"]);
  const fetchPhones = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(async () => {
    if (loading) return;
    const baseUrl = "https://api-dev.ezewholesale.com/ims/v2/inventories/prices/list?page=1&take=50";
    setLoading(true);
    return await new Promise((resolve, reject) => {
      const categoryQuery = categories === _enums__WEBPACK_IMPORTED_MODULE_2__["CATEGORIES"].MACBOOK ? "&category=Laptops" : "&category=Cell+Phones";
      const searchQuery = searchTerm ? `&searchTerm=${searchTerm}` : ''; // const brandQuery = categories === CATEGORIES.ALL ? '&brand=Apple,Samsung,Google' : `&brand=${categories}`;
      // const brandQuery = '&brand=Apple,Samsung,Google';

      const brandQuery = categories === _enums__WEBPACK_IMPORTED_MODULE_2__["CATEGORIES"].IPHONE || categories === _enums__WEBPACK_IMPORTED_MODULE_2__["CATEGORIES"].MACBOOK ? "&brand=Apple" : categories === _enums__WEBPACK_IMPORTED_MODULE_2__["CATEGORIES"].ALL ? "&brand=Apple,Samsung,Google" : `&brand=${categories}`;
      const fetchedPhones = [];
      fetch(`${baseUrl}${categoryQuery}${searchQuery}${brandQuery}`, {
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
          react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["toast"].error("An error occurred while fetching data");
          setLoading(false);
          resolve(false);
        }
      }).catch(err => {
        setLoading(false);
        react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["toast"].error(err.message);
        resolve(false);
      });
    });
  }, [searchTerm, categories]);
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
  }, phones.map((phone, index) => __jsx(_single_gadget__WEBPACK_IMPORTED_MODULE_3__["SingleGadget"], {
    key: phone.id + index,
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
  CATEGORIES["GOOGLE"] = "Google";
  CATEGORIES["MACBOOK"] = "MacBook";
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
  key: "categoriesAtom",
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
  key: "loadingAtom",
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
  key: "maxPriceAtom",
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
  key: "minPriceAtom",
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
  key: "phonesAtom",
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
  key: "searchTermAtom",
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
  key: "storageAtom",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvZmV0Y2gtcGhvbmVzLmFjdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9EYXNoYm9hcmQvR2FsbGVyeS9HYWRnZXRzL2luZGV4Lm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Rhc2hib2FyZC9HYWxsZXJ5L0dhZGdldHMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Rhc2hib2FyZC9HYWxsZXJ5L0dhZGdldHMvc2luZ2xlLWdhZGdldC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRGFzaGJvYXJkL0dhbGxlcnkvU2lkZUJhci9NZW51TGlzdHMvQ2F0ZWdvcmllcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRGFzaGJvYXJkL0dhbGxlcnkvU2lkZUJhci9NZW51TGlzdHMvUHJpY2VGaWx0ZXIvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Rhc2hib2FyZC9HYWxsZXJ5L1NpZGVCYXIvTWVudUxpc3RzL1N0b3JhZ2UvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Rhc2hib2FyZC9HYWxsZXJ5L1NpZGVCYXIvTWVudUxpc3RzL2luZGV4Lm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Rhc2hib2FyZC9HYWxsZXJ5L1NpZGVCYXIvTWVudUxpc3RzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9EYXNoYm9hcmQvR2FsbGVyeS9TaWRlQmFyL2luZGV4Lm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Rhc2hib2FyZC9HYWxsZXJ5L1NpZGVCYXIvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Rhc2hib2FyZC9HYWxsZXJ5L2luZGV4Lm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Rhc2hib2FyZC9HYWxsZXJ5L2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9EYXNoYm9hcmQvSGVhZGVyL2luZGV4Lm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Rhc2hib2FyZC9IZWFkZXIvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Rhc2hib2FyZC9pbmRleC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9EYXNoYm9hcmQvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9lbnVtcy9jYXRlZ29yaWVzLmVudW0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VudW1zL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9lbnVtcy9zdG9yYWdlLmVudW0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGVzL2NhdGVnb3JpZXMuYXRvbS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGVzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZXMvbG9hZGluZy5hdG9tLnRzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZXMvbWF4LXByaWNlLmF0b20udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlcy9taW4tcHJpY2UuYXRvbS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGVzL3Bob25lcy5hdG9tLnRzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZXMvc2VhcmNoLXRlcm0uYXRvbS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGVzL3N0cm9yYWdlLmF0b20udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2VudW1zLXRvLWFycmF5LnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9pbmRleC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWhvdC10b2FzdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2FpXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVjb2lsXCIiXSwibmFtZXMiOlsidXNlQWN0aW9ucyIsInN0b3JhZ2UiLCJ1c2VSZWNvaWxWYWx1ZSIsIlN0b3JhZ2VBdG9tIiwic2VhcmNoVGVybSIsIlNlYXJjaFRlcm1BdG9tIiwibWluaW11bVByaWNlIiwiTWluUHJpY2VBdG9tIiwibWF4aW11bVByaWNlIiwiTWF4UHJpY2VBdG9tIiwiY2F0ZWdvcmllcyIsIkNhdGVnb3JpZXNBdG9tIiwicGhvbmVzIiwic2V0UGhvbmVzIiwidXNlUmVjb2lsU3RhdGUiLCJQaG9uZXNBdG9tIiwibG9hZGluZyIsInNldExvYWRpbmciLCJMb2FkaW5nQXRvbSIsImZldGNoUGhvbmVzIiwidXNlQ2FsbGJhY2siLCJiYXNlVXJsIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJjYXRlZ29yeVF1ZXJ5IiwiQ0FURUdPUklFUyIsIk1BQ0JPT0siLCJzZWFyY2hRdWVyeSIsImJyYW5kUXVlcnkiLCJJUEhPTkUiLCJBTEwiLCJmZXRjaGVkUGhvbmVzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiZGF0dW0iLCJpdGVtIiwiZmV0Y2hlZFBob25lIiwiaWQiLCJxdWFudGl0eSIsImdyYWRlIiwicHJvcGVydGllcyIsImNhcnJpZXIiLCJuYW1lIiwiaW1nVXJsIiwiYW1vdW50IiwicHVzaCIsInRvYXN0IiwiZXJyb3IiLCJjYXRjaCIsImVyciIsIm1lc3NhZ2UiLCJHYWRnZXRzIiwic3R5bGVzIiwiZ2FkZ2V0cyIsIm1hcCIsInBob25lIiwiaW5kZXgiLCJTaW5nbGVHYWRnZXQiLCJzaW5nbGVHYWRnZXQiLCJwaG90b0NvbnRhaW5lciIsImdhZGdldFBob3RvIiwiZ2FkZ2V0TmFtZSIsImdhZGdldFN0b3JhZ2UiLCJ1bml0UHJpY2UiLCJnYWRnZXRQcmljZSIsInBhcnNlRmxvYXQiLCJidXR0b24iLCJDYXRlZ29yaWVzIiwic2V0Q2F0ZWdvcmllcyIsImFsbENhdGVnb3JpZXMiLCJjb252ZXJ0RW51bVRvQXJyYXkiLCJjYXRlZ29yeSIsInNlbGVjdGVkIiwiUHJpY2VGaWx0ZXIiLCJtaW5QcmljZSIsInNldE1pblByaWNlIiwibWF4UHJpY2UiLCJzZXRNYXhQcmljZSIsImhhbmRsZU1pbkNoYW5nZSIsImV2ZW50IiwibWluIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVNYXhDaGFuZ2UiLCJtYXgiLCJwcmljZWZpbHRlciIsInNsaWRlcnNfY29udHJvbCIsImZyb21TbGlkZXIiLCJ0b1NsaWRlciIsImZvcm1fY29udHJvbCIsImZvcm1fY29udHJvbF9jb250YWluZXIiLCJmb3JtX2NvbnRyb2xfY29udGFpbmVyX2lucHV0IiwiZnJvbUlucHV0IiwiZm9ybV9jb250cm9sX3NlcGFyYXRvciIsInRvSW5wdXQiLCJTdG9yYWdlIiwic2V0U3RvcmFnZSIsImFsbFN0b3JhZ2UiLCJTVE9SQUdFIiwiYWRkSXRlbSIsInByZXZTdG9yYWdlIiwiaW5jbHVkZXMiLCJyZW1vdmVJdGVtIiwiZmlsdGVyIiwiTWVudUxpc3RzIiwibWVudUxpc3RzIiwiU2lkZUJhciIsInNpZGViYXIiLCJHYWxsZXJ5IiwiZ2FsbGVyeSIsIkhlYWRlciIsInNldFNlYXJjaFRlcm0iLCJ1c2VFZmZlY3QiLCJkaXNtaXNzIiwiY29udGFpbmVyIiwibGVmdFNlY3Rpb24iLCJ0aXRsZSIsImZvcm0iLCJyaWdodFNlY3Rpb24iLCJpbWdCb3giLCJEYXNoYm9hcmQiLCJIb21lIiwiYXRvbSIsImtleSIsImRlZmF1bHQiLCJlbnVtVmFsdWUiLCJ2YWx1ZXMiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiXSwibWFwcGluZ3MiOiI7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LG1EQUFJLENBQVU7QUFDcENDLEtBQUcsRUFBRSxZQUQrQjtBQUVwQ0MsU0FBTyxFQUFFO0FBRjJCLENBQVYsQ0FBdkIsQzs7Ozs7Ozs7Ozs7O0FDSFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU0vSCxjQUFjLEdBQUc2SCxtREFBSSxDQUFTO0FBQ3ZDQyxLQUFHLEVBQUUsZ0JBRGtDO0FBRXZDQyxTQUFPLEVBQUU7QUFGOEIsQ0FBVCxDQUEzQixDOzs7Ozs7Ozs7Ozs7QUNGUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR08sTUFBTWpJLFdBQVcsR0FBRytILG1EQUFJLENBQVk7QUFDdkNDLEtBQUcsRUFBRSxhQURrQztBQUV2Q0MsU0FBTyxFQUFFO0FBRjhCLENBQVosQ0FBeEIsQzs7Ozs7Ozs7Ozs7O0FDSFA7QUFBQTtBQUFPLFNBQVN0RCxrQkFBVCxDQUErQnVELFNBQS9CLEVBQWtFO0FBQ3JFLFFBQU1DLE1BQVcsR0FBRyxFQUFwQjs7QUFFQSxPQUFLLE1BQU1ILEdBQVgsSUFBa0JFLFNBQWxCLEVBQTZCO0FBQ3pCLFFBQUlFLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQkMsY0FBakIsQ0FBZ0NDLElBQWhDLENBQXFDTCxTQUFyQyxFQUFnREYsR0FBaEQsQ0FBSixFQUEwRDtBQUN0REcsWUFBTSxDQUFDakYsSUFBUCxDQUFZZ0YsU0FBUyxDQUFDRixHQUFELENBQXJCO0FBQ0g7QUFDSjs7QUFFRCxTQUFPRyxNQUFQO0FBQ0gsQzs7Ozs7Ozs7Ozs7O0FDVkQ7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLG1DIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGFnZXMvaW5kZXgudHN4XCIpO1xuIiwiaW1wb3J0IHsgdXNlUmVjb2lsU3RhdGUsIHVzZVJlY29pbFZhbHVlIH0gZnJvbSBcInJlY29pbFwiO1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDQVRFR09SSUVTIH0gZnJvbSBcIi4uL2VudW1zXCI7XHJcbmltcG9ydCB7IFBob25lIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvcGhvbmUuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LWhvdC10b2FzdFwiO1xyXG5pbXBvcnQge1xyXG4gIFN0b3JhZ2VBdG9tLFxyXG4gIFNlYXJjaFRlcm1BdG9tLFxyXG4gIE1pblByaWNlQXRvbSxcclxuICBNYXhQcmljZUF0b20sXHJcbiAgQ2F0ZWdvcmllc0F0b20sXHJcbiAgUGhvbmVzQXRvbSxcclxuICBMb2FkaW5nQXRvbSxcclxufSBmcm9tIFwiLi4vc3RhdGVzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlQWN0aW9ucygpIHtcclxuICAgIGNvbnN0IHN0b3JhZ2UgPSB1c2VSZWNvaWxWYWx1ZShTdG9yYWdlQXRvbSk7XHJcbiAgICBjb25zdCBzZWFyY2hUZXJtID0gdXNlUmVjb2lsVmFsdWUoU2VhcmNoVGVybUF0b20pO1xyXG4gICAgY29uc3QgbWluaW11bVByaWNlID0gdXNlUmVjb2lsVmFsdWUoTWluUHJpY2VBdG9tKTtcclxuICAgIGNvbnN0IG1heGltdW1QcmljZSA9IHVzZVJlY29pbFZhbHVlKE1heFByaWNlQXRvbSk7XHJcbiAgICBjb25zdCBjYXRlZ29yaWVzID0gdXNlUmVjb2lsVmFsdWUoQ2F0ZWdvcmllc0F0b20pO1xyXG4gICAgY29uc3QgW3Bob25lcywgc2V0UGhvbmVzXSA9IHVzZVJlY29pbFN0YXRlKFBob25lc0F0b20pO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlUmVjb2lsU3RhdGUoTG9hZGluZ0F0b20pO1xyXG5cclxuICAgIGNvbnN0IGZldGNoUGhvbmVzID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGlmIChsb2FkaW5nKSByZXR1cm47XHJcbiAgICAgICAgY29uc3QgYmFzZVVybCA9IFwiaHR0cHM6Ly9hcGktZGV2LmV6ZXdob2xlc2FsZS5jb20vaW1zL3YyL2ludmVudG9yaWVzL3ByaWNlcy9saXN0P3BhZ2U9MSZ0YWtlPTUwXCI7XHJcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnlRdWVyeSA9IGNhdGVnb3JpZXMgPT09IENBVEVHT1JJRVMuTUFDQk9PS1xyXG4gICAgICAgICAgICA/IFwiJmNhdGVnb3J5PUxhcHRvcHNcIlxyXG4gICAgICAgICAgICA6IFwiJmNhdGVnb3J5PUNlbGwrUGhvbmVzXCI7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlYXJjaFF1ZXJ5ID0gc2VhcmNoVGVybSA/IGAmc2VhcmNoVGVybT0ke3NlYXJjaFRlcm19YCA6ICcnO1xyXG4gICAgICAgICAgICAvLyBjb25zdCBicmFuZFF1ZXJ5ID0gY2F0ZWdvcmllcyA9PT0gQ0FURUdPUklFUy5BTEwgPyAnJmJyYW5kPUFwcGxlLFNhbXN1bmcsR29vZ2xlJyA6IGAmYnJhbmQ9JHtjYXRlZ29yaWVzfWA7XHJcbiAgICAgICAgICAgIC8vIGNvbnN0IGJyYW5kUXVlcnkgPSAnJmJyYW5kPUFwcGxlLFNhbXN1bmcsR29vZ2xlJztcclxuICAgICAgICAgICAgY29uc3QgYnJhbmRRdWVyeSA9IGNhdGVnb3JpZXMgPT09IENBVEVHT1JJRVMuSVBIT05FIHx8IGNhdGVnb3JpZXMgPT09IENBVEVHT1JJRVMuTUFDQk9PS1xyXG4gICAgICAgICAgICA/IFwiJmJyYW5kPUFwcGxlXCJcclxuICAgICAgICAgICAgOiBjYXRlZ29yaWVzID09PSBDQVRFR09SSUVTLkFMTFxyXG4gICAgICAgICAgICA/IFwiJmJyYW5kPUFwcGxlLFNhbXN1bmcsR29vZ2xlXCJcclxuICAgICAgICAgICAgOiBgJmJyYW5kPSR7Y2F0ZWdvcmllc31gO1xyXG4gICAgICAgICAgICBjb25zdCBmZXRjaGVkUGhvbmVzOiBQaG9uZVtdID0gW107XHJcblxyXG4gICAgICAgICAgICBmZXRjaChgJHtiYXNlVXJsfSR7Y2F0ZWdvcnlRdWVyeX0ke3NlYXJjaFF1ZXJ5fSR7YnJhbmRRdWVyeX1gLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBkYXR1bSBvZiByZXNwb25zZS5kYXRhLmRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBkYXR1bS5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmV0Y2hlZFBob25lOiBQaG9uZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1YW50aXR5OiBpdGVtLnF1YW50aXR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmFkZTogaXRlbS5wcm9wZXJ0aWVzLmdyYWRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJyaWVyOiBpdGVtLnByb3BlcnRpZXMuY2FycmllcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmFnZTogaXRlbS5wcm9wZXJ0aWVzLnN0b3JhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGRhdHVtLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZ1VybDogZGF0dW0uaW1nVXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGl0ZW0uYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaGVkUGhvbmVzLnB1c2goZmV0Y2hlZFBob25lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRQaG9uZXMoZmV0Y2hlZFBob25lcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0LmVycm9yKFwiQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgZmV0Y2hpbmcgZGF0YVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3QuZXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfSwgW3NlYXJjaFRlcm0sIGNhdGVnb3JpZXNdKVxyXG5cclxuICAgIHJldHVybiB7ZmV0Y2hQaG9uZXN9XHJcbn1cclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZ2FkZ2V0c1wiOiBcIkdhZGdldHNfZ2FkZ2V0c19fMTBaRG9cIixcblx0XCJzaW5nbGVHYWRnZXRcIjogXCJHYWRnZXRzX3NpbmdsZUdhZGdldF9fMXpNczlcIixcblx0XCJwaG90b0NvbnRhaW5lclwiOiBcIkdhZGdldHNfcGhvdG9Db250YWluZXJfX2RfMnFNXCIsXG5cdFwiZ2FkZ2V0UGhvdG9cIjogXCJHYWRnZXRzX2dhZGdldFBob3RvX18zOEtHelwiLFxuXHRcImdhZGdldE5hbWVcIjogXCJHYWRnZXRzX2dhZGdldE5hbWVfXzFOUHRlXCIsXG5cdFwiZ2FkZ2V0U3RvcmFnZVwiOiBcIkdhZGdldHNfZ2FkZ2V0U3RvcmFnZV9fMTJ0NElcIixcblx0XCJ1bml0UHJpY2VcIjogXCJHYWRnZXRzX3VuaXRQcmljZV9fc2xZUkZcIixcblx0XCJnYWRnZXRQcmljZVwiOiBcIkdhZGdldHNfZ2FkZ2V0UHJpY2VfX2phWDdkXCIsXG5cdFwiZ3JhZGVcIjogXCJHYWRnZXRzX2dyYWRlX19qNXZpaVwiLFxuXHRcImJ1dHRvblwiOiBcIkdhZGdldHNfYnV0dG9uX18zSWR6b1wiXG59O1xuIiwiaW1wb3J0IHsgdXNlUmVjb2lsVmFsdWUgfSBmcm9tIFwicmVjb2lsXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vaW5kZXgubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IHsgU2luZ2xlR2FkZ2V0IH0gZnJvbSBcIi4vc2luZ2xlLWdhZGdldFwiO1xyXG5pbXBvcnQgeyBQaG9uZXNBdG9tIH0gZnJvbSBcInN0YXRlc1wiO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHYWRnZXRzKCl7XHJcbiAgICBjb25zdCBwaG9uZXMgPSB1c2VSZWNvaWxWYWx1ZShQaG9uZXNBdG9tKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdhZGdldHN9PlxyXG4gICAgICAgICAgICB7cGhvbmVzLm1hcCgocGhvbmUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8U2luZ2xlR2FkZ2V0IGtleT17cGhvbmUuaWQgKyBpbmRleH0gZGF0YT17cGhvbmV9IC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBQaG9uZSB9IGZyb20gXCJpbnRlcmZhY2VzL3Bob25lLmludGVyZmFjZVwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2luZGV4Lm1vZHVsZS5zY3NzXCI7XHJcbmludGVyZmFjZSBTaW5nbGVHYWRnZXRQcm9wcyB7XHJcbiAgICBkYXRhOiBQaG9uZSxcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNpbmdsZUdhZGdldCh7IGRhdGEgfTogU2luZ2xlR2FkZ2V0UHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaW5nbGVHYWRnZXR9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyYWRlfT5cclxuICAgICAgICAgICAgICAgIHtkYXRhLmdyYWRlfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5waG90b0NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdhZGdldFBob3RvfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZGF0YS5pbWdVcmx9IGFsdD17ZGF0YS5uYW1lfS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ2FkZ2V0TmFtZX0+XHJcbiAgICAgICAgICAgICAgICB7ZGF0YS5uYW1lfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5nYWRnZXRTdG9yYWdlfT5cclxuICAgICAgICAgICAgICAgIHtkYXRhLmNhcnJpZXJ9IHwge2RhdGEuc3RvcmFnZX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudW5pdFByaWNlfT5cclxuICAgICAgICAgICAgICAgIFVuaXQgcHJpY2VcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ2FkZ2V0UHJpY2V9PlxyXG4gICAgICAgICAgICAgICAgJHtwYXJzZUZsb2F0KGRhdGEuYW1vdW50KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7ZGF0YS5xdWFudGl0eX0gQXZhaWxhYmxlXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIEJ1eVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSIsImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL2luZGV4Lm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCB7IHVzZVJlY29pbFN0YXRlIH0gZnJvbSBcInJlY29pbFwiO1xyXG5pbXBvcnQgeyBDYXRlZ29yaWVzQXRvbSB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi9zdGF0ZXNcIjtcclxuaW1wb3J0IHsgQ0FURUdPUklFUyB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi9lbnVtc1wiO1xyXG5pbXBvcnQgeyBjb252ZXJ0RW51bVRvQXJyYXkgfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vdXRpbHNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDYXRlZ29yaWVzKCkge1xyXG4gICAgY29uc3QgW2NhdGVnb3JpZXMsIHNldENhdGVnb3JpZXNdID0gdXNlUmVjb2lsU3RhdGUoQ2F0ZWdvcmllc0F0b20pO1xyXG4gICAgY29uc3QgYWxsQ2F0ZWdvcmllcyA9IGNvbnZlcnRFbnVtVG9BcnJheShDQVRFR09SSUVTKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIENhdGVnb3JpZXNcclxuICAgICAgICAgICAgPGRpdiAgY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcmllc30+XHJcbiAgICAgICAgICAgICAgICB7YWxsQ2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldENhdGVnb3JpZXMoY2F0ZWdvcnkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NhdGVnb3JpZXMgPT09IGNhdGVnb3J5ID8gc3R5bGVzLnNlbGVjdGVkIDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSIsImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL2luZGV4Lm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCB7IHVzZVJlY29pbFN0YXRlIH0gZnJvbSBcInJlY29pbFwiO1xyXG5pbXBvcnQgeyBNYXhQcmljZUF0b20sIE1pblByaWNlQXRvbSB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi9zdGF0ZXNcIjtcclxuaW1wb3J0IHsgQ2hhbmdlRXZlbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQcmljZUZpbHRlcigpIHtcclxuICAgIGNvbnN0IFttaW5QcmljZSwgc2V0TWluUHJpY2VdID0gdXNlUmVjb2lsU3RhdGUoTWluUHJpY2VBdG9tKTtcclxuICAgIGNvbnN0IFttYXhQcmljZSwgc2V0TWF4UHJpY2VdID0gdXNlUmVjb2lsU3RhdGUoTWF4UHJpY2VBdG9tKTtcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVNaW5DaGFuZ2UoZXZlbnQ6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KXtcclxuICAgICAgICBjb25zdCBtaW4gPSBwYXJzZUZsb2F0KGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgaWYgKG1pbiA+PSBtYXhQcmljZSkgcmV0dXJuO1xyXG4gICAgICAgIHNldE1pblByaWNlKG1pbik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlTWF4Q2hhbmdlKGV2ZW50OiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pil7XHJcbiAgICAgICAgY29uc3QgbWF4ID0gcGFyc2VGbG9hdChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIGlmIChtYXggPD0gbWluUHJpY2UpIHJldHVybjtcclxuICAgICAgICBzZXRNYXhQcmljZShtYXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgUHJpY2UgRmlsdGVyXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJpY2VmaWx0ZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zbGlkZXJzX2NvbnRyb2x9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e3N0eWxlcy5mcm9tU2xpZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bWluUHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbj1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXg9XCIxNTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU1pbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD17c3R5bGVzLnRvU2xpZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bWF4UHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbj1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXg9XCIxNTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU1heENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1fY29udHJvbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtX2NvbnRyb2xfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5mb3JtX2NvbnRyb2xfY29udGFpbmVyX2lucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e3N0eWxlcy5mcm9tSW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bWluUHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heD1cIjEwMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU1pbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1fY29udHJvbF9zZXBhcmF0b3J9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB8XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtX2NvbnRyb2xfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5mb3JtX2NvbnRyb2xfY29udGFpbmVyX2lucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17c3R5bGVzLnRvSW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bWF4UHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heD1cIjEwMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU1heENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSIsImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL2luZGV4Lm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCB7IHVzZVJlY29pbFN0YXRlIH0gZnJvbSBcInJlY29pbFwiO1xyXG5pbXBvcnQgeyBTdG9yYWdlQXRvbSB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi9zdGF0ZXNcIjtcclxuaW1wb3J0IHsgU1RPUkFHRSB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi9lbnVtc1wiO1xyXG5pbXBvcnQgeyBjb252ZXJ0RW51bVRvQXJyYXkgfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vdXRpbHNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTdG9yYWdlKCkge1xyXG4gIGNvbnN0IFtzdG9yYWdlLCBzZXRTdG9yYWdlXSA9IHVzZVJlY29pbFN0YXRlKFN0b3JhZ2VBdG9tKTtcclxuICBjb25zdCBhbGxTdG9yYWdlID0gY29udmVydEVudW1Ub0FycmF5KFNUT1JBR0UpO1xyXG5cclxuICBmdW5jdGlvbiBhZGRJdGVtKGl0ZW06IFNUT1JBR0UpOiB2b2lkIHtcclxuICAgIHNldFN0b3JhZ2UoKHByZXZTdG9yYWdlKSA9PiB7XHJcbiAgICAgIHJldHVybiBwcmV2U3RvcmFnZS5pbmNsdWRlcyhpdGVtKSA/IHByZXZTdG9yYWdlIDogWy4uLnByZXZTdG9yYWdlLCBpdGVtXTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVtb3ZlSXRlbShpdGVtOiBTVE9SQUdFKTogdm9pZCB7XHJcbiAgICBzZXRTdG9yYWdlKChwcmV2U3RvcmFnZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcHJldlN0b3JhZ2UuZmlsdGVyKHZhbHVlID0+IHZhbHVlICE9PSBpdGVtKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIFN0b3JhZ2VcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdG9yYWdlfT5cclxuICAgICAgICB7YWxsU3RvcmFnZS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17aXRlbX0+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzdG9yYWdlLmluY2x1ZGVzKGl0ZW0pID8gXHJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlSXRlbShpdGVtKSA6IGFkZEl0ZW0oaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAge2l0ZW19XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1lbnVMaXN0c1wiOiBcIk1lbnVMaXN0c19tZW51TGlzdHNfXzJoRWFFXCIsXG5cdFwiY2F0ZWdvcmllc1wiOiBcIk1lbnVMaXN0c19jYXRlZ29yaWVzX18xSmZxUlwiLFxuXHRcInByaWNlZmlsdGVyXCI6IFwiTWVudUxpc3RzX3ByaWNlZmlsdGVyX18xVnVHOVwiLFxuXHRcInN0b3JhZ2VcIjogXCJNZW51TGlzdHNfc3RvcmFnZV9fREEtczZcIixcblx0XCJzZWxlY3RlZFwiOiBcIk1lbnVMaXN0c19zZWxlY3RlZF9fZ0ZFQVZcIixcblx0XCJzbGlkZXJzX2NvbnRyb2xcIjogXCJNZW51TGlzdHNfc2xpZGVyc19jb250cm9sX19US0I4OVwiLFxuXHRcImZyb21TbGlkZXJcIjogXCJNZW51TGlzdHNfZnJvbVNsaWRlcl9fMVNPZFlcIixcblx0XCJmb3JtX2NvbnRyb2xcIjogXCJNZW51TGlzdHNfZm9ybV9jb250cm9sX19oTlEyQVwiLFxuXHRcImZvcm1fY29udHJvbF9zZXBhcmF0b3JcIjogXCJNZW51TGlzdHNfZm9ybV9jb250cm9sX3NlcGFyYXRvcl9fMnRYR3RcIixcblx0XCJmb3JtX2NvbnRyb2xfY29udGFpbmVyXCI6IFwiTWVudUxpc3RzX2Zvcm1fY29udHJvbF9jb250YWluZXJfXzNOU3BSXCJcbn07XG4iLCJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL2luZGV4Lm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCB7IENhdGVnb3JpZXMgfSBmcm9tIFwiLi9DYXRlZ29yaWVzL2luZGV4XCI7XHJcbmltcG9ydCB7IFByaWNlRmlsdGVyIH0gZnJvbSBcIi4vUHJpY2VGaWx0ZXIvaW5kZXhcIjtcclxuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gXCIuL1N0b3JhZ2UvaW5kZXhcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBNZW51TGlzdHMoKXtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZW51TGlzdHN9PlxyXG4gICAgICAgICAgICA8Q2F0ZWdvcmllcyAvPlxyXG4gICAgICAgICAgICA8UHJpY2VGaWx0ZXIgLz5cclxuICAgICAgICAgICAgPFN0b3JhZ2UgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJzaWRlYmFyXCI6IFwiU2lkZUJhcl9zaWRlYmFyX19DeFcxMFwiXG59O1xuIiwiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9pbmRleC5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgeyBNZW51TGlzdHMgfSBmcm9tIFwiLi9NZW51TGlzdHNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTaWRlQmFyKCl7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2lkZWJhcn0+XHJcbiAgICAgICAgICAgIDxNZW51TGlzdHMgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImdhbGxlcnlcIjogXCJHYWxsZXJ5X2dhbGxlcnlfX2JBck9fXCJcbn07XG4iLCJpbXBvcnQgeyBTaWRlQmFyIH0gZnJvbSBcIi4vU2lkZUJhci9pbmRleFwiO1xyXG5pbXBvcnQgeyBHYWRnZXRzIH0gZnJvbSBcIi4vR2FkZ2V0cy9pbmRleFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2luZGV4Lm1vZHVsZS5zY3NzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gR2FsbGVyeSgpe1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdhbGxlcnl9PlxyXG4gICAgICAgICAgICA8U2lkZUJhciAvPlxyXG4gICAgICAgICAgICA8R2FkZ2V0cyAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiSGVhZGVyX2NvbnRhaW5lcl9fMWlvd3BcIixcblx0XCJsZWZ0U2VjdGlvblwiOiBcIkhlYWRlcl9sZWZ0U2VjdGlvbl9fM29MZnlcIixcblx0XCJmb3JtXCI6IFwiSGVhZGVyX2Zvcm1fX3Z0NTN4XCIsXG5cdFwidGl0bGVcIjogXCJIZWFkZXJfdGl0bGVfXzN4cno3XCIsXG5cdFwicmlnaHRTZWN0aW9uXCI6IFwiSGVhZGVyX3JpZ2h0U2VjdGlvbl9fMjBGbm9cIixcblx0XCJpbWdCb3hcIjogXCJIZWFkZXJfaW1nQm94X19iUUZBZlwiXG59O1xuIiwiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9pbmRleC5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgeyBBaU91dGxpbmVBcnJvd1JpZ2h0IH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XHJcbmltcG9ydCB7IHVzZVJlY29pbFN0YXRlIH0gZnJvbSBcInJlY29pbFwiO1xyXG5pbXBvcnQgeyBTZWFyY2hUZXJtQXRvbSB9IGZyb20gXCJzdGF0ZXNcIjtcclxuaW1wb3J0IHsgdXNlQWN0aW9ucyB9IGZyb20gXCJhY3Rpb25zL2ZldGNoLXBob25lcy5hY3Rpb25cIjtcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCI7XHJcbmltcG9ydCB7IExvYWRpbmdBdG9tIH0gZnJvbSBcInN0YXRlc1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgY29uc3QgW3NlYXJjaFRlcm0sIHNldFNlYXJjaFRlcm1dID0gdXNlUmVjb2lsU3RhdGUoU2VhcmNoVGVybUF0b20pO1xyXG4gIGNvbnN0IFtsb2FkaW5nXSA9IHVzZVJlY29pbFN0YXRlKExvYWRpbmdBdG9tKTtcclxuICBjb25zdCB7IGZldGNoUGhvbmVzIH0gPSB1c2VBY3Rpb25zKCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChsb2FkaW5nKSB7XHJcbiAgICAgICAgdG9hc3QubG9hZGluZyhcImZldGNoaW5nIHBob25lcy4uLlwiLCB7aWQ6IFwicmF5XCJ9KTtcclxuICAgIH1lbHNlIHtcclxuICAgICAgICB0b2FzdC5kaXNtaXNzKFwicmF5XCIpO1xyXG4gICAgfVxyXG4gIH0sIFtsb2FkaW5nXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoUGhvbmVzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlZnRTZWN0aW9ufT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cclxuICAgICAgICAgIFNob3Agb3VyIGxhdGVzdCA8YnIgLz5cclxuICAgICAgICAgIGF2YWlsYWJsZSBzdG9jayBoZXJlXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtfT5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgc2VhcmNoIHRlcm0gKGUuZyBpUGhvbmUgeCwgMTI4R0Igb3IgQTEpXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0U2VhcmNoVGVybShldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17ZmV0Y2hQaG9uZXN9PlxyXG4gICAgICAgICAgICBTZWFyY2ggPEFpT3V0bGluZUFycm93UmlnaHQgLz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yaWdodFNlY3Rpb259PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1nQm94fSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiRGFzaGJvYXJkX2NvbnRhaW5lcl9fU2EyaC1cIlxufTtcbiIsImltcG9ydCB7IEhlYWRlciB9IGZyb20gXCIuL0hlYWRlci9pbmRleFwiO1xyXG5pbXBvcnQgeyBHYWxsZXJ5IH0gZnJvbSBcIi4vR2FsbGVyeS9pbmRleFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2luZGV4Lm1vZHVsZS5zY3NzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRGFzaGJvYXJkKCl7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICA8R2FsbGVyeSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59IiwiZXhwb3J0IGVudW0gQ0FURUdPUklFUyB7XHJcbiAgICBBTEwgPSBcIkFsbFwiLFxyXG4gICAgSVBIT05FID0gXCJpUGhvbmVcIixcclxuICAgIFNBTVNVTkcgPSBcIlNhbXN1bmdcIixcclxuICAgIEdPT0dMRSA9IFwiR29vZ2xlXCIsXHJcbiAgICAvLyBJUEFEID0gXCJpcGFkXCIsXHJcbiAgICBNQUNCT09LID0gXCJNYWNCb29rXCIsXHJcbiAgICAvLyBBSVJQT0RTID0gXCJBaXJQb2RzXCIsXHJcbn1cclxuIiwiZXhwb3J0ICogZnJvbSBcIi4vY2F0ZWdvcmllcy5lbnVtXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3N0b3JhZ2UuZW51bVwiOyIsImV4cG9ydCBlbnVtIFNUT1JBR0Uge1xyXG4gICAgR0IzMiA9IFwiMzJHQlwiLFxyXG4gICAgR0I2NCA9IFwiNjRHQlwiLFxyXG4gICAgR0IxMjggPSBcIjEyOEdCXCIsXHJcbiAgICBHQjI1NiA9IFwiMjU2R0JcIixcclxufSIsImltcG9ydCB7IERhc2hib2FyZCB9IGZyb20gJ2NvbXBvbmVudHMvRGFzaGJvYXJkJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gPERhc2hib2FyZCAvPlxufVxuIiwiaW1wb3J0IHsgYXRvbSB9IGZyb20gXCJyZWNvaWxcIjtcclxuaW1wb3J0IHsgQ0FURUdPUklFUyB9IGZyb20gXCIuLi9lbnVtc1wiXHJcblxyXG5leHBvcnQgY29uc3QgQ2F0ZWdvcmllc0F0b20gPSBhdG9tPENBVEVHT1JJRVM+KHtcclxuICAgIGtleTogXCJjYXRlZ29yaWVzQXRvbVwiLFxyXG4gICAgZGVmYXVsdDogQ0FURUdPUklFUy5BTEwsXHJcbn0pOyIsImV4cG9ydCAqIGZyb20gXCIuL2NhdGVnb3JpZXMuYXRvbVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9tYXgtcHJpY2UuYXRvbVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9taW4tcHJpY2UuYXRvbVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9zZWFyY2gtdGVybS5hdG9tXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3N0cm9yYWdlLmF0b21cIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbG9hZGluZy5hdG9tXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3Bob25lcy5hdG9tXCI7IiwiaW1wb3J0IHsgYXRvbSB9IGZyb20gXCJyZWNvaWxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBMb2FkaW5nQXRvbSA9IGF0b208Ym9vbGVhbj4oe1xyXG4gICAga2V5OiBcImxvYWRpbmdBdG9tXCIsXHJcbiAgICBkZWZhdWx0OiBmYWxzZSxcclxufSk7IiwiaW1wb3J0IHsgYXRvbSB9IGZyb20gXCJyZWNvaWxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBNYXhQcmljZUF0b20gPSBhdG9tPG51bWJlcj4oe1xyXG4gICAga2V5OiBcIm1heFByaWNlQXRvbVwiLFxyXG4gICAgZGVmYXVsdDogMTAwMCxcclxufSk7IiwiaW1wb3J0IHsgYXRvbSB9IGZyb20gXCJyZWNvaWxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBNaW5QcmljZUF0b20gPSBhdG9tPG51bWJlcj4oe1xyXG4gICAga2V5OiBcIm1pblByaWNlQXRvbVwiLFxyXG4gICAgZGVmYXVsdDogMTAwLFxyXG59KTsiLCJpbXBvcnQgeyBhdG9tIH0gZnJvbSBcInJlY29pbFwiO1xyXG5pbXBvcnQgeyBQaG9uZSB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL3Bob25lLmludGVyZmFjZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBob25lc0F0b20gPSBhdG9tPFBob25lW10+KHtcclxuICAgIGtleTogXCJwaG9uZXNBdG9tXCIsXHJcbiAgICBkZWZhdWx0OiBbXSxcclxufSk7IiwiaW1wb3J0IHsgYXRvbSB9IGZyb20gXCJyZWNvaWxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTZWFyY2hUZXJtQXRvbSA9IGF0b208c3RyaW5nPih7XHJcbiAgICBrZXk6IFwic2VhcmNoVGVybUF0b21cIixcclxuICAgIGRlZmF1bHQ6IFwiXCJcclxufSk7IiwiaW1wb3J0IHsgYXRvbSB9IGZyb20gXCJyZWNvaWxcIjtcclxuaW1wb3J0IHsgU1RPUkFHRSB9IGZyb20gXCIuLi9lbnVtc1wiXHJcblxyXG5leHBvcnQgY29uc3QgU3RvcmFnZUF0b20gPSBhdG9tPFNUT1JBR0VbXT4oe1xyXG4gICAga2V5OiBcInN0b3JhZ2VBdG9tXCIsXHJcbiAgICBkZWZhdWx0OiBbXSxcclxufSk7IiwiZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRFbnVtVG9BcnJheTxUPihlbnVtVmFsdWU6IFJlY29yZDxzdHJpbmcsIFQ+KTogVFtdIHtcclxuICAgIGNvbnN0IHZhbHVlczogVFtdID0gW107XHJcblxyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gZW51bVZhbHVlKSB7XHJcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlbnVtVmFsdWUsIGtleSkpIHtcclxuICAgICAgICAgICAgdmFsdWVzLnB1c2goZW51bVZhbHVlW2tleV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdmFsdWVzO1xyXG59IiwiZXhwb3J0ICogZnJvbSBcIi4vZW51bXMtdG8tYXJyYXlcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ob3QtdG9hc3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvYWlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVjb2lsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=