import Link from 'next/link'
import React from 'react'
import Section from './footer.section'
import styles from '../../styles/footer.module.css'
const Footer = () => {
  const features = ['Merchant pay', 'Charter', 'Airtime recharge', 'Consumers chat']
  const company = ['About', 'Services', 'Blog', 'FAQs']
  const contact = ['me@touchandpay.me', 'Features']
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_head}>
        <h3 className={styles.footer_heading}>Cowry</h3>
        <Section text="Features" items={features}/>
        <Section text="Company" items={company}/>
        <Section text="Contact" items={contact}/>

      </div>
      <aside className={styles.footer_links}>
           <p className='flex text-[#616161] text-lg'>
              <span> &copy;</span>
              <span className='inline-block mx-2'> 2022</span>
              <span> Cowry</span>
           </p>
           <ul>
              <li></li>
           </ul>
      </aside>
    </footer>
  )
}

export default Footer