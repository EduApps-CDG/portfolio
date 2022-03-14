import * as React from "react"

export type RtlProps = {
  style?: React.CSSProperties
}

export default class Rtl extends React.Component<RtlProps> {
  render() {
    return <>
      <div className="rtl" style={this.props.style}>
        {this.props.children}
      </div>
    </>
  }
}