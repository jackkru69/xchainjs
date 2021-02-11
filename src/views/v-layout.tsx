import cn from "classnames";
import React from "react";
import { Route, Switch } from "react-router-dom";
import IViewProps from "../interfaces/i-view";
import * as moment from "moment-timezone";
moment.tz.setDefault("Etc/UTC");
import "../assets/style/v-layout.sass";
import HeaderView from "./v-header";

// const Web3 = require("web3");
// let web3 = new Web3(Web3.givenProvider || "wss://rinkeby.infura.io/ws/v3/d81dc7230b694f41a55ab68f9d954193");

interface ILayoutProps extends IViewProps {}

export default function LayoutView({ className }: ILayoutProps) {
  React.useEffect(() => {
    // const log = web3.eth.accounts.create(
    //   "very wash street winter latin group payment paper various sausage neglect pilot grass onion render"
    // );
    // console.log(log);
  }, []);

  return (
    <div className={cn(className, "v-layout")}>
      <div className="v-layout__aside-wrapper"></div>
      <div className="v-layout__wrapper">
        <HeaderView className="v-layout__header" />

        <div className="v-layout__content">
          <Switch>
            <Route path="/" exact>
              1
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

// new wallet
// very wash street winter latin group payment paper various sausage neglect pilot grass onion render

// address: "0x362D652c0f395646dF56a05B28A71B04cb9562d0", privateKey: "0xefa577f82f4f3c98f13a3947101e431c9190731b579115149f43cf81863e1264"
