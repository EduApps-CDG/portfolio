import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class doc extends Document<{ locale: string }> {
  render() {
    return <>
      <Html>
        <Head>
          <link rel='stylesheet' href='./index.css'/>
        </Head>
        <body className='theme-dark'>
          <Main/>
          <NextScript/>
        </body>
      </Html>
    </>;
  }
}