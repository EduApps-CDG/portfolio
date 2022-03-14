import * as React from "react"

export type ButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  href?:string
}

export default class Button extends React.Component<ButtonProps> {
  render() {
    let elem:JSX.Element;
    if (this.props.href) {
      elem = <>
        <form className="btn-border" target="_blank" action={this.props.href}>
          <button onClick={(event) => {
            if (this.props.onClick) {
              (this.props.onClick)(event);
            }
          }}>
            {this.props.children}
          </button>
        </form>
      </>
    } else {
      elem = <>
        <div className="btn-border">
          <button onClick={(event) => {
            if (this.props.onClick) {
              (this.props.onClick)(event);
            }
          }}>
            {this.props.children}
          </button>
        </div>
      </>
    }
    return elem;
  }
}