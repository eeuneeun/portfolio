import React from "react";
import Link from "next/link";
import { prefix } from "/config/config.js";

export default function JjabixDocument() {
  return (
    <>
      <div className="document">
        <h5>Jjabix MainDocument</h5>
        <ul className="flex-center">
          <li>
            <Link href={`${prefix}/doc/jjabix_ach.pdf`} passHref legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <img src={`${prefix}/img/idea_icon.png`} alt="idea" />
              </a>
            </Link>
          </li>
          <li>
            <Link href={`${prefix}/doc/jjabix_ppt.pdf`} passHref legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <img src={`${prefix}/img/ppt_icon.png`} alt="ppt" />
              </a>
            </Link>
          </li>
          <li>
            <Link
              onClick={() => alert("ppt는 다운로드 됩니다!")}
              href={`${prefix}/doc/jjabix_ppt.pptx`}
              passHref
              legacyBehavior
            >
              <a target="_blank" rel="noopener noreferrer" downloads>
                <img src={`${prefix}/img/pdf_icon.png`} alt="pdf" />
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

//240818
// TODO : 페이지 내부에서 열리고 닫히는 우측 뷰어로 만들 것!
export function Iframe() {
  return (
    <iframe
      src="http://localhost:3000/doc/jjabix_ppt.pptx"
      width="600"
      height="400"
      title="Example Site"
      style={{ border: "none" }}
    />
  );
}
