(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{441:function(e,t,n){"use strict";n.r(t);var r=n(5),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"fee-grant"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#fee-grant"}},[e._v("#")]),e._v(" Fee grant")]),e._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),n("p",[e._v("Terra's fee grant module inherits from the Cosmos SDK's "),n("a",{attrs:{href:"https://docs.cosmos.network/master/modules/feegrant/",target:"_blank",rel:"noopener noreferrer"}},[n("code",[e._v("feegrant")]),n("OutboundLink")],1),e._v(" module. This document is a stub and explains mainly important Terra-specific notes about how it is used.")])]),e._v(" "),n("p",[e._v("This module allows an account, the granter, to permit another account, the grantee, to pay for fees from the granter's account balance. Grantees will not need to maintain their own balance for paying fees.")]),e._v(" "),n("h2",{attrs:{id:"concepts"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#concepts"}},[e._v("#")]),e._v(" Concepts")]),e._v(" "),n("h3",{attrs:{id:"grant"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#grant"}},[e._v("#")]),e._v(" Grant")]),e._v(" "),n("p",[n("code",[e._v("Grant")]),e._v(" is stored in the KVStore to record a grant with full context.")]),e._v(" "),n("p",[e._v("Every "),n("code",[e._v("grant")]),e._v(" contains the following information:")]),e._v(" "),n("ul",[n("li",[n("p",[n("code",[e._v("granter")]),e._v(": The account address that gives permission to the grantee.")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("grantee")]),e._v(": The beneficiary account address.")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("allowance")]),e._v(": The "),n("a",{attrs:{href:"#fee-allowance-types"}},[e._v("type of fee allowance")]),e._v(" given to the grantee. "),n("code",[e._v("Allowance")]),e._v(" accepts an interface that implements "),n("code",[e._v("FeeAllowanceI")]),e._v(" encoded as "),n("code",[e._v("Any")]),e._v(" type, as shown in the following example:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('  // allowance can be any of basic and filtered fee allowance.\n  google.protobuf.Any allowance = 3 [(cosmos_proto.accepts_interface) = "FeeAllowanceI"];\n}\n')])])]),n("p",[e._v("The following example shows "),n("code",[e._v("FeeAllowanceI")]),e._v(":")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("type FeeAllowanceI interface {\n        // Accept can use fee payment requested as well as timestamp of the current block\n        // to determine whether or not to process this. This is checked in\n        // Keeper.UseGrantedFees and the return values should match how it is handled there.\n        //\n        // If it returns an error, the fee payment is rejected, otherwise it is accepted.\n        // The FeeAllowance implementation is expected to update it's internal state\n        // and will be saved again after an acceptance.\n        //\n        // If remove is true (regardless of the error), the FeeAllowance will be deleted from storage\n        // (eg. when it is used up). (See call to RevokeFeeAllowance in Keeper.UseGrantedFees)\n        Accept(ctx sdk.Context, fee sdk.Coins, msgs []sdk.Msg) (remove bool, err error)\n\n        // ValidateBasic should evaluate this FeeAllowance for internal consistency.\n        // Don't allow negative amounts, or negative periods for example.\n        ValidateBasic() error\n}\n")])])])])]),e._v(" "),n("p",[e._v("Only one fee grant is allowed between a granter and a grantee. Self-grants are prohibited.")]),e._v(" "),n("h3",{attrs:{id:"fee-allowance-types"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#fee-allowance-types"}},[e._v("#")]),e._v(" Fee allowance types")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#basicallowance"}},[n("code",[e._v("BasicAllowance")])])]),e._v(" "),n("li",[n("a",{attrs:{href:"#periodicallowance"}},[n("code",[e._v("PeriodicAllowance")])])])]),e._v(" "),n("p",[n("code",[e._v("BasicAllowance")]),e._v(" permits the grantee to pay fees by using funds from the  granter's account. If the threshold for either "),n("code",[e._v("spend_limit")]),e._v(" or "),n("code",[e._v("expiration")]),e._v(" is met, the grant is removed from the state.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// BasicAllowance implements Allowance with a one-time grant of tokens\n// that optionally expires. The grantee can use up to SpendLimit to cover fees.\nmessage BasicAllowance {\n  option (cosmos_proto.implements_interface) = "FeeAllowanceI";\n\n  // spend_limit specifies the maximum amount of tokens that can be spent\n  // by this allowance and will be updated as tokens are spent. If it is\n  // empty, there is no spend limit and any amount of coins can be spent.\n  repeated cosmos.base.v1beta1.Coin spend_limit = 1\n      [(gogoproto.nullable) = false, (gogoproto.castrepeated) = "github.com/cosmos/cosmos-sdk/types.Coins"];\n\n  // expiration specifies an optional time when this allowance expires\n  google.protobuf.Timestamp expiration = 2 [(gogoproto.stdtime) = true];\n}\n')])])]),n("ul",[n("li",[n("p",[n("code",[e._v("spend_limit")]),e._v(": The amount of tokens from the granter's account that the grantee can spend. This value is optional. If it is blank, no spend limit is assigned, and the grantee can spend any amount of tokens from the granter's account before the expiration is met.")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("expiration")]),e._v(": The date and time when the grant expires. This value is optional. If it is blank, the grant does not expire.")])])]),e._v(" "),n("p",[e._v("To restrict the grantee when values for "),n("code",[e._v("spend_limit")]),e._v(" and "),n("code",[e._v("expiration")]),e._v(" are blank, revoke the grant.")]),e._v(" "),n("p",[n("code",[e._v("PeriodicAllowance")]),e._v(" is a repeating fee allowance for a specified period and for a specified maximum number of tokens that can spent within that period.")]),e._v(" "),n("details",{staticClass:"custom-block details"},[n("summary",[e._v("`PeriodicAllowance` code")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// PeriodicAllowance extends Allowance to allow for both a maximum cap,\n// as well as a limit per time period.\nmessage PeriodicAllowance {\n  option (cosmos_proto.implements_interface) = "FeeAllowanceI";\n\n  // basic specifies a struct of `BasicAllowance`\n  BasicAllowance basic = 1 [(gogoproto.nullable) = false];\n\n  // period specifies the time duration in which period_spend_limit coins can\n  // be spent before that allowance is reset\n  google.protobuf.Duration period = 2 [(gogoproto.stdduration) = true, (gogoproto.nullable) = false];\n\n  // period_spend_limit specifies the maximum number of coins that can be spent\n  // in the period\n  repeated cosmos.base.v1beta1.Coin period_spend_limit = 3\n      [(gogoproto.nullable) = false, (gogoproto.castrepeated) = "github.com/cosmos/cosmos-sdk/types.Coins"];\n\n  // period_can_spend is the number of coins left to be spent before the period_reset time\n  repeated cosmos.base.v1beta1.Coin period_can_spend = 4\n      [(gogoproto.nullable) = false, (gogoproto.castrepeated) = "github.com/cosmos/cosmos-sdk/types.Coins"];\n\n  // period_reset is the time at which this period resets and a new one begins,\n  // it is calculated from the start time of the first transaction after the\n  // last period ended\n  google.protobuf.Timestamp period_reset = 5 [(gogoproto.stdtime) = true, (gogoproto.nullable) = false];\n}\n\n// AllowedMsgAllowance creates allowance only for specified message types.\nmessage AllowedMsgAllowance {\n  option (gogoproto.goproto_getters)         = false;\n  option (cosmos_proto.implements_interface) = "FeeAllowanceI";\n\n  // allowance can be any of basic and filtered fee allowance.\n  google.protobuf.Any allowance = 1 [(cosmos_proto.accepts_interface) = "FeeAllowanceI"];\n\n  // allowed_messages are the messages for which the grantee has the access.\n  repeated string allowed_messages = 2;\n}\n\n// Grant is stored in the KVStore to record a grant with full context\nmessage Grant {\n  // granter is the address of the user granting an allowance of their funds.\n  string              granter   = 1;\n\n  // grantee is the address of the user being granted an allowance of another user\'s funds.\n  string              grantee   = 2;\n')])])])]),e._v(" "),n("ul",[n("li",[n("p",[n("code",[e._v("basic")]),e._v(": The instance of "),n("code",[e._v("BasicAllowance")]),e._v(".  It is optional. If empty, the grant will have not have a "),n("code",[e._v("spend_limit")]),e._v(" or "),n("code",[e._v("expiration")]),e._v(".")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("period")]),e._v(": The duration that "),n("code",[e._v("PeriodicAllowance")]),e._v(" is granted. After each period expires, "),n("code",[e._v("period_spend_limit")]),e._v(" is reset.")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("period_spend_limit")]),e._v(": The maximum number of tokens that the grantee is allowed to spend during the period.")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("period_can_spend")]),e._v(": The number of tokens remaining to be spent before the period_reset time.")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("period_reset")]),e._v(": The time when the period ends and a new period begins.")])])]),e._v(" "),n("h3",{attrs:{id:"fee-account-flag"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#fee-account-flag"}},[e._v("#")]),e._v(" Fee account flag")]),e._v(" "),n("p",[e._v("To run transactions that use fee grant from the CLI, specify the "),n("code",[e._v("FeeAccount")]),e._v(" flag followed by the granter's account address. When this flag is set, "),n("code",[e._v("clientCtx")]),e._v(" appends the granter's account address.")]),e._v(" "),n("details",{staticClass:"custom-block details"},[n("summary",[e._v("`FeeAccount` code")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('if clientCtx.FeeGranter == nil || flagSet.Changed(flags.FlagFeeAccount) {\n  granter, _ := flagSet.GetString(flags.FlagFeeAccount)\n\n  if granter != "" {\n    granterAcc, err := sdk.AccAddressFromBech32(granter)\n    if err != nil {\n      return clientCtx, err\n    }\n\n    clientCtx = clientCtx.WithFeeGranterAddress(granterAcc)\n  }\n}\n')])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('package tx\n\nimport (\n\t"bufio"\n\t"errors"\n\t"fmt"\n\t"net/http"\n\t"os"\n\n\t"github.com/spf13/pflag"\n\n\t"github.com/cosmos/cosmos-sdk/client"\n\t"github.com/cosmos/cosmos-sdk/client/flags"\n\t"github.com/cosmos/cosmos-sdk/client/input"\n\t"github.com/cosmos/cosmos-sdk/crypto/keys/secp256k1"\n\tcryptotypes "github.com/cosmos/cosmos-sdk/crypto/types"\n\tsdk "github.com/cosmos/cosmos-sdk/types"\n\tsdkerrors "github.com/cosmos/cosmos-sdk/types/errors"\n\t"github.com/cosmos/cosmos-sdk/types/rest"\n\t"github.com/cosmos/cosmos-sdk/types/tx"\n\t"github.com/cosmos/cosmos-sdk/types/tx/signing"\n\tauthsigning "github.com/cosmos/cosmos-sdk/x/auth/signing"\n\tauthtx "github.com/cosmos/cosmos-sdk/x/auth/tx"\n)\n\n// GenerateOrBroadcastTxCLI will either generate and print and unsigned transaction\n// or sign it and broadcast it returning an error upon failure.\nfunc GenerateOrBroadcastTxCLI(clientCtx client.Context, flagSet *pflag.FlagSet, msgs ...sdk.Msg) error {\n\ttxf := NewFactoryCLI(clientCtx, flagSet)\n\treturn GenerateOrBroadcastTxWithFactory(clientCtx, txf, msgs...)\n}\n\n// GenerateOrBroadcastTxWithFactory will either generate and print and unsigned transaction\n// or sign it and broadcast it returning an error upon failure.\nfunc GenerateOrBroadcastTxWithFactory(clientCtx client.Context, txf Factory, msgs ...sdk.Msg) error {\n\tif clientCtx.GenerateOnly {\n\t\treturn GenerateTx(clientCtx, txf, msgs...)\n\t}\n\n\treturn BroadcastTx(clientCtx, txf, msgs...)\n}\n\n// GenerateTx will generate an unsigned transaction and print it to the writer\n// specified by ctx.Output. If simulation was requested, the gas will be\n// simulated and also printed to the same writer before the transaction is\n// printed.\nfunc GenerateTx(clientCtx client.Context, txf Factory, msgs ...sdk.Msg) error {\n\tif txf.SimulateAndExecute() {\n\t\tif clientCtx.Offline {\n\t\t\treturn errors.New("cannot estimate gas in offline mode")\n\t\t}\n\n\t\t_, adjusted, err := CalculateGas(clientCtx.QueryWithData, txf, msgs...)\n\t\tif err != nil {\n\t\t\treturn err\n\t\t}\n\n\t\ttxf = txf.WithGas(adjusted)\n\t\t_, _ = fmt.Fprintf(os.Stderr, "%s\\n", GasEstimateResponse{GasEstimate: txf.Gas()})\n\t}\n\n\ttx, err := BuildUnsignedTx(txf, msgs...)\n\tif err != nil {\n\t\treturn err\n\t}\n\n\tjson, err := clientCtx.TxConfig.TxJSONEncoder()(tx.GetTx())\n\tif err != nil {\n\t\treturn err\n\t}\n\n\treturn clientCtx.PrintString(fmt.Sprintf("%s\\n", json))\n}\n\n// BroadcastTx attempts to generate, sign and broadcast a transaction with the\n// given set of messages. It will also simulate gas requirements if necessary.\n// It will return an error upon failure.\nfunc BroadcastTx(clientCtx client.Context, txf Factory, msgs ...sdk.Msg) error {\n\ttxf, err := PrepareFactory(clientCtx, txf)\n\tif err != nil {\n\t\treturn err\n\t}\n\n\tif txf.SimulateAndExecute() || clientCtx.Simulate {\n\t\t_, adjusted, err := CalculateGas(clientCtx.QueryWithData, txf, msgs...)\n\t\tif err != nil {\n\t\t\treturn err\n\t\t}\n\n\t\ttxf = txf.WithGas(adjusted)\n\t\t_, _ = fmt.Fprintf(os.Stderr, "%s\\n", GasEstimateResponse{GasEstimate: txf.Gas()})\n\t}\n\n\tif clientCtx.Simulate {\n\t\treturn nil\n\t}\n\n\ttx, err := BuildUnsignedTx(txf, msgs...)\n\tif err != nil {\n\t\treturn err\n\t}\n\n\tif !clientCtx.SkipConfirm {\n\t\tout, err := clientCtx.TxConfig.TxJSONEncoder()(tx.GetTx())\n\t\tif err != nil {\n\t\t\treturn err\n\t\t}\n\n\t\t_, _ = fmt.Fprintf(os.Stderr, "%s\\n\\n", out)\n\n\t\tbuf := bufio.NewReader(os.Stdin)\n\t\tok, err := input.GetConfirmation("confirm transaction before signing and broadcasting", buf, os.Stderr)\n\n\t\tif err != nil || !ok {\n\t\t\t_, _ = fmt.Fprintf(os.Stderr, "%s\\n", "cancelled transaction")\n\t\t\treturn err\n\t\t}\n\t}\n\n\ttx.SetFeeGranter(clientCtx.GetFeeGranterAddress())\n\terr = Sign(txf, clientCtx.GetFromName(), tx, true)\n\tif err != nil {\n\t\treturn err\n\t}\n\n\ttxBytes, err := clientCtx.TxConfig.TxEncoder()(tx.GetTx())\n\tif err != nil {\n\t\treturn err\n\t}\n\n\t// broadcast to a Tendermint node\n\tres, err := clientCtx.BroadcastTx(txBytes)\n\tif err != nil {\n\t\treturn err\n\t}\n\n\treturn clientCtx.PrintProto(res)\n}\n\n// WriteGeneratedTxResponse writes a generated unsigned transaction to the\n// provided http.ResponseWriter. It will simulate gas costs if requested by the\n// BaseReq. Upon any error, the error will be written to the http.ResponseWriter.\n// Note that this function returns the legacy StdTx Amino JSON format for compatibility\n// with legacy clients.\nfunc WriteGeneratedTxResponse(\n\tctx client.Context, w http.ResponseWriter, br rest.BaseReq, msgs ...sdk.Msg,\n) {\n\tgasAdj, ok := rest.ParseFloat64OrReturnBadRequest(w, br.GasAdjustment, flags.DefaultGasAdjustment)\n\tif !ok {\n\t\treturn\n\t}\n\n\tgasSetting, err := flags.ParseGasSetting(br.Gas)\n\tif rest.CheckBadRequestError(w, err) {\n\t\treturn\n\t}\n\n\ttxf := Factory{fees: br.Fees, gasPrices: br.GasPrices}.\n\t\tWithAccountNumber(br.AccountNumber).\n\t\tWithSequence(br.Sequence).\n\t\tWithGas(gasSetting.Gas).\n\t\tWithGasAdjustment(gasAdj).\n\t\tWithMemo(br.Memo).\n\t\tWithChainID(br.ChainID).\n\t\tWithSimulateAndExecute(br.Simulate).\n\t\tWithTxConfig(ctx.TxConfig).\n\t\tWithTimeoutHeight(br.TimeoutHeight)\n\n\tif br.Simulate || gasSetting.Simulate {\n\t\tif gasAdj < 0 {\n\t\t\trest.WriteErrorResponse(w, http.StatusBadRequest, sdkerrors.ErrorInvalidGasAdjustment.Error())\n\t\t\treturn\n\t\t}\n\n\t\t_, adjusted, err := CalculateGas(ctx.QueryWithData, txf, msgs...)\n\t\tif rest.CheckInternalServerError(w, err) {\n\t\t\treturn\n\t\t}\n\n\t\ttxf = txf.WithGas(adjusted)\n\n\t\tif br.Simulate {\n\t\t\trest.WriteSimulationResponse(w, ctx.LegacyAmino, txf.Gas())\n\t\t\treturn\n\t\t}\n\t}\n\n\ttx, err := BuildUnsignedTx(txf, msgs...)\n\tif rest.CheckBadRequestError(w, err) {\n\t\treturn\n\t}\n\n\tstdTx, err := ConvertTxToStdTx(ctx.LegacyAmino, tx.GetTx())\n\tif rest.CheckInternalServerError(w, err) {\n\t\treturn\n\t}\n\n\toutput, err := ctx.LegacyAmino.MarshalJSON(stdTx)\n\tif rest.CheckInternalServerError(w, err) {\n\t\treturn\n\t}\n\n\tw.Header().Set("Content-Type", "application/json")\n\tw.WriteHeader(http.StatusOK)\n\t_, _ = w.Write(output)\n}\n\n// BuildUnsignedTx builds a transaction to be signed given a set of messages. The\n// transaction is initially created via the provided factory\'s generator. Once\n// created, the fee, memo, and messages are set.\nfunc BuildUnsignedTx(txf Factory, msgs ...sdk.Msg) (client.TxBuilder, error) {\n\tif txf.chainID == "" {\n\t\treturn nil, fmt.Errorf("chain ID required but not specified")\n\t}\n\n\tfees := txf.fees\n\n\tif !txf.gasPrices.IsZero() {\n\t\tif !fees.IsZero() {\n\t\t\treturn nil, errors.New("cannot provide both fees and gas prices")\n\t\t}\n\n\t\tglDec := sdk.NewDec(int64(txf.gas))\n\n\t\t// Derive the fees based on the provided gas prices, where\n\t\t// fee = ceil(gasPrice * gasLimit).\n\t\tfees = make(sdk.Coins, len(txf.gasPrices))\n\n\t\tfor i, gp := range txf.gasPrices {\n\t\t\tfee := gp.Amount.Mul(glDec)\n\t\t\tfees[i] = sdk.NewCoin(gp.Denom, fee.Ceil().RoundInt())\n\t\t}\n\t}\n\n\ttx := txf.txConfig.NewTxBuilder()\n\n\tif err := tx.SetMsgs(msgs...); err != nil {\n\t\treturn nil, err\n\t}\n\n\ttx.SetMemo(txf.memo)\n\ttx.SetFeeAmount(fees)\n\ttx.SetGasLimit(txf.gas)\n\ttx.SetTimeoutHeight(txf.TimeoutHeight())\n\n\treturn tx, nil\n}\n\n// BuildSimTx creates an unsigned tx with an empty single signature and returns\n// the encoded transaction or an error if the unsigned transaction cannot be\n// built.\nfunc BuildSimTx(txf Factory, msgs ...sdk.Msg) ([]byte, error) {\n\ttxb, err := BuildUnsignedTx(txf, msgs...)\n\tif err != nil {\n\t\treturn nil, err\n\t}\n\n\t// Create an empty signature literal as the ante handler will populate with a\n\t// sentinel pubkey.\n\tsig := signing.SignatureV2{\n\t\tPubKey: &secp256k1.PubKey{},\n\t\tData: &signing.SingleSignatureData{\n\t\t\tSignMode: txf.signMode,\n\t\t},\n\t\tSequence: txf.Sequence(),\n\t}\n\tif err := txb.SetSignatures(sig); err != nil {\n\t\treturn nil, err\n\t}\n\n\tprotoProvider, ok := txb.(authtx.ProtoTxProvider)\n\tif !ok {\n\t\treturn nil, fmt.Errorf("cannot simulate amino tx")\n\t}\n\tsimReq := tx.SimulateRequest{Tx: protoProvider.GetProtoTx()}\n\n\treturn simReq.Marshal()\n}\n\n// CalculateGas simulates the execution of a transaction and returns the\n// simulation response obtained by the query and the adjusted gas amount.\nfunc CalculateGas(\n\tqueryFunc func(string, []byte) ([]byte, int64, error), txf Factory, msgs ...sdk.Msg,\n) (tx.SimulateResponse, uint64, error) {\n\ttxBytes, err := BuildSimTx(txf, msgs...)\n\tif err != nil {\n\t\treturn tx.SimulateResponse{}, 0, err\n\t}\n\n\t// TODO This should use the generated tx service Client.\n\t// https://github.com/cosmos/cosmos-sdk/issues/7726\n\tbz, _, err := queryFunc("/cosmos.tx.v1beta1.Service/Simulate", txBytes)\n\tif err != nil {\n\t\treturn tx.SimulateResponse{}, 0, err\n\t}\n\n\tvar simRes tx.SimulateResponse\n\n\tif err := simRes.Unmarshal(bz); err != nil {\n\t\treturn tx.SimulateResponse{}, 0, err\n\t}\n\n\treturn simRes, uint64(txf.GasAdjustment() * float64(simRes.GasInfo.GasUsed)), nil\n}\n\n// PrepareFactory ensures the account defined by ctx.GetFromAddress() exists and\n// if the account number and/or the account sequence number are zero (not set),\n// they will be queried for and set on the provided Factory. A new Factory with\n// the updated fields will be returned.\nfunc PrepareFactory(clientCtx client.Context, txf Factory) (Factory, error) {\n\tfrom := clientCtx.GetFromAddress()\n\n\tif err := txf.accountRetriever.EnsureExists(clientCtx, from); err != nil {\n\t\treturn txf, err\n\t}\n\n\tinitNum, initSeq := txf.accountNumber, txf.sequence\n\tif initNum == 0 || initSeq == 0 {\n\t\tnum, seq, err := txf.accountRetriever.GetAccountNumberSequence(clientCtx, from)\n\t\tif err != nil {\n\t\t\treturn txf, err\n\t\t}\n\n\t\tif initNum == 0 {\n\t\t\ttxf = txf.WithAccountNumber(num)\n\t\t}\n\n\t\tif initSeq == 0 {\n\t\t\ttxf = txf.WithSequence(seq)\n\t\t}\n\t}\n\n\treturn txf, nil\n}\n\n// SignWithPrivKey signs a given tx with the given private key, and returns the\n// corresponding SignatureV2 if the signing is successful.\nfunc SignWithPrivKey(\n\tsignMode signing.SignMode, signerData authsigning.SignerData,\n\ttxBuilder client.TxBuilder, priv cryptotypes.PrivKey, txConfig client.TxConfig,\n\taccSeq uint64,\n) (signing.SignatureV2, error) {\n\tvar sigV2 signing.SignatureV2\n\n\t// Generate the bytes to be signed.\n\tsignBytes, err := txConfig.SignModeHandler().GetSignBytes(signMode, signerData, txBuilder.GetTx())\n\tif err != nil {\n\t\treturn sigV2, err\n\t}\n\n\t// Sign those bytes\n\tsignature, err := priv.Sign(signBytes)\n\tif err != nil {\n\t\treturn sigV2, err\n\t}\n\n\t// Construct the SignatureV2 struct\n\tsigData := signing.SingleSignatureData{\n\t\tSignMode:  signMode,\n\t\tSignature: signature,\n\t}\n\n\tsigV2 = signing.SignatureV2{\n\t\tPubKey:   priv.PubKey(),\n\t\tData:     &sigData,\n\t\tSequence: accSeq,\n\t}\n\n\treturn sigV2, nil\n}\n\nfunc checkMultipleSigners(mode signing.SignMode, tx authsigning.Tx) error {\n\tif mode == signing.SignMode_SIGN_MODE_DIRECT &&\n\t\tlen(tx.GetSigners()) > 1 {\n\t\treturn sdkerrors.Wrap(sdkerrors.ErrNotSupported, "Signing in DIRECT mode is only supported for transactions with one signer only")\n\t}\n\treturn nil\n}\n\n// Sign signs a given tx with a named key. The bytes signed over are canconical.\n// The resulting signature will be added to the transaction builder overwriting the previous\n// ones if overwrite=true (otherwise, the signature will be appended).\n// Signing a transaction with mutltiple signers in the DIRECT mode is not supprted and will\n// return an error.\n// An error is returned upon failure.\nfunc Sign(txf Factory, name string, txBuilder client.TxBuilder, overwriteSig bool) error {\n\tif txf.keybase == nil {\n\t\treturn errors.New("keybase must be set prior to signing a transaction")\n\t}\n\n\tsignMode := txf.signMode\n\tif signMode == signing.SignMode_SIGN_MODE_UNSPECIFIED {\n\t\t// use the SignModeHandler\'s default mode if unspecified\n\t\tsignMode = txf.txConfig.SignModeHandler().DefaultMode()\n\t}\n\tif err := checkMultipleSigners(signMode, txBuilder.GetTx()); err != nil {\n\t\treturn err\n\t}\n\n\tkey, err := txf.keybase.Key(name)\n\tif err != nil {\n\t\treturn err\n\t}\n\tpubKey := key.GetPubKey()\n\tsignerData := authsigning.SignerData{\n\t\tChainID:       txf.chainID,\n\t\tAccountNumber: txf.accountNumber,\n\t\tSequence:      txf.sequence,\n\t}\n\n\t// For SIGN_MODE_DIRECT, calling SetSignatures calls setSignerInfos on\n\t// TxBuilder under the hood, and SignerInfos is needed to generated the\n\t// sign bytes. This is the reason for setting SetSignatures here, with a\n\t// nil signature.\n\t//\n\t// Note: this line is not needed for SIGN_MODE_LEGACY_AMINO, but putting it\n\t// also doesn\'t affect its generated sign bytes, so for code\'s simplicity\n\t// sake, we put it here.\n\tsigData := signing.SingleSignatureData{\n\t\tSignMode:  signMode,\n\t\tSignature: nil,\n\t}\n\tsig := signing.SignatureV2{\n\t\tPubKey:   pubKey,\n\t\tData:     &sigData,\n\t\tSequence: txf.Sequence(),\n\t}\n\tvar prevSignatures []signing.SignatureV2\n\tif !overwriteSig {\n\t\tprevSignatures, err = txBuilder.GetTx().GetSignaturesV2()\n\t\tif err != nil {\n\t\t\treturn err\n\t\t}\n\t}\n\tif err := txBuilder.SetSignatures(sig); err != nil {\n\t\treturn err\n\t}\n\n\t// Generate the bytes to be signed.\n\tbytesToSign, err := txf.txConfig.SignModeHandler().GetSignBytes(signMode, signerData, txBuilder.GetTx())\n\tif err != nil {\n\t\treturn err\n\t}\n\n\t// Sign those bytes\n\tsigBytes, _, err := txf.keybase.Sign(name, bytesToSign)\n\tif err != nil {\n\t\treturn err\n\t}\n\n\t// Construct the SignatureV2 struct\n\tsigData = signing.SingleSignatureData{\n\t\tSignMode:  signMode,\n\t\tSignature: sigBytes,\n\t}\n\tsig = signing.SignatureV2{\n\t\tPubKey:   pubKey,\n\t\tData:     &sigData,\n\t\tSequence: txf.Sequence(),\n\t}\n\n\tif overwriteSig {\n\t\treturn txBuilder.SetSignatures(sig)\n\t}\n\tprevSignatures = append(prevSignatures, sig)\n\treturn txBuilder.SetSignatures(prevSignatures...)\n}\n\n// GasEstimateResponse defines a response definition for tx gas estimation.\ntype GasEstimateResponse struct {\n\tGasEstimate uint64 `json:"gas_estimate" yaml:"gas_estimate"`\n}\n\nfunc (gr GasEstimateResponse) String() string {\n\treturn fmt.Sprintf("gas estimate: %d", gr.GasEstimate)\n}\n')])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("func (w *wrapper) SetFeeGranter(feeGranter sdk.AccAddress) {\n\tif w.tx.AuthInfo.Fee == nil {\n\t\tw.tx.AuthInfo.Fee = &tx.Fee{}\n\t}\n\n\tw.tx.AuthInfo.Fee.Granter = feeGranter.String()\n\n\t// set authInfoBz to nil because the cached authInfoBz no longer matches tx.AuthInfo\n\tw.authInfoBz = nil\n}\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// Fee includes the amount of coins paid in fees and the maximum\n// gas to be used by the transaction. The ratio yields an effective "gasprice",\n// which must be above some miminum to be accepted into the mempool.\nmessage Fee {\n  // amount is the amount of coins to be paid as a fee\n  repeated cosmos.base.v1beta1.Coin amount = 1\n      [(gogoproto.nullable) = false, (gogoproto.castrepeated) = "github.com/cosmos/cosmos-sdk/types.Coins"];\n\n  // gas_limit is the maximum gas that can be used in transaction processing\n  // before an out of gas error occurs\n  uint64 gas_limit = 2;\n\n  // if unset, the first signer is responsible for paying the fees. If set, the specified account must pay the fees.\n  // the payer must be a tx signer (and thus have signed this field in AuthInfo).\n  // setting this field does *not* change the ordering of required signers for the transaction.\n  string payer = 3;\n\n  // if set, the fee payer (either the first signer or the value of the payer field) requests that a fee grant be used\n  // to pay fees instead of the fee payer\'s own balance. If an appropriate fee grant does not exist or the chain does\n  // not support fee grants, this will fail\n  string granter = 4;\n}\n')])])])]),e._v(" "),n("p",[e._v("The following example shows a CLI command with the "),n("code",[e._v("--fee-account")]),e._v(" flag:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('./terrad tx gov submit-proposal --title="Test Proposal" --description="My awesome proposal" --type="Text" --from validator-key --fee-account=terra1fmcjjt6yc9wqup2r06urnrd928jhrde6gcld6n --chain-id=testnet --fees="10uluna"\n')])])]),n("h3",{attrs:{id:"granted-fee-deductions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#granted-fee-deductions"}},[e._v("#")]),e._v(" Granted fee deductions")]),e._v(" "),n("p",[e._v("Fees are deducted from grants in the "),n("code",[e._v("auth")]),e._v(" ante handler.")]),e._v(" "),n("h3",{attrs:{id:"gas"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#gas"}},[e._v("#")]),e._v(" Gas")]),e._v(" "),n("p",[e._v("To prevent DoS attacks, using a filtered "),n("code",[e._v("feegrant")]),e._v(" incurs gas. To ensure that all the grantee's transactions conform to the filter set by the granter, the SDK iterates over the allowed messages in the filter and charges 10 gas per filtered message. Then, the SDK iterates over the messages sent by the grantee to ensure the messages adhere to the filter, which also charges 10 gas per message. If the SDK finds a message that does not conform to the filter, the SDK stops iterating, and the transaction fails.")]),e._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[e._v("Warning")]),e._v(" "),n("p",[e._v("The gas is charged against the granted allowance. Ensure all your existing messages conform to the filter before you send transactions using your allowance.")])]),e._v(" "),n("h2",{attrs:{id:"state"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#state"}},[e._v("#")]),e._v(" State")]),e._v(" "),n("h3",{attrs:{id:"feeallowance"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#feeallowance"}},[e._v("#")]),e._v(" FeeAllowance")]),e._v(" "),n("p",[e._v("Fee allowances are identified by combining "),n("code",[e._v("Granter")]),e._v(" (the account address that grants permission to another account to spend its available tokens on fees) with "),n("code",[e._v("Grantee")]),e._v(" (the account address that receives permission to spend the granter's tokens on fees).")]),e._v(" "),n("p",[e._v("The following example shows how a fee allowance is stored in the state:")]),e._v(" "),n("p",[e._v("Grant: "),n("code",[e._v("0x00 | grantee_addr_len (1 byte) | grantee_addr_bytes | granter_addr_len (1 byte) | granter_addr_bytes -> ProtocolBuffer(Grant)")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// Grant is stored in the KVStore to record a grant with full context\ntype Grant struct {\n\t// granter is the address of the user granting an allowance of their funds.\n\tGranter string `protobuf:"bytes,1,opt,name=granter,proto3" json:"granter,omitempty"`\n\t// grantee is the address of the user being granted an allowance of another user\'s funds.\n\tGrantee string `protobuf:"bytes,2,opt,name=grantee,proto3" json:"grantee,omitempty"`\n\t// allowance can be any of basic and filtered fee allowance.\n\tAllowance *types1.Any `protobuf:"bytes,3,opt,name=allowance,proto3" json:"allowance,omitempty"`\n}\n')])])]),n("h2",{attrs:{id:"message-types"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#message-types"}},[e._v("#")]),e._v(" Message Types")]),e._v(" "),n("h3",{attrs:{id:"msggrantallowance"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#msggrantallowance"}},[e._v("#")]),e._v(" MsgGrantAllowance")]),e._v(" "),n("p",[e._v("A fee allowance grant will be created with the MsgGrantAllowance message.")]),e._v(" "),n("div",{staticClass:"language-proto extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// MsgGrantAllowance adds permission for Grantee to spend up to Allowance\n// of fees from the account of Granter.\nmessage MsgGrantAllowance {\n  // granter is the address of the user granting an allowance of their funds.\n  string              granter   = 1;\n\n  // grantee is the address of the user being granted an allowance of another user\'s funds.\n  string              grantee   = 2;\n\n  // allowance can be any of basic and filtered fee allowance.\n  google.protobuf.Any allowance = 3 [(cosmos_proto.accepts_interface) = "FeeAllowanceI"];\n}\n')])])]),n("h3",{attrs:{id:"msgrevokeallowance"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#msgrevokeallowance"}},[e._v("#")]),e._v(" MsgRevokeAllowance")]),e._v(" "),n("p",[e._v("A fee allowance grant will be revokeed with the MsgRevokeAllowance message.")]),e._v(" "),n("div",{staticClass:"language-proto extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// MsgRevokeAllowance removes any existing Allowance from Granter to Grantee.\nmessage MsgRevokeAllowance {\n  // granter is the address of the user granting an allowance of their funds.\n  string granter = 1;\n\n  // grantee is the address of the user being granted an allowance of another user's funds.\n  string grantee = 2;\n}\n")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);