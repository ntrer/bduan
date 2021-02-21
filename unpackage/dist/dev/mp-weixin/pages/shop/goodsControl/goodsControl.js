(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/shop/goodsControl/goodsControl"],{

/***/ 351:
/*!**********************************************************************************************!*\
  !*** C:/软件/xiaofendian-master/main.js?{"page":"pages%2Fshop%2FgoodsControl%2FgoodsControl"} ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _goodsControl = _interopRequireDefault(__webpack_require__(/*! ./pages/shop/goodsControl/goodsControl.vue */ 352));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_goodsControl.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 352:
/*!*************************************************************************!*\
  !*** C:/软件/xiaofendian-master/pages/shop/goodsControl/goodsControl.vue ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _goodsControl_vue_vue_type_template_id_43c852c9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./goodsControl.vue?vue&type=template&id=43c852c9& */ 353);
/* harmony import */ var _goodsControl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./goodsControl.vue?vue&type=script&lang=js& */ 355);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _goodsControl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _goodsControl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Users_yd_Downloads_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../Users/yd/Downloads/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs




/* normalize component */

var component = Object(_Users_yd_Downloads_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _goodsControl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _goodsControl_vue_vue_type_template_id_43c852c9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _goodsControl_vue_vue_type_template_id_43c852c9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _goodsControl_vue_vue_type_template_id_43c852c9___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "软件/xiaofendian-master/pages/shop/goodsControl/goodsControl.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 353:
/*!********************************************************************************************************!*\
  !*** C:/软件/xiaofendian-master/pages/shop/goodsControl/goodsControl.vue?vue&type=template&id=43c852c9& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_yd_Downloads_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Users_yd_Downloads_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Users_yd_Downloads_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Users_yd_Downloads_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Users_yd_Downloads_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Users_yd_Downloads_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goodsControl_vue_vue_type_template_id_43c852c9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Users/yd/Downloads/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../Users/yd/Downloads/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../Users/yd/Downloads/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../Users/yd/Downloads/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../Users/yd/Downloads/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../Users/yd/Downloads/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./goodsControl.vue?vue&type=template&id=43c852c9& */ 354);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Users_yd_Downloads_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Users_yd_Downloads_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Users_yd_Downloads_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Users_yd_Downloads_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Users_yd_Downloads_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Users_yd_Downloads_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goodsControl_vue_vue_type_template_id_43c852c9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Users_yd_Downloads_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Users_yd_Downloads_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Users_yd_Downloads_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Users_yd_Downloads_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Users_yd_Downloads_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Users_yd_Downloads_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goodsControl_vue_vue_type_template_id_43c852c9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Users_yd_Downloads_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Users_yd_Downloads_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Users_yd_Downloads_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Users_yd_Downloads_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Users_yd_Downloads_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Users_yd_Downloads_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goodsControl_vue_vue_type_template_id_43c852c9___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Users_yd_Downloads_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Users_yd_Downloads_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Users_yd_Downloads_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Users_yd_Downloads_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Users_yd_Downloads_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Users_yd_Downloads_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goodsControl_vue_vue_type_template_id_43c852c9___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 354:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/软件/xiaofendian-master/pages/shop/goodsControl/goodsControl.vue?vue&type=template&id=43c852c9& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components = {
  "u-navbar": function() {
    return __webpack_require__.e(/*! import() | uview-ui/components/u-navbar/u-navbar */ "uview-ui/components/u-navbar/u-navbar").then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-navbar/u-navbar.vue */ 515))
  },
  "u-dropdown": function() {
    return __webpack_require__.e(/*! import() | uview-ui/components/u-dropdown/u-dropdown */ "uview-ui/components/u-dropdown/u-dropdown").then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-dropdown/u-dropdown.vue */ 596))
  },
  "u-dropdown-item": function() {
    return __webpack_require__.e(/*! import() | uview-ui/components/u-dropdown-item/u-dropdown-item */ "uview-ui/components/u-dropdown-item/u-dropdown-item").then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-dropdown-item/u-dropdown-item.vue */ 603))
  },
  "uni-load-more": function() {
    return __webpack_require__.e(/*! import() | components/uni-load-more/uni-load-more */ "components/uni-load-more/uni-load-more").then(__webpack_require__.bind(null, /*! @/components/uni-load-more/uni-load-more.vue */ 493))
  },
  "u-popup": function() {
    return __webpack_require__.e(/*! import() | uview-ui/components/u-popup/u-popup */ "uview-ui/components/u-popup/u-popup").then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-popup/u-popup.vue */ 582))
  },
  "u-modal": function() {
    return __webpack_require__.e(/*! import() | uview-ui/components/u-modal/u-modal */ "uview-ui/components/u-modal/u-modal").then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-modal/u-modal.vue */ 539))
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var a0 = {
    color: "#000",
    fontSize: "50upx",
    fontWeight: "600"
  }
  var a1 = {
    backgroundColor: "#FF7200",
    color: "#fff"
  }
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        a0: a0,
        a1: a1
      }
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 355:
/*!**************************************************************************************************!*\
  !*** C:/软件/xiaofendian-master/pages/shop/goodsControl/goodsControl.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_yd_Downloads_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Users_yd_Downloads_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Users_yd_Downloads_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Users_yd_Downloads_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Users_yd_Downloads_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goodsControl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Users/yd/Downloads/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../Users/yd/Downloads/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../Users/yd/Downloads/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../Users/yd/Downloads/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../Users/yd/Downloads/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./goodsControl.vue?vue&type=script&lang=js& */ 356);
