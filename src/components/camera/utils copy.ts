import {
  MotionValue,
  motionValue,
  animate,
  AnimationOptions as FramerAnimationOptions,
} from "framer-motion";

const DEFAULT_PAN_TRANSITION: FramerAnimationOptions = {
  type: "spring",
  damping: 23,
  mass: 0.85,
  stiffness: 100,
  restDelta: 0.0,
};

const DEFAULT_ZOOM_TRANSITION: FramerAnimationOptions = {
  type: "spring",
  damping: 23,
  mass: 0.85,
  stiffness: 100,
  restDelta: 0.001,
};

const DEFAULT_ROTATE_TRANSITION: FramerAnimationOptions = {
  type: "spring",
  damping: 23,
  mass: 0.85,
  stiffness: 100,
  restDelta: 0.001,
};

export class Vector {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  add(other: Vector) {
    this.x += other.x;
    this.y += other.y;
    return this;
  }

  sub(other: Vector) {
    this.x -= other.x;
    this.y -= other.y;
    return this;
  }

  multiplyScalar(factor: number) {
    this.x *= factor;
    this.y *= factor;
    return this;
  }

  distanceTo(other: Vector) {
    return Math.sqrt((other.x - this.x) ** 2 + (other.y - this.y) ** 2);
  }

  clone() {
    return new Vector(this.x, this.y);
  }
}

enum PointType {
  Center = "center",
  TopLeft = "top-left",
  TopRight = "top-right",
  BottomLeft = "bottom-left",
  BottomRight = "bottom-right",
}

function getElementPoint(el: HTMLElement, pointType: PointType): Vector {
  const rect = el.getBoundingClientRect();
  switch (pointType) {
    case PointType.Center:
      return new Vector(rect.x + rect.width / 2, rect.y + rect.height / 2);
    case PointType.TopLeft:
      return new Vector(rect.x, rect.y);
    case PointType.TopRight:
      return new Vector(rect.x + rect.width, rect.y);
    case PointType.BottomLeft:
      return new Vector(rect.x, rect.y + rect.height);
    case PointType.BottomRight:
      return new Vector(rect.x + rect.width, rect.y + rect.height);
  }
}

export class Camera {
  containerEl?: HTMLElement;
  contentEl?: HTMLElement;
  motionValues: {
    zoom: MotionValue<number>;
    posX: MotionValue<number>;
    posY: MotionValue<number>;
    rotation: MotionValue<number>;
  };
  following: {
    interval: number;
    target: CameraTarget;
  } | null = null;

  constructor() {
    this.motionValues = {
      posX: motionValue(0),
      posY: motionValue(0),
      zoom: motionValue(1),
      rotation: motionValue(0),
    };
  }

  get position() {
    return new Vector(
      this.motionValues.posX.get(),
      this.motionValues.posY.get()
    );
  }

  get rotation() {
    return this.motionValues.rotation.get();
  }

  get zoom() {
    return this.motionValues.zoom.get();
  }

  panTo(
    position: Vector,
    transition: FramerAnimationOptions = DEFAULT_PAN_TRANSITION
  ) {
    animate(this.motionValues.posX.get(), position.x, {
      ...transition,
      onUpdate: (v) => this.motionValues.posX.set(v), // Actualizar MotionValue manualmente
    });
    animate(this.motionValues.posY.get(), position.y, {
      ...transition,
      onUpdate: (v) => this.motionValues.posY.set(v), // Actualizar MotionValue manualmente
    });
  }
  
  setZoom(
    zoom: number,
    transition: FramerAnimationOptions = DEFAULT_ZOOM_TRANSITION
  ) {
    animate(this.motionValues.zoom.get(), zoom, {
      ...transition,
      onUpdate: (v) => this.motionValues.zoom.set(v), // Actualizar MotionValue manualmente
    });
  }
  
  setRotation(
    rotation: number,
    transition: FramerAnimationOptions = DEFAULT_ROTATE_TRANSITION
  ) {
    animate(this.motionValues.rotation.get(), rotation, {
      ...transition,
      onUpdate: (v) => this.motionValues.rotation.set(v), // Actualizar MotionValue manualmente
    });
  }

  follow(
    target: CameraTarget,
    transition: FramerAnimationOptions = DEFAULT_PAN_TRANSITION
  ) {
    if (this.following) {
      clearInterval(this.following.interval);
      this.following = null;
    }
    const panToTarget = () => {
      this.panTo(target.center, transition);
    };
    panToTarget();
    this.following = {
      target,
      interval: window.setInterval(panToTarget, 100),
    };
  }

  unfollow(target: CameraTarget) {
    if (this.following?.target === target) {
      clearInterval(this.following.interval);
      this.following = null;
    }
  }
}

export class CameraTarget {
  el?: HTMLElement;
  camera: Camera;

  constructor(camera: Camera) {
    this.camera = camera;
  }

  getPoint(pointType: PointType) {
    if (!this.el || !this.camera.containerEl) {
      throw new Error("Element or container is not set");
    }
    const targetCenter = getElementPoint(this.el, pointType);
    const containerCenter = getElementPoint(
      this.camera.containerEl,
      PointType.Center
    );
    const targetOffset = targetCenter
      .clone()
      .sub(containerCenter)
      .multiplyScalar(1 / this.camera.zoom);
    return this.camera.position.clone().add(targetOffset);
  }

  get center(): Vector {
    return this.getPoint(PointType.Center);
  }

  get topLeft(): Vector {
    return this.getPoint(PointType.TopLeft);
  }

  get topRight(): Vector {
    return this.getPoint(PointType.TopRight);
  }

  get bottomLeft(): Vector {
    return this.getPoint(PointType.BottomLeft);
  }

  get bottomRight(): Vector {
    return this.getPoint(PointType.BottomRight);
  }
}
