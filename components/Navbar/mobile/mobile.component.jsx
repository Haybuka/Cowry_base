import React from "react";
import NavMobileItem from "./navitem.component";
import styles from "../../../styles/Nav.module.css";
import Link from "next/link";
const MobileNav = ({ navigation }) => {
  return (
    <ul className={styles.nav_item_mobile}>
      {navigation.map((nav, id) => (
        <NavMobileItem key={id} nav={nav} dropClass="relative" />
      ))}
      <li
        className={`${styles.btn_download} ${styles.btn} text-center`}
        onClick={() => alert(navigator.platform, "hi", navigator.oscpu)}
      >
        <Link target="_blank" href="">
          Download app
        </Link>
      </li>
    </ul>
  );
};

export default MobileNav;
