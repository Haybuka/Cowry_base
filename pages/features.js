import React from 'react'
import Card from '../components/features/features_card'
import styles from '../styles/features.module.css'
import featureList from '../components/features/featurelist'
import Head from 'next/head'
const Features = () => {

  return (
    <>
      <Head>
        <title>Features | Cowry</title>
      </Head>

      <main className={styles.features_container}>
        <section className={styles.features_grid}>
          {featureList.map((feature, id) => (
            <Card key={id} feature={feature} id={id} />
          ))}

        </section>
      </main>
    </>
  )
}

export default Features