import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState, useEffect } from "react";
import i18n from "@/translations/i18n";
import { useNavigate, useParams } from "react-router";
import { useTranslation } from "react-i18next";

export function ModeLang() {
    const [language, setLanguage] = useState(i18n.language);
    const navigate = useNavigate();
    const { lang } = useParams(); // Obtener el idioma actual desde la URL
    const { t } = useTranslation()

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang); // Cambiar idioma en i18n
        localStorage.setItem("appLang", lang); // Guardar selección en localStorage
        navigate(`/${lang}`, { replace: true }); // Redirigir a la nueva URL
    };

    // Sincronizar el estado de `language` con i18n
    useEffect(() => {
        const handleLanguageChange = (lng) => {
            setLanguage(lng);
        };

        i18n.on("languageChanged", handleLanguageChange);

        return () => {
            i18n.off("languageChanged", handleLanguageChange);
        };
    }, []);

    // Cargar idioma desde localStorage al montar el componente
    useEffect(() => {
        const savedLang = localStorage.getItem("appLang");
        if (savedLang && savedLang !== lang) {
            changeLanguage(savedLang);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className="text-orange-500 outline-0">
                    {language === "es" ? (
                        <img
                            src="https://flagsapi.com/ES/shiny/64.png"
                            alt="ES"
                            className="h-[1.2rem] w-[1.2rem]"
                        />
                    ) : (
                        <img
                            src="https://flagsapi.com/US/shiny/64.png"
                            alt="US"
                            className="h-[1.2rem] w-[1.2rem]"
                        />
                    )}
                    <span className="sr-only">Toggle language</span>
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => changeLanguage("es")}>
                    {t("modeLang.spanish")}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage("en")}>
                    {t("modeLang.english")}
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
