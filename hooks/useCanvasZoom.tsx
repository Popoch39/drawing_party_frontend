import { KonvaEventObject } from "konva/lib/Node";
import { useState } from "react";

const useCanvasZoom = (initialScale: number = 1) => {
  const [scale, setScale] = useState<number>(initialScale);

  const handleWheel = (e: KonvaEventObject<WheelEvent>): void => {
    e.evt.preventDefault;

    const scaleBy = 1.1;
    let newScale = scale;
    console.log(e);
    if (e.evt.deltaY < 0) {
      newScale *= scaleBy;
    } else {
      newScale /= scaleBy;
    }

    setScale(newScale);
  };

  return { scale, handleWheel };
};

export default useCanvasZoom;
