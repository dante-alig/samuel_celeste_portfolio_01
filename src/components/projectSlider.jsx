// Importation des dépendances nécessaires
import React from "react";
// Import des composants Swiper pour le carrousel
import { Swiper, SwiperSlide } from "swiper/react";
// Import des modules Swiper nécessaires pour les fonctionnalités
import { Navigation, Pagination, EffectFade } from "swiper/modules";
// Import des styles CSS de Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";
import { trackClick } from "../utils/analytics";

const ProjectSlider = ({
  images,
  link,
  txtColor,
  pageSlider,
  technologies,
  pageSlider2,
  pageSlider3,
}) => {
  const navigate = useNavigate();

  const handleLinkClick = (url, title) => {
    if (url.startsWith('/')) {
      navigate(url);
    } else {
      window.open(url, '_blank', 'noopener noreferrer');
    }
    trackClick(title, url.startsWith('/') ? 'internal-link' : 'external-link');
  };

  return (
    <div className="project-slider-container">
      <Swiper
        modules={[Navigation, Pagination, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        effect="fade"
        className="project-slider"
      >
        <SwiperSlide>
          <div className="project-slide">
            <Page1 pageSlider={pageSlider} technologies={technologies} />
          </div>
        </SwiperSlide>
      </Swiper>

      <ul className="linkto">
        {link.map((objet, index) => {
          return (
            <ul key={index} className="linkto">
              <li style={{ border: `1px solid ${txtColor}` }}>
                <div
                  onClick={() => handleLinkClick(objet.url, objet.title)}
                  style={{ color: txtColor, cursor: 'pointer' }}
                  role="button"
                  tabIndex={0}
                >
                  {objet.title}
                  <FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square" />
                </div>
              </li>
            </ul>
          );
        })}
      </ul>
    </div>
  );
};

export default ProjectSlider;
