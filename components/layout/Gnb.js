/* React */
import React, { useState, useEffect } from "react";
import { prefix } from "../../config/config.js";

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
        <div className="inner flex-between pc">
          <h1 className="title">
            <Link href="/">EUN</Link>
          </h1>
          <ul className="flex-start">
            <li>
              <Link href={`${prefix}/`}>HOME</Link>
            </li>
            <li>
              <Link href={`${prefix}/#profile`}>PROFILE</Link>
            </li>
            <li>
              <Link href={`${prefix}/#portfolio`}>PORTFOLIO</Link>
            </li>
            <li>
              <Link href={`${prefix}/#sns`}>SNS</Link>
            </li>
            <li>
              <Link href={`${prefix}/#contact`}>CONTACT</Link>
            </li>
          </ul>
        </div>
        <div className="inner flex-between mobile">
          <h1 className="title">
            <Link href="/">EUN</Link>
          </h1>
          <div className="ham-menu">
            <button className="close">닫기</button>
            <ul>
              <li>
                <Link href={`${prefix}/`}>HOME</Link>
              </li>
              <li>
                <Link href={`${prefix}/#profile`}>PROFILE</Link>
              </li>
              <li>
                <Link href={`${prefix}/#portfolio`}>PORTFOLIO</Link>
              </li>
              <li>
                <Link href={`${prefix}/#sns`}>SNS</Link>
              </li>
              <li>
                <Link href={`${prefix}/#contact`}>CONTACT</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
