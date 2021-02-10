import * as React from "react";
import { render } from "react-dom";
import AppView from "./views/v-app";

const rootEl = document.getElementById("root");

render(<AppView />, rootEl);
