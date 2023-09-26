import { motion, useScroll } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Gallery() {
  const [gal, setGal] = useState(null);
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  useEffect(() => {
    gal !== null && navigate("gallery-view");
  }, [gal]);
  const Data = [
    {
      title: "Onam 2018",
      images: [
        "https://assets.traveltriangle.com/blog/wp-content/uploads/2016/07/Vishnu_Theyyam.jpg",
        "https://www.holidify.com/images/cmsuploads/compressed/Aranmula-boat_race-_Kerala-India-1_20190219184623jpg",
        "https://www.keralatourism.org/images/enchanting_kerala/large/onam_celebrating_kerala20200811130917_1014_1.jpg",
      ],
    },
    {
      title: "Onam 2022",
      images: [
        "https://assets.traveltriangle.com/blog/wp-content/uploads/2016/07/Vishnu_Theyyam.jpg",
        "https://www.holidify.com/images/cmsuploads/compressed/Aranmula-boat_race-_Kerala-India-1_20190219184623jpg",
        "https://www.keralatourism.org/images/enchanting_kerala/large/onam_celebrating_kerala20200811130917_1014_1.jpg",
      ],
    },
    {
      title: "Onam 2022",
      images: [
        "https://assets.traveltriangle.com/blog/wp-content/uploads/2016/07/Vishnu_Theyyam.jpg",
        "https://www.holidify.com/images/cmsuploads/compressed/Aranmula-boat_race-_Kerala-India-1_20190219184623jpg",
        "https://www.keralatourism.org/images/enchanting_kerala/large/onam_celebrating_kerala20200811130917_1014_1.jpg",
      ],
    },
    {
      title: "Onam 2022",
      images: [
        "https://assets.traveltriangle.com/blog/wp-content/uploads/2016/07/Vishnu_Theyyam.jpg",
        "https://www.holidify.com/images/cmsuploads/compressed/Aranmula-boat_race-_Kerala-India-1_20190219184623jpg",
        "https://www.keralatourism.org/images/enchanting_kerala/large/onam_celebrating_kerala20200811130917_1014_1.jpg",
      ],
    },
  ];
  return (
    <motion.div
      exit={{ backgroundColor: "#73A6FF" }}
      style={{
        backgroundImage:
          "repeating-linear-gradient(-45deg, rgba(255,255,255, 0.25), rgba(255,255,255, 0.25) 1px, transparent 1px, transparent 6px)",
        backgroundSize: " 4px 4px",
      }}
      className="flex bg-[#73A6FF] flex-col items-center gap-4 w-full md:h-full h-screen"
    >
      <motion.h1
        exit={{ opacity: [1, 0.5, 0] }}
        className={
          " text-left	mb-4  font-mont mt-4  font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-slate-50 to-slate-200 " +
          (scrollY.get() > 10 && " hidden")
        }
      >
        Gallery
      </motion.h1>
      {Data.map((item, j) => (
        <motion.div
          key={`image.gallery.${j}`}
          initial={{ maxWidth: "42rem" }}
          className="w-full  my-4 "
        >
          <motion.div
            initial={{ opacity: 0, translateY: -4 }}
            animate={{
              opacity: 1,
              translateY: 0,
              transition: { delay: 0.4 * j, when: "beforeChildren" },
            }}
            exit={
              gal === j
                ? {
                    scale: [1, 1.3, 5],
                    opacity: [1, 1, 1, 1, 1, 0.7],
                    transition: { delay: 0.4, duration: 1 },
                  }
                : { opacity: [1, 0.2, 0] }
            }
            className="flex items-center justify-center w-full md:h-64 h-32 bg-gradient-to-br from-slate-800 to-slate-500 shadow-xl"
          >
            <div className="relative flex flex-row items-center justify-around px-6 w-[94%] h-[85%] shadow-inner shadow-black bg-gradient-to-br from-slate-100 to-slate-50 ">
              <motion.div
                exit={{ opacity: 0 }}
                onClick={() => setGal(j)}
                className="absolute group cursor-pointer flex items-center justify-center w-full h-full transition-all hover:bg-blue-400/60 bg-transparent z-50"
              >
                <h1 className="text-white/80 duration-500 transition-all font-mont font-light group-hover:block hidden">
                  View all
                </h1>
              </motion.div>
              {item.images.map((item2, i) => (
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.8, delay: i * 0.4 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.8, delay: i * 0.4 },
                  }}
                  className="h-3/4 aspect-square object-cover filter saturate-[60%]"
                  src={item2}
                  alt=""
                />
              ))}
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.8, delay: 1.8 },
                }}
                className="absolute bottom-0 mx-auto pr-2 md:pr-4 pb-0 md:pb-1 text-[7pt] md:text-sm font-mont text-gray-800"
              >
                {item.title}
              </motion.h1>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Gallery;
