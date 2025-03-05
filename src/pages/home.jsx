import Header from "../components/header";
import React, { useState, useEffect } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import ProjectOverview from "../components/projectOverview";
import ScreenWarning from "../components/ScreenWarning";

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
