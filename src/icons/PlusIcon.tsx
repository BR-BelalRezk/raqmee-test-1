"use client";

import { FaPlus } from "react-icons/fa6";
import { motion } from "framer-motion";
import { transition } from "@/constants";

export default function PlusIcon({ toggle }: { toggle?: boolean }) {
  const animation = toggle ? { rotate: 45 } : {};
  return (
    <div className="w-full flex items-center justify-start gap-5">
      <motion.span animate={animation} transition={transition}>
        <FaPlus className="text-xl" />
      </motion.span>
      <span className=" capitalize font-semibold text-xl">sell item</span>
    </div>
  );
}
