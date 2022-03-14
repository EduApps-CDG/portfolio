import { AppProps } from "next/app";
import React from "react";
import "../dist/index.css";

export default function MyApp({Component,pageProps}:AppProps) {
  // @ts-ignore
  return <Component {...pageProps} />
}