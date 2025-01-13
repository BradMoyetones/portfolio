import { useTranslation } from "react-i18next";

export default function AboutMe() {
    const { t } = useTranslation();
    
    return (
        <article className="flex flex-col items-center justify-center gap-8 text-gray-700 dark:text-gray-300 md:flex-row">
            <div
                className="[&>p]:mb-4 [&>p>strong]:text-orange-500 [&>p>strong]:font-normal [&>p>strong]:font-mono text-pretty order-2 md:order-1"
                dangerouslySetInnerHTML={{ __html: t("aboutMe.paragraph") }}
            >
                
            </div>

            <img width="200" height="200" src="/me.webp" alt="Brad Moyetones" className="order-1 object-cover w-64 h-full p-1 md:order-2 rotate-3 lg:p-2 lg:w-64 aspect-square rounded-2xl bg-black/20 dark:bg-yellow-500/5 ring-1 ring-black/70 dark:ring-white/20 " style={{objectPosition: "50% 50%"}} />
        </article>
    )
}
