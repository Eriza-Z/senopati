import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

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
        <meta property="og:description" content="Event yang telah lakukan." />
        <meta property="og:url" content="https://senopati.link/socmed" />
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
        <meta name="twitter:url" content="https://senopati.link/socmed" />
        <meta name="twitter:title" content="Senopati SMANSA" />
        <meta name="twitter:description" content="Event yang telah lakukan." />
        <meta name="twitter:image" content="https://raw.githubusercontent.com/Eriza-Z/Eriza-Z.github.io/master/Web/Icon/icon.webp" />
        <meta name="twitter:wigets:theme" content="dark" />
        {/* Apple */}
        <link rel="apple-touch-icon" href="../public/apple-touch-icon.png" />
        {/* Canonical */}
        <link rel="canonical" href="https://senopati.link/socmed" />
        {/* Website Thingy */}
        <title>Socmed - Senopati SMANSA</title>
        <meta name="keywords" content="Senopati SMANSA" />
        <meta name="description" content="Event yang telah lakukan" />
        <meta name="author" content="Eriza Zehezkiel Gracia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <section className="hero tengah bottom-5">
          <h1 className='putih'>Social Media</h1><br/>
          <h2 className='putih'>
          <a href="https://www.instagram.com/senopatismansa/" className="putih" target={"_blank"} rel="noreferrer noopenner">Instagram<br/></a>
          </h2>
        </section>
      </main>
      <footer className={"tengah bottom-2"}>
        <p className="putih">
          Created 
          Technology Used:<br/>
          <span className="tengah-absolut">
            Framework: <a href="https://nextjs.org" className="putih" target={"_blank"} rel="noreferrer noopenner">NextJS</a>, and <a href="https://reactjs.org" className="putih" target={"_blank"} rel="noreferrer noopenner">ReactJS</a><br/>
          </span>
          <span className="tengah-absolut">
            Text Editor: <a href='https://code.visualstudio.com' target={"_blank"} rel="noreferrer noopenner">Visual Studio Code</a><br/>
          </span>
          Hope You All Have A Good Day<br />
        </p>
      </footer>
    </div>
  )
}
