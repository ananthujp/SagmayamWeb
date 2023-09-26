import React from "react";
import p0 from "../images/parallax0.png";
import p1 from "../images/parallax1.png";
import p2 from "../images/parallax2.png";
import p3 from "../images/parallax3.png";
import p4 from "../images/parallax4.png";
import p5 from "../images/parallax5.png";
import p6 from "../images/parallax6.png";
import p7 from "../images/parallax7.png";
import p8 from "../images/parallax8.png";
import { useSpring, animated } from "react-spring";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  useLocation,
  Router,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Home from "./Home";
import { useRef, useState } from "react";
const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 70}px,${y / 40}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 70}px,${y / 10}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 70}px,${y / 25}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 70}px,${y / 30}px,0)`;
const trans5 = (x, y) => `translate3d(${x / 80}px,${y / 35}px,0) scaleX(1.1)`;
const trans6 = (x, y) => `translate3d(${x / 85}px,${y / 40}px,0) scaleX(1.1)`;
const trans7 = (x, y) => `translate3d(${x / 90}px,${y / 100}px,0) scaleX(1.1)`;

function AppHome() {
  const [slide, setSlide] = useState(0);
  const ref = useRef(null);
  const ref2 = useRef(null);
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (scrollY.get() > 600) {
      setSlide(1);
    } else {
      setSlide(0);
    }
  });
  return (
    <motion.div
      // location={location}
      // key={location.pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        transition: { duration: 0.5, delay: 0.5, when: "afterChildren" },
      }}
      className="flex flex-col"
    >
      <motion.div
        ref={ref2}
        onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
        className="bg-gray-800 w-full h-screen overflow-hidden"
      >
        <div>
          <animated.img
            style={{ transform: props.xy.interpolate(trans7) }}
            src={p0}
            alt="asdasd"
            className="absolute z-18  w-full h-screen object-cover"
          />
        </div>
        <div>
          <animated.img
            style={{ transform: props.xy.interpolate(trans7) }}
            src={p1}
            alt="asdasd"
            className="absolute z-18  w-full h-screen object-cover"
          />
        </div>
        <div>
          <animated.img
            style={{ transform: props.xy.interpolate(trans7) }}
            src={p2}
            alt="asdasd"
            className="absolute z-18  w-full h-screen object-cover"
          />
        </div>
        <div>
          <animated.img
            style={{ transform: props.xy.interpolate(trans6) }}
            src={p3}
            alt="asdasd"
            className="absolute z-18  w-full h-screen object-cover"
          />
        </div>
        <div>
          <animated.img
            style={{ transform: props.xy.interpolate(trans5) }}
            src={p4}
            alt="asdasd"
            className="absolute z-18  w-full h-screen object-cover"
          />
        </div>
        <div>
          <animated.img
            style={{ transform: props.xy.interpolate(trans4) }}
            src={p5}
            alt="asdasd"
            className="absolute z-18  w-full h-screen object-cover"
          />
        </div>
        <div>
          <animated.img
            style={{ transform: props.xy.interpolate(trans3) }}
            src={p6}
            alt="asdasd"
            className="absolute z-18  w-full h-screen object-cover"
          />
        </div>
        <div>
          <animated.img
            style={{ transform: props.xy.interpolate(trans2) }}
            src={p7}
            alt="asdasd"
            className="absolute z-18  md:-ml-16 mt-24 md:w-full h-screen object-cover"
          />
        </div>
        <div>
          <animated.img
            style={{ transform: props.xy.interpolate(trans1) }}
            src={p8}
            alt="asdasd"
            className="absolute z-18 mt-8  w-full h-screen object-cover"
          />
        </div>
      </motion.div>
      <motion.div ref={ref} className="bg-[#210002] w-full h-screen ">
        {slide && <Home />}
      </motion.div>
    </motion.div>
  );
}

export default AppHome;
