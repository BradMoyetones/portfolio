export default function AboutMe() {
    return (
        <article className="flex flex-col items-center justify-center gap-8 text-gray-700 dark:text-gray-300 md:flex-row">
            <div
                className="[&>p]:mb-4 [&>p>strong]:text-orange-500 [&>p>strong]:font-normal [&>p>strong]:font-mono text-pretty order-2 md:order-1"
            >
                <p>
                    Me llamo <strong>Brad Moyetones</strong> y comencé a aprender programación por mi cuenta cuando tenía 15 años. Hoy en día, estoy trabajando como <strong>desarrollador de aplicaciones web internas</strong> en el parque Jaime Duque, liderando equipos de desarrollo dentro de la empresa.
                </p>

                <p>
                    Mi pasión no solo se limita a la programación, también disfruto mucho de los videojuegos y el entrenamiento en el gimnasio. Mi objetivo es combinar estas pasiones para ser <strong>creador de contenido motivacional</strong>, inspirando a otros a desarrollar sus habilidades en programación, a entrenar y a disfrutar de los videojuegos, todo mientras se mantienen enfocados en sus metas personales y profesionales.
                </p>

                <p>
                    Mi visión es mejorar la empleabilidad y el acceso a contenido de calidad para la comunidad hispana, compartiendo lo que he aprendido en estos años, tanto en el mundo del desarrollo como en el deporte y la vida personal.
                </p>
            </div>

            <img width="200" height="200" src="/me.webp" alt="Brad Moyetones" className="order-1 object-cover w-64 h-full p-1 md:order-2 rotate-3 lg:p-2 lg:w-64 aspect-square rounded-2xl bg-black/20 dark:bg-yellow-500/5 ring-1 ring-black/70 dark:ring-white/20 " style={{objectPosition: "50% 50%"}} />
        </article>
    )
}
