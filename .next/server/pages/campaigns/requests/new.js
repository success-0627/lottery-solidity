"use strict";
(() => {
var exports = {};
exports.id = 189;
exports.ids = [189];
exports.modules = {

/***/ 606:
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
/* harmony import */ var sc_Campaign_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(970);
/* harmony import */ var utils_get_web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(641);
/* harmony import */ var routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(215);
/* harmony import */ var routes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(routes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(46);







class RequestNew extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    state = {
        value: '',
        description: '',
        recipient: '',
        loading: false,
        errorMessage: ''
    };
    static async getInitialProps(props) {
        const { address  } = props.query;
        return {
            address
        };
    }
    onSubmit = async (event)=>{
        event.preventDefault();
        const campaign = sc_Campaign_json__WEBPACK_IMPORTED_MODULE_3__(this.props.address);
        const { description , value , recipient  } = this.state;
        this.setState({
            loading: true,
            errorMessage: ''
        });
        try {
            const accounts = await utils_get_web3__WEBPACK_IMPORTED_MODULE_4__/* ["default"].eth.getAccounts */ .Z.eth.getAccounts();
            await campaign.methods.createRequest(description, utils_get_web3__WEBPACK_IMPORTED_MODULE_4__/* ["default"].utils.toWei */ .Z.utils.toWei(value, 'ether'), recipient).send({
                from: accounts[0]
            });
            routes__WEBPACK_IMPORTED_MODULE_5__.Router.pushRoute(`/campaigns/${this.props.address}/requests`);
        } catch (err) {
            this.setState({
                errorMessage: err.message
            });
        }
        this.setState({
            loading: false
        });
    };
    render() {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_layout__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(routes__WEBPACK_IMPORTED_MODULE_5__.Link, {
                    route: `/campaigns/${this.props.address}/requests`,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        children: "Back"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                    children: "Create a Request"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form, {
                    onSubmit: this.onSubmit,
                    error: !!this.state.errorMessage,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Field, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    children: "Description"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
                                    value: this.state.description,
                                    onChange: (event)=>this.setState({
                                            description: event.target.value
                                        })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Field, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    children: "Value in Ether"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
                                    value: this.state.value,
                                    onChange: (event)=>this.setState({
                                            value: event.target.value
                                        })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Field, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    children: "Recipient"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
                                    value: this.state.recipient,
                                    onChange: (event)=>this.setState({
                                            recipient: event.target.value
                                        })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Message, {
                            error: true,
                            header: "Oops!",
                            content: this.state.errorMessage
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                            primary: true,
                            loading: this.state.loading,
                            children: "Create!"
                        })
                    ]
                })
            ]
        }));
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RequestNew);


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

/***/ }),

/***/ 519:
/***/ ((module) => {

module.exports = require("web3");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [46,140], () => (__webpack_exec__(606)));
module.exports = __webpack_exports__;

})();