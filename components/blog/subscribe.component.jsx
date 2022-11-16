import React from "react";
import styles from "../../styles/blogs.module.css";
const Subscribe = () => {
  return (
    <section className={styles.subscribe_blog}>
      <h4 className="text-center my-[80px] md:my-[150px] text-[30px] md:text-3xl text-white 2xl:text-4xl font-semibold">
        Subscribe to our newsletter
      </h4>
      <form>
        <label className="rounded-lg bg-[#0B46A5] text-white py-3 flex items-center">
          <div className="block md:mx-4">
             <span className="block md:w-6 md:h-6 mr-4">
            <img alt=" " src="./images/common/message.png" className="w-full"/>

             </span>
          </div>
          <input
            type="email"
            name="email"
            placeHolder="Enter your email"
            className="bg-transparent text-white outline-none overflow-hidden w-full px-2"
          />
        </label>
        <button className="block py-3 rounded-lg bg-white my-4 mb-[50px] w-full text-base_highlight">
          Subscribe
        </button> 
      </form>
    </section>
  );
};

export default Subscribe;
