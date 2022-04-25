exports.ids = [1];
exports.modules = {

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(20);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("7a6f3659", content, true, context)
};

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_AppData_Roaming_npm_node_modules_nuxt_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_AppData_Roaming_npm_node_modules_nuxt_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_AppData_Roaming_npm_node_modules_nuxt_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_AppData_Roaming_npm_node_modules_nuxt_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_AppData_Roaming_npm_node_modules_nuxt_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".timer{height:500px;width:500px;border:5px solid #2e2423;border-radius:30px;background-color:#464d25;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#fff;padding:10px}.timer .deathTime{font-size:50px;font-weight:700}.timer .btns{display:flex;width:500px;height:100px;flex-direction:column;justify-content:space-around;align-items:center}.timer .btns .topBtns .btn{height:50px;width:120px;font-size:25px}.timer .btns .bottomBtns .btn,.timer .btns .topBtns .btn{background:none;border:1px solid #fff;border-radius:5px;color:#fff}.timer .btns .bottomBtns .btn{height:40px;width:100px;font-size:20px}.timer .detailTime{font-size:20px;font-weight:700}.timer .detailTime .detailTime:nth-child(3){color:red}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: C:/Users/yoongu/AppData/Roaming/npm/node_modules/nuxt/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/yoongu/node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=69c74f1f&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"timer"},[_vm._ssrNode("<h1>진힐라 시간 계산기</h1> <div class=\"deathTime\">"+_vm._ssrEscape(_vm._s(_vm.DTM)+":"+_vm._s(_vm.DTS))+"</div> <div class=\"btns\"><div class=\"topBtns\"><button class=\"btn\">주기 1</button> <button class=\"btn\">주기 2</button> <button class=\"btn\">주기 3</button></div> <div class=\"bottomBtns\"><button class=\"btn\">+1초</button> <button class=\"btn\">-1초</button> <button class=\"btn\">되돌리기</button> <button class=\"btn\">초기화</button></div></div> <div class=\"detailTime\"><div>"+_vm._ssrEscape(_vm._s(_vm.DT1M)+" 60초전")+"</div> <div>"+_vm._ssrEscape(_vm._s(_vm.DT45S)+" 45초전")+"</div> <div>"+_vm._ssrEscape(_vm._s(_vm.DT30S)+" 30초전 ")+"</div> <div>"+_vm._ssrEscape(_vm._s(_vm.DT15S)+" 15초전 ")+"</div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=69c74f1f&

// CONCATENATED MODULE: C:/Users/yoongu/node_modules/babel-loader/lib??ref--2-0!C:/Users/yoongu/node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  data() {
    return {
      deathTimeMin: 27,
      deathTimeSec: 14,
      changeDTM: null,
      changeDTS: null
    };
  },

  computed: {
    DTM() {
      return this.deathTimeMin.toString().padStart(2, '0');
    },

    DTS() {
      return this.deathTimeSec.toString().padStart(2, '0');
    },

    DT1M() {
      let DT1M_m = this.deathTimeMin + 1;
      let DT1M_s = this.deathTimeSec;
      return DT1M_m.toString().padStart(2, '0') + ":" + DT1M_s.toString().padStart(2, '0');
    },

    DT45S() {
      let DT45S_m = null;
      let DT45S_s = null;

      if (this.deathTimeSec < 15) {
        DT45S_m = this.deathTimeMin;
        DT45S_s = this.deathTimeSec + 45;
      } else {
        DT45S_m = this.deathTimeMin + 1;
        DT45S_s = this.deathTimeSec - 15;
      }

      return DT45S_m.toString().padStart(2, '0') + ":" + DT45S_s.toString().padStart(2, '0');
    },

    DT30S() {
      let DT30S_m = null;
      let DT30S_s = null;

      if (this.deathTimeSec < 30) {
        DT30S_m = this.deathTimeMin;
        DT30S_s = this.deathTimeSec + 30;
      } else {
        DT30S_m = this.deathTimeMin + 1;
        DT30S_s = this.deathTimeSec - 30;
      }

      return DT30S_m.toString().padStart(2, '0') + ":" + DT30S_s.toString().padStart(2, '0');
    },

    DT15S() {
      let DT15S_m = null;
      let DT15S_s = null;

      if (this.deathTimeSec < 45) {
        DT15S_m = this.deathTimeMin;
        DT15S_s = this.deathTimeSec + 15;
      } else {
        DT15S_m = this.deathTimeMin + 1;
        DT15S_s = this.deathTimeSec - 45;
      }

      return DT15S_m.toString().padStart(2, '0') + ":" + DT15S_s.toString().padStart(2, '0');
    }

  },
  methods: {
    term1() {
      this.changeDTM = this.deathTimeMin;
      this.changeDTS = this.deathTimeSec;

      if (this.deathTimeSec < 32) {
        this.deathTimeMin -= 3;
        this.deathTimeSec += 28;
      } else {
        this.deathTimeMin -= 2;
        this.deathTimeSec -= 32;
      }
    },

    term2() {
      this.changeDTM = this.deathTimeMin;
      this.changeDTS = this.deathTimeSec;

      if (this.deathTimeSec < 6) {
        this.deathTimeMin -= 3;
        this.deathTimeSec += 54;
      } else {
        this.deathTimeMin -= 2;
        this.deathTimeSec -= 6;
      }
    },

    term3() {
      this.changeDTM = this.deathTimeMin;
      this.changeDTS = this.deathTimeSec;

      if (this.deathTimeSec < 40) {
        this.deathTimeMin -= 2;
        this.deathTimeSec += 20;
      } else {
        this.deathTimeMin -= 1;
        this.deathTimeSec -= 40;
      }
    },

    plusSec() {
      this.changeDTM = this.deathTimeMin;
      this.changeDTS = this.deathTimeSec;
      this.deathTimeSec += 1;

      if (this.deathTimeSec == 60) {
        this.deathTimeSec = 0;
        this.deathTimeMin += 1;
      }
    },

    minusSec() {
      this.changeDTM = this.deathTimeMin;
      this.changeDTS = this.deathTimeSec;
      this.deathTimeSec -= 1;

      if (this.deathTimeSec == -1) {
        this.deathTimeSec = 59;
        this.deathTimeMin -= 1;
      }
    },

    returnTime() {
      this.deathTimeMin = this.changeDTM;
      this.deathTimeSec = this.changeDTS;
    },

    resetTime() {
      this.changeDTM = this.deathTimeMin;
      this.changeDTS = this.deathTimeSec;
      this.deathTimeMin = 27;
      this.deathTimeSec = 14;
    }

  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: C:/Users/yoongu/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(19)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "0f339dac"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map