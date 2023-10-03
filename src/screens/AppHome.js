import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./Home";
import LogoSVG from "../images/LogoSVG";

function AppHome({ load, setLoad }) {
  return (
    <motion.div className="flex flex-col">
      <motion.div className="bg-[#210002] w-full h-screen ">
        <AnimatePresence>
          <Home key={"home.ele"} />
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

export default AppHome;
