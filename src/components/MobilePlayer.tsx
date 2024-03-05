import React, { useRef, useState } from "react";

const MobilePlayer = () => {
  const controlRef = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(true);
  const handlePlayPause = () => {
    if (paused) {
      controlRef.current?.play();
    } else {
      controlRef.current?.pause();
    }
    setPaused((prev) => !prev);
  };
  return (
    <div className="z-10 relative w-full h-full bg-gray-800 text-white">
      <div
        className={`controls absolute bg-black z-20 inset-0 flex justify-center items-center transition-all ${
          paused ? "opacity-70" : "opacity-0"
        }`}
        onClick={handlePlayPause}
      >
        <button>
          <span className="material-symbols-rounded text-white text-5xl">
            play_arrow
          </span>
        </button>
        <div className="sidebar absolute right-0 bottom-0 pb-[17%] pr-4 flex flex-col gap-4">
          <button>
            <span className="material-symbols-rounded text-white text-3xl">
              favorite
            </span>
          </button>
          <button>
            <span className="material-symbols-rounded text-white text-3xl">
              share
            </span>
          </button>
        </div>
      </div>
      <video ref={controlRef} className="w-full h-full">
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default MobilePlayer;
