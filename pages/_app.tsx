import Script from "next/script";
import "../styles/globals.css";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      {/* Web Property */}
      <title>Senopati SMANSA Medan</title>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width,minimum-scale=1,initial-scale=1"
        />
        <meta
          name="keywords"
          content="Senopati, Snpt, Senopati SMANSA, Senopati SMANSA Medan"
        />
        <meta
          name="description"
          content="Senopati SMANSA Medan Link-In-Bio"
        />
        <meta name="author" content="Eriza Zehezkiel Gracia" />
        <link rel="icon" href="/favicon.ico" />
        {/* OpenGraph */}
        <meta property="og:site_name" content="Senopati SMANSA Medan" />
        <meta property="og:title" content="Senopati SMANSA Medan" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Senopati SMANSA Medan Link-In-Bio." />
        <meta property="og:url" content="https://senopati.link" />
        <meta
          property="og:image"
          content="http://raw.githubusercontent.com/Eriza-Z/Eriza-Z.github.io/master/public/icon.jpg"
        />
        <meta
          property="og:image:secure_url"
          content="https://raw.githubusercontent.com/Eriza-Z/Eriza-Z.github.io/master/public/icon.jpg"
        />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="256" />
        <meta property="og:image:height" content="256" />
        <meta property="og:image:alt" content="Foto lorong kelas" />
        <meta name="theme-color" content="#080452" />
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@eriza_gracia" />
        <meta name="twitter:creator" content="@eriza_gracia" />
        <meta name="twitter:url" content="https://senopati.link" />
        <meta name="twitter:title" content="ErZ" />
        <meta name="twitter:description" content="Senopati SMANSA Medan Link-In-Bio." />
        <meta
          name="twitter:image"
          content="https://raw.githubusercontent.com/Eriza-Z/Eriza-Z.github.io/master/public/icon.jpg"
        />
        <meta name="twitter:wigets:theme" content="dark" />
        {/* Apple */}
        <link rel="apple-touch-icon" href="../public/apple-touch-icon.png" />
        {/* Canonical */}
        <link rel="canonical" href="https://erizazg.my.id" />
    </Head>
    <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-0Z91PV5R58"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-0Z91PV5R58');
        `}
      </Script>
    <Component {...pageProps} />
    </> 
  );
}