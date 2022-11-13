import React from "react";
import {useRouter} from 'next/router'
import styles from '../../styles/services.module.css'
const Card = ({details}) => {
    const {id,body, title, img,layout="flex-row",imgWidth="w-[200px] h-[200px] md:h-auto md:w-[350px] md:pl-20 2xl:pl-[100px] "} = details
  const router = useRouter()
  const path = router.asPath.includes(`${id}`);
  console.log(imgWidth, 'hi ')
  return (
    <section className={ `${styles.services_card} ${layout}`} id={id}>
      <div className={ imgWidth  ? `mx-0 w-auto ${imgWidth}` : `mx-0 w-auto`}>
        <img alt="" src={img} className="w-full" />
      </div>
      <aside className="py-2 md:py-0 md:px-4 md:w-[500px] 2xl:pr-[100px] md:my-5 ">
        <h3 className="text-2xl my-3 md:my-6 font-semibold">{title}</h3>
        <p className="text-lg">
         {body}
        </p>
      </aside>
    </section>
  );
};

export default Card;
