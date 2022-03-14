import * as React from "react";

export type ViewProps = {
  className?: string
}

export default class View extends React.Component<ViewProps> {
  render() {
    return <>
      <div className={`view ${this.props.className}`}>
        {this.props.children}
      </div>
    </>
  }
}