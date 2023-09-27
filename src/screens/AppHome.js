import React from "react";
import { motion } from "framer-motion";
import Home from "./Home";

function AppHome() {
  return (
    <motion.div
      // location={location}
      // key={location.pathname}
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // exit={{
      //   transition: { duration: 0.5, delay: 0.5, when: "afterChildren" },
      // }}
      className="flex flex-col"
    >
      <motion.div className="bg-[#210002] w-full h-screen ">
        <Home />
      </motion.div>
    </motion.div>
  );
}

export default AppHome;
