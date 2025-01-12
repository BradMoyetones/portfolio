import { useScroll, useSpring, motion } from "motion/react";

export default function TopBarProgress() {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })
    
    return (
        <motion.div style={{ scaleX }} className="fixed top-0 left-0 right-0 h-1 bg-orange-500 origin-left z-[99999]" />
    )
}
