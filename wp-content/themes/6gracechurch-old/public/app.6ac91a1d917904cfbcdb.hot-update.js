"use strict";
self["webpackHotUpdatesage"]("app",{

/***/ "./resources/scripts/util/formModal.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_js_dist_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(424);
/* harmony import */ var bootstrap_js_dist_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_modal__WEBPACK_IMPORTED_MODULE_1__);




class FormModal {
  constructor() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.apply-now').on('click', function (e) {
      e.preventDefault();
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#modal-form').modal('show');
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.close').on('click', function (e) {
      e.preventDefault();
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#modal-form').modal('hide');
    });
    let hash = window.location.hash; // eslint-disable-next-line no-unused-vars

    let target = window.location.hash; //target = target.replace('#', '');
    //window.location.hash = '';

    console.log('hash', hash);

    if (hash) {
      console.log('has a hash'); //let scrollYPos = ($(hash).offset().top);
      //gsap.to(window, {scrollTo: {y: scrollYPos, x: 0, autoKill: false}, duration:1, delay:0.5, ease: 'power2.inOut'});
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (FormModal);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "f0a4e632653dc711a4e9"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=app.6ac91a1d917904cfbcdb.hot-update.js.map