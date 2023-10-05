import { AnimatePresence, motion } from "framer-motion";
import boat from "../images/boat.svg";
import logo from "../images/sagmayam-logo.svg";
import wave from "../images/wave.svg";
import HomeCard from "../components/HomeCard";
import Boat from "../images/Svg";
import {
  InformationCircleIcon,
  PhotoIcon,
  WrenchScrewdriverIcon,
  XCircleIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function Home() {
  const [view, setView] = useState(null);
  const slider = [
    {
      label: "Onam",
      img: "https://cdn.zeebiz.com/sites/default/files/styles/zeebiz_850x478/public/2022/09/04/198455-onam-ptii.jpg?itok=Ptar1O3B",
      hash: ["#iitgn", "#art"],
    },
    {
      label: "Kathakali",
      img: "https://dancepechance.org/wp-content/uploads/2021/12/Kottakkal_Nandakumaran_Nair_Performing_kathakali.jpg",
      hash: ["#iitgn", "#art"],
    },
    {
      label: "Kalaripayattu",
      img: "https://www.keralatourism.org/images/artforms/large/kalaripayattu20131111114353_27_1.jpg",
      hash: ["#iitgn", "#art"],
    },
    {
      label: "ChendaMelam",
      img: "https://i.pinimg.com/originals/83/15/17/831517686f16ccc58c5430a8ca6a4ac0.jpg",
      hash: ["#iitgn", "#art"],
    },
  ];
  const [slide, setSlider] = useState();
  useEffect(() => {
    getDocs(collection(db, "slider")).then((items) =>
      setSlider(
        items.docs.map((item) => ({
          label: item.data().label,
          img: item.data().img,
          hash: item.data().hash,
          text: item.data().text,
        }))
      )
    );
  }, []);
  const InfiniteLoopSlider = ({ children, duration }) => {
    return (
      <motion.div
        initial={{ translateX: "0%" }}
        animate={{ translateX: "-50%" }}
        transition={{
          duration: duration,
          ease: "linear",
          repeat: Infinity,
          reverse: true,
        }}
        className=" flex h-full my-auto gap-2 w-fit"
      >
        {children}
        {children}
      </motion.div>
    );
  };

  const menu_right = [
    {
      label: "Youtube",
      ico: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="40"
          height="40"
          fill="white"
          viewBox="0 0 24 24"
        >
          <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z"></path>
        </svg>
      ),
      link: "gallery",
    },
  ];
  const menu_left = [
    {
      label: "Photo Gallery",
      ico: <PhotoIcon className="w-8 text-white " />,
      link: "gallery",
    },
    {
      label: "Activities",
      ico: <WrenchScrewdriverIcon className="w-8 text-white " />,
      link: "gallery",
    },
    {
      label: "About",
      ico: <InformationCircleIcon className="w-8 text-white " />,
      link: "about",
    },
  ];

  return (
    <motion.div className="flex flex-col absolute z-50 w-full h-screen bg-[#210002]">
      <AnimatePresence>
        {view !== null && (
          <motion.div
            key={`ovelay.wind`}
            initial={{ translateY: -10, opacity: 0 }}
            animate={{
              translateY: 0,
              opacity: 1,
              transition: { ease: "easeIn", duration: 0.3 },
            }}
            exit={{
              translateY: +10,
              opacity: 0,
              transition: { ease: "easeIn", duration: 0.3 },
            }}
            className="absolute z-50 overflow-y-auto border h-[90%] w-[90%] border-white p-2 drop-shadow-xl shadow-black bg-transparent left-0 top-0 bottom-0 my-auto right-0 mx-auto"
          >
            <XCircleIcon
              onClick={() => setView(null)}
              className="cursor-pointer absolute right-4 text-[#FFD07D] hover:text-white hover:stroke-[#FFD07D] top-4 w-8"
            />
            <div className="bg-white w-full h-full flex flex-col items-center overflow-y-auto p-4">
              <h1 className="font-mont text-xs font-bold ">Sagmayam</h1>
              <h1 className="font-mont text-2xl font-bold border-x-4 px-4 border-red-400 ">
                {slide[view].label}
              </h1>
              <img
                src={slide[view].img}
                alt=""
                className="w-full mt-6 mb-3 rounded-md border border-dashed border-gray-400 p-2"
              />
              <div className="flex flex-row ml-0 mr-auto">
                {slide[view].hash.map((item) => (
                  <h1 className="text-sm -mt-1 font-light bg-gray-100 rounded-sm p-0.5 border border-dashed border-slate-300 mr-2">
                    #{item}&nbsp;
                  </h1>
                ))}
              </div>
              <h1 className="text-justify font-mont ml-0 mr-auto">
                {slide[view].text}
              </h1>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        key="sky.ele"
        initial={{ height: "0%", backgroundColor: "#FFD07D" }}
        animate={{
          height: "66.66%",
          //backgroundColor: "#FFD07D",
          transition: { duration: 0.8 },
        }}
        exit={{
          height: "0%",
          backgroundColor: "#210002",
          transition: { delay: 1, duration: 0.5 },
        }}
        className="relative w-full h-4/6 flex"
      >
        <div className="flex z-100 flex-row mx-4 bg-[#FFD07D] w-full items-center justify-between">
          <div>
            {menu_right.map((item, i) => (
              <Link key={`menu.right.${i}`} to={item.link}>
                <motion.div
                  initial={{ opacity: 0, translateX: -50 }}
                  animate={{
                    opacity: 1,
                    translateX: 0,
                    transition: { duration: 1, delay: 0.2 * i },
                  }}
                  exit={{
                    opacity: 0,
                    translateX: -50,
                    transition: { duration: 1, delay: 0.2 * i },
                  }}
                  className="text-white transform transition-all translate-x-0 hover:translate-x-0.5 group flex flex-row items-center justify-end gap-2 font-mont pl-2 border-l-2 cursor-pointer"
                >
                  {item.ico}
                  <h1 className="hidden group-hover:flex">{item.label}</h1>
                </motion.div>
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-4 text-right">
            {menu_left.map((item, i) => (
              <Link key={`menu.left.${i}`} to={item.link}>
                <motion.div
                  initial={{ opacity: 0, translateX: 50 }}
                  animate={{
                    opacity: 1,
                    translateX: 0,
                    transition: { duration: 1, delay: 0.2 * i },
                  }}
                  exit={{
                    opacity: 0,
                    translateX: 50,
                    transition: { duration: 1, delay: 0.2 * i },
                  }}
                  className="text-white transform transition-all translate-x-0 hover:translate-x-0.5 group flex flex-row items-center justify-end gap-2 font-mont pr-2 border-r-2 cursor-pointer"
                >
                  <h1 className="hidden group-hover:flex">{item.label}</h1>
                  {item.ico}
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ marginBottom: "-30%", scale: 0.5, opacity: 0 }}
          animate={{
            opacity: 1,
            marginBottom: "-12%",
            scale: 1,
            transition: { duration: 0.8, delay: 0.2 },
          }}
          exit={{
            marginBottom: "-30%",
            scale: 0.5,
            transition: {
              duration: 2,
            },
          }}
          className="w-2/6 aspect-square transform absolute bottom-0  left-0 right-0 mx-auto rounded-full bg-gradient-to-b to-[#EEFF3F] from-[#FF931E]"
        />

        <motion.img
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.2, delay: 1 },
          }}
          exit={{
            opacity: 0,
            transition: {
              duration: 2,
            },
          }}
          src={logo}
          className="absolute top-0 mt-2 left-0 right-0 mx-auto w-16"
          alt=""
        />
        <motion.div
          className="absolute pointer-events-none transform bottom-0 -mb-3 left-0 right-0 mx-auto w-full"
          initial={{ opacity: 0, translateX: -window.innerWidth / 8 }}
          animate={{
            opacity: 1,
            translateX: 0,
            transition: {
              ease: "easeInOut",

              duration: 1.5,
              delay: 0.1,
            },
          }}
          exit={{
            opacity: 0,
            translateX: window.innerWidth / 8,
            transition: {
              duration: 1,
            },
          }}
        >
          <motion.div
            animate={{
              x: [0, 25, 0],
              transition: {
                ease: "easeInOut",
                repeat: Infinity,
                duration: 10,
                delay: 1,
              },
            }}
            className="w-2/4 mx-auto"
            // src={boat}
            // alt=""
          >
            <Boat />
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 1, height: "100%" }}
        animate={{
          height: "33.33%",
          opacity: 1,
          transition: { duration: 0.8, delay: 0.2 },
        }}
        exit={{
          height: "100%",
          transition: {
            delay: 1,
            duration: 0.1,
          },
        }}
        className="relative w-full transform bottom-0 h-2/6 bg-[#73A6FF]"
      >
        <motion.img
          key={`${1}e`}
          animate={{
            x: [0, 50, 0],
            transition: {
              ease: "easeOut",
              repeat: Infinity,
              duration: 10,
              delay: 2,
            },
          }}
          exit={{ x: -50, opacity: 0, transition: { duration: 0.2 } }}
          src={wave}
          className="absolute transform -translate-x-8 top-0 mt-1 left-0 right-0 mx-auto h-1.5 md:h-2"
          alt=""
        />
        <motion.img
          key={`${2}e`}
          animate={{
            x: [50, 0, 50],
            transition: {
              ease: "easeOut",
              repeat: Infinity,
              duration: 10,
              delay: 4,
            },
          }}
          exit={{ x: 100, opacity: 0, transition: { duration: 0.2 } }}
          src={wave}
          className="relative transform translate-x-8 mt-5  mx-auto h-1 md:h-1.5"
          alt=""
        />
        <motion.img
          key={`${3}e`}
          animate={{
            x: [0, 50, 0],
            transition: {
              ease: "easeOut",
              repeat: Infinity,
              duration: 10,
              delay: 6,
            },
          }}
          exit={{ x: -50, opacity: 0, transition: { duration: 0.2 } }}
          src={wave}
          className="relative transform -translate-x-5 mt-2  mx-auto h-0.5 md:h-1"
          alt=""
        />
        <motion.img
          key={`${4}e`}
          animate={{
            x: [50, 0, 50],
            transition: {
              ease: "easeOut",
              repeat: Infinity,
              duration: 10,
              delay: 8,
            },
          }}
          exit={{ x: 100, opacity: 0, transition: { duration: 0.2 } }}
          src={wave}
          className="relative transform translate-x-5 mt-1.5  mx-auto h-0.5 md:h-1"
          alt=""
        />

        <div className="h-full -mt-12 w-[80%] overflow-hidden mx-auto my-auto">
          <InfiniteLoopSlider key={0} duration={slide?.length * 4}>
            {slide?.map((item, i) => (
              <HomeCard
                label={item.label}
                hash={item.hash}
                img={item.img}
                view={setView}
                key={`slider.${i}`}
                i={i}
              />
            ))}
          </InfiniteLoopSlider>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Home;
