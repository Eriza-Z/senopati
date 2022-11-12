/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import Script from "next/script";
import "../styles/globals.css";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  });
  return (
    <> 
    <Component {...pageProps} />
    <Script src="https://scripts.sirv.com/sirv.js"/>
    </> 
  );
}