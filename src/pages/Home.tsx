import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import AboutMe from "@/components/HomeSections/AboutMe";
import Experience from "@/components/HomeSections/Experience";
import Hero from "@/components/HomeSections/Hero";
import Projects from "@/components/HomeSections/Projects";
import SectionContainer from "@/components/SectionContainer";
import TitleSection from "@/components/TitleSection";
import { BriefcaseBusiness, CodeIcon, UserCheck } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Home() {
    const { t } = useTranslation();
    
    return (
        <div className="px-4">
            <Hero />
            <SectionContainer id="experiencia">
                <TitleSection>
                    <BriefcaseBusiness /> {t("experience.title")}
                </TitleSection>
                <Experience />
            </SectionContainer>
            <SectionContainer id="proyectos">
                <TitleSection>
                    <CodeIcon className="size-8" />
                    {t("projects.title")}
                </TitleSection>
                <Projects />
            </SectionContainer>
            <SectionContainer id="sobre-mi">
                <TitleSection>
                    <UserCheck className="size-8" />
                    {t("aboutMe.title")}
                </TitleSection>
                <AboutMe />
                <Banner />
            </SectionContainer>
            <Footer />
        </div>
    )
}
