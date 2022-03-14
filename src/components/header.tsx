import Image from "next/image";
import * as React from "react";

import logo from "../../dist/img/logo.png";

export default class Header extends React.Component {
  static CSS:React.CSSProperties = {
    backgroundColor: "#CC0000",
  }

  css:React.CSSProperties = {};

  constructor(props?:{
    color?:string
  }) {
    super(props ? props : {});
    this.css = {... Header.CSS};
    this.css.backgroundColor = props.color ? props.color : this.css.backgroundColor;
  }

  render():React.ReactNode {
    return <>
      <header>
        <svg className="header-iconSvg" width="120" height="80">
          <path d="M 0 0 L 0 60 L 20 80 L 100 80 L 120 60 L 120 0 L 0 0 Z" />
          <foreignObject width="120" height="80">
            <Image width="80" height="80" src={logo} layout="fixed"/>
          </foreignObject>
        </svg>
        <nav>
          {
            // TODO: nada aqui por enquanto!
          }
        </nav>
      </header>
    </>;
  }
}