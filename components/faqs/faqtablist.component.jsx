import { Tab } from "@headlessui/react";
import styles from "../../styles/faq.module.css";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const TabList = ({ posts }) => {
  return (
    <Tab.List className={styles.tab_list}>
      {posts.map((category, id) => (
        <Tab
          key={id}
          className={({ selected }) =>
            classNames(
              "py-3 px-2 font-medium leading-5 ",
              " focus:outline-none mb-3 md:mb-5 text-lg md:text-xl flex items-center md:w-auto",
              selected
                ? "text-base_highlight lg:border-r-4 lg:border-base_highlight"
                : "text-[#011B44]"
            )
          }
        >
          <span className="inline-block w-[180px] md:w-auto mx-auto">
            {category.labels}
          </span>
        </Tab>
      ))}
    </Tab.List>
  );
};

export default TabList;
