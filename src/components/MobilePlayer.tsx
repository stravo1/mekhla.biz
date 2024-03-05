import React, { useEffect, useRef, useState } from "react";

interface MobilePlayerProps {
  videoId?: string;
}

const MobilePlayer: React.FC<MobilePlayerProps> = ({ videoId }) => {
  const controlRef = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(true);
  useEffect(() => {
    let options = {
      rootMargin: "0px",
      threshold: 0.15,
    };

    let observerForVideoEntry = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("Intersecting");

          setTimeout(() => {
            if (controlRef.current) {
              try {
                controlRef.current.play().then(() => {
                setPaused(false);
            }).catch((err) => {console.log(err)});
              } catch (err) {
                console.log(err);
              }
            }
          }, 500);
        } else {
          if (controlRef.current) {
            try {
              controlRef.current.pause();
              setPaused(true);
            } catch (err) {
              console.log(err);
            }
          }
        }
      });
    }, options);
    observerForVideoEntry.observe(controlRef.current!);
  }, []);
  const handlePlayPause = () => {
    if (paused) {
      controlRef.current?.play();
    } else {
      controlRef.current?.pause();
    }
    setPaused((prev) => !prev);
  };
  return (
    <div className="z-10 relative w-full h-full bg-black text-white">
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
      </div>
      <div className="right-sidebar z-20 absolute right-0 bottom-0 pb-[25%] pr-4 flex flex-col gap-4">
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
      <div className="bottom-desc absolute pb-[21%] max-w-[85vw] left-0 pl-6 bottom-0 z-20">
        <h2 className="text-lg font-bold">Lorem, ipsum.</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit iure est
          ratione aliquam voluptatibus voluptatum. Perspiciatis reprehenderit
          deserunt et voluptate.
        </p>
      </div>
      <div className="bottom-gradient bg-gradient-to-t from-black to-[rgba(0,0,0,0)] absolute bottom-0 w-screen h-[35%]"></div>
      <video
        ref={controlRef}
        className="w-full h-full object-contain pb-[15%]"
        loop
      >
        <source
          src={`https://github.com/stravo1/mekhla.biz/raw/master/src/assets/videos/${
            videoId ? videoId : "watch"
          }.mp4`}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default MobilePlayer;
