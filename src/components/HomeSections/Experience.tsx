import { BriefcaseBusiness } from "lucide-react";
import TimeLine from "../TimeLine";
import App from "../Banner";

export default function Experience() {
    return (
        <section id="experiencia" className="py-16 md:py-34">
            <h1 className="flex items-center gap-x-3 font-bold text-3xl"><BriefcaseBusiness />Experiencia laboral</h1>
            <TimeLine />
            <App />

        </section>
    )
}
