import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useProject } from "../context/ProjectContext";
import projectData from "../services/projectData";

const Project = () => {
  const { id } = useParams();
  const { selectedProject, updateSelectedProject } = useProject();
  const navigate = useNavigate();

  useEffect(() => {
    const project = projectData.find((project) => project.projectId === id);
    if (project) {
      updateSelectedProject(project);
    }
  }, [id, updateSelectedProject]);

  console.log("Selected Project:", selectedProject);
  console.log("Features Overview:", selectedProject?.featuresOverview);

  useEffect(() => {
    // Sauvegarder la couleur originale du body
    const originalColor = document.body.style.backgroundColor;

    // Changer la couleur du body si on a un projet sélectionné
    if (selectedProject) {
      document.body.style.backgroundColor = selectedProject.bgColor;
    }

    // Cleanup : remettre la couleur originale quand le composant est démonté
    return () => {
      document.body.style.backgroundColor = originalColor;
    };
  }, [selectedProject]);

  const getNextProject = () => {
    const currentIndex = projectData.findIndex(
      (project) => project.projectId === selectedProject.projectId
    );
    const nextIndex = (currentIndex + 1) % projectData.length;
    return projectData[nextIndex];
  };

  const handleNextProject = () => {
    const nextProject = getNextProject();
    updateSelectedProject(nextProject);
    navigate(`/project/${nextProject.projectId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!selectedProject) {
    return (
      <div className="project-page" style={{ padding: "2rem" }}>
        <h1>Projet non trouvé</h1>
        <div
          onClick={() => navigate("/")}
          style={{ color: "#fff", textDecoration: "underline", cursor: "pointer" }}
        >
          Retour à l'accueil
        </div>
      </div>
    );
  }

  return (
    <div className="overview-presentation-container , top-page">
      <div className="overview-box">
        <motion.div 
          className="overview-pagination"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span style={{ color: selectedProject.txtColor }}>
            {selectedProject.pageNumber}
          </span>
          <span>/</span>
          <span>{selectedProject.totalPages}</span>
        </motion.div>
        <motion.div
          className="overview-title"
          style={{ color: selectedProject.txtColor }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {selectedProject.title}
        </motion.div>
        <motion.div 
          className="techno-project-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {selectedProject.techno.map((techno, index) => (
            <span
              key={index}
              className="techno-project-page"
              style={{
                borderColor: selectedProject.txtColor,
                color: selectedProject.txtColor,
              }}
            >
              {techno}
            </span>
          ))}
        </motion.div>
        <div className="video-container">
          {selectedProject.videoSlider ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              style={{ width: "100%", height: "220px", objectFit: "cover" }}
            >
              <source src={selectedProject.videoSlider} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div style={{ color: selectedProject.txtColor }}>
              Aucune vidéo disponible pour ce projet
            </div>
          )}
        </div>

        <div className="line"></div>
        <motion.div 
          className="overview-projet"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="texte-projet-cat">Contexte</div>
          <div
            className="texte-projet"
            style={{ color: selectedProject.txtInfos }}
          >
            {selectedProject.pageSlider.texte}
          </div>
        </motion.div>
        <div className="line"></div>
        <motion.div 
          className="overview-projet"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="texte-projet-cat">Challenges et objectifs</div>
          <div className="texte-projet">
            {selectedProject.pageSlider2?.featuresOverview &&
              selectedProject.pageSlider2.featuresOverview.map((feature, index) => (
                <motion.div 
                  key={feature.id} 
                  style={{ marginBottom: "1rem" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                >
                  <div
                    className="texte-projet-title"
                    style={{
                      color: selectedProject.txtColor,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {feature.title}
                  </div>
                  <div
                    style={{ color: selectedProject.txtColor, opacity: 0.8 }}
                  >
                    {feature.description}
                  </div>
                </motion.div>
              ))}
          </div>
          <div
            className="comeback-button"
            style={{
              color: selectedProject.txtColor,
              borderColor: selectedProject.txtColor,
            }}
          >
            <div
              onClick={handleNextProject}
              style={{
                color: selectedProject.txtColor,
                cursor: 'pointer'
              }}
            >
              Projet suivant
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Project;
