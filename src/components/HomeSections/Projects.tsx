import GitHub from '@/icons/GitHub'
import Link from "@/icons/Link"
import LinkButton from '../LinkButton'
import { useTranslation } from 'react-i18next';
import NextJS from '@/icons/NextJS';
import Tailwind from '@/icons/Tailwind';
import HTML5 from '@/icons/Html5';
import CSS from '@/icons/CSS';
import Strapi from '@/icons/Strapi';
import Stripe from '@/icons/Stripe';
import Cloudinary from '@/icons/Cloudinary';
import TypeScript from '@/icons/TypeScript';
import Electron from '@/icons/Electron';
import React from '@/icons/React';

// Use https://shots.so/ for generate your picture projects
const TAGS = {
    NEXT: {
        name: "Next.js",
        class: "bg-black text-white",
        icon: NextJS,
    },
    TAILWIND: {
        name: "Tailwind CSS",
        class: "bg-[#003159] text-white",
        icon: Tailwind,
    },
    HTML5: {
        name: "HTML5",
        class: "bg-[#4b5563] text-white",
        icon: HTML5
    },
    CSS: {
        name: "CSS",
        class: "bg-[#003159] text-white",
        icon: CSS
    },
    STRAPI: {
        name: "Strapi",
        class: "bg-[#6366f1] text-white",
        icon: Strapi
    },
    STRIPE: {
        name: "stripe",
        class: "bg-black text-white",
        icon: Stripe
    },
    CLOUDINARY: {
        name: "Cloudinary",
        class: "bg-zinc-200 dark:bg-white text-black",
        icon: Cloudinary
    },
    TYPESCRIPT: {
        name: "TypeScript",
        class: "bg-zinc-200 dark:bg-white text-black",
        icon: TypeScript
    },
    ELECTRON: {
        name: "Electron",
        class: "bg-cyan-300 text-black",
        icon: Electron
    },
    REACT: {
        name: "React",
        class: "bg-zinc-100 dark:bg-zinc-700 text-black dark:text-white",
        icon: React
    },
}

export default function Projects() {
    const { t } = useTranslation();
    const projects = t("projects.data", { returnObjects: true });  // Load array experiences
    const projectsList = Array.isArray(projects) ? projects : [];

    return (
        <div className="flex flex-col gap-y-16">
            {
                projectsList.map(({ image, title, description, tags, link, github }, index) => (
                    <article key={index+"-projects"} className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0">
                        <div className="w-full md:w-1/2">
                            <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
                                <img alt="Recién llegado vs 5 años en Nueva Zelanda" className="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105" loading="lazy" src={image} />
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 md:max-w-lg">
                            <h3 className="text-2xl font-bold text-orange-500">
                                {title}
                            </h3>
                            <div className="flex flex-wrap mt-2">
                                <ul className="flex flex-row flex-wrap mb-2 gap-2">
                                    {tags.map((tagKey, index) => {
                                        // Accedemos al objeto tag usando la clave (tagKey)
                                        const tag = TAGS[tagKey];
                                        return (
                                            <li key={index + "-tag"}>
                                                <span
                                                    className={`flex gap-x-2 rounded-full text-xs ${tag.class} py-1 px-2`}
                                                >
                                                    {/* Renderizamos el icono y el nombre del tag */}
                                                    <tag.icon className="w-4 h-4" />
                                                    {tag.name}
                                                </span>
                                            </li>
                                        );
                                    })}
                                </ul>

                                <div className="mt-2 text-gray-700 dark:text-gray-400">{description}</div>
                                <footer className="flex items-end justify-start mt-4 gap-x-4">
                                    {github && (
                                        <LinkButton href={github}>
                                            <GitHub className="size-6" />
                                            Code
                                        </LinkButton>
                                    )}
                                    {link && (
                                        <LinkButton href={link}>
                                            <Link className="size-4" />
                                            Preview
                                        </LinkButton>
                                    )}
                                </footer>
                            </div>
                        </div>
                    </article>
                ))
            }
        </div>
    )
}