import { buttonVariants } from "./ui/button";

export default function Footer() {
    return (
        <footer className="py-10">
            <div className="flex items-center justify-between gap-4">
                <span className="text-muted-foreground text-sm">© 2025 Brad. Casi todos los derechos reservados</span>
                <ul className="flex items-center">
                    <li>
                        <a href="#sobre-mi" className={buttonVariants({variant: "link"})}>Sobre Mí</a>
                    </li>
                    <li>
                        <a href="mailto:brad.moyetones@gmail.com" className={buttonVariants({variant: "link"})}>Contacto</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}
