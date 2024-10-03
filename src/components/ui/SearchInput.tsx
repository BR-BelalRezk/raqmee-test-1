"use client";
import { useProducts } from "@/context/ProductContextProvider";
import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { motion } from "framer-motion";

export default function SearchInput({ className }: { className: string }) {
  const { setSearchQuery, searchQuery } = useProducts();
  const [searchValue, setSearchValue] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchQuery(searchValue);
  };
  useEffect(() => {
    if (!searchValue) {
      setSearchQuery("");
    }
  }, [searchValue]);
  return (
    <form onSubmit={handleSubmit} className=" relative w-full">
      <input
        value={searchValue}
        type="search"
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="search"
        className={`${className} relative z-40`}
      />
      <motion.button
        initial={{ scale: 1 }}
        whileTap={{ scale: 0.8, color: "#E5E5E5" }}
        animate={
          !searchValue
            ? {
                scale: [1.2, 1, 1.2],
                transition: {
                  type: "tween",
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 1.5,
                },
              }
            : {}
        }
        type="submit"
        className="absolute right-5 block z-50 top-[20%] text-3xl text-main"
      >
        <IoSearch />
      </motion.button>
    </form>
  );
}
