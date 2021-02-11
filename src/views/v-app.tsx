import cn from "classnames";
import React from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router } from "react-router-dom";
import { Client } from "@xchainjs/xchain-ethereum";
import { XChainClient } from "@xchainjs/xchain-client";

import LayoutView from "./v-layout";

import "../assets/style/common.sass";
import "../assets/style/font.sass";
import "../assets/style/v-app.sass";

class App extends React.Component<{}, undefined> {
  client: XChainClient = new Client({
    network: "testnet",
    infuraCreds: {
      projectId: "a8f3395b2a894b72a891ee7ab31b47ce",
      projectSecret: "120dc64235174aaf93d7ff43cffcb6cb",
    },
    explorerUrl: { testnet: "https://rinkeby.etherscan.io", mainnet: "https://etherscan.io" },
    // etherscanApiKey: "a8f3395b2a894b72a891ee7ab31b47ce",

    phrase: "very wash street winter latin group payment paper various sausage neglect pilot grass onion render",
  });
  // getWallet = async () => await this.client.getWallet();
  // getAddress = async () => await this.client.getAddress();
  getBalance = async () => await this.client.getBalance();
  // getTx = async () => await this.client.getTransactions();

  componentDidMount() {
    // this.getAddress().then((data) => console.log("address", data));
    this.getBalance().then((data) => console.log("balance", data[0].amount.amount().toString()));
    // this.getTx().then((data) => console.log("tx", data));
  }
  public render() {
    return (
      <Router>
        <div className="v-app">
          <LayoutView className={cn("v-app__layout")} />
        </div>
      </Router>
    );
  }
}

declare let module: object;

export default hot(module)(App);
