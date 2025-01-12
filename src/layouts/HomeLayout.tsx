import Header from "@/components/Header";
import { Suspense } from "react";
import { Outlet } from "react-router";

export default function HomeLayout() {
    

    return (
        <>
            <div className="absolute top-0 z-[-2] h-screen w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] hidden dark:flex"></div>
            <div className="md:max-w-4xl lg:max-w-4xl mx-auto w-full">
                <Header />
                <Suspense fallback={"Loading..."}>
                    <Outlet />
                </Suspense>
            </div>
        </>
    )
}
