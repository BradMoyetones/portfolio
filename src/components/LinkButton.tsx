import React from 'react'
import { buttonVariants } from './ui/button'

interface Props extends React.HTMLProps<HTMLAnchorElement>{
    children: React.ReactNode
}

export default function LinkButton({children, ...props}: Props) {
    return (
        <a
            {...props}
            target="_blank"
            role="link"
            className={buttonVariants({variant: "outline"})}
        >
            {children}
        </a>
    )
}
