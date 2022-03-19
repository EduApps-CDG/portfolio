import * as Mdi from "@mdi/react";
import * as React from "react";

export type StandardIconProps = {
  path: string,
  href: string
};

export default class StandardIcon extends React.Component<StandardIconProps> {
  constructor(props:StandardIconProps) {
    super(props);
  }

  render() {
    return <>
      <a href={this.props.href} target="_blank">
        <Mdi.Icon className="icon" path={this.props.path}/>
      </a>
    </>
  }
}