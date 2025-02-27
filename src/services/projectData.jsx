// Import des vidéos
import video1 from "../images/videos/video1.mp4";
import video2 from "../images/videos/video2.mp4";
import video3 from "../images/videos/video3.mp4";
import video4 from "../images/videos/video4.mp4";
import video5 from "../images/videos/video5.mp4";
import video6 from "../images/videos/video6.mp4";

// ------ responsive--------
import mockupBelamiResponsiveInfos from "../images/responsive/belami.png";
import mockupBelamiResponsive from "../images/responsive/belami1.png";
import mockupBelamiResponsive2 from "../images/responsive/belami2.png";
import mockupBelamiResponsive3 from "../images/responsive/belami3.png";
import mockupBelamiResponsive4 from "../images/responsive/belami4.png";
import mockupBelamiResponsive5 from "../images/responsive/belami5.png";
import mockupKarineResponsive from "../images/responsive/karine1.png";
import mockupKarineResponsive2 from "../images/responsive/karine3.png";
import mockupKarineResponsive3 from "../images/responsive/karine4.png";
import mockupKarineResponsive4 from "../images/responsive/karine5.png";
import mockupMarvelResponsive from "../images/responsive/marvel1.png";
import mockupMarvelResponsive2 from "../images/responsive/marvel2.png";
import mockupMarvelResponsive3 from "../images/responsive/marvel3.png";
import mockupMarvelResponsive4 from "../images/responsive/marvel4.png";
import mockupMarvelResponsive5 from "../images/responsive/marvel5.png";
import mockupLovelyResponsive from "../images/responsive/lovely1.png";
import mockupLovelyResponsive2 from "../images/responsive/lovely2.png";
import mockupLovelyResponsive3 from "../images/responsive/lovely3.png";
import mockupLovelyResponsive4 from "../images/responsive/lovely4.png";
import mockupYeniResponsive from "../images/responsive/yeni1.png";
import mockupYeniResponsive2 from "../images/responsive/yeni2.png";
import mockupYeniResponsive3 from "../images/responsive/yeni3.png";
import mockupYeniResponsive4 from "../images/responsive/yeni4.png";
import ghostResponsive from "../images/responsive/ghost1.png";
import ghostResponsive2 from "../images/responsive/ghost2.png";
import ghostResponsive3 from "../images/responsive/ghost3.png";

// ------ icons--------
import karine from "../images/icon/k.png";
import belami from "../images/icon/belami.png";
import marvel from "../images/icon/marvel.png";
import lovely from "../images/icon/lovelyplace.png";
import yeni from "../images/icon/yeni.png";
import ghost from "../images/icon/ghost.png";

// ------ technos--------
import openai from "../images/technos/openai.png";
import figma from "../images/technos/figma.png";
import react from "../images/technos/react.png";
import nodeJs from "../images/technos/node.png";
import express from "../images/technos/express.png";
import typescript from "../images/technos/typescript.png";
import typescript2 from "../images/technos/typescript2.png";
import motion2 from "../images/technos/motion2.png";
import react2 from "../images/technos/react2.png";
import mongo from "../images/technos/mongodb.png";
import expo from "../images/technos/expo.png";
import google from "../images/technos/google.png";
import motion from "../images/technos/motion.png";
import next from "../images/technos/next.png";
import tailwind from "../images/technos/tailwind.png";
import eslint from "../images/technos/eslint.png";

// ------ presentation--------
import belamiPresentation from "../images/presentation/belami.png";
import karinePresentation from "../images/presentation/karine.png";
import marvelPresentation from "../images/presentation/marvel.png";
import lovelyPresentation from "../images/presentation/lovely.png";
import YeniPresentation from "../images/presentation/yeni.png";
import ghostPresentation from "../images/presentation/ghost.png";

// ------ mockups--------
import mockup from "../images/page1/mockup.png";
import yeniMockup from "../images/mockup_yeni.png";
import belamiMockup from "../images/mockup/mockup_belami.png";
import marvelMockup from "../images/mockup/mockup_marvel.png";
import karineMockup from "../images/mockup/mockup_karine.png";
import ghostMockup from "../images/mockup/mockup_ghost.png";

