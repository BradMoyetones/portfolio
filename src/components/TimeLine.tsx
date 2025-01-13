import TimeLineItem from "./TimeLineItem"

const EXPERIENCE = [
    {
        date: "Actualmente...",
        title: "Desarrollador Web Full Stack",
        company: "Parque Jaime Duque",
        description:
            "Líder en programación y desarrollo web en múltiples plataformas. Comprometido con la innovación y la implementación de soluciones efectivas para diversas áreas de la empresa. Experto en la realización de copias de seguridad y en garantizar la protección de la información gestionada en las distintas plataformas.",
        link: "https://www.twitch.tv/bradfieldn",
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
