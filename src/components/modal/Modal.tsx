import { transition } from "@/constants";
import {
  Menu,
  MenuButtonToggle,
  MenuList,
  MenuOverlay,
} from "../animation/Menu";
import PlusIcon from "../../icons/PlusIcon";
import { FaPlus } from "react-icons/fa6";
import ModalForm from "./ModalForm";

export default function Modal() {
  return (
    <Menu className="" id="dropdown">
      <MenuButtonToggle className="flex items-center justify-center h-11 w-40 bg-main p-2.5 rounded-radius">
        <PlusIcon />
      </MenuButtonToggle>
      <MenuOverlay
        className="inset-0 z-[9999]"
        variants={{
          open: {
            width: "100vw",
            height: "100vh",
            transition: { ...transition, duration: 0.3 },
          },
          close: {
            width: "0",
            height: "0",
            transition: { ...transition, duration: 1 },
          },
        }}
      />
      <MenuList
        variants={{
          open: {
            opacity: 100,
            scale: 1,
            rotate: 0,
            translateX: "-50%",
            translateY: "-50%",
            transition,
          },
          close: {
            opacity: 0,
            scale: 0,
            rotate: 45,
            translateX: "-50%",
            translateY: "-50%",
            transition,
          },
        }}
        className=" fixed z-[9999] overflow-y-scroll hide_scrollbar bg-white w-[300px] p-3 sm:p-5 sm:w-[500px] rounded-lg h-[80dvh] top-1/2 left-1/2"
      >
        <MenuButtonToggle className="absolute top-3 right-3">
          <FaPlus className="rotate-45 text-xl" />
        </MenuButtonToggle>
        <h3 className=" text-3xl font-medium text-[#171717]">Sell an item</h3>
        <ModalForm />
      </MenuList>
    </Menu>
  );
}
