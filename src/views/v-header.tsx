import cn from "classnames";
import React from "react";
import IViewProps from "../interfaces/i-view";

import "../assets/style/v-header.sass";

// const titleList = {
//   "": "Dashboard",
//   workspaces: "Workspaces",
//   accounts: "Accounts",
//   withdrawals: "Withdrawals",
//   services: "Services",
// };

// const getHeader = () => {
//   const { pathname } = useLocation();
//   const splitedPathname = pathname.split("/");
//   const _header = splitedPathname[splitedPathname.length - 1];
//   const header = titleList[_header];
//   return header || "";
// };

interface IProps extends IViewProps {}

export default function HeaderView({ className }: IProps) {
  // const header = getHeader();

  return (
    <div className={cn("v-header", className)}>
      <div className="v-header__wrapper">
        <div className="v-header__row">
          1
          <div className="v-header__col">
            <div className="v-header__navigation">{/* <div className="v-header__title">{header}</div> */}</div>
          </div>
        </div>
        <div className="v-header__row">1</div>
      </div>
      <div className="v-header__row _mobile">
        <div className="v-header__navigation _mobile">{/* <div className="v-header__title">{header}</div> */}</div>
      </div>
    </div>
  );
}
