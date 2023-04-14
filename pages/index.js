import Link from "next/link.js";
import React, { useState, useEffect } from "react";
import Footer from "../components/layout/Footer.js";
import { prefix } from "../config/config.js";
import MainSlider from "../components/pieces/MainSlider.js";
import MainGallery from "../components/pieces/MainGallery.js";

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
            <div className="gallery-wrap flex-start">
              <MainGallery />
              <article className="profile-contents">
                <h3>
                  원은재 <span>1989.02.06</span>
                </h3>

                <h3>보유기술</h3>
                <div className="skills">
                  <dl>
                    <dt>TOOLS</dt>
                    <dd>포토샵</dd>
                    <dd>일러스트레이터</dd>
                    <dd>디지털 드로잉</dd>
                  </dl>
                  <dl>
                    <dt>FRONTEND</dt>
                    <dd>Vanilla Javascript ECMA 5, ECMA 6</dd>
                    <dd>JQuery</dd>
                    <dd>React.js</dd>
                    <dd>Next.js</dd>
                    <dd>Vue.js</dd>
                    <dd>Svelt</dd>
                  </dl>
                  <dl>
                    <dt>BACKEND</dt>
                    <dd>Node.js Express Fastify</dd>
                    <dd>Java</dd>
                  </dl>
                  <dl>
                    <dt>BASH SHELL </dt>
                    <dd>Shell script Zenity</dd>
                    <dd>Vyatta</dd>
                    <dd>Zabbix</dd>
                  </dl>
                  <dl>
                    <dt>SERVER</dt>
                    <dd>Docker</dd>
                    <dd>Docker</dd>
                    <dd>Kubernetes Kubeflow airflow</dd>
                  </dl>
                </div>
              </article>
            </div>
          </div>
        </div>

        <div id="portfolio" className="portfolio flex-between">
          <h2>PORTFOLIO</h2>
          <div className="inner">
            <MainSlider />
          </div>
        </div>

        <div id="sns" className="sns">
          <div className="inner flex-col-center">
            <h2>SNS</h2>
            <article>
              <ul className="sns-list flex-center">
                <li>
                  <Link href="">kakaotalk</Link>
                </li>
                <li>
                  <Link href="https://blog.naver.com/sacroo" target="_blank">
                    naver blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/sacroosy/"
                    target="_blank"
                  >
                    instagram
                  </Link>
                </li>
                <li>
                  <Link href="" target="_blank">
                    twitter
                  </Link>
                </li>
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
                <dt>Contact Time</dt>
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
