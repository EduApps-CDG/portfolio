import { useRouter, withRouter } from "next/router";
import * as React from "react";
import Translation from "../translations";
import RouteredComponent from "../utils";
import ContactIcon from "./contact-icon";

export default class Welcome extends React.Component {
  render(): React.ReactNode {
    return <>
      <div className="centerizer" style={{
        height: "600px"
      }}>
        <main>
          <h1>
            <Translation id="welcome_1"/>
            <br />
            <Translation id="welcome_2"/>
          </h1>
          <p className="centerizer">
            <Translation id="welcome_3" />
          </p>
          <br/>
          <ContactIcon/>
        </main>
      </div>
    </>;
  }
}