import { useState } from "react";
import Link from "next/link";
import { Tab } from "@headlessui/react";
import blogpostData from "./fakepost";
import Post from "./post.component";
import styles from "../../styles/skeleton.module.css";
import BlogError from "../skeleton/blog.component";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ErrorTab() {
  const categoriesTab = ["All", "Business", "Startup", "Products"];

  return (
    <div className="w-full px-2 ">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl ">
          {categoriesTab?.map((blog, id) => (
            <Tab
              key={id}
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 text-sm font-medium leading-5 text-blue-700",
                  "ring-white ring-opacity-60 ring-offset-2 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-transparent border-b-2 border-blue-700 shadow"
                    : "text-[#A0A0A0] hover:bg-white/[0.12] hover:text-[#A0A0A0]"
                )
              }
            >
              {blog}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {categoriesTab.map((tab, id) => (
            <Tab.Panel
              key={id}
              className={classNames("rounded-xl bg-white md:p-3 my-8", "")}
            >
              <ul>
                <li>
                  <BlogError />
                </li>
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

// let [categories] = useState({
//   All: [
//     {
//       title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//       body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan sagittis a diam cras gravida. Adipiscing eget cursus amet velit.",
//       date: "DECEMBER 13, 2021",
//       img: "./images/blog/Rectangle 688.svg",
//       id: 1,
//     },
//     {
//       title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//       body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan sagittis a diam cras gravida. Adipiscing eget cursus amet velit.",
//       date: "DECEMBER 13, 2021",
//       img: "./images/blog/Rectangle 698.svg",
//       id: 2,
//     },
//   ],
//   Business: [
//     {
//       title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//       body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan sagittis a diam cras gravida. Adipiscing eget cursus amet velit.",
//       date: "DECEMBER 13, 2021",
//       img: "./images/blog/Rectangle 699.svg",
//       id: 3,
//     },
//   ],
//   Products: [
//     {
//       title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//       body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan sagittis a diam cras gravida. Adipiscing eget cursus amet velit.",
//       date: "DECEMBER 13, 2021",
//       img: "./images/blog/Rectangle 698.svg",
//       id: 2,
//     },
//   ],
//   Startup: [
//     {
//       title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//       body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan sagittis a diam cras gravida. Adipiscing eget cursus amet velit.",
//       date: "DECEMBER 13, 2021",
//       img: "./images/blog/Rectangle 698.svg",
//       id: 2,
//     },
//     {
//       title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//       body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan sagittis a diam cras gravida. Adipiscing eget cursus amet velit.",
//       date: "DECEMBER 13, 2021",
//       img: "./images/blog/Rectangle 699.svg",
//       id: 3,
//     },
//   ],
// });
