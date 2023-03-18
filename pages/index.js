import React, { useState, useEffect } from "react";
import Footer from "../components/layout/Footer.js";

export default function Home() {
  return (
    <>
      <main>
        <div id="main" className="main">
          <h2>WE CREATE A CONCEPT INTO THE MARKET</h2>
          Welcome to Made
        </div>
        <div id="profile" className="profile">
          <h2>PROFILE</h2>
        </div>
        <div id="portfolio" className="portfolio">
          <h2>PORTFOLIO</h2>
        </div>
        <div id="sns" className="sns">
          <h2>SNS</h2>
        </div>
        <div id="contact" className="contact">
          <h2>CONTACT</h2>
        </div>
      </main>
      <Footer />
    </>
  );
}
