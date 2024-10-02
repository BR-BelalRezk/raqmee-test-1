"use client";

import { img_1, img_2, img_3, img_4 } from "@/assets";
import { filter, sort } from "@/constants";
import { StaticImageData } from "next/image";
import { createContext, useContext, useEffect, useState } from "react";

export type Product = {
  photo: string | StaticImageData;
  name: string;
  description: string;
  category: string;
  price: number;
};

type ProductContextType = {
  categoryFilter: (typeof filter)[number]["action"];
  sortOption: (typeof sort)[number]["action"];
  products: Product[];
  searchQuery: string;
  addProduct: (product: Product) => void;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  setCategoryFilter: React.Dispatch<
    React.SetStateAction<(typeof filter)[number]["action"]>
  >;
  setSortOption: React.Dispatch<
    React.SetStateAction<(typeof sort)[number]["action"]>
  >;
};
const ProductContext = createContext<ProductContextType | null>(null);

export default function ProductContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const constantProducts = [
    {
      photo: img_1,
      name: "black jeans",
      category: "kids",
      price: 30,
      description: "women black jeans",
    },
    {
      photo: img_2,
      name: "jacket",
      category: "men",
      price: 45,
      description: "men white jacket",
    },
    {
      photo: img_3,
      name: "hoodie",
      category: "women",
      price: 50,
      description: "brown women hoodie",
    },
    {
      photo: img_4,
      name: "leather",
      category: "men",
      price: 100,
      description: "black leather men jacket",
    },
  ];
  const [products, setProducts] = useState<Product[]>(constantProducts);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [sortOption, setSortOption] = useState("name-asc");

  useEffect(() => {
    const savedProducts = localStorage.getItem("products");
    if (savedProducts) {
      const prodcutsArray = JSON.parse(savedProducts);
      setProducts(prodcutsArray);
    }
  }, []);

  const addProduct = (product: Product) => {
    const newProducts = [...products, product];
    setProducts(newProducts);
    localStorage.setItem("products", JSON.stringify(newProducts));
  };

  return (
    <ProductContext.Provider
      value={{
        sortOption,
        categoryFilter,
        products,
        addProduct,
        searchQuery,
        setSearchQuery,
        setCategoryFilter,
        setSortOption,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("use the useProducts hook within the prodcuts context");
  }
  return context;
};
