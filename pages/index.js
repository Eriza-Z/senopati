import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        {/* Web Property */}
        <meta charSet='UTF-8'/>
        <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
        {/* OpenGraph */}
        <meta property="og:site_name" content="Senopati SMANSA" />
        <meta property="og:title" content="Senopati SMANSA" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Web Tugas Eriza Zehezkiel Gracia." />
        <meta property="og:url" content="https://erizazg.my.id" />
        <meta property="og:image" content="http://raw.githubusercontent.com/Eriza-Z/Eriza-Z.github.io/master/Web/Icon/icon.webp" />
        <meta property="og:image:secure_url" content="https://raw.githubusercontent.com/Eriza-Z/Eriza-Z.github.io/master/Web/Icon/icon.webp" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="256" />
        <meta property="og:image:height" content="256" />
        <meta property="og:image:alt" content="Foto lorong kelas" />
        <meta name="theme-color" content="#080452" />
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@eriza_gracia" />
        <meta name="twitter:creator" content="@eriza_gracia" />
        <meta name="twitter:url" content="https://senopati.erizazg.my.id" />
        <meta name="twitter:title" content="Senopati SMANSA" />
        <meta name="twitter:description" content="Web Tugas Eriza Zehezkiel Gracia." />
        <meta name="twitter:image" content="https://raw.githubusercontent.com/Eriza-Z/Eriza-Z.github.io/master/Web/Icon/icon.webp" />
        <meta name="twitter:wigets:theme" content="dark" />
        {/* Apple */}
        <link rel="apple-touch-icon" href="../public/apple-touch-icon.png" />
        {/* Canonical */}
        <link rel="canonical" href="https://senopati.erizazg.my.id" />
        {/* Website Thingy */}
        <title>Senopati SMANSA</title>
        <meta name="keywords" content="Senopati SMANSA" />
        <meta name="description" content="Web Tugas Eriza Zehezkiel Gracia" />
        <meta name="author" content="Eriza Zehezkiel Gracia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <section className="hero tengah-absolut">
          {/* <h1 className='putih'>Mapel:</h1> */}
          {/* <h2 className='putih'></h2> */}
          <h1 className='putih'>External Link:</h1>
          <h2 className='putih'><a href='https://docs.google.com/forms/d/e/1FAIpQLSeuQSPKHhGOGi_fIB9tQmwfoQb5tVI8mPiOEGCtHy8Zj7mYFw/viewform?usp=sf_link' target={"_blank"} rel="noreferrer noopenner">Baju Porsa</a></h2>
        </section>
      </main>
      <footer className={"tengah bottom-2"}>
        <p className="putih">
          Created With <a href="https://nextjs.org" className="putih" target={"_blank"} rel="noreferrer noopenner">NextJS</a>, and <a href='https://code.visualstudio.com' target={"_blank"} rel="noreferrer noopenner">VS Code</a><br />
          Hope You All Have A Good Day<br />
        </p>
      </footer>
    </div>
  )
}
