/* React */
import React, { useEffect } from "react";

/* Next Js */
import Link from "next/link";

export default function Contact(props) {
  return (
    <div id="contact" className="contact">
      <div className="inner">
        <h2>CONTACT</h2>
        <article>
          <dl>
            <dt>Phone</dt>
            <dd>010-3940-6027</dd>
          </dl>
          <dl>
            <dt>E-mail</dt>
            <dd>sacroo8989@gmail.com</dd>
          </dl>
          <dl>
            <dt>Contact Time</dt>
            <dd>08:00 - 22:00</dd>
          </dl>
        </article>
      </div>
    </div>
  );
}
