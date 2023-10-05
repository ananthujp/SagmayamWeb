import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
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
  Timestamp,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import dayjs from "dayjs";
import { BackButton, HomeButton } from "../Nav/buttons";
import {
  DesktopDateTimePicker,
  StaticDateTimePicker,
} from "@mui/x-date-pickers";
import Admin from "./admin";
import useReducer from "../Context";
function GalleryConsole() {
  const [slide, setSlider] = useState();
  const [form, setForm] = useState();
  const [additem, setAddItem] = useState(false);
  const { login } = useReducer();
  const addImg = () => {
    form?.photos
      ? setForm((prevData) => ({
          ...prevData,
          photos: [...prevData.photos, ""],
        }))
      : setForm({ ...form, photos: [""] });
  };
  const delImg = (index) => {
    const response = window.confirm("Are you sure you want to delete?");

    response &&
      setForm((prevData) => ({
        ...prevData,
        photos: prevData.photos.filter((img, i) => i !== index),
      }));
  };
  const delItem = (id) => {
    const response = window.confirm("Are you sure you want to delete?");
    response && deleteDoc(doc(db, "gallery", id));
  };
  const AddData = () => {
    form.id
      ? updateDoc(doc(db, "gallery", form.id), {
          name: form.title,
          date: dayjs(form.time).toDate(),
          photos: form.photos,
        }).then(() => {
          setAddItem(false);
          setForm({ title: null, time: null, photos: null });
        })
      : addDoc(collection(db, "gallery"), {
          name: form.title,
          date: dayjs(form.time).toDate(),
          photos: form.photos,
        }).then(() => {
          setAddItem(false);
          setForm({ title: null, time: null, photos: null });
        });
  };
  const editItem = (data_it) => {
    setForm({
      id: data_it.id,
      title: data_it.title,
      time: data_it.time,
      photos: data_it.photos,
    });
    setAddItem(true);
  };
  //   useEffect(() => {
  //     slide && console.log(dayjs(slide[0].time.toDate()));
  //     // slide && console.log(dayjs(Date(slide[0].time).toString()));
  //   }, [slide]);
  useEffect(() => {
    onSnapshot(collection(db, "gallery"), (items) =>
      setSlider(
        items.docs.map((item) => ({
          id: item.id,
          title: item.data().name,
          time: item.data().date,
          photos: item.data().photos,
        }))
      )
    );
  }, []);
  return login ? (
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
              Gallery
            </h1>
          </div>
          <BackButton />
        </div>
        <div className="grid w-full font-mont font-bold py-2 bg-indigo-300/60 text-gray-500 rounded-t-md px-4 grid-cols-4">
          <h1>Item</h1>
          <h1>Time</h1>
          <h1>Images</h1>
          <h1 className="text-right">Edit</h1>
        </div>
        {slide?.map((item) => (
          <div className="grid border-b border-x border-indigo-200 w-full font-mont font-light py-2 cursor-default hover:bg-blue-200/50 bg-blue-200/30 px-4 grid-cols-4">
            <h1>{item.title}</h1>
            <h1>{item.time && item.time.toDate().toString().slice(0, 10)}</h1>

            <div className="flex flex-row text-gray-600 gap-2 ">
              {item.photos.slice(0, 3).map((item_i) => (
                <img src={item_i} className="w-6 h-6" alt="" />
              ))}
            </div>
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
          onClick={() => {
            setAddItem(!additem);
          }}
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
            <div className="grid-col-1 w-2/3 items-center gap-2">
              <h1 className="text-slate-600 text-sm">Title : </h1>
              <input
                value={form?.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                className="w-full decoration-indigo-400 bg-indigo-100 border-indigo-500 px-2 py-1 rounded-md "
                type="text"
              />
            </div>
            <div className="grid-col-1 w-2/3 items-center gap-2">
              <h1 className="text-slate-600 text-sm">Time :</h1>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDateTimePicker
                  className="w-full  decoration-indigo-400 bg-indigo-100 border-indigo-500 px-2 rounded-md "
                  onChange={(value) => setForm({ ...form, time: value })}
                  defaultValue={
                    form?.time
                      ? dayjs(form?.time.toDate())
                      : setForm({ ...form, time: dayjs(Date()) })
                  }
                />
              </LocalizationProvider>
            </div>
            <div className="grid-col-1 w-2/3 items-center gap-2">
              <h1 className="text-slate-600 text-sm">Photos : </h1>
              <div className="flex flex-col items-center gap-2">
                {form?.photos?.map((it, i) => (
                  <div className="group w-full overflow-hidden flex flex-row border rounded-md border-indigo-400">
                    <input
                      value={it}
                      onChange={(e) =>
                        setForm((prevData) => ({
                          ...prevData,
                          photos: prevData.photos.map((img, j) =>
                            j === i ? e.target.value : img
                          ),
                        }))
                      }
                      className="w-full decoration-indigo-400 bg-indigo-100 border-indigo-500 px-2 py-1 rounded-md "
                    />
                    <TrashIcon
                      onClick={() => delImg(i)}
                      className="w-8 p-1 bg-red-400 border border-indigo-400 cursor-pointer hidden group-hover:flex -ml-10 text-white"
                    />
                    {form.photos[i] && (
                      <img
                        src={form.photos[i]}
                        className="w-8 h-8 my-auto border border-indigo-400"
                        alt="asd"
                      />
                    )}
                  </div>
                ))}
                <div
                  onClick={() => addImg()}
                  className="flex cursor-pointer flex-row bg-indigo-100 w-1/2 -mt-1.5 py-1 rounded-b-lg justify-center"
                >
                  <PlusCircleIcon className="w-6 text-green-400" />
                  Add
                </div>
              </div>
            </div>

            <div
              onClick={() => AddData()}
              className="flex flex-row items-center justify-between bg-gradient-to-br from-green-600 hover:to-green-500 cursor-pointer hover:from-green-600 to-green-400 px-6 my-2 mx-auto py-1 text-white rounded-full"
            >
              Save
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
  ) : (
    <Admin />
  );
}

export default GalleryConsole;
