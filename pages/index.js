import React, { useState, useEffect } from "react";
import Footer from "../components/layout/Footer.js";

export default function Home() {
  return (
    <>
      <main>
        <div id="home" className="home flex-col-center">
          <h2>Welcome</h2>
          <p>
            I CREATE A CONCEPT INTO THE MARKET <br />
            WELCOME TO EUNJAE's MADE WORLD
          </p>
        </div>
        <div id="profile" className="profile">
          <div className="inner">
            <h2>PROFILE</h2>
            <article>
              <dl>
                <dt>이름</dt>
                <dd>원은재</dd>
              </dl>

              <dl>
                <dt>생년월일</dt>
                <dd>1989.02.06</dd>
              </dl>

              <dl>
                <dt>보유기술</dt>
                <dd>포토샵</dd>
                <dd>일러스트레이터</dd>
                <dd>디지털 드로잉</dd>

                <dd>Vanilla Javascript ECMA 5, ECMA 6</dd>
                <dd>JQuery</dd>
                <dd>React.js</dd>
                <dd>Next.js</dd>
                <dd>Vue.js</dd>
                <dd>Svelt</dd>

                <dd>Node.js Express Fastify</dd>
                <dd>Java</dd>

                <dd>Shell script Zenity</dd>
                <dd>Vyatta</dd>
                <dd>Zabbix</dd>

                <dd>Docker</dd>
                <dd>Docker</dd>
                <dd>Kubernetes Kubeflow airflow</dd>
              </dl>
            </article>
          </div>
        </div>
        <div id="portfolio" className="portfolio">
          <div className="inner">
            <h2>PORTFOLIO</h2>
            <article>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </article>
          </div>
        </div>
        <div id="sns" className="sns">
          <div className="inner">
            <h2>SNS</h2>
            <article>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </article>
          </div>
        </div>
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
                <dt>Contact Possible Time</dt>
                <dd>08:00 - 22:00</dd>
              </dl>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
