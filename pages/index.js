import Link from "next/link.js";
import React, { useState, useEffect } from "react";
import Footer from "../components/layout/Footer.js";
import { prefix } from "../config/config.js";
import Sns from "../components/menus/Sns.js";
import Contact from "../components/menus/Contact.js";
import Study from "../components/menus/Study.js";
import Portfolio from "../components/menus/Portfolio.js";
import Profile from "../components/menus/Profile.js";

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
        <Profile />
        <Portfolio />
        <Study />
        <Sns />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
