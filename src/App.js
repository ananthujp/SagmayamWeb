import { AnimatePresence } from "framer-motion";
import { Route, BrowserRouter, Routes, useLocation } from "react-router-dom";
import Gallery from "./screens/Gallery";
import AppHome from "./screens/AppHome";
import GalleryView from "./screens/GalleryView";
import About from "./screens/About";
function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AppHome />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="about" element={<About />} />
        <Route path="gallery/gallery-view" element={<GalleryView />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
