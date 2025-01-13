import { ReactNode, HTMLProps } from 'react';

interface SectionContainerProps extends HTMLProps<HTMLElement> {
  children: ReactNode;
}

export default function SectionContainer({ children, ...props }: SectionContainerProps) {
    return (
        <section className="py-10 space-y-6" {...props}>
            {children}
        </section>
    );
}
