import Header from "../components/header";
import React, { useState, useEffect } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import ProjectOverview from "../components/projectOverview";
import ScreenWarning from "../components/ScreenWarning";

// Import des vidéos
import video1 from "../images/videos/video1.mp4";
import video2 from "../images/videos/video2.mp4";
import video3 from "../images/videos/video3.mp4";
import video4 from "../images/videos/video4.mp4";
import video5 from "../images/videos/video5.mp4";
import video6 from "../images/videos/video6.mp4";

// ------ responsive--------
import mockupBelamiResponsiveInfos from "../images/responsive/belami.png";
import mockupBelamiResponsive from "../images/responsive/belami1.png";
import mockupBelamiResponsive2 from "../images/responsive/belami2.png";
import mockupBelamiResponsive3 from "../images/responsive/belami3.png";
import mockupBelamiResponsive4 from "../images/responsive/belami4.png";
import mockupBelamiResponsive5 from "../images/responsive/belami5.png";
import mockupKarineResponsive from "../images/responsive/karine1.png";
import mockupKarineResponsive2 from "../images/responsive/karine3.png";
import mockupKarineResponsive3 from "../images/responsive/karine4.png";
import mockupKarineResponsive4 from "../images/responsive/karine5.png";
import mockupMarvelResponsive from "../images/responsive/marvel1.png";
import mockupMarvelResponsive2 from "../images/responsive/marvel2.png";
import mockupMarvelResponsive3 from "../images/responsive/marvel3.png";
import mockupMarvelResponsive4 from "../images/responsive/marvel4.png";
import mockupMarvelResponsive5 from "../images/responsive/marvel5.png";
import mockupLovelyResponsive from "../images/responsive/lovely1.png";
import mockupLovelyResponsive2 from "../images/responsive/lovely2.png";
import mockupLovelyResponsive3 from "../images/responsive/lovely3.png";
import mockupLovelyResponsive4 from "../images/responsive/lovely4.png";
import mockupYeniResponsive from "../images/responsive/yeni1.png";
import mockupYeniResponsive2 from "../images/responsive/yeni2.png";
import mockupYeniResponsive3 from "../images/responsive/yeni3.png";
import mockupYeniResponsive4 from "../images/responsive/yeni4.png";
import ghostResponsive from "../images/responsive/ghost1.png";
import ghostResponsive2 from "../images/responsive/ghost2.png";
import ghostResponsive3 from "../images/responsive/ghost3.png";

// ------ icons--------
import karine from "../images/icon/k.png";
import belami from "../images/icon/belami.png";
import marvel from "../images/icon/marvel.png";
import lovely from "../images/icon/lovelyplace.png";
import yeni from "../images/icon/yeni.png";
import ghost from "../images/icon/ghost.png";

// ------ technos--------
import openai from "../images/technos/openai.png";
import figma from "../images/technos/figma.png";
import react from "../images/technos/react.png";
import nodeJs from "../images/technos/node.png";
import express from "../images/technos/express.png";
import typescript from "../images/technos/typescript.png";
import typescript2 from "../images/technos/typescript2.png";
import motion2 from "../images/technos/motion2.png";
import react2 from "../images/technos/react2.png";
import mongo from "../images/technos/mongodb.png";
import expo from "../images/technos/expo.png";
import google from "../images/technos/google.png";
import motion from "../images/technos/motion.png";
import next from "../images/technos/next.png";
import tailwind from "../images/technos/tailwind.png";
import eslint from "../images/technos/eslint.png";

// ------ presentation--------
import belamiPresentation from "../images/presentation/belami.png";
import karinePresentation from "../images/presentation/karine.png";
import marvelPresentation from "../images/presentation/marvel.png";
import lovelyPresentation from "../images/presentation/lovely.png";
import YeniPresentation from "../images/presentation/yeni.png";
import ghostPresentation from "../images/presentation/ghost.png";
// ------ videos--------
// import video1 from "../images/videos/video1.mp4";
// import video2 from "../images/videos/video2.mp4";
// import video3 from "../images/videos/video3.mp4";
// import video4 from "../images/videos/video4.mp4";
// import video5 from "../images/videos/video5.mp4";
// import video6 from "../images/videos/video6.mp4";
// ------ mockups--------
import mockup from "../images/page1/mockup.png";
import yeniMockup from "../images/mockup_yeni.png";
import belamiMockup from "../images/mockup/mockup_belami.png";
import marvelMockup from "../images/mockup/mockup_marvel.png";
import karineMockup from "../images/mockup/mockup_karine.png";
import ghostMockup from "../images/mockup/mockup_ghost.png";

import { Link } from "react-router-dom";

const useParallaxConfig = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getParallaxProps = (
    desktopOffset,
    desktopSpeed,
    mobileOffset,
    mobileSpeed
  ) => ({
    offset: isMobile ? mobileOffset : desktopOffset,
    speed: isMobile ? mobileSpeed : desktopSpeed,
  });

  return getParallaxProps;
};

const Home = ({ parallaxRef }) => {
  const getParallaxProps = useParallaxConfig();

  return (
    <div className="container">
      <ScreenWarning />
      <Parallax ref={parallaxRef} pages={9} style={{ top: "0", left: "0" }}>
        <ParallaxLayer {...getParallaxProps(0, 0, 0, 0)}>
          <Header parallaxRef={parallaxRef} />
        </ParallaxLayer>

        {/* -------------------------GHOST------------------------- */}
        <ParallaxLayer {...getParallaxProps(0.999, 0.2, 0.999, 0.1)}>
          <ProjectOverview projectId="ghost" />
        </ParallaxLayer>

        {/* -------------------------LOVELY PLACE------------------------- */}
        <ParallaxLayer {...getParallaxProps(2.2, 0.2, 2, 0.1)}>
          <ProjectOverview projectId="lovely" />
        </ParallaxLayer>

        {/* -------------------------MARVEL------------------------- */}
        <ParallaxLayer {...getParallaxProps(3.4, 0.2, 3, 0.1)}>
          <ProjectOverview projectId="marvel" />
        </ParallaxLayer>

        {/* -------------------------BELAMI------------------------- */}
        <ParallaxLayer {...getParallaxProps(4.6, 0.2, 4.1, 0.1)}>
          <ProjectOverview projectId="belami" />
        </ParallaxLayer>

        {/* -------------------------KARINE RASPAIL------------------------- */}
        <ParallaxLayer {...getParallaxProps(5.8, 0.2, 5.2, 0.1)}>
          <ProjectOverview projectId="karine" />
        </ParallaxLayer>

        {/* -------------------------YENI------------------------- */}
        <ParallaxLayer {...getParallaxProps(7, 0.2, 6.3, 0.1)}>
          <ProjectOverview projectId="yeni" />
        </ParallaxLayer>
        <ParallaxLayer {...getParallaxProps(8.2, 0.2, 7.4, 0.1)}>
          <div className="about">
            <div className="about-container">
              <div className="title-container-bottom">
                <div className="title-box">
                  <h1>Nice to meet you,</h1>
                  <h1> Let’s connect.</h1>
                </div>
                <Link
                  to="https://calendly.com/samuelceleste/appel"
                  target="_blank"
                  className="bookACall"
                >
                  Book a call
                </Link>
                {/* <div className="mail">2025 Dante Design</div> */}
              </div>
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Home;
