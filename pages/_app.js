/* REACT */
import React, { useState, useEffect } from "react";

/* NEXT JS */
import Head from "next/head";

// * 상수 선언부 */
import { PortfolioProvider } from "../config/context";
import { prefix } from "../config/config";

/* CSS */
import "../public/styles/components.css";
import "../public/styles/globals.css";

/* LAYOUT */
import Header from "../components/layout/Header.js";
import Gnb from "../components/layout/Gnb.js";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <PortfolioProvider value={{ prefix }}>
        <Head>
          <title>WONEUNJAE</title>
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
