import React from "react";
import Link from "next/link";
import { Menu } from "@headlessui/react";
import DropdownLayout from "./droplayout.component";
const Dropdown = ({ items}) => {
  const { dropdown, path,layout="default" } = items;
  return (
    <Menu className="relative pt-2 ml-2" as="aside">
      <Menu.Button>
        <img src="./images/navigation/arrow.svg" />
      </Menu.Button>
      <DropdownLayout dropdown={dropdown} layout={layout}/>
    </Menu>
  );
};

export default Dropdown;
