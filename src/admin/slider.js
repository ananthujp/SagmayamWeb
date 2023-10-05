import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import gLink from "../Functions/Functions";
import {
  ArrowDownCircleIcon,
  ArrowLeftOnRectangleIcon,
  HomeIcon,
  PencilIcon,
  PlusCircleIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { BackButton, HomeButton } from "../Nav/buttons";
function Slider() {
  const [slide, setSlider] = useState();
  const [form, setForm] = useState();
  const [additem, setAddItem] = useState(false);
  const delItem = (id) => {
    const response = window.confirm("Are you sure you want to delete?");
    response && deleteDoc(doc(db, "slider", id));
  };
  const AddData = () => {
    form.id
      ? updateDoc(doc(db, "slider", form.id), {
          label: form.label,
          img: form.img,
          text: form.text,
          hash: form.hash.split(","),
        }).then(() => {
          setAddItem(false);
          setForm({ label: null, img: null, text: null, hash: null });
        })
      : addDoc(collection(db, "slider"), {
          label: form.label,
          img: form.img,
          text: form.text,
          hash: form.hash.split(","),
        }).then(() => {
          setAddItem(false);
          setForm({ label: null, img: null, text: null, hash: null });
        });
  };
  const editItem = (data_it) => {
    setForm({
      id: data_it.id,
      label: data_it.label,
      img: data_it.img,
      text: data_it.text,
      hash: data_it.hash.join(","),
    });
    setAddItem(true);
  };
  useEffect(() => {
    onSnapshot(collection(db, "slider"), (items) =>
      setSlider(
        items.docs.map((item) => ({
          id: item.id,
          label: item.data().label,
          img: item.data().img,
          hash: item.data().hash,
          text: item.data().text,
        }))
      )
    );
  }, []);
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
          <HomeButton />
          <div className="flex flex-col items-center ">
            <h1 className="mt-4 text-sm font-black font-mont ">Admin</h1>
            <h1 className="mb-4 text-4xl font-black font-mont border-x-4 px-4 border-blue-400">
              Slider
            </h1>
          </div>
          <BackButton />
        </div>
        <div className="grid w-full font-mont font-bold py-2 bg-indigo-300/60 text-gray-500 rounded-t-md px-4 grid-cols-4">
          <h1>Item</h1>
          <h1>Hash</h1>
          <h1>Image</h1>
          <h1 className="text-right">Edit</h1>
        </div>
        {slide?.map((item) => (
          <div className="grid border-b border-x border-indigo-200 w-full font-mont font-light py-2 cursor-default hover:bg-blue-200/50 bg-blue-200/30 px-4 grid-cols-4">
            <h1>{item.label}</h1>
            <h1>{item.hash && item.hash[0]}</h1>
            <img src={item.img} className="w-6 h-6" alt="" />
            <div className="flex flex-row text-gray-600 gap-2 justify-end">
              <PencilIcon
                onClick={() => editItem(item)}
                className="w-5 cursor-pointer"
              />
              <TrashIcon
                onClick={() => delItem(item.id)}
                className="w-5 cursor-pointer"
              />
            </div>
          </div>
        ))}
        <div
          onClick={() => setAddItem(!additem)}
          className={
            "flex gap-2 border-x  border-green-400 flex-row cursor-pointer py-0.5 bg-green-300/40 w-full justify-center " +
            (!additem && " border-b")
          }
        >
          Add Item
          {additem ? (
            <ArrowDownCircleIcon className="w-6 text-green-400" />
          ) : (
            <PlusCircleIcon className="w-6 text-green-400" />
          )}
        </div>
        {additem && (
          <div className="flex flex-col pt-4 w-full border-b border-x border-green-400 gap-3 items-center justify-center">
            <div className="grid-col-1 items-center gap-2">
              <h1 className="text-slate-600 text-sm">Label : </h1>
              <input
                value={form?.label}
                onChange={(e) => setForm({ ...form, label: e.target.value })}
                className=" decoration-indigo-400 bg-indigo-100 border-indigo-500 px-2 py-1 rounded-md "
                type="text"
              />
            </div>
            <div className="grid-col-1 items-center gap-2">
              <h1 className="text-slate-600 text-sm">
                Hashtags (Sep. by commas ) :
              </h1>
              <input
                value={form?.hash}
                onChange={(e) => setForm({ ...form, hash: e.target.value })}
                className=" decoration-indigo-400 bg-indigo-100 border-indigo-500 px-2 py-1 rounded-md "
                type="email"
              />
            </div>
            <div className="grid-col-1 items-center gap-2">
              <h1 className="text-slate-600 text-sm">Image URL : </h1>
              <input
                value={form?.img}
                onChange={(e) => setForm({ ...form, img: e.target.value })}
                className=" decoration-indigo-400 bg-indigo-100 border-indigo-500 px-2 py-1 rounded-md "
              />
            </div>
            <div className="grid-col-1 items-center gap-2">
              <h1 className="text-slate-600 text-sm">Text: </h1>
              <textarea
                value={form?.text}
                onChange={(e) => setForm({ ...form, text: e.target.value })}
                className=" decoration-indigo-400 bg-indigo-100 border-indigo-500 px-2 py-1 rounded-md "
                type="number"
              />
            </div>

            <div
              onClick={() => AddData()}
              className="flex flex-row items-center justify-between bg-gradient-to-br from-green-600 hover:to-green-500 cursor-pointer hover:from-green-600 to-green-400 px-6 my-2 mx-auto py-1 text-white rounded-full"
            >
              Add
            </div>
          </div>
        )}
        <h1 className="mb-4 text-sm text-justify font-thin font-mont my-2 italic">
          Use pencil icon to edit and trash icon to delete items. Use "Add Item"
          button to add more items to the slider. Fill all the fields when you
          add a new item. Make sure the image url is direct and working
          perfectly for an img tag.
        </h1>
      </div>
    </motion.div>
  );
}

export default Slider;
