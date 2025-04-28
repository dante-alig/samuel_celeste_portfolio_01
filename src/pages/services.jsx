import React, { useState } from "react";
import "../styles/services.css";
import profil from "../images/profil.png";
import { motion } from "framer-motion";
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
} from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";

const Services = () => {
  const [activeTab, setActiveTab] = useState("solution web");

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
            Application mobile
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
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              <motion.li
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
              >
                Vous êtes un entrepreneur indépendant ou une PME
              </motion.li>
              <motion.li
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
              >
                Vous souhaitez un site web ou un tunnel de vente qui reflète
                parfaitement votre image de marque
              </motion.li>
              <motion.li
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
              >
                Vous voulez gagner rapidement de nouveaux clients
              </motion.li>
              <motion.li
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
              >
                Vous souhaitez éviter de perdre du temps (et donc de l'argent) à
                développer vous-même votre site web ou votre tunnel de vente.
              </motion.li>
              <motion.li
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
              >
                Vous voulez profiter des solutions les plus efficaces et les
                plus modernes du marché
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
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.div 
            className="methode-step"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
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
              href="https://calendly.com/samuelceleste/appel"
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
              visible: { opacity: 1, y: 0 }
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
              Je vous fait une proposition de devis personnalisé. Chaque détails
              est présent tout est transparent.
            </p>
          </motion.div>

          <motion.div 
            className="methode-step"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
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
              On s'appelle pour valider l'offre, déterminer le calendrier et les
              étapes du paiement puis la mission démare.
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
                staggerChildren: 0.1
              }
            }
          }}
        >
          <motion.div 
            className="why-choose-item"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 }
            }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="icon-container"
            >
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
              visible: { opacity: 1, scale: 1 }
            }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="icon-container"
            >
              <FaGift className="why-choose-icon" />
            </motion.div>
            <h3>Ressources et zoning offert</h3>
            <p>
              Démarrage facilité : recevez gratuitement un zoning clair et des
              ressources précieuses pour bien démarrer votre projet dès le
              départ.
            </p>
          </motion.div>

          <motion.div 
            className="why-choose-item"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 }
            }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="icon-container"
            >
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
              visible: { opacity: 1, scale: 1 }
            }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="icon-container"
            >
              <FaBriefcase className="why-choose-icon" />
            </motion.div>
            <h3>Expérience éprouvée</h3>
            <p>
              Expertise reconnue : bénéficiez de l'expérience d'un
              designer/développeur qui a accompagné de nombreux entrepreneurs et
              entreprises vers le succès digital.
            </p>
          </motion.div>

          <motion.div 
            className="why-choose-item"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 }
            }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="icon-container"
            >
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
              visible: { opacity: 1, scale: 1 }
            }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="icon-container"
            >
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
              visible: { opacity: 1, scale: 1 }
            }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="icon-container"
            >
              <FaUserClock className="why-choose-icon" />
            </motion.div>
            <h3>Contact direct h24 7/7</h3>
            <p>
              Disponibilité totale : joignez-moi à tout moment pour un suivi
              réactif et sans intermédiaires, même le week-end.
            </p>
          </motion.div>

          <motion.div 
            className="why-choose-item"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 }
            }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="icon-container"
            >
              <FaChartLine className="why-choose-icon" />
            </motion.div>
            <h3>Optimisation SEO & performance</h3>
            <p>
              Tous mes sites sont optimisés pour un chargement rapide et une
              bonne visibilité sur Google. L'objectif ? Booster votre présence
              en ligne !
            </p>
          </motion.div>

          <motion.div 
            className="why-choose-item"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 }
            }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="icon-container"
            >
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
              "I am a passionate graphic designer with more than 10 years of
              experience, now transitioning into full-stack development. My
              portfolio features personal projects I've fully designed and
              coded, combining my design expertise with new technical skills."
            </motion.p>
            <motion.button 
              className="contact-button"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
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
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.div 
            className="testimonial-card"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ 
              duration: 0.5,
              type: "spring",
              stiffness: 100
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
              Chaque site ou application que je développe est personnalisé selon vos besoins et pensé pour évoluer avec votre activité. Exit le prêt-à-porter, vive le cousu-main !
            </motion.p>
          </motion.div>

          <motion.div 
            className="testimonial-card"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
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
              Un vrai professionnel qui a su transformer ma vision en réalité. Le site est exactement comme je l'imaginais, moderne et efficace. Je recommande vivement !
            </motion.p>
          </motion.div>

          <motion.div 
            className="testimonial-card"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
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
              La qualité du travail et le respect des délais m'ont particulièrement impressionné. Un véritable atout pour notre transformation digitale.
            </motion.p>
          </motion.div>

          <motion.div 
            className="testimonial-card"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
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
              L'expertise technique combinée à une vraie compréhension des besoins business fait toute la différence. Notre site performe au-delà de nos attentes !
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Services;
