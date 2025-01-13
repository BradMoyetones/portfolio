import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            welcome: "Welcome to the app",
            modeToggle: {
                light: "Light",
                dark: "Dark",
                system: "System",
            },
            modeLang: {
                spanish: "Spanish",
                english: "English"
            },
            header: {
                experience: "Experience",
                projects: "Projects",
                aboutMe: "About me",
                contact: "Contact",
            },
            footer: {
                copy: "© 2025 Brad. Almost all rights reserved",
                aboutMe: "About me",
                contact: "Contact",
            },
            hero: {
                title: [
                    "Hey, I <span class='text-orange-500'>Brad</span>",
                    "<span class='text-orange-500'>Web Developer</span>"
                ],
                badge: "Available to work",
                paragraph: "+2 years of experience. <strong>Systems engineer and soon-to-be Colombian content creator</strong>. I specialize in developing unique web applications.",
                links: [
                    "Contact Me",
                    "LinkedIn",
                ]
            },
            experience: {
                title: "Work experience",
                learnMore: "Learn More",
                data: [
                    {
                        date: "Currently...",
                        title: "Full Stack Web Developer",
                        company: "Parque Jaime Duque",
                        description: "Leader in programming and web development across multiple platforms. Committed to innovation and implementing effective solutions for various areas of the company. Expert in backup management and ensuring data protection across platforms.",
                        link: "https://www.twitch.tv/bradfieldn",
                    },
                ]
            },
            projects: {
                title: "Projects",
                data: [
                    {
                        title: "Ecommerce OpenSource - A powerful platform for online stores",
                        description:
                            "A project designed for small and medium-sized businesses looking to start in e-commerce without incurring high initial costs.",
                        link: "https://braddev-ecommerce.vercel.app/",
                        github: "https://github.com/BradMoyetones/braddev-ecommerce",
                        image: "/projects/ecommerce.webp",
                        tags: ["NEXT", "TAILWIND", "STRAPI", "STRIPE", "CLOUDINARY"],
                    },
                    {
                        title: "RUMBO - My First Website as a Web Developer",
                        description:
                            "My first website created as an example when I started my journey as a web developer. A simple but meaningful project that marked the beginning of my learning and passion for development.",
                        link: "https://rumbo-brad.netlify.app/",
                        image: "/projects/first-page.webp",
                        tags: ["HTML5", "CSS"],
                    }
                ]
            },
            aboutMe: {
                title: "About Me",
                paragraph: `
                    <p>
                        My name is <strong>Brad Moyetones</strong>, and I started learning programming on my own when I was 15 years old. Nowadays, I work as an <strong>internal web application developer</strong> at Jaime Duque Park, leading development teams within the company.
                    </p>
            
                    <p>
                        My passion is not limited to programming; I also really enjoy video games and training at the gym. My goal is to combine these passions to become a <strong>motivational content creator</strong>, inspiring others to develop their programming skills, train, and enjoy video games, all while staying focused on their personal and professional goals.
                    </p>
            
                    <p>
                        My vision is to improve employability and access to quality content for the Hispanic community by sharing what I've learned over the years, both in the world of development and in sports and personal life.
                    </p>
                `
            },
            // More translations...
        },
    },
    es: {
        translation: {
            welcome: "Bienvenido a la aplicación",
            modeToggle: {
                light: "Claro",
                dark: "Oscuro",
                system: "Sistema",
            },
            modeLang: {
                spanish: "Español",
                english: "Inglés"
            },
            header: {
                experience: "Experiencia",
                projects: "Proyectos",
                aboutMe: "Sobre mí",
                contact: "Contacto",
            },
            footer: {
                copy: "© 2025 Brad. Casi todos los derechos reservados",
                aboutMe: "Sobre mí",
                contact: "Contáctame",
            },
            hero: {
                title: [
                    "Hey, soy <span class='text-orange-500'>Brad</span>",
                    "<span class='text-orange-500'>Desarrollador Web</span>"
                ],
                badge: "Disponible para trabajar",
                paragraph: "+2 años de experiencia. <strong>Ingeniero de sistemas y próximamente creador de contenido</strong> de Colombia. Especializado en el desarrollo de aplicaciones web únicas.",
                links: [
                    "Contáctame",
                    "LinkedIn",
                ]
            },
            experience: {
                title: "Experiencia laboral",
                learnMore: "Saber Más",
                data: [
                    {
                        date: "Actualmente...",
                        title: "Desarrollador Web Full Stack",
                        company: "Parque Jaime Duque",
                        description:
                            "Líder en programación y desarrollo web en múltiples plataformas. Comprometido con la innovación y la implementación de soluciones efectivas para diversas áreas de la empresa. Experto en la realización de copias de seguridad y en garantizar la protección de la información gestionada en las distintas plataformas.",
                        link: "https://www.twitch.tv/bradfieldn",
                    },
                ]
            },
            projects: {
                title: "Proyectos",
                data: [
                    {
                        title: "Ecommerce OpenSource - Una plataforma poderosa para tiendas en línea",
                        description:
                            "Un proyecto diseñado para pequeñas y medianas empresas que deseen iniciar en el comercio electrónico sin incurrir en altos costos iniciales.",
                        link: "https://braddev-ecommerce.vercel.app/",
                        github: "https://github.com/BradMoyetones/braddev-ecommerce",
                        image: "/projects/ecommerce.webp",
                        tags: ["NEXT", "TAILWIND", "STRAPI", "STRIPE", "CLOUDINARY"],
                    },
                    {
                        title: "RUMBO - Mi primer sitio web como desarrollador web",
                        description:
                            "Mi primer sitio web creado como ejemplo cuando inicié mi camino como desarrollador web. Un proyecto simple pero significativo, que marcó el inicio de mi aprendizaje y pasión por el desarrollo.",
                        link: "https://rumbo-brad.netlify.app/",
                        image: "/projects/first-page.webp",
                        tags: ["HTML5", "CSS"],
                    },
                ]
            },
            aboutMe: {
                title: "Sobre Mí",
                paragraph: `
                    <p>
                        Me llamo <strong>Brad Moyetones</strong> y comencé a aprender programación por mi cuenta cuando tenía 15 años. Hoy en día, estoy trabajando como <strong>desarrollador de aplicaciones web internas</strong> en el parque Jaime Duque, liderando equipos de desarrollo dentro de la empresa.
                    </p>

                    <p>
                        Mi pasión no solo se limita a la programación, también disfruto mucho de los videojuegos y el entrenamiento en el gimnasio. Mi objetivo es combinar estas pasiones para ser <strong>creador de contenido motivacional</strong>, inspirando a otros a desarrollar sus habilidades en programación, a entrenar y a disfrutar de los videojuegos, todo mientras se mantienen enfocados en sus metas personales y profesionales.
                    </p>

                    <p>
                        Mi visión es mejorar la empleabilidad y el acceso a contenido de calidad para la comunidad hispana, compartiendo lo que he aprendido en estos años, tanto en el mundo del desarrollo como en el deporte y la vida personal.
                    </p>
                `
            },
            // Más traducciones...
        },
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: "es", // Idioma por defecto
    fallbackLng: "es",
    interpolation: {
        escapeValue: false, // React ya hace el escape
    },
});

export default i18n;
