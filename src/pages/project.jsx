import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useProject } from "../context/ProjectContext";

const Project = () => {
  const { id } = useParams();
  const { selectedProject } = useProject();

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

  if (!selectedProject) {
    return (
      <div className="project-page" style={{ padding: "2rem" }}>
        <h1>Projet non trouvé</h1>
        <Link to="/" style={{ color: "#fff", textDecoration: "underline" }}>
          Retour à l'accueil
        </Link>
      </div>
    );
  }

  return (
    <div className="overview-presentation-container , top-page">
      <div className="overview-box">
        <div className="overview-pagination">
          <span style={{ color: selectedProject.txtColor }}>
            {selectedProject.pageNumber}
          </span>
          <span>/</span>
          <span>{selectedProject.totalPages}</span>
        </div>
        <div
          className="overview-title"
          style={{ color: selectedProject.txtColor }}
        >
          {selectedProject.title}
        </div>
        <div className="techno-project-container">
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
        </div>
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
        <div className="overview-projet">
          <div className="texte-projet-cat">Contexte</div>
          <div
            className="texte-projet"
            style={{ color: selectedProject.txtInfos }}
          >
            {selectedProject.texte}
          </div>
        </div>
        <div className="line"></div>
        <div className="overview-projet">
          <div className="texte-projet-cat">Challenges et objectifs</div>
          <div className="texte-projet">
            {selectedProject.pageSlider2?.featuresOverview &&
              selectedProject.pageSlider2.featuresOverview.map((feature) => (
                <div key={feature.id} style={{ marginBottom: "1rem" }}>
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
                </div>
              ))}
          </div>
          <div
            className="comeback-button"
            style={{
              color: selectedProject.txtColor,
              borderColor: selectedProject.txtColor,
            }}
          >
            <Link
              style={{
                color: selectedProject.txtColor,
              }}
              to="/"
            >
              Projet suivant
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
