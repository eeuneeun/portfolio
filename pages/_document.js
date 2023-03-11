import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';


export default class MyDocument extends Document {

  render() {
    return (
      <Html lang="ko">
        <Head>
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
            <script type="text/javascript" src="https://oss.sheetjs.com/sheetjs/xlsx.full.min.js"></script>
            <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=d26c497ca769b9b9a2de3f388dc9b05c&libraries=clusterer"></script>
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