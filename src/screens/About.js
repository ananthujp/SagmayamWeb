import React from "react";
import { motion } from "framer-motion";
import gLink from "../Functions/Functions";
import { ArrowLeftOnRectangleIcon, HomeIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
function About() {
  const navigate = useNavigate();
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
      <div className="md:max-w-2xl lg:max-w-4xl  max-w-md flex items-center flex-col mx-auto ">
        <div className="flex flex-row items-center w-full justify-between ">
          <HomeIcon
            onClick={() => navigate(-1)}
            className="w-8 cursor-pointer hover:text-green-400  text-[#6f9e27]"
          />
          <div className="flex flex-col items-center ">
            <h1 className="mt-4 text-sm font-black font-mont ">sagmayam</h1>
            <h1 className="mb-4 text-4xl font-black font-mont border-x-4 px-4 border-blue-400">
              About
            </h1>
          </div>
          <ArrowLeftOnRectangleIcon
            onClick={() => navigate(-1)}
            className="w-8 cursor-pointer hover:text-red-400  text-[#ca1c25]"
          />
        </div>
        <h1 className="mb-4 text-sm text-justify font-light font-mont ">
          Welcome to the heart and soul of Malayali camaraderie at the esteemed
          Indian Institute of Technology Gandhinagar. Sagmayam is not a club;
          it's a vibrant community where the rich culture, traditions, and
          brilliance of Malayalis converge to create an unforgettable
          experience.
        </h1>
        <div className="flex gap-4 flex-row my-2">
          <div className="flex flex-col my-auto">
            <h1 className="font-mont font-semibold">Our Story</h1>
            <h1 className="mb-4 text-sm text-justify font-light font-mont ">
              Sagmayam was born out of a shared passion for preserving our
              Malayali heritage while embracing the intellectual rigor of IIT
              Gandhinagar. Founded by a group of enthusiastic students who call
              Kerala their homeland, this community has grown into a diverse
              family where members from all walks of life come together to
              celebrate the essence of "God's Own Country" in the heart of
              Gujarat.
            </h1>
          </div>
          <img
            src="https://iitgn.ac.in/assets/img/campus-lite2.jpg"
            className="w-2/3 lg:w-2/5 object-cover border-2 p-2 border-green-400"
            alt=""
          />
        </div>
        <div className="flex flex-col my-auto">
          <h1 className="font-mont font-semibold">Our Mission</h1>
          <h1 className="mb-4 text-sm text-justify font-light font-mont ">
            Our mission is simple yet profound - to foster a sense of belonging
            among Malayali students and provide a platform to showcase their
            talents, whether it be in academics, arts, culture. We aim to create
            a supportive ecosystem that encourages personal and professional
            growth while cherishing the spirit of Kerala. Through various
            events, activities, and initiatives, we strive to connect, inspire,
            and empower our members.
          </h1>
        </div>

        <div className="flex flex-col my-auto">
          <h1 className="font-mont font-semibold">What we do</h1>
          <ul className="list-disc ml-5">
            <li className="mb-4 text-sm text-justify font-light font-mont ">
              <b>Cultural Extravaganzas:</b> Experience the vibrant traditions,
              festivals, and flavors of Kerala through our cultural festivals,
              workshops, and food fests that transport you straight to the
              backwaters and lush green landscapes of our beloved state.
            </li>
            <li className="mb-4 text-sm text-justify font-light font-mont ">
              <b>Intellectual Exchange:</b> Engage in stimulating discussions,
              seminars, and talks that harness the collective wisdom of our
              community and the academic excellence of IIT Gandhinagar.
            </li>
            <li className="mb-4 text-sm text-justify font-light font-mont ">
              <b>Community Outreach:</b> We believe in giving back to society.
              Join us in our philanthropic efforts to make a positive impact in
              the local community and beyond.
            </li>
            <li className="mb-4 text-sm text-justify font-light font-mont ">
              <b>Networking Opportunities:</b> Build lasting connections with
              fellow Malayali students, faculty, and alumni, and tap into a vast
              network of resources and support.
            </li>
          </ul>
        </div>

        <div className="flex flex-col my-6">
          <h1 className="font-mont font-semibold">Join the Sagmayam Family:</h1>
          <h1 className="mb-4 text-sm text-justify font-light font-mont ">
            No matter where you're from in Kerala or what your field of study
            is, Sagmayam welcomes you with open arms. We invite you to be a part
            of this vibrant community, to celebrate Malayali excellence, and to
            create lifelong memories during your journey at IIT Gandhinagar.
            Together, let's embrace unity, celebrate diversity, and achieve
            greatness. Join us in creating a little piece of Kerala in the heart
            of Gandhinagar
          </h1>
          <h1 className="italic">
            Sagmayam - where culture meets innovation, and tradition meets
            aspiration.
          </h1>
        </div>
        <img
          src={
            "https://architecture.live/wp-content/uploads/2022/09/cusm-pan-31High-Res_13-1536x912.jpg"
          }
          className="w-full object-cover my-2 border-2 p-2 border-red-400"
          alt=""
        />
      </div>
    </motion.div>
  );
}

export default About;
