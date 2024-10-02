"use client";

import { filter, sort } from "@/constants";
import {
  Menu,
  MenuButtonToggle,
  MenuList,
  MenuListItem,
} from "../animation/Menu";
import ArrowIcon from "../../icons/ArrowIcon";
import { useProducts } from "@/context/ProductContextProvider";

export default function DropDownMenu({
  text,
  items,
}: {
  text: "filter" | "sort by";
  items: typeof sort | typeof filter;
}) {
  const { setSortOption, setCategoryFilter } = useProducts();
  const handleClick = (action: string) => {
    if (text === "sort by") {
      setSortOption(action);
    } else {
      setCategoryFilter(action);
    }
  };
  return (
    <Menu id="dropdown" className=" relative z-50">
      <MenuButtonToggle className="w-60 bg-white h-11 p-2.5 rounded-radius relative z-30 lg:border lg:border-border">
        <ArrowIcon text={text} />
      </MenuButtonToggle>
      <MenuList
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          close: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
        className="bg-white/90 backdrop-blur capitalize lg:border lg:border-border lg:rounded-[10px] lg:shadow-lg  w-60 relative lg:absolute lg:top-12 top-2.5 z-[9999]  flex flex-col items-start p-5 justify-center gap-5"
      >
        {items.map((item) => (
          <MenuListItem
            className="w-full"
            variants={{
              open: {
                opacity: 1,
                y: 0,
                transition: { type: "spring", stiffness: 300, damping: 24 },
              },
              close: { opacity: 0, y: 20, transition: { duration: 0.2 } },
            }}
            key={item.label}
          >
            <span
              className="w-full block cursor-pointer"
              onClick={() => handleClick(item.action)}
            >
              {item.label}
            </span>
          </MenuListItem>
        ))}
      </MenuList>
    </Menu>
  );
}
