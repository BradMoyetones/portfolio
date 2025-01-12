import * as React from "react";
import InfiniteBanner from "./InfiniteBanner";
import { useClock } from "../hooks/hooks";
import { Camera, CameraTarget, useCamera, utils } from "./camera";

const bannerOneImages = [
    "/site-2.png",
    "/site-4.jpeg",
    "/site-5.jpeg",
    "/site-7.jpeg",
    "/site-8.png",
];

const bannerTwoImages = [
    "/site-10.jpeg",
    "/site-11.jpeg",
    "/site-13.jpeg",
    "/site-14.jpeg",
    "/site-15.jpeg",
];

interface PhotoProps {
    src: string; // La fuente de la imagen
    alt: string; // El texto alternativo para la imagen
    onClick: (target: utils.CameraTarget | null) => void; // Función que recibe el ref de `CameraTarget`
    index: number; // El índice de la foto en una lista
    length: number; // El número total de fotos
}

const Photo = ({ src, alt, onClick, index, length }: PhotoProps) => {
    const ref = React.useRef<utils.CameraTarget>(null);

    return (
        <CameraTarget ref={ref}>
            <img
                tabIndex={0}
                src={src}
                alt={alt}
                onClick={() => {
                    onClick(ref.current);
                }}
                className={`cursor-pointer object-cover object-center border-[5px] border-orange-600 w-[20vw] h-[20vh] ${index === length && "mr-6"} ${index === 0 && "ml-6"}`}
            />
        </CameraTarget>
    );
};

const Banners = () => {
    const camera = useCamera();
    const [target, setTarget] = React.useState<utils.CameraTarget | null>(null);
    const clock = useClock({
        defaultValue: Date.now(),
        reverse: false,
    });
    const reverseClock = useClock({
        defaultValue: Date.now(),
        reverse: true,
    });

    React.useEffect(() => {
        if (target) {
            camera.follow(target);
            camera.setZoom(4);
            camera.setRotation(0);
            clock.stop();
            reverseClock.stop();
        } else {
            camera.panTo(new utils.Vector(0, 0));
            camera.setZoom(1);
            camera.setRotation(-10);
            clock.start();
            reverseClock.start();
        }
        return () => {
            if (target) camera.unfollow(target);
        };
    }, [camera, target, clock, reverseClock]);

    return (
        <div className="space-x-6 space-y-6">
            <InfiniteBanner clock={clock.value}>
                <div className="flex gap-6">
                    {bannerOneImages.map((img, index) => (
                        <Photo
                            key={img}
                            src={img}
                            alt={img}
                            onClick={(t) => setTarget((prev) => (prev !== t ? t : null))}
                            index={index}
                            length={bannerOneImages.length}
                        />
                    ))}
                </div>
            </InfiniteBanner>
            <InfiniteBanner clock={reverseClock.value}>
                <div className="flex gap-6">
                    {bannerTwoImages.map((img, index) => (
                        <Photo
                            key={img}
                            src={img}
                            alt={img}
                            onClick={(t) => setTarget((prev) => (prev !== t ? t : null))}
                            index={index}
                            length={bannerOneImages.length}
                        />
                    ))}
                </div>
            </InfiniteBanner>
        </div>
    );
};

const App = () => {
    return (
        <Camera>
            <div className="scale-125 h-screen flex items-center">
                <Banners />
            </div>
        </Camera>
    );
};

export default App;
