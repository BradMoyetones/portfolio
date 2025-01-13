/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
import * as React from "react";
import { motion, useTransform, HTMLMotionProps } from "framer-motion";
import * as utils from "./utils";

// Aquí MotionBox es un div animado, por lo tanto hereda de HTMLMotionProps
const MotionBox = motion.div;

const CameraContext = React.createContext<utils.Camera | null>(null);

export const useCamera = () => {
    const camera = React.useContext(CameraContext);
    if (!camera) {
        throw new Error("useCamera can only be called inside of a Camera");
    }
    return camera;
};

interface CameraProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  // Otras props que puedas necesitar
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export const Camera = ({ children, ...otherProps }: CameraProps) => {
  const [camera] = React.useState(() => new utils.Camera());
  const containerRef = React.useRef<HTMLDivElement>(null);
  const contentRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if(containerRef.current && contentRef.current){

        camera.containerEl = containerRef.current;
        camera.contentEl = contentRef.current;
    }
  }, []);

  const translate = useTransform(
    [camera.motionValues.posX, camera.motionValues.posY],
    ([x, y]) => `-${x}px -${y}px`
  );

  const transformOrigin = useTransform(
    [camera.motionValues.posX, camera.motionValues.posY],
    ([x, y]) => `calc(50% + ${x}px) calc(50% + ${y}px)`
  );

  return (
    <CameraContext.Provider value={camera}>
      {/* Ahora MotionBox es simplemente un div */}
      <MotionBox ref={containerRef} style={{ overflow: "hidden" }} {...otherProps}>
        <MotionBox
          style={{
            width: "100%",
            height: "100%",
            translate,
            transformOrigin,
            scale: camera.motionValues.zoom,
            rotate: camera.motionValues.rotation
          }}
          ref={contentRef}
        >
          {children}
        </MotionBox>
      </MotionBox>
    </CameraContext.Provider>
  );
};

export interface CameraTargetProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode; // Solo ReactNode en lugar de un callback
}
  

export const CameraTarget = React.forwardRef<
    utils.CameraTarget,
    CameraTargetProps
>(({ children, ...otherProps }, forwardedRef) => {
    const ref = React.useRef<HTMLDivElement>(null);
    const camera = useCamera();
    const [cameraTarget] = React.useState(() => new utils.CameraTarget(camera));

    React.useLayoutEffect(() => {
        // @ts-ignore
        cameraTarget.el = ref.current;
        if (typeof forwardedRef === "function") {
            forwardedRef(cameraTarget);
        } else if (forwardedRef) {
            forwardedRef.current = cameraTarget;
        }
    }, []);

    return (
        // @ts-ignore
        <div ref={ref} {...otherProps}>
          {/* @ts-ignore */}
            {typeof children === "function" ? children(cameraTarget) : children}
        </div>
    );
});
