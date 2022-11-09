import React from 'react'
import NavMobileItem from './navitem.component'
import styles from '../../../styles/Nav.module.css'
const MobileNav = ({navigation}) => {
  return (
    <ul className={styles.nav_item_mobile}>
          {navigation.map((nav, id) => (
            <NavMobileItem key={id} nav={nav} dropClass="relative"/>
          ))}
          <li className={`${styles.btn_download} ${styles.btn} text-center`}>
            Download app
          </li>
        </ul>
  )
}

export default MobileNav