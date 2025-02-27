import React from "react";
import video1 from "../images/page1/video1.mp4";

const Page2 = ({ pageSlider2 }) => {
  return (
    <div
      className="page2-container"
      style={{ backgroundColor: pageSlider2.backgroundSlider }}
    >
      <div className="content">
        <video className="page2-image" autoPlay loop muted playsInline>
          <source src={pageSlider2.videoSlider} type="video/mp4" />
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
        <div className="page2-infos-container">
          <div className="page2-title-container">
            <div className="page2-title" style={{ color: pageSlider2.textColor }}>CHALLENGES AND OBJECTIVES</div>
          </div>
          <div className="page2-text">
            {pageSlider2?.featuresOverview?.map((feature) => (
              <div key={feature.id} className="feature-item">
                <h3
                  className="feature-title"
                  style={{ color: pageSlider2.textColor }}
                >
                  {feature.title}
                </h3>
                <p
                  className="feature-description"
                  style={{ color: pageSlider2.textColor }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
