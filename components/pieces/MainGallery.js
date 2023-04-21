import React, { useEffect, useRef, useState } from "react";
import { prefix } from "/config/config.js";

export default function MainSlider() {
  const [isActive, setIsActive] = useState(false);
  const [imgNum, setImgNum] = useState(null);

  function imgClickHandler(img) {
    setImgNum(img.src.slice(-6, img.src.length).slice(0, 2));
    setIsActive(true);
  }

  function setNowImg(e, action) {
    e.preventDefault();
    let temp = imgNum;

    if (action == "before") {
      temp = temp - 1;
      if (temp < 10) {
        temp = "0" + temp;
      }
      if (temp == "00") {
        temp = "20";
      }
      setImgNum(temp);
    } else if (action == "after") {
      temp = temp + "";
      if (temp.slice(0, 1) == "0") {
        let lastLetter = temp.slice(1, undefined);
        lastLetter = parseInt(lastLetter);
        lastLetter = lastLetter + 1;
        lastLetter < 10 ? (temp = "0" + lastLetter) : (temp = lastLetter + "");
      } else {
        temp = parseInt(temp) + 1 + "";
      }

      temp == "20" && (temp = "01");

      setImgNum(temp);
    }
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

      <div className={`${isActive ? "active" : ""} deem`}>
        <div
          className={`${isActive ? "active" : ""} deem-bg`}
          onClick={() => setIsActive(false)}
        ></div>
        <div className="img-wrap">
          <button
            className="before-btn"
            onClick={() => setNowImg(event, "before")}
          >
            이전
          </button>
          <img src={`${prefix}/img/me${imgNum}.jpg`} alt={`나`} />
          <button onClick={() => setNowImg(event, "after")}>다음</button>
        </div>
      </div>
    </>
  );
}
