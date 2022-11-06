import React from "react";
import styles from '../../styles/services.module.css'
const Card = ({details}) => {
    const {body, title, img,layout="flex-row",imgWidth="w-[200px] md:w-[350px] md:pl-20 2xl:pl-[100px] "} = details
  return (
    <section className={`${styles.services_card} ${layout}`}>
      <div className={`mx-0 w-auto ${imgWidth}`}>
        <img alt="" src={img} className="w-full" />
      </div>
      <aside className="py-2 md:py-0 md:w-[500px] 2xl:pr-[100px] md:my-5 ">
        <h3 className="text-2xl my-3 md:my-6 font-semibold">{title}</h3>
        <p className="text-lg">
         {body}
        </p>
      </aside>
    </section>
  );
};

export default Card;