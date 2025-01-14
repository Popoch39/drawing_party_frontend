"use client";
import { useRef } from "react";
import { Stage as KonvaStage, Layer, Rect } from "react-konva";
import useCanvasZoom from "@/hooks/useCanvasZoom";
import { Stage } from "konva/lib/Stage";

const ZoomableCanvas = () => {
  if (typeof window === "undefined") {
    return null; // Render nothing on the server
  }
  const Stageref = useRef<Stage | null>(null);
  const { scale, handleWheel } = useCanvasZoom();

  return (
    <KonvaStage
      width={window.innerWidth}
      height={window.innerHeight}
      scaleX={scale}
      scaleY={scale}
      ref={Stageref}
      onWheel={handleWheel}
    >
      <Layer>
        <Rect x={50} y={50} width={100} height={100} fill="green" draggable />

        <Rect x={200} y={50} width={100} height={100} fill="red" draggable />
      </Layer>
    </KonvaStage>
  );
};

export default ZoomableCanvas;
