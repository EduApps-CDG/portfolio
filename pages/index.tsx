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

export default class App extends React.Component {
  render():React.ReactNode {
    return <>
      <Header/>
      <GParticles/>
      <Welcome/>
      <div className="sections">
        <Sawtooth/>
        <section style={{
          background: "rgb(var(--bg2))"
        }}>
          <h2 className="centerizer">Sobre mim</h2>
          <p>
            Moro em Rio Grande do Sul no Brasil.
            Gosto muito de técnologia e por isso decidi me tornar um desenvolvedor.
            Meus principais passa-tempos são praticar programação e tocar guitarra.
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
          <h2 className="centerizer">Meus projetos</h2>
          <div className="centerizer-h">
            <div className="scroll-h">
              <View className="proj">
                <Image width="128" height="128" src={netflocos} layout="fixed" alt="Netflocos"/>
                <div className="short-content">
                  <h3>Netflocos</h3>
                  <p>
                    Um aplicativo de streaming baseado na Netflix para o meu curso Técnico em Informática.
                    Minha equipe de 2 pessoas conseguiu completar em 15 dias.
                    O projeto ficou incrível e surpreendemos o professor, espero talvez um dia continuar o projeto com meu amigo.
                    Inclui um app e um banco de dados para pôr os videos.
                  </p>
                  <Rtl style={{
                    padding: "10px"
                  }}>
                    <Button href="https://github.com/ArthurEly/projetointegrador">Visualizar Código</Button>
                  </Rtl>
                </div>
              </View>
              <View className="proj">
                <Image width="128" height="128" src={arthos} layout="fixed" alt="ARTHOS"/>
                <div className="short-content">
                  <h3>ARTHOS</h3>
                  <p>
                    O projeto final do meu curso Técnico em Informática.
                    Consiste em um sistema de Ordem de Serviço para veículos.
                    O projeto inclui um app para clientes, um banco de dados e um programa desktop para colaboladores.
                  </p>
                  <Rtl style={{
                    padding: "10px"
                  }}>
                    <Button href="https://github.com/ArthurEly/projetoIntegradorFinal">Visualizar Código</Button>
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