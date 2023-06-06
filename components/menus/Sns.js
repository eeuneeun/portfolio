/* React */
import React, { useState, useEffect } from "react";

/* Next Js */
import Link from "next/link";

/*  선언부 */
const API_URL = process.env.NEXT_PUBLIC_API_URL;
const AUTH_URL = process.env.NEXT_PUBLIC_AUTH_URL;

export default function Sns(props) {
  // * useEffect 선언부 *
  useEffect(() => {}, []);

  return (
    <div id="sns" className="sns">
      <div className="inner flex-col-center">
        <h2>SNS</h2>
        <article>
          <ul className="sns-list flex-center">
            <li>
              <Link
                href="https://open.kakao.com/o/s3Riyngf"
                passHref
                legacyBehavior
              >
                <a>kakaotalk</a>
              </Link>
            </li>
            <li>
              <Link
                href="https://blog.naver.com/sacroo"
                target="_blank"
                passHref
                legacyBehavior
              >
                <a>naver blog</a>
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/sacroosy/"
                target="_blank"
                passHref
                legacyBehavior
              >
                <a>instagram</a>
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/eeuneeun/"
                target="_blank"
                passHref
                legacyBehavior
              >
                <a>github</a>
              </Link>
            </li>
          </ul>
        </article>
      </div>
    </div>
  );
}
