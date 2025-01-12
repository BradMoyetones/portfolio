import React from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Props extends React.HTMLProps<HTMLAnchorElement>{
    children: React.ReactNode
}

export default function LinkInline({children, ...props}:Props) {
    return (
        <a {...props} role="link" className="inline-flex items-center text-lg font-medium text-orange-500 hover:text-orange-600">
            {children}
        </a>
    )
}
