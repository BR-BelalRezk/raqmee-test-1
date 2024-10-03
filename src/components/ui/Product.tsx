import { Product as productType } from "@/context/ProductContextProvider";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Product({
  product,
  index,
}: {
  index: number;
  product: productType;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 100, y: 0, zIndex: 10 }}
      transition={{ duration: 0.5, delay: index * 0.1 + 1 }}
      className=" border-border rounded-radius border relative z-10"
    >
      <figure className="size-[300px]">
        <Image
          src={product.photo}
          alt="Product image"
          width={50}
          height={50}
          quality={100}
          priority
          className="size-full object-cover"
        />
      </figure>
      <div className="w-full p-2.5 border-t border-border">
        <div className="flex items-center justify-between w-full">
          <p className=" capitalize text-[#171717] text-xl font-bold">
            {product.name}
          </p>
          <p className=" capitalize text-[#171717] font-medium">
            {product.category}
          </p>
        </div>
        <p className="text-[#171717] font-semibold text-lg">£{product.price}</p>
        <p>{product.description}</p>
      </div>
    </motion.div>
  );
}
