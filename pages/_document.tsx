import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class doc extends Document<{ locale: string }> {
  render() {
    return <>
      <Html>
        <Head>
        </Head>
        <body className='theme-dark'>
          <Main/>
          <NextScript/>
        </body>
      </Html>
    </>;
  }
}