import React, { useContext } from "react";
import Link from "next/link";
import { Menu } from "@headlessui/react";
import DropdownLayout from "./droplayout.component";
import { NavContext } from "../../context/navcontext";
const Dropdown = ({ items, dropClass = "relative ml-2" }) => {
  const { view } = useContext(NavContext);
  const { dropdown, path, layout = "default", name } = items;
  const [open, setOpen] = React.useState(false);
  let mode = view ? 'mobile' : 'desktop'

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <Menu className={dropClass} as="aside">
      {({ open: open }) => (
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
