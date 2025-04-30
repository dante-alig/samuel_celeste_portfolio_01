import React, { useState } from "react";
import "../styles/services.css";
import profil from "../images/profil.png";
import { motion } from "framer-motion";
import Modal from "react-modal";
import {
  FaDollarSign,
  FaBriefcase,
  FaChartLine,
  FaCogs,
  FaUserClock,
  FaSearchDollar,
  FaClock,
  FaCode,
  FaMoneyBillWave,
  FaGift,
  FaCrown,
  FaPlus,
  FaTimes,
} from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { useCalendly } from "../context/CalendlyContext";

Modal.setAppElement("#root");

const Services = () => {
  const [activeTab, setActiveTab] = useState("solution web");
  const [activeFaq, setActiveFaq] = useState(null);
  const { isModalOpen, openCalendlyModal, closeCalendlyModal } = useCalendly();

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <>
      <motion.div
        className="services-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="services-header"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="header-content">
            <motion.div
              className="profile-image"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <img src={profil} alt="Profile" />
            </motion.div>
            <motion.div
              className="header-text"
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h1>
                Je vais accélérer votre croissance
                <br />
                avec des solutions digitales
                <br />
                sur-mesure.
              </h1>
            </motion.div>
          </div>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            je vous crée des outils puissants pour développer votre activité,
            mieux vendre et automatiser ce qui doit l'être.
          </motion.p>
        </motion.div>

        <motion.div
          className="services-tabs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`tab ${activeTab === "solution web" ? "active" : ""}`}
            onClick={() => setActiveTab("solution web")}
          >
            Sites web
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`tab ${activeTab === "mobile app" ? "active" : ""}`}
            onClick={() => setActiveTab("mobile app")}
          >
            MVP & App Mobile
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`tab ${activeTab === "automatisation" ? "active" : ""}`}
            onClick={() => setActiveTab("automatisation")}
          >
            automatisation IA
          </motion.button>
        </motion.div>

        {activeTab === "solution web" && (
          <motion.div
            className="service-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              L'offre web est faites pour vous si :
            </motion.h3>
            <motion.ul
              className="service-list"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              <motion.li
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                Vous souhaitez un site web ou un tunnel de vente qui reflète
                parfaitement votre image de marque
              </motion.li>
              <motion.li
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                Vous êtes un entrepreneur indépendant ou une PME
              </motion.li>
              <motion.li
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                Vous souhaitez acquérir plus rapidement de nouveaux clients et
                augmenter votre chiffre d'affaires.
              </motion.li>
              <motion.li
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                Vous souhaitez éviter les erreurs coûteuses d'une conception web
                non professionnelle, sources de perte de temps et d’argent.
              </motion.li>
              <motion.li
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                Vous voulez profiter des solutions les plus efficaces et les
                mieux adaptées à votre activité
              </motion.li>
            </motion.ul>
          </motion.div>
        )}

        {activeTab === "mobile app" && (
          <motion.div
            className="service-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              L'offre application mobile est faite pour vous si :
            </motion.h3>
            <motion.ul
              className="service-list"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              <motion.li
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                Vous êtes une startup et vous souhaitez valider rapidement votre
                concept avec un MVP (Minimum Viable Product)
              </motion.li>
              <motion.li
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                Vous avez besoin d'une première version fonctionnelle de votre
                application pour lever des fonds
              </motion.li>
              <motion.li
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                Vous cherchez un développeur capable de créer rapidement un
                produit de A à Z avec les technologies modernes
              </motion.li>
              <motion.li
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                Vous voulez une application évolutive qui pourra s'adapter aux
                retours de vos premiers utilisateurs
              </motion.li>
              <motion.li
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                Vous souhaitez un accompagnement technique pour définir les
                fonctionnalités essentielles de votre MVP
              </motion.li>
            </motion.ul>
          </motion.div>
        )}

        {activeTab === "automatisation" && (
          <motion.div
            className="service-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              L'offre d'automatisation IA est faite pour vous si :
            </motion.h3>
            <motion.ul
              className="service-list"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              <motion.li
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                Vous aimeriez gagner 1, 2, 3, 4 heures, voire plus, chaque jour
                dans votre travail
              </motion.li>
              <motion.li
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                Vous voulez intégrer l'IA pour améliorer l'expérience client
                (chatbots, recommandations personnalisées)
              </motion.li>
              <motion.li
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                Vous voulez rendre votre travail plus efficace grâce à l’IA.
              </motion.li>
              <motion.li
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                Vous souhaitez analyser automatiquement vos données pour prendre
                de meilleures décisions
              </motion.li>
              <motion.li
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                Vous voulez rester compétitif en adoptant les dernières
                technologies d'IA
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </motion.div>

      <motion.div
        className="methode-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Méthode de travail
        </motion.h2>
        <motion.div
          className="methode-steps"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.div
            className="methode-step"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="step-circle"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              1
            </motion.div>
            <h3>Appel de découverte</h3>
            <p>
              On parle ensemble de votre projet afin de comprendre votre besoin,
              ainsi Je m'assure que je peux réellement vous aider et vous
              apporter de la valeur.
            </p>
            <motion.a
              onClick={openCalendlyModal}
              className="step-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Réserver un appel
            </motion.a>
          </motion.div>

          <motion.div
            className="methode-step"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="step-circle"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              2
            </motion.div>
            <h3>Proposition d'offre</h3>
            <p>
              Je vous fais une proposition de devis personnalisé. Si c’est la
              première fois que nous travaillons ensemble, vous bénéficiez d'une
              remise sur ce devis.
            </p>
          </motion.div>

          <motion.div
            className="methode-step"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="step-circle"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              3
            </motion.div>
            <h3>Validation</h3>
            <p>
              On valider l'offre, détermine le calendrier et les étapes du
              paiement puis la mission démare.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="why-choose-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Pourquoi me choisir
        </motion.h2>
        <motion.div
          className="why-choose-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          <motion.div
            className="why-choose-item"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.5 }}
          >
            <motion.div className="icon-container">
              <GiReceiveMoney className="why-choose-icon" />
            </motion.div>
            <h3>Satisfait ou remboursé</h3>
            <p>
              Essayez sans risque : si vous n'êtes pas pleinement satisfait de
              mon travail, vous êtes remboursé. Votre confiance est ma priorité.
            </p>
          </motion.div>

          <motion.div
            className="why-choose-item"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.5 }}
          >
            <motion.div className="icon-container">
              <FaCrown className="why-choose-icon" />
            </motion.div>
            <h3>Tarif préférentiel pour notre première collaboration</h3>
            <p>
              Collaborez sereinement : profitez d'un tarif spécial pour votre
              premier projet, afin d'initier notre partenariat sur de bonnes
              bases.
            </p>
          </motion.div>
          <motion.div
            className="why-choose-item"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.5 }}
          >
            <motion.div className="icon-container">
              <FaGift className="why-choose-icon" />
            </motion.div>
            <h3>Zoning offert</h3>
            <p>
              Démarrage facilité : je vous offre une prévisualisation de
              l’organisation de votre site web, pour que vous puissiez déjà
              l’imaginer et vous projeter.
            </p>
          </motion.div>

          <motion.div
            className="why-choose-item"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.5 }}
          >
            <motion.div className="icon-container">
              <FaBriefcase className="why-choose-icon" />
            </motion.div>
            <h3>Expérience éprouvée</h3>
            <p>
              Expertise reconnue : bénéficiez de 10 ans d’expérience au service
              de la réussite digitale de nombreux clients.
            </p>
          </motion.div>

          <motion.div
            className="why-choose-item"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.5 }}
          >
            <motion.div className="icon-container">
              <FaCogs className="why-choose-icon" />
            </motion.div>
            <h3>Interfaces esthétiques</h3>
            <p>
              Design soigné : des interfaces modernes, ergonomiques et
              attractives qui subliment votre image et convertissent vos
              utilisateurs.
            </p>
          </motion.div>

          <motion.div
            className="why-choose-item"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.5 }}
          >
            <motion.div className="icon-container">
              <FaCode className="why-choose-icon" />
            </motion.div>
            <h3>Solutions sur-mesure</h3>
            <p>
              Technologie adaptée : chaque solution est pensée pour répondre
              précisément à vos besoins et à vos objectifs de croissance.
            </p>
          </motion.div>

          <motion.div
            className="why-choose-item"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.5 }}
          >
            <motion.div className="icon-container">
              <FaUserClock className="why-choose-icon" />
            </motion.div>
            <h3>Contact direct 24/7</h3>
            <p>
              Disponibilité totale : joignez-moi à tout moment pour un suivi
              réactif et sans intermédiaires, même le week-end.
            </p>
          </motion.div>

          <motion.div
            className="why-choose-item"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.5 }}
          >
            <motion.div className="icon-container">
              <FaChartLine className="why-choose-icon" />
            </motion.div>
            <h3>Optimisation SEO & performance</h3>
            <p>
              Performance & Visibilité : tous mes sites sont optimisés pour un
              chargement rapide et une bonne visibilité sur Google.
            </p>
          </motion.div>

          <motion.div
            className="why-choose-item"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.5 }}
          >
            <motion.div className="icon-container">
              <FaMoneyBillWave className="why-choose-icon" />
            </motion.div>
            <h3>Plus de valeur, moins de dépenses</h3>
            <p>
              Investissement malin : l'innovation technologique au service de
              votre budget, pour maximiser l'impact sans exploser les coûts.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="contact-block"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="contact-content"
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
        >
          <motion.div
            className="profile-image"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img src={profil} alt="Profile" />
          </motion.div>
          <motion.div
            className="contact-text"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              "Réservez un appel 100% gratuit et sans engagement, pour échanger
              sur votre activité. Nous identifierons ensemble vos besoins et
              découvrirons comment automatiser votre business pour gagner du
              temps et booster vos ventes."
            </motion.p>
            <motion.button
              className="contact-button"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openCalendlyModal}
            >
              Me contacter
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="testimonials-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Ceux qui m'ont fait confiance
        </motion.h1>
        <motion.div
          className="testimonials-slider"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.div
            className="testimonial-card"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 100,
            }}
          >
            <motion.div
              className="testimonial-header"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <motion.img
                src={profil}
                alt="Mathieu Madyson"
                className="testimonial-image"
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 }}
              />
              <motion.div
                className="testimonial-info"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <h3>Mathieu Madyson</h3>
                <p>CEO de Mercure</p>
              </motion.div>
            </motion.div>
            <motion.div
              className="rating"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
            </motion.div>
            <motion.p
              className="testimonial-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              Chaque site ou application que je développe est personnalisé selon
              vos besoins et pensé pour évoluer avec votre activité. Exit le
              prêt-à-porter, vive le cousu-main !
            </motion.p>
          </motion.div>

          <motion.div
            className="testimonial-card"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="testimonial-header"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <motion.img
                src={profil}
                alt="Sophie Martin"
                className="testimonial-image"
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 }}
              />
              <motion.div
                className="testimonial-info"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <h3>Sophie Martin</h3>
                <p>Fondatrice de Lumière</p>
              </motion.div>
            </motion.div>
            <motion.div
              className="rating"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
            </motion.div>
            <motion.p
              className="testimonial-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              Un vrai professionnel qui a su transformer ma vision en réalité.
              Le site est exactement comme je l'imaginais, moderne et efficace.
              Je recommande vivement !
            </motion.p>
          </motion.div>

          <motion.div
            className="testimonial-card"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="testimonial-header"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <motion.img
                src={profil}
                alt="Lucas Dubois"
                className="testimonial-image"
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 }}
              />
              <motion.div
                className="testimonial-info"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <h3>Lucas Dubois</h3>
                <p>Directeur Marketing</p>
              </motion.div>
            </motion.div>
            <motion.div
              className="rating"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
            </motion.div>
            <motion.p
              className="testimonial-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              La qualité du travail et le respect des délais m'ont
              particulièrement impressionné. Un véritable atout pour notre
              transformation digitale.
            </motion.p>
          </motion.div>

          <motion.div
            className="testimonial-card"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="testimonial-header"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <motion.img
                src={profil}
                alt="Emma Bernard"
                className="testimonial-image"
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 }}
              />
              <motion.div
                className="testimonial-info"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <h3>Emma Bernard</h3>
                <p>Startup Founder</p>
              </motion.div>
            </motion.div>
            <motion.div
              className="rating"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
            </motion.div>
            <motion.p
              className="testimonial-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              L'expertise technique combinée à une vraie compréhension des
              besoins business fait toute la différence. Notre site performe
              au-delà de nos attentes !
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="faq-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Questions fréquentes
        </motion.h2>
        <motion.div
          className="faq-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          <motion.div
            className="faq-item"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="faq-question" onClick={() => toggleFaq(0)}>
              <h3>Combien coûte un projet web ou mobile ?</h3>
              <FaPlus className={`faq-icon ${activeFaq === 0 ? "open" : ""}`} />
            </div>
            <div
              className="faq-answer"
              style={{ display: activeFaq === 0 ? "block" : "none" }}
            >
              Chaque projet est unique et le prix varie en fonction de vos
              besoins spécifiques. Je vous propose un devis personnalisé après
              notre premier échange pour comprendre précisément vos objectifs et
              l'envergure du projet.
            </div>
          </motion.div>

          <motion.div
            className="faq-item"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="faq-question" onClick={() => toggleFaq(1)}>
              <h3>Combien de temps faut-il pour réaliser mon projet ?</h3>
              <FaPlus className={`faq-icon ${activeFaq === 1 ? "open" : ""}`} />
            </div>
            <div
              className="faq-answer"
              style={{ display: activeFaq === 1 ? "block" : "none" }}
            >
              La durée dépend de la complexité du projet. En général, un site
              web prend entre 4 et 8 semaines, une application mobile entre 8 et
              12 semaines. Un calendrier détaillé vous sera fourni lors de notre
              première discussion.
            </div>
          </motion.div>

          <motion.div
            className="faq-item"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="faq-question" onClick={() => toggleFaq(2)}>
              <h3>Comment se déroule la collaboration ?</h3>
              <FaPlus className={`faq-icon ${activeFaq === 2 ? "open" : ""}`} />
            </div>
            <div
              className="faq-answer"
              style={{ display: activeFaq === 2 ? "block" : "none" }}
            >
              La collaboration se fait en plusieurs étapes : analyse de vos
              besoins, proposition personnalisée, développement par phases avec
              des points réguliers, tests, et mise en production. Vous êtes
              impliqué à chaque étape pour garantir que le résultat correspond à
              vos attentes.
            </div>
          </motion.div>

          <motion.div
            className="faq-item"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="faq-question" onClick={() => toggleFaq(3)}>
              <h3>Proposez-vous un suivi après la mise en ligne ?</h3>
              <FaPlus className={`faq-icon ${activeFaq === 3 ? "open" : ""}`} />
            </div>
            <div
              className="faq-answer"
              style={{ display: activeFaq === 3 ? "block" : "none" }}
            >
              Oui, je propose un suivi post-lancement pour assurer le bon
              fonctionnement de votre solution. Des forfaits de maintenance sont
              disponibles pour garantir la pérennité et l'évolution de votre
              projet.
            </div>
          </motion.div>

          <motion.div
            className="faq-item"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="faq-question" onClick={() => toggleFaq(4)}>
              <h3>Quelles technologies utilisez-vous ?</h3>
              <FaPlus className={`faq-icon ${activeFaq === 4 ? "open" : ""}`} />
            </div>
            <div
              className="faq-answer"
              style={{ display: activeFaq === 4 ? "block" : "none" }}
            >
              J'utilise les technologies les plus modernes et adaptées à chaque
              projet : React, Next.js, Node.js pour le web, React Native pour
              les applications mobiles, et diverses solutions d'IA comme OpenAI
              et TensorFlow pour l'automatisation.
            </div>
          </motion.div>

          <motion.div
            className="faq-item"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="faq-question" onClick={() => toggleFaq(5)}>
              <h3>
                Pouvez-vous travailler à distance ou uniquement sur site ?
              </h3>
              <FaPlus className={`faq-icon ${activeFaq === 5 ? "open" : ""}`} />
            </div>
            <div
              className="faq-answer"
              style={{ display: activeFaq === 5 ? "block" : "none" }}
            >
              Je travaille essentiellement à distance, mais je peux également me
              déplacer si nécessaire pour certaines missions.
            </div>
          </motion.div>

          <motion.div
            className="faq-item"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="faq-question" onClick={() => toggleFaq(6)}>
              <h3>
                Pouvez-vous améliorer l'ergonomie ou le design d'un site/app
                existant ?
              </h3>
              <FaPlus className={`faq-icon ${activeFaq === 6 ? "open" : ""}`} />
            </div>
            <div
              className="faq-answer"
              style={{ display: activeFaq === 6 ? "block" : "none" }}
            >
              Oui, j'interviens aussi bien sur des créations que sur des
              refontes pour améliorer l'ergonomie, l'accessibilité et le design.
            </div>
          </motion.div>

          <motion.div
            className="faq-item"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="faq-question" onClick={() => toggleFaq(7)}>
              <h3>
                Est-ce que vous assurez la maintenance des projets après
                livraison ?
              </h3>
              <FaPlus className={`faq-icon ${activeFaq === 7 ? "open" : ""}`} />
            </div>
            <div
              className="faq-answer"
              style={{ display: activeFaq === 7 ? "block" : "none" }}
            >
              Oui, j'offre différents forfaits de maintenance pour assurer les
              mises à jour, la sécurité et le support technique.
            </div>
          </motion.div>

          <motion.div
            className="faq-item"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="faq-question" onClick={() => toggleFaq(8)}>
              <h3>Quelles sortes d'automatisations proposez-vous ?</h3>
              <FaPlus className={`faq-icon ${activeFaq === 8 ? "open" : ""}`} />
            </div>
            <div
              className="faq-answer"
              style={{ display: activeFaq === 8 ? "block" : "none" }}
            >
              J'automatise des tâches répétitives (emails, gestion de données,
              reporting, veille, etc.) à l'aide de scripts, IA ou plateformes
              comme Zapier, Make ou des API personnalisées.
            </div>
          </motion.div>

          <motion.div
            className="faq-item"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="faq-question" onClick={() => toggleFaq(9)}>
              <h3>
                Proposez-vous une formation à la prise en main du site ou de
                l'application ?
              </h3>
              <FaPlus className={`faq-icon ${activeFaq === 9 ? "open" : ""}`} />
            </div>
            <div
              className="faq-answer"
              style={{ display: activeFaq === 9 ? "block" : "none" }}
            >
              Oui, je peux prévoir une session de formation (en visioconférence
              ou vidéo) pour faciliter la prise en main de votre solution.
            </div>
          </motion.div>

          <motion.div
            className="faq-item"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="faq-question" onClick={() => toggleFaq(10)}>
              <h3>Que se passe-t-il en cas de bug après la livraison ?</h3>
              <FaPlus
                className={`faq-icon ${activeFaq === 10 ? "open" : ""}`}
              />
            </div>
            <div
              className="faq-answer"
              style={{ display: activeFaq === 10 ? "block" : "none" }}
            >
              Je propose une garantie sur les corrections de bugs pendant une
              période définie. Des forfaits de maintenance sont aussi
              disponibles.
            </div>
          </motion.div>

          <motion.div
            className="faq-item"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="faq-question" onClick={() => toggleFaq(11)}>
              <h3>Puis-je vous confier un projet urgent ?</h3>
              <FaPlus
                className={`faq-icon ${activeFaq === 11 ? "open" : ""}`}
              />
            </div>
            <div
              className="faq-answer"
              style={{ display: activeFaq === 11 ? "block" : "none" }}
            >
              Selon mes disponibilités, je peux accepter des projets urgents.
              N'hésitez pas à me contacter pour en discuter.
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeCalendlyModal}
        className="calendly-modal"
        overlayClassName="calendly-modal-overlay"
      >
        <button
          className="modal-close-button"
          onClick={closeCalendlyModal}
        >
          <FaTimes />
        </button>
        <iframe
          src="https://calendly.com/samuelceleste/appel"
          width="100%"
          height="100%"
          frameBorder="0"
        ></iframe>
      </Modal>
    </>
  );
};

export default Services;
