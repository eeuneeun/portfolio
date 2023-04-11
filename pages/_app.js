/* REACT */
import React, { useState, useEffect } from "react";

/* NEXT JS */
import Head from "next/head";

// * 상수 선언부 */
import { PortfolioProvider } from "../config/context";
import { prefix } from "../config/config";

/* CSS */
import "../public/styles/components.css";
import "../public/styles/templates.css";
import "../public/styles/globals.css";

/* LAYOUT */
import Header from "../components/layout/Header.js";
import Gnb from "../components/layout/Gnb.js";

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    console.log("_app.js");
  }, []);

  return (
    <>
      <PortfolioProvider value={{ prefix }}>
        <Head>
          <title>WONEUNJAE</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="shortcut icon" href="#" />
          <link
            rel="stylesheet"
            type="text/css"
            charset="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
        </Head>

        <div id="page" className="wrap">
          <Header {...pageProps} />
          <Gnb {...pageProps} />
          <div className="container-wrap">
            <div className="container">
              <Component {...pageProps} />
            </div>
          </div>
        </div>
      </PortfolioProvider>
    </>
  );
}
