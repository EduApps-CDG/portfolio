import { AppProps } from "next/app";
import "../dist/index.css";

export default function MyApp({Component,pageProps}:AppProps) {
  return <Component {...pageProps} />
}