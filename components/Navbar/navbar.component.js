import React from 'react'
import Link from 'next/link'
import styles from '../../styles/Nav.module.css'
const Navbar = () => {
  const navigation = [{
    path:'/',
    name : 'Home',
  },{
    path:'about',
    name : 'About',
  }, {
    path:'features',
    name : 'Features',
  }, {
    path:'services',
    name : 'Services',
  }, {
    path:'blog',
    name : 'Blog',
  }, {
    path:'faqs',
    name : 'FAQs',
  }]
  return (
    <header className={`${styles.header_nav}`}>
      <nav className={`${styles.nav}`}>
        <h1 className={styles.header_heading}>
          <Link href="/">
            Cowry
          </Link>
        </h1>
        <ul className={styles.nav_item}>
          {navigation.map((nav, id) => (
            <Link key={id} href={nav.path}>
              <li className="mx-6">
                {nav.name}
              </li>
            </Link>

          ))}
          <li className={`${styles.btn_download} ${styles.btn}`}>
            Download app
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar