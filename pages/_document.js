import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html>
        <Head>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/svg.js/2.7.0/svg.min.js"></script>
          <meta name="description" content="Vladimir Bukvic." />
          <link
            rel="icon"
            type="image/x-icon"
            href="/favicon.svg"
          ></link>
          <meta property="og:site_name" content="Vladimir Bukvic" />

          <meta
            name="description"
            content="Vladimir &mdash; Welcome to the world of future possibilities."
          />
          <meta property="og:site_name" content="Vladimir" />
          <meta property="og:title" content="Vladimir" />
          <meta property="og:url" content="{{ url('/') }}" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="{{ url('/') }}/images/logo.png" />
          <meta property="og:image:width" content="400" />
          <meta property="og:image:height" content="300" />
          <meta
            property="og:description"
            content="Welcome to the world of future possibilities."
          />

          <meta itemProp="name" content="Vladimir" />
          <meta itemProp="url" content="{{ url('/') }}" />
          <meta
            itemProp="thumbnailUrl"
            content="{{ url('/') }}/images/logo.png"
          />
          <meta itemProp="image" content="{{ url('/') }}/images/logo.png" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@" />
          <meta name="twitter:creator" content="@R" />
          <meta name="twitter:title" content="Vladimir" />
          <meta name="twitter:image" content="{{ url('/') }}/images/logo.png" />
          <meta name="twitter:url" content="{{ url('/') }}" />
        </Head>
        <body className="font-rubik">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
