(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{455:function(a,s,t){"use strict";t.r(s);var e=t(5),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"commands"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#commands"}},[a._v("#")]),a._v(" Commands")]),a._v(" "),t("p",[a._v("This section describes the commands available from "),t("code",[a._v("terrad")]),a._v(", the command line interface that connects a running "),t("code",[a._v("terrad")]),a._v(" process.")]),a._v(" "),t("h2",{attrs:{id:"add-genesis-account"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#add-genesis-account"}},[a._v("#")]),a._v(" "),t("code",[a._v("add-genesis-account")])]),a._v(" "),t("p",[a._v("Adds a genesis account to "),t("code",[a._v("genesis.json")]),a._v(".")]),a._v(" "),t("p",[t("strong",[a._v("Syntax")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("terrad add-genesis-account "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("address-or-key-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'<amount><coin-denominator>,<amount><coin-denominator>'")]),a._v("\n")])])]),t("p",[t("strong",[a._v("Example")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("terrad add-genesis-account acc1 "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'200000000uluna,550000ukrw'")]),a._v("\n")])])]),t("h2",{attrs:{id:"collect-gentxs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#collect-gentxs"}},[a._v("#")]),a._v(" "),t("code",[a._v("collect-gentxs")])]),a._v(" "),t("p",[a._v("Collects genesis transactions and outputs them to "),t("code",[a._v("genesis.json")]),a._v(".")]),a._v(" "),t("p",[t("strong",[a._v("Syntax")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("terrad collect-gentxs\n")])])]),t("h2",{attrs:{id:"debug"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#debug"}},[a._v("#")]),a._v(" "),t("code",[a._v("debug")])]),a._v(" "),t("p",[a._v("Helps debug the application. For a list of syntax and subcommands, see the "),t("RouterLink",{attrs:{to:"/Reference/terrad/subcommands.html#debug-addr"}},[a._v("debug subcommands")]),a._v(".")],1),a._v(" "),t("h2",{attrs:{id:"export"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#export"}},[a._v("#")]),a._v(" "),t("code",[a._v("export")])]),a._v(" "),t("p",[a._v("Exports the state to JSON.")]),a._v(" "),t("p",[t("strong",[a._v("Syntax")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("terrad "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v("\n")])])]),t("h2",{attrs:{id:"gentx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gentx"}},[a._v("#")]),a._v(" "),t("code",[a._v("gentx")])]),a._v(" "),t("p",[a._v("Adds a genesis transaction to "),t("code",[a._v("genesis.json")]),a._v(".")]),a._v(" "),t("p",[t("strong",[a._v("Syntax")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("terrad gentx "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("key-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("amount"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("coin-denominator"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("p",[t("strong",[a._v("Example")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("terrad gentx myKey 1000000uluna --home"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/path/to/home/dir --keyring-backend"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("os --chain-id"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("test-chain-1 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --moniker"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"myValidator"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --commission-max-change-rate"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.01")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --commission-max-rate"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.0")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --commission-rate"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.07")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --details"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"..."')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --security-contact"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"..."')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --website"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"..."')]),a._v("\n")])])]),t("h2",{attrs:{id:"help"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#help"}},[a._v("#")]),a._v(" "),t("code",[a._v("help")])]),a._v(" "),t("p",[a._v("Shows help information.")]),a._v(" "),t("p",[t("strong",[a._v("Syntax")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("terrad "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("help")]),a._v("\n")])])]),t("h2",{attrs:{id:"init"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#init"}},[a._v("#")]),a._v(" "),t("code",[a._v("init")])]),a._v(" "),t("p",[a._v("Initializes the configuration files for a validator and a node.")]),a._v(" "),t("p",[t("strong",[a._v("Syntax")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("terrad init "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("moniker"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("p",[t("strong",[a._v("Example")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("terrad init myNode\n")])])]),t("h2",{attrs:{id:"keys"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keys"}},[a._v("#")]),a._v(" "),t("code",[a._v("keys")])]),a._v(" "),t("p",[a._v("Manages Keyring commands. For a list of syntax and subcommands, see the "),t("RouterLink",{attrs:{to:"/Reference/terrad/subcommands.html#keys-add"}},[a._v("keys subcommands")]),a._v(".")],1),a._v(" "),t("h2",{attrs:{id:"migrate"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#migrate"}},[a._v("#")]),a._v(" "),t("code",[a._v("migrate")])]),a._v(" "),t("p",[a._v("Migrates the source genesis into the target version and prints to STDOUT.")]),a._v(" "),t("p",[t("strong",[a._v("Syntax")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("terrad migrate "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("path-to-genesis-file"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("p",[t("strong",[a._v("Example")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("terrad migrate /genesis.json --chain-id"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("testnet --genesis-time"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2020")]),a._v("-04-19T17:00:00Z --initial-height"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("4000")]),a._v("\n")])])]),t("h2",{attrs:{id:"query"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#query"}},[a._v("#")]),a._v(" "),t("code",[a._v("query")])]),a._v(" "),t("p",[a._v("Manages queries. For a list of syntax and subcommands, see the "),t("RouterLink",{attrs:{to:"/Reference/terrad/subcommands.html#query-account"}},[a._v("query subcommands")]),a._v(".")],1),a._v(" "),t("h2",{attrs:{id:"rosetta"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rosetta"}},[a._v("#")]),a._v(" "),t("code",[a._v("rosetta")])]),a._v(" "),t("p",[a._v("Creates a Rosetta server.")]),a._v(" "),t("p",[t("strong",[a._v("Syntax")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("terrad rosetta\n")])])]),t("h2",{attrs:{id:"start"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#start"}},[a._v("#")]),a._v(" "),t("code",[a._v("start")])]),a._v(" "),t("p",[a._v("Runs the full node application with Tendermint in or out of process. By default, the application runs with Tendermint in process.")]),a._v(" "),t("p",[t("strong",[a._v("Syntax")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("terrad start\n")])])]),t("h2",{attrs:{id:"status"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[a._v("#")]),a._v(" "),t("code",[a._v("status")])]),a._v(" "),t("p",[a._v("Displays the status of a remote node.")]),a._v(" "),t("p",[t("strong",[a._v("Syntax")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("terrad status\n")])])]),t("h2",{attrs:{id:"tendermint"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tendermint"}},[a._v("#")]),a._v(" "),t("code",[a._v("tendermint")])]),a._v(" "),t("p",[a._v("Manages the Tendermint protocol. For a list of subcommands, see "),t("a",{attrs:{href:""}})]),a._v(" "),t("h2",{attrs:{id:"testnet"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#testnet"}},[a._v("#")]),a._v(" "),t("code",[a._v("testnet")])]),a._v(" "),t("p",[a._v("Creates a testnet with the specified number of directories and populates each directory with the necessary files.")]),a._v(" "),t("p",[t("strong",[a._v("Syntax")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("terrad testnet\n")])])]),t("p",[t("strong",[a._v("Example")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("terrad testnet --v "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("6")]),a._v(" --output-dir ./output --starting-ip-address "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".10.2\n")])])]),t("h2",{attrs:{id:"tx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tx"}},[a._v("#")]),a._v(" "),t("code",[a._v("tx")])]),a._v(" "),t("p",[a._v("Retrieves a transaction by its hash, account sequence, or signature. For a list of full syntax and subcommands, see the "),t("RouterLink",{attrs:{to:"/Reference/terrad/subcommands.html#tx-authz-exec"}},[a._v("tx subcommands")]),a._v(".")],1),a._v(" "),t("p",[t("strong",[a._v("Syntax to query by hash")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("terrad query tx "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("hash"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("p",[t("strong",[a._v("Syntax to query by account sequence")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("terrad query tx --type"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("acc_seq "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("address"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(":"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("sequence"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("p",[t("strong",[a._v("Syntax to query by signature")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("terrad query tx --type"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("signature "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("sig1_base64,sig2_base64"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("."),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("h2",{attrs:{id:"txs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#txs"}},[a._v("#")]),a._v(" "),t("code",[a._v("txs")])]),a._v(" "),t("p",[a._v("Retrieves transactions that match the specified events where results are paginated.")]),a._v(" "),t("p",[t("strong",[a._v("Syntax")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("terrad query txs --events "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'<event>'")]),a._v(" --page "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("page-number"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" --limit "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("number-of-results"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("p",[t("strong",[a._v("Example")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("terrad query txs --events "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'message.sender=cosmos1...&message.action=withdraw_delegator_reward'")]),a._v(" --page "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" --limit "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("30")]),a._v("\n")])])]),t("h2",{attrs:{id:"unsafe-reset-all"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#unsafe-reset-all"}},[a._v("#")]),a._v(" "),t("code",[a._v("unsafe-reset-all")])]),a._v(" "),t("p",[a._v("Resets the blockchain database, removes address book files, and resets "),t("code",[a._v("data/priv_validator_state.json")]),a._v(" to the genesis state.")]),a._v(" "),t("p",[t("strong",[a._v("Syntax")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("terrad unsafe-reset-all\n")])])]),t("h2",{attrs:{id:"validate-genesis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#validate-genesis"}},[a._v("#")]),a._v(" "),t("code",[a._v("validate-genesis")])]),a._v(" "),t("p",[a._v("Validates the genesis file at the default location or at the location specified.")]),a._v(" "),t("p",[t("strong",[a._v("Syntax")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("terrad validate-genesis "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("/path-to-file"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("p",[t("strong",[a._v("Example")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("terrad validate-genesis "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("/genesis.json"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("h2",{attrs:{id:"version"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[a._v("#")]),a._v(" "),t("code",[a._v("version")])]),a._v(" "),t("p",[a._v("Returns the version of Terra you're running.")]),a._v(" "),t("p",[t("strong",[a._v("Syntax")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("terrad version\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);