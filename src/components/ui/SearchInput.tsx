"use client";
import { useProducts } from "@/context/ProductContextProvider";
import { IoSearch } from "react-icons/io5";

export default function SearchInput({ className }: { className: string }) {
  const { setSearchQuery, searchQuery } = useProducts();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className=" relative w-full">
      <input
        value={searchQuery}
        type="search"
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="search"
        className={`${className} relative z-40`}
      />
      <button className=" absolute right-5 block z-50 top-[15%] text-3xl">
        <IoSearch />
      </button>
    </form>
  );
}
