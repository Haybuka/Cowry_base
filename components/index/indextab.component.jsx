import { useState } from "react";
import { Tab, Disclosure } from "@headlessui/react";
import Rating from "./rating.component";
import styles from "../../styles/Home.module.css";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function IndexTab({ testimony }) {
  // console.log(testimony);
  const testimonies = testimony.map((testimony, id) => ({
    ...testimony?.attributes,
    starCount: Math.max(Math.floor(Math.random() * 5) + 1, 3),
    shareCount: Math.max(Math.floor(Math.random() * 5) + 1, 3),
    id,
  }));

  console.log(testimonies);
  return (
    <section className=" py-6 md:py-10">
      <h2 className="text-center md:text-left text-xl md:text-2xl lg:text-4xl">
        What people are saying about Cowry
      </h2>
      <CowryTab categories={testimonies} />
      <CowryDisclosure categories={testimonies} />
    </section>
  );
}

function CowryTab({ categories }) {
  return (
    <div className="w-full py-16 sm:px-0 hidden lg:block">
      <Tab.Group className={styles.tab_group} as="section">
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
              <span className="ml-6">{category.username}</span>
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
                  {post.message}
                </h3>
              </section>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

const CowryDisclosure = ({ categories }) => {
  return (
    <div className="w-full py-4 block lg:hidden">
      <div className="mx-auto w-full rounded-md bg-white p-2">
        {categories.map((category, id) => (
          <Disclosure key={id} className="mb-4" as="div">
            {({ open }) => (
              <>
                <Disclosure.Button className={styles.disclosure_button}>
                  <div className="flex items-center py-3">
                    <span className="inline-block w-[40px] h-[40px] mr-4">
                      <img
                        src="./images/index/accordion/blueprofile.svg"
                        alt=""
                        className="w-full h-full"
                      />
                    </span>
                    <section>
                      <h3>{category.username}</h3>
                      <Rating count={category.starCount} sizing="w-4 h-4" />
                    </section>
                  </div>
                  <div className="h-[15px] w-[15px]">
                    {open && (
                      <img
                        src="./images/common/arrowup.svg"
                        className="w-full h-full"
                      />
                    )}
                    {!open && (
                      <img
                        src="./images/common/arrow.svg"
                        className="w-full h-full"
                      />
                    )}
                  </div>
                </Disclosure.Button>
                <Disclosure.Panel className={styles.disclosure_panel}>
                  {category.message}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
};
