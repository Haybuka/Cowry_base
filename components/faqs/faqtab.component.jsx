import React,{useState} from 'react'
import { Tab } from "@headlessui/react";
import TabList from "./faqtablist.component";
import TabPanels from "./faqtabpanels.component";
import styles from "../../styles/faq.module.css";


function FaqTab({ posts }) {
  return (
    <Tab.Group className={styles.tab_group} as="section">
      <TabList posts={posts} />
      <TabPanels posts={posts} />
    </Tab.Group>
  );
}

export default FaqTab;
