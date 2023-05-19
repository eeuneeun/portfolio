import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />

          <link rel="manifest" href="/manifest.json" />
        </Head>
        <body>
          <div id="root" className="wrap">
            <Main />
            <NextScript />
          </div>
        </body>
      </Html>
    );
  }
}
