import React from 'react'
import Card from '../components/features/features_card'
import styles from '../styles/features.module.css'
import featureList from '../components/features/featurelist'
const Features = () => {
  
  return (
    <main className={styles.features_container}>
      <section className={styles.features_grid}>
      {featureList.map( (feature,id) => (
         <Card key={id} feature={feature}/>
      ))}
      
      </section>
    </main>
  )
}

export default Features