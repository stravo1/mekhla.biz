import React, { useEffect } from "react";
import { setup, resize } from "../assets/ambident-canvas-background/shift.ts";

function Shift() {
  useEffect(() => {
    setup();
    resize();
  }, []);
  return (
    <>
      <div className="content--canvas"></div>
      <div className="noise-bg w-full h-full fixed inset-0 z-[3]"></div>
    </>
  );
}

export default Shift;
