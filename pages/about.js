import Head from 'next/head'
import React from 'react'
import AboutOne from '../components/about/about_one'
import AboutTwo from '../components/about/about_two'
import styles from '../styles/about.module.css'
const About = () => {
  return (
    <>
      <Head>
        <title>About | Cowry</title>
      </Head>
      <main className=''>
        <AboutOne />
        <AboutTwo />
      </main>
    </>
  )
}

export default About