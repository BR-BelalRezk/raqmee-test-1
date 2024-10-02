import { filter, sort, transition } from "@/constants";
import {
  Menu,
  MenuButtonToggle,
  MenuList,
  MenuListItem,
} from "../animation/Menu";
import HamburgerIcon from "../../icons/HamburgerIcon";
import SearchInput from "./SearchInput";
import DropDownMenu from "./DropDownMenu";

export default function ActionMenu() {
  return (
    <Menu className="relative lg:w-full" id="menu">
      <MenuButtonToggle
        variants={{
          open: {
            backgroundColor: "#fff",
          },
          close: {
            backgroundColor: "#D9F99D",
          },
        }}
        className="relative lg:hidden flex flex-col gap-1 bg-main items-center justify-center z-50 size-10  rounded-full"
      >
        <HamburgerIcon />
      </MenuButtonToggle>
      <MenuList
        variants={{
          open: {
            translateX: 0,
            transition: {
              ...transition,
              delayChildren: 0.5,
              staggerChildren: 0.3,
            },
          },
          close: {
            translateX: "100%",
            transition: transition,
          },
        }}
        className="fixed right-0 top-0 bottom-0 lg:relative lg:flex-1 lg:right-auto lg:top-auto lg:h-auto lg:translate-x-0 lg:translate-y-0 lg:bg-transparent w-[75dvw] h-dvh bg-main/90 backdrop-blur z-40 flex items-center justify-center flex-col gap-5 lg:flex-row lg:gap-0 lg:w-full lg:justify-between"
      >
        <MenuListItem
          className=""
          variants={{
            open: {
              opacity: 1,
              y: 0,
              transition: { type: "spring", stiffness: 250, damping: 25 },
            },
            close: { opacity: 0, y: 25, transition: { duration: 0.5 } },
          }}
        >
          <SearchInput className="outline-none lg:w-96 lg:hover:outline-main lg:focus:outline-main transition duration-500 w-60 h-11 z-50 relative p-2.5 border border-border rounded-radius" />
        </MenuListItem>
        <MenuListItem
          className=""
          variants={{
            open: {
              opacity: 1,
              y: 0,
              transition: { type: "spring", stiffness: 250, damping: 25 },
            },
            close: { opacity: 0, y: 25, transition: { duration: 0.5 } },
          }}
        >
          <DropDownMenu text="filter" items={filter} />
        </MenuListItem>
        <MenuListItem
          className=""
          variants={{
            open: {
              opacity: 1,
              y: 0,
              transition: { type: "spring", stiffness: 250, damping: 25 },
            },
            close: { opacity: 0, y: 25, transition: { duration: 0.5 } },
          }}
        >
          <DropDownMenu text="sort by" items={sort} />
        </MenuListItem>
      </MenuList>
    </Menu>
  );
}
