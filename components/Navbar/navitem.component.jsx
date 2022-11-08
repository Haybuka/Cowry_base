import Link from "next/link";
import React from "react";
import Dropdown from "./dropdown.component";

const NavItem = ({ nav }) => {
  return (
    <li className="mx-6 flex items-center">
      {nav?.dropdown ? (
        <Dropdown items={nav} />
      ) : (
        <Link href={nav.path} >
          {/* Name of nav item goes here, a fix for the double click bug? */}
          <span className="inline-block mr-2">{nav.name}</span>
        </Link>
      )}
    </li>
  );
};

export default NavItem;
