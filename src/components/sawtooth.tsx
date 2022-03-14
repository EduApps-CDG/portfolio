import * as React from "react";

export type SawtoothProps = {
  flipped?: boolean;
}

export default class Sawtooth extends React.Component<SawtoothProps> {
  render() {
    return <>
      <div className="sawtooth" style={{
        transform: this.props.flipped ? "scale(1,-1)" : "scale(1,1)"
      }}></div>
    </>;
  }
}