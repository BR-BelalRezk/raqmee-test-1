"use client";

import { ChangeEvent, useEffect, useState } from "react";
import UploadPhoto from "./UploadPhoto";
import Title from "./Title";
import Description from "./Description";
import Category from "./Category";
import Price from "./Price";
import { useProducts } from "@/context/ProductContextProvider";
import { useMenu } from "../animation/Menu";

type formData = {
  photo: string;
  title: string;
  description: string;
  category: string;
  price: number;
};

export default function ModalForm() {
  const { setToggle } = useMenu();
  const { addProduct } = useProducts();
  const [form, setForm] = useState<formData>({
    photo: "",
    title: "",
    description: "",
    category: "",
    price: 0,
  });
  const [error, setError] = useState(false);
  const formError =
    !form.photo ||
    !form.title ||
    !form.description ||
    !form.category ||
    !form.price;
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formError) {
      setError(true);
      return;
    }
    addProduct({ ...form, name: form.title });
    setToggle(false);
  };
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files) {
      setForm((prevFromData) => ({
        ...prevFromData,
        photo: URL.createObjectURL(files[0]),
      }));
    }
  };
  useEffect(() => {
    if (!formError) {
      setError(false);
    }
  }, []);
  return (
    <form className="mt-10" onSubmit={handleSubmit}>
      <div className="flex flex-col items-start justify-start gap-5 w-full flex-nowrap">
        <UploadPhoto photo={form.photo} handleChange={handleImageChange} />
        <Title title={form.title} handleChange={handleChange} />
        <Description
          description={form.description}
          handleChange={handleChange}
        />
        <Category category={form.category} handleChange={handleChange} />
        <Price price={form.price} handleChange={handleChange} />

        <button
          type="submit"
          disabled={error}
          className=" bg-main disabled:bg-main/50 h-11 flex items-center justify-center w-full rounded-radius"
        >
          {error ? "Please fill all inputs" : "Upload item"}
        </button>
      </div>
    </form>
  );
}
