import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import gLink from "../Functions/Functions";
import {
  ArrowDownCircleIcon,
  ArrowLeftOnRectangleIcon,
  ChevronDoubleRightIcon,
  DevicePhoneMobileIcon,
  HomeIcon,
  PencilIcon,
  PhotoIcon,
  PlusCircleIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { BackButton, HomeButton } from "../Nav/buttons";
import { provider } from "../firebase";
import useReducer from "../Context";
function Admin() {
  const { login, setLogin } = useReducer();
  const [form, setForm] = useState();
  const [additem, setAddItem] = useState(false);
  const handleLogin = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    if (login) {
      localStorage.removeItem("user");
      setLogin(false);
    } else {
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          localStorage.setItem("user", JSON.stringify(user));
          setLogin(!login);
          // IdP data available using getAdditionalUserInfo(result)
          // ...
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
    }
  };

  return (
    <motion.div className="relative flex items-center flex-col bg-white w-full h-screen">
      {["bg-green-400", "bg-red-400", "bg-[#73A6FF]"].map((item, i, arr) => (
        <motion.div
          initial={{ minHeight: "100%", width: "100%" }}
          animate={{
            minHeight: "0%",
            width: "100%",
            transition: { duration: 0.5, delay: (arr.length - i) * 0.2 },
          }}
          exit={{
            minHeight: "100%",
            width: "100%",
            transition: { duration: 0.5, delay: i * 0.2 },
          }}
          className={"absolute z-50 " + item}
        />
      ))}
      <div className="md:max-w-2xl lg:max-w-4xl h-screen w-full max-w-md flex items-center flex-col mx-auto  ">
        <div className="flex flex-row items-center w-full justify-between ">
          <HomeButton />
          <div className="flex flex-col items-center ">
            <h1 className="mt-4 text-sm font-black font-mont ">Admin</h1>
            <h1 className="mb-4 text-4xl font-black font-mont border-x-4 px-4 border-blue-400">
              Console
            </h1>
          </div>
          <BackButton />
        </div>
        <div
          onClick={() => handleLogin()}
          className="text-white px-4  py-2 cursor-pointer rounded-md bg-gradient-to-br from-indigo-400 to-purple-400"
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            id="Capa_1"
            className="stroke-2 stroke-white"
            style={{
              enableBackground: "new 0 0 150 150",
            }}
            viewBox="0 0 150 150"
          >
            <style>
              {
                ".st0{fill:#1a73e8}.st1{fill:#ea4335}.st2{fill:#4285f4}.st3{fill:#fbbc04}.st4{fill:#34a853}.st5{fill:#4caf50}.st6{fill:#1e88e5}.st7{fill:#e53935}.st8{fill:#c62828}.st9{fill:#fbc02d}.st10{fill:#1565c0}.st11{fill:#2e7d32}.st16{clip-path:url(#SVGID_2_)}.st17{fill:#188038}.st18,.st19{opacity:.2;fill:#fff;enable-background:new}.st19{opacity:.3;fill:#0d652d}.st20{clip-path:url(#SVGID_4_)}.st21{opacity:.3;fill:url(#_45_shadow_1_);enable-background:new}.st22{clip-path:url(#SVGID_6_)}.st23{fill:#fa7b17}.st24,.st25,.st26{opacity:.3;fill:#174ea6;enable-background:new}.st25,.st26{fill:#a50e0e}.st26{fill:#e37400}.st27{fill:url(#Finish_mask_1_)}.st28{fill:#fff}.st29{fill:#0c9d58}.st30,.st31{opacity:.2;fill:#004d40;enable-background:new}.st31{fill:#3e2723}.st32{fill:#ffc107}.st33{fill:#1a237e;enable-background:new}.st33,.st34{opacity:.2}.st35{fill:#1a237e}.st36{fill:url(#SVGID_7_)}.st37{fill:#fbbc05}.st38{clip-path:url(#SVGID_9_);fill:#e53935}.st39{clip-path:url(#SVGID_11_);fill:#fbc02d}.st40{clip-path:url(#SVGID_13_);fill:#e53935}.st41{clip-path:url(#SVGID_15_);fill:#fbc02d}"
              }
            </style>
            <path
              d="M120 76.1c0-3.1-.3-6.3-.8-9.3H75.9v17.7h24.8c-1 5.7-4.3 10.7-9.2 13.9l14.8 11.5C115 101.8 120 90 120 76.1z"
              style={{
                fill: "#4280ef",
              }}
            />
            <path
              d="M75.9 120.9c12.4 0 22.8-4.1 30.4-11.1L91.5 98.4c-4.1 2.8-9.4 4.4-15.6 4.4-12 0-22.1-8.1-25.8-18.9L34.9 95.6c7.8 15.5 23.6 25.3 41 25.3z"
              style={{
                fill: "#34a353",
              }}
            />
            <path
              d="M50.1 83.8c-1.9-5.7-1.9-11.9 0-17.6L34.9 54.4c-6.5 13-6.5 28.3 0 41.2l15.2-11.8z"
              style={{
                fill: "#f6b704",
              }}
            />
            <path
              d="M75.9 47.3c6.5-.1 12.9 2.4 17.6 6.9L106.6 41c-8.3-7.8-19.3-12-30.7-11.9-17.4 0-33.2 9.8-41 25.3l15.2 11.8c3.7-10.9 13.8-18.9 25.8-18.9z"
              style={{
                fill: "#e54335",
              }}
            />
          </svg>
          {login ? "Sign Out" : "Google Sign In"}
        </div>
        {login && (
          <div className="grid grid-cols-2 gap-4">
            <Link
              className="px-8 py-4 bg-gradient-to-br from-blue-400 to-blue-600 my-2 text-white font-mont rounded-sm shadow-xl shadow-gray-600/40"
              to="/admin/slider"
            >
              <ChevronDoubleRightIcon className="w-12 mx-auto text-white" />
              Customise Slider
            </Link>
            <Link
              className="px-8 py-4 bg-gradient-to-br from-green-400 to-green-600 my-2 text-white font-mont rounded-sm shadow-xl shadow-gray-600/40"
              to="/admin/gallery"
            >
              <PhotoIcon className="w-12 mx-auto text-white" />
              Customise Gallery
            </Link>
            <a
              className="px-8 py-4 bg-gradient-to-br from-red-400 to-red-600 my-2 text-white font-mont rounded-sm shadow-xl shadow-gray-600/40"
              href="https://sagmayam-iitgn.netlify.app/"
            >
              <DevicePhoneMobileIcon className="w-12 mx-auto text-white" />
              Onam QR Code
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Admin;
