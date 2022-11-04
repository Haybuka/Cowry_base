import React from "react";
import { Menu } from "@headlessui/react";
import DropItem from "./dropitem.component";
import styles from "../../styles/Nav.module.css";
const DropdownLayout = ({dropdown,layout="default"}) => {
  return (
    <Menu.Items className={layout == "grid" ? `${styles.nav_drop_menu_items} ${styles.nav_drop_grid}` : `${styles.nav_drop_menu_items} ${styles.nav_drop_default}`} as="div">
      {dropdown?.map((item, id) => (
        <Menu.Item key={id} className={styles.nav_drop_menu_item} as="div">
          <DropItem item={item} />
        </Menu.Item>
      ))}
    </Menu.Items>
  );
};

export default DropdownLayout;
