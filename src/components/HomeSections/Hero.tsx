import Badge from "../Badge";
import Typewriter from 'typewriter-effect';
import { buttonVariants } from "../ui/button";
import { Linkedin, MailPlus } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export default function Hero() {
    const { t, i18n } = useTranslation();
    const [key, setKey] = useState(0);

    const currentLanguage = i18n.language; // El idioma actual
    useEffect(() => {
        setKey(prevKey => prevKey + 1); // Cambiar la clave para reiniciar el Typewriter
    }, [currentLanguage]);
    
    return (
        <section id="hero" className="py-16 md:py-34">
            <div className="max-w-xl">
                <div className="flex items-center gap-4 mb-4">
                    <img className="size-16 rounded-full overflow-hidden" src="/portrait.webp" alt="Brad Foto" />
                    <Badge>
                        {t("hero.badge")}
                    </Badge>
                </div>
                <article>
                    <h1 className="text-4xl sm:text-5xl font-bold">
                        <Typewriter
                            key={key}
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString(t("hero.title.0"))
                                    .pauseFor(1200)
                                    .deleteAll()
                                    .typeString(t("hero.title.1"))
                                    .pauseFor(1000)
                                    .start();
                            }}
                            options={{
                                loop: true
                            }}
                        />
                    </h1>
                    <p className="text-xl text-gray-800 dark:text-gray-300 mt-6 [&>strong]:text-orange-500" dangerouslySetInnerHTML={{ __html: t("hero.paragraph") }}>
                        
                    </p>
                </article>
                <div className="mt-8 space-x-2">
                    <a href="mailto:brad.moyetones@gmail.com" className={buttonVariants({variant:"outline"})+" !rounded-full"}>
                        <MailPlus />
                        {t("hero.links.0")}
                    </a>
                    <a href="https://www.linkedin.com/in/brad-salom%C3%B3n-moyetones-navas-726b9a1a8/" target="_blank" className={buttonVariants({variant:"outline"})+" !rounded-full"}>
                        <Linkedin />
                        {t("hero.links.1")}
                    </a>
                </div>
            </div>
        </section>
    )
}
