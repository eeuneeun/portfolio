import React from "react";
import Link from "next/link.js";
import { prefix } from "/config/config.js";
import Slider from "react-slick";

export default function MainSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <article className="portfolio-list-wrap">
        <ul className="portfolio-list flex-start">
          <li>
            <Link
              href="http://www.khma.org/portal/portal.web"
              target="blank"
              passHref
              legacyBehavior
            >
              <a>
                <img src={`${prefix}/img/web01.png`} alt="대한주택관리사협회" />
              </a>
            </Link>

            <dl>
              <dt>대한주택관리사협회</dt>
              <dd>작업기간 : 2015.05 ~ 2015.12</dd>
              <dd>
                사용기술 :<span className="label">java</span>
                <span className="label mssql">mssql</span>
                <span className="label html5">html5</span>
                <span className="label css">css3</span>
                <span className="label js">javascript</span>
                <span className="label photoshop">photoshop</span>
              </dd>
            </dl>
          </li>
          <li>
            <Link
              href="https://www.coinbit.com/main.do"
              target="blank"
              passHref
              legacyBehavior
            >
              <a>
                <img src={`${prefix}/img/web02.png`} alt="코인빗 랜딩 페이지" />
              </a>
            </Link>

            <dl>
              <dt>코인빗 랜딩 페이지</dt>
              <dd>작업기간 : 2018.05 ~ 2015.12</dd>
              <dd>
                사용기술 :<span className="label">html5</span>
                <span className="label css">css3</span>
                <span className="label js">javascript</span>
                <span className="label photoshop">photoshop</span>
              </dd>
            </dl>
          </li>
          <li>
            <Link
              href="https://www.coinbit.com/order.do?code=BTC-ETH"
              target="blank"
              passHref
              legacyBehavior
            >
              <a>
                <img src={`${prefix}/img/web03.png`} alt="코인빗 거래소" />
              </a>
            </Link>
            <dl>
              <dt>코인빗 거래소</dt>
              <dd>작업기간 : 2018.05 ~ 2015.12</dd>
              <dd>
                사용기술 :<span className="label">html5</span>
                <span className="label css">css3</span>
                <span className="label js">javascript</span>
                <span className="label jqeury">JQuery</span>
              </dd>
            </dl>
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
            <dl>
              <dt>롯데마트 웹 접근성</dt>
              <dd>작업기간 : 2018.05 ~ 2015.12</dd>
              <dd>
                사용기술 :<span className="label">html5</span>
                <span className="label css">css3</span>
                <span className="label js">javascript</span>
                <span className="label jqeury">JQuery</span>
              </dd>
            </dl>
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
            <dl>
              <dt>하나카드 현대해상 파이낸스 세이프보험</dt>
              <dd>작업기간 : 2018.05 ~ 2015.12</dd>
              <dd>
                사용기술 :<span className="label">html5</span>
                <span className="label css">css3</span>
                <span className="label js">javascript</span>
                <span className="label react">react js</span>
                <span className="label nextjs">Next js</span>
              </dd>
            </dl>
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
            <dl>
              <dt>파이낸스 세이프보험 상담원용 페이지</dt>
              <dd>작업기간 : 2018.05 ~ 2015.12</dd>
              <dd>
                사용기술 :<span className="label">html5</span>
                <span className="label css">css3</span>
                <span className="label js">javascript</span>
                <span className="label react">react js</span>
                <span className="label nextjs">Next js</span>
              </dd>
            </dl>
          </li>
        </ul>
      </article>
      <article>
        <ul className="portfolio-list flex-start">
          <li>
            <Link
              href="https://chatbot.lotterentacar.net/chat/P2tpY6DXUmRNHKPix/1874b5274aeTlWK"
              target="blank"
              passHref
              legacyBehavior
            >
              <a>
                <img src={`${prefix}/img/web07.png`} alt="롯데렌터카 챗봇" />
              </a>
            </Link>
            <dl>
              <dt>롯데렌터카 챗봇</dt>
              <dd>작업기간 : 2022.12 ~ 2023.2</dd>
              <dd>
                사용기술 :<span className="label">html5</span>
                <span className="label css">css3</span>
                <span className="label js">javascript</span>
              </dd>
            </dl>
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
            <dl>
              <dt>고궁박물관</dt>
              <dd>작업기간 : 2022.10 ~ 2023.4</dd>
              <dd>
                사용기술 :<span className="label">html5</span>
                <span className="label css">css3</span>
                <span className="label js">javascript</span>
                <span className="label java">java</span>
                <span className="label spring">spring</span>
                <span className="label mysql">mysql</span>
              </dd>
            </dl>
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
            <dl>
              <dt>디지털 전자정부 홍보관</dt>
              <dd>작업기간 : 2022.10 ~ 2023.4</dd>
              <dd>
                사용기술 :<span className="label">html5</span>
                <span className="label css">css3</span>
                <span className="label js">javascript</span>
                <span className="label java">java</span>
                <span className="label spring">spring</span>
                <span className="label mysql">mysql</span>
              </dd>
            </dl>
          </li>
          <li>
            <Link href="#" target="blank" passHref legacyBehavior>
              <a>
                <img
                  src={`${prefix}/img/web10.png`}
                  alt="KPP 태양광 발전량 예측"
                />
              </a>
            </Link>
            <dl>
              <dt>KPP 태양광 발전량 예측</dt>
              <dd>작업기간 : 2022.10 ~ 2023.4</dd>
              <dd>
                사용기술 :<span className="label">html5</span>
                <span className="label css">css3</span>
                <span className="label js">javascript</span>
                <span className="label java">java</span>
                <span className="label spring">spring</span>
                <span className="label mysql">mysql</span>
              </dd>
            </dl>
          </li>
          <li>
            <Link
              href="https://eeuneeun.github.io/manpower"
              target="blank"
              passHref
              legacyBehavior
            >
              <a>
                <img src={`${prefix}/img/web11.png`} alt="맨파워 홈페이지" />
              </a>
            </Link>
            <dl>
              <dt>맨파워 홈페이지</dt>
              <dd>작업기간 : 2022.10 ~ 2023.4</dd>
              <dd>
                사용기술 :<span className="label">html5</span>
                <span className="label css">css3</span>
                <span className="label js">javascript</span>
                <span className="label jqeury">jQeury</span>
              </dd>
            </dl>
          </li>
          <li>
            <Link
              href="https://lottewac.github.io/"
              target="blank"
              passHref
              legacyBehavior
            >
              <a>
                <img
                  src={`${prefix}/img/web12.png`}
                  alt="롯데마트 웹 접근성 가이드"
                />
              </a>
            </Link>
            <dl>
              <dt>롯데마트 웹 접근성 가이드</dt>
              <dd>작업기간 : 2022.10 ~ 2023.4</dd>
              <dd>
                사용기술 :<span className="label">html5</span>
                <span className="label css">css3</span>
                <span className="label js">javascript</span>
                <span className="label jquery">JQuery</span>
              </dd>
            </dl>
          </li>
        </ul>
      </article>
    </Slider>
  );
}
