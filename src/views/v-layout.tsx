import cn from "classnames";
import React from "react";
import { Route, Switch } from "react-router-dom";
import IViewProps from "../interfaces/i-view";
import * as moment from "moment-timezone";
moment.tz.setDefault("Etc/UTC");
import "../assets/style/v-layout.sass";

// const Web3 = require("web3");
// let web3 = new Web3(Web3.givenProvider || "wss://rinkeby.infura.io/ws/v3/d81dc7230b694f41a55ab68f9d954193");

interface ILayoutProps extends IViewProps {}

export default function LayoutView({ className }: ILayoutProps) {
  // React.useEffect(() => {
  //   const log = web3.eth.accounts.create();
  //   console.log(log);
  // }, []);

  return (
    <div className={cn(className, "v-layout")}>
      <div className="v-layout__aside-wrapper"></div>
      <div className="v-layout__wrapper">
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

// {
//   "address": "0xB59deF988baFE794c5f627c735AeB65745fC288E",
//   "privateKey": "0x69b6649e9b26d67ce8f9bcbc80bd1b98debf2d38485d6389eec9af6e9ad6b70a"
// }
