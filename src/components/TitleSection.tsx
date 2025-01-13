import React from 'react'

export default function TitleSection({children, ...props}: React.HTMLProps<HTMLDivElement>) {
    return (
        <h1 {...props} className="flex items-center gap-x-3 font-bold text-3xl">
            {children}
        </h1>
    )
}
