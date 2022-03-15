import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { NextIncomingMessage } from "next/dist/server/request-meta";
import { NextRouter, useRouter, withRouter } from "next/router";
import { NextResponse } from "next/server";
import React from "react";

export type Language = "PT"|"EN";

class Translations {
  protected PT:typeof this.EN = {
    welcome_1: "Olá!",
    welcome_2: "Eu sou Eduardo Procopio Gomez!",
    welcome_3: "Desenvolvedor aspirante buscando sua primeira oportunidade de emprego.",
    about_me: "Sobre mim",
    about_me_txt: "Moro em Rio Grande do Sul no Brasil. Gosto muito de técnologia e por isso decidi me tornar um desenvolvedor. Meus principais passa- tempos são praticar programação e tocar guitarra.",
    my_proj: "Meus projetos",
    view_code: "Visualizar Código",
    netflocos: "Um aplicativo de streaming baseado na Netflix para o meu curso Técnico em Informática. Minha equipe de 2 pessoas conseguiu completar em 15 dias. O projeto ficou incrível e surpreendemos o professor, espero talvez um dia continuar o projeto com meu amigo. Inclui um app e um banco de dados para pôr os videos.",
    arthos: "O projeto final do meu curso Técnico em Informática. Consiste em um sistema de Ordem de Serviço para veículos. O projeto inclui um app para clientes, um banco de dados e um programa desktop para colaboladores."
  };

  protected EN:{[index:string]:string} = {
    welcome_1: "What's up!",
    welcome_2: "I am Eduardo Procopio Gomez!",
    welcome_3: "Aspiring developer looking for his first job opportunity.",
    about_me: "About me",
    about_me_txt: "I live in Rio Grande do Sul, Brazil. I like technology very much and that's why I decided to become a developer. My main hobbies are programming and playing guitar.",
    my_proj: "My projects",
    view_code: "View Code",
    netflocos: "A streaming app based on Netflix for my Computer Technician course. My team of 2 people managed to complete it in 15 days. The project turned out amazing and we surprised the professor, I hope maybe one day I will continue the project with my friend. It includes an app and a database to upload the videos.",
    arthos: "The final project of my Computer Technician course. It consists of a Service Order system for vehicles. The project includes an app for clients, a database and a desktop program for collaborators."
  }
  static get(routes:NextRouter, id:string, lang?:Language):string {
    let l = new Translations()[Translations.checkLang(lang)];

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
    let translate = routes.locale.split("-")[0].toUpperCase() as Language;
    console.log(translate);

    switch (translate) {
      case "PT":
      case "EN":
        return translate;
      default:
        return "EN";
    }
  }

  static checkLang(lang:Language):Language {
    switch (lang) {
      case "PT":
      case "EN":
        return lang;
      default:
        return "EN";
    }
  }
}

export type TranslationProps = {
  router: NextRouter,
  id: string,
  lang?: Language,
}

export class TranslateableComponent extends React.Component<{lang?:Language}> {}

class Translation extends React.Component<TranslationProps> {
  render() {
    return <>
      {Translations.get(this.props.router,this.props.id, this.props.lang)}
    </>
  }
}

export default withRouter(Translation);