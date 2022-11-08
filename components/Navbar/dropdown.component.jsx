import React from "react";
import Link from "next/link";
import { Menu } from "@headlessui/react";
import DropdownLayout from "./droplayout.component";
const Dropdown = ({ items }) => {
  const { dropdown, path, layout = "default", name } = items;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <Menu className="relative ml-2" as="aside">
      {({ open:open }) => (
        <>
          <Menu.Button as="div" className="flex items-center">
            <button className="mr-2">{name}</button>
            <img src="./images/navigation/arrow.svg" />
          </Menu.Button>
          <DropdownLayout
            dropdown={dropdown}
            layout={layout}
            handleOpen={handleOpen}
          />
        </>
      )}
    </Menu>
  );
};

export default Dropdown;
