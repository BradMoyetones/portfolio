import { useEffect, useState } from "react";
import LinkHeader from "./LinkHeader";
import { ModeToggle } from "./mode-toggle";
import { ModeLang } from "./mode-lang";
import { useTranslation } from "react-i18next";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState("");
    const { t } = useTranslation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);

            const sections = ["hero", "experiencia", "proyectos", "sobre-mi", "contacto"];
            const menuHeight = document.querySelector("header")?.offsetHeight || 0;
            const scrollPosition = window.scrollY + menuHeight;

            let currentActive = "";
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const elementTop = element.offsetTop;
                    const elementBottom = elementTop + element.offsetHeight;
                    if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
                        currentActive = section;
                        break;
                    }
                }
            }
            setActiveLink(currentActive);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header 
            className="flex items-center justify-center h-14 sticky top-0 z-50 overflow-hidden"
        >
            <nav 
                className={`flex gap-2 rounded-full p-1 ${isScrolled ? "bg-white dark:bg-black bg-opacity-20 backdrop-filter backdrop-blur-lg dark:bg-opacity-20 dark:backdrop-filter dark:backdrop-blur-lg shadow-md" : ""}`}
            >
                <LinkHeader href="#experiencia" active={activeLink === "experiencia" || activeLink === "hero" || !isScrolled}>
                    {t("header.experience")}
                </LinkHeader>
                <LinkHeader href="#proyectos" active={activeLink === "proyectos"}>
                    {t("header.projects")}
                </LinkHeader>
                <LinkHeader href="#sobre-mi" active={activeLink === "sobre-mi"}>
                    {t("header.aboutMe")}
                </LinkHeader>
                <LinkHeader href="mailto:brad.moyetones@gmail.com" active={activeLink === "contacto"}>
                    {t("header.contact")}
                </LinkHeader>
                <div className="hidden sm:flex">
                    <ModeLang />
                </div>
                <div className="hidden sm:flex">
                    <ModeToggle />
                </div>
            </nav>
            <div className="flex sm:hidden fixed bottom-16 right-4 scale-150 bg-black bg-opacity-15 backdrop-filter backdrop-blur-lg dark:bg-white dark:bg-opacity-15 dark:backdrop-filter dark:backdrop-blur-lg p-1 rounded-lg">
                <ModeLang />
            </div>
            <div className="flex sm:hidden fixed bottom-4 right-4 scale-150 bg-black bg-opacity-15 backdrop-filter backdrop-blur-lg dark:bg-white dark:bg-opacity-15 dark:backdrop-filter dark:backdrop-blur-lg p-1 rounded-lg">
                <ModeToggle />
            </div>
        </header>
    )
}
