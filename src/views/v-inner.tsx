import cn from "classnames";
import * as React from "react";
import IComponentProps from "../interfaces/i-component";

import "../assets/style/v-inner.sass";

interface IProps extends IComponentProps {
  type?: "fullscreen1920" | "fullscreen";
}

function InnerView({ className, children, type }: IProps) {
  return (
    <div
      className={cn(
        "v-inner",
        { _fullscreen1920: type === "fullscreen1920", _fullscreen: type === "fullscreen" },
        className
      )}
    >
      {children}
    </div>
  );
}

export default InnerView;
