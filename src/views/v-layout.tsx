import cn from "classnames";
import React from "react";
import { Route, Switch } from "react-router-dom";
import IViewProps from "../interfaces/i-view";
import * as moment from "moment-timezone";
moment.tz.setDefault("Etc/UTC");
import "../assets/style/v-layout.sass";
// import WorkspacesPageView from "./pages/workspaces/v-workspaces-page";

interface ILayoutProps extends IViewProps {}

export default function LayoutView({ className }: ILayoutProps) {
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
