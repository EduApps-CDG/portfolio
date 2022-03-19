
import { mdiDiscord, mdiFacebook, mdiGithub, mdiGmail, mdiLinkedin, mdiPhone, mdiWhatsapp } from "@mdi/js";
import * as React from "react";
import StandardIcon from "./standard-icon";

export default class ContactIcon extends React.Component {
  public render() {
    return <>
      <div className="contact-icon">
        <StandardIcon path={mdiGithub} href="https://github.com/EduApps-CDG"/>
        <StandardIcon path={mdiGmail} href="mailto:eduardoprocopiogomez@gmail.com"/>
        <StandardIcon path={mdiLinkedin} href="https://linkedin.com/in/eduapps"/>
        <StandardIcon path={mdiPhone} href="tel:+5551994217935"/>
        <StandardIcon path={mdiWhatsapp} href="https://api.whatsapp.com/send?phone=5551994217935&text=Bom%20dia%2C%20Eduardo!"/>
        <StandardIcon path={mdiFacebook} href="https://www.facebook.com/eduardo.procopio.921"/>
        <StandardIcon path={mdiDiscord} href="https://discord.com/users/389292303933767690"/>
      </div>
    </>;
  }
}