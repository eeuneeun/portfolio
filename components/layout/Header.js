/* React */
import React, { useState, useEffect } from "react";

/* Next Js */
import { useRouter } from "next/router";
import Link from "next/link";

/*  선언부 */
const API_URL = process.env.NEXT_PUBLIC_API_URL;
const AUTH_URL = process.env.NEXT_PUBLIC_AUTH_URL;

export default function Header(props) {
  // * useEffect 선언부 *
  useEffect(() => {}, []);

  return (
    <>
      <div className="top-header flex-center">
        <Link href="/">EUNEUN</Link>
      </div>
    </>
  );
}
