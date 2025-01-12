import TimeLineItem from "./TimeLineItem"

const EXPERIENCE = [
    {
        date: "Actualmente...",
        title: "Creador de Contenido",
        company: "Twitch",
        description:
            "Divulgo sobre programación y desarrollo web en diferentes plataformas. Galardonado como mejor creador de contenido de habla no-inglesa en 2022 y mejor comunidad en 2023 por GitHub.",
        link: "https://twitch.tv/midudev",
    },
    {
        date: "Septiembre 2022",
        title: "Principal Frontend Engineer",
        company: "Adevinta Spain",
        description:
            "Responsable de la plataforma, componentes y utilidades para la creación y desarrollo de aplicaciones web. Mejora de un 30% en la entrega de software. Implantación de medidas de integración continua y despliegue con A/B testing en más de 15 equipos.",
    },
]
export default function TimeLine() {
    return (
        <ol className="relative mt-16">
            {
                EXPERIENCE.map((experience, index) => (
                    <li className="" key={index+"-timeline"}>
                        <TimeLineItem {...experience} />
                    </li>
                ))
            }
        </ol>
    )
}
