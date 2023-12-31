import { ArrowLeftOnRectangleIcon, HomeIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import logo from "../images/sagmayam-logo.svg";
export const HomeButton = () => {
  const navigate = useNavigate();
  return (
    <img
      alt=""
      src={logo}
      onClick={() => navigate("/")}
      className="w-10 cursor-pointer hover:text-green-400  text-[#6f9e27]"
    />
  );
};
export const BackButton = () => {
  const navigate = useNavigate();
  return (
    <ArrowLeftOnRectangleIcon
      onClick={() => navigate(-1)}
      className="w-8 cursor-pointer hover:text-red-400  text-[#ca1c25]"
    />
  );
};
