
import * as React from "react";
import * as Mdi from "@mdi/react";
import * as ico from "@mdi/js";
import StandardIcon from "./standard-icon";

export default class ContactIcon extends React.Component {
  public render() {
    return <>
      <div className="contact-icon">
        <StandardIcon path={ico.mdiGithub} href="https://github.com/EduApps-CDG"/>
        <StandardIcon path={ico.mdiGmail} href="mailto:eduardoprocopiogomez@gmail.com"/>
        <StandardIcon path={ico.mdiLinkedin} href="https://linkedin.com/in/eduapps"/>
        <StandardIcon path={ico.mdiPhone} href="tel:+5551994217935"/>
        <StandardIcon path={ico.mdiWhatsapp} href="https://api.whatsapp.com/send?phone=5551994217935&text=Bom%20dia%2C%20Eduardo!"/>
        <StandardIcon path={ico.mdiFacebook} href="https://www.facebook.com/eduardo.procopio.921"/>
        <StandardIcon path={ico.mdiDiscord} href="https://discord.com/users/389292303933767690"/>
      </div>
    </>;
  }
}