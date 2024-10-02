"use client";
// custom compound components like shadcn ui

import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { transition } from "@/constants";

type MenuContextType = {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
};
type ClassNameAndChildren = {
  className?: string;
  children?: React.ReactNode;
};
interface MenuListType extends ClassNameAndChildren {
  variants?: Variants;
}
interface MenuType extends ClassNameAndChildren {
  id: "menu" | "dropdown";
}

const MenuContext = createContext<MenuContextType | null>(null);

const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("use the useMenu hook inside the menu context");
  }
  return context;
};

const Menu = ({ className, children, id }: MenuType) => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    if (id === "menu" && window.screen.width >= 1024) {
      setToggle(true);
    }
  }, [id]);
  const value = { toggle, setToggle };
  return (
    <MenuContext.Provider value={value}>
      <div className={className}>{children}</div>
    </MenuContext.Provider>
  );
};

const MenuButtonToggle = ({
  className,
  children,
  variants,
}: {
  className: string;
  children: React.ReactElement;
  variants?: Variants;
}) => {
  const { toggle, setToggle } = useMenu();
  return (
    <motion.button
      variants={variants}
      initial={"close"}
      animate={toggle ? "open" : "close"}
      transition={transition}
      className={className}
      onClick={() => setToggle((prevState) => !prevState)}
    >
      {cloneElement(children, { toggle })}
    </motion.button>
  );
};

const MenuOverlay = ({ className, variants }: MenuListType) => {
  const { toggle, setToggle } = useMenu();
  return (
    <AnimatePresence mode="wait">
      {toggle && (
        <motion.div
          onClick={() => setToggle(false)}
          initial={"close"}
          animate={"open"}
          exit={"close"}
          variants={variants}
          className={`fixed z-40 bg-black/50 backdrop-blur ${className}`}
        />
      )}
    </AnimatePresence>
  );
};

const MenuList = ({
  children,
  className,
  variants,
  ...props
}: MenuListType) => {
  const { toggle } = useMenu();
  return (
    <AnimatePresence mode="wait">
      {toggle && (
        <motion.ul
          {...props}
          variants={variants}
          className={className}
          initial={"close"}
          animate={"open"}
          exit={"close"}
        >
          {children}
        </motion.ul>
      )}
    </AnimatePresence>
  );
};

const MenuListItem = ({ className, children, variants }: MenuListType) => {
  return (
    <motion.li className={className} variants={variants}>
      {children}
    </motion.li>
  );
};

export { Menu, MenuButtonToggle, MenuList, MenuListItem, MenuOverlay, useMenu };
