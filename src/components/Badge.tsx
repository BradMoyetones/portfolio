import React from "react"

interface Props extends React.HTMLProps<HTMLSpanElement>{
    children: React.ReactNode;
}
export default function Badge({children, ...props}:Props) {
    return (
        <span {...props} className="relative inline-flex overflow-hidden rounded-full p-[1px]">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#f97316_0%,#431407_50%,#ea580c_100%)]"></span> 
            <div className="inline-flex items-center justify-center w-full px-3 py-1 text-sm text-orange-800 bg-orange-50 rounded-full cursor-pointer dark:bg-gray-800 dark:text-white/80 backdrop-blur-3xl whitespace-nowrap"> 
                {children}
            </div> 
        </span>
    )
}
