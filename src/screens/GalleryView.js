import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";
import { ArrowLeftOnRectangleIcon, HomeIcon } from "@heroicons/react/24/solid";
import { useNavigate, useParams } from "react-router-dom";
import { BackButton, HomeButton } from "../Nav/buttons";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

function GalleryView() {
  const [galData, setGalData] = useState();
  let { pathID } = useParams();
  useEffect(() => {
    getDoc(doc(db, "gallery", pathID)).then((item) =>
      setGalData({
        id: item.id,
        title: item.data().name,
        time: item.data().date,
        photos: item.data().photos,
      })
    );
  }, []);
  const images = [
    "https://assets.traveltriangle.com/blog/wp-content/uploads/2016/07/Vishnu_Theyyam.jpg",
    "https://www.holidify.com/images/cmsuploads/compressed/Aranmula-boat_race-_Kerala-India-1_20190219184623jpg",
    "https://www.keralatourism.org/images/enchanting_kerala/large/onam_celebrating_kerala20200811130917_1014_1.jpg",
    "https://assets.traveltriangle.com/blog/wp-content/uploads/2016/07/Vishnu_Theyyam.jpg",
    "https://www.keralatourism.org/images/enchanting_kerala/large/onam_celebrating_kerala20200811130917_1014_1.jpg",
    "https://www.holidify.com/images/cmsuploads/compressed/Aranmula-boat_race-_Kerala-India-1_20190219184623jpg",
  ];
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-full h-screen items-center justify-start">
      <div className="flex flex-row items-center w-[90%] justify-between ">
        <HomeButton />
        <div className="flex flex-col items-center ">
          <h1 className="mt-4 text-sm font-black font-mont">Gallery</h1>
          <h1 className="mb-4 text-4xl font-black font-mont">
            {galData?.title}
          </h1>
        </div>
        <BackButton />
      </div>
      {galData && (
        <SlideshowLightbox
          showThumbnails
          className="container grid grid-cols-3 gap-4 mx-auto"
        >
          {galData?.photos?.map((item, i) => (
            <img
              key={`gal.item.${i}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.2 * i } }}
              src={item}
              alt=""
              className="mb-1 filter hover:contrast-100 saturate-50 hover:saturate-100 contrast-75 object-cover shadow-gray-400 transition-all shadow-sm hover:scale-105 h-full w-full rounded-md"
            />
          ))}
          {/* <img className="w-full rounded" src="https://source.unsplash.com/pAKCx4y2H6Q/1400x1200" />
    <img className="w-full rounded" src="https://source.unsplash.com/AYS2sSAMyhc/1400x1200" />  
    <img className="w-full rounded" src="https://source.unsplash.com/Kk8mEQAoIpI/1600x1200" />
    <img className="w-full rounded" src="https://source.unsplash.com/HF3X2TWv1-w/1600x1200" /> */}
        </SlideshowLightbox>
      )}
      {/* <div className="grid  md:grid-cols-4 grid-cols-3  gap-6 w-[80%] ">
        {images.map((item, i) => (
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.2 * i } }}
            src={item}
            alt=""
            className="mb-1 filter hover:contrast-100 saturate-50 hover:saturate-100 contrast-75 object-cover shadow-gray-400 transition-all shadow-sm hover:scale-110 h-full w-full rounded-md"
          />
        ))}
      </div> */}
    </div>
  );
}

export default GalleryView;
