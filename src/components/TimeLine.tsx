import { useTranslation } from "react-i18next";
import TimeLineItem from "./TimeLineItem"

export default function TimeLine() {
    const { t } = useTranslation();
    const experiences = t("experience.data", { returnObjects: true });  // Load array experiences
    const experienceList = Array.isArray(experiences) ? experiences : [];
    return (
        <ol className="relative mt-16">
            {
                experienceList.map((experience, index) => (
                    <li className="" key={index+"-timeline"}>
                        <TimeLineItem {...experience} />
                    </li>
                ))
            }
        </ol>
    )
}
