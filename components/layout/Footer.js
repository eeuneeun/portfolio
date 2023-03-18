import React, { useState, useEffect } from "react";
import Link from "next/link";
import Gnb from "./Gnb";

// * 상수 선언부 *
//const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;
export default function Footer(props) {
  // * useEffect 선언부 *
  useEffect(() => {}, []);

  return (
    <>
      <footer>
        <div className="inner flex-center">
          <h5>(EUN)EVERYDAY CREATIVE</h5>
          <ul>
            <li>
              <Link href="/">github</Link>
            </li>
          </ul>
          <p>©WONEUNJAE. ALL Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}
