/* REACT */
import React, { useState, useEffect } from "react";

/* NEXT JS */
import Head from "next/head";

// * 상수 선언부 */
const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;
const GOOGLE_API = process.env.NEXT_PUBLIC_GOOGLE_API;

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
      <Head>
        <title>WONEUNJAE</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="#" />
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
    </>
  );
}
