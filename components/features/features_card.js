import React from 'react'
import styles from '../../styles/features.module.css'
const Card = ({ feature }) => {
    const { img, title, body, invert } = feature
    return (
        <div className={invert ? `${styles.features_card} ${styles.features_card_invert}` : `${styles.features_card} ${styles.features_card_default}`}>
            <div className={styles.features_card_img_div}>
                <img src={img} className='w-full' />
            </div>
            <h3 className={styles.features_card_heading}>{title}</h3>
            <p className='mb-6'>{body}</p>
        </div>
    )
}

export default Card