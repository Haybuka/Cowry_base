import Link from "next/link";
import { useContext } from "react";
import { NavContext } from "../../../context/navcontext";

const NavMobileItem = ({ nav ,dropClass,}) => {
    const { view, handleViewClick} = useContext(NavContext);

  return (
    <li className="mx-4 xl:mx-6 flex items-center" onClick={handleViewClick}>
   
        <Link href={nav.path} >
          <span className="inline-block mr-2 dropdown">{nav.name}</span>
        </Link>

    </li>
  );
};

export default NavMobileItem;
