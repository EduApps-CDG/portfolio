import { NextRouter, useRouter, withRouter } from "next/router";
import React from "react";

export type Language = "PT"|"EN";

class Translations {
  protected PT:typeof this.EN = {
    welcome_1: "Olá!",
    welcome_2: "Eu sou Eduardo Procopio Gomez!",
    welcome_3: "Desenvolvedor aspirante buscando sua primeira oportunidade de emprego."
  };

  protected EN:{[index:string]:string} = {
    welcome_1: "What's up!",
    welcome_2: "I am Eduardo Procopio Gomez!",
    welcome_3: "Aspiring developer looking for his first job opportunity."
  }
  static get(routes:NextRouter, id:string, lang?:Language):string {
    let l;
    
    if (lang) {
      l = new Translations()[lang];
    } else {
      l = new Translations()[Translations.getHttpLang(routes)];
    }

    return l[id];
  }

  static getBrowserLang():Language {
    try {
      return navigator.language.split("-")[0].toUpperCase() as Language;
    } catch {
      console.warn(`[W] Tradução para "${navigator.language}" não disponível. Dando fallback em "en-US"...`);
      return "EN";
    }
  }

  static getHttpLang(routes:NextRouter):Language {
    let translate;

    try {
      return routes.locale.split("-")[0].toUpperCase() as Language;
    } catch {
      console.warn(`[W] Tradução para "${routes.locale}" não disponível. Dando fallback em "en-US"...`);
      return "EN";
    } 
  }
}

export type TranslationProps = {
  router: NextRouter,
  id: string,
  lang?: Language
}

class Translation extends React.Component<TranslationProps> {
  render() {
    return <>
      {Translations.get(this.props.router,this.props.id, this.props.lang)}
    </>
  }
}

export default withRouter(Translation);