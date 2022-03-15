import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document'
//import Head from "next/head"
import * as React from 'react';

/**
 * You should not insert <Head> in _document.tsx, but as this is a
 * one page only website, I'll do it.
 * https://nextjs.org/docs/messages/no-document-title
 */
export default class doc extends Document<{ locale: string }> {
  render() {
    return <>
      <Html>
        <Head></Head>
        <body className='theme-dark'>
          <Main />
          <NextScript />
        </body>
      </Html>
    </>;
  }
}