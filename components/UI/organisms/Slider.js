import React, { Component, useEffect } from "react";
import Slider from "react-slick";



export function ThumbNailSlider(props) {
  
  const pagerSlider = props.pagerSlider;
  const SetMainSlider = props.SetMainSlider;
  const slideClickHandler = props.slideClickHandler;
  
  const baseUrl = '/img';
  

  const settings = {
    className : "thumbnail-slide",
    arrows:false,
    dots: false,
    dotsClass: "slick-dots slick-thumb",
    fade: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    accessibility:false,
    // onInit : (e)=>console.log("썸네일 슬라이더! ", e)
  };


  return (
    <div>
      <Slider
        {...settings}
        ref={(slider) => SetMainSlider(slider)}
      >
        <div>
          <img src={baseUrl + "/ex01.jpg"} />
        </div>
        <div>
          <img src={baseUrl + "/ex02.jpg"} />
        </div>
        <div>
          <img src={baseUrl + "/ex03.jpg"} />
        </div>
        <div>
          <img src={baseUrl + "/ex04.jpg"} />
        </div>
        <div>
          <img src={baseUrl + "/ex05.jpg"} />
        </div>
      </Slider>
    </div>
  );
}



export function PagerSlider(props) {

  const baseUrl = '/img';

  const mainSlider = props.mainSlider;
  const SetPagerSlider = props.SetPagerSlider;
  const slideClickHandler = props.slideClickHandler;
 

  const settings = {
    className : "pager-slide",
    dots: false,
    fade: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    adaptiveHeight: true,
    onInit : (e)=>slideClickHandler(e)
  };

  useEffect(()=>{
    if(mainSlider){
      
    }

  }, [])

  return (
    <div>
      <Slider
        {...settings}
        ref={(slider) => SetPagerSlider(slider)}
      >
        <div>
          <img src={baseUrl + "/ex01.jpg"} />
        </div>
        <div>
          <img src={baseUrl + "/ex02.jpg"} />
        </div>
        <div>
          <img src={baseUrl + "/ex03.jpg"} />
        </div>
        <div>
          <img src={baseUrl + "/ex04.jpg"} />
        </div>
        <div>
          <img src={baseUrl + "/ex05.jpg"} />
        </div>
        <div>
          <img src={baseUrl + "/ex01.jpg"} />
        </div>
        <div>
          <img src={baseUrl + "/ex02.jpg"} />
        </div>
        <div>
          <img src={baseUrl + "/ex03.jpg"} />
        </div>
        <div>
          <img src={baseUrl + "/ex04.jpg"} />
        </div>
        <div>
          <img src={baseUrl + "/ex05.jpg"} />
        </div>
      </Slider>
    </div>
  );
}



export function SyncSlider() {
  const [nav1, setNav1] = React.useState(null)
  const [nav2, setNav2] = React.useState(null)
    let slider1 = []
    let slider2 = []

    React.useEffect(() => {

      // console.log("sysnc slider", slider1)
        setNav1(slider1)
        setNav2(slider2)
    }, [slider1, slider2])

    return (
      <div>
        <h2>Slider Syncing (AsNavFor)</h2>
        <h4>First Slider</h4>
        <Slider
          asNavFor={nav2}
          ref={slider => (slider1 = slider)}
        >
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
        <h4>Second Slider</h4>
        <Slider
          asNavFor={nav1}
          ref={slider => (slider2 = slider)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );

}
