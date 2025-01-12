export default function Particles() {
    return (
        <div className='fixed inset-0 pointer-events-none z-[9999]'>
            <div
                style={{
                width: "100%",
                height: "100%",
                backgroundSize: "109px",
                backgroundRepeat: "repeat",
                backgroundImage: "url('/particles.png')",
                opacity: 0.06,
                borderRadius: "0",
                }}
            ></div>
        </div>
    )
}
