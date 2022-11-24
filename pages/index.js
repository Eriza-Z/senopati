import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["The Best Class", "Are A Family", "The Winner"],
      typeSpeed: 25,
      backSpeed: 25,
      backDelay: 250,
      loop: true,
      showCursor: true,
      cursorChar: "!"
    });
    // Destroying
    return () => {
      typed.destroy();
    };
  }, []);

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
        <meta property="og:url" content="https://senopati.link" />
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
        <meta name="twitter:url" content="https://senopati.link" />
        <meta name="twitter:title" content="Senopati SMANSA" />
        <meta name="twitter:description" content="Event yang telah lakukan." />
        <meta name="twitter:image" content="https://raw.githubusercontent.com/Eriza-Z/Eriza-Z.github.io/master/Web/Icon/icon.webp" />
        <meta name="twitter:wigets:theme" content="dark" />
        {/* Apple */}
        <link rel="apple-touch-icon" href="../public/apple-touch-icon.png" />
        {/* Canonical */}
        <link rel="canonical" href="https://senopati.link" />
        {/* Website Thingy */}
        <title>Senopati SMANSA</title>
        <meta name="keywords" content="Senopati SMANSA" />
        <meta name="description" content="Event yang telah lakukan" />
        <meta name="author" content="Eriza Zehezkiel Gracia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <section className="hero tengah-absolut">
          <h1 className="display-4 animate__animated animate__fadeInUp">Hi, We Are Senopati SMANSA</h1>
          <h2 className="display-4 animate__animated animate__fadeInDown">We Are <span ref={el} id="Typed"></span></h2>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 320"><path fill="#000000" fill-opacity="1" d="M0,288L1440,288L1440,320L0,320Z"></path></svg>
        </section>
        <section className="tengah" data-aos="fade-right">
          <Image></Image>
        </section>
      </main>
      <footer className={"tengah top-5 bottom-2"}>
        <p className="putih">
          Still got time? Why don&apos;t you Check other page!<br/>
          Check our <Link href={'/gallery/'}><a>Gallery</a></Link> and our <Link href={'/socmed'}><a>Social Media</a></Link>
          Hope You All Have A Good Day<br />
        </p>
      </footer>
    </div>
  )
}
