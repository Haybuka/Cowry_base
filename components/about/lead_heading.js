import React from 'react'
import styles from '../../styles/about.module.css'

const LeadHead = ({index,text,text_style}) => {
  return (
    <h2 className={styles.lead_heading}>
      <span className={styles.lead_heading_span}> {index} </span>
      <span className={text_style === '' ? 'text-inherit' : text_style}>{text}</span>
    </h2>
  )
}

export default LeadHead