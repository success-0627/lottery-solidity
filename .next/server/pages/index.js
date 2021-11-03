"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(831);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(215);
/* harmony import */ var routes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(routes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(46);
/* harmony import */ var utils_app_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(866);







const CampaignIndex = (props)=>{
    const { 0: campaigns , 1: setCampaigns  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { campaignFactorySC  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(utils_app_state__WEBPACK_IMPORTED_MODULE_6__/* .AppCtx */ .t);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (lodash__WEBPACK_IMPORTED_MODULE_3___default().isEmpty(campaignFactorySC)) return;
        campaignFactorySC.getDeployedCampaigns().call().then(setCampaigns);
    }, [
        campaignFactorySC
    ]);
    const renderCampaigns = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        const items = campaigns.map((address)=>{
            return {
                header: address,
                description: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(routes__WEBPACK_IMPORTED_MODULE_4__.Link, {
                    route: `/campaigns/${address}`,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        children: "View Campaign"
                    })
                }),
                fluid: true
            };
        }, []);
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Group, {
            items: items
        }));
    });
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_layout__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                    children: "Open Campaigns"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(routes__WEBPACK_IMPORTED_MODULE_4__.Link, {
                    route: "/campaigns/new",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                            floated: "right",
                            content: "Create Campaign",
                            icon: "add circle",
                            primary: true
                        })
                    })
                }),
                renderCampaigns()
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CampaignIndex);


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

/***/ 517:
/***/ ((module) => {

module.exports = require("lodash");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [46], () => (__webpack_exec__(678)));
module.exports = __webpack_exports__;

})();