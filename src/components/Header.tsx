import { useEffect, useState } from "react";
import LinkHeader from "./LinkHeader";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState("");

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
            className="flex items-center justify-center h-14 sticky top-0 z-50"
        >
            <nav 
                className={`flex gap-2 rounded-full p-1 ${isScrolled ? "bg-white dark:bg-black bg-opacity-20 backdrop-filter backdrop-blur-lg dark:bg-opacity-20 dark:backdrop-filter dark:backdrop-blur-lg shadow-md" : ""}`}
            >
                <LinkHeader href="#experiencia" active={activeLink === "experiencia" || activeLink === "hero" || !isScrolled}>
                    Experiencia
                </LinkHeader>
                <LinkHeader href="#proyectos" active={activeLink === "proyectos"}>
                    Proyectos
                </LinkHeader>
                <LinkHeader href="#sobre-mi" active={activeLink === "sobre-mí"}>
                    Sobre mí
                </LinkHeader>
                <LinkHeader href="#contacto" active={activeLink === "contacto"}>
                    Contacto
                </LinkHeader>
                <div className="hidden sm:flex">
                    <ModeToggle />
                </div>
            </nav>
            <div className="flex sm:hidden fixed bottom-4 right-4">
                <ModeToggle />
            </div>
        </header>
    )
}
