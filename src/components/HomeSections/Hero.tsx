import Badge from "../Badge";
import Typewriter from 'typewriter-effect';
import { buttonVariants } from "../ui/button";
import { Linkedin, MailPlus } from "lucide-react";

export default function Hero() {
    return (
        <section id="hero" className="py-16 md:py-34">
            <div className="max-w-xl">
                <div className="flex items-center gap-4 mb-4">
                    <img className="size-16 rounded-full overflow-hidden" src="/IMG_4020-compress.webp" alt="Brad Foto" />
                    <Badge>
                        Disponible para trabajar
                    </Badge>
                </div>
                <article>
                    <h1 className="text-4xl sm:text-5xl font-bold">
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString('Hey, soy <span class="text-orange-500">Brad</span>')
                                    .pauseFor(800)
                                    .deleteAll()
                                    .typeString('Soy <span class="text-orange-500">Desarrollador Web</span>')
                                    .pauseFor(800)
                                    .start();
                            }}
                            options={{
                                loop: true
                            }}
                        />
                    </h1>
                    <p className="text-xl text-gray-800 dark:text-gray-300 mt-6 [&>strong]:text-orange-500">+2 años de experiencia. <strong>Ingeniero de sistemas y próximamente creador de contenido</strong> de Colombia. Especializado en el desarrollo de aplicaciones web únicas.</p>
                </article>
                <div className="mt-8 space-x-2">
                    <a href="mailto:brad.moyetones@gmail.com" className={buttonVariants({variant:"outline"})+" !rounded-full"}>
                        <MailPlus />
                        Contáctame
                    </a>
                    <a href="https://www.linkedin.com/in/brad-salom%C3%B3n-moyetones-navas-726b9a1a8/" target="_blank" className={buttonVariants({variant:"outline"})+" !rounded-full"}>
                        <Linkedin />
                        LinkedIn
                    </a>
                </div>
            </div>
        </section>
    )
}
