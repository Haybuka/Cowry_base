import React from 'react'
import {motion} from 'framer-motion'
import styles from '../../styles/features.module.css'
const Card = ({ feature }) => {
    const { img, title, body, invert,id } = feature
    return (
        <motion.div 
        initial = {{opacity: 0, translateX: id%2 === 0 ? -50 : 50, translateY:-50}}
        animate={{opacity:1,translateX:0,translateY:0}}
        transition={{duration:0.3,delay:id * 0.2}}
        className={invert ? `${styles.features_card} ${styles.features_card_invert}` : `${styles.features_card} ${styles.features_card_default}`}>
            <div className={styles.features_card_img_div}>
                <img src={img} className='w-full' />
            </div>
            <h3 className={styles.features_card_heading}>{title}</h3>
            <p className='mb-6'>{body}</p>
        </motion.div>
    )
}

export default Card