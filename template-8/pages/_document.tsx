import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <title>Manikanta Mettu</title>
          <meta
            name="description"
            content="Full‑stack developer building performant, privacy‑first products. Creator of ChillBoard (200+ users) and Chrome MV3 extension (100+ installs). React/Next.js, Node.js/Express, TypeScript, MongoDB, Tailwind, Docker."
          />
          <meta
            name="viewport"
            content="width=device-width,minimum-scale=1,initial-scale=1"
          />
          <meta property="og:type" content="website" />
          <meta name="og:title" property="og:title" content="Manikanta Mettu" />
          <meta
            name="og:description"
            property="og:description"
            content="Full‑stack developer building performant, privacy‑first products. Creator of ChillBoard (200+ users) and Chrome MV3 extension (100+ installs)."
          />
          <meta
            property="og:site_name"
            content="Manikanta Mettu — Portfolio"
          />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Manikanta Mettu" />
          <meta
            name="twitter:description"
            content="Full‑stack developer. ChillBoard (200+ users), Chrome MV3 (100+ installs). React/Next.js, Node.js/Express, TS, MongoDB, Docker."
          />
          <meta name="twitter:site" content="" />
          <meta name="twitter:creator" content="" />

          <meta
            property="og:image"
            content="/ogImage.png"
          />
          <meta
            name="twitter:image"
            content="/ogImage.png"
          />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="/"
          />
          <meta property="og:title" content="Manikanta Mettu" />
          <meta
            property="og:description"
            content="Full‑stack developer building performant, privacy‑first products. Creator of ChillBoard and Chrome MV3 extension."
          />
          <meta
            property="og:image"
            content="/ogImage.png"
          />
          <meta property="og:site_name" content="Manikanta Mettu" />
          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="/"
          />
          <meta property="twitter:title" content="Manikanta Mettu" />
          <meta
            property="twitter:description"
            content="Full‑stack developer. ChillBoard (200+ users), Chrome MV3 (100+ installs)."
          />
          <meta
            property="twitter:image"
            content="/ogImage.png"
          />
          <meta name="robots" content="Index" />
          <link rel="manifest" href="/manifest.json" />

          <meta charSet="utf-8" />
        </Head>
        <body className=" bg-white dark:bg-gradient-to-r dark:from-[#1F2937]  dark:to-[#111827] min-h-screen w-full relative text-gray-600 dark:text-white ">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
