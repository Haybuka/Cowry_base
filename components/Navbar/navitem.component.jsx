import Link from "next/link";
import Dropdown from "./dropdown.component";

const NavItem = ({ nav ,dropClass,mode="desktop"}) => {

  return (
    <li className="mx-4 xl:mx-6 flex items-center" >
      {(nav?.dropdown) ? (
        
        <Dropdown items={nav} dropClass={dropClass}/>
      ) : (
        <Link href={nav.path} >
          {/* Name of nav item goes here, a fix for the double click bug? */}
          <span className="inline-block mr-2 dropdown">{nav.name}</span>
        </Link>
      )}
    </li>
  );
};

export default NavItem;
