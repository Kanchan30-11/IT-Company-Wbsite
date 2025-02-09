import React from "react";
import Intro from "../component/Intro";
import Navbar from "../component/Navbar";
import Contact from "./Contact";
import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import HomeService from "../component/HomeService";
import HomeAbout from "../component/HomeAbout";

function Home() {


  return (
 <>

 <Intro/>
 <HomeAbout/>
 <HomeService/>
 <Portfolio/>


 <Contact/>
 </>
  )
}

export default Home;