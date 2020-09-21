(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{393:function(t,s,a){"use strict";a.r(s);var e=a(5),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"distribution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#distribution"}},[t._v("#")]),t._v(" Distribution")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),a("p",[t._v("Terra's Distribution module inherits from Cosmos SDK's "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/v0.37.4/docs/spec/distribution",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("distribution")]),a("OutboundLink")],1),t._v(" module. This document is a stub, and covers mainly important Terra-specific notes about how it is used.")])]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("Distribution")]),t._v(" module describes a mechanism that keeps track of collected fees and "),a("em",[t._v("passively")]),t._v(" distributes them to validators and delegators. In addition, the Distribution module also defines the "),a("a",{attrs:{href:"#community-pool"}},[t._v("Community Pool")]),t._v(", which are funds under the control of on-chain Governance.")]),t._v(" "),a("h2",{attrs:{id:"concepts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#concepts"}},[t._v("#")]),t._v(" Concepts")]),t._v(" "),a("h3",{attrs:{id:"validator-delegator-rewards"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validator-delegator-rewards"}},[t._v("#")]),t._v(" Validator & Delegator Rewards")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("IMPORTANT")]),t._v(" "),a("p",[t._v("Passive distribution means that validators and delegators will have to manually collect their fee rewards by submitting withdrawal transactions. Read up on how to do so with "),a("code",[t._v("terracli")]),t._v(" "),a("RouterLink",{attrs:{to:"/terracli/distribution.html"}},[t._v("here")]),t._v(".")],1)]),t._v(" "),a("p",[t._v("Collected rewards are pooled globally and divided out passively to validators and delegators. Each validator has the opportunity to charge commission to the delegators on the rewards collected on behalf of the delegators. Fees are collected directly into a global reward pool and validator proposer-reward pool. Due to the nature of passive accounting, whenever changes to parameters which affect the rate of reward distribution occurs, withdrawal of rewards must also occur.")]),t._v(" "),a("h3",{attrs:{id:"community-pool"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#community-pool"}},[t._v("#")]),t._v(" Community Pool")]),t._v(" "),a("p",[t._v("The Community Pool is a reserve of tokens that is designated for funding projects that promote further adoption and stimulate growth for the Terra economy. The portion of seigniorage that is designated for ballot winners of the Exchange Rate Oracle is called the "),a("RouterLink",{attrs:{to:"/dev/spec-treasury.html#reward-weight"}},[t._v("Reward Weight")]),t._v(", a value governed by the Treasury. The rest of that seigniorage is all dedicated to the Community Pool.")],1),t._v(" "),a("h2",{attrs:{id:"state"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#state"}},[t._v("#")]),t._v(" State")]),t._v(" "),a("blockquote",[a("p",[t._v("This section was taken from the official Cosmos SDK docs, and placed here for your convenience to understand the Distribution module's parameters and genesis variables.")])]),t._v(" "),a("h3",{attrs:{id:"feepool"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#feepool"}},[t._v("#")]),t._v(" FeePool")]),t._v(" "),a("p",[t._v("All globally tracked parameters for distribution are stored within\n"),a("code",[t._v("FeePool")]),t._v(". Rewards are collected and added to the reward pool and\ndistributed to validators/delegators from here.")]),t._v(" "),a("p",[t._v("Note that the reward pool holds decimal coins ("),a("code",[t._v("DecCoins")]),t._v(") to allow\nfor fractions of coins to be received from operations like inflation.\nWhen coins are distributed from the pool they are truncated back to\n"),a("code",[t._v("sdk.Coins")]),t._v(" which are non-decimal.")]),t._v(" "),a("h3",{attrs:{id:"validator-distribution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validator-distribution"}},[t._v("#")]),t._v(" Validator Distribution")]),t._v(" "),a("p",[t._v("Validator distribution information for the relevant validator is updated each time:")]),t._v(" "),a("ol",[a("li",[t._v("delegation amount to a validator is updated,")]),t._v(" "),a("li",[t._v("a validator successfully proposes a block and receives a reward,")]),t._v(" "),a("li",[t._v("any delegator withdraws from a validator, or")]),t._v(" "),a("li",[t._v("the validator withdraws it's commission.")])]),t._v(" "),a("h3",{attrs:{id:"delegation-distribution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delegation-distribution"}},[t._v("#")]),t._v(" Delegation Distribution")]),t._v(" "),a("p",[t._v("Each delegation distribution only needs to record the height at which it last\nwithdrew fees. Because a delegation must withdraw fees each time it's\nproperties change (aka bonded tokens etc.) its properties will remain constant\nand the delegator's "),a("em",[t._v("accumulation")]),t._v(" factor can be calculated passively knowing\nonly the height of the last withdrawal and its current properties.")]),t._v(" "),a("h2",{attrs:{id:"message-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#message-types"}},[t._v("#")]),t._v(" Message Types")]),t._v(" "),a("h3",{attrs:{id:"msgsetwithdrawaddress"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#msgsetwithdrawaddress"}},[t._v("#")]),t._v(" MsgSetWithdrawAddress")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" MsgSetWithdrawAddress "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tDelegatorAddress sdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AccAddress "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"delegator_address" yaml:"delegator_address"`')]),t._v("\n\tWithdrawAddress  sdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AccAddress "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"withdraw_address" yaml:"withdraw_address"`')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("JSON Example")]),t._v(" "),a("p",[t._v("Note that the type and name of the message are inconsistent.")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"distribution/MsgModifyWithdrawAddress"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"value"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"delegator_address"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"terra..."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"withdraw_address"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"terra..."')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("h3",{attrs:{id:"msgwithdrawdelegatorreward"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#msgwithdrawdelegatorreward"}},[t._v("#")]),t._v(" MsgWithdrawDelegatorReward")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// msg struct for delegation withdraw from a single validator")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" MsgWithdrawDelegatorReward "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tDelegatorAddress sdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AccAddress "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"delegator_address" yaml:"delegator_address"`')]),t._v("\n\tValidatorAddress sdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ValAddress "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"validator_address" yaml:"validator_address"`')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("JSON Example")]),t._v(" "),a("p",[t._v("There is an inconsistency between the message's name and its type.")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"distribution/MsgWithdrawDelegationReward"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"value"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"delegator_address"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"terra..."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"validator_address"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"terra..."')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("h3",{attrs:{id:"msgwithdrawvalidatorcommission"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#msgwithdrawvalidatorcommission"}},[t._v("#")]),t._v(" MsgWithdrawValidatorCommission")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" MsgWithdrawValidatorCommission "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tValidatorAddress sdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ValAddress "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"validator_address" yaml:"validator_address"`')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("JSON Example")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"distribution/MsgWithdrawValidatorCommission"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"value"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"validator_address"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"terravaloper..."')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("h3",{attrs:{id:"msgfundcommunitypool"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#msgfundcommunitypool"}},[t._v("#")]),t._v(" MsgFundCommunityPool")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" MsgFundCommunityPool "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tAmount    sdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Coins      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"amount" yaml:"amount"`')]),t._v("\n\tDepositor sdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AccAddress "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"depositor" yaml:"depositor"`')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("JSON Example")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"distribution/MsgFundCommunityPool"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"value"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"amount"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"denom"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"uluna"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"amount"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"999"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"depositor"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"terra..."')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("h2",{attrs:{id:"proposals"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#proposals"}},[t._v("#")]),t._v(" Proposals")]),t._v(" "),a("p",[t._v("The Distribution module defines a special proposal that upon being passed, will disburse the coins specified in "),a("code",[t._v("Amount")]),t._v(" to the "),a("code",[t._v("Recipient")]),t._v(" account using funds from the Community Pool.")]),t._v(" "),a("h3",{attrs:{id:"communitypoolspendproposal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#communitypoolspendproposal"}},[t._v("#")]),t._v(" "),a("code",[t._v("CommunityPoolSpendProposal")])]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" CommunityPoolSpendProposal "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tTitle       "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"title" yaml:"title"`')]),t._v("\n\tDescription "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"description" yaml:"description"`')]),t._v("\n\tRecipient   sdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AccAddress "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"recipient" yaml:"recipient"`')]),t._v("\n\tAmount      sdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Coins      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"amount" yaml:"amount"`')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"transitions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transitions"}},[t._v("#")]),t._v(" Transitions")]),t._v(" "),a("h3",{attrs:{id:"begin-block"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#begin-block"}},[t._v("#")]),t._v(" Begin-Block")]),t._v(" "),a("blockquote",[a("p",[t._v("This section was taken from the official Cosmos SDK docs, and placed here for your convenience to understand the Distribution module's parameters.")])]),t._v(" "),a("p",[t._v("At the beginning of the block, the Distribution module will set the proposer for determining distribution during endblock and distribute rewards for the previous block.")]),t._v(" "),a("p",[t._v("The fees received are transferred to the Distribution "),a("code",[t._v("ModuleAccount")]),t._v(", as it's the account the one who keeps track of the flow of coins in (as in this case) and out the module. The fees are also allocated to the proposer, community fund and global pool. When the validator is the proposer of the round, that validator (and their delegators) receives between 1% and 5% of fee rewards, the reserve "),a("a",{attrs:{href:"#communitytax"}},[t._v("Community Tax")]),t._v(" is then charged, then the remainder is distributed proportionally by voting power to all bonded validators independent of whether they voted (social distribution). Note the social distribution is applied to proposer validator in addition to the proposer reward.")]),t._v(" "),a("p",[t._v("The amount of proposer reward is calculated from pre-commits Tendermint messages in order to incentivize validators to wait and include additional pre-commits in the block. All provision rewards are added to a provision reward pool which validator holds individually ("),a("code",[t._v("ValidatorDistribution.ProvisionsRewardPool")]),t._v(").")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("AllocateTokens")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("feesCollected sdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Coins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" feePool FeePool"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" proposer ValidatorDistribution"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              sumPowerPrecommitValidators"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" totalBondedTokens"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" communityTax"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              proposerCommissionRate sdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Dec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n     "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SendCoins")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("FeeCollectorAddr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" DistributionModuleAccAddr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" feesCollected"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n     feesCollectedDec "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("MakeDecCoins")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("feesCollected"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n     proposerReward "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" feesCollectedDec "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.01")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.04")]),t._v("\n                       "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" sumPowerPrecommitValidators "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" totalBondedTokens"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n     commission "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" proposerReward "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" proposerCommissionRate\n     proposer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PoolCommission "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" commission\n     proposer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Pool "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" proposerReward "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" commission\n\n     communityFunding "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" feesCollectedDec "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" communityTax\n     feePool"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CommunityFund "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" communityFunding\n\n     poolReceived "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" feesCollectedDec "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" proposerReward "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" communityFunding\n     feePool"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Pool "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" poolReceived\n\n     "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SetValidatorDistribution")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("proposer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SetFeePool")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("feePool"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),a("p",[t._v("The subspace for the Distribution module is "),a("code",[t._v("distribution")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" GenesisState "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n\tCommunityTax        sdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Dec "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"community_tax" yaml:"community_tax"`')]),t._v("\n\tBaseProposerReward\tsdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Dec "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"base_proposer_reward" yaml:"base_proposer_reward"`')]),t._v("\n\tBonusProposerReward\tsdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Dec\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"bonus_proposer_reward" yaml:"bonus_proposer_reward"`')]),t._v("\n\tWithdrawAddrEnabled "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v(" \t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"withdraw_addr_enabled"`')]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"communitytax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#communitytax"}},[t._v("#")]),t._v(" CommunityTax")]),t._v(" "),a("ul",[a("li",[t._v("type: "),a("code",[t._v("Dec")])])]),t._v(" "),a("h3",{attrs:{id:"baseproposerreward"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#baseproposerreward"}},[t._v("#")]),t._v(" BaseProposerReward")]),t._v(" "),a("ul",[a("li",[t._v("type: "),a("code",[t._v("Dec")])])]),t._v(" "),a("h3",{attrs:{id:"bonusproposerreward"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bonusproposerreward"}},[t._v("#")]),t._v(" BonusProposerReward")]),t._v(" "),a("ul",[a("li",[t._v("type: "),a("code",[t._v("Dec")])])]),t._v(" "),a("h3",{attrs:{id:"withdrawaddrenabled"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#withdrawaddrenabled"}},[t._v("#")]),t._v(" WithdrawAddrEnabled")]),t._v(" "),a("ul",[a("li",[t._v("type: "),a("code",[t._v("bool")])])]),t._v(" "),a("h2",{attrs:{id:"events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("#")]),t._v(" Events")])])}),[],!1,null,null,null);s.default=r.exports}}]);