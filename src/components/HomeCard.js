import React from "react";
import { motion } from "framer-motion";
function HomeCard({ label, img, hash, i, view }) {
  return (
    <motion.div
      onClick={() => view(i)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1, delay: i * 0.5 } }}
      exit={{ opacity: 0, transition: { duration: 0.3, delay: i * 0.5 } }}
      className="relative my-auto cursor-pointer h-24 md:h-32 translate-y-4 transition-all duration-1000 filter grayscale-[80%] hover:grayscale-0 border-white border  aspect-video"
    >
      <img className="aspect-video p-2 shadow-inner" src={img} alt="" />

      <div className="absolute bg-gradient-to-b from-transparent to-black/80 w-[94%] h-1/4 m-1.5 bottom-0"></div>
      <div className="flex flex-row transform -mt-10 ml-4 text-left  text-white text-sm font-mont">
        <h1 className="text-4xl">{label[0]}</h1>
        <div className="flex flex-col">
          <h1>{label.substring(1)}</h1>
          <div className="flex flex-row">
            {hash.map((item, j) => (
              <h1 key={`hash${i}.${j}`} className="text-xs -mt-1 font-thin">
                {item}&nbsp;
              </h1>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default HomeCard;
