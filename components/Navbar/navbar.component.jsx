import React from "react";
import Link from "next/link";
import Dropdown from "./dropdown.component";
import styles from "../../styles/Nav.module.css";
const Navbar = () => {
  const navigation = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "about",
      name: "About",
      
    },
    {
      path: "features",
      name: "Features",
      layout : 'default',
      dropdown: [
        {
          title: "Merchant pay",
          img: "./images/navigation/features/merchant.svg",
          body: "Recieve money from your customers.",
        },
        {
          title: "Inter-state travel",
          img: "/images/navigation/features/interstate.svg",
          body: "Book transport buses between states.",
        },
        {
          title: "FLM Scheme",
          img: "/images/navigation/features/flm.svg",
          body: "Book transport buses between states.",
        },
        {
          title: "Ferry",
          img: "/images/navigation/features/ferry.svg",
          body: "Book transport buses between states.",
        },
      ],
    },
    {
      path: "services",
      name: "Services",
      layout : 'grid',
      dropdown: [
        {
          title: 'Commuters chat',
          img: './images/navigation/services/messages.svg',
          body: 'Chat with other commuters like you.'
        },
        {
          title: 'Inter-wallet transfer',
          img: '/images/navigation/services/wallet-money.svg',
          body: 'Transfer funds to other cowry wallet.'
        },
        {
          title: 'Bus charter',
          img: '/images/navigation/services/bus.svg',
          body: 'Charter buses for your events and outings'
      
        },
        {
          title: 'Airtime recharge',
          img: '/images/navigation/services/buy-crypto.svg',
          body: 'Buy airtime from any network provider.'
        },
        {
          title: 'Pay with phone',
          img: '/images/navigation/services/fi_smartphone.svg',
          body: 'Pay your bus fees right from your phone.'
      
        },
        {
          title: 'Redeem tickets',
          img: '/images/navigation/services/ticket-2.svg',
          body: 'Redeem your bus tickets with Cowry app'
      
        }
      ]
    },
    {
      path: "blog",
      name: "Blog",
      // dropdown: []
    },
    {
      path: "faqs",
      name: "FAQs",
      // dropdown: []
    },
  ];
  return (
    <header className={`${styles.header_nav}`}>
      <nav className={`${styles.nav}`}>
        <h1 className={styles.header_heading}>
          <Link href="/">Cowry</Link>
        </h1>
        <ul className={styles.nav_item}>
          {navigation.map((nav, id) => (
            <li className="mx-6 flex items-center" key={id}>
              <Link href={nav.path}>
                {/* Name of nav item goes here, a fix for the double click bug? */}
                <span className="inline-block mr-2">{nav.name}</span>
              </Link>
              {/* If drop down exists, this renders */}
              {nav?.dropdown && <Dropdown items={nav} />}
            </li>
          ))}
          <li className={`${styles.btn_download} ${styles.btn}`}>
            Download app
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
