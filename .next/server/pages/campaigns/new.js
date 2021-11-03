"use strict";
(() => {
var exports = {};
exports.id = 86;
exports.ids = [86];
exports.modules = {

/***/ 127:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CampaignNew)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(831);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46);
/* harmony import */ var routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(215);
/* harmony import */ var routes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(routes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var utils_app_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(866);






function CampaignNew() {
    const { 0: minimumContribution , 1: setMinimumContribution  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: errorMessage , 1: setErrorMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { campaignFactorySC , accounts  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(utils_app_state__WEBPACK_IMPORTED_MODULE_5__/* .AppCtx */ .t);
    const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (event)=>{
        event.preventDefault();
        setLoading(true);
        setErrorMessage('');
        try {
            await campaignFactorySC.methods.createCampaign(minimumContribution).send({
                from: accounts[0]
            });
            routes__WEBPACK_IMPORTED_MODULE_4__.Router.pushRoute('/');
        } catch (err) {
            setErrorMessage(err.message);
        }
        setLoading(false);
    });
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_layout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                children: "Create a Campaign"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form, {
                onSubmit: onSubmit,
                error: !!errorMessage,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Field, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                children: "Minimum Contribution"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
                                label: "wei",
                                labelPosition: "right",
                                value: minimumContribution,
                                onChange: (event)=>setMinimumContribution(event.target.value)
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Message, {
                        error: true,
                        header: "Oops!",
                        content: errorMessage
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                        loading: loading,
                        primary: true,
                        children: "Create!"
                    })
                ]
            })
        ]
    }));
};


/***/ }),

/***/ 866:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ AppCtx),
/* harmony export */   "q": () => (/* binding */ getSmartContract)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const AppCtx = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createContext({
});
const getSmartContract = (web3, networkId, SC)=>{
    const deployedNetwork = SC.networks[networkId];
    return new web3.eth.Contract(SC.abi, deployedNetwork && deployedNetwork.address);
};


/***/ }),

/***/ 662:
/***/ ((module) => {

module.exports = require("next-routes");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 831:
/***/ ((module) => {

module.exports = require("semantic-ui-react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [46], () => (__webpack_exec__(127)));
module.exports = __webpack_exports__;

})();