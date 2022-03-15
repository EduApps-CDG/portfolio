import * as React from "react";
import Header from "../src/components/header";
import GParticles from "../src/components/gparticles";
import Welcome from "../src/components/welcome";
import Sawtooth from "../src/components/sawtooth";
import View from "../src/components/view";
import Button from "../src/components/button";
import Rtl from "../src/components/rtl";
import Footer from "../src/components/footer";
import Image from "next/image";

import arthos from "../dist/img/arthos.png";
import netflocos from "../dist/img/netflocos.png";
import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import Translations, { Language } from "../src/translations";

export default class App extends React.Component<{userLang:Language}> {
  render():React.ReactNode {
    return <>
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
          <p>
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
  let langs = ctx.req.headers["accept-language"].split(/(\;|\,)/).filter((val, i, arr) => {
    return !(
      val == "," ||
      val == ";" ||
      val.startsWith("q=")
    )
  });

  let l:string[] = [];

  langs.forEach((str:string) => {
    l.push(str.split("-")[0].toUpperCase());
  });

  l = l.filter((str, i, self) => {
    return self.indexOf(str) == i;
  });

  return {
    props: {
      userLang: l[0]
    }
  };
}