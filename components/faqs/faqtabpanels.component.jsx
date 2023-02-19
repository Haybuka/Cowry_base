import { Tab } from "@headlessui/react";
import FaqDisclosure from "./disclosure.component";
import styles from "../../styles/faq.module.css";

const TabPanels = ({ posts }) => {
  return (
    <Tab.Panels className={styles.tab_panel}>
      {posts?.map((items, id) => (
        <FaqDisclosure key={id} post={items} />
      ))}
    </Tab.Panels>
  );
};

export default TabPanels;
