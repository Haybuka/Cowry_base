import React from 'react'
import LeadHead from './lead_heading'
import styles from '../../styles/about.module.css'
const AboutOne = () => {
  return (
    <section className={`${styles.about_one} ${styles.about_container}`}>
      <LeadHead index="01" text="About us" />
    <div className={styles.about_one_div}>
      <aside className='flex justify-center w-[250px] md:w-auto mx-auto'>
        <img src='/images/common/iPhone 14.svg' alt=" " className='h-full w-full'/>          
      </aside>
      <article className='lg:w-3/6'>
        <h3 className={styles.about_one_h3}>
          The journey to cashless transactions. Cowry makes micro-payments easier and faster.
        </h3>
        <p className={styles.about_one_p}>
          This initiative will help reduce cash transactions in transport operation in order to protect stakeholders’ investment in the transport sector, aid contact tracing, and protect commuters on their daily trips around Lagos.
        </p>
      </article>
    </div>
  </section>
  )
} 

export default AboutOne