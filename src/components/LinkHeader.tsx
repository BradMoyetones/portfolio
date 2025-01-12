import React from "react";

interface Props extends React.HTMLProps<HTMLAnchorElement> {
    href: string;
    active?: boolean;
    children: React.ReactNode;
}

export default function LinkHeader({href, active, children, ...props}: Props) {
    return (
        <a
            className={`${active ? "bg-white bg-opacity-30 text-orange-500" : ""} rounded-full px-2 transition-colors hover:bg-white hover:bg-opacity-30 hover:text-orange-500 flex items-center justify-center gap-2 truncate`}
            href={href}
            {...props}
        >
            {children}
        </a>
    )
}
