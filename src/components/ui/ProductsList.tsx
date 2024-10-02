"use client";

import { useProducts } from "@/context/ProductContextProvider";
import Product from "./Product";
import { useState } from "react";
import Pagination from "./Pagination";

export default function ProductsList() {
  const { products, categoryFilter, sortOption, searchQuery } = useProducts();
  const [currentPage, setCurrentPage] = useState(1);
  const searchProducts = products.filter((product) =>
    searchQuery === ""
      ? products
      : product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.includes(searchQuery.toLowerCase())
  );
  const categoryProducts = searchProducts.filter((product) =>
    categoryFilter === "all" ? products : product.category === categoryFilter
  );
  const sortedProducts = categoryProducts.sort((a, b) => {
    if (sortOption === "name-asc") return a.name.localeCompare(b.name);
    if (sortOption === "name-desc") return b.name.localeCompare(a.name);
    if (sortOption === "price-low-high") return a.price - b.price;
    if (sortOption === "price-high-low") return b.price - a.price;
    return 0;
  });
  const itemsPerPage = 4;
  const totalItems = sortedProducts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = sortedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className="flex w-full my-10 flex-col gap-10">
      <div className="flex items-center justify-center gap-5 lg:justify-start flex-wrap xl:flex-nowrap  w-full">
        {currentProducts.map((product, index) => (
          <Product index={index} key={product.name} product={product} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
      />
    </div>
  );
}
