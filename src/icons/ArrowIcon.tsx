"use client";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { motion } from "framer-motion";
import { transition } from "@/constants";

export default function ArrowIcon({
  text,
  toggle,
}: {
  toggle?: boolean;
  text: string;
}) {
  return (
    <div className="flex items-center justify-between w-full">
      <span className="text-xl font-semibold capitalize">{text}</span>
      <motion.span
        variants={{
          open: { rotate: 180, transition },
          close: { rotate: 0, transition },
        }}
        animate={toggle ? "open" : "close"}
      >
        <MdOutlineKeyboardArrowDown />
      </motion.span>
    </div>
  );
}
