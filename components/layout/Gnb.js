/* React */
import React, { useState, useEffect } from "react";
import { prefix } from "../../config/config.js";

/* Next JS */
import Link from "next/link";

/* Redux */

// * 상수 선언부 *
const domainUrl = process.env.NEXT_PUBLIC_DOMAIN_URL;

export default function Gnb(props) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function toggleMobileMenu(action) {
    if (action == "open") {
      setIsMobileMenuOpen(true);
    } else if (action == "close") {
      setIsMobileMenuOpen(false);
    } else {
      setIsMobileMenuOpen(false);
    }
  }

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
          <div className="title-wrap flex-between">
            <h1 className="title">
              <Link href="/">EUN</Link>
            </h1>
            <button
              className="ham-menu-btn"
              onClick={() => toggleMobileMenu("open")}
            >
              닫기
            </button>
          </div>
          <div className={`${isMobileMenuOpen ? "active" : ""} ham-menu`}>
            <button className="close" onClick={() => toggleMobileMenu("close")}>
              닫기
            </button>
            <ul>
              <li>
                <Link href={`${prefix}/`} passHref legacyBehavior>
                  <a onClick={() => toggleMobileMenu("close")}>HOME</a>
                </Link>
              </li>
              <li>
                <Link href={`${prefix}/#profile`} passHref legacyBehavior>
                  <a onClick={() => toggleMobileMenu("close")}>PROFILE</a>
                </Link>
              </li>
              <li>
                <Link href={`${prefix}/#portfolio`} passHref legacyBehavior>
                  <a onClick={() => toggleMobileMenu("close")}>PORTFOLIO</a>
                </Link>
              </li>
              <li>
                <Link href={`${prefix}/#sns`} passHref legacyBehavior>
                  <a onClick={() => toggleMobileMenu("close")}>SNS</a>
                </Link>
              </li>
              <li>
                <Link href={`${prefix}/#contact`} passHref legacyBehavior>
                  <a onClick={() => toggleMobileMenu("close")}>CONTACT</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
