import { Html, Head, Main, NextScript } from 'next/document'
//import Head from "next/head"
import * as React from 'react';

/**
 * You should not insert <Head> in _document.tsx, but as this is a
 * one page only website, I'll do it.
 * https://nextjs.org/docs/messages/no-document-title
 */
export default function Document() {
  return <>
    <Html>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="google-site-verification" content="t6vNmMB-j4llBciG2Rq_LfsaTELr1d6bmms4H8bXjoI" />
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta name="title" content="Eduardo Procopio Gomez | Desenvolvedor" />
        <meta name="description" content="Programação é o meu principal meio de lazer, clique aqui e veja do que eu sou capaz!" />
        <meta name="keywords" content="Desenvolvedor,Programador,Portfolio" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="Portuguese" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Eduardo Procopio Gomez" />
        <title>Eduardo Procopio Gomez</title>
      </Head>
      <body className='theme-dark'>
        <Main />
        <NextScript />
      </body>
    </Html>
  </>;
}