"use strict";
(() => {
var exports = {};
exports.id = 211;
exports.ids = [211];
exports.modules = {

/***/ 813:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ lottery)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "use-async-memo"
const external_use_async_memo_namespaceObject = require("use-async-memo");
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(517);
var external_lodash_default = /*#__PURE__*/__webpack_require__.n(external_lodash_);
// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__(831);
// EXTERNAL MODULE: ./components/layout.js + 1 modules
var layout = __webpack_require__(46);
// EXTERNAL MODULE: ./utils/app-state.js
var app_state = __webpack_require__(866);
;// CONCATENATED MODULE: ./pages/lottery/index.js







/* harmony default export */ const lottery = ((props)=>{
    const { web3 , lotterySC  } = (0,external_react_.useContext)(app_state/* AppCtx */.t);
    const accounts = (0,external_use_async_memo_namespaceObject.useAsyncMemo)(async ()=>{
        if (external_lodash_default().isEmpty(web3)) return [];
        return await web3.eth.getAccounts();
    }, [
        web3
    ], []);
    const manager = (0,external_use_async_memo_namespaceObject.useAsyncMemo)(async ()=>{
        if (external_lodash_default().isEmpty(lotterySC)) return null;
        return await lotterySC.methods.manager().call();
    }, [
        lotterySC
    ]);
    const { 0: players1 , 1: setPlayers  } = (0,external_react_.useState)([]);
    const { 0: balance1 , 1: setBalance  } = (0,external_react_.useState)('');
    const { 0: enterValue , 1: setEnterValue  } = (0,external_react_.useState)('');
    const { 0: message , 1: setMessage  } = (0,external_react_.useState)('');
    (0,external_react_.useEffect)(()=>{
        if (external_lodash_default().isEmpty(lotterySC) || external_lodash_default().isEmpty(accounts)) return;
        Promise.all([
            lotterySC.methods.getPlayers().call(),
            web3.eth.getBalance(lotterySC.options.address), 
        ]).then(([players, balance])=>{
            setPlayers(players);
            setBalance(balance);
        });
    }, [
        lotterySC,
        accounts
    ]);
    const onSubmut = (0,external_react_.useCallback)(async (event)=>{
        event.preventDefault();
        setMessage('Waiting on transaction success...');
        await lotterySC.methods.enter().send({
            from: accounts[0],
            value: web3.utils.toWei(enterValue, 'ether')
        });
        setMessage('You have been entered!');
    });
    const onClick = (0,external_react_.useCallback)(async (event)=>{
        setMessage('Waiting on transaction success...');
        await lotterySC.methods.pickWinner().send({
            from: accounts[0]
        });
        setMessage('A winner has been picked!');
    });
    if (external_lodash_default().isEmpty(lotterySC) || external_lodash_default().isEmpty(manager) || external_lodash_default().isEmpty(accounts)) {
        return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: "Loading Web3, accounts, and contract..."
        }));
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx(layout/* default */.Z, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "card p-4",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Container, {
                className: "card-container purple-container",
                header: "Lottery",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        children: "Lottery Contract"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        children: [
                            "Contract Manager: ",
                            manager
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        children: [
                            "Current players: ",
                            players1.length
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        children: [
                            "Total Balance: ",
                            web3.utils.fromWei(balance1, 'ether'),
                            " ether"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Divider, {
                        type: "dashed"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                        onSubmit: onSubmut,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                children: "Want to try your luck?"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Input, {
                                fluid: true,
                                action: "Enter",
                                placeholder: "Amount of ether to enter",
                                onChange: (event)=>setEnterValue(event.target.value)
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Divider, {
                        type: "dashed"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                        children: "Ready to pick winner?"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
                        onClick: onClick,
                        label: "Pick a winner"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Divider, {
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                        children: message
                    })
                ]
            })
        })
    }));
});


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
var __webpack_exports__ = __webpack_require__.X(0, [46], () => (__webpack_exec__(813)));
module.exports = __webpack_exports__;

})();