const projectData = [
  {
    pageNumber: "01",
    totalPages: "06",
    titlePresentation:
      "Ghost - créer, partager et relever des défis aléatoires entre amis.",
    title: "Ghost",
    projectId: "ghost",
    date: "février 2025 - en cours ",
    techno: [
      "Next.js",
      "framer motion",
      "Eslint",
      "Tailwind",
      "TypeScript",
      "responsive design",
    ],
    roles: ["Ux/Ui Design", "Dev front & back"],
    bgColor: "#1a1b1d",
    txtColor: "#9333E9",
    txtInfos: "grey",
    border: "#9333E9",
    bgContainer: "1a1b1d",
    videoSlider: video6,
    pageSlider: {
      icon: ghost,
      titleSlider: "Ghost",
      subTitle: "/ Site web",
      texte:
        "Ghost est une plateforme amusante et interactive que j'ai créée pour permettre aux utilisateurs de proposer et de relever des défis amusants avec leurs amis. Invitez vos amis, créez ensemble une liste de défis, et laissez ensuite le hasard décider pour vous ! Grâce à son système de sélection aléatoire, chaque défi devient une surprise excitante à relever, renforçant ainsi les liens au sein des groupes d'amis.",
      imageSlider: ghostPresentation,
      backgroundTextSlider: "#ffffff",
      textColor: "black",
    },
    technologies: [
      {
        id: 1,
        name: "Next.js",
        logo: next,
        url: "#",
      },
      {
        id: 2,
        name: "Tailwind",
        logo: tailwind,
        url: "#",
      },
      {
        id: 4,
        name: "framer",
        logo: motion,
        url: "#",
      },
      {
        id: 5,
        name: "eslint",
        logo: eslint,
        url: "#",
      },
      {
        id: 3,
        name: "typescript",
        logo: typescript,
        url: "#",
      },
    ],
    pageSlider2: {
      videoSlider: video6,
      backgroundSlider: "black",
      textColor: "white",
      featuresOverview: [
        {
          id: 1,
          title: "Captivating Visual Design",
          description:
            "A vibrant yellow background with strategically placed images and clear layouts creates an engaging and visually appealing homepage.",
        },
        {
          id: 2,
          title: "Interactive Experience",
          description:
            "Dynamic animations like card flips and responsive actions ensure an enjoyable, gamified experience for users.",
        },
        {
          id: 3,
          title: "Random Challenge Assignment",
          description:
            "Tasks are randomly and fairly distributed using an automated system, with clear visual states to track progress.",
        },
        {
          id: 4,
          title: "Responsive Design",
          description:
            "The interface adapts seamlessly to all screen sizes, using a dynamic grid layout for optimal functionality and an accessible user experience.",
        },
      ],
    },
    pageSlider3: ghostMockup,
    sliderImagesResponsive: [ghostResponsive2],
    cssStyle: [
      "featured-container-tab0",
      "featured-mokup-tab1",
      "featured-presentation-tab2",
      "button-display",
    ],
    buttonStyle: {
      buttonLink: "button-link-lovely",
      linkSpan: "link-lovely",
      typoGitHub: "fa-arrow-up-right-from-square-lovely",
    },
    link: [
      {
        url: "https://dareyouapp.netlify.app/",
        title: "En savoir plus",
      },
      {
        url: "https://github.com/dante-alig/lovelyplace_tsx.git",
        title: "Code Github",
      },
    ],
  },
  {
    pageNumber: "02",
    totalPages: "06",
    titlePresentation:
      "Lovely place - Les lieux parfaits à Paris pour des rendez-vous mémorables.",
    title: "Lovely place",
    projectId: "lovely",
    date: " Décembre 2024 - en cours ",
    techno: [
      "Node JS",
      "React",
      "Google Map API",
      "MongoDB",
      "Stripe",
      "TypeScript",
    ],
    roles: ["Ui/Ux Design", "Dev front & back"],
    bgColor: "#f5e6c7",
    txtColor: "black",
    txtInfos: "grey",
    border: "black",
    bgContainer: "black",
    videoSlider: video4,
    pageSlider: {
      icon: lovely,
      titleSlider: "Lovely place",
      subTitle: "/ Site web",
      texte:
        "Lovely Place est un site conçu pour transformer chaque rendez-vous en une expérience unique et personnalisée. Il aide les utilisateurs à trouver le lieu et l'activité parfaits pour un rendez-vous, en fonction de divers critères tels que les préférences personnelles, l'ambiance souhaitée et le budget. Le site se démarque par son approche sur mesure, permettant aux utilisateurs de planifier des moments mémorables parfaitement adaptés à la personne qu'ils souhaitent inviter.",
      imageSlider: lovelyPresentation,
      backgroundTextSlider: "#ffffff",
      textColor: "black",
    },
    technologies: [
      {
        id: 1,
        name: "React",
        logo: react,
        url: "#",
      },
      {
        id: 2,
        name: "Express",
        logo: express,
        url: "#",
      },
      {
        id: 3,
        name: "Node Js",
        logo: nodeJs,
        url: "#",
      },
      {
        id: 4,
        name: "MongoDB",
        logo: mongo,
        url: "#",
      },
      {
        id: 5,
        name: "Google",
        logo: google,
        url: "#",
      },
    ],
    pageSlider2: {
      videoSlider: video4,
      backgroundSlider: "#000000",
      textColor: "white",
      featuresOverview: [
        {
          id: 1,
          title: "Advanced Geolocation and Map Integration",
          description:
            "Leverage the Google Maps API to provide precise geolocation features and an interactive map experience. Display real-time recommendations, opening hours, dynamic markers for locations, and offer detailed routes for seamless navigation.",
        },
        {
          id: 2,
          title: "Intelligent and Customizable Filtering",
          description:
            "Develop a robust and intelligent filtering system, allowing users to refine their search based on criteria such as activity type, ambiance, budget, or personalized preferences.",
        },
        {
          id: 3,
          title: "Member-Exclusive Content Access",
          description:
            "Implement a secure authentication and premium membership system, granting exclusive access to curated content and advanced features tailored specifically for subscribed users.",
        },
        {
          id: 5,
          title: "Secure Payment System with Stripe",
          description:
            "Integrate a streamlined and secure payment workflow using Stripe, ensuring smooth transactions while complying with the latest data privacy and security standards.",
        },
      ],
    },
    pageSlider3: belamiMockup,
    sliderImagesResponsive: [mockupLovelyResponsive],
    cssStyle: [
      "featured-container-tab0",
      "featured-mokup-tab1",
      "featured-presentation-tab2",
      "button-display",
    ],
    buttonStyle: {
      buttonLink: "button-link-lovely",
      linkSpan: "link-lovely",
      typoGitHub: "fa-arrow-up-right-from-square-lovely",
    },
    link: [
      {
        url: "https://dareyouapp.netlify.app/",
        title: "En savoir plus",
      },
      {
        url: "https://github.com/dante-alig/lovelyplace_tsx.git",
        title: "Code Github",
      },
    ],
  },
  {
    pageNumber: "03",
    totalPages: "06",
    titlePresentation: "Marvel - Catalogue des personnages.",
    title: "Marvel",
    projectId: "marvel",
    date: "Aout 2024",
    techno: ["React", "Backend", "Express", "MongoDB"],
    roles: ["Ux/Ui Design", "Dev front & back"],
    bgColor: "#1A1B1D",
    txtColor: "#ea3323",
    txtInfos: "grey",
    border: "#ea3323",
    bgContainer: "black",
    videoSlider: video3,
    pageSlider: {
      icon: marvel,
      titleSlider: "Marvel",
      subTitle: "/ app mobile",
      texte:
        "Marvel est un projet sur lequel j'ai travaillé lors de ma formation à Le Réacteur. Nous avons utilisé une API Marvel personnalisée, développée par Le Réacteur, pour simuler une intégration d'API réelle. Le site web comprenait un système sécurisé d'enregistrement et de connexion, permettant aux utilisateurs de gérer leurs éléments favoris. Certaines informations ou images pouvaient manquer en raison de la base de données limitée de l'API. Ce projet, réalisé en 4 jours, m'a offert une excellente occasion de m'entraîner à coder dans des contraintes de temps.",
      imageSlider: marvelPresentation,
      backgroundTextSlider: "#f71804",
      textColor: "black",
    },
    technologies: [
      {
        id: 1,
        name: "React",
        logo: react,
        url: "#",
      },
      {
        id: 2,
        name: "Express",
        logo: express,
        url: "#",
      },
      {
        id: 3,
        name: "Node",
        logo: nodeJs,
        url: "#",
      },
      {
        id: 4,
        name: "MongoDb",
        logo: mongo,
        url: "#",
      },
      {
        id: 5,
        name: "Framer",
        logo: motion,
        url: "#",
      },
    ],
    pageSlider2: {
      videoSlider: video3,
      backgroundSlider: "#000000",
      textColor: "white",
      featuresOverview: [
        {
          id: 1,
          title: "Marvel API Integration",
          description:
            "Building a web application using the Marvel API to efficiently fetch and display superhero data, demonstrating the ability to work with real-world APIs.",
        },
        {
          id: 2,
          title: "User Authentication System",
          description:
            "Implementing a secure registration and login system, allowing users to create accounts, log in, and manage their favorite superheroes securely.",
        },
        {
          id: 3,
          title: "Favorite Items Management",
          description:
            "Adding functionality for users to save and organize their favorite Marvel characters while ensuring a seamless user experience.",
        },
        {
          id: 4,
          title: "Modern Visual Design",
          description:
            "Designing a sleek, dark-themed interface with bold colors and a clear layout, enhancing the user experience by making the information visually appealing and easy to navigate.",
        },
        {
          id: 5,
          title: "Time-Based Development Challenge",
          description:
            "Developing the project under a 7-day deadline, focusing on delivering a functional outcome while enhancing technical skills and time management.",
        },
      ],
    },
    pageSlider3: marvelMockup,
    sliderImagesResponsive: [mockupMarvelResponsive],
    cssStyle: [
      "featured-container-tab0",
      "featured-mokup-tab1",
      "featured-presentation-tab2",
      "button-display",
    ],
    buttonStyle: {
      buttonLink: "button-link-marvel",
      linkSpan: "link-marvel",
      typoGitHub: "fa-arrow-up-right-from-square-marvel",
    },
    link: [
      {
        url: "https://dareyouapp.netlify.app/",
        title: "En savoir plus",
      },
      {
        url: "https://github.com/dante-alig/lovelyplace_tsx.git",
        title: "Code Github",
      },
    ],
  },
  {
    pageNumber: "04",
    totalPages: "06",
    titlePresentation:
      "Belami - Obtenez des phrases d'accroche personnalisées.",
    title: "Belami",
    projectId: "belami",
    date: "Aout 2024",
    techno: [
      "React Native",
      "OpenAI GPT-4",
      "User-Centered Design",
      "MongoDB",
      "Expo",
    ],
    roles: ["Ui Design", "Dev front & back"],
    bgColor: "black",
    txtColor: "#ffffff",
    txtInfos: "grey",
    border: "#ffffff",
    bgContainer: "red",
    videoSlider: video1,
    pageSlider: {
      icon: belami,
      titleSlider: "Belami",
      subTitle: "/ app mobile",
      texte:
        "Belami est une application mobile conviviale conçue pour aider les utilisateurs à créer des phrases d'accroche personnalisées basées sur les profils des réseaux sociaux. Grâce à des capacités avancées de traitement du langage, elle analyse les profils pour générer des amorces de conversation sur mesure et authentiques. L'application propose également une interface épurée avec diverses options de ton et la possibilité de sauvegarder les phrases préférées. Son approche complète en fait un outil précieux pour les utilisateurs souhaitant établir des connexions sincères.",
      imageSlider: belamiPresentation,
      backgroundTextSlider: "#f2e6ca",
      textColor: "black",
    },
    technologies: [
      {
        id: 1,
        name: "OpenAI",
        logo: openai,
        url: "#",
      },
      {
        id: 2,
        name: "Expo",
        logo: expo,
        url: "#",
      },
      {
        id: 3,
        name: "Figma",
        logo: figma,
        url: "#",
      },
      {
        id: 4,
        name: "Express",
        logo: express,
        url: "#",
      },
      {
        id: 5,
        name: "Node",
        logo: nodeJs,
        url: "#",
      },
      {
        id: 6,
        name: "React",
        logo: react,
        url: "#",
      },
    ],
    pageSlider2: {
      videoSlider: video1,
      backgroundSlider: "#f2e6ca",
      textColor: "white",
      featuresOverview: [
        {
          id: 1,
          title: "AI-Powered Profile Analysis",
          description:
            "Implementing advanced NLP (Natural Language Processing) to detect relevant information such as interests, tone, or personality traits while ensuring high accuracy and respecting user privacy.",
        },
        {
          id: 2,
          title: "Personalized Content Generation",
          description:
            "Developing an AI-based algorithm (GPT-4O) to create unique and relevant pickup lines tailored to each user, avoiding generic or inappropriate responses to foster meaningful engagement.",
        },
        {
          id: 3,
          title: "Flexible Tone Options",
          description:
            "Providing a variety of tones (humorous, serious, romantic, etc.) to suit user preferences, while ensuring authenticity and consistency with the analyzed profile data.",
        },
        {
          id: 4,
          title: "Saved Data Management",
          description:
            "Implementing a feature that allows users to save and organize generated pickup lines, with an intuitive interface that simplifies management and enhances user experience.",
        },
        {
          id: 5,
          title: "Intuitive and User-Friendly Design",
          description:
            "Creating a clear and simple interface that enables users to effortlessly copy and paste lines into their conversations, while ensuring the application remains accessible and enjoyable for beginners.",
        },
      ],
    },
    pageSlider3: mockup,
    sliderImagesResponsive: [mockupBelamiResponsive],
    cssStyle: [
      "featured-container",
      "featured-mokup",
      "featured-presentation",
      "button-display-off",
    ],
    buttonStyle: {
      buttonLink: "button-link-marvel",
      linkSpan: "link-marvel",
      typoGitHub: "fa-arrow-up-right-from-square-marvel",
    },
    link: [
      {
        url: "https://dareyouapp.netlify.app/",
        title: "En savoir plus",
      },
      {
        url: "https://github.com/dante-alig/lovelyplace_tsx.git",
        title: "Code Github",
      },
    ],
  },
  {
    pageNumber: "05",
    totalPages: "06",
    titlePresentation: "Karine Raspail - Site vitrine pour une thérapeute",
    title: "Karine Raspail",
    projectId: "karine",
    date: "Janvier 2025",
    techno: [
      "React",
      "Framer Motion",
      "Express",
      "Node JS",
      "API REST",
      "Calendly",
    ],
    roles: ["Ui/Ux Design", "Dev front & back"],
    bgColor: "#e3eae9",
    txtColor: "black",
    txtInfos: "grey",
    border: "black",
    bgContainer: "#e3eae9",
    videoSlider: video2,
    pageSlider: {
      icon: karine,
      titleSlider: "Karine Raspail",
      subTitle: "/ website",
      texte:
        "Un projet de développement web créé pour un thérapeute. Ce projet m'a permis de renforcer mes compétences en programmation et de me familiariser avec TypeScript. Le design volontairement simple reflète l'objectif principal : explorer et maîtriser les bases techniques de ce langage.",
      imageSlider: karinePresentation,
      backgroundTextSlider: "black",
      textColor: "white",
    },
    technologies: [
      {
        id: 1,
        name: "React",
        logo: react2,
        url: "#",
      },
      {
        id: 2,
        name: "Framer",
        logo: motion2,
        url: "#",
      },
      {
        id: 3,
        name: "Node",
        logo: nodeJs,
        url: "#",
      },
      {
        id: 4,
        name: "Express",
        logo: express,
        url: "#",
      },
      {
        id: 5,
        name: "Calendly",
        logo: google,
        url: "#",
      },
    ],
    pageSlider2: {
      videoSlider: video2,
      backgroundSlider: "#000000",
      textColor: "white",
      featuresOverview: [
        {
          id: 1,
          title: "Elegant Gallery Presentation",
          description:
            "Creating a visually striking tiled layout to showcase the artist's works, with subtle hover effects and optimal image quality for an engaging browsing experience.",
        },
        {
          id: 2,
          title: "Smooth Animation Integration",
          description:
            "Implementing Framer Motion animations for page transitions, image galleries, and interactive elements to enhance user engagement while maintaining a sophisticated aesthetic.",
        },
        {
          id: 3,
          title: "Minimalist User Interface",
          description:
            "Designing a professional, minimalist interface tailored to specific client needs, ensuring smooth and seamless navigation through intuitive section structuring.",
        },
        {
          id: 4,
          title: "Appointment Scheduling with Calendly",
          description:
            "Implementing an appointment scheduling feature through Calendly, allowing users to easily book consultations with a seamless and integrated process.",
        },
      ],
    },
    pageSlider3: karineMockup,
    sliderImagesResponsive: [mockupKarineResponsive],
    cssStyle: [
      "featured-container-tab0",
      "featured-mokup-tab1",
      "featured-presentation-tab2",
      "button-display",
    ],
    buttonStyle: {
      buttonLink: "button-link",
      linkSpan: "link",
      typoGitHub: "fa-arrow-up-right-from-square",
    },
    link: [
      {
        url: "https://karineraspail.netlify.app/",
        title: "En savoir plus",
      },
      {
        url: "https://github.com/dante-alig/karineraspail.git",
        title: "Code Github",
      },
    ],
  },
  {
    pageNumber: "06",
    totalPages: "06",
    titlePresentation: "Yeni - Connects creators and businesses for seamless.",
    title: "Yeni",
    projectId: "yeni",
    date: "Decembre 2024 - in progress",
    techno: ["React Nativ", "Figma"],
    roles: ["Ux Ui Design", "Dev front & back"],
    bgColor: "black",
    txtColor: "#abcc48",
    txtInfos: "grey",
    border: "white",
    bgContainer: "#171616",
    videoSlider: video5,
    pageSlider: {
      icon: yeni,
      titleSlider: "Yeni",
      subTitle: "/ app mobile",
      texte:
        "YENI is a platform dedicated to creation, collaboration, and visibility exchange among content creators, artists, influencers, models, and businesses. Its mission is to simplify and streamline collaborations in the audiovisual, creative, and fashion industries by leveraging a model of mutual benefit. At the same time, it enables brands to support their growth in a gradual, creative, and authentic way. However, I cannot disclose the code or the complete project details at this time, as my client wishes to maintain confidentiality.",
      imageSlider: YeniPresentation,
      backgroundTextSlider: "#545454",
      textColor: "black",
    },
    technologies: [
      {
        id: 1,
        name: "OpenAI",
        logo: openai,
        url: "#",
      },
      {
        id: 2,
        name: "Expo",
        logo: expo,
        url: "#",
      },
      {
        id: 3,
        name: "Figma",
        logo: figma,
        url: "#",
      },
      {
        id: 4,
        name: "Express",
        logo: express,
        url: "#",
      },
      {
        id: 5,
        name: "Node",
        logo: nodeJs,
        url: "#",
      },
      {
        id: 6,
        name: "React",
        logo: react,
        url: "#",
      },
    ],
    pageSlider2: {
      videoSlider: video5,
      backgroundSlider: "#545454",
      textColor: "black",
      featuresOverview: [
        {
          id: 1,
          title: "Features Are Confidential",
          description:
            "This section will be available upon the public release of the application.",
        },
      ],
    },
    pageSlider3: yeniMockup,
    sliderImagesResponsive: [mockupYeniResponsive],
    cssStyle: [
      "featured-container",
      "featured-mokup",
      "featured-presentation",
      "button-display-off",
    ],
    buttonStyle: {
      buttonLink: "button-link",
      linkSpan: "link",
      typoGitHub: "fa-arrow-up-right-from-square",
    },
    link: [
      {
        url: "https://karineraspail.netlify.app/",
        title: "En savoir plus",
      },
      {
        url: "https://github.com/dante-alig/karineraspail.git",
        title: "Code Github",
      },
    ],
  },
];

export default projectData;
