import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { useProject } from "../context/ProjectContext";
import "swiper/css";
import "swiper/css/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const ProjectSliderResponsive = ({ 
  images, 
  link, 
  txtColor, 
  projectId,
  projectData // Nouveau prop pour recevoir toutes les données du projet
}) => {
  const navigate = useNavigate();
  const { updateSelectedProject } = useProject();
  
  const isVideo = (src) => {
    return typeof src === "string" && src.toLowerCase().endsWith(".mp4");
  };

  const handleClick = () => {
    // Mettre à jour le contexte avec les données du projet
    updateSelectedProject(projectData);
    // Naviguer vers la page du projet
    navigate(`/project/${projectId}`);
  };

  return (
    <div className="project-slider-responsive-container">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        autoplay={{
          delay: 6000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        className="project-slider-responsive"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="project-slide-responsive" onClick={handleClick} style={{ cursor: 'pointer' }}>
              {isVideo(src) ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="project-media-responsive"
                >
                  <source src={src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={src}
                  alt={`Project view ${index + 1}`}
                  className="project-media-responsive"
                />
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectSliderResponsive;
