import Head from "next/head";

export default function E404() {
  return (
    <div>
      <Head>
        {/* Web Property */}
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width,minimum-scale=1,initial-scale=1"
        />
        {/* OpenGraph */}
        <meta property="og:site_name" content="Not Found" />
        <meta property="og:title" content="Not Found" />
        <meta property="og:url" content="https://senopati.link" />
        <meta
          property="og:image"
          content="http://raw.githubusercontent.com/Eriza-Z/senopati/master/public/head.jpg"
        />
        <meta
          property="og:image:secure_url"
          content="https://raw.githubusercontent.com/Eriza-Z/senopati/master/public/head.jpg"
        />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="256" />
        <meta property="og:image:height" content="256" />
        <meta property="og:image:alt" content="Senopati SMANSA Medan" />
        <meta name="theme-color" content="#080452" />
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@eriza_gracia" />
        <meta name="twitter:creator" content="@eriza_gracia" />
        <meta name="twitter:url" content="https://erizazg.my.id" />
        <meta name="twitter:title" content="Not Found" />
        <meta
          name="twitter:image"
          content="https://raw.githubusercontent.com/Eriza-Z/senopati/master/public/head.jpg"
        />
        <meta name="twitter:wigets:theme" content="dark" />
        {/* Apple */}
        <link rel="apple-touch-icon" href="../public/apple-touch-icon.png" />
        {/* Canonical */}
        <link rel="canonical" href="https://erizazg.my.id" />
        {/* Website Thingy */}
        <title>Not Found - Senopati</title>
        <meta name="description" content="Uhhhh... This is 404 Bruh" />
        <meta name="author" content="Eriza Zehezkiel Gracia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-black">
        <div className="">
          <h1 className="text-white mt-4 md-4">
            Looks Like The Page You Looking For Is Not Available
          </h1>
          <h2 className="text-white mt-4 md-4">
            But Don&apos;t worry,{" "}
            <Link href="/">
              <em>Click Here To Go To Main Page</em>
            </Link>
          </h2>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 320">
            <path
              fill="#000000"
              fill-opacity="1"
              d="M0,288L1440,288L1440,320L0,320Z"
            ></path>
          </svg>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
