import { useState } from "react";
import { Tab, Disclosure } from "@headlessui/react";
import Rating from "./rating.component";
import styles from '../../styles/Home.module.css'
let categories = [
  {
    id: 1,
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique dapibus adipiscing pulvinar ante aliquam tristique interdum cum dui. Sapien platea elit nec viverra nec sed felis. Sollicitudin vitae id enim in scelerisque. Maecenas velit id urna, accumsan posuere non egestas.",
    date: "5h ago",
    starCount: 4,
    shareCount: 2,
    name: "Adedoyin Precious",
  },
  {
    id: 2,
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique dapibus adipiscing pulvinar ante aliquam tristique interdum cum dui. Sapien platea elit nec viverra nec sed felis. Sollicitudin vitae id enim in scelerisque. Maecenas velit id urna, accumsan posuere non egestas.",
    date: "Jan 7",
    starCount: 29,
    shareCount: 16,
    name: "Precious Veronica",
  },
  {
    id: 3,
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique dapibus adipiscing pulvinar ante aliquam tristique interdum cum dui. Sapien platea elit nec viverra nec sed felis. Sollicitudin vitae id enim in scelerisque. Maecenas velit id urna, accumsan posuere non egestas.",
    date: "2d ago",
    starCount: 3,
    shareCount: 5,
    name: "Elesin oba",
  },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function IndexTab() {
  return (
    <section className=" py-6 md:py-10">
      <h2 className="text-center md:text-left text-xl md:text-2xl lg:text-4xl">
        What people are saying about Cowry
      </h2>
      <CowryTab />
      <CowryDisclosure />
    </section>
  );
}

function CowryTab() {
  return (
    <div className="w-full py-16 sm:px-0 hidden lg:block">
      <Tab.Group
        className={styles.tab_group}
        as="section"
      >
        <Tab.List className={styles.tab_list}>
          {categories.map((category) => (
            <Tab
              key={category.id}
              className={({ selected }) =>
                classNames(
                  " rounded-lg py-4 px-4 font-medium leading-5 ",
                  " focus:outline-none  my-4 shadow-md text-2xl flex items-center",
                  selected
                    ? "bg-base_highlight_bg text-white"
                    : "text-[#011B44] bg-white hover:bg-white/[0.12] hover:text-black"
                )
              }
            >
              <img src="./images/index/accordion/profile.svg" alt="" />
              <span className="ml-6">{category.name}</span>
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className={styles.tab_panel}>
          {categories.map((post, id) => (
            <Tab.Panel
              key={id}
              className={classNames(
                "rounded-xl bg-white p-3 ",
                "ring-white ring-opacity-60 ring-offset-2 focus:outline-none focus:ring-2 hover:bg-none"
              )}
            >
              <section
                key={post.id}
                className="relative rounded-md p-3 bg-white "
              >
                <Rating count={post.starCount} />
                <h3 className="text-md font-medium leading-8 text-gray-600 mt-4">
                  {post.body}
                </h3>
              </section>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

const CowryDisclosure = () => {
  return (
    <div className="w-full py-4 block lg:hidden">
      <div className="mx-auto w-full rounded-md bg-white p-2">
        {categories.map((category, id) => (
          <Disclosure key={id} className="mb-4" as="div">
            {({ open }) => (
              <>
                <Disclosure.Button className={styles.disclosure_button}>
                  <div className="flex items-center">
                    <span className="inline-block w-[40px] h-[40px] mr-4">
                      <img
                        src="./images/index/accordion/blueprofile.svg"
                        alt=""
                        className="w-full h-full"
                      />
                    </span>
                    <section>
                      <h3>{category.name}</h3>
                      <Rating count={category.starCount} sizing="w-4 h-4" />
                    </section>
                  </div>
                  <div className="h-[15px] w-[15px]">
                    <img
                      src="./images/common/arrow.svg"
                      className="w-full h-full"
                    />
                  </div>
                </Disclosure.Button>
                <Disclosure.Panel className={styles.disclosure_panel}>
                  {category.body}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
};
