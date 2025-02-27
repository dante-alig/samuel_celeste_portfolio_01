import React from "react";

const Page1 = ({ pageSlider, technologies }) => {
  return (
    <div className="page1-container" style={{ color: pageSlider.textColor }}>
      <div className="content">
        <div
          className="page1-infos-container"
          style={{ backgroundColor: pageSlider.backgroundTextSlider }}
        >
          <div className="page1-title-container">
            <img className="page1-icon" src={pageSlider.icon} alt="logo" />
            <div className="page1-title">
              {pageSlider.titleSlider}
              <span>{pageSlider.subTitle}</span>
            </div>
          </div>
          <div className="page1-text">{pageSlider.texte}</div>
          <div>
            <div className="page1-techno-title">Propulsé par :</div>
            <div className="page1-techno-container">
              {technologies.map((tech) => (
                <a
                  key={tech.id}
                  className="page1-techno"
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="logos-technos"
                    style={{ borderColor: pageSlider.textColor }}
                    src={tech.logo}
                    alt={tech.name}
                  />
                  <span style={{ color: pageSlider.textColor }}>
                    {tech.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <img
          className="page1-image"
          src={pageSlider.imageSlider}
          alt="app image"
        />
      </div>
    </div>
  );
};

export default Page1;
