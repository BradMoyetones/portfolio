import Header from "@/components/Header";
import { Suspense, useEffect } from "react";
import { Outlet, useNavigate, useParams } from "react-router";
import i18n from "@/translations/i18n";
import LoadingHome from "@/components/LoadingHome";

export default function HomeLayout() {
    const navigate = useNavigate();
    const { lang } = useParams();

    // Detectar idioma del navegador y redirigir si es necesario
    useEffect(() => {
        const userLang = navigator.language.split("-")[0]; // Ejemplo: "en-US" → "en"
        if (!["es", "en"].includes(lang || "es")) {
            navigate(`/${userLang}`, { replace: true });
        }
    }, [lang, navigate]);

    // Cambiar idioma según la ruta
    useEffect(() => {
        i18n.changeLanguage(lang);
    }, [lang]);

    // Monitorear cambios en localStorage para redirigir
    useEffect(() => {
        const handleStorageChange = (event) => {
            if (event.key === "appLang" && event.newValue && event.newValue !== lang) {
                navigate(`/${event.newValue}`, { replace: true });
            }
        };

        window.addEventListener("storage", handleStorageChange);
        return () => window.removeEventListener("storage", handleStorageChange);
    }, [lang, navigate]);

    return (
        <>
            <div className="absolute top-0 z-[-2] h-screen w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] hidden dark:flex"></div>
            <div className="md:max-w-4xl lg:max-w-4xl mx-auto w-full">
                <Header />
                <Suspense fallback={<LoadingHome />}>
                    <Outlet />
                </Suspense>
            </div>
        </>
    );
}
