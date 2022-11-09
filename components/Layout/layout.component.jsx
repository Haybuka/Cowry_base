import React, { useContext } from "react";
import Navbar from "../Navbar/navbar.component";
import Download from "../Download/download.component";
import Footer from "../Footer/footer.component";
import { NavContext } from "../../context/navcontext";
const Layout = ({ children }) => {
  const { view, handleViewClick } = useContext(NavContext);

  return (
    <div className="">
      <Navbar />
      <div className={view && "hidden"}>
        {children}

        <Download />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
