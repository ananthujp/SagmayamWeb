import { AnimatePresence } from "framer-motion";
import { Route, BrowserRouter, Routes, useLocation } from "react-router-dom";
import Gallery from "./screens/Gallery";
import GalleryView from "./screens/GalleryView";
import About from "./screens/About";
import { useState } from "react";
import LogoSVG from "./images/LogoSVG";
import Home from "./screens/Home";
function App() {
  const [load, setLaad] = useState(false);

  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            load ? (
              <Home />
            ) : (
              <LogoSVG key={`loadin_anim.key`} loadi={load} setad={setLaad} />
            )
          }
        />
        <Route path="gallery" element={<Gallery />} />
        <Route path="about" element={<About />} />
        <Route path="gallery/gallery-view" element={<GalleryView />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
