(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{486:function(t,e,a){"use strict";a.r(e);var r=a(5),o=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"environment-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#environment-setup"}},[t._v("#")]),t._v(" Environment Setup")]),t._v(" "),a("p",[t._v("As a smart contract developer, you will need to write, compile, upload, and test your contracts before deploying them to be used on the Columbus mainnet. As this development process can involve manually juggling multiple moving parts over many iterations, it is helpful to first set up a specialized environment to streamline development.")]),t._v(" "),a("h2",{attrs:{id:"install-terra-core-locally"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-terra-core-locally"}},[t._v("#")]),t._v(" Install Terra Core locally")]),t._v(" "),a("p",[t._v("Visit "),a("RouterLink",{attrs:{to:"/How-to/Run-a-full-Terra-node/Build-Terra-core.html"}},[t._v("build Terra core")]),t._v(" to install the latest version of Terra Core to obtain a working version of "),a("code",[t._v("terrad")]),t._v(". You will need this to connect to your local Terra test network to work with smart contracts.")],1),t._v(" "),a("h2",{attrs:{id:"download-localterra"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#download-localterra"}},[t._v("#")]),t._v(" Download LocalTerra")]),t._v(" "),a("p",[t._v("In order to work with Terra Smart Contracts, you should have access to a Terra network that includes the WASM integration.")]),t._v(" "),a("p",[t._v("In this tutorial, we will be using "),a("a",{attrs:{href:"https://github.com/terra-money/localterra",target:"_blank",rel:"noopener noreferrer"}},[t._v("LocalTerra"),a("OutboundLink")],1),t._v(", a package that enables you to easily spin up a local, WASM-enabled private testnet. This reduces the friction of development by giving you complete control of a private Terra blockchain with the possibility to easily reset the world state.")]),t._v(" "),a("p",[t._v("To use "),a("strong",[t._v("LocalTerra")]),t._v(", you should first make sure Docker is installed on your computer by following the "),a("a",{attrs:{href:"https://www.docker.com/get-started",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker get-started tutorial"),a("OutboundLink")],1),t._v(". You will also need to set up and configure "),a("a",{attrs:{href:"https://docs.docker.com/compose/install/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker Compose"),a("OutboundLink")],1),t._v(" on your machine.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone --depth "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" https://github.com/terra-money/localterra\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" localterra\ndocker-compose up\n")])])]),a("p",[t._v("You should now have a local testnet running on your machine, with the following configurations:")]),t._v(" "),a("ul",[a("li",[t._v("Node listening on RPC port "),a("code",[t._v("26657")])]),t._v(" "),a("li",[t._v("LCD running on port "),a("code",[t._v("1317")])]),t._v(" "),a("li",[t._v("Swagger Documentation at "),a("a",{attrs:{href:"http://localhost:3060/swagger",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:3060/swagger"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("The account with the following mnemonic is the sole validator on the network and has enough funds to get started with smart contracts.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("satisfy adjust timber high purchase tuition stool faith fine install that you unaware feed domain license impose boss human eager hat rent enjoy dawn\n")])])]),a("h2",{attrs:{id:"install-rust"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-rust"}},[t._v("#")]),t._v(" Install Rust")]),t._v(" "),a("p",[t._v("While WASM smart contracts can theoretically be written in any programming language, we currently only recommend using Rust as it is the only language for which mature libraries and tooling exist for CosmWasm. For this tutorial, you'll need to also install the latest version of Rust by following the instructions "),a("a",{attrs:{href:"https://www.rust-lang.org/tools/install",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("Once you'll installed Rust and its toolchain (cargo et al.), you'll need to add the "),a("code",[t._v("wasm32-unknown-unknown")]),t._v(" compilation target.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("rustup default stable\nrustup target "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" wasm32-unknown-unknown\n")])])]),a("p",[t._v("Then, install "),a("code",[t._v("cargo-generate")]),t._v(", which we will need for bootstrapping new CosmWasm smart contracts via a template.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("cargo "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" cargo-generate --features vendored-openssl\n")])])]),a("p",[t._v("Next, install "),a("code",[t._v("cargo-run-script")]),t._v(", which is required to optimize smart contracts.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("cargo "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" cargo-run-script\n")])])])])}),[],!1,null,null,null);e.default=o.exports}}]);