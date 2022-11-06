import React from 'react'
import styles from '../../styles/about.module.css'

const LeadHead = ({index,text,text_style}) => {
  return (
    <h2 className={styles.lead_heading}>
      <span className={styles.lead_heading_span}> {index} </span>
      <p className={text_style === '' ? 'text-inherit my-4 md:my-0 ' : text_style}>{text}</p>
    </h2>
  )
}

export default LeadHead