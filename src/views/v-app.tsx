import cn from "classnames";
import React from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router } from "react-router-dom";

import LayoutView from "./v-layout";

import "../assets/style/common.sass";
import "../assets/style/font.sass";
import "../assets/style/v-app.sass";

class App extends React.Component<{}, undefined> {
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