/* harmony import */ var _Users_yd_Downloads_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Users_yd_Downloads_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Users_yd_Downloads_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Users_yd_Downloads_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Users_yd_Downloads_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goodsControl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_yd_Downloads_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Users_yd_Downloads_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Users_yd_Downloads_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Users_yd_Downloads_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Users_yd_Downloads_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goodsControl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Users_yd_Downloads_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Users_yd_Downloads_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Users_yd_Downloads_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Users_yd_Downloads_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Users_yd_Downloads_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goodsControl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Users_yd_Downloads_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Users_yd_Downloads_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Users_yd_Downloads_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Users_yd_Downloads_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Users_yd_Downloads_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goodsControl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Users_yd_Downloads_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Users_yd_Downloads_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Users_yd_Downloads_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Users_yd_Downloads_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Users_yd_Downloads_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goodsControl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 356:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/软件/xiaofendian-master/pages/shop/goodsControl/goodsControl.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;



















































































var _request = _interopRequireDefault(__webpack_require__(/*! @/common/request.js */ 46));
var _config = _interopRequireDefault(__webpack_require__(/*! @/common/config.js */ 47));
var _util = _interopRequireDefault(__webpack_require__(/*! @/common/util.js */ 48));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var divider = function divider() {__webpack_require__.e(/*! require.ensure | components/divider */ "components/divider").then((function () {return resolve(__webpack_require__(/*! @/components/divider.vue */ 534));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default =
{
  components: {
    divider: divider },

  data: function data() {
    return {
      background: {
        backgroundColor: '#fff' },

      typeIndex: 1,
      value1: 1,
      value2: 1,
      sell: 0,
      noSell: 0,
      showPop: false,
      showPop2: false,
      selectIndex: 0,
      options1: [{
        label: '全部',
        value: 1 },

      {
        label: '上架中',
        value: 2 },

      {
        label: '已上架',
        value: 3 }],



      options3: [{
        label: '上架时间由近到远',
        value: 1 },

      {
        label: '销量多少',
        value: 2 }],


      page: 1,
      show: false,
      reload: true,
      loadMore: false,
      status: 'more',
      contentText: {
        contentdown: '查看更多',
        contentrefresh: '加载中',
        contentnomore: '没有更多' },

      listData: [],
      is_put_shelves: "",
      is_asc: 1,
      nodata: false,
      scrollH: 0,
      deleteId: "" };

  },

  onShow: function onShow() {
    this.reload = true;
    this.page = 1;
    this.status = 'more';
    this.getData();
  },

  onLoad: function onLoad() {var _this = this;

    uni.getSystemInfo({
      success: function success(res) {
        _this.scrollH = res.windowHeight - uni.upx2px(160);
      } });



  },

  onReachBottom: function onReachBottom() {
    this.loadMore = true;
    this.page++;
    if (this.status == 'noMore') {
      return;
    }
    this.status = 'loading';
    this.getData();
  },

  onPullDownRefresh: function onPullDownRefresh() {
    this.reload = true;
    this.page = 1;
    this.status = 'more';
    this.getData();
  },

  methods: {

    toGoodsDetail: function toGoodsDetail(id) {
      uni.navigateTo({
        url: '../createGoods/createGoods?id=' + id });

    },

    changeState: function changeState(index) {
      if (index == 1) {
        this.is_put_shelves = "";
      } else if (index == 2) {
        this.is_put_shelves = -1;
      } else {
        this.is_put_shelves = 1;
      }

      this.reload = true;
      this.page = 1;
      this.status = 'more';
      this.getData();
    },

    changeOrder: function changeOrder(index) {
      console.log(index);
      this.is_asc = index;

      this.reload = true;
      this.page = 1;
      this.status = 'more';
      this.getData();
    },

    chooseOption: function chooseOption(index) {
      this.showPop = true;
      this.selectIndex = index;
    },

    deleteGoods: function deleteGoods(id) {
      this.showPop = false;
      this.showPop2 = true;
      this.deleteId = id;
    },

    deleteConfirm: function deleteConfirm() {var _this2 = this;
      // 发送到服务端
      _request.default.get("/goods/delete/" + this.deleteId).then(function (res) {
        //请求成功				
        console.log(res);
        uni.showToast({
          title: "删除成功",
          icon: 'success',
          complete: function complete() {
            setTimeout(function () {
              _this2.reload = true;
              _this2.page = 1;
              _this2.status = 'more';
              _this2.getData();
            }, 1000);
          } });


      }).catch(function (e) {

        //请求失败
        console.log("失败" + e);
      });
    },

    getData: function getData() {var _this3 = this;
      var data = {
        size: 10,
        current: this.page,
        is_asc: this.is_asc,
        is_put_shelves: this.is_put_shelves };


      // 发送到服务端
      _request.default.get("/goods/page/all", data).then(function (res) {
        uni.stopPullDownRefresh();
        //请求成功
        console.log(res);
        var list = res.data.records;

        var pages = res.data.pages;

        console.log(_this3.page);
        if (pages > 1 && _this3.page <= pages) {
          _this3.listData = _this3.reload ? list : _this3.listData.concat(list);
          _this3.nodata = false;
        } else if (pages == 0) {
          _this3.listData = [];
          _this3.nodata = true;
          _this3.status = 'noMore';

        } else if (pages == 1) {
          _this3.listData = list;
          _this3.status = 'noMore';
          _this3.nodata = false;
        } else {
          _this3.status = 'noMore';
        }

        _this3.reload = false;


      }).catch(function (e) {
        uni.stopPullDownRefresh();
        //请求失败
        console.log("失败" + e);
      });
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ })

},[[351,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/shop/goodsControl/goodsControl.js.map