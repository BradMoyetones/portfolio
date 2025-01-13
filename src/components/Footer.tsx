import { useTranslation } from "react-i18next";
import { buttonVariants } from "./ui/button";

export default function Footer() {
    const { t } = useTranslation();
    
    return (
        <footer className="py-10">
            <div className="flex items-center justify-between gap-4">
                <span className="text-muted-foreground text-sm">{t("footer.copy")}</span>
                <ul className="flex items-center">
                    <li>
                        <a href="#sobre-mi" className={buttonVariants({variant: "link"})}>
                            {t("footer.aboutMe")}
                        </a>
                    </li>
                    <li>
                        <a href="mailto:brad.moyetones@gmail.com" className={buttonVariants({variant: "link"})}>
                            {t("footer.contact")}
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}
