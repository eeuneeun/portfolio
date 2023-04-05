import Link from "next/link.js";
import React, { useState, useEffect } from "react";
import Footer from "../components/layout/Footer.js";
import { prefix } from "../config/config.js";

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
              <ul className="portfolio-list flex-start">
                <li>
                  <Link
                    href="http://www.khma.org/portal/portal.web"
                    target="blank"
                    passHref
                    legacyBehavior
                  >
                    <a>
                      <img
                        src={`${prefix}/img/web01.png`}
                        alt="대한주택관리사협회"
                      />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.coinbit.com/main.do"
                    target="blank"
                    passHref
                    legacyBehavior
                  >
                    <a>
                      <img
                        src={`${prefix}/img/web02.png`}
                        alt="코인빗 랜딩 페이지"
                      />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.coinbit.com/order.do?code=BTC-ETH"
                    target="blank"
                    passHref
                    legacyBehavior
                  >
                    <a>
                      <img
                        src={`${prefix}/img/web03.png`}
                        alt="코인빗 거래소"
                      />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.lotteon.com/p/display/main/lottemart?mall_no=4"
                    target="blank"
                    passHref
                    legacyBehavior
                  >
                    <a>
                      <img src={`${prefix}/img/web04.png`} alt="롯데마트" />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://hanacard.bizcc.co.kr:61512/"
                    target="blank"
                    passHref
                    legacyBehavior
                  >
                    <a>
                      <img
                        src={`${prefix}/img/web05.png`}
                        alt="하나카드 현대해상 파이낸스 세이프보험"
                      />
                    </a>
                  </Link>
                </li>

                <li>
                  <Link
                    href="https://hanacard.bizcc.co.kr:61512/call"
                    target="blank"
                    passHref
                    legacyBehavior
                  >
                    <a>
                      <img
                        src={`${prefix}/img/web06.png`}
                        alt="하나카드 현대해상 파이낸스 세이프보험 상담원용 관리자 페이지"
                      />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://chatbot.lotterentacar.net/chat/P2tpY6DXUmRNHKPix/1874b5274aeTlWK"
                    target="blank"
                    passHref
                    legacyBehavior
                  >
                    <a>
                      <img
                        src={`${prefix}/img/web07.png`}
                        alt="롯데렌터카 챗봇"
                      />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.gogung.go.kr/gogung/main/main.do"
                    target="blank"
                    passHref
                    legacyBehavior
                  >
                    <a>
                      <img src={`${prefix}/img/web08.png`} alt="고궁박물관" />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://dgovkorea.go.kr/"
                    target="blank"
                    passHref
                    legacyBehavior
                  >
                    <a>
                      <img
                        src={`${prefix}/img/web09.png`}
                        alt="디지털 전자정부 홍보관"
                      />
                    </a>
                  </Link>
                </li>
              </ul>
            </article>
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
