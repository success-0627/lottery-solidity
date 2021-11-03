"use strict";
(() => {
var exports = {};
exports.id = 164;
exports.ids = [164];
exports.modules = {

/***/ 979:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ campaigns)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__(831);
// EXTERNAL MODULE: ./components/layout.js + 1 modules
var layout = __webpack_require__(46);
// EXTERNAL MODULE: ./etherium/build/contracts/Campaign.json
var Campaign = __webpack_require__(970);
// EXTERNAL MODULE: ./utils/get-web3.js
var get_web3 = __webpack_require__(641);
// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__(215);
;// CONCATENATED MODULE: ./components/contribute-form.js






class ContributeForm extends external_react_.Component {
    state = {
        value: '',
        errorMessage: '',
        loading: false
    };
    onSubmit = async (event)=>{
        event.preventDefault();
        const campaign = Campaign(this.props.address);
        this.setState({
            loading: true,
            errorMessage: ''
        });
        try {
            const accounts = await get_web3/* default.eth.getAccounts */.Z.eth.getAccounts();
            await campaign.methods.contribute().send({
                from: accounts[0],
                value: get_web3/* default.utils.toWei */.Z.utils.toWei(this.state.value, 'ether')
            });
            routes.Router.replaceRoute(`/campaigns/${this.props.address}`);
        } catch (err) {
            this.setState({
                errorMessage: err.message
            });
        }
        this.setState({
            loading: false,
            value: ''
        });
    };
    render() {
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Form, {
            onSubmit: this.onSubmit,
            error: !!this.state.errorMessage,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Form.Field, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            children: "Amount to Contribute"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Input, {
                            value: this.state.value,
                            onChange: (event)=>this.setState({
                                    value: event.target.value
                                })
                            ,
                            label: "ether",
                            labelPosition: "right"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Message, {
                    error: true,
                    header: "Oops!",
                    content: this.state.errorMessage
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
                    primary: true,
                    loading: this.state.loading,
                    children: "Contribute!"
                })
            ]
        }));
    }
}
/* harmony default export */ const contribute_form = (ContributeForm);

;// CONCATENATED MODULE: ./pages/campaigns/index.js








class CampaignShow extends external_react_.Component {
    static async getInitialProps(props) {
        const campaign = Campaign(props.query.address);
        const summary = await campaign.methods.getSummary().call();
        return {
            address: props.query.address,
            minimumContribution: summary[0],
            balance: summary[1],
            requestsCount: summary[2],
            approversCount: summary[3],
            manager: summary[4]
        };
    }
    renderCards() {
        const { balance , manager , minimumContribution , requestsCount , approversCount  } = this.props;
        const items = [
            {
                header: manager,
                meta: 'Address of Manager',
                description: 'The manager created this campaign and can create requests to withdraw money',
                style: {
                    overflowWrap: 'break-word'
                }
            },
            {
                header: minimumContribution,
                meta: 'Minimum Contribution (wei)',
                description: 'You must contribute at least this much wei to become an approver'
            },
            {
                header: requestsCount,
                meta: 'Number of Requests',
                description: 'A request tries to withdraw money from the contract. Requests must be approved by approvers'
            },
            {
                header: approversCount,
                meta: 'Number of Approvers',
                description: 'Number of people who have already donated to this campaign'
            },
            {
                header: get_web3/* default.utils.fromWei */.Z.utils.fromWei(balance, 'ether'),
                meta: 'Campaign Balance (ether)',
                description: 'The balance is how much money this campaign has left to spend.'
            }
        ];
        return(/*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Card.Group, {
            items: items
        }));
    }
    render() {
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(layout/* default */.Z, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                    children: "Campaign Show"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Grid, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Grid.Row, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Grid.Column, {
                                    width: 10,
                                    children: this.renderCards()
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Grid.Column, {
                                    width: 6,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(contribute_form, {
                                        address: this.props.address
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Grid.Row, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Grid.Column, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(routes.Link, {
                                    route: `/campaigns/${this.props.address}/requests`,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
                                            primary: true,
                                            children: "View Requests"
                                        })
                                    })
                                })
                            })
                        })
                    ]
                })
            ]
        }));
    }
}
/* harmony default export */ const campaigns = (CampaignShow);


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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [46,140], () => (__webpack_exec__(979)));
module.exports = __webpack_exports__;

})();