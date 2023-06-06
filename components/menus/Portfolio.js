/* React */
import React from "react";

/* Next Js */
import MainSlider from "../pieces/MainSlider";

export default function Portfolio(props) {
  return (
    <div id="portfolio" className="portfolio flex-between">
      <h2>PORTFOLIO</h2>
      <div className="inner">
        <MainSlider />
      </div>
    </div>
  );
}
