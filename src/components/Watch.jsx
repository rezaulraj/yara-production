import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import ReactPlayer from "react-player";
import bgImage from "../assets/image/menufuture/Homepage/footer.avif?url";

const Watch = () => {
  const [showVideo, setShowVideo] = useState(false);
  const youtubeLink = "https://www.youtube.com/watch?v=9NxojK2tn6A";

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <img
          src={bgImage}
          alt="Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h4 className="text-primary font-serif text-lg font-medium mb-2 tracking-widest">
            YARA PRODUCTION
          </h4>
          <h2 className="text-white text-3xl md:text-5xl font-serif font-medium mb-8 leading-tight">
            Get to know us – watch our company video now!
          </h2>

          <button
            onClick={() => setShowVideo(true)}
            className="group relative inline-flex items-center justify-center"
          >
            <div className="absolute animate-ping rounded-full bg-amber-500/30 w-20 h-20 group-hover:w-24 group-hover:h-24 transition-all duration-300"></div>
            <div className="relative flex items-center justify-center rounded-full bg-amber-500 w-16 h-16 group-hover:w-20 group-hover:h-20 transition-all duration-300">
              <FaPlay className="text-white text-xl ml-1" />
            </div>
          </button>
        </div>
      </div>

      {showVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full h-full max-w-6xl max-h-[80vh]">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-16 right-0 text-white hover:text-amber-500 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="w-full h-full">
              <ReactPlayer
                url={youtubeLink}
                width="100%"
                height="100%"
                controls={true}
                playing={true}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                config={{
                  youtube: {
                    playerVars: {
                      showinfo: 1,
                      modestbranding: 1,
                      rel: 0,
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Watch;
