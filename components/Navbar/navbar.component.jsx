import React from "react";
import Link from "next/link";
import NavItem from "./navitem.component";
import navigation from "./navigation";
import styles from "../../styles/Nav.module.css";
const Navbar = () => {
 
  return (
    <header className={`${styles.header_nav}`}>
      <nav className={`${styles.nav}`}>
        <h1 className={styles.header_heading}>
          <Link href="/">Cowry</Link>
        </h1>
        <ul className={styles.nav_item}>
          {navigation.map((nav, id) => (
            <NavItem key={id} nav={nav}/>
          ))}
          <li className={`${styles.btn_download} ${styles.btn}`}>
            Download app
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
