import { motion } from "framer-motion";
import FeaturedProject from "./featuredProject";
import ProjectSlider from "./projectSlider";
import ProjectSliderResponsive from "./projectSliderResponsive";
import Image from "../images/macbook.png";
import projectData from "../services/projectData";

const ProjectOverview = ({ projectId }) => {
  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const infosVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: "easeOut",
      },
    },
  };

  // Find the project data based on projectId
  const project = projectData.find((p) => p.projectId === projectId);

  if (!project) return null;

  const {
    pageNumber,
    totalPages,
    titlePresentation,
    title,
    date,
    techno,
    roles,
    bgColor,
    txtColor,
    border,
    bgContainer,
    projectThumbnail,
    cssStyle,
    link,
    buttonStyle,
    sliderImages,
    sliderImagesResponsive,
    pageSlider,
    technologies,
    pageSlider2,
    pageSlider3,
    videoSlider,
    txtInfos,
  } = project;

  return (
    <div
      className="overview-container"
      style={{ backgroundColor: bgColor }}
      id={pageNumber === "01" ? "belami-section" : undefined}
    >
      <div className="overview-presentation-container">
        <div className="overview-box">
          <div className="overview-pagination">
            <span style={{ color: txtColor }}>{pageNumber}</span>
            <span>/</span>
            <span>{totalPages}</span>
          </div>
          <motion.div
            className="overview-title"
            style={{ color: txtColor }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={titleVariants}
          >
            {titlePresentation}
          </motion.div>
          <motion.div
            className="overview-infos"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={infosVariants}
          >
            <div className="overview-projet">
              <div>Projet</div> <div style={{ color: txtColor }}>{title}</div>
            </div>
            <div className="overview-role">
              <div>Rôle</div>
              <ul style={{ color: txtColor }}>
                {roles.map((role, index) => (
                  <li key={index}>{role}</li>
                ))}
              </ul>
            </div>
            <div className="overview-date">
              <div>Date</div>
              <div style={{ color: txtColor }}>{date}</div>
            </div>
          </motion.div>
        </div>
        <div className="overview-techno-box" style={{ color: txtColor }}>
          {techno.map((tech, index) => {
            return (
              <div
                key={index}
                className="techno"
                style={{ border: `1px solid ${border}` }}
              >
                {tech}
              </div>
            );
          })}
        </div>
      </div>
      <ProjectSlider
        images={sliderImages}
        link={link}
        txtColor={txtColor}
        pageSlider={pageSlider}
        technologies={technologies}
        pageSlider2={pageSlider2}
        pageSlider3={pageSlider3}
      />
      {sliderImagesResponsive && (
        <ProjectSliderResponsive
          images={sliderImagesResponsive}
          link={link}
          txtColor={txtColor}
          projectId={projectId || title?.toLowerCase()}
          projectData={{
            title,
            description: titlePresentation,
            date,
            technologies: techno,
            roles,
            txtColor,
            txtInfos,
            bgColor,
            pageSlider,
            pageSlider2,
            pageSlider3,
            texte: pageSlider?.texte,
            videoSlider,
            techno,
            totalPages,
            pageNumber,
            featuresOverview: pageSlider?.featuresOverview,
          }}
        />
      )}
    </div>
  );
};

export default ProjectOverview;
