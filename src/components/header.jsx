import { motion } from "framer-motion";
import Scroll from "./scroll";
import { trackClick } from "../utils/analytics";

const Header = ({ parallaxRef }) => {
  const scrollToSection = (offset, projectName) => {
    trackClick(projectName, "project-link");
    if (parallaxRef.current) {
      parallaxRef.current.scrollTo(offset);
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const describeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.3,
        ease: "easeOut",
      },
    },
  };

  const projectsVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: 0.6,
        ease: "easeOut",
      },
    },
  };

  const projectTitleVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (custom) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        delay: 0.8 + custom * 0.1,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div>
      <header>
        <div className="title-container">
          <motion.div
            className="title-box"
            initial="hidden"
            animate="visible"
            variants={titleVariants}
          >
            <h1>Hello,</h1>
            <h1>Bienvenue.</h1>
          </motion.div>
          <motion.div
            className="describe"
            initial="hidden"
            animate="visible"
            variants={describeVariants}
          >
            Je suis Samuel Céleste, designer UX/UI et developpeur Full Stack. Je
            crée des sites web et des applications mobiles qui combinent
            esthétique et performance.
          </motion.div>
        </div>
        <motion.div
          className="projects"
          initial="hidden"
          animate="visible"
          variants={projectsVariants}
        >
          <div className="projects-section">Derniers projets</div>
          <motion.div
            className="projects-title"
            onClick={() => scrollToSection(0.95, "Ghost")}
            custom={0}
            variants={projectTitleVariants}
          >
            Ghost
          </motion.div>
          <motion.div
            className="projects-title"
            onClick={() => scrollToSection(1.95, "Lovely Place")}
            custom={1}
            variants={projectTitleVariants}
          >
            Lovely Place
          </motion.div>
          <motion.div
            className="projects-title"
            onClick={() => scrollToSection(3.1, "Belami")}
            custom={2}
            variants={projectTitleVariants}
          >
            Belami
          </motion.div>
          <motion.div
            className="projects-title projects-title-under"
            onClick={() => scrollToSection(3.95, "Karine Raspail")}
            custom={3}
            variants={projectTitleVariants}
          >
            Karine Raspail
          </motion.div>
        </motion.div>
      </header>
      <Scroll />
    </div>
  );
};

export default Header;
