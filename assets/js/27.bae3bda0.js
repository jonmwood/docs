(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{403:function(t,s,a){"use strict";a.r(s);var e=a(5),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"wasm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wasm"}},[t._v("#")]),t._v(" WASM")]),t._v(" "),a("p",[t._v("The WASM module implements the execution environment for WebAssembly smart contracts, powered by "),a("a",{attrs:{href:"https://cosmwasm.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("CosmWasm"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"concepts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#concepts"}},[t._v("#")]),t._v(" Concepts")]),t._v(" "),a("h3",{attrs:{id:"smart-contracts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#smart-contracts"}},[t._v("#")]),t._v(" Smart Contracts")]),t._v(" "),a("p",[t._v("Smart contracts are autonomous agents that are able to interact with other entities on the Terra blockchain, such as human-owned accounts, validators, and other smart contracts. Each smart contract has:")]),t._v(" "),a("ul",[a("li",[t._v("a unique "),a("strong",[t._v("contract address")]),t._v(" with an account that holds funds")]),t._v(" "),a("li",[t._v("a "),a("strong",[t._v("code ID")]),t._v(", where its logic is defined")]),t._v(" "),a("li",[t._v("its own "),a("strong",[t._v("key-value store")]),t._v(", where it can persist and retrieve data")])]),t._v(" "),a("h4",{attrs:{id:"contract-address"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contract-address"}},[t._v("#")]),t._v(" Contract Address")]),t._v(" "),a("p",[t._v("Upon instantiation, each contract is automatically assigned a Terra account address, called the "),a("em",[t._v("contract address")]),t._v(". The address is procedurally generated on-chain without an accompanying private / public key pair, and can be completely determined by the contract's number order of existence. For instance, on two separate Terra networks, the first contract will always be assigned the address "),a("code",[t._v("terra18vd8fpwxzck93qlwghaj6arh4p7c5n896xzem5")]),t._v(", and similarly for the second, third, and so forth.")]),t._v(" "),a("h4",{attrs:{id:"code-id"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code-id"}},[t._v("#")]),t._v(" Code ID")]),t._v(" "),a("p",[t._v("On Terra, code upload and contract creation occur as separate events. A smart contract writer first uploads WASM bytecode onto the blockchain to obtain a "),a("em",[t._v("code ID")]),t._v(", which they can then use to initialize an instance of that contract. This scheme promotes efficient storage, as most contracts share the same underlying logic and vary only in their initial configuration. Vetted, high quality contracts for common use cases such as fungible tokens and multisig wallets can be easily reused without the need to upload new code.")]),t._v(" "),a("h4",{attrs:{id:"key-value-store"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#key-value-store"}},[t._v("#")]),t._v(" Key-Value Store")]),t._v(" "),a("p",[t._v("Each smart contract is given its own dedicated keyspace in LevelDB, prefixed by the contract address. Contract code is safely sandboxed and can only can set and delete new keys and values within its assigned keyspace.")]),t._v(" "),a("h3",{attrs:{id:"interaction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interaction"}},[t._v("#")]),t._v(" Interaction")]),t._v(" "),a("p",[t._v("Users can interact with smart contracts in several ways.")]),t._v(" "),a("h4",{attrs:{id:"instantiation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#instantiation"}},[t._v("#")]),t._v(" Instantiation")]),t._v(" "),a("p",[t._v("A user can instantiate a new smart contract by sending a "),a("code",[t._v("MsgInstantiateContract")]),t._v(". In it, the user is able to:")]),t._v(" "),a("ul",[a("li",[t._v("specify code will be used for the contract via a code ID")]),t._v(" "),a("li",[t._v("define the initial parameters / configuration through an "),a("code",[t._v("InitMsg")])]),t._v(" "),a("li",[t._v("provide the new contract's account with some initial funds")]),t._v(" "),a("li",[t._v("denote whether the contract is migratable (can change code IDs)")])]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("InitMsg")]),t._v(" is a JSON message whose expected format is defined in the contract's code. Every contract contains a section that defines how to set up the initial state depending on the provided "),a("code",[t._v("InitMsg")]),t._v(".")]),t._v(" "),a("p",[t._v("By default, the user that creates the contract is its initial owner.")]),t._v(" "),a("h4",{attrs:{id:"execution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#execution"}},[t._v("#")]),t._v(" Execution")]),t._v(" "),a("p",[t._v("A user can execute a smart contract to invoke one of its defined functions by sending a "),a("code",[t._v("MsgExecuteContract")]),t._v(". In it, the user is able to:")]),t._v(" "),a("ul",[a("li",[t._v("specify which function to call with a "),a("code",[t._v("HandleMsg")])]),t._v(" "),a("li",[t._v("send funds to the contract, which may be expected during execution")])]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("HandleMsg")]),t._v(" is a JSON message that containing function call arguments and gets routed to the appropriate handling logic. From there, the contract executes the function's instructions, during which the contract's own state can modified. The contract can only modify outside state (such as state in other contracts or modules) after its own execution has ended, by returning a list of blockchain messages such as "),a("code",[t._v("MsgSend")]),t._v(" and "),a("code",[t._v("MsgSwap")]),t._v(". These messages are appended to the same transaction as the "),a("code",[t._v("MsgExecuteContract")]),t._v(", and if any of the messages are invalid, the whole transaction is invalidated.")]),t._v(" "),a("h4",{attrs:{id:"migration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#migration"}},[t._v("#")]),t._v(" Migration")]),t._v(" "),a("p",[t._v("If a user is the contract's owner, and a contract is instantiated as migratable, they can issue a "),a("code",[t._v("MsgMigrateContract")]),t._v(" to reset its code ID to a new one. The migration is be parameterized with a "),a("code",[t._v("MigrateMsg")]),t._v(", a JSON message.")]),t._v(" "),a("h4",{attrs:{id:"transfer-of-ownership"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transfer-of-ownership"}},[t._v("#")]),t._v(" Transfer of Ownership")]),t._v(" "),a("p",[t._v("The current owner of the smart contract can re-assign a new owner to the contract with "),a("code",[t._v("MsgUpdateContractOwner")]),t._v(".")]),t._v(" "),a("h4",{attrs:{id:"query"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query"}},[t._v("#")]),t._v(" Query")]),t._v(" "),a("p",[t._v("Contracts can define query functions, or read-only operations meant for data-retrieval. This allows contracts to expose rich, custom data endpoints with JSON responses instead of raw bytes from the low-level key-value store. Because the blockchain state cannot be changed, the node can directly run the query without a transaction.")]),t._v(" "),a("p",[t._v("Users can specify which query function alongside any arguments with a JSON "),a("code",[t._v("QueryMsg")]),t._v(". Even though there is no gas fee, the query function's execution is capped by gas determined by metered execution (which is not charged) as a form of spam-protection.")]),t._v(" "),a("h3",{attrs:{id:"wasmer-vm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wasmer-vm"}},[t._v("#")]),t._v(" Wasmer VM")]),t._v(" "),a("p",[t._v("The actual execution of WASM bytecode is performed by "),a("a",{attrs:{href:"https://github.com/wasmerio/wasmer",target:"_blank",rel:"noopener noreferrer"}},[t._v("wasmer"),a("OutboundLink")],1),t._v(", which provides a lightweight sandboxed runtime with metered execution to account for the resource cost of computation.")]),t._v(" "),a("h4",{attrs:{id:"gas-meter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gas-meter"}},[t._v("#")]),t._v(" Gas Meter")]),t._v(" "),a("p",[t._v("In addition to the regular gas fees incurred from creating the transaction, Terra also calculates a separate gas when executing smart contract code. This is tracked by the "),a("strong",[t._v("gas meter")]),t._v(", which is during the execution of every opcode and gets translated back to native Terra gas via a constant multiplier (currently set to 100).")]),t._v(" "),a("h2",{attrs:{id:"data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data"}},[t._v("#")]),t._v(" Data")]),t._v(" "),a("h3",{attrs:{id:"codeinfo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#codeinfo"}},[t._v("#")]),t._v(" CodeInfo")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" CodeInfo "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tCodeID   "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint64")]),t._v("           "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"code_id"`')]),t._v("\n\tCodeHash core"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Base64Bytes "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"code_hash"`')]),t._v("\n\tCreator  sdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AccAddress   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"creator"`')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"contractinfo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contractinfo"}},[t._v("#")]),t._v(" ContractInfo")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" ContractInfo "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tAddress    sdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AccAddress   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"address"`')]),t._v("\n\tOwner      sdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AccAddress   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"owner"`')]),t._v("\n\tCodeID     "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint64")]),t._v("           "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"code_id"`')]),t._v("\n\tInitMsg    core"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Base64Bytes "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"init_msg"`')]),t._v("\n\tMigratable "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v("             "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"migratable"`')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"state"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#state"}},[t._v("#")]),t._v(" State")]),t._v(" "),a("h3",{attrs:{id:"lastcodeid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lastcodeid"}},[t._v("#")]),t._v(" LastCodeID")]),t._v(" "),a("p",[t._v("A counter for the last uploaded code ID.")]),t._v(" "),a("ul",[a("li",[t._v("type: "),a("code",[t._v("uint64")])])]),t._v(" "),a("h3",{attrs:{id:"lastinstanceid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lastinstanceid"}},[t._v("#")]),t._v(" LastInstanceID")]),t._v(" "),a("p",[t._v("A counter for the last instantiated contract number.")]),t._v(" "),a("ul",[a("li",[t._v("type: "),a("code",[t._v("uint64")])])]),t._v(" "),a("h3",{attrs:{id:"code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code"}},[t._v("#")]),t._v(" Code")]),t._v(" "),a("p",[t._v("Maps a code ID to "),a("code",[t._v("CodeInfo")]),t._v(" entry.")]),t._v(" "),a("ul",[a("li",[t._v("type: "),a("code",[t._v("map[uint64]CodeInfo")])])]),t._v(" "),a("h3",{attrs:{id:"contractinfo-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contractinfo-2"}},[t._v("#")]),t._v(" ContractInfo")]),t._v(" "),a("p",[t._v("Maps contract address to its corresponding "),a("code",[t._v("ContractInfo")]),t._v(".")]),t._v(" "),a("ul",[a("li",[t._v("type: "),a("code",[t._v("map[bytes]ContractInfo")])])]),t._v(" "),a("h3",{attrs:{id:"contractstore"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contractstore"}},[t._v("#")]),t._v(" ContractStore")]),t._v(" "),a("p",[t._v("Maps contract address to its dedicated KVStore.")]),t._v(" "),a("ul",[a("li",[t._v("type: "),a("code",[t._v("map[bytes]KVStore")])])]),t._v(" "),a("h2",{attrs:{id:"message-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#message-types"}},[t._v("#")]),t._v(" Message Types")]),t._v(" "),a("h3",{attrs:{id:"msgstorecode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#msgstorecode"}},[t._v("#")]),t._v(" MsgStoreCode")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" MsgStoreCode "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tSender sdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AccAddress "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"sender" yaml:"sender"`')]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// WASMByteCode can be raw or gzip compressed")]),t._v("\n\tWASMByteCode core"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Base64Bytes "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"wasm_byte_code" yaml:"wasm_byte_code"`')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("JSON Example")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"wasm/MsgStoreCode"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"value"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sender"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"terra..."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"wasm_byte_code"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"QmFzZTY0LWVuY29kZWQgV0FTTSBiaW5hcnk="')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("h3",{attrs:{id:"msginstantiatecontract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#msginstantiatecontract"}},[t._v("#")]),t._v(" MsgInstantiateContract")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" MsgInstantiateContract "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tOwner      sdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AccAddress   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"owner" yaml:"owner"`')]),t._v("\n\tCodeID     "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint64")]),t._v("           "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"code_id" yaml:"code_id"`')]),t._v("\n\tInitMsg    core"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Base64Bytes "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"init_msg" yaml:"init_msg"`')]),t._v("\n\tInitCoins  sdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Coins        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"init_coins" yaml:"init_coins"`')]),t._v("\n\tMigratable "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v("             "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"migratable" yaml:"migratable"`')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("JSON Example")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"wasm/MsgInstantiateContract"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"value"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"owner"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"terra..."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code_id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"23"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"init_msg"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eyJlbmNvZGVkIjogIkpTT04gbWVzc2FnZSJ9"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"init_coins"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"denom"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"uluna"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"amount"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"999"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"migratable"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("h3",{attrs:{id:"msgexecutecontract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#msgexecutecontract"}},[t._v("#")]),t._v(" MsgExecuteContract")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" MsgExecuteContract "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tSender     sdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AccAddress   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"sender" yaml:"sender"`')]),t._v("\n\tContract   sdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AccAddress   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"contract" yaml:"contract"`')]),t._v("\n\tExecuteMsg core"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Base64Bytes "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"execute_msg" yaml:"execute_msg"`')]),t._v("\n\tCoins      sdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Coins        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"coins" yaml:"coins"`')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("JSON Example")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"wasm/MsgExecuteContract"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"value"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sender"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"terra..."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"contract"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"terra..."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"execute_msg"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eyJlbmNvZGVkIjogIkpTT04gbWVzc2FnZSJ9"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"coins"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"denom"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"uluna"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"amount"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"999"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("h3",{attrs:{id:"msgmigratecontract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#msgmigratecontract"}},[t._v("#")]),t._v(" MsgMigrateContract")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" MsgMigrateContract "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tOwner      sdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AccAddress   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"owner" yaml:"owner"`')]),t._v("\n\tContract   sdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AccAddress   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"contract" yaml:"contract"`')]),t._v("\n\tNewCodeID  "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint64")]),t._v("           "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"new_code_id" yaml:"new_code_id"`')]),t._v("\n\tMigrateMsg core"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Base64Bytes "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"migrate_msg" yaml:"migrate_msg"`')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("JSON Example")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"wasm/MsgMigrateContract"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"value"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"owner"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"terra..."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"contract"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"terra..."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"new_code_id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"45"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"migrate_msg"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eyJlbmNvZGVkIjogIkpTT04gbWVzc2FnZSJ9"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("h3",{attrs:{id:"msgupdatecontractowner"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#msgupdatecontractowner"}},[t._v("#")]),t._v(" MsgUpdateContractOwner")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" MsgUpdateContractOwner "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tOwner    sdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AccAddress "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"owner" yaml:"owner"`')]),t._v("\n\tNewOwner sdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AccAddress "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"new_owner" yaml:"new_owner"`')]),t._v("\n\tContract sdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AccAddress "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"contract" yaml:"contract"`')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("JSON Example")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"wasm/MsgUpdateContractOwner"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"value"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"owner"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"terra..."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"new_owner"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"terra..."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"contract"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"terra..."')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("h2",{attrs:{id:"transitions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transitions"}},[t._v("#")]),t._v(" Transitions")]),t._v(" "),a("h2",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),a("p",[t._v("The subspace for the WASM module is "),a("code",[t._v("wasm")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Params "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tMaxContractSize    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint64")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"max_contract_size" yaml:"max_contract_size"`')]),t._v("\n\tMaxContractGas     "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint64")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"max_contract_gas" yaml:"max_contract_gas"`')]),t._v("\n\tMaxContractMsgSize "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint64")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"max_contract_msg_size" yaml:"max_contract_msg_size"`')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"maxcontractsize"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#maxcontractsize"}},[t._v("#")]),t._v(" MaxContractSize")]),t._v(" "),a("p",[t._v("Maximum contract bytecode size, in bytes.")]),t._v(" "),a("ul",[a("li",[t._v("type: "),a("code",[t._v("uint64")])])]),t._v(" "),a("h3",{attrs:{id:"maxcontractgas"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#maxcontractgas"}},[t._v("#")]),t._v(" MaxContractGas")]),t._v(" "),a("p",[t._v("Maximum contract gas consumption during any execution.")]),t._v(" "),a("ul",[a("li",[t._v("type: "),a("code",[t._v("uint64")])])]),t._v(" "),a("h3",{attrs:{id:"maxcontractmsgsize"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#maxcontractmsgsize"}},[t._v("#")]),t._v(" MaxContractMsgSize")]),t._v(" "),a("p",[t._v("Maximum contract message size, in bytes.")]),t._v(" "),a("ul",[a("li",[t._v("type: "),a("code",[t._v("uint64")])])]),t._v(" "),a("h2",{attrs:{id:"events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("#")]),t._v(" Events")])])}),[],!1,null,null,null);s.default=n.exports}}]);