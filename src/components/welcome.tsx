import * as React from "react";
import Translation, { TranslateableComponent } from "../translations";
import ContactIcon from "./contact-icon";

export default class Welcome extends TranslateableComponent {
  render(): React.ReactNode {
    return <>
      <div className="centerizer" style={{
        height: "600px"
      }}>
        <main>
          <h1>
            <Translation id="welcome_1" lang={this.props.lang}/>
            <br />
            <Translation id="welcome_2" lang={this.props.lang}/>
          </h1>
          <p className="centerizer">
            <Translation id="welcome_3" lang={this.props.lang}/>
          </p>
          <br/>
          <ContactIcon/>
        </main>
      </div>
    </>;
  }
}