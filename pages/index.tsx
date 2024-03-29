import dynamic from "next/dynamic";
import { Icon } from "@mdi/react";
import Sawtooth from "../src/components/sawtooth";
import Button from "../src/components/button";
import Rtl from "../src/components/rtl";
import Image from "next/image";

const View = dynamic(() => import("../src/components/view"));
const Header = dynamic(() => import("../src/components/header"));
const Welcome = dynamic(() => import("../src/components/welcome"));
const Footer = dynamic(() => import("../src/components/footer"));
const GParticles = dynamic(() => import("../src/components/gparticles"));

import arthos from "../dist/img/arthos.png";
import netflocos from "../dist/img/netflocos.png";
import { GetServerSidePropsContext } from "next";
import Translations, { Language, TranslationHelper } from "../src/translations";
import Head from "next/head";
import { NextRouter, withRouter } from "next/router";
import { mdiApplicationBracketsOutline } from "@mdi/js";
import { Component } from "react";

class App extends Component<{userLang:Language,locale:string, router:NextRouter}> {
  render():React.ReactNode {
    return <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="google-site-verification" content="t6vNmMB-j4llBciG2Rq_LfsaTELr1d6bmms4H8bXjoI" />
        <meta name="robots" content="all" />
        <meta name="revisit-after" content="7 days" />
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0" />

        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

        <meta name="title" content={"Eduardo Procopio Gomez | " + TranslationHelper.gets(this.props.router,`title`,this.props.userLang)} />
        <meta property="og:locale" content={this.props.locale}/>
        <meta property="og:site_name" content="Portfolio de Eduardo Procopio Gomez" />
        <meta property="og:title" content={"Eduardo Procopio Gomez | " + TranslationHelper.gets(this.props.router,`title`,this.props.userLang)} />
        <meta property="og:url" content="https://eduardo.ix.tc" />
        <meta property="og:description" content={TranslationHelper.gets(this.props.router, `meta_description`, this.props.userLang)} />
        <meta property="og:type" content="profile" />
        <meta property="profile:first_name" content="Eduardo" />
        <meta property="profile:last_name" content="Procopio Gomez" />
        <meta property="profile:gender" content="male" />
        <meta name="description" content={TranslationHelper.gets(this.props.router, `meta_description`, this.props.userLang)} />
        <meta name="author" content="Eduardo Procopio Gomez" />
        <title>
          Eduardo Procopio Gomez | {TranslationHelper.gets(this.props.router, `title`, this.props.userLang)}
        </title>
        <link rel="canonical" href="https://eduardo.ix.tc"/>
        <link rel="alternate" hrefLang="pt-BR" href="https://eduardo.ix.tc" />
        <link rel="alternate" hrefLang="pt-PT" href="https://eduardo.ix.tc" />
        <link rel="alternate" hrefLang="en-US" href="https://eduardo.ix.tc" />
        <link rel="alternate" hrefLang="en-UK" href="https://eduardo.ix.tc" />
        <link rel="alternate" hrefLang="en-GB" href="https://eduardo.ix.tc" />
        {/* https://support.google.com/webmasters/thread/86451607?hl=en&msgid=86452356 */}
        {/* <html lang={this.props.locale} /> */}
      </Head>

      <Header/>
      <GParticles/>
      <Welcome lang={this.props.userLang}/>
      <div className="sections">
        <Sawtooth/>
        <section style={{
          background: "rgb(var(--bg2))"
        }}>
          <h2 className="centerizer">
            <Translations lang={this.props.userLang} id="about_me"/>
          </h2>
          <p className="container">
            <Translations lang={this.props.userLang} id="about_me_txt" />
          </p>
        </section>
        <div style={{
          backdropFilter: "blur(10px)"
        }}>
          <Sawtooth flipped/>
        </div>
        <section style={{
          backdropFilter: "blur(10px)"
        }}>
          <h2 className="centerizer">
            <Translations lang={this.props.userLang} id="my_proj"/>
          </h2>
          <div className="centerizer-h">
            <div className="scroll-h">
              <View className="proj">
                <Image width="128" height="128" src={netflocos} layout="fixed" alt="Netflocos"/>
                <div className="short-content">
                  <h3>Netflocos</h3>
                  <p>
                    <Translations lang={this.props.userLang} id="netflocos" />
                  </p>
                  <Rtl style={{
                    padding: "10px"
                  }}>
                    <Button href="https://github.com/ArthurEly/projetointegrador">
                      <Translations lang={this.props.userLang} id="view_code" />
                    </Button>
                  </Rtl>
                </div>
              </View>
              <View className="proj">
                <Image width="128" height="128" src={arthos} layout="fixed" alt="ARTHOS"/>
                <div className="short-content">
                  <h3>ARTHOS</h3>
                  <p>
                    <Translations lang={this.props.userLang} id="arthos" />
                  </p>
                  <Rtl style={{
                    padding: "10px"
                  }}>
                    <Button href="https://github.com/ArthurEly/projetoIntegradorFinal">
                      <Translations lang={this.props.userLang} id="view_code" />
                    </Button>
                  </Rtl>
                </div>
              </View>
              <View className="proj">
                <Icon path={mdiApplicationBracketsOutline} color="#CC0000"/>
                <div className="short-content">
                  <h3>Portfolio</h3>
                  <p>
                    <Translations lang={this.props.userLang} id="portfolio" />
                  </p>
                  <Rtl style={{
                    padding: "10px"
                  }}>
                    <Button href="https://github.com/EduApps-CDG/portfolio">
                      <Translations lang={this.props.userLang} id="view_code" />
                    </Button>
                  </Rtl>
                </div>
              </View>
            </div>
          </div>
        </section>
      </div>
      <Footer/>
    </>;
  }
}

/**
 * retorna a linguagem do navegador por meio da HTTP Request recebida.
 * @param ctx 
 * @returns 
 */
export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  //ctx.res.setHeader('Cache-Control', `s-maxage=60, stale-while-revalidate`) 
  let langs;
  try {
    langs = ctx.req.headers["accept-language"].split(/(\;|\,)/).filter((val, i, arr) => {
      return !(
        val == "," ||
        val == ";" ||
        val.startsWith("q=")
      )
    });
  } catch {
    return {
      props: {
        userLang: "EN",
        locale: "en-US"
      }
    }
  }

  let l:string[] = [];
  let l2:string[] = [];

  langs.forEach((str:string) => {
    l.push(str.includes("-") ? str.split("-")[0].toUpperCase() : str.toUpperCase());
    if (str.includes("-")) {
      l2.push(str);
    }
  });

  l = l.filter((str, i, self) => {
    return self.indexOf(str) == i;
  });


  let r: string = "en-US";

  for (let y in TranslationHelper.LANG_LIST) {
    const lang = TranslationHelper.LANG_LIST[y];
    let done = false;

    for (let x in l2) {
      if (l2[x].startsWith(lang.toLowerCase()) + "-") {
        r = l2[x];
        done = true;
        break;
      }
    }

    if (done) {
      break;
    }
  }

  return {
    props: {
      userLang: l[0],
      locale: r
    }
  };
}

export default withRouter(App);
