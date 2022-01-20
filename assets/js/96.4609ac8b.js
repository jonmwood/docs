(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{489:function(e,r,t){"use strict";t.r(r);var a=t(5),o=Object(a.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"columbus-5-upgrade"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#columbus-5-upgrade"}},[e._v("#")]),e._v(" Columbus-5 upgrade")]),e._v(" "),t("p",[e._v("Columbus-5 is the newest iteration of the Terra Mainnet. Use these guides to upgrade to Columbus-5.")]),e._v(" "),t("h2",{attrs:{id:"migration-guides"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#migration-guides"}},[e._v("#")]),e._v(" Migration Guides")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/terra-money/mainnet/wiki/Columbus-5-Upgrade-Instructions",target:"_blank",rel:"noopener noreferrer"}},[e._v("Columbus-5 Upgrade Guide"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/CosmWasm/cosmwasm/blob/main/MIGRATING.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmwasm Migration Guide"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/terra-money/mainnet/wiki/Columbus-5-Wallet-Migration-Guide",target:"_blank",rel:"noopener noreferrer"}},[e._v("Wallet Migration Guide"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/terra-money/mainnet/wiki/Columbus-5-Contract-Migration-Guide",target:"_blank",rel:"noopener noreferrer"}},[e._v("Contract Migration Guide"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/terra-money/testnet/tree/master/bombay-12",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bombay-12 Testnet"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"columbus-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#columbus-5"}},[e._v("#")]),e._v(" Columbus-5")]),e._v(" "),t("p",[e._v("Columbus-5 will use Terra Core v0.5.5 which integrates Cosmos SDK v0.43.0 and CosmWasm v0.16.0.")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/terra-money/core/releases/tag/v0.5.5",target:"_blank",rel:"noopener noreferrer"}},[e._v("Release Binary"),t("OutboundLink")],1)])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ terrad version\nname: terra\nserver_name: terrad\nversion: 0.5.5\ncommit: d8e277626e74f9d6417dcd598574686882f0274c\nbuild_tags: netgo,ledger\ngo: go version go1.16.5 darwin/amd64\n")])])]),t("ul",[t("li",[t("strong",[e._v("Note:")]),e._v(" For JavaScript developers: "),t("code",[e._v("npm i -S @terra-money/terra.js@^2")])])]),e._v(" "),t("h3",{attrs:{id:"schedule"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#schedule"}},[e._v("#")]),e._v(" Schedule")]),e._v(" "),t("p",[t("strong",[e._v("Columbus-5:")]),e._v(" Columbus-4 will be halted at block height "),t("code",[e._v("#4,724,000")]),e._v("."),t("br"),e._v("\nExpected Timeline:")]),e._v(" "),t("blockquote",[t("p",[e._v("Wed Sep 29 2021 23:00:00 GMT-0800 (PDT)\nThu Sep 30 2021 07:00:00 GMT+0000 (UTC)\nThu Sep 30 2021 16:00:00 GMT+0900 (KST)")])]),e._v(" "),t("h3",{attrs:{id:"bombay-12-testnet"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bombay-12-testnet"}},[e._v("#")]),e._v(" Bombay-12 Testnet")]),e._v(" "),t("p",[e._v("The genesis event for Bombay-12 testnet will occur 2021-09-28T09:00:00Z (UTC).\nFor detailed instructions, see the "),t("a",{attrs:{href:"https://github.com/terra-money/testnet/tree/master/bombay-12",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bombay-12 testnet release guide"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"major-updates"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#major-updates"}},[e._v("#")]),e._v(" Major Updates")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/terra-money/core/blob/main/CHANGELOG.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Terra Mainnet Changelog"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://docs.cosmos.network/master/migrations/rest.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmos SDK breaking changes"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/releases/tag/v0.43.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmos SDK v0.43.0 (Stargate)"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/CosmWasm/cosmwasm/releases/tag/v0.16.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("CosmWasm v0.16.0"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("All seigniorage is now burned:\n"),t("ul",[t("li",[e._v("Change seigniorage "),t("code",[e._v("reward_weight")]),e._v(" to 1")]),e._v(" "),t("li",[t("code",[e._v("1-reward_weight")]),e._v(" will go to the community pool.")]),e._v(" "),t("li",[t("code",[e._v("max_change")]),e._v(" of "),t("code",[e._v("reward_weight")]),e._v(" is now 0")])])]),e._v(" "),t("li",[e._v("Swap fees now dividend to faithful oracles instead of being burned.")]),e._v(" "),t("li",[e._v("IBC "),t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/releases/tag/v1.1.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("v1.1.0."),t("OutboundLink")],1),e._v(" is now supported.")])]),e._v(" "),t("h3",{attrs:{id:"release-notes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#release-notes"}},[e._v("#")]),e._v(" Release Notes")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/terra-money/core/releases/tag/v0.5.5",target:"_blank",rel:"noopener noreferrer"}},[e._v("Terra Core v0.5.5"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/releases/tag/v0.43.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmos SDK v0.43.0 (Stargate)"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/CosmWasm/cosmwasm/releases/tag/v0.16.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("CosmWasm v0.16.0"),t("OutboundLink")],1)])]),e._v(" "),t("h3",{attrs:{id:"reference"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[e._v("#")]),e._v(" Reference")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://agora.terra.money/t/terra-core-priorities-for-q1-q2-2021/388",target:"_blank",rel:"noopener noreferrer"}},[e._v("Terra Core priorities for Q1/Q2 2021 (Agora)"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://medium.com/terra-money/columbus-5-bombay-09-update-4fdf94da0fe6",target:"_blank",rel:"noopener noreferrer"}},[e._v("Columbus-5 & Bombay-09 Update (Medium)"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://station.terra.money/proposal/119",target:"_blank",rel:"noopener noreferrer"}},[e._v("Governance Proposal 119"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/terra-money/mainnet/wiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("Terra Mainnet Wiki"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/terra-money/mainnet/wiki/Columbus-5-Official-Announcements",target:"_blank",rel:"noopener noreferrer"}},[e._v("Columbus-5 official announcements"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);r.default=o.exports}}]);