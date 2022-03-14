import * as React from "react";
import ContactIcon from "./contact-icon";

export default class Footer extends React.Component {
  render() {
    return <>
      <footer>
        <ContactIcon/>
        <p>&copy; 2022 Eduardo Procopio Gomez</p>
      </footer>
    </>
  }
}