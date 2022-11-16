import { Disclosure, Tab } from "@headlessui/react";
import styles from "../../styles/faq.module.css";

import React from "react";

const FaqDisclosure = ({ title, body, post }) => {
  return (
    <>
      <Tab.Panel className="rounded-xl ">
        {post.posts.map((item, id) => (
         <Disclosure className="mb-4 bg-[#F8FAFF]" as="div" key={id}>
        {({ open }) => (
          <>
            <Disclosure.Button className={styles.disclosure_button}>
              <div className="flex items-center py-3">

                <section>
                  <h3>{item.title}</h3>
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
              {item.body}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
          
        ))}
      </Tab.Panel>
    </>
  );
};

export default FaqDisclosure;
{
  /* <Tab.Panel className="rounded-xl p-3 " >
    
</Tab.Panel> */
}


