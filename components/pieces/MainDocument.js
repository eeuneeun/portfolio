import React from "react";
import Link from "next/link";

export default function JjabixDocument() {
  return (
    <>
      <div className="document">
        <h5>Jjabix MainDocument</h5>
        <ul className="flex-center">
          <li>
            <Link href={"/doc/jjabix_ach.pdf"}>
              <img src="/img/idea_icon.png" alt="idea" />
            </Link>
          </li>
          <li>
            <Link href={"/doc/jjabix_ppt.pdf"}>
              <img src="/img/ppt_icon.png" alt="ppt" />
            </Link>
          </li>
          <li>
            <Link
              href={"/doc/jjabix_ppt.pptx"}
              onClick={() => alert("ppt는 다운로드 됩니다!")}
            >
              <img src="/img/pdf_icon.png" alt="pdf" />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

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
