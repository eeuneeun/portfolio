/* React */
import React, { useState, useEffect } from "react";

/* Next JS */
import Link from "next/link";

/* Redux */

// * 상수 선언부 *
const domainUrl = process.env.NEXT_PUBLIC_DOMAIN_URL;

export default function Gnb(props) {
  // * useEffect 선언부 *
  useEffect(() => {}, []);

  return (
    <>
      <header className="gnb">
        <div className="inner flex-between">
          <h1 className="title">
            <Link href="/">EUN</Link>
          </h1>
          <ul className="flex-start">
            <li>
              <Link href="/">HOME</Link>
            </li>
            <li>
              <Link href="#profile">PROFILE</Link>
            </li>
            <li>
              <Link href="#portfolio">PORTFOLIO</Link>
            </li>
            <li>
              <Link href="#sns">SNS</Link>
            </li>
            <li>
              <Link href="#contact">CONTACT</Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
