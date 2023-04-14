import React, { useEffect, useRef, useState } from "react";
import Link from "next/link.js";
import { prefix } from "/config/config.js";
import Slider from "react-slick";

export default function MainSlider() {
  const [isActive, setIsActive] = useState(false);
  const [imgNum, setImgNum] = useState(null);

  function imgClickHandler(img) {
    setImgNum(img.src.slice(-6, img.src.length).slice(0, 2));
    setIsActive(true);
  }

  useEffect(() => {
    return () => {
      console.log("clear code");
    };
  }, []);
  return (
    <>
      <article className="gallery">
        <ul className="gallery-list flex-start">
          <li>
            <a onClick={(e) => imgClickHandler(e.target)}>
              <img src={`${prefix}/img/me01.jpg`} alt="원은재 사진01" />
            </a>
          </li>
          <li>
            <a onClick={(e) => imgClickHandler(e.target)}>
              <img src={`${prefix}/img/me02.jpg`} alt="원은재 사진02" />
            </a>
          </li>
          <li>
            <a onClick={(e) => imgClickHandler(e.target)}>
              <img src={`${prefix}/img/me03.jpg`} alt="원은재 사진03" />
            </a>
          </li>
          <li>
            <a onClick={(e) => imgClickHandler(e.target)}>
              <img src={`${prefix}/img/me04.jpg`} alt="원은재 사진04" />
            </a>
          </li>
          <li>
            <a onClick={(e) => imgClickHandler(e.target)}>
              <img src={`${prefix}/img/me05.jpg`} alt="원은재 사진05" />
            </a>
          </li>
          <li>
            <a onClick={(e) => imgClickHandler(e.target)}>
              <img src={`${prefix}/img/me06.jpg`} alt="원은재 사진06" />
            </a>
          </li>
          <li>
            <a onClick={(e) => imgClickHandler(e.target)}>
              <img src={`${prefix}/img/me07.jpg`} alt="원은재 사진07" />
            </a>
          </li>
          <li>
            <a onClick={(e) => imgClickHandler(e.target)}>
              <img
                src={`${prefix}/img/me08.jpg`}
                alt="원은재 사진08"
                className="row-long"
              />
            </a>
          </li>
          <li>
            <a onClick={(e) => imgClickHandler(e.target)}>
              <img src={`${prefix}/img/me09.jpg`} alt="원은재 사진09" />
            </a>
          </li>
          <li>
            <a onClick={(e) => imgClickHandler(e.target)}>
              <img
                src={`${prefix}/img/me10.jpg`}
                alt="원은재 사진10"
                className="row-long"
              />
            </a>
          </li>
          <li>
            <a onClick={(e) => imgClickHandler(e.target)}>
              <img src={`${prefix}/img/me11.jpg`} alt="원은재 사진11" />
            </a>
          </li>
          <li>
            <a onClick={(e) => imgClickHandler(e.target)}>
              <img src={`${prefix}/img/me12.jpg`} alt="원은재 사진12" />
            </a>
          </li>
          <li>
            <a onClick={(e) => imgClickHandler(e.target)}>
              <img src={`${prefix}/img/me13.jpg`} alt="원은재 사진13" />
            </a>
          </li>
          <li>
            <a onClick={(e) => imgClickHandler(e.target)}>
              <img src={`${prefix}/img/me14.jpg`} alt="원은재 사진14" />
            </a>
          </li>
          <li>
            <a onClick={(e) => imgClickHandler(e.target)}>
              <img src={`${prefix}/img/me15.jpg`} alt="원은재 사진15" />
            </a>
          </li>
          <li>
            <a onClick={(e) => imgClickHandler(e.target)}>
              <img src={`${prefix}/img/me16.jpg`} alt="원은재 사진16" />
            </a>
          </li>
          <li>
            <a onClick={(e) => imgClickHandler(e.target)}>
              <img
                src={`${prefix}/img/me17.jpg`}
                alt="원은재 사진17"
                className="row-long"
              />
            </a>
          </li>
          <li>
            <a onClick={(e) => imgClickHandler(e.target)}>
              <img src={`${prefix}/img/me18.jpg`} alt="원은재 사진18" />
            </a>
          </li>
          <li>
            <a onClick={(e) => imgClickHandler(e.target)}>
              <img src={`${prefix}/img/me19.jpg`} alt="원은재 사진19" />
            </a>
          </li>
          <li>
            <a onClick={(e) => imgClickHandler(e.target)}>
              <img
                src={`${prefix}/img/me20.jpg`}
                alt="원은재 사진20"
                onLoad={() => console.log("aaa")}
              />
            </a>
          </li>
        </ul>
      </article>

      <div
        className={`${isActive ? "active" : ""} deem`}
        onClick={() => setIsActive(false)}
      >
        <div className="img-wrap">
          <img src={`${prefix}/img/me${imgNum}.jpg`} alt={`나`} />
        </div>
      </div>
    </>
  );
}
