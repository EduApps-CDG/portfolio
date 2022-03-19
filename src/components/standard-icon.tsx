import {Icon} from "@mdi/react";
import {Component} from "react";

export type StandardIconProps = {
  path: string,
  href: string
};

export default class StandardIcon extends Component<StandardIconProps> {
  constructor(props:StandardIconProps) {
    super(props);
  }

  render() {
    return <>
      <a href={this.props.href} target="_blank" rel="noreferrer">
        <Icon className="icon" path={this.props.path}/>
      </a>
    </>
  }
